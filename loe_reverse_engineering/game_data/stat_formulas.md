# LoE Stat System & Damage Formula — Code-Verified

> **Source:** `bundle-ac7a6.js` (beautified, 426K lines)
> **Key files:** `_NumericType` (L127017), `calcDamageNew` (L413500), protobuf definitions
> **All data below is extracted directly from the game client code. No community sources.**

---

## Complete Damage Formula

**Source:** `stat_system_O_L413500.js` — `calcDamageNew()` / `onColliderIn()` running client-side.

### Step 1: Dodge
```javascript
dodgeChance = clamp(target.DODGE - attacker.DODGE_DEF, 0, 0.7)
if (random() < dodgeChance) → damage = 0, dmgSubType |= 4
```
- Cap: **70%**
- Contested: `DODGE` (1117) vs `DODGE_DEF` (1118)

### Step 2: Base Damage
```javascript
hitDiff = target.PHit - attacker.PHit
hitMult = (hitDiff > 0) ? (1 - min(0.5, hitDiff * Hit_RATIO)) : 1
baseDamage = max(ATK * MIN_DMG_ATK_PCT, ATK - (1 - ignoreDefPct) * target.PDef * hitMult)
```
- Uses `PAtk` (1003) vs `PDef` (1005)
- Minimum damage floor: `ATK × MIN_DMG_ATK_PCT`
- Hit rate: `PHit` (1012) reduces effective DEF, capped at 50% reduction

### Step 3: Skill Ratio
```javascript
damage = baseDamage * skillRatio    // skillRatio = coefficient / 10000
```

### Step 4: Block
```javascript
blockDiff = target.PBlock - attacker.PBlock
blockChance = min(0.5, blockDiff * BLOCK_RATIO)
if (random() < blockChance && blockDiff > 0) → damage *= 0.5, dmgSubType |= 2
```
- Cap: **50% chance**
- Reduction: **50% damage** (halved)
- Contested: `PBlock` (1014) vs attacker's `PBlock`

### Step 5: DILI (Low-HP Damage Reduction)
```javascript
if (target.DILI > 0) {
    missingHpPct = (target.MaxHp - target.Hp) / target.MaxHp
    diliFactor = clamp(missingHpPct / DI_LI, 0, 1)          // DI_LI ≈ 0.85
    diliReduction = diliFactor * (target.DILI - attacker.DILI_DEF)
    diliReduction = clamp(diliReduction, 0, 0.9)
    damage *= (1 - diliReduction)
}
```
- DILI is a **defender's stat** — scales with missing HP percentage
- Cap: **90% damage reduction**
- Contested: `DILI` (1116) vs `CHARSTATE_DILI_DEF` (1146)
- Debug: `"(1-missPct/85%*(enemy_DILI-my_DILI_DEF))"`

### Step 6: Crit
```javascript
critChance = attacker.Crit - target.CritDef
// Per-action-type bonus:
switch(actionType) {
    case 1: critChance += attacker.AttackCrit; break;      // Normal attack
    case 4: critChance += attacker.CoreSkillCrit; break;   // Core skill
    case 5: critChance += attacker.ActiveSkillCrit; break; // Active skill
}
critChance = clamp(critChance, 0, 1)

if (random() < critChance || forceCrit) {
    critMult = (CRIT_MIN_PCT + attacker.CritDam - target.CritDamDef) * (1 + attacker.CRIT_EXTRA_ADD)
    critMult = max(CRIT_MIN_PCT, critMult)
    damage *= critMult
    dmgSubType |= 1
}
```
- Rate contested: `Crit` (1008) vs `CritDef` (1009)
- Damage contested: `CritDam` (1010) vs `CritDamDef` (1011)
- **CRIT_MIN_PCT = 2.0** (debug: `"(200%+CritDam-CritDamDef)"`)
- Per-action crit: `AttackCrit` (1044), `CoreSkillCrit` (1048), `ActiveSkillCrit` (1052)
- Extra multiplier: `CRIT_EXTRA_ADD` (1120)

### Step 7: Focus (= Crit2)
```javascript
focusChance = clamp(attacker.Crit2 - target.Crit2_Def, 0, 1)
if (random() < focusChance) {
    focusMult = (CRIT2_MIN_PCT + attacker.Crit2_DAM - target.Crit2_DAM_DEF) * (1 + attacker.CRIT2_EXTRA_ADD)
    focusMult = max(CRIT2_MIN_PCT, focusMult)
    damage *= focusMult
    dmgSubType |= 32
}
```
- Rate: `Crit2` (1112) vs `Crit2_Def` (1113)
- Damage: `Crit2_DAM` (1114) vs `Crit2_DAM_DEF` (1115)
- Extra: `CRIT2_EXTRA_ADD` (1121)

### Step 8: Break (= POLING 破灵)
```javascript
breakChance = clamp(attacker.POLING - target.POLING_DEF, 0, 1)
if (random() < breakChance) {
    breakMult = (CRIT_MIN_PCT + attacker.POLING_DAM - target.POLING_DAM_DEF) * (1 + attacker.POLING_EXTRA_ADD)
    breakMult = max(CRIT2_MIN_PCT, breakMult)
    damage *= breakMult
    dmgSubType |= 512
}
```
- Rate: `CHARSTATE_POLING` (1150) vs `CHARSTATE_POLING_DEF` (1151)
- Damage: `CHARSTATE_POLING_DAM` (1152) vs `CHARSTATE_POLING_DAM_DEF` (1153)
- Extra: `CHARSTATE_POLING_EXTRA_ADD` (1154)

### Step 9: GDB/GDR (Global Damage)
```javascript
damage *= max(0.3, 1 + attacker.AllDamAdd - target.AllDamDef)
```
- `AllDamAdd` (1038) vs `AllDamDef` (1039)
- **Floor: 0.3 (30%)** — confirmed in code

### Step 10: Source-Specific Damage
```javascript
switch(actionType) {
    case 1:  // Normal Attack
        atkA = attacker.PlayerAtkAttackA;  defA = target.PlayerDefAttackA;
        atkB = attacker.PlayerAtkAttackB;  defB = target.PlayerDefAttackB; break;
    case 3:  // Spirit
        atkA = attacker.AtkPlayerSpirt;    defA = target.DefPlayerSpirt;
        atkB = attacker.SPIRIT_DAM_ADD_B;  defB = target.SPIRIT_DAM_DEF_B; break;
    case 4:  // Core Skill
        atkA = attacker.PlayerAtkSkillA;   defA = target.PlayerDefSkillA;
        atkB = attacker.PlayerAtkSkillB;   defB = target.PlayerDefSkillB; break;
    case 5:  // Active Skill
        atkA = attacker.ActiveSkillAddA;   defA = target.ActiveSkillSubA;
        atkB = attacker.ActiveSkillAddB;   defB = target.ActiveSkillSubB; break;
    case 6:  // Passive Skill
        atkA = attacker.PassiveSkillAddA;  defA = target.PassiveSkillSubA;
        atkB = attacker.PassiveSkillAddB;  defB = target.PassiveSkillSubB; break;
    case 7:  // Outfit (幻化)
        atkA = attacker.HUANHUA_DAM_ADD;   defA = target.HUANHUA_DAM_DEF;
        atkB = attacker.HUANHUA_DAM_ADD_B; defB = target.HUANHUA_DAM_DEF_B; break;
    case 8:  // Spirit Equip (器灵)
        atkA = attacker.QILING_DAM_ADD;    defA = target.QILING_DAM_DEF;
        atkB = attacker.QILING_DAM_ADD_B;  defB = target.QILING_DAM_DEF_B; break;
    case 9:  // Artifact (法则)
        atkA = attacker.FAZE_DAM_ADD;      defA = target.FAZE_DAM_DEF;
        atkB = attacker.FAZE_DAM_ADD_B;    defB = target.FAZE_DAM_DEF_B; break;
    case 10: // Pet
        atkA = attacker.PET_DAM_ADD;       defA = target.PET_DAM_DEF;
        atkB = attacker.PET_DAM_ADD_B;     defB = target.PET_DAM_DEF_B; break;
}
```
Field skills also have: `FieldSkillDamageAdd` (1092) vs `FieldSkillDamageSub` (1093)

### Step 11: Buff Modifiers
```javascript
// Buff 11: flat multiplier
damage *= max(0, 1 + buff11Value)
```
Referenced buff types: 11, 16, 25, 27, 29, 30, 31, 38, 40, 42, 45, 49, 54, 56, 65, 68, 94.

### Confirmed Constants
| Constant | Value | Code Evidence |
|----------|-------|--------------|
| GDB/GDR floor | 0.3 | `max(.3, 1 + AllDamAdd - AllDamDef)` |
| CRIT_MIN_PCT | 2.0 | Debug: `"(200%+CritDam-CritDamDef)"` |
| Dodge cap | 0.7 | `clamp(DODGE - DODGE_DEF, 0, .7)` |
| DILI cap | 0.9 | `clamp(diliReduction, 0, .9)` |
| Block chance cap | 0.5 | `min(.5, blockDiff * BLOCK_RATIO)` |
| Block damage | 0.5 | `damage *= .5` |
| Hit reduction cap | 0.5 | `min(.5, hitDiff * Hit_RATIO)` |
| Gate rate cap | 1.0 | `clamp(rate, 0, 1)` |
| DI_LI | ~0.85 | Debug: `"missPct/85%"` |

### Unknown Constants (not in extracted fragment)
- `MIN_DMG_ATK_PCT` — minimum damage as fraction of ATK
- `Hit_RATIO` — likely 0.001 from debug "(0.1%)"
- `BLOCK_RATIO` — block chance scaling factor
- `CRIT2_MIN_PCT` — Focus minimum multiplier (likely 2.0, same as CRIT_MIN_PCT)

---

## Complete NumericType Stat Enum

**Source:** `formula__NumericType_L127017.js` (L127017-127210)

### Core Stats (1000–1019) — All have 5-tier scaling (Base/Add/Pct/FinalAdd/FinalPct)

| ID | Name | Purpose |
|----|------|---------|
| 1000 | Hp | Current HP |
| 1001 | MaxHp | Max HP |
| 1002 | HpRecover | HP regen rate |
| 1003 | PAtk | Physical Attack |
| 1004 | MAtk | Magic Attack |
| 1005 | PDef | Physical Defense |
| 1006 | MDef | Magic Defense |
| 1007 | Speed | Cast time / GCD |
| 1008 | Crit | Crit Rate |
| 1009 | CritDef | Crit Resistance |
| 1010 | CritDam | Crit Damage |
| 1011 | CritDamDef | Crit Damage Defense |
| 1012 | PHit | Physical Hit Rate |
| 1013 | MHit | Magic Hit Rate |
| 1014 | PBlock | Physical Block |
| 1015 | MBlock | Magic Block |
| 1016 | PPrecise | Physical Precision |
| 1017 | MPrecise | Magic Precision |
| 1018 | AtkMst | Attack Mastery |
| 1019 | DefMst | Defense Mastery |

### Interaction Stats (1020–1025)

| ID | Name | Purpose |
|----|------|---------|
| 1020 | PlayerAtkSkillA | Player ATK from skill A |
| 1021 | PlayerDefSkillA | Player DEF from skill A |
| 1022 | AtkPlayerSpirt | Spirit ATK contribution (5-tier) |
| 1023 | DefPlayerSpirt | Spirit DEF contribution (5-tier) |
| 1024 | PlayerAtkAttackA | Player ATK from attack A |
| 1025 | PlayerDefAttackA | Player DEF from attack A |

### Combat Mechanics (1026–1070)

| ID | Name | Purpose |
|----|------|---------|
| 1026 | DoubleHit | Double attack chance (5-tier) |
| 1027 | CharstateCd | Cooldown reduction (5-tier) |
| 1028 | Pass | Unknown |
| 1029 | Hit | General hit rate (5-tier) |
| 1030 | EffectHit | CC/debuff accuracy (5-tier) |
| 1031 | EffectBlock | CC/debuff resistance (5-tier) |
| 1032 | BuffTimeAdd | Buff duration increase (5-tier) |
| 1033 | BuffTimeMns | Debuff duration decrease (5-tier) |
| 1034 | ActiveSkillAddA | Active skill bonus A |
| 1035 | ActiveSkillSubA | Active skill reduction A |
| 1036 | TargetDamAdd | Target-specific damage bonus (5-tier) |
| 1037 | PvpDamDef | PvP damage reduction (5-tier) |
| 1038 | AllDamAdd | GDB — all damage increase (5-tier) |
| 1039 | AllDamDef | GDR — all damage reduction (5-tier) |
| 1040 | HealAdd | Healing bonus (5-tier) |
| 1041 | HealDef | Healing reduction (5-tier) |
| 1042 | CharstateReduceCdDef | CDR resistance (5-tier) |
| 1043 | CharstateDoubleHitDef | Double hit defense |

### Per-Action-Type Crit (1044–1055)

| ID | Name | Purpose |
|----|------|---------|
| 1044 | AttackCrit | Normal attack crit rate |
| 1045 | CharstateAttackCritDef | Normal attack crit resistance |
| 1046 | CharstateAttackCritDam | Normal attack crit damage (5-tier) |
| 1047 | CharstateAttackCritDamDef | Normal attack crit damage defense (5-tier) |
| 1048 | CoreSkillCrit | Core skill crit rate |
| 1049 | CharstateSkillCritDef | Skill crit resistance |
| 1050 | CharstateSkillCritDam | Skill crit damage (5-tier) |
| 1051 | CharstateSkillCritDamDef | Skill crit damage defense (5-tier) |
| 1052 | ActiveSkillCrit | Active skill crit rate |
| 1053 | CharstateBuffCritDef | Buff crit resistance |
| 1054 | CharstateBuffCritDam | Buff crit damage (5-tier) |
| 1055 | CharstateBuffCritDamDef | Buff crit damage defense (5-tier) |

### Skill & Speed (1056–1070)

| ID | Name | Purpose |
|----|------|---------|
| 1056–1061 | PlayerAtk/Def Attack/Skill B, ActiveSkill Add/Sub B | Action type B variants |
| 1062 | CharstateMaxEnergy | Max energy |
| 1063 | CharStateAtkSpeed | Attack speed (separate from Speed) |
| 1064 | CharStateChargeTimeReduction | Charge time reduction |
| 1065 | CharStateReduction | General reduction |
| 1066 | CharStateRecoverEnergyIncrease | Energy recovery increase |
| 1067–1070 | PassiveSkillAdd/Sub A/B | Passive skill modifiers |

### Damage Type Bonuses (1071–1110)

| ID Range | Name | Purpose |
|----------|------|---------|
| 1071–1080 | DamageTypeAdd1–10 | Element/type damage bonus |
| 1081–1085 | FixedAdd Attack/CoreSkill/ActiveSkill/PassiveSkill/Spirit | Fixed source bonuses |
| 1086–1090 | SkillDamage Add/Sub A/B, FixedAdd | Skill damage modifiers |
| 1091–1094 | FieldSkill CD/DamageAdd/Sub/Fixed | Field skill modifiers |
| 1095–1099 | AllSkillType Add/Sub A/B, Fixed | All skill type modifiers |
| 1100 | DamageMaxHp | Max HP-based damage |
| 1101–1110 | DamageTypeFixed1–10 | Fixed element/type damage |

### Focus/Crit2 (1112–1115)

| ID | Name | Purpose |
|----|------|---------|
| 1112 | Crit2 | Focus rate (= second crit) |
| 1113 | Crit2_Def | Focus resistance |
| 1114 | Crit2_DAM | Focus damage |
| 1115 | Crit2_DAM_DEF | Focus damage defense |

### DILI, Dodge, Monster (1116–1121)

| ID | Name | Purpose |
|----|------|---------|
| 1116 | DILI | Low-HP damage reduction (defender stat) |
| 1117 | DODGE | Dodge rate |
| 1118 | DODGE_DEF | Anti-dodge |
| 1119 | MONSTER_DAM_ADD | Monster damage bonus |
| 1120 | CRIT_EXTRA_ADD | Extra crit multiplier |
| 1121 | CRIT2_EXTRA_ADD | Extra focus multiplier |

### Source-Specific Damage (1127–1144)

| ID | Name | Chinese | Purpose |
|----|------|---------|---------|
| 1127/1128 | HUANHUA_DAM_ADD/DEF | 幻化 | Outfit damage bonus/defense |
| 1129/1130 | QILING_DAM_ADD/DEF | 器灵 | Spirit damage bonus/defense |
| 1131/1132 | FAZE_DAM_ADD/DEF | 法则 | Artifact damage bonus/defense |
| 1133/1134 | PET_DAM_ADD/DEF | | Pet damage bonus/defense |
| 1135–1144 | *_B variants | | Second tier source bonuses |

### Break/POLING & Energy (1146–1154)

| ID | Name | Chinese | Purpose |
|----|------|---------|---------|
| 1146 | CHARSTATE_DILI_DEF | | DILI defense (attacker stat) |
| 1147 | CHARSTATE_LINGLI_RECOVERY | 灵力 | Energy recovery rate |
| 1148 | CHARSTATE_LINGLI | | Current energy |
| 1149 | CHARSTATE_LINGLI_MAX | | Max energy |
| 1150 | CHARSTATE_POLING | 破灵 | Break rate |
| 1151 | CHARSTATE_POLING_DEF | | Break resistance |
| 1152 | CHARSTATE_POLING_DAM | | Break damage |
| 1153 | CHARSTATE_POLING_DAM_DEF | | Break damage defense |
| 1154 | CHARSTATE_POLING_EXTRA_ADD | | Extra break multiplier |

### Meta-Stats (Low IDs)

| ID | Name | Purpose |
|----|------|---------|
| 59 | ATK_FIXED | Fixed ATK bonus |
| 72–74 | ENHANCEMENT_ATK/DEF/HP_ADD | Enhancement bonuses |
| 81–90 | RACE_1_ATK_PER1–10 | Race-specific ATK % |
| 91–100 | AREA_1_ATK_PER1–10 | Area-specific ATK % |
| 101–156 | GAMEPLAY_1–16_ATK_PER | Mode ATK bonuses |
| 116/117 | HOOK_AWARD/TIME_ADD | AFK reward/time |
| 121–171 | GAMEPLAY_1–16_DAM | Mode damage |
| 136–186 | GAMEPLAY_1–16_DEF | Mode defense |
| 9999 | hudunBase | Shield base (护盾) |

### System Constants
- `_NumericType.Max = 1e4` (10000 = 100% in basis points)

---

## 5-Tier Stat Scaling

Every stat with "(5-tier)" uses sub-components at `10 × StatID + offset`:

```javascript
_NumericType.SpeedBase = 10 * _NumericType.Speed + 1    // 10071
_NumericType.SpeedAdd = 10 * _NumericType.Speed + 2     // 10072
_NumericType.SpeedPct = 10 * _NumericType.Speed + 3     // 10073
_NumericType.SpeedFinalAdd = 10 * _NumericType.Speed + 4 // 10074
_NumericType.SpeedFinalPct = 10 * _NumericType.Speed + 5 // 10075
```

Likely formula: `FinalStat = ((Base + Add) × (1 + Pct/10000) + FinalAdd) × (1 + FinalPct/10000)`

---

## Protobuf Structures

### AttackResult
```
damage: int32          // Final damage value
damageType: int32      // Normal, Crit, Focus, Break, True
isCrit: bool           // Independent
isFocus: bool          // Independent
isBreak: bool          // Independent
```

### dmgSubType Bitmask
```
0x01 = Crit (dmgSubType |= 1)
0x02 = Block (dmgSubType |= 2)
0x04 = Dodge (dmgSubType |= 4)
0x20 = Focus/Crit2 (dmgSubType |= 32)
0x200 = Break/POLING (dmgSubType |= 512)
```

---

## Config Tables (Loaded from CDN)

| File | Purpose |
|------|---------|
| Buff.json | Buff/debuff definitions |
| skillInitialSlot.json | Starting skill slots |
| skillSlotData.json | Skill slot progression |
| faxiang_huanhua.json | Outfit system (法相幻化) |
| faxiang_baoshi.json | Artifact gems (法相宝石) |
| faxiang_base.json | Artifact base (法相) |
| faxiang_equip_main.json | Artifact equipment |
| CareerDislayConfig.json | Class display |
| UnitConfig.json | Unit configs |
| dungeon_data.json | Dungeon data |
| color.json | Rarity colors |
| skillDecData | Skill data (referenced in code) |
| SkillJudgeConfig | Skill targeting config |
| itemBase | Item definitions |

---

## Code Constants

```javascript
SkillHelper.LevelDemolition = 1000
SkillHelper.LevelUnit = 30
MathUtil.speedS2C(t) = t / 100           // Server→Client speed conversion
MathUtil.posC2S(x, y) = {floor(100*x), floor(-100*y)}  // Client→Server position
```

---

## Architecture

- **Engine:** Laya Engine + FairyGUI
- **Protocol:** WebSocket + protobuf
- **ECS:** Entity Component System (`ECSEntity`, `ECSComponent`, `ECSSystem`)
- **Bundle format:** esbuild-generated, single IIFE, `__commonJS` wrappers
- **FPS target:** 40
- **Design resolution:** 720×1584 (mobile portrait)
- **BigNumber class:** Custom implementation for values exceeding 2^53

---

## Open Questions

- [ ] Values of `MIN_DMG_ATK_PCT`, `Hit_RATIO`, `BLOCK_RATIO` (defined elsewhere in bundle)
- [ ] `CRIT2_MIN_PCT` value (likely 2.0)
- [ ] How `PvpDamDef` (1037) applies — separate multiplier step or folded into GDR?
- [ ] What `AtkMst` (1018), `DefMst` (1019), `Pass` (1028) do
- [ ] Full buff type definitions (Buff 11, 16, 25, etc.)
- [ ] Skill coefficient tables per level (in CDN config, not embedded)
- [ ] Movement/Speed formula for combat timing
- [ ] Energy recovery base rate formula
