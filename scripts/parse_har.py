#!/usr/bin/env python3
"""Parse HAR files to extract API endpoints and response payloads."""

import json
import os
import sys
import re
from pathlib import Path
from urllib.parse import urlparse
from collections import defaultdict

# Skip these content types
SKIP_MIME_TYPES = {
    'image/', 'font/', 'audio/', 'video/',
    'application/font', 'application/x-font',
}

# Interesting content types to capture payloads for
CAPTURE_MIME_TYPES = {
    'application/json', 'text/json',
    'application/javascript', 'text/javascript',
    'application/protobuf', 'application/x-protobuf',
    'application/octet-stream',
    'text/plain', 'text/html', 'text/xml',
    'application/xml',
}

OUTPUT_DIR = Path(__file__).parent.parent / 'loe_reverse_engineering'
PAYLOAD_DIR = OUTPUT_DIR / 'network' / 'sample_payloads'


def parse_har(har_path):
    """Parse a HAR file and extract API data."""
    print(f"Parsing: {har_path}")
    with open(har_path, 'r', encoding='utf-8', errors='replace') as f:
        har = json.load(f)

    entries = har.get('log', {}).get('entries', [])
    print(f"Found {len(entries)} entries")

    endpoints = []
    api_calls = defaultdict(list)

    for i, entry in enumerate(entries):
        req = entry.get('request', {})
        resp = entry.get('response', {})

        url = req.get('url', '')
        method = req.get('method', '')
        status = resp.get('status', 0)
        mime = resp.get('content', {}).get('mimeType', '')

        # Skip bloat types
        if any(mime.startswith(skip) for skip in SKIP_MIME_TYPES):
            continue

        parsed = urlparse(url)
        path = parsed.path
        host = parsed.hostname or ''

        # Extract request body
        req_body = None
        if req.get('postData', {}).get('text'):
            req_body = req['postData']['text']
            try:
                req_body = json.loads(req_body)
            except (json.JSONDecodeError, TypeError):
                pass

        # Extract response body
        resp_body = None
        resp_content = resp.get('content', {})
        if resp_content.get('text'):
            resp_body = resp_content['text']
            try:
                resp_body = json.loads(resp_body)
            except (json.JSONDecodeError, TypeError):
                pass

        endpoint = {
            'index': i,
            'method': method,
            'url': url,
            'host': host,
            'path': path,
            'status': status,
            'mime': mime,
            'req_size': len(str(req_body)) if req_body else 0,
            'resp_size': resp_content.get('size', 0),
            'has_request_body': req_body is not None,
            'has_response_body': resp_body is not None,
        }
        endpoints.append(endpoint)

        # Group by API path pattern
        api_key = f"{method} {host}{path}"
        api_calls[api_key].append({
            'entry_index': i,
            'status': status,
            'request_body': req_body,
            'response_body': resp_body,
        })

    return endpoints, api_calls


def save_payloads(api_calls):
    """Save API payloads as individual JSON files."""
    PAYLOAD_DIR.mkdir(parents=True, exist_ok=True)

    saved = 0
    for api_key, calls in api_calls.items():
        # Create a safe filename
        safe_name = re.sub(r'[^\w\-.]', '_', api_key)[:100]
        filepath = PAYLOAD_DIR / f"{safe_name}.json"

        # Only save if there's actual payload data
        has_data = any(c.get('request_body') or c.get('response_body') for c in calls)
        if not has_data:
            continue

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump({
                'api': api_key,
                'call_count': len(calls),
                'calls': calls[:10],  # Cap at 10 examples per endpoint
            }, f, indent=2, ensure_ascii=False, default=str)
        saved += 1

    print(f"Saved {saved} payload files to {PAYLOAD_DIR}")


def generate_endpoints_report(endpoints, api_calls):
    """Generate markdown report of discovered endpoints."""
    report_path = OUTPUT_DIR / 'network' / 'api_endpoints.md'
    report_path.parent.mkdir(parents=True, exist_ok=True)

    # Group endpoints by host
    by_host = defaultdict(list)
    for ep in endpoints:
        by_host[ep['host']].append(ep)

    lines = [
        '# LoE API Endpoints',
        '',
        f'Total requests captured: {len(endpoints)}',
        f'Unique API patterns: {len(api_calls)}',
        '',
    ]

    for host in sorted(by_host.keys()):
        host_eps = by_host[host]
        lines.append(f'## Host: `{host}`')
        lines.append('')
        lines.append(f'| Method | Path | Status | MIME | Resp Size |')
        lines.append(f'|--------|------|--------|------|-----------|')

        # Deduplicate by path
        seen_paths = set()
        for ep in host_eps:
            key = f"{ep['method']} {ep['path']}"
            if key in seen_paths:
                continue
            seen_paths.add(key)
            path_display = ep['path'][:60] + ('...' if len(ep['path']) > 60 else '')
            lines.append(
                f"| {ep['method']} | `{path_display}` | {ep['status']} "
                f"| {ep['mime'][:30]} | {ep['resp_size']} |"
            )
        lines.append('')

    # Highlight interesting endpoints
    lines.append('## Potentially Interesting Endpoints')
    lines.append('')
    game_keywords = [
        'api', 'game', 'battle', 'combat', 'fight',
        'gacha', 'draw', 'pull', 'summon',
        'equip', 'item', 'inventory', 'bag',
        'skill', 'talent', 'ability',
        'spirit', 'pet', 'companion',
        'shop', 'store', 'purchase',
        'login', 'auth', 'token', 'session',
        'config', 'setting', 'data',
        'rank', 'leader', 'arena',
        'quest', 'mission', 'task',
        'chat', 'guild', 'social',
        'reward', 'idle', 'offline',
    ]

    for api_key, calls in sorted(api_calls.items()):
        url_lower = api_key.lower()
        matched = [kw for kw in game_keywords if kw in url_lower]
        if matched:
            lines.append(f'- **`{api_key}`** (called {len(calls)}x) — keywords: {", ".join(matched)}')

    with open(report_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print(f"Report saved to {report_path}")


def analyze_websocket(har_path):
    """Check for WebSocket entries in HAR."""
    with open(har_path, 'r', encoding='utf-8', errors='replace') as f:
        har = json.load(f)

    ws_entries = []
    for entry in har.get('log', {}).get('entries', []):
        url = entry.get('request', {}).get('url', '')
        if url.startswith('wss://') or url.startswith('ws://'):
            ws_entries.append({
                'url': url,
                'messages': entry.get('_webSocketMessages', []),
            })

    if ws_entries:
        print(f"\nFound {len(ws_entries)} WebSocket connections:")
        for ws in ws_entries:
            print(f"  {ws['url']} ({len(ws['messages'])} messages)")
        # Save WS data
        ws_path = OUTPUT_DIR / 'network' / 'websocket_data.json'
        with open(ws_path, 'w', encoding='utf-8') as f:
            json.dump(ws_entries, f, indent=2, default=str)
        print(f"WebSocket data saved to {ws_path}")
    else:
        print("\nNo WebSocket connections found in HAR")


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Parse HAR files for LoE API analysis')
    parser.add_argument('har_file', nargs='?', help='Path to HAR file')
    parser.add_argument('--dir', help='Directory containing HAR files')
    args = parser.parse_args()

    har_files = []
    if args.har_file:
        har_files = [args.har_file]
    elif args.dir:
        har_files = list(Path(args.dir).glob('*.har'))
    else:
        # Default location
        default_dir = Path(__file__).parent.parent / 'raw_extractions' / 'har_captures'
        har_files = list(default_dir.glob('*.har'))
        if not har_files:
            print(f"No HAR files found in {default_dir}")
            print("Usage: python parse_har.py <file.har> or --dir <directory>")
            sys.exit(1)

    all_endpoints = []
    all_api_calls = defaultdict(list)

    for har_file in har_files:
        endpoints, api_calls = parse_har(har_file)
        all_endpoints.extend(endpoints)
        for k, v in api_calls.items():
            all_api_calls[k].extend(v)
        analyze_websocket(str(har_file))

    generate_endpoints_report(all_endpoints, all_api_calls)
    save_payloads(all_api_calls)
    print(f"\nDone. Processed {len(har_files)} HAR file(s), {len(all_endpoints)} total requests.")
