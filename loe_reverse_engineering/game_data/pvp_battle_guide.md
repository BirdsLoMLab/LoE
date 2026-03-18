# Legend of Elements — PvP Battle Systems & Stats (Plain Language Guide)

> **Status**: COMMUNITY-SOURCED — Based on community guides, player testing, and public wiki data.
> Exact server-side values pending reverse engineering confirmation.

---

## Table of Contents

1. [How PvP Works](#1-how-pvp-works)
2. [The Damage Formula (How Hits Are Calculated)](#2-the-damage-formula)
3. [Core Stats Explained](#3-core-stats-explained)
4. [Classes](#4-classes)
5. [Skills](#5-skills)
6. [Mounts](#6-mounts)
7. [Outfits](#7-outfits)
8. [Artifacts](#8-artifacts)
9. [Back Accessories](#9-back-accessories)
10. [Pets & Spirits](#10-pets--spirits)
11. [Relics](#11-relics)
12. [Speed & Cast Time System](#12-speed--cast-time-system)

---

## 1. How PvP Works

Legend of Elements is an idle RPG, so PvP battles are **mostly automated**. You set up your character build, skills, equipment, and team — then your character fights on its own.

### PvP Modes
- **Arena** — The main PvP mode. You fight other players' characters in 1v1 or team-based matchups. Rankings determine rewards.
- **Cross-Server Arena** — Compete against players from other servers for higher-tier rewards.
- **Real-Time PvP** — Some modes allow live head-to-head matches where both players watch the battle unfold.

### What Matters in PvP
Since battles are automated, winning comes down to:
- **Raw stats** — Your total Combat Power (CP) from gear, upgrades, spirits, mounts, etc.
- **Class matchup** — Some classes naturally counter others.
- **Skill build** — Which skills you've leveled and equipped.
- **Speed** — Faster characters get more attacks in, which can snowball fights.
- **Damage gates** — Crit, Focus, and Break mechanics create "gates" that multiply your damage.

**In plain terms**: PvP is a gear check plus a build check. The player with better stats and a smarter skill setup usually wins.

---

## 2. The Damage Formula

This is how the game calculates every hit of damage. Understanding it tells you which stats to prioritize.

### The Basic Formula (Community-Sourced)
```
Final Damage = Base Damage × Crit Multiplier × Focus Multiplier × Break Multiplier × GDB/GDR Multiplier
```

**In plain terms**: Your base damage gets multiplied by several bonus layers. Each layer is a "gate" — if you trigger it, your damage jumps. If you don't, that multiplier is just 1× (no change).

### Breaking Down Each Part

#### Base Damage
Your ATK stat minus the defender's DEF, modified by the skill's damage coefficient. Each skill has a hidden percentage (like "1060% of ATK") that determines how hard it hits.

#### Crit Gate (Critical Hit)
- **Crit Rate** — Your chance to land a critical hit (percentage).
- **Crit Damage** — How much extra damage a crit does (e.g., +150% means 2.5× normal damage).
- If you crit: damage is multiplied by `(1 + CritDmg%)`.
- If you don't crit: this multiplier is just 1×.

**In plain terms**: Crit is your "lucky hit" bonus. High crit rate means you land crits often; high crit damage means each crit hits like a truck.

#### Focus Gate
- **Focus Rate** — Your chance to trigger a "focused" hit.
- **Focus Damage** — The bonus damage from a focused hit.
- Works just like crit but is a separate roll. You can crit AND focus on the same hit.

**In plain terms**: Focus is a second crit-like system. It's another dice roll that can multiply your damage on top of crit. Having both crit and focus means you have two chances to get bonus damage every attack.

#### Break Gate
- **Break Rate** — Your chance to "break" the enemy's defense.
- **Break Damage** — The extra damage when you break through.
- Again, this is a separate roll from crit and focus.

**In plain terms**: Break is a third multiplier layer. When all three gates (crit + focus + break) trigger on the same hit, your damage is enormous. This is why late-game players stack all three rates.

#### GDB and GDR (Global Damage Bonus vs. Global Damage Reduction)
```
GDB/GDR Multiplier = max(0.3, 1 + Your_GDB - Enemy_GDR)
```

- **GDB (Global Damage Bonus)** — A flat percentage added to ALL your damage.
- **GDR (Global Damage Reduction)** — A flat percentage that reduces ALL incoming damage.
- The formula means: if your GDB is higher than their GDR, you deal bonus damage. If their GDR is higher, your damage is reduced — but never below 30% (the 0.3 floor).

**In plain terms**: GDB is your "always-on" damage boost. GDR is your "always-on" damage shield. The attacker's GDB fights against the defender's GDR. Even if the defender has massive GDR, they can never reduce your damage below 30% of what it would normally be.

### Why This Matters for PvP
- **Stacking multiple gates** (crit + focus + break) creates multiplicative scaling — your damage grows exponentially, not linearly.
- **GDR is the best defensive stat** because it reduces ALL damage regardless of type.
- **GDB is the best offensive stat** because it boosts ALL damage regardless of source.

---

## 3. Core Stats Explained

Here's every major stat and what it actually does for your character.

### Offensive Stats

| Stat | What It Does | Plain Language |
|------|-------------|----------------|
| **ATK (Attack)** | Base damage for all your attacks and skills | The foundation of your damage. Higher ATK = harder hits. |
| **Crit Rate** | Chance (%) to land a critical hit | How often you roll a "lucky hit." |
| **Crit Damage** | Bonus damage (%) when you crit | How much bigger your lucky hits are. |
| **Focus Rate** | Chance (%) to land a focused hit | A second "lucky hit" roll, separate from crit. |
| **Focus Damage** | Bonus damage (%) from focused hits | How much bigger your focused hits are. |
| **Break Rate** | Chance (%) to break enemy defense | A third "lucky hit" roll that ignores some defense. |
| **Break Damage** | Bonus damage (%) when you break | How much extra damage you deal on a break. |
| **GDB (Global Damage Bonus)** | Flat % added to all damage dealt | An always-on damage multiplier for everything. |
| **Damage Bonus** | Extra damage % (may be skill-specific) | Additional damage that may apply to certain types of attacks. |
| **Penetration** | Ignores a portion of enemy DEF | Helps you punch through tanky opponents. |

### Defensive Stats

| Stat | What It Does | Plain Language |
|------|-------------|----------------|
| **HP (Health Points)** | Total health pool | How much damage you can take before dying. |
| **DEF (Defense)** | Reduces incoming base damage | Your armor — reduces the raw damage number before multipliers. |
| **GDR (Global Damage Reduction)** | Flat % reduction on all incoming damage | An always-on damage shield. The best defensive stat. |
| **Evasion/Dodge** | Chance (%) to completely avoid an attack | Sometimes you dodge entirely and take zero damage. |
| **Block** | Chance (%) to block and reduce damage | Partial damage reduction on block (less than dodge, more reliable). |
| **Resistance** | Reduces effects of debuffs and status effects | Helps you resist crowd control and negative effects. |

### Utility Stats

| Stat | What It Does | Plain Language |
|------|-------------|----------------|
| **Speed** | Reduces cast time and GCD (global cooldown) | How fast your character attacks. More speed = more attacks per second. |
| **Haste** | Similar to speed; may reduce cooldowns | Speeds up your action cycle. |
| **Accuracy** | Counters enemy evasion | Makes your attacks more likely to land against dodgy opponents. |
| **Energy** | Resource used to cast skills | You spend energy on skills and regenerate it through basic attacks. |

### Hidden/Derived Stats

| Stat | What It Does | Plain Language |
|------|-------------|----------------|
| **Combat Power (CP)** | Summary number combining all stats | A rough "power level" indicator. Higher = generally stronger. |
| **DILI** | Damage-In / Damage-Out ratio (internal) | An internal calculation the game uses for matchup balance. |

---

## 4. Classes

Legend of Elements has **3 classes**. Each has a distinct playstyle, especially in PvP.

### Swordsman
- **Role**: Fast, evasive, single-target burst damage dealer
- **Playstyle**: Hit hard, hit fast, dodge attacks
- **Key Stats**: Speed, Crit Rate, Crit Damage, ATK, Evasion
- **PvP Strengths**: Highest burst damage in the game. Can delete enemies before they react. Great at picking off squishier targets.
- **PvP Weaknesses**: Fragile if caught. Relies on evasion which is unreliable. If the enemy survives the initial burst, Swordsman struggles in extended fights.

**In plain terms**: The Swordsman is the assassin. Fast, deadly, but glass-cannon. In PvP, you either kill them first or they kill you.

**Key Skills**:
- **Empyrean Sword** (Core Skill) — Massive single-target hit at 1060% ATK + flat damage. This is the Swordsman's nuke.
- **Divining Blade** (Active) — Boosts ATK Speed by 95% for 8 seconds and adds 22% damage. A steroid skill that makes the Swordsman go into overdrive.
- **Tidebreaker** — Deals 30% ATK to a single target. Quick, low-cost poke.
- **Draconic Strike** — 3 hits of 320% ATK in an AoE circle. The Swordsman's only real AoE.

### Sorcerer (Mage)
- **Role**: AoE damage dealer with elemental abilities and shields
- **Playstyle**: Stay at range, blast groups of enemies, use shields for survival
- **Key Stats**: ATK, Elemental Damage, HP, DEF, Spell Power
- **PvP Strengths**: Best AoE damage. Can hit multiple targets. Defensive shields help survive burst.
- **PvP Weaknesses**: Slower than Swordsman. If a Swordsman closes the gap, the Sorcerer can be overwhelmed.

**In plain terms**: The Sorcerer is the mage. Big area damage, decent survivability through shields, but slower and more vulnerable to being rushed.

### Warrior
- **Role**: Consistent damage dealer with debuff stacking
- **Playstyle**: Steady, sustained damage. Stacks debuffs to wear enemies down over time.
- **Key Stats**: ATK, HP, DEF, Consistency stats
- **PvP Strengths**: Most well-rounded class. Good survivability AND damage. Debuff stacking punishes longer fights. High attack rate means consistent damage even without crits.
- **PvP Weaknesses**: Lower peak burst than Swordsman. Can be outranged by Sorcerer in team fights.

**In plain terms**: The Warrior is the bruiser. Not the flashiest, but reliable. Wins by outlasting opponents and grinding them down with steady hits and debuffs.

### Class Matchup Summary (PvP)
| Matchup | Favored | Why |
|---------|---------|-----|
| Swordsman vs Sorcerer | Swordsman | Speed and burst overwhelm the Sorcerer before shields matter |
| Sorcerer vs Warrior | Sorcerer | AoE and range keep the Warrior at bay; shields absorb sustained damage |
| Warrior vs Swordsman | Warrior | Survivability tanks the burst; debuffs and steady damage wear down the Swordsman |

> Note: Matchups depend heavily on gear and level. A well-geared player of any class can beat an undergeared counter-class.

---

## 5. Skills

Every class has three types of skills:

### Skill Types
- **Core Skill** — Your class-defining ability. Typically your highest-damage skill with a longer cooldown. This is what your build revolves around.
- **Active Skills** — Skills you equip (limited slots). These fire automatically in combat based on priority and cooldown. Includes buffs, attacks, and utility.
- **Passive Skills** — Always-on bonuses. These provide stat boosts or triggered effects without needing activation.

### Energy System
- Skills cost **Energy** to use.
- Energy regenerates through **Basic Attacks** (auto-attacks between skills).
- Speed affects how fast you auto-attack, which means speed indirectly affects your energy regeneration.

**In plain terms**: Your character auto-attacks to build energy, then spends that energy on skills. Faster characters build energy faster, so they can use skills more often. It's like a fighting game — jabs build meter, specials spend meter.

### Skill Upgrading
- Skills level up using resources.
- Higher skill levels increase the damage coefficient (e.g., Empyrean Sword goes from 800% ATK at low level to 1060%+ at high level).
- Some skills gain bonus effects at certain level thresholds.

### Skill Build Strategy (PvP)
- **Swordsman**: Maximize Empyrean Sword and Divining Blade. Speed + Crit build. Goal: kill before they act.
- **Sorcerer**: Balance AoE damage skills with defensive shield skills. Goal: survive and outlast.
- **Warrior**: Core skill + debuff actives + passive survivability. Goal: stack debuffs and wear them down.

---

## 6. Mounts

Mounts are **stat-boosting companions** that your character rides. They are NOT just cosmetic — they provide significant combat stats.

### What Mounts Do
- Provide **flat stat bonuses** (ATK, HP, DEF, Speed, etc.)
- Higher-rarity mounts give more stats
- Mounts can be **upgraded** to increase their stat bonuses
- Some mounts have **special abilities** or passive effects

### Mount Progression
1. **Obtain** — Acquire mounts through events, gacha, quests, or shops
2. **Equip** — Set your active mount (only one active at a time, but inactive mounts still contribute passive stats in some systems)
3. **Upgrade/Enhance** — Feed resources to increase mount level and stats
4. **Star Up** — Use duplicate mounts or special materials to increase star rating, which unlocks higher stat caps
5. **Advance** — At certain milestones, mounts gain qualitative upgrades

### Mount Rarity Tiers
| Tier | Color | Relative Power |
|------|-------|----------------|
| R (Rare) | Blue | Entry-level |
| SR (Super Rare) | Purple | Mid-tier |
| SSR (Super Super Rare) | Orange/Gold | Top-tier, endgame |

### PvP Impact
Mounts contribute directly to your Combat Power. In PvP, the stat difference from a maxed SSR mount vs. a low-level R mount can be the difference between winning and losing. Mount stats are added to your base stats before all the damage formula multipliers kick in, so they have a multiplicative effect on your total output.

**In plain terms**: Think of mounts as a permanent stat buff. The better your mount, the higher your base stats, and since damage scales multiplicatively, even small base stat increases from mounts translate to big damage/survivability gains.

---

## 7. Outfits

Outfits (also called skins or costumes) are **visual cosmetics that also provide stat bonuses**.

### What Outfits Do
- Change your character's appearance
- Provide **permanent stat bonuses** when owned (even if not visually equipped)
- Higher-rarity outfits give larger bonuses
- Some outfits provide unique visual effects in combat

### Outfit Stat System
- Each outfit adds flat stats (ATK, HP, DEF, etc.)
- Collecting multiple outfits often provides **collection bonuses** — additional stats for owning a set number of outfits
- Outfits can sometimes be **upgraded** or **enhanced** for additional stats

### How to Get Outfits
- Limited-time events
- Special gacha/banners
- Shop purchases (premium currency)
- Achievement rewards
- Progression milestones

### PvP Impact
Outfits are a "hidden" power source. Many players overlook them because they look cosmetic, but the cumulative stat bonuses from collecting and upgrading multiple outfits add up significantly.

**In plain terms**: Outfits are "pay-to-look-cool AND get stronger." Even F2P outfits from events add stats. Collect everything you can — the stat bonuses add up over time.

---

## 8. Artifacts

Artifacts are **powerful equippable items** that provide major stat boosts and sometimes special effects.

### What Artifacts Do
- Provide large stat bonuses (ATK, HP, DEF, and specialized stats like Crit Rate or GDB)
- Some artifacts have **special passive effects** (e.g., "Increases damage against targets below 50% HP by 15%")
- Artifacts can be **enhanced**, **refined**, and **upgraded** through material investment

### Artifact System
1. **Obtain** — Through gacha pulls, events, bosses, or progression rewards
2. **Equip** — Limited artifact slots per character
3. **Enhance** — Use materials to level up the artifact, increasing its base stats
4. **Refine** — Use duplicate artifacts to increase refinement rank, unlocking stronger passive effects
5. **Set Bonuses** — Equipping multiple artifacts from the same set may grant bonus effects

### Artifact Rarity
Follows the same R / SR / SSR tier system. SSR artifacts have the highest stat ceilings and the most powerful special effects.

### PvP Impact
Artifacts are one of the biggest sources of power in PvP. A well-refined SSR artifact with stats aligned to your build (e.g., Crit Damage artifact on a Swordsman) can dramatically increase your damage output. Artifacts with GDB or GDR effects are especially valuable because those stats affect everything.

**In plain terms**: Artifacts are your character's "signature weapons." They're expensive to max out but provide the biggest stat jumps per investment. In PvP, the player with better artifacts almost always has an edge.

---

## 9. Back Accessories

Back accessories (also called wings, capes, or back items) are **equippable items worn on the back** that provide stats and visual flair.

### What Back Accessories Do
- Provide flat stat bonuses (similar to mounts and outfits)
- Display visual effects (wings, capes, auras, etc.)
- Can be **upgraded** through materials and star-up systems
- Higher-tier back accessories grant larger stat bonuses

### Back Accessory Progression
1. **Obtain** — Events, gacha, shops, progression milestones
2. **Equip** — One active back accessory at a time (appearance), but collected ones may contribute passive stats
3. **Upgrade** — Level up for increased stats
4. **Star Up** — Use duplicates or materials for star progression
5. **Advance** — Unlock enhanced appearances and higher stat tiers

### PvP Impact
Similar to mounts and outfits — back accessories are another layer of base stats that feed into the multiplicative damage formula. Don't neglect them.

**In plain terms**: Wings and capes aren't just for show. They're another stat stick. Every upgrade to your back accessory makes every other multiplier in your build slightly more effective.

---

## 10. Pets & Spirits

Spirits (also called pets or companions) are **summoned allies** that fight alongside you and provide stat bonuses.

### What Spirits Do
- **Fight in combat** — Spirits have their own attacks and abilities
- **Provide passive stat bonuses** — Even when not directly attacking, spirits boost your character's stats
- **Elemental affinity** — Spirits have elemental types (Wind, Fire, Thunder) that may interact with your class or other systems
- **Team composition** — You can deploy multiple spirits, and their synergy matters

### Spirit Rarity & Types
| Tier | Examples | Power Level |
|------|----------|-------------|
| R | Common spirits | Low — early game only |
| SR | Mid-tier spirits | Moderate — useful through mid-game |
| SSR | Top-tier spirits (e.g., Shadowpaw) | High — endgame staples |

**Spirit Types by Role**:
- **Attack** — High damage output, boost your ATK
- **Attack Speed Buff** — Increase your speed (e.g., Shadowpaw)
- **Defense/Support** — Increase survivability, provide shields or healing
- **Debuff** — Apply negative effects to enemies

### Spirit Progression
1. **Summon** — Obtain spirits through gacha, events, or progression
2. **Level Up** — Spend resources to increase spirit level and stats
3. **Star Up** — Use duplicates or Star-Up materials to increase star rating (unlocks stat caps and new abilities)
4. **Inheritance** — Transfer stats/levels from one spirit to another (lets you upgrade without losing investment)
5. **Advancement** — Major milestone upgrades at certain star levels
6. **Demon Fruit** — Special consumable that boosts spirit stats or unlocks hidden potential

### PvP Impact
Spirits are a massive part of PvP strength. The difference between an SSR spirit team and an SR spirit team is enormous. Spirit abilities can turn fights — a well-timed speed buff or enemy debuff can be the deciding factor.

**In plain terms**: Spirits are like party members. They fight for you, buff you, and debuff enemies. In PvP, having the right spirits at the right star level is just as important as your own gear. Shadowpaw (Attack Speed Buff SSR) is especially prized because speed is king in PvP.

---

## 11. Relics

Relics are **equipment pieces** that form part of your gear loadout, often with set bonus mechanics.

### What Relics Do
- Provide stat bonuses (ATK, HP, DEF, and specialized stats)
- Come in **sets** — equipping multiple relics from the same set grants **set bonuses**
- Can be **enhanced**, **refined**, and **upgraded**
- Have **main stats** (primary stat, increases with level) and **sub-stats** (random secondary stats)

### Relic Set Bonuses
Equipping 2 or 4 pieces from the same relic set activates set bonuses. Examples might include:
- **2-piece**: +15% Crit Rate
- **4-piece**: +25% Crit Damage and "Critical hits deal an additional 10% ATK as bonus damage"

Set bonuses are extremely powerful and often define your build.

### Relic Quality/Affinity
- Relics have a **quality tier** (similar to rarity: common, uncommon, rare, epic, legendary)
- Higher quality relics have more sub-stat slots and higher stat rolls
- **Affinity** system may allow relics to resonate with your class or element for bonus effects

### Relic Upgrading
1. **Enhance** — Spend gold/materials to increase relic level, boosting main stat
2. **Refine** — Improve sub-stats or re-roll them for better values
3. **Set Collection** — Completing full sets activates the strongest bonuses

### PvP Impact
Relics are arguably the **most build-defining equipment** in PvP. Your relic set determines your playstyle:
- Crit-focused relic sets for burst damage (Swordsman)
- Defense/GDR relic sets for survivability (Warrior)
- Elemental/AoE relic sets for area damage (Sorcerer)

Getting the right sub-stats on relics is one of the most grindy but impactful parts of PvP optimization.

**In plain terms**: Relics are like armor sets in any RPG. Wearing matching pieces gives you powerful bonuses. The grind for perfect relics with the right sub-stats is where hardcore PvP players spend most of their time.

---

## 12. Speed & Cast Time System

Speed is one of the most important and least understood stats in LoE PvP.

### How Speed Works
```
Cast Time = Base Cast Time / (1 + Speed%)
```

**In plain terms**: Speed reduces how long your character waits between actions. If you have 100% speed, your cast times are cut in half. If you have 200% speed, they're cut to a third.

### Global Cooldown (GCD)
- Every action has a **minimum cooldown** (GCD) that can't be reduced below a certain floor.
- This means there's a **speed cap** — after a certain point, adding more speed gives diminishing or zero returns.
- The community suspects the GCD floor is somewhere around **100-120% Speed**, but the exact breakpoint hasn't been confirmed.

### Why Speed Is King in PvP
1. **More attacks per second** = more damage per second
2. **More auto-attacks** = more energy regeneration = more skill casts
3. **First-mover advantage** = in PvP, attacking first can snowball (especially for Swordsman burst builds)
4. **Speed buffs stack** = skills like Divining Blade (+95% ATK Speed) and spirits like Shadowpaw make speed builds extremely powerful

### Speed Breakpoints (Unconfirmed)
The community suspects there are "breakpoints" — specific speed values where you gain an extra action within a time window. Below the breakpoint, extra speed is wasted. At the breakpoint, you suddenly get another attack in.

This is similar to how attack speed breakpoints work in games like Diablo or Path of Exile.

### PvP Implication
**Speed is disproportionately powerful** because it multiplies everything else. A character with high speed and moderate damage will often beat a character with low speed and high damage, because:
- More attacks = more chances to trigger crit/focus/break gates
- More skill casts = more burst windows
- More auto-attacks = more energy = even more skills

**In plain terms**: Speed is the stat that makes all your other stats work harder. It's like compound interest for your build. Every point of speed means every other stat you have does more work per second.

---

## Summary: What To Prioritize in PvP

### Universal PvP Priority
1. **Speed** — More actions = more everything
2. **GDB** — Flat damage increase on all sources
3. **ATK** — Base damage foundation
4. **Crit Rate + Crit Damage** — Biggest single-hit multiplier
5. **Focus Rate + Focus Damage** — Second multiplier layer
6. **Break Rate + Break Damage** — Third multiplier layer
7. **GDR** — Best defensive stat (flat reduction on everything)
8. **HP** — Raw survivability

### Class-Specific Adjustments
- **Swordsman**: Speed > Crit > ATK > Focus > Break (maximize burst)
- **Sorcerer**: ATK > GDB > HP/DEF > Crit (balance damage and survival)
- **Warrior**: ATK > HP > GDR > Crit > Speed (sustained presence)

### Power Sources (In Order of Impact)
1. **Relics** — Set bonuses define your build
2. **Artifacts** — Biggest single-item stat contribution
3. **Spirits/Pets** — Team-wide power and unique abilities
4. **Skills** — Your damage toolkit
5. **Mounts** — Large stat base boost
6. **Back Accessories** — Additional stat layer
7. **Outfits** — Collection bonuses add up

---

## Sources & Confidence Levels

| Topic | Confidence | Source |
|-------|-----------|--------|
| Damage formula | UNVERIFIED | Community testing, not server-confirmed |
| GDB/GDR formula | UNVERIFIED | Community claims, 0.3 floor not confirmed |
| Speed/Cast Time formula | UNVERIFIED | Community theory, GCD cap unknown |
| Class descriptions | LIKELY | Multiple guide sites agree |
| Skill coefficients | LIKELY | Community guides with partial data |
| Equipment systems (mounts, outfits, etc.) | LIKELY | Standard idle RPG patterns + community guides |
| Relic set bonuses | UNVERIFIED | Specific set effects need server data |

### Community Sources
- [Legend of Elements Wiki](https://www.legendofelements.com/)
- [BlueStacks Class Guide](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-classes-guide-en.html)
- [BlueStacks Beginners Guide](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-beginners-guide-en.html)
- [BlueStacks Spirit Tier List](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-tier-list-en.html)
- [Clashiverse Swordsman Guide](https://clashiverse.com/legend-of-elements-swordsman-class-guide/)
- [LDPlayer Skill Build Guide](https://www.ldplayer.net/blog/legend-of-elements-skill-build-guide.html)
- [LDPlayer Class Guide](https://www.ldplayer.net/blog/legend-of-elements-classes-guide.html)
- [TreyEx Class Guide](https://www.treyexgaming.com/legend-of-elements-class-guide/)
- [Tap Guides Spirit Tier List](https://tap-guides.com/2025/10/24/best-spirits-tier-list-legend-of-elements/)
