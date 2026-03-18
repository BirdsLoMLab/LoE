# LoE Local Extraction Prompt

**Copy everything below the line and paste it into a local Claude Code session.**

---

I need you to analyze captured web game files from Legend of Elements (LoE) and produce structured output that I can push to a GitHub repo. The files are too large for GitHub's 25 MB limit, so you need to extract only the relevant data.

## File Locations

My captured files are in my Downloads/loe folder. Look for:
- `elementsh5.joynetgame.com.zip` (372 MB) — extract this if not already done
- `elementsh5.joynetgame.com/` folder — saved page resources
- `elementsh5.joynetgameNoNetData/` folder — saved page without network data
- `elementsh5.joynetgame.com-1773799646895.log` (23 KB) — console log
- Any `.har` files (may be 0 KB / empty — skip those)

## What This Game Is

Legend of Elements is an idle RPG H5 web game by Joy Nice Games (same studio as Legend of Mushroom). The game runs at `elementsh5.joynetgame.com`. From console probing we know:
- The entire game is bundled in **`bundle-ac7a6.js`** — this is THE most important file
- No global game engine objects (cc, Vue, Laya, egret) — everything is inside the bundle
- localStorage contains player/server IDs in format `serverid_platform_playerid` (e.g., `1228_1_6743244`)
- It's an overseas H5 SDK game with Huawei event logging

## Step 1: Find and inventory all files

Scan all the folders/zip and produce a file inventory. Catalog every file with its path, size, and extension. Save as `loe_extracted/file_inventory.json`.

## Step 2: Delete bloat, keep analysis targets

Delete or ignore files with these extensions (images, audio, video, fonts, spine assets):
```
.png .jpg .jpeg .gif .webp .svg .bmp .ico .tga .psd .dds .ktx .pvr .pkm
.mp4 .webm .avi .mov .mkv .flv
.mp3 .ogg .wav .aac .m4a .flac .wma
.woff .woff2 .ttf .eot .otf
.atlas .skel
```

Keep these (analysis targets):
```
.js .json .csv .xml .proto .html .css
.map .txt .dat .bin .lua .conf .cfg
.yaml .yml .plist .pb .ts .mjs .cjs
```

## Step 3: Analyze `bundle-ac7a6.js`

This is the main game bundle and contains ALL game logic. It's likely 5-20+ MB of minified JavaScript. Do the following:

### 3a. Beautify it
Use prettier (`npx prettier --parser babel`) or any available JS beautifier. Save the beautified version.

### 3b. Search for game mechanic keywords
Search the beautified bundle for these keywords (case-insensitive). For each match, extract the line number and 5 lines of context before and after.

**Stat System Keywords:**
```
DILI, GDB, GDR, crit_rate, focus_rate, break_rate, global_damage, damage_bonus,
damage_reduction, haste, cast_time, cooldown, gcd, speed, attack, defense, hp,
health, mana, energy, crit_dmg, crit_damage, penetration, resistance, accuracy,
evasion, dodge, block
```

**Skill System Keywords:**
```
empyrean, vow_of_thunder, divining_blade, aureate, core_skill, active_skill,
passive_skill, sword_move, refine_stack, channeling, energy_cost, skill_level,
skill_upgrade, skill_id
```

**Gacha/Draw Keywords:**
```
gacha, draw, pity, magite, banner, pull_rate, limited, SSR, SR, probability,
drop_rate, guarantee, wish, summon, recruit, pity_count
```

**Class System Keywords:**
```
swordsman, mage, priest, class_id, wind, fire, thunder, element_type
```

**Progression Keywords:**
```
adept, disciple, master, grandmaster, ascendant, exalted, level_up, exp_curve,
tier_promotion, breakthrough
```

**Spirits/Pets Keywords:**
```
spirit, pet, companion, demon_fruit, star_level, inheritance, advancement
```

**Equipment Keywords:**
```
equip, relic, vessel, mount, fate_soul, refine, enhance, upgrade, quality,
set_bonus, affinity
```

**Server/API Keywords:**
```
api, endpoint, wss://, ws://, socket, joynetgame, zzsjus, login, auth, token,
protobuf, proto, websocket, http
```

**Formula Keywords:**
```
formula, calculate, compute, multiplier, base_damage, final_damage, damage_calc,
Math.floor, Math.ceil, Math.round, Math.max, Math.min
```

**Economy Keywords:**
```
magite, gold, diamond, gem, crystal, demon_fruit, push_shop, idle_reward, currency
```

### 3c. Extract interesting code fragments
For each keyword hit, extract the surrounding function or code block (up to 200 lines around each hit). Don't duplicate — if multiple keywords hit the same function, merge them. Save these fragments to individual files in `loe_extracted/js_fragments/`, named by their apparent purpose (e.g., `damage_calculation.js`, `gacha_system.js`, `stat_definitions.js`).

### 3d. Look for embedded data structures
Search the bundle for:
- Large object literals (config tables, stat tables, item databases)
- String arrays that look like enum definitions
- Numeric arrays that look like rate tables or stat curves
- URL strings (API endpoints, WebSocket addresses, CDN paths)
- Protobuf-related code (message definitions, serialization)

Extract and save these to `loe_extracted/embedded_data/`.

## Step 4: Analyze all JSON/config files

For every `.json` file found in the captured data:
1. Parse it and pretty-print it
2. Categorize it (items, skills, stats, gacha, progression, monsters, shop, UI, unknown)
3. Save each one individually to `loe_extracted/configs/` with its original name
4. If any single JSON file is over 20 MB, split it into logical chunks

## Step 5: Check for source maps

Look for any `.map` or `.js.map` files. If found, these are EXTREMELY valuable — they contain the original unminified source code. Use them to reconstruct original source files. Save reconstructed sources to `loe_extracted/source_maps/`.

## Step 6: Produce summary

Write `loe_extracted/summary.md` containing:
- Total files found, kept, deleted
- Size of `bundle-ac7a6.js` and whether beautification succeeded
- Number of keyword hits per category
- List of all discovered JSON config files with brief descriptions
- Any API endpoints or WebSocket URLs found
- Any protobuf definitions found
- Any interesting embedded data structures
- Any source maps found
- Top 20 most interesting findings

## Step 7: Push to GitHub

```bash
git clone https://github.com/BirdsLoMLab/LoE.git /tmp/loe_repo
cd /tmp/loe_repo
git checkout -b claude/loe-project-SIKVk || git checkout claude/loe-project-SIKVk
git pull origin claude/loe-project-SIKVk || true
```

Copy the `loe_extracted/` directory into the repo as `raw_extractions/`:
```
raw_extractions/
  file_inventory.json
  keyword_hits.json
  summary.md
  configs/          (all JSON config files)
  js_fragments/     (extracted code sections)
  embedded_data/    (data structures found in bundle)
  source_maps/      (if any .map files found)
```

**IMPORTANT: Verify no single file exceeds 24 MB before committing.** If any file is too large, split it.

```bash
git add raw_extractions/
git commit -m "Add extracted H5 game data from elementsh5.joynetgame.com

Extracted from 372MB captured page save. Includes:
- Keyword analysis of bundle-ac7a6.js (main game bundle)
- JSON config files
- Code fragments with game mechanics
- File inventory and analysis summary"

git push -u origin claude/loe-project-SIKVk
```

## Output Size Budget

Keep ALL output files under 24 MB each. The total output should ideally be under 100 MB. To achieve this:
- Don't include the full beautified bundle — only extract relevant fragments
- Trim keyword hit context to 10 lines (5 before, 5 after) if the hits file gets too large
- Split large JSON configs into multiple files
- For very large embedded data, include only the first 10,000 lines with a note about truncation
