#!/usr/bin/env python3
"""Filter extracted files to remove image/video/audio/font bloat."""

import os
import sys
import shutil
from pathlib import Path
from collections import defaultdict

# Extensions to remove (bloat)
BLOAT_EXTENSIONS = {
    # Images
    '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.ico', '.tga',
    '.psd', '.dds', '.ktx', '.pvr', '.pkm',
    # Video
    '.mp4', '.webm', '.avi', '.mov', '.mkv', '.flv',
    # Audio
    '.mp3', '.ogg', '.wav', '.aac', '.m4a', '.flac', '.wma',
    # Fonts
    '.woff', '.woff2', '.ttf', '.eot', '.otf',
    # Spine/animation assets (usually large binary)
    '.atlas', '.skel',
}

# Extensions to keep (analysis targets)
KEEP_EXTENSIONS = {
    '.js', '.json', '.csv', '.xml', '.proto', '.html', '.css',
    '.map', '.txt', '.dat', '.bin', '.lua', '.conf', '.cfg',
    '.yaml', '.yml', '.plist', '.pb', '.ts', '.mjs', '.cjs',
}


def filter_directory(source_dir, dry_run=False):
    """Remove bloat files from source directory."""
    source = Path(source_dir)
    if not source.exists():
        print(f"Error: Directory '{source_dir}' does not exist")
        sys.exit(1)

    stats = defaultdict(lambda: {'count': 0, 'size': 0})
    total_removed = 0
    total_saved = 0
    kept_files = []

    for filepath in sorted(source.rglob('*')):
        if not filepath.is_file():
            continue

        ext = filepath.suffix.lower()
        size = filepath.stat().st_size

        if ext in BLOAT_EXTENSIONS:
            stats[ext]['count'] += 1
            stats[ext]['size'] += size
            total_removed += size
            if not dry_run:
                filepath.unlink()
        else:
            kept_files.append(filepath)
            total_saved += size

    # Print report
    print(f"\n{'=' * 60}")
    print(f"Filter Report: {source_dir}")
    print(f"{'=' * 60}")

    if stats:
        print(f"\n{'Removed:':}")
        print(f"  {'Extension':<12} {'Count':>6} {'Size':>12}")
        print(f"  {'-'*12} {'-'*6} {'-'*12}")
        for ext in sorted(stats.keys()):
            s = stats[ext]
            print(f"  {ext:<12} {s['count']:>6} {format_size(s['size']):>12}")
        print(f"\n  Total removed: {format_size(total_removed)}")
    else:
        print("\n  No bloat files found.")

    print(f"\n  Files kept: {len(kept_files)} ({format_size(total_saved)})")

    if dry_run:
        print(f"\n  [DRY RUN - no files were deleted]")

    # List kept files by extension
    kept_by_ext = defaultdict(int)
    for f in kept_files:
        kept_by_ext[f.suffix.lower()] += 1
    print(f"\n  Kept file types:")
    for ext in sorted(kept_by_ext.keys()):
        print(f"    {ext or '(no ext)':<12} {kept_by_ext[ext]:>6}")

    return kept_files


def format_size(size_bytes):
    """Format byte size to human-readable."""
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size_bytes < 1024:
            return f"{size_bytes:.1f} {unit}"
        size_bytes /= 1024
    return f"{size_bytes:.1f} TB"


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Filter bloat files from extracted game data')
    parser.add_argument('directory', help='Directory to filter')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be removed without deleting')
    args = parser.parse_args()

    filter_directory(args.directory, dry_run=args.dry_run)
