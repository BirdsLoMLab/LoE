#!/usr/bin/env python3
"""Search all extracted files for game-specific keywords with context."""

import re
import sys
import json
from pathlib import Path
from collections import defaultdict

# Comprehensive keyword list from the LoE RE prompt
KEYWORDS = {
    'stat_identifiers': [
        'DILI', 'GDB', 'GDR', 'crit_rate', 'focus_rate', 'break_rate',
        'global_damage', 'damage_bonus', 'damage_reduction',
        'haste', 'speed', 'cast_time', 'cooldown', 'gcd',
    ],
    'skill_names': [
        'empyrean', 'vow_of_thunder', 'divining_blade', 'aureate',
        'core_skill', 'active_skill', 'passive_skill', 'sword_move',
        'refine_stack', 'channeling', 'energy_cost',
    ],
    'gacha_terms': [
        'gacha', 'draw', 'pity', 'magite', 'banner', 'pull_rate',
        'limited', 'SSR', 'SR', 'probability', 'drop_rate',
    ],
    'server_infra': [
        'joynetgame', 'zzsjus', 'login', 'auth', 'token',
        'api', 'endpoint', 'wss://', 'socket', 'protobuf',
    ],
    'class_system': [
        'swordsman', 'mage', 'priest', 'class_id',
        'wind', 'fire', 'thunder',
    ],
    'progression_tiers': [
        'adept', 'disciple', 'master', 'grandmaster', 'ascendant', 'exalted',
    ],
    'equipment_system': [
        'relic', 'vessel', 'mount', 'fate_soul',
        'refine', 'affinity', 'set_bonus',
    ],
    'economy': [
        'magite', 'gold', 'diamond', 'gem', 'crystal',
        'demon_fruit', 'push_shop', 'idle_reward',
    ],
}

# File extensions to search
SEARCHABLE_EXTENSIONS = {
    '.js', '.json', '.csv', '.xml', '.html', '.css',
    '.txt', '.lua', '.conf', '.cfg', '.yaml', '.yml',
    '.map', '.log', '.dat', '.ts', '.mjs',
}


def search_files(source_dir, categories=None, context_lines=2):
    """Search all files for keywords."""
    source = Path(source_dir)
    if not source.exists():
        print(f"Error: '{source_dir}' does not exist")
        sys.exit(1)

    if categories:
        search_keywords = {k: v for k, v in KEYWORDS.items() if k in categories}
    else:
        search_keywords = KEYWORDS

    results = defaultdict(lambda: defaultdict(list))
    files_searched = 0

    for filepath in sorted(source.rglob('*')):
        if not filepath.is_file():
            continue
        if filepath.suffix.lower() not in SEARCHABLE_EXTENSIONS:
            continue
        # Skip very large files (>10MB)
        if filepath.stat().st_size > 10_000_000:
            print(f"  Skipping large file: {filepath.name} ({filepath.stat().st_size:,}B)")
            continue

        try:
            with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
                lines = f.readlines()
        except Exception:
            continue

        files_searched += 1
        rel_path = filepath.relative_to(source)

        for category, keywords in search_keywords.items():
            for kw in keywords:
                pattern = re.compile(re.escape(kw), re.IGNORECASE)
                for line_num, line in enumerate(lines):
                    if pattern.search(line):
                        # Get context
                        start = max(0, line_num - context_lines)
                        end = min(len(lines), line_num + context_lines + 1)
                        context = ''.join(lines[start:end]).rstrip()

                        results[category][kw].append({
                            'file': str(rel_path),
                            'line': line_num + 1,
                            'match_line': line.strip()[:200],
                            'context': context[:500],
                        })

    return results, files_searched


def print_results(results, files_searched):
    """Print search results to console."""
    total_matches = sum(
        len(matches)
        for cat_results in results.values()
        for matches in cat_results.values()
    )

    print(f"\n{'=' * 70}")
    print(f"Keyword Search Results — {files_searched} files searched, {total_matches} total matches")
    print(f"{'=' * 70}")

    for category in sorted(results.keys()):
        cat_results = results[category]
        cat_total = sum(len(m) for m in cat_results.values())
        print(f"\n## {category.upper()} ({cat_total} matches)")
        print(f"{'-' * 50}")

        for kw in sorted(cat_results.keys()):
            matches = cat_results[kw]
            print(f"\n  '{kw}' — {len(matches)} occurrences")
            # Show first 5 unique files
            seen_files = set()
            for m in matches:
                if m['file'] not in seen_files and len(seen_files) < 5:
                    seen_files.add(m['file'])
                    print(f"    {m['file']}:{m['line']}")
                    print(f"      {m['match_line'][:120]}")


def save_results(results, output_path):
    """Save results to JSON."""
    # Convert defaultdict to regular dict for JSON
    output = {}
    for category, cat_results in results.items():
        output[category] = {}
        for kw, matches in cat_results.items():
            output[category][kw] = matches

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    print(f"\nFull results saved to {output_path}")


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Search extracted LoE files for game keywords')
    parser.add_argument('directory', nargs='?', help='Directory to search')
    parser.add_argument('--category', '-c', nargs='+', choices=list(KEYWORDS.keys()),
                        help='Only search specific categories')
    parser.add_argument('--output', '-o', help='Output JSON file path')
    parser.add_argument('--context', type=int, default=2, help='Context lines around matches')
    args = parser.parse_args()

    source = args.directory or str(Path(__file__).parent.parent / 'raw_extractions')
    results, files_searched = search_files(source, args.category, args.context)
    print_results(results, files_searched)

    output_path = args.output or str(
        Path(__file__).parent.parent / 'loe_reverse_engineering' / 'keyword_search_results.json'
    )
    save_results(results, output_path)
