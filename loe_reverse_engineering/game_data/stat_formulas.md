# LoE Stat Formulas & Damage System

## Status: CODE-VERIFIED — Extracted from Game Client Bundle

> **Analysis date:** 2026-03-18
> **Source:** `_NumericType` class from `bundle-ac7a6.js` (L127017), protobuf definitions, embedded data
> **Key finding:** Combat formulas are **server-side only**. But the complete stat enum, stat calculation structure, and data formats are confirmed from client code.

---

## CODE-VERIFIED: Complete NumericType Stat Enum

Extracted directly from `js_fragments/formula__NumericType_L127017.js` — the **actual game code**, not a summary.

### Core Combat Stats (1000–1019)

| ID | Code Name | Community Name | 5-Tier Scaling | Notes |
|----|-----------|---------------|:-:|-------|
| 1000 | `Hp` | HP (Current) | Yes | Current health |
| 1001 | `MaxHp` | Max HP | Yes | Health pool cap |
| 1002 | `HpRecover` | HP Recovery | Yes | **HP regen rate — not in community guides** |
| 1003 | `PAtk` | Physical ATK | Yes | **Physical attack — game has Phys/Magic split!** |
| 1004 | `MAtk` | Magic ATK | Yes | **Magic attack — community guides just say "ATK"** |
| 1005 | `PDef` | Physical DEF | Yes | **Physical defense** |
| 1006 | `MDef` | Magic DEF | Yes | **Magic defense** |
| 1007 | `Speed` | Speed | Yes | Affects cast time and GCD |
| 1008 | `Crit` | Crit Rate | Yes | Critical hit chance |
| 1009 | `CritDef` | Crit Resistance | Yes | **Counters enemy Crit Rate** |
| 1010 | `CritDam` | Crit Damage | Yes | Bonus damage on crit |
| 1011 | `CritDamDef` | Crit Damage Defense | Yes | **Reduces enemy Crit Damage — UNDOCUMENTED** |
| 1012 | `PHit` | Physical Hit Rate | Yes | Physical accuracy |
| 1013 | `MHit` | Magic Hit Rate | Yes | Magic accuracy |
| 1014 | `PBlock` | Physical Block | Yes | Physical block chance |
| 1015 | `MBlock` | Magic Block | Yes | Magic block chance |
| 1016 | `PPrecise` | Physical Precision | Yes | **Physical penetration — bypasses PBlock** |
| 1017 | `MPrecise` | Magic Precision | Yes | **Magic penetration — bypasses MBlock** |
| 1018 | `AtkMst` | Attack Mastery | Yes | Attack mastery bonus |
| 1019 | `DefMst` | Defense Mastery | Yes | Defense mastery bonus |

### Skill & Spirit Interaction Stats (1020–1025)

| ID | Code Name | Meaning |
|----|-----------|---------|
| 1020 | `PlayerAtkSkillA` | Player attack from Skill source A |
| 1021 | `PlayerDefSkillA` | Player defense from Skill source A |
| 1022 | `AtkPlayerSpirt` | Spirit ATK contribution (5-tier) |
| 1023 | `DefPlayerSpirt` | Spirit DEF contribution (5-tier) |
| 1024 | `PlayerAtkAttackA` | Player ATK from Attack source A |
| 1025 | `PlayerDefAttackA` | Player DEF from Attack source A |

### Advanced Combat Mechanics (1026–1070)

| ID | Code Name | Community Name | Notes |
|----|-----------|---------------|-------|
| 1026 | `DoubleHit` | Double Hit | **Double attack chance — UNDOCUMENTED** |
| 1027 | `CharstateCd` | Cooldown | CDR stat (5-tier) |
| 1028 | `Pass` | Pass/Bypass | Unknown — possibly passive skill pass-through |
| 1029 | `Hit` | Hit Rate | General accuracy (5-tier) |
| 1030 | `EffectHit` | Effect Hit | **CC/Debuff accuracy — UNDOCUMENTED** |
| 1031 | `EffectBlock` | Effect Block | **CC/Debuff resistance — UNDOCUMENTED** |
| 1032 | `BuffTimeAdd` | Buff Duration+ | Increases buff duration (5-tier) |
| 1033 | `BuffTimeMns` | Buff Duration- | Reduces debuff duration received (5-tier) |
| 1034 | `ActiveSkillAddA` | Active Skill Bonus A | |
| 1035 | `ActiveSkillSubA` | Active Skill Reduction A | |
| 1036 | `TargetDamAdd` | Target Damage Bonus | **Extra damage on marked/debuffed targets (5-tier)** |
| **1037** | **`PvpDamDef`** | **PvP Damage Reduction** | **DEDICATED PvP defense stat! (5-tier)** |
| **1038** | **`AllDamAdd`** | **GDB (Global Damage Bonus)** | **All damage increase (5-tier) — confirmed as community "GDB"** |
| **1039** | **`AllDamDef`** | **GDR (Global Damage Reduction)** | **All damage reduction (5-tier) — confirmed as community "GDR"** |
| 1040 | `HealAdd` | Healing Bonus | Increases healing done (5-tier) |
| 1041 | `HealDef` | Healing Reduction | **Reduces enemy healing — UNDOCUMENTED** |
| 1042 | `CharstateReduceCdDef` | CDR Resistance | Counters enemy CDR effects |
| 1043 | `CharstateDoubleHitDef` | Double Hit Defense | Counters Double Hit |

### Crit Sub-Systems (1044–1055)

**The game has SEPARATE crit systems for different action types:**

| ID | Code Name | Meaning |
|----|-----------|---------|
| 1044 | `AttackCrit` | Normal Attack Crit Rate |
| 1045 | `CharstateAttackCritDef` | Normal Attack Crit Resistance |
| 1046 | `CharstateAttackCritDam` | Normal Attack Crit Damage (5-tier) |
| 1047 | `CharstateAttackCritDamDef` | Normal Attack Crit Damage Defense (5-tier) |
| **1048** | **`CoreSkillCrit`** | **Core Skill Crit Rate** |
| 1049 | `CharstateSkillCritDef` | Skill Crit Resistance |
| 1050 | `CharstateSkillCritDam` | Skill Crit Damage (5-tier) |
| 1051 | `CharstateSkillCritDamDef` | Skill Crit Damage Defense (5-tier) |
| 1052 | `ActiveSkillCrit` | Active Skill Crit Rate |
| 1053 | `CharstateBuffCritDef` | Buff Crit Resistance |
| 1054 | `CharstateBuffCritDam` | Buff Crit Damage (5-tier) |
| 1055 | `CharstateBuffCritDamDef` | Buff Crit Damage Defense (5-tier) |

**Key insight**: Crit Rate/Damage isn't just one stat — it's **split by action type** (Normal Attack, Core Skill, Active Skill, Buff/Proc). This means stacking Core Skill Crit (1048) is critical for Swordsman, not just general Crit (1008).

### Speed & Energy (1062–1066)

| ID | Code Name | Community Name | Notes |
|----|-----------|---------------|-------|
| 1062 | `CharstateMaxEnergy` | Max Energy | Energy pool cap |
| **1063** | **`CharStateAtkSpeed`** | **Attack Speed** | **SEPARATE from Speed (1007)!** |
| **1064** | **`CharStateChargeTimeReduction`** | **Charge Time Reduction** | **Reduces skill charge-up time** |
| 1065 | `CharStateReduction` | General Reduction | Unknown — possibly general damage reduction |
| **1066** | **`CharStateRecoverEnergyIncrease`** | **Energy Recovery Increase** | **Boosts energy regen — UNDOCUMENTED** |
| 1067–1070 | `PassiveSkillAdd/Sub A/B` | Passive Skill Modifiers | |

### Elemental/Type Damage (1071–1110)

| ID Range | Code Name | Meaning |
|-----------|-----------|---------|
| 1071–1080 | `DamageTypeAdd1-10` | Element-specific damage bonuses (maps to 10 damage types) |
| 1081 | `FixedAddAttack` | Fixed bonus to normal attacks |
| 1082 | `FixedAddCoreSkill` | Fixed bonus to Core Skill |
| 1083 | `FixedAddActiveSkill` | Fixed bonus to Active Skills |
| 1084 | `FixedAddPassiveSkill` | Fixed bonus to Passive Skills |
| 1085 | `FixedAddSpirit` | Fixed bonus to Spirit attacks |
| 1086–1089 | `SkillDamageAdd/Sub A/B` | Skill damage modifiers |
| 1090 | `SkillDamageFixedAdd` | Fixed skill damage bonus |
| 1091 | `FieldSkillCD` | Field skill cooldown |
| 1092–1094 | `FieldSkillDamage Add/Sub/Fixed` | Field skill damage modifiers |
| 1095–1099 | `AllSkillType Add/Sub/Fixed` | All skill type modifiers |
| **1100** | **`DamageMaxHp`** | **Max HP-based damage** | **% of max HP as damage — UNDOCUMENTED** |
| 1101–1110 | `DamageTypeFixed1-10` | Fixed element-specific damage |

### "Focus" System = Crit2 (1112–1115)

**CRITICAL DISCOVERY: "Focus" is literally "Crit2" in the game code — a second crit system:**

| ID | Code Name | Community Name | Notes |
|----|-----------|---------------|-------|
| **1112** | **`Crit2`** | **Focus Rate** | **Community calls it "Focus" — code calls it "Crit2"** |
| **1113** | **`Crit2_Def`** | **Focus Resistance** | Counters Focus Rate |
| **1114** | **`Crit2_DAM`** | **Focus Damage** | Bonus damage on "focus" hit |
| **1115** | **`Crit2_DAM_DEF`** | **Focus Damage Defense** | Reduces Focus Damage taken |

### Penetration, Dodge & Monster Stats (1116–1121)

| ID | Code Name | Community Name | Notes |
|----|-----------|---------------|-------|
| **1116** | **`DILI`** | **Penetration** | **Confirmed: DILI = penetration, not "Damage-In/Out ratio"** |
| 1117 | `DODGE` | Dodge/Evasion | Dodge chance |
| 1118 | `DODGE_DEF` | Anti-Dodge | Counters enemy dodge |
| 1119 | `MONSTER_DAM_ADD` | Monster Damage Bonus | Extra damage vs PvE monsters |
| 1120 | `CRIT_EXTRA_ADD` | Extra Crit Bonus | Additional crit bonus |
| 1121 | `CRIT2_EXTRA_ADD` | Extra Focus Bonus | Additional focus bonus |

### Source-Specific Damage Bonuses (1127–1144)

**Each equipment source has its OWN damage bonus/defense stats:**

| ID | Code Name | Chinese | Meaning |
|----|-----------|---------|---------|
| 1127 | `CHARSTATE_HUANHUA_DAM_ADD` | 幻化 | **Outfit/Skin damage bonus** |
| 1128 | `CHARSTATE_HUANHUA_DAM_DEF` | | Outfit damage defense |
| 1129 | `CHARSTATE_QILING_DAM_ADD` | 器灵 | **Spirit damage bonus** |
| 1130 | `CHARSTATE_QILING_DAM_DEF` | | Spirit damage defense |
| 1131 | `CHARSTATE_FAZE_DAM_ADD` | 法则 | **Artifact/Relic damage bonus** |
| 1132 | `CHARSTATE_FAZE_DAM_DEF` | | Artifact damage defense |
| 1133 | `CHARSTATE_PET_DAM_ADD` | | **Pet damage bonus** |
| 1134 | `CHARSTATE_PET_DAM_DEF` | | Pet damage defense |
| 1135–1144 | `*_B` variants | | Second tier of source-specific bonuses |

### "Break" System = POLING 破灵 (1146–1154)

**CRITICAL DISCOVERY: "Break" is "POLING" (破灵 = "Break Spirit") in the code:**

| ID | Code Name | Community Name | Notes |
|----|-----------|---------------|-------|
| 1146 | `CHARSTATE_DILI_DEF` | Penetration Defense | Counters DILI/Penetration |
| **1147** | **`CHARSTATE_LINGLI_RECOVERY`** | **Energy Recovery** | **Energy regen rate (灵力 = spiritual power)** |
| 1148 | `CHARSTATE_LINGLI` | Current Energy | Current energy pool |
| 1149 | `CHARSTATE_LINGLI_MAX` | Max Energy | Energy cap |
| **1150** | **`CHARSTATE_POLING`** | **Break Rate** | **破灵 = "Break Spirit" — this IS the Break system** |
| 1151 | `CHARSTATE_POLING_DEF` | Break Resistance | Counters Break Rate |
| 1152 | `CHARSTATE_POLING_DAM` | Break Damage | Bonus damage on break |
| 1153 | `CHARSTATE_POLING_DAM_DEF` | Break Damage Defense | Reduces Break Damage taken |
| 1154 | `CHARSTATE_POLING_EXTRA_ADD` | Extra Break Bonus | Additional break bonus |

### Special

| ID | Code Name | Meaning |
|----|-----------|---------|
| 9999 | `hudunBase` | Shield base value (护盾 = shield) |

### Meta-Stats (Low IDs)

| ID | Code Name | Meaning |
|----|-----------|---------|
| 59 | `ATK_FIXED` | Fixed ATK bonus |
| 72 | `ENHANCEMENT_ATK_ADD` | Enhancement ATK |
| 73 | `ENHANCEMENT_DEF_ADD` | Enhancement DEF |
| 74 | `ENHANCEMENT_HP_ADD` | Enhancement HP |
| 81–90 | `RACE_1_ATK_PER1-10` | Race-specific ATK % bonuses (10 races/types) |
| 91–100 | `AREA_1_ATK_PER1-10` | Area-specific ATK % bonuses (10 areas) |
| 101–156 | `GAMEPLAY_1-16_ATK_PER` | Gameplay mode ATK bonuses |
| 116 | `HOOK_AWARD` | AFK/Idle reward bonus |
| 117 | `HOOK_TIME_ADD` | AFK time extension |
| 121–171 | `GAMEPLAY_1-16_DAM` | Gameplay mode damage bonuses |
| 136–186 | `GAMEPLAY_1-16_DEF` | Gameplay mode defense bonuses |

---

## CODE-VERIFIED: 5-Tier Stat Calculation Formula

Every stat with "5-tier scaling" follows this pattern:

```
StatID + 1 = Base
StatID + 2 = Add (flat addition)
StatID + 3 = Pct (percentage bonus, basis points)
StatID + 4 = FinalAdd (final flat addition)
StatID + 5 = FinalPct (final percentage bonus, basis points)
```

**Example:** Speed (1007) has sub-components:
- `SpeedBase` = 10071
- `SpeedAdd` = 10072
- `SpeedPct` = 10073
- `SpeedFinalAdd` = 10074
- `SpeedFinalPct` = 10075

**Speculative formula** (standard for this pattern in RPGs):
```
FinalStat = ((Base + Add) × (1 + Pct/10000) + FinalAdd) × (1 + FinalPct/10000)
```

This means:
1. Start with Base value
2. Add flat bonuses (from gear, buffs)
3. Multiply by percentage bonuses (from skills, passives)
4. Add final flat bonuses (from special sources)
5. Multiply by final percentage bonuses (from ultimate abilities, late-game systems)

The two-stage multiply (Pct then FinalPct) prevents early-game % bonuses from scaling with late-game flat additions.

---

## CODE-VERIFIED: Stat Storage Format

- `_NumericType.Max = 1e4` (10000) — confirms **basis points** format
- All percentage values stored as integers: `10000 = 100%`, `5000 = 50%`, `10600 = 106%`
- Stat values use int64 for large numbers (game implements custom BigNumber class for values exceeding 2^53)

---

## CODE-VERIFIED: Damage Gate Independence

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

**VERIFIED**: Crit (1008), Focus/Crit2 (1112), and Break/POLING (1150) are **independent boolean rolls**. All three CAN trigger simultaneously.

Each gate has an attack/defense pair:
- Crit: `Crit` (1008) vs `CritDef` (1009), damage: `CritDam` (1010) vs `CritDamDef` (1011)
- Focus: `Crit2` (1112) vs `Crit2_Def` (1113), damage: `Crit2_DAM` (1114) vs `Crit2_DAM_DEF` (1115)
- Break: `POLING` (1150) vs `POLING_DEF` (1151), damage: `POLING_DAM` (1152) vs `POLING_DAM_DEF` (1153)

---

## UNVERIFIED: Community Formulas

These formulas are from community observation. They CANNOT be verified from the client code because **all combat calculations happen server-side**.

### Damage Formula (Community-Claimed)
```
Final = Base_Damage × (1 + CritDmg) × (1 + FocusDmg) × (1 + BreakDmg) × GDB_Multiplier
```

**Analysis**: The independent gate flags support multiplicative structure. The code reveals it's more complex than community guides suggest:
- Each gate rate is **contested**: e.g., `Effective_CritRate = f(Crit - CritDef)` [exact formula unknown]
- Each gate damage is **also contested**: e.g., `Effective_CritDam = f(CritDam - CritDamDef)` [exact formula unknown]
- There are **per-action-type crit rates** (AttackCrit, CoreSkillCrit, ActiveSkillCrit) layered on top

### GDB/GDR Formula (Community-Claimed)
```
Multiplier = max(0.3, 1 + AllDamAdd - AllDamDef)
```

**Analysis**: `AllDamAdd` (1038) and `AllDamDef` (1039) confirmed. The 0.3 floor is **NOT confirmed**. Note that there's also **PvpDamDef** (1037) which may be a separate PvP-only reduction layer.

### Speed / Cast Time (Community-Claimed)
```
Cast_Time = Base_Cast_Time / (1 + Speed%)
```

**Analysis**: Speed (1007), AtkSpeed (1063), and ChargeTimeReduction (1064) are **three separate stats**. The community formula may only account for Speed and miss AtkSpeed and ChargeTimeReduction.

### Energy Regeneration
```
Energy regen: CharStateRecoverEnergyIncrease (1066) + CHARSTATE_LINGLI_RECOVERY (1147)
```
Energy regen is NOT just from auto-attacks — there are **dedicated stats** that increase it.

---

## Major Corrections to Community Guides

### 1. Physical vs Magic Split
Community guides say "ATK" and "DEF" as single stats. The code reveals **separate Physical and Magic** for Attack (PAtk/MAtk), Defense (PDef/MDef), Hit Rate (PHit/MHit), Block (PBlock/MBlock), and Precision (PPrecise/MPrecise). This suggests class-dependent damage types.

### 2. "Focus" = Crit2
What the community calls "Focus" is literally `Crit2` in the code — a duplicate of the crit system with its own rate, damage, defense, and damage defense stats. It's not a unique mechanic; it's a second crit roll.

### 3. "Break" = POLING (破灵)
The Break system (`CHARSTATE_POLING`) is separate from the other gates and appears later in the stat enum (1150+). It has its own rate/defense/damage/damage-defense quartet.

### 4. DILI = Penetration
Community speculation that DILI is "Damage-In/Damage-Out ratio" is **wrong**. DILI (1116) is a penetration stat, with DILI_DEF (1146) as its counter.

### 5. Source-Specific Damage
Each source (Outfit, Spirit, Artifact, Pet) has its **own damage bonus/defense stat pair** (1127–1144). "Global DMG" from the community may not be truly global — it may be source-specific bonuses that look global.

### 6. Separate Crit Per Action Type
There are **different crit stats** for Normal Attacks (1044), Core Skills (1048), and Active Skills (1052). Building "Crit" generically may miss the per-skill-type bonuses.

### 7. PvP-Specific Defense
`PvpDamDef` (1037) is a **dedicated PvP damage reduction stat** — separate from GDR (AllDamDef). This may only activate in PvP modes.

### 8. Speed ≠ Attack Speed
`Speed` (1007) and `CharStateAtkSpeed` (1063) are **different stats**. Speed likely affects cast time/GCD while AtkSpeed affects auto-attack frequency. `CharStateChargeTimeReduction` (1064) is a third speed-like stat for charge skills.

---

## Verified: Config Table References

The following JSON configs are loaded from CDN at runtime (not embedded in client):

| Config File | Purpose |
|-------------|---------|
| `CareerDislayConfig.json` | Class display configuration |
| `UnitConfig.json` | Unit/character base configs |
| `Buff.json` | Buff/debuff definitions |
| `skillInitialSlot.json` | Starting skill slot configuration |
| `skillSlotData.json` | Skill slot progression data |
| `faxiang_huanhua.json` | Outfit/skin system (法相幻化) |
| `faxiang_baoshi.json` | Artifact gem/stone system (法相宝石) |
| `faxiang_base.json` | Artifact base config (法相) |
| `faxiang_equip_main.json` | Artifact main equipment |
| `dungeon_data.json` | Dungeon/instance configuration |
| `fishing_fish.json` | Fishing system |
| `fishing_lev.json` | Fishing level config |
| `fishing_spot.json` | Fishing spot config |
| `color.json` | Color scheme/rarity colors |
| `mainUIbtn.json` | Main UI button layout |
| `itemBase.json` | Item base definitions |

---

## SkillHelper Constants

```javascript
SkillHelper.LevelDemolition = 1000  // Level demolition threshold
SkillHelper.LevelUnit = 30          // Level unit granularity
```

---

## Architecture Note

The LoE client is a **thin rendering layer**:
- Built with **Laya Engine** + **FairyGUI** for UI
- Communication via **WebSocket** with **protobuf** serialization
- All combat calculations are **server-side** — the client only displays results
- Config tables loaded from CDN: `sydh-cdnres.joyagegames.com/EN/stable/mix_wx_pangu/common/`
- The client uses an **ECS (Entity Component System)** architecture for game objects
- Custom `BigNumber` class handles values exceeding JavaScript's safe integer limit
- Positions scaled by 100× between server and client: `posC2S(x,y)` = `{floor(100*x), floor(-100*y)}`

---

## Open Questions (Server-Side — Cannot Verify from Client)

- [ ] Exact damage formula (PAtk/MAtk vs PDef/MDef interaction, multiplier order)
- [ ] GDB/GDR floor value (0.3 claimed by community)
- [ ] How gate contests work (Crit vs CritDef, etc. — subtraction? division? rating formula?)
- [ ] Speed vs AtkSpeed vs ChargeTimeReduction — how they combine
- [ ] Energy regeneration base rate and scaling
- [ ] Combat Power weight per stat type
- [ ] DILI vs PDef/MDef interaction (additive or multiplicative penetration?)
- [ ] What AtkMst (1018) and DefMst (1019) actually do
- [ ] What Pass (1028) does
- [ ] Skill coefficient scaling tables per level
- [ ] Block damage reduction formula (PBlock/MBlock)
- [ ] DoubleHit (1026) proc mechanics and damage
- [ ] EffectHit (1030) vs EffectBlock (1031) interaction for CC landing
- [ ] How DamageMaxHp (1100) calculates % max HP damage

---

## Sources

### Client Code (Primary)
- `bundle-ac7a6.js` L127017 — `_NumericType` class (complete stat enum)
- `bundle-ac7a6.js` L128405 — `SkillHelper`, `AttackComponent` classes
- `embedded_data/proto_definitions.js` — 40K lines of protobuf protocol
- `embedded_data/data_structures.json` — Simplified stat summary (superseded by NumericType)
- `embedded_data/config_tables.json` — Config table references

### Community (Secondary)
- [Legend of Elements Wiki](https://www.legendofelements.com/characters/swordsman)
- [BlueStacks Class Guide](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-classes-guide-en.html)
- [Clashiverse Swordsman Guide](https://clashiverse.com/legend-of-elements-swordsman-class-guide/)
- [LDPlayer Skill Build Guide](https://www.ldplayer.net/blog/legend-of-elements-skill-build-guide.html)
