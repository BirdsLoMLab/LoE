# Legend of Elements — Reverse Engineering Project

## Overview
Systematic reverse engineering of game data from Legend of Elements (LoE), an idle RPG by Joy Nice Games.

**Status**: Active extraction — H5 web client bundle analyzed.

## Data Sources (Code-Verified Only)
All findings below are extracted from the actual game client code. No community guides, wikis, or player speculation.

### Primary Source
- **Bundle:** `bundle-ac7a6.js` — 17MB minified (23MB beautified, 426K lines)
- **Framework:** Laya Engine + FairyGUI
- **Architecture:** ECS (Entity Component System), WebSocket + protobuf serialization
- **CDN:** `sydh-cdnres.joyagegames.com/EN/stable/mix_wx_pangu/common/`

### Extracted Data
1. **Complete stat enum** — `_NumericType` class with 150+ stat IDs (L127017)
2. **Complete damage formula** — `calcDamageNew()` / `onColliderIn()` (L413500)
3. **Protobuf definitions** — 40K lines of client-server protocol
4. **Config table references** — structure definitions for all game data tables
5. **API endpoints & URLs** — CDN, payment, analytics, dev server addresses

## Project Structure
```
loe_reverse_engineering/     # Processed findings (code-verified only)
  network/                   # API endpoints & protocol
  game_data/                 # Extracted game mechanics data
raw_extractions/             # Raw captured data
  js_fragments/              # 202 code fragments from bundle (200 lines each)
  embedded_data/             # Protobuf defs, config tables, data structures
  configs/                   # Engine config, manifest
  h5_sources/                # Original H5 web client files
  har_captures/              # HAR network captures
  console_dumps/             # DevTools console output
scripts/                     # Analysis pipeline
```

## Key Findings
- Combat runs client-side in `calcDamageNew()` — full damage formula extracted
- 150+ stats with 5-tier scaling: Base → Add → Pct → FinalAdd → FinalPct
- "Focus" = Crit2 (second crit system), "Break" = POLING (破灵)
- DILI = low-HP damage reduction (not penetration), GDB/GDR 0.3 floor confirmed
- Physical/Magic split for ATK, DEF, Hit, Block, Precision
- 10 action types with source-specific damage bonuses
- Config tables loaded from CDN at runtime (not embedded in client)
