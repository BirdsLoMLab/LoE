# LoE Stat Formulas & Damage System

## Status: PARTIALLY VERIFIED — Client Code Analysis + Community Claims

> **Analysis date:** 2026-03-18
> **Source:** Beautified bundle `bundle-ac7a6.js` (17MB, 426K lines), protobuf definitions, embedded data structures
> **Key finding:** Combat formulas are **server-side only**. The client receives pre-calculated damage values. Community formulas below are from player observation, NOT extracted from code.

---

## Verified: Complete Stat Type Enum (AttrType)

Extracted from `embedded_data/data_structures.json` — the **definitive list of all 26 stats** in the game:

| ID | Code Name | Community Name | Category | Notes |
|----|-----------|---------------|----------|-------|
| 1 | `hp` | HP | Defensive | Current health |
| 2 | `hpMax` | Max HP | Defensive | Health pool cap |
| 3 | `atk` | ATK | Offensive | Base attack power |
| 4 | `def` | DEF | Defensive | Base defense |
| 5 | `speed` | Speed | Utility | Affects cast time and GCD |
| 6 | `critRate` | Crit Rate | Offensive Gate | Chance to crit (%) |
| 7 | `critDmg` | Crit Damage | Offensive Gate | Bonus damage on crit (%) |
| 8 | `focusRate` | Focus Rate | Offensive Gate | Chance to focus (%) |
| 9 | `focusDmg` | Focus Damage | Offensive Gate | Bonus damage on focus (%) |
| 10 | `breakRate` | Break Rate | Offensive Gate | Chance to break (%) |
| 11 | `breakDmg` | Break Damage | Offensive Gate | Bonus damage on break (%) |
| 12 | `dodgeRate` | Evasion/Dodge | Defensive | Chance to dodge (%) |
| 13 | `hitRate` | Accuracy/Hit Rate | Offensive | Counters dodge (%) |
| 14 | `blockRate` | Block Rate | Defensive | Chance to block (%) |
| 15 | `blockDmg` | Block Damage/Reduction | Defensive | Damage reduced on block (%) |
| **16** | **`dmgAdd`** | **GDB (Global Damage Bonus)** | **Offensive** | **Flat % added to all damage** |
| **17** | **`dmgReduce`** | **GDR (Global Damage Reduction)** | **Defensive** | **Flat % reduction on all damage** |
| **18** | **`critRes`** | **Crit Resistance** | **Defensive Gate** | **Counters enemy Crit Rate — UNDOCUMENTED in most guides** |
| **19** | **`focusRes`** | **Focus Resistance** | **Defensive Gate** | **Counters enemy Focus Rate — UNDOCUMENTED in most guides** |
| **20** | **`breakRes`** | **Break Resistance** | **Defensive Gate** | **Counters enemy Break Rate — UNDOCUMENTED in most guides** |
| 21 | `energy` | Energy | Utility | Current energy for skills |
| 22 | `energyMax` | Max Energy | Utility | Energy pool cap |
| 23 | `penetration` | Penetration | Offensive | Ignores portion of DEF |
| **24** | **`toughness`** | **Toughness** | **Defensive** | **Undocumented defensive stat** |
| **25** | **`healAdd`** | **Healing Bonus** | **Utility** | **Increases healing done — UNDOCUMENTED** |
| **26** | **`healReceive`** | **Healing Received** | **Utility** | **Increases healing received — UNDOCUMENTED** |

### Newly Discovered Stats (Not in Community Guides)
- **critRes / focusRes / breakRes (IDs 18-20)**: These are **defensive gate counters**. They reduce the enemy's effective Crit/Focus/Break Rate. This means the damage formula has a defensive layer for each gate that community guides don't mention.
- **toughness (ID 24)**: Unknown purpose. Possibly reduces CC duration or damage from sustained sources.
- **healAdd / healReceive (IDs 25-26)**: Healing stats exist, suggesting healing builds may be viable.

---

## Verified: Stat Storage Format

- All stat values are stored as **int64 (basis points)**: `10000 = 100%`
- Example: Empyrean Sword's 1060% ATK coefficient is stored as `damageCoeff: 10600`
- Percentage stats (Crit Rate, GDB, etc.) use the same basis point format

---

## Verified: Damage Gate Independence

From protobuf `AttackResult` message:
```protobuf
message AttackResult {
    int32 damage = 4;        // Final calculated damage (single integer from server)
    int32 damageType = 5;    // Normal, Crit, Focus, Break, True
    bool isCrit = 6;         // Independent boolean
    bool isFocus = 7;        // Independent boolean
    bool isBreak = 8;        // Independent boolean
}
```

**VERIFIED**: Crit, Focus, and Break are **independent boolean rolls**. A single hit CAN be Crit + Focus + Break simultaneously. They are NOT mutually exclusive.

This supports the community's multiplicative gate formula where all three can trigger on the same hit.

---

## Verified: Buff Modifier Types

From protobuf `BuffEffect` message:
```protobuf
message BuffEffect {
    int32 attrType = 2;     // Which stat (maps to AttrType 1-26)
    int32 changeType = 3;   // How the stat is modified
    int64 value = 4;        // Amount
}
```

`changeType` has three modes:
1. **Flat Add** — Adds a fixed value to the stat
2. **Percent Add** — Adds a percentage of base value
3. **Multiply** — Multiplies the current value

This confirms the damage system uses **both additive and multiplicative** modifiers, consistent with the community's layered formula.

---

## UNVERIFIED: Community Formulas

These formulas are from community observation. They CANNOT be verified from the client code because **all combat calculations happen server-side**. The client only receives the final damage number.

### Damage Formula (Community-Claimed)
```
Final = Base_Damage × (1 + CritDmg) × (1 + FocusDmg) × (1 + BreakDmg) × GDB_Multiplier
```

**Analysis**: The independent boolean flags for Crit/Focus/Break support this multiplicative structure. However, the existence of **critRes, focusRes, breakRes** (IDs 18-20) suggests the gate rates are contested:
```
Effective_CritRate = max(0, CritRate - Enemy_CritRes)   [SPECULATIVE]
Effective_FocusRate = max(0, FocusRate - Enemy_FocusRes) [SPECULATIVE]
Effective_BreakRate = max(0, BreakRate - Enemy_BreakRes) [SPECULATIVE]
```

### GDB/GDR Formula (Community-Claimed)
```
Multiplier = max(0.3, 1 + Attacker_dmgAdd - Defender_dmgReduce)
```

**Analysis**: The stat names `dmgAdd` (ID 16) and `dmgReduce` (ID 17) confirm these exist. The 0.3 floor is **NOT confirmed** in client code.

### Speed / Cast Time (Community-Claimed)
```
Cast_Time = Base_Cast_Time / (1 + Speed%)
```

**Analysis**: Speed is confirmed as AttrType ID 5. The formula is **NOT verified** from client code. The GCD cap is unknown.

### Energy Regeneration (Unknown)
```
Energy regen formula: UNKNOWN — server-side only
```
The client receives `energy` and `energyMax` values. Regeneration is calculated server-side.

---

## Verified: Skill System Structure

From protobuf `SkillData` and JS fragments:

```
SkillData = {
    skillId: int32,
    level: int32,          // Max 150 for Core skills
    type: int32,           // 1=Core, 2=Active, 3=Passive, 4=Ultimate
    energyCost: int32,     // Per-skill energy cost
    cooldown: int32,       // In milliseconds
    damageCoeff: int32,    // Basis points (10600 = 1060%)
    hitCount: int32,       // Multi-hit count
    aoeType: int32,        // 0=Single, 1=Circle, 2=Rectangle, 3=Cone
    aoeRange: int32,       // AoE size
    buffIds: int32[]       // Buff/debuff IDs applied on hit
}
```

### Known Skill Coefficients (from community guides)
| Skill | Class | Coefficient | Hits | AoE | Source |
|-------|-------|-------------|------|-----|--------|
| Empyrean Sword | Swordsman (Core) | 1060% ATK + flat | 1 | Single | Guides |
| Divining Blade | Swordsman (Active) | +95% ATK SPD buff, +22% DMG | - | Self | Guides |
| Tidebreaker | Swordsman | 30% ATK | 1 | Single | Guides |
| Draconic Strike | Swordsman | 320% ATK | 3 | Circle | Guides |
| Soulshock Slash | Spirit (Warshade) | 200% ATK | 5 | Circle (front) | Guides |
| Empyrean Shot | Spirit (Sunpiercer) | 480% ATK | 2 | Circle (front) | Guides |
| Mystfeather Flight | Spirit (Skysong) | 730% ATK total | 1 | Rectangle (front) | Guides |

---

## Verified: Element System

6 elements confirmed from `ElementType` enum:

| ID | Element |
|----|---------|
| 1 | Fire |
| 2 | Water |
| 3 | Wind |
| 4 | Thunder |
| 5 | Earth |
| 6 | Ice |

---

## Verified: Equipment Data Structure

From protobuf `EquipData`:
```
Equipment = {
    id: int32,
    pos: int32,              // Slot position (15 total: 9 regular + 6 class-exclusive)
    level: int32,            // Enhancement level
    quality: int32,          // 1=White, 2=Green, 3=Blue, 4=Purple, 5=Orange, 6=Red
    starLevel: int32,        // Star upgrade level
    attrs: AttrData[],       // Base stats [{type, value}]
    refineAttrs: AttrData[], // Refined/rerolled stats
    setId: int32             // Relic set identifier
}
```

### Equipment Quality Tiers (Verified)
| Quality ID | Color | Community Name | Display Name |
|-----------|-------|---------------|--------------|
| 1 | White | Common | Common |
| 2 | Green | Uncommon | Uncommon |
| 3 | Blue | R (Rare) | Rare |
| 4 | Purple | SR (Super Rare) | Epic |
| 5 | Orange | SSR | Legendary |
| 6 | Red | SSSR | Mythic |

---

## Verified: Spirit System

From JS fragments and protobuf:
```
Spirit = {
    id: int32,
    level: int32,
    star: int32,             // 0 to 6 (7 star levels)
    quality: int32,          // Rarity tier
    skillIds: int32[],       // Spirit ability IDs
    attrs: AttrData[],       // Stat contributions (additive to player)
    exp: int64,
    expMax: int64
}
```

- **Deploy limit**: 3 spirits max
- **Star-up increases a stat MULTIPLIER** (not flat addition)
- **Spirit skill trigger system**: triggerType (when), triggerRate (chance %), duration (ms)
- **Inheritance**: transfers level/star from source to target, consumes source

---

## Verified: Pet System (Separate from Spirits)

```
Pet = {
    id: int32,
    generation: int32,       // 1-5 (Gen 5 = max)
    level: int32,
    growthRate: int32,       // Influences all stat scaling
    traits: int32[],         // Trait IDs (common/rare/epic/legendary + hidden)
    attrs: AttrData[],       // Stat contributions
    breedCount: int32
}
```

- Breeding: offspring inherit traits + chance of generation increase
- Hidden traits activate conditionally

---

## Verified: Buff/Debuff Types

| ID | Type | Description |
|----|------|-------------|
| 1 | statBuff | Positive stat modifier |
| 2 | statDebuff | Negative stat modifier |
| 3 | dot | Damage over time |
| 4 | hot | Heal over time |
| 5 | shield | Damage absorption |
| 6 | stun | Cannot act |
| 7 | silence | Cannot use skills |
| 8 | slow | Reduced speed |
| 9 | immobilize | Cannot move |

---

## Verified: Stat Layering System

From protobuf `PlayerStats`:
```
PlayerStats = {
    baseAttrs: AttrData[],   // From level and class
    equipAttrs: AttrData[],  // From all equipment
    buffAttrs: AttrData[],   // From active buffs
    totalAttrs: AttrData[],  // Final calculated totals (server-computed)
    combatPower: int64       // CP (server-computed weighted sum)
}
```

Stats are layered: **Base + Equipment + Buffs = Total**. The server computes totals and sends them to the client.

---

## Open Questions (Server-Side — Cannot Verify from Client)

- [ ] Exact damage formula (ATK vs DEF interaction, multiplier order)
- [ ] GDB/GDR 0.3 floor confirmation
- [ ] How critRes/focusRes/breakRes reduce effective gate rates
- [ ] Speed / GCD formula and cap
- [ ] Energy regeneration per basic attack
- [ ] Combat Power weight per stat type
- [ ] Penetration vs DEF interaction
- [ ] Toughness (ID 24) function
- [ ] Skill coefficient scaling tables per level
- [ ] Block damage reduction formula

---

## Architecture Note

The LoE client is a **thin rendering layer**:
- Built with **Laya Engine** + **FairyGUI** for UI
- Communication via **WebSocket** with **protobuf** serialization
- All combat calculations are **server-side** — the client only displays results
- Config tables (CfgSkillList, CfgEquipList, etc.) are loaded from CDN at runtime, not embedded in the client
- The "formula" keyword hits in the bundle (86 total) are almost entirely `Math.floor/ceil/round` for **UI display formatting**, not combat calculations

---

## Sources

### Client Code (Primary)
- `bundle-ac7a6.js` — 17MB beautified game bundle (426K lines)
- `embedded_data/data_structures.json` — AttrType enum, quality tiers, element types
- `embedded_data/proto_definitions.js` — 40K lines of protobuf client-server protocol
- `embedded_data/config_tables.json` — Config table structure references

### Community (Secondary)
- [Legend of Elements Wiki](https://www.legendofelements.com/characters/swordsman)
- [BlueStacks Class Guide](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-classes-guide-en.html)
- [Clashiverse Swordsman Guide](https://clashiverse.com/legend-of-elements-swordsman-class-guide/)
- [LDPlayer Skill Build Guide](https://www.ldplayer.net/blog/legend-of-elements-skill-build-guide.html)
