#!/usr/bin/env python3
"""Analyze extracted JS files for game mechanics, configs, and data structures."""

import os
import re
import sys
import json
import subprocess
from pathlib import Path
from collections import defaultdict

OUTPUT_DIR = Path(__file__).parent.parent / 'loe_reverse_engineering' / 'h5_analysis'

# Keyword categories for searching game mechanics
KEYWORD_CATEGORIES = {
    'stat_system': [
        'DILI', 'GDB', 'GDR', 'crit_rate', 'focus_rate', 'break_rate',
        'global_damage', 'damage_bonus', 'damage_reduction',
        'haste', 'cast_time', 'cooldown', 'gcd', 'speed',
        'attack', 'defense', 'hp', 'health', 'mana', 'energy',
        'crit_dmg', 'crit_damage', 'penetration', 'resistance',
        'accuracy', 'evasion', 'dodge', 'block',
    ],
    'skill_system': [
        'empyrean', 'vow_of_thunder', 'divining_blade', 'aureate',
        'core_skill', 'active_skill', 'passive_skill', 'sword_move',
        'refine_stack', 'channeling', 'energy_cost',
        'skill_level', 'skill_upgrade', 'skill_id',
    ],
    'gacha_draw': [
        'gacha', 'draw', 'pity', 'magite', 'banner', 'pull_rate',
        'limited', 'SSR', 'probability', 'drop_rate', 'guarantee',
        'wish', 'summon', 'recruit', 'pity_count',
    ],
    'class_system': [
        'swordsman', 'mage', 'priest', 'class_id',
        'wind', 'fire', 'thunder', 'element_type',
    ],
    'progression': [
        'adept', 'disciple', 'master', 'grandmaster', 'ascendant', 'exalted',
        'level_up', 'exp_curve', 'tier_promotion', 'breakthrough',
    ],
    'spirits_pets': [
        'spirit', 'pet', 'companion', 'demon_fruit',
        'star_level', 'inheritance', 'advancement',
    ],
    'equipment': [
        'equip', 'relic', 'vessel', 'mount', 'fate_soul',
        'refine', 'enhance', 'upgrade', 'quality',
        'set_bonus', 'affinity',
    ],
    'server_api': [
        'api', 'endpoint', 'wss://', 'socket',
        'joynetgame', 'zzsjus', 'login', 'auth', 'token',
        'protobuf', 'proto', 'websocket',
    ],
    'formulas': [
        'formula', 'calculate', 'compute', 'multiplier',
        'base_damage', 'final_damage', 'damage_calc',
        'Math.floor', 'Math.ceil', 'Math.round', 'Math.max', 'Math.min',
    ],
}


def beautify_js(filepath, output_path=None):
    """Beautify a JS file using prettier."""
    if output_path is None:
        output_path = filepath
    try:
        result = subprocess.run(
            ['prettier', '--parser', 'babel', '--write', str(filepath)],
            capture_output=True, text=True, timeout=30,
        )
        if result.returncode != 0:
            # Try with meriyah parser for more lenient parsing
            subprocess.run(
                ['prettier', '--parser', 'meriyah', '--write', str(filepath)],
                capture_output=True, text=True, timeout=30,
            )
    except (subprocess.TimeoutExpired, FileNotFoundError):
        pass  # Skip beautification if prettier unavailable or times out


def search_keywords(filepath, content=None):
    """Search a file for game-related keywords."""
    if content is None:
        try:
            with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
                content = f.read()
        except Exception:
            return {}

    results = {}
    lines = content.split('\n')

    for category, keywords in KEYWORD_CATEGORIES.items():
        matches = []
        for kw in keywords:
            pattern = re.compile(re.escape(kw), re.IGNORECASE)
            for line_num, line in enumerate(lines, 1):
                if pattern.search(line):
                    # Get context: 2 lines before and after
                    start = max(0, line_num - 3)
                    end = min(len(lines), line_num + 2)
                    context = lines[start:end]
                    matches.append({
                        'keyword': kw,
                        'line': line_num,
                        'context': '\n'.join(context),
                    })

        if matches:
            results[category] = matches

    return results


def extract_config_objects(content, filepath):
    """Try to extract JSON-like config objects from JS source."""
    configs = []

    # Look for large object literals that might be configs
    # Pattern: variable = { ... } with multiple keys
    patterns = [
        r'(?:const|let|var|exports)\s*\.?\s*(\w+)\s*=\s*(\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})',
        r'module\.exports\s*=\s*(\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})',
    ]

    for pattern in patterns:
        for match in re.finditer(pattern, content):
            obj_str = match.group(match.lastindex)
            if len(obj_str) > 200:  # Only interesting if it's substantial
                # Try to parse as JSON (won't always work for JS objects)
                try:
                    # Basic JS -> JSON conversion attempts
                    json_attempt = obj_str
                    json_attempt = re.sub(r'(\w+):', r'"\1":', json_attempt)
                    json_attempt = json_attempt.replace("'", '"')
                    json_attempt = re.sub(r',\s*}', '}', json_attempt)
                    parsed = json.loads(json_attempt)
                    configs.append({
                        'name': match.group(1) if match.lastindex > 1 else 'exports',
                        'file': str(filepath),
                        'data': parsed,
                    })
                except (json.JSONDecodeError, IndexError):
                    configs.append({
                        'name': match.group(1) if match.lastindex > 1 else 'exports',
                        'file': str(filepath),
                        'raw_length': len(obj_str),
                        'preview': obj_str[:500],
                    })

    return configs


def analyze_directory(source_dir, beautify=False):
    """Analyze all JS files in a directory."""
    source = Path(source_dir)
    if not source.exists():
        print(f"Error: Directory '{source_dir}' does not exist")
        sys.exit(1)

    js_files = list(source.rglob('*.js'))
    json_files = list(source.rglob('*.json'))
    print(f"Found {len(js_files)} JS files and {len(json_files)} JSON files")

    all_keyword_results = defaultdict(list)
    all_configs = []
    file_summaries = []

    for js_file in js_files:
        rel_path = js_file.relative_to(source)
        size = js_file.stat().st_size
        print(f"  Analyzing: {rel_path} ({size:,} bytes)")

        # Optionally beautify
        if beautify:
            beautify_js(js_file)

        # Read content
        try:
            with open(js_file, 'r', encoding='utf-8', errors='replace') as f:
                content = f.read()
        except Exception as e:
            print(f"    Error reading: {e}")
            continue

        # Search keywords
        keyword_results = search_keywords(js_file, content)
        for category, matches in keyword_results.items():
            for match in matches:
                match['file'] = str(rel_path)
            all_keyword_results[category].extend(matches)

        # Extract configs
        configs = extract_config_objects(content, rel_path)
        all_configs.extend(configs)

        # File summary
        file_summaries.append({
            'path': str(rel_path),
            'size': size,
            'keyword_hits': {cat: len(matches) for cat, matches in keyword_results.items()},
            'config_objects': len(configs),
        })

    # Also scan JSON files directly
    for json_file in json_files:
        rel_path = json_file.relative_to(source)
        size = json_file.stat().st_size
        print(f"  JSON file: {rel_path} ({size:,} bytes)")

        try:
            with open(json_file, 'r', encoding='utf-8', errors='replace') as f:
                data = json.load(f)
            # Save to config_dumps if it looks like game data
            if isinstance(data, (dict, list)) and size > 100:
                dump_path = OUTPUT_DIR / 'config_dumps' / rel_path.name
                dump_path.parent.mkdir(parents=True, exist_ok=True)
                with open(dump_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
        except (json.JSONDecodeError, Exception):
            pass

    # Generate report
    generate_report(file_summaries, all_keyword_results, all_configs)
    return all_keyword_results, all_configs


def generate_report(file_summaries, keyword_results, configs):
    """Generate the JS analysis report."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    report_path = OUTPUT_DIR / 'js_analysis.md'

    lines = [
        '# LoE H5 JavaScript Analysis',
        '',
        f'Files analyzed: {len(file_summaries)}',
        '',
    ]

    # Files ranked by keyword hits
    lines.append('## Files by Relevance')
    lines.append('')
    ranked = sorted(file_summaries, key=lambda x: sum(x['keyword_hits'].values()), reverse=True)
    for fs in ranked[:30]:  # Top 30
        total_hits = sum(fs['keyword_hits'].values())
        if total_hits == 0:
            break
        categories = ', '.join(f"{cat}:{n}" for cat, n in fs['keyword_hits'].items() if n > 0)
        lines.append(f'- **`{fs["path"]}`** ({fs["size"]:,}B) — {total_hits} hits [{categories}]')
    lines.append('')

    # Keyword findings by category
    lines.append('## Keyword Findings')
    lines.append('')
    for category in sorted(keyword_results.keys()):
        matches = keyword_results[category]
        lines.append(f'### {category} ({len(matches)} matches)')
        lines.append('')

        # Deduplicate by keyword, show top matches
        by_keyword = defaultdict(list)
        for m in matches:
            by_keyword[m['keyword']].append(m)

        for kw in sorted(by_keyword.keys()):
            kw_matches = by_keyword[kw]
            lines.append(f'**`{kw}`** — {len(kw_matches)} occurrences')
            # Show first 3 unique contexts
            seen_contexts = set()
            shown = 0
            for m in kw_matches:
                ctx_key = m['context'][:100]
                if ctx_key not in seen_contexts and shown < 3:
                    seen_contexts.add(ctx_key)
                    lines.append(f'  - `{m["file"]}:{m["line"]}`')
                    lines.append(f'    ```')
                    for ctx_line in m['context'].split('\n')[:5]:
                        lines.append(f'    {ctx_line}')
                    lines.append(f'    ```')
                    shown += 1
            lines.append('')

    # Config objects found
    if configs:
        lines.append('## Extracted Config Objects')
        lines.append('')
        for cfg in configs[:20]:
            lines.append(f'- **`{cfg.get("name", "unknown")}`** in `{cfg["file"]}`')
            if 'data' in cfg:
                preview = json.dumps(cfg['data'], indent=2)[:300]
                lines.append(f'  ```json\n  {preview}\n  ```')
            elif 'preview' in cfg:
                lines.append(f'  ({cfg["raw_length"]:,} bytes)')
                lines.append(f'  ```\n  {cfg["preview"][:200]}\n  ```')
            lines.append('')

    with open(report_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print(f"\nReport saved to {report_path}")


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Analyze extracted JS files for LoE game data')
    parser.add_argument('directory', nargs='?', help='Directory with JS files')
    parser.add_argument('--beautify', action='store_true', help='Run prettier on JS files first')
    args = parser.parse_args()

    source = args.directory or str(Path(__file__).parent.parent / 'raw_extractions' / 'h5_sources')
    analyze_directory(source, beautify=args.beautify)
