# Legend of Elements — Reverse Engineering Project

## Overview
Systematic extraction and documentation of game data from Legend of Elements (LoE), an idle RPG by Joy Nice Games (same studio as Legend of Mushroom).

**Status**: Data collection phase — awaiting H5 web version extraction.

## Data Targets (Priority Order)
1. **Damage Formula & Stat System** — DILI, GDB, GDR, crit/focus/break, speed/GCD
2. **Item & Equipment Database** — equipment, relics, vessels, mounts, fate souls
3. **Gacha / Draw System** — pull rates, pity mechanics, banner data
4. **Spirit & Pet Data** — spirit roster, inheritance rates, pet unlock schedule
5. **Skill System** — all 3 classes, scaling values, hidden interactions
6. **Progression & Economy** — XP curves, tier requirements, idle rewards

## Project Structure
```
loe_reverse_engineering/     # Processed findings
  network/                   # API endpoints & payloads
  game_data/                 # Structured game data (JSON)
  h5_analysis/               # JS analysis results
  apk_analysis/              # APK static analysis (future)
raw_extractions/             # Raw captured data (user-provided)
  h5_sources/                # JS/config files from H5 web version
  har_captures/              # HAR network captures
  console_dumps/             # DevTools console output
scripts/                     # Analysis pipeline
```

## Quick Start
```bash
# 1. Place extracted files in raw_extractions/ subdirectories
# 2. Filter out image/video/font bloat:
python3 scripts/filter_extraction.py raw_extractions/h5_sources/

# 3. Parse HAR network captures:
python3 scripts/parse_har.py raw_extractions/har_captures/gameplay.har

# 4. Analyze JS source files:
python3 scripts/analyze_js.py raw_extractions/h5_sources/ --beautify

# 5. Extract and categorize game data configs:
python3 scripts/extract_game_data.py raw_extractions/ --formulas

# 6. Search everything for game keywords:
python3 scripts/search_keywords.py raw_extractions/
```

## Community Formulas (Unverified — Need Server Confirmation)
```
Final = Base_Damage × (1 + CritDmg) × (1 + FocusDmg) × (1 + BreakDmg) × GDB_Multiplier
GDR Multiplier = max(0.3, 1 + Attacker_GDB - Defender_GDR)
Cast_Time = Base_Cast_Time / (1 + Speed%)
```

## Confidence Levels
- **CONFIRMED** — verified from server/game data
- **LIKELY** — strong evidence from multiple sources
- **UNVERIFIED** — community claim only
