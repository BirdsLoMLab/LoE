#!/usr/bin/env python3
"""Extract and normalize game data from config files into structured JSON output."""

import json
import csv
import sys
import re
from pathlib import Path
from collections import defaultdict

OUTPUT_DIR = Path(__file__).parent.parent / 'loe_reverse_engineering' / 'game_data'

# Data category detection patterns
CATEGORY_PATTERNS = {
    'items': ['item', 'equip', 'weapon', 'armor', 'accessory', 'relic', 'gear'],
    'skills': ['skill', 'ability', 'talent', 'spell', 'move', 'technique'],
    'spirits': ['spirit', 'summon', 'companion', 'familiar'],
    'pets': ['pet', 'mount', 'ride'],
    'gacha': ['gacha', 'draw', 'banner', 'pool', 'summon', 'recruit', 'wish'],
    'stats': ['stat', 'attribute', 'property', 'param', 'formula', 'damage'],
    'progression': ['level', 'exp', 'tier', 'rank', 'stage', 'chapter', 'quest'],
    'monsters': ['monster', 'enemy', 'mob', 'boss', 'creature'],
    'shop': ['shop', 'store', 'price', 'cost', 'currency', 'exchange'],
}


def detect_category(filename, data):
    """Guess what category of game data this file contains."""
    name_lower = filename.lower()
    scores = defaultdict(int)

    # Check filename
    for category, patterns in CATEGORY_PATTERNS.items():
        for pattern in patterns:
            if pattern in name_lower:
                scores[category] += 10

    # Check data keys if dict
    if isinstance(data, dict):
        data_str = json.dumps(list(data.keys())[:50]).lower()
        for category, patterns in CATEGORY_PATTERNS.items():
            for pattern in patterns:
                if pattern in data_str:
                    scores[category] += 5

    # Check first few items if list of dicts
    if isinstance(data, list) and data and isinstance(data[0], dict):
        sample_str = json.dumps(list(data[0].keys())).lower()
        for category, patterns in CATEGORY_PATTERNS.items():
            for pattern in patterns:
                if pattern in sample_str:
                    scores[category] += 5

    if scores:
        return max(scores, key=scores.get)
    return 'uncategorized'


def parse_json_file(filepath):
    """Parse a JSON file and return structured data."""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
            data = json.load(f)
        return data
    except json.JSONDecodeError as e:
        print(f"  JSON parse error in {filepath}: {e}")
        return None


def parse_csv_file(filepath):
    """Parse a CSV file into list of dicts."""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
            # Detect delimiter
            sample = f.read(4096)
            f.seek(0)
            if '\t' in sample and ',' not in sample:
                delimiter = '\t'
            else:
                delimiter = ','
            reader = csv.DictReader(f, delimiter=delimiter)
            return list(reader)
    except Exception as e:
        print(f"  CSV parse error in {filepath}: {e}")
        return None


def analyze_data_structure(data, filepath):
    """Analyze data structure and provide a summary."""
    info = {
        'file': str(filepath),
        'type': type(data).__name__,
    }

    if isinstance(data, dict):
        info['key_count'] = len(data)
        info['keys'] = list(data.keys())[:30]
        # Check if it's a keyed collection (e.g., {"10001": {...}, "10002": {...}})
        sample_values = list(data.values())[:3]
        if sample_values and all(isinstance(v, dict) for v in sample_values):
            info['structure'] = 'keyed_collection'
            info['sample_keys'] = list(data.keys())[:5]
            info['item_fields'] = list(sample_values[0].keys()) if sample_values else []
            info['item_count'] = len(data)
    elif isinstance(data, list):
        info['item_count'] = len(data)
        if data and isinstance(data[0], dict):
            info['structure'] = 'list_of_objects'
            info['item_fields'] = list(data[0].keys())
            info['sample'] = data[0]
        elif data:
            info['structure'] = 'list'
            info['sample'] = data[:5]
    else:
        info['structure'] = 'scalar'
        info['value'] = str(data)[:200]

    return info


def process_directory(source_dir):
    """Process all data files in a directory."""
    source = Path(source_dir)
    if not source.exists():
        print(f"Error: Directory '{source_dir}' does not exist")
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Collect all parseable files
    json_files = list(source.rglob('*.json'))
    csv_files = list(source.rglob('*.csv'))
    print(f"Found {len(json_files)} JSON, {len(csv_files)} CSV files")

    all_data = {}
    catalog = []

    # Parse JSON files
    for filepath in json_files:
        rel = filepath.relative_to(source)
        print(f"  Processing: {rel}")
        data = parse_json_file(filepath)
        if data is None:
            continue

        category = detect_category(filepath.name, data)
        info = analyze_data_structure(data, rel)
        info['category'] = category
        catalog.append(info)

        # Save categorized data
        cat_key = f"{category}__{filepath.stem}"
        all_data[cat_key] = {
            'source': str(rel),
            'category': category,
            'data': data,
        }

    # Parse CSV files
    for filepath in csv_files:
        rel = filepath.relative_to(source)
        print(f"  Processing: {rel}")
        data = parse_csv_file(filepath)
        if data is None:
            continue

        category = detect_category(filepath.name, data)
        info = analyze_data_structure(data, rel)
        info['category'] = category
        catalog.append(info)

        cat_key = f"{category}__{filepath.stem}"
        all_data[cat_key] = {
            'source': str(rel),
            'category': category,
            'data': data,
        }

    # Output categorized data files
    by_category = defaultdict(list)
    for key, item in all_data.items():
        by_category[item['category']].append(item)

    for category, items in by_category.items():
        output_file = OUTPUT_DIR / f'{category}.json'
        combined = {}
        for item in items:
            source_name = Path(item['source']).stem
            combined[source_name] = item['data']

        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(combined, f, indent=2, ensure_ascii=False, default=str)
        print(f"  -> {output_file} ({len(items)} source files)")

    # Save catalog
    catalog_path = OUTPUT_DIR / 'data_catalog.json'
    with open(catalog_path, 'w', encoding='utf-8') as f:
        json.dump(catalog, f, indent=2, ensure_ascii=False, default=str)
    print(f"\nCatalog saved to {catalog_path}")
    print(f"Categories found: {', '.join(sorted(by_category.keys()))}")

    return catalog, by_category


def search_for_formulas(source_dir):
    """Search extracted data for potential game formulas."""
    source = Path(source_dir)
    formula_indicators = []

    for filepath in source.rglob('*'):
        if not filepath.is_file():
            continue
        if filepath.suffix.lower() not in ('.js', '.json', '.lua', '.txt', '.csv'):
            continue

        try:
            with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
                content = f.read()
        except Exception:
            continue

        # Look for formula-like patterns
        patterns = [
            (r'damage\s*[=:]\s*[^;,\n]{10,80}', 'damage_formula'),
            (r'crit\w*\s*[=:]\s*[^;,\n]{10,80}', 'crit_formula'),
            (r'(?:base|final|total)\s*(?:atk|attack|dmg|damage)\s*[=:*+\-/]', 'stat_calc'),
            (r'pity\w*\s*[=:]\s*[^;,\n]{5,80}', 'pity_mechanic'),
            (r'(?:rate|prob|chance)\s*[=:]\s*[\d.]+', 'probability'),
            (r'Math\.\w+\([^)]*(?:damage|atk|def|hp|speed)', 'math_formula'),
        ]

        for pattern, label in patterns:
            for match in re.finditer(pattern, content, re.IGNORECASE):
                line_start = content.rfind('\n', 0, match.start()) + 1
                line_num = content[:match.start()].count('\n') + 1
                formula_indicators.append({
                    'type': label,
                    'file': str(filepath.relative_to(source)),
                    'line': line_num,
                    'match': match.group()[:200],
                })

    if formula_indicators:
        output_path = OUTPUT_DIR / 'formula_candidates.json'
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(formula_indicators, f, indent=2, ensure_ascii=False)
        print(f"\nFound {len(formula_indicators)} potential formula references")
        print(f"Saved to {output_path}")

    return formula_indicators


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Extract and categorize LoE game data')
    parser.add_argument('directory', nargs='?', help='Directory with data files')
    parser.add_argument('--formulas', action='store_true', help='Also search for formula patterns')
    args = parser.parse_args()

    source = args.directory or str(Path(__file__).parent.parent / 'raw_extractions')
    catalog, categories = process_directory(source)

    if args.formulas:
        search_for_formulas(source)
