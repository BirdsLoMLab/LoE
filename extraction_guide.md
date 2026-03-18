# LoE H5 Web Version Extraction Guide

## Overview
This guide walks you through extracting game data from the Legend of Elements H5 web version at `elementsh5.joynetgame.com` using Chrome DevTools and your download extension.

---

## 1. File Type Filters (for Download Extension)

### EXCLUDE these (bloat):
```
*.png, *.jpg, *.jpeg, *.gif, *.webp, *.svg, *.bmp, *.ico
*.mp4, *.webm, *.avi, *.mov
*.mp3, *.ogg, *.wav, *.aac, *.m4a
*.woff, *.woff2, *.ttf, *.eot, *.otf
*.atlas, *.spine
```

### KEEP these (analysis targets):
```
*.js, *.json, *.csv, *.xml, *.proto, *.html, *.css
*.map (source maps - very valuable if present!)
*.txt, *.dat, *.bin, *.lua, *.conf, *.cfg
*.yaml, *.yml, *.plist, *.pb
```

Place downloaded files in: `raw_extractions/h5_sources/`

---

## 2. Network Capture (HAR Export)

### Setup
1. Open `elementsh5.joynetgame.com` in Chrome
2. Open DevTools (F12) -> **Network** tab
3. Check **"Preserve log"** (so navigation doesn't clear entries)
4. Optionally filter by clicking the filter types and deselecting: `Img`, `Media`, `Font`

### Gameplay Actions to Capture
Perform these actions **in order** while Network tab is recording:

| # | Action | What it reveals |
|---|--------|----------------|
| 1 | **Login/enter game** | Auth protocol, server endpoints, initial data load |
| 2 | **Open character stats** | Full stat breakdown, hidden stats |
| 3 | **Enter combat (auto-battle)** | Damage formulas, combat tick data |
| 4 | **Open inventory/equipment** | Item database, equipment stats |
| 5 | **View skills page** | Skill data, scaling values |
| 6 | **Open spirit/pet screens** | Spirit roster, pet data |
| 7 | **Perform a gacha/draw** | Pull rates, pity counter, banner data |
| 8 | **Collect idle rewards** | Economy formulas, time calculations |
| 9 | **Browse shop** | Pricing, item availability |
| 10 | **Check rankings/leaderboard** | Player data structures |

### Export
- Right-click in the Network panel -> **"Save all as HAR with content"**
- Save to: `raw_extractions/har_captures/gameplay_full.har`
- If the file is very large (>100MB), do separate captures per action group

---

## 3. Console Probing

Open DevTools -> **Console** tab and paste these scripts:

### 3a. Global Object Discovery
```javascript
// Discover game objects on window
const probes = [
  'window.game', 'window.config', 'window.gameConfig', 'window.GameConfig',
  'window.cc', 'cc.game', 'cc.director', 'cc.resources', 'cc.assetManager',
  'window.__gameData', 'window.DataManager', 'window.ConfigManager',
  'window.GameModel', 'window.PlayerData', 'window.GameData',
  'window.Vue', 'window.__vue_app__', 'window.__VUE_DEVTOOLS_GLOBAL_HOOK__',
  'window.Laya', 'window.egret',
  'window.protobuf', 'window.proto',
  'window.i18n', 'window.lang',
];

console.log('=== LoE Global Object Probe ===');
const found = {};
probes.forEach(p => {
  try {
    const val = eval(p);
    if (val !== undefined && val !== null) {
      const keys = typeof val === 'object' ? Object.keys(val).slice(0, 30) : [];
      console.log(`FOUND: ${p}`, typeof val, keys);
      found[p] = { type: typeof val, keys };
    }
  } catch(e) {}
});
console.log('=== Found Objects Summary ===');
console.log(JSON.stringify(found, null, 2));
```

### 3b. Storage Dump
```javascript
// Dump all local storage
console.log('=== localStorage ===');
console.log(JSON.stringify(localStorage, null, 2));

console.log('=== sessionStorage ===');
console.log(JSON.stringify(sessionStorage, null, 2));

// List IndexedDB databases
if (window.indexedDB && window.indexedDB.databases) {
  window.indexedDB.databases().then(dbs => {
    console.log('=== IndexedDB Databases ===');
    console.log(JSON.stringify(dbs, null, 2));
  });
}
```

### 3c. Deep Object Extraction (run AFTER 3a to know what exists)
```javascript
// Once you find the main game/config object, extract it:
// Replace OBJECT_PATH with whatever was found in 3a
// Example: if cc.game was found:

function deepExtract(obj, path, depth = 0, maxDepth = 3) {
  if (depth >= maxDepth || !obj || typeof obj !== 'object') return obj;
  const result = {};
  for (const key of Object.keys(obj).slice(0, 50)) {
    try {
      const val = obj[key];
      if (typeof val === 'function') {
        result[key] = `[Function: ${val.name || 'anonymous'}]`;
      } else if (typeof val === 'object' && val !== null) {
        result[key] = deepExtract(val, `${path}.${key}`, depth + 1, maxDepth);
      } else {
        result[key] = val;
      }
    } catch(e) {
      result[key] = `[Error: ${e.message}]`;
    }
  }
  return result;
}

// Usage: deepExtract(cc.game, 'cc.game')
// Copy the result and save to console_dumps/
```

### Save Console Output
- Right-click in Console -> **"Save as..."** to save all console output
- Save to: `raw_extractions/console_dumps/probe_results.log`

---

## 4. Application Tab (Storage Inspection)

1. DevTools -> **Application** tab
2. Check these sections:
   - **Local Storage** -> look for cached game configs, user data
   - **Session Storage** -> temporary game state
   - **IndexedDB** -> game databases (may contain cached assets/configs)
   - **Cache Storage** -> service worker caches with game assets
3. For any interesting data: right-click -> Copy or screenshot

---

## 5. Sources Tab (Source Maps)

1. DevTools -> **Sources** tab
2. Look in the left panel for:
   - `webpack://` entries (indicates webpack build with source maps)
   - `.map` files loaded alongside `.js` files
   - Original TypeScript/ES6 source in mapped sources
3. If source maps exist: right-click source files -> **"Save as..."**
4. These are extremely valuable as they show original unminified code

---

## 6. WebSocket Traffic (if applicable)

If the game uses WebSocket for real-time communication:
1. Network tab -> filter by **WS** type
2. Click on the WebSocket connection
3. Go to **Messages** tab to see frames
4. Look for binary frames (protobuf) vs text frames (JSON)
5. Screenshot or copy message sequences during combat

---

## Quick Checklist
- [ ] Downloaded all JS/JSON/config files (extension)
- [ ] Exported HAR file with gameplay actions
- [ ] Ran console probes and saved output
- [ ] Checked Application tab storage
- [ ] Checked for source maps
- [ ] Noted WebSocket connections (if any)
- [ ] Placed all files in `raw_extractions/` subdirectories
