# Deep Dive: Parry (Block) & Penetration Mechanics

> **Source:** Decompiled `bundle-ac7a6.js` — `BattleHelper.calcDamageNew()` (L413500+),
> `_NumericType` enum (L127017), `SpellSystem.onColliderIn()` (L224050+)
>
> **All findings are code-verified. No community wiki sources.**

---

## TL;DR

| Mechanic | LoE Internal Name | How It Works |
|----------|------------------|--------------|
| **Parry** | Block (格挡) / `PBlock` | Contested stat roll → 50% damage reduction |
| **Anti-Parry** | Attacker's `PBlock` | Reduces defender's block chance directly |
| **Defense Penetration** | `PHit` (命中) | Reduces effective DEF by up to 50% |
| **Defense Ignore** | `ignoreDefPct` | Per-skill % that bypasses DEF entirely |
| **Precision** | `PPrecise` / `MPrecise` | Defined but **unused** in damage formula |

LoE has no stat literally called "penetration." The equivalent functionality is split
across **PHit** (stat-based defense reduction) and **ignoreDefPct** (skill-based
defense bypass). Block/Parry is a single contested roll with a binary 50% damage cut.

---

## 1. Block (Parry) — 格挡

### 1.1 Core Formula

**Source:** `stat_system_O_L413500.js` lines 15–21

```javascript
// C = target (defender), U = attacker
const G = C.GetAsInt(NumericType.PBlock),    // Defender's PBlock
      Y = U.GetAsInt(NumericType.PBlock),    // Attacker's PBlock
      j = G - Y;                              // Block differential

let q = 0;
q = Math.min(.5, j * BLOCK_RATIO);           // Block chance (capped at 50%)

const X = Math.random() < q && j > 0;        // Roll + must have positive diff
X && (f.dmgSubType |= 2, B *= .5);           // If blocked: flag + halve damage
```

Debug output confirms:
```
"-------------gedangchengqu-----------"    // 格挡乘区 = "block multiplier zone"
"my block:" + Y                            // Attacker's block value
"enemy block:" + G                         // Defender's block value
"isTriggleBlock:" + X                      // Block triggered?
"blockFactor:" + q                         // Computed block chance
```

### 1.2 Key Properties

| Property | Value | Evidence |
|----------|-------|----------|
| Stat ID | 1014 (`PBlock`) | NumericType enum |
| Magic variant | 1015 (`MBlock`) | Enum only — **not in extracted damage formula** |
| Chance cap | **50%** | `Math.min(.5, ...)` |
| Damage reduction | **50%** (flat) | `B *= .5` |
| Scaling constant | `BLOCK_RATIO` | **Unknown value** — not yet extracted |
| Prerequisite | `blockDiff > 0` | Attacker's block >= defender's → **impossible to block** |
| Damage phase | Step 4 of 11 | After dodge/base damage/skill ratio, **before** crit |
| Bitmask flag | `0x02` (2) | `dmgSubType \|= 2` |

### 1.3 Stat Scaling (5-Tier)

PBlock uses the standard 5-tier sub-component system:

| Sub-ID | Name | Formula Role |
|--------|------|-------------|
| 10141 | `PBlockBase` | Base value (equipment, level) |
| 10142 | `PBlockAdd` | Flat additions (buffs, passives) |
| 10143 | `PBlockPct` | Percentage scaling |
| 10144 | `PBlockFinalAdd` | Final flat addition |
| 10145 | `PBlockFinalPct` | Final percentage scaling |

**Computed:** `FinalPBlock = ((Base + Add) × (1 + Pct/10000) + FinalAdd) × (1 + FinalPct/10000)`

MBlock (10150–10155) follows the same pattern for magic damage.

### 1.4 How Block Chance Really Works

```
blockDiff = defender.PBlock - attacker.PBlock
blockChance = min(0.50, blockDiff × BLOCK_RATIO)
```

This is a **pure contested stat** — both attacker and defender use the same stat (`PBlock`).
The "anti-parry" mechanic is simply the attacker investing in their own PBlock stat to
reduce the differential. There is **no separate "block penetration" or "anti-block" stat**.

**Example** (assuming BLOCK_RATIO = 0.001):
- Defender PBlock = 800, Attacker PBlock = 300
- blockDiff = 500
- blockChance = min(0.50, 500 × 0.001) = min(0.50, 0.50) = **50%** (capped)

**Example** (attacker invests in PBlock):
- Defender PBlock = 800, Attacker PBlock = 700
- blockDiff = 100
- blockChance = min(0.50, 100 × 0.001) = **10%**

### 1.5 Block in the Damage Pipeline

Block occurs at **Step 4** — after the base damage is already computed but before
multiplicative crit/focus/break layers:

```
Step 1: Dodge         → may skip entirely (cap 70%)
Step 2: Base Damage   → ATK - (1 - ignoreDefPct) × DEF × hitMult
Step 3: Skill Ratio   → damage × (coefficient / 10000)
Step 4: BLOCK         → if triggered, damage × 0.5    ← HERE
Step 5: DILI          → low-HP damage reduction (cap 90%)
Step 6: Crit          → damage × critMultiplier (min 200%)
Step 7: Focus (Crit2) → damage × focusMultiplier (min 200%)
Step 8: Break (POLING) → damage × breakMultiplier (min 200%)
Step 9: GDB/GDR       → damage × max(0.3, 1 + AllDamAdd - AllDamDef)
Step 10: Source Bonus  → per-action-type modifiers
Step 11: Buff Mods     → buff 11, 16, 25, etc.
```

**Critical interaction:** Block is applied **before** crit. A blocked hit can still crit.
If both trigger, the damage is: `base × 0.5 × critMult`. This means block doesn't
prevent crits — it just halves the base that crits multiply.

### 1.6 Block + Crit Interaction (Worked Example)

Given: base damage = 10,000, block triggers, crit triggers (200% mult)

```
After block:  10,000 × 0.5   = 5,000
After crit:    5,000 × 2.0   = 10,000
Net effect:   10,000 × 0.5 × 2.0 = 10,000  (block + crit cancel out at base crit)
```

Without block: `10,000 × 2.0 = 20,000`

So block still provides a meaningful 50% damage reduction even when crit procs.

---

## 2. Penetration — Defense Bypass Mechanics

LoE has **no stat named "penetration."** Defense bypass is achieved through three
independent mechanisms that stack multiplicatively in the damage formula.

### 2.1 PHit — Statistical Defense Reduction

**Source:** `stat_system_O_L413500.js` lines 11–14

```javascript
const N = C.GetAsInt(NumericType.PHit),      // Defender's PHit
      F = U.GetAsInt(NumericType.PHit) - N;  // Attacker's PHit advantage

let H = 1;  // hitMult (defense effectiveness multiplier)
F > 0 && (H = 1 - Math.min(.5, F * Hit_RATIO));

B = Math.max(x * MIN_DMG_ATK_PCT, x - (1 - a) * C.GetAsInt(NumericType.PDef) * H);
```

Debug output:
```
"isHit:" + (F > 0)
"(1-(fromPHit-toPHit)*0.1%)=" + H    // Note: 0.1% per point if Hit_RATIO = 0.001
```

**How it works:**

```
hitDiff = attacker.PHit - defender.PHit
if (hitDiff > 0):
    hitMult = 1 - min(0.50, hitDiff × Hit_RATIO)
else:
    hitMult = 1.0  (no effect)

effectiveDef = PDef × hitMult
```

| Property | Value | Evidence |
|----------|-------|----------|
| Stat ID | 1012 (`PHit`) | Physical; 1013 (`MHit`) for Magic |
| Cap | **50%** DEF reduction | `Math.min(.5, ...)` |
| Scaling constant | `Hit_RATIO` | **Likely 0.001** from debug "(0.1%)" |
| Prerequisite | Attacker PHit > Defender PHit | Otherwise hitMult = 1.0 (no effect) |
| Mechanism | Reduces effective defense | DEF × hitMult in formula |

**Example** (assuming Hit_RATIO = 0.001):
- Attacker PHit = 500, Defender PHit = 200, Defender PDef = 10,000
- hitDiff = 300
- hitMult = 1 - min(0.50, 300 × 0.001) = 1 - 0.30 = **0.70**
- Effective DEF = 10,000 × 0.70 = **7,000** (30% defense bypassed)

### 2.2 ignoreDefPct — Skill-Based Defense Ignore

**Source:** `stat_system_O_L413500.js` line 14

```javascript
B = Math.max(x * MIN_DMG_ATK_PCT, x - (1 - a) * C.GetAsInt(NumericType.PDef) * H);
//                                      ^^^
//                                      a = ignoreDefPct
```

The variable `a` is passed into `calcDamageNew()` as the 7th parameter (default 0):

```javascript
static calcDamageNew(e, i, s, o, n, r, a = 0, l = !1)
//                                      ^ ignoreDefPct
```

**How it works:**

```
effectiveDef = (1 - ignoreDefPct) × PDef × hitMult
baseDamage = max(ATK × MIN_DMG_ATK_PCT, ATK - effectiveDef)
```

- `ignoreDefPct = 0` → full defense applies (most attacks)
- `ignoreDefPct = 0.3` → 30% of defense is ignored
- `ignoreDefPct = 1.0` → 100% defense ignore (pure ATK damage)

This value comes from **skill configuration data** (CDN config tables), not from
a player stat. Individual skills can have different ignore percentages.

### 2.3 Combined Defense Formula

Putting PHit and ignoreDefPct together:

```
effectiveDef = (1 - ignoreDefPct) × PDef × hitMult

where:
    hitMult = 1 - min(0.50, max(0, attacker.PHit - defender.PHit) × Hit_RATIO)

baseDamage = max(ATK × MIN_DMG_ATK_PCT, ATK - effectiveDef)
```

**Full penetration example:**
- ATK = 15,000
- Defender PDef = 12,000
- ignoreDefPct = 0.2 (skill ignores 20% def)
- Attacker PHit = 600, Defender PHit = 100 (hitDiff = 500, hitMult = 0.50)

```
effectiveDef = (1 - 0.2) × 12,000 × 0.50
             = 0.8 × 12,000 × 0.50
             = 4,800

baseDamage = max(15,000 × MIN_DMG_ATK_PCT, 15,000 - 4,800)
           = max(???, 10,200)
           ≈ 10,200
```

Without any penetration: `15,000 - 12,000 = 3,000`
With full penetration stack: **10,200** (3.4× more damage)

### 2.4 PPrecise / MPrecise — The Ghost Stats

**Source:** `formula__NumericType_L127017.js` line 8

```
_NumericType.PPrecise = 1016    // Physical Precision
_NumericType.MPrecise = 1017    // Magic Precision
```

With full 5-tier sub-components (10161–10165, 10171–10175).

**Status: DEFINED BUT UNUSED IN EXTRACTED CODE**

- Not referenced anywhere in `calcDamageNew()`
- Not referenced in `onColliderIn()`
- Not found in any extracted damage calculation fragment
- No debug log mentions "precise" or "精准"

Possible explanations:
1. **Reserved for future use** — stat slots allocated but mechanic not yet implemented
2. **Used in non-damage context** — e.g., targeting accuracy for AoE/CC
3. **Used server-side only** — not present in client-side damage calc
4. **Deprecated** — was once used, now vestigial

These stats **do exist** in the game's stat system (equipment can presumably grant them),
but they have **no observed effect** on the damage formula.

---

## 3. Block vs. Penetration Interaction

Block and PHit/ignoreDefPct operate on **completely different phases** of the damage
pipeline and **do not interact**:

```
                    ┌─────────────────────────────────────┐
                    │  ATK vs DEF (Step 2)                │
                    │                                     │
  PHit ────────────►│  effectiveDef = (1-ign) × DEF × H  │
  ignoreDefPct ────►│  baseDamage = ATK - effectiveDef    │
                    └──────────────┬──────────────────────┘
                                   │
                                   ▼
                    ┌─────────────────────────────────────┐
                    │  Skill Ratio (Step 3)               │
                    │  damage × coefficient               │
                    └──────────────┬──────────────────────┘
                                   │
                                   ▼
                    ┌─────────────────────────────────────┐
                    │  BLOCK CHECK (Step 4)               │
                    │                                     │
  defender.PBlock──►│  diff = def.PBlock - atk.PBlock     │
  attacker.PBlock──►│  chance = min(50%, diff × RATIO)    │
                    │  if triggered: damage × 0.5         │
                    └──────────────┬──────────────────────┘
                                   │
                                   ▼
                           [Crit, Focus, etc.]
```

**Key insight:** Penetration (PHit) cannot prevent a block. Block cannot mitigate
penetration's effect on defense. They are independent systems. The only way to counter
block is to invest in the attacker's own PBlock stat.

---

## 4. Strategic Implications

### 4.1 When to Invest in PBlock (Attacker)

Raising your PBlock as an **attacker** reduces the enemy's block chance. This is
the only "anti-parry" mechanism available. However:

- The block check uses `GetAsInt()` (integer values), not floats
- Small PBlock advantages over the defender yield low block chances
- At blockDiff ≤ 0, block is **impossible** — fully countered
- Diminishing returns above the 50% cap

**Verdict:** Moderate value. Useful if facing high-block defenders. Becomes worthless
once your PBlock matches theirs.

### 4.2 When to Invest in PHit

PHit reduces effective defense but has quirks:

- **Contested** — your PHit must exceed the defender's PHit to have any effect
- **Capped at 50%** defense reduction through this mechanic alone
- **Stacks multiplicatively** with ignoreDefPct
- More valuable against high-DEF targets
- Worthless if defender's PHit matches or exceeds yours

**Verdict:** High value against tanks. PHit + ignoreDefPct skills can bypass up to
`1 - (1-0.5) × 0.5 = 75%` of defense (50% from PHit cap + 50% of remainder from
ignoreDefPct=0.5).

### 4.3 Maximum Theoretical Defense Bypass

```
maxBypass = 1 - (1 - ignoreDefPct) × (1 - min(0.5, hitDiff × Hit_RATIO))

With ignoreDefPct = 1.0 (if any skill has this):
    maxBypass = 100%  (pure ATK damage)

With ignoreDefPct = 0.5, PHit at cap:
    maxBypass = 1 - 0.5 × 0.5 = 75%

With ignoreDefPct = 0, PHit at cap:
    maxBypass = 50%
```

---

## 5. Data Gaps & Open Questions

| Question | Status | How to Resolve |
|----------|--------|----------------|
| `BLOCK_RATIO` value | **Unknown** | Console dump script / wider bundle search |
| `Hit_RATIO` value | **Likely 0.001** | Debug string "(0.1%)" suggests per-point |
| `MIN_DMG_ATK_PCT` value | **Unknown** | Console dump / bundle constant search |
| MBlock in magic damage path | **Not captured** | May use same formula with MDef/MHit |
| PPrecise/MPrecise purpose | **Unknown** | May be unused or server-side only |
| Skill ignoreDefPct values | **Need CDN data** | Config table extraction needed |
| Buff effects on block | **Uncatalogued** | Need Buff.json from CDN |
| MHit in magic formula | **Assumed mirror** | Need magic damage path extraction |

### Console Script to Extract Missing Constants

Use `tools/dump_configs.js` (paste in DevTools after game loads) to attempt extraction
of `BLOCK_RATIO`, `Hit_RATIO`, and `MIN_DMG_ATK_PCT` from the game's runtime globals.

---

## 6. Source File Index

| File | What It Contains |
|------|-----------------|
| `raw_extractions/js_fragments/stat_system_O_L413500.js` | Block + PHit formulas in `calcDamageNew()` |
| `raw_extractions/js_fragments/formula__NumericType_L127017.js` | Full stat enum (PBlock, MBlock, PHit, PPrecise, etc.) |
| `raw_extractions/js_fragments/gacha_draw_setData_L413365.js:108` | `calcDamageNew()` function signature |
| `raw_extractions/js_fragments/stat_system_a_L224050.js:90` | `onColliderIn()` — calls calcDamageNew with ignoreDefPct |
| `loe_reverse_engineering/game_data/stat_formulas.md` | Full damage pipeline documentation |
