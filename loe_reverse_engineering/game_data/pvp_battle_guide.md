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
13. [Vessel System](#13-vessel-system)
14. [Gear System](#14-gear-system)

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

### True Damage
Some sources (especially mounts) deal **True Damage**, which bypasses DEF entirely. Examples:
- Bad Boy mount: 500% ATK as True Damage on active skill cast
- Nebulight mount: 50% chance of 1000% ATK as True Damage

**In plain terms**: True Damage ignores armor. It hits for the full amount regardless of the defender's DEF stat. This makes True Damage sources extremely valuable in PvP against tanky opponents.

### Breaking Down Each Part

#### Base Damage
Your ATK stat minus the defender's DEF, modified by the skill's damage coefficient. Each skill has a percentage multiplier (like "1060% of ATK") that determines how hard it hits. Confirmed examples:
- Soulshock Slash: 5 hits × 200% ATK (AoE, circular front)
- Empyrean Shot: 2 hits × 480% ATK (AoE, circular front)
- Mystfeather Flight: 730% ATK total (rectangular front)
- Draconic Strike: 3 hits × 320% ATK (AoE, circular around player)

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
| **MIT (Damage Mitigation)** | Reduces all incoming damage by a % for a duration | A timed defensive buff (e.g., Rivergleam spirit gives +4% MIT for 10s). |
| **Evasion/Dodge** | Chance (%) to completely avoid an attack | Sometimes you dodge entirely and take zero damage. |
| **Block** | Chance (%) to block and reduce damage | Partial damage reduction on block (less than dodge, more reliable). |
| **Resistance** | Reduces effects of debuffs and status effects | Helps you resist crowd control and negative effects. |

### Utility Stats

| Stat | What It Does | Plain Language |
|------|-------------|----------------|
| **Speed** | Reduces cast time and GCD (global cooldown) | How fast your character attacks. More speed = more attacks per second. |
| **Cooldown Reduction (CDR)** | Reduces skill cooldowns by a % | Skills come back faster. Goldstride mount gives 14% CDR. |
| **Accuracy** | Counters enemy evasion | Makes your attacks more likely to land against dodgy opponents. |
| **Energy** | Resource used to cast skills | You spend energy on skills and regenerate it through basic attacks. |
| **Core Skill DMG** | Bonus damage % specifically for your Core Skill | Makes your signature ability hit harder. |
| **Skill DMG** | Bonus damage % for all skills | A general multiplier for all skill-based damage. |
| **Global DMG** | Universal damage multiplier from external sources | An always-on boost from mounts, gear, etc. (e.g., Jadesky mount: +45% Global DMG at 70%+ HP). |

### Hidden/Derived Stats

| Stat | What It Does | Plain Language |
|------|-------------|----------------|
| **Combat Power (CP)** | Summary number combining all stats | A rough "power level" indicator. Higher = generally stronger. |
| **DILI** | Damage-In / Damage-Out ratio (internal) | An internal calculation the game uses for matchup balance. |

---

## 4. Classes

Legend of Elements has **3 classes**, each with **two subclasses**. You can switch classes anytime under the Skills tab (first reclass is free; subsequent switches cost resources).

### Warrior
- **Role**: Tanky, consistent damage dealer with debuff stacking and control
- **Subclass: Sword & Shield** — Tank-focused. Blocks incoming damage, devastating single attacks. Best for boss encounters.
- **Subclass: Spear** — Aggressive combat. Extended melee range, can hit multiple foes.
- **Key Stats**: ATK, HP, DEF, Consistency stats
- **PvP Strengths**: **#1 PvP class.** Most well-rounded. High HP, high DEF, high durability, strong burst windows, great control. Debuff stacking punishes longer fights. Highest attack rate of all classes.
- **PvP Weaknesses**: Lower per-hit damage than Swordsman. Slower than Swordsman. Can be outranged by Sorcerer in team fights.
- **Elements**: Earth (boost defense) and Fire (AoE damage)

**In plain terms**: The Warrior is the bruiser and the king of PvP. Not the flashiest, but the most reliable. Tanky enough to survive burst, and steady damage grinds opponents down. Before Adept advancement, serves as the team tank.

### Swordsman
- **Role**: Fast, evasive, single-target burst damage dealer
- **Playstyle**: Hit hard, hit fast, dodge attacks
- **Key Stats**: Speed, Core Skill DMG, Skill DMG, Crit Rate, Crit Damage, ATK, Evasion
- **PvP Strengths**: **#2 PvP class.** Highest single-target DPS in the game. Can delete enemies before they react. Speed compounds DPS — every point of Speed makes your build stronger.
- **PvP Weaknesses**: Fragile if caught. Low AoE. Hardest class to play — requires mastery. If the enemy survives the initial burst, Swordsman struggles.
- **Elements**: Wind (speed and mobility) and Ice (crit chance and control)
- **Boss PvE**: **#1 class** for boss fights due to single-target burst.

**In plain terms**: The Swordsman is the assassin. Fast, deadly, but glass-cannon. The hardest class to play well, but devastating in the right hands. In PvP, you either kill them first or they kill you.

**Key Skills**:
- **Empyrean Sword** (Core Skill) — Massive single-target hit at 1060% ATK + flat damage. This is the Swordsman's nuke.
- **Divining Blade** (Active) — Boosts ATK Speed by 95% for 8 seconds and adds 22% damage. A steroid skill.
- **Tidebreaker** — Deals 30% ATK to a single target. Quick, low-cost poke.
- **Draconic Strike** — 3 hits of 320% ATK in an AoE circle. The Swordsman's only real AoE.

### Sorcerer (Mage)
- **Role**: AoE damage dealer with elemental abilities, crowd control, and shields
- **Subclass: Staff/Mage** — Versatile elemental casting, long-range, crowd control
- **Key Stats**: ATK, HP, DEF, Elemental Damage, Spell Power
- **PvP Strengths**: Best AoE damage. Short cooldowns allow buff stacking over long fights. Fastest early-game progression.
- **PvP Weaknesses**: **#3 PvP class — not recommended for PvP.** Low HP, glass cannon, lacks burst, positioning-dependent. If a Swordsman closes the gap, the Sorcerer is overwhelmed.
- **Elements**: Fire, Water, Wind, Thunder
- **Farming/Early Game**: **#1 class** — most forgiving early game, best AoE for farming.

**In plain terms**: The Sorcerer is the mage. Great for farming and early game, but struggles in PvP. Big area damage and short cooldowns, but too fragile and lacks the burst to compete with Warriors and Swordsmen.

**Key Skills**:
- **Fireball / Thunderstorm** (Core Skills) — AoE elemental damage
- **Thunder Field** — AoE lightning with crowd control

### PvP Class Tier Ranking
| Rank | Class | Why |
|------|-------|-----|
| **#1** | Warrior | Tanky, reliable, easy to control, great in all situations |
| **#2** | Swordsman | Deadly burst damage but skill-dependent and fragile |
| **#3** | Sorcerer | Best AoE but too fragile for PvP; better suited for PvE farming |

### Mode-Specific Rankings
| Mode | Best → Worst |
|------|-------------|
| **PvP** | Warrior > Swordsman > Sorcerer |
| **Boss PvE** | Swordsman > Sorcerer > Warrior |
| **Farming** | Sorcerer > Swordsman > Warrior |
| **Beginners** | Sorcerer (most forgiving early game) |

> Note: Gear and investment matter more than class. A well-geared Sorcerer can beat an undergeared Warrior.

---

## 5. Skills

Every class has four types of skills, with a total of **10 skill slots**:

### Skill Slots
| Type | Slots | Description |
|------|-------|-------------|
| **Core Skill** | 1 | Your class-defining signature ability. Highest priority. Can be upgraded to level 150 via Skill Tomes. |
| **Active Skills** | 3 | Cast automatically in combat based on priority and cooldown. Includes attacks, buffs, and utility. |
| **Passive Skills** | 5 | Always-on bonuses. Slots unlock as you progress through the storyline. Provide stat boosts or triggered effects. |
| **Ultimate Skill** | 1 | A powerful finisher ability. |

**In plain terms**: You have 1 big move (Core), 3 auto-cast abilities (Actives), 5 permanent buffs (Passives), and 1 ultimate. Your Core Skill is the centerpiece — everything else supports it.

### Skill Acquisition
- Skills are obtained through a **gacha-like banner** using **Skill Manuals**
- Different progression periods require different manual types (e.g., Adept Skill Manual)
- **Skill Choice Boxes** let you pick a specific epic skill after 500 mastery attempts
- **Friday Skill Mastery Rush** event gives bonus rewards for skill summons

### Energy System
- Skills cost **Energy** to use.
- Energy regenerates through **Basic Attacks** (auto-attacks between skills).
- Speed affects how fast you auto-attack, which means speed indirectly affects your energy regeneration.
- Goldstride mount can restore 20 Energy/second passively, bypassing the auto-attack cycle.

**In plain terms**: Your character auto-attacks to build energy, then spends that energy on skills. Faster characters build energy faster, so they can use skills more often. It's like a fighting game — jabs build meter, specials spend meter.

### Skill Upgrading
- Skills level up using resources (Skill Tomes).
- Core Skills can reach **level 150**.
- Higher skill levels increase the damage coefficient (e.g., Empyrean Sword goes from 800% ATK at low level to 1060%+ at high level).
- Some skills gain bonus effects at certain level thresholds.

### Skill Build Strategy (PvP)
- **Warrior**: Core skill + debuff actives + passive HP/MIT. Goal: stack debuffs, sustain, outlast.
- **Swordsman**: Maximize Empyrean Sword and Divining Blade. Speed + Crit build. Goal: kill before they act.
- **Sorcerer**: Balance AoE damage skills with defensive shield skills. Short cooldowns for buff stacking. Goal: survive and area-control.

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
| SSR (Super Super Rare) | Orange/Gold | High-tier |
| SSSR (Super×3 Rare) | Red/Rainbow | Top-tier, endgame |

### Named Mounts & Abilities

#### Best PvP Mounts
| Mount | Ability | Plain Language |
|-------|---------|----------------|
| **Bad Boy** | 500% ATK as True Damage on every active skill cast | Every time you use a skill, you deal a huge bonus hit that ignores armor. Consistent and powerful. **Top PvP pick.** |
| **Nebulight** | 50% chance of 1000% ATK as True Damage | Coin-flip for a massive armor-ignoring nuke. When it procs, it's devastating. RNG-heavy. |
| **Celestial Crane** | Sustain-focused abilities | Built for drawn-out PvP fights. Keeps you alive longer. |
| **Lotus Grace** | Sustain-focused abilities | Alternative sustain option for PvP specialists. |

#### Best PvE Mounts
| Mount | Ability | Plain Language |
|-------|---------|----------------|
| **Jadesky** | +45% Global DMG while above 70% HP | As long as you're healthy, ALL your damage is boosted by 45%. **#1 PvE mount.** |
| **Skybrand** | Large AoE damage ability | Compensates for classes weak in AoE (like Swordsman). Great for farming. |
| **Stormflame Wheels** | 2000% ATK AoE every 10s (up to 5 triggers). Also +1% Crit Rate and Crit Damage per second (caps at +20% each). | Huge periodic AoE nuke plus ramping crit stats. Great for farming, weak for bosses. |
| **Goldstride** | Restores 20 Energy/sec + 14% Cooldown Reduction | Lets you spam skills non-stop. Great for ability-cycling builds. |
| **Slayer Gourd** | +30% all skill damage | Simple, effective, universally useful. Best balanced option for new players. |

**Important note**: No mounts provide a Speed increase. Mount abilities focus on damage bonuses, sustain, or utility.

### PvP Impact
Mounts contribute directly to your Combat Power. In PvP, the stat difference from a maxed mount vs. a low-level mount can be the difference between winning and losing. Mount abilities like Bad Boy's True Damage add an entirely new damage source that bypasses the normal damage formula.

**In plain terms**: Think of mounts as a permanent stat buff PLUS a special ability. Bad Boy is the PvP king because True Damage ignores all that DEF and GDR the enemy stacked. Jadesky is the PvE king because +45% Global DMG multiplies everything.

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

### Talent Boost Cosmetic
One special outfit type provides an **actual stat increase** rather than just a visual change. Community guides advise **prioritizing this first** before other cosmetic purchases.

**In plain terms**: If you can only invest in one outfit, get the Talent Boost Cosmetic. It's not just a skin — it's a meaningful power upgrade.

### How to Get Outfits
- Limited-time events (e.g., "Pegasus Reign" from Feb 2026 event)
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

### Known Artifacts
- **Yggdrasil's Might** — A high-tier artifact obtainable through event codes and special rewards.

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

### Known Back Accessories
- **Cosmic Doom** — A high-tier backwear obtainable through event codes.

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
- **Team composition** — You can deploy up to **3 spirits** from the Line-up menu, and their synergy matters

### Spirit Rarity & Gacha
| Tier | Pull Rate | Power Level |
|------|-----------|-------------|
| R | Common | Low — early game only |
| SR | Uncommon | Moderate — useful through mid-game |
| SSR | 12% for complete spirit, 18% for shards | High — endgame staples |

Spirits are unlocked at **Main Quest #70** via gacha summoning.

### SSR Spirit Roster (Named)

#### DPS Spirits
| Spirit | Type | Key Abilities | Plain Language |
|--------|------|---------------|----------------|
| **Skysong** | Basic ATK Buff | Feather Shot (20% ATK), Mystfeather Flight (730% ATK rectangular AoE) | Boosts your auto-attacks and has a huge frontal AoE. **#1 DPS spirit.** |
| **Firmament** | Vulnerability | Flame Spear + Hellfire Bloom; applies vulnerability debuffs | Makes enemies take MORE damage from everyone. Great team spirit. **#2 DPS.** |
| **Demonflame** | Fire DPS | Raw attack scaling and critical burst | Pure damage dealer. Hits hard, crits hard. **#3 DPS.** |
| **Sunpiercer** | Bonus DMG | The Ninth Shot + Empyrean Shot (2× 480% ATK AoE) | Adds huge bonus damage with massive AoE attacks. |
| **Warshade** (ATK) | ATK & DEF Balance | Daemon Grasp (30% ATK) + Soulshock Slash (5× 200% ATK AoE) | Balanced damage with good AoE. |

#### Support/Buff Spirits
| Spirit | Type | Key Abilities | Plain Language |
|--------|------|---------------|----------------|
| **Shadowpaw** | ATK Speed Buff | Boosts movement and attack speed for quick burst | Makes you attack faster. Speed = more damage, more energy, more skills. Prized for PvP. |
| **Dawnweaver** | Speed Buff | Temporarily increases Speed for 10 seconds | Timed speed burst. Great for Swordsman alpha strikes. |
| **Tiderend** | Crit & Focus Buff | Tidebreaker (30% ATK) + Draconic Strike (3× 320% ATK AoE); RNG-based activation | Boosts your crit and focus gates. When it activates, your damage spikes. |

#### Defensive Spirits
| Spirit | Type | Key Abilities | Plain Language |
|--------|------|---------------|----------------|
| **Raindancer** | DEF Buff | Increases base defenses | Makes you tankier. For Warrior/sustain builds. |
| **Rivergleam** | MIT Buff | +4% Damage Mitigation for 10 seconds | Temporary damage shield. Stacks with GDR. |
| **Warshade** (DEF) | DEF Buff | Watercaller (30% ATK) + Raincall (5× 150% ATK AoE) | Defensive variant with respectable AoE. |

#### Utility Spirits
| Spirit | Type | Key Abilities | Plain Language |
|--------|------|---------------|----------------|
| **Miasma** | Debuff | Spreads poison, can paralyze enemies | Crowd control specialist. Shuts down enemies. |
| **Gracehorn** (SR) | Regen | Most powerful regeneration option | Best sustain spirit for long fights. Notable even as an SR. |

### DPS Spirit Tier Ranking
1. Skysong → 2. Firmament → 3. Demonflame → 4. Shadowpaw → 5. Sunpiercer → 6. Warshade → 7. Lorehorn → 8. Dawnweaver

### Recommended Spirit Team Compositions
| Build | Spirits | Strategy |
|-------|---------|----------|
| **DPS** | Demonflame + Firmament + Dawnweaver | Steady scaling + vulnerability debuffs + speed burst |
| **Tank** | Raindancer + Warshade + Rivergleam | Maximum survivability for sustained boss fights |
| **Core Skill DMG** | Heartbind + Spring + Celestine | Maximize Core Skill damage scaling |

### Spirit Progression
1. **Summon** — Obtain spirits through gacha (unlocks at Main Quest #70)
2. **Level Up** — Spend resources to increase spirit level and stats
3. **Star Up** — Use duplicates or Star-Up materials to increase star rating (unlocks stat caps and new abilities)
4. **Inheritance** — Transfer stats/levels from one spirit to another (lets you upgrade without losing investment)
5. **Advancement** — Major milestone upgrades at certain star levels
6. **Demon Fruit** — Special consumable that boosts spirit stats or unlocks hidden potential

### PvP Impact
Spirits are a massive part of PvP strength. The difference between an SSR spirit team and an SR spirit team is enormous. Spirit abilities can turn fights — a well-timed speed buff or enemy debuff can be the deciding factor.

**In plain terms**: Spirits are your party members. They fight for you, buff you, and debuff enemies. In PvP, having the right spirits at the right star level is just as important as your own gear. For PvP burst, pair Shadowpaw or Dawnweaver (speed) with Firmament (vulnerability debuff) for maximum damage.

---

### Pets (Separate System from Spirits)

Pets are a **separate progression system** from Spirits. While Spirits are combat companions you deploy, Pets are a background power system.

- Pets **directly influence damage, survivability, and CP**
- Pets scale **exponentially** through breeding, traits, and growth rate optimization
- The **Generation system** goes up to Gen 5 (the ultimate milestone) — each generation is dramatically more powerful
- Growth rate and traits interact synergistically — optimizing both creates compound power gains
- A single optimized pet can make a **30%+ difference** in total power
- Pets enhance: critical damage, attack speed, hidden modifiers like "true crit," and global damage bonuses

**In plain terms**: Pets are a hidden multiplier system. They don't fight alongside you like Spirits, but they quietly boost your stats in the background. The Gen 5 pet grind is one of the biggest long-term power investments in the game. Don't neglect breeding and trait optimization — a 30% total power swing is enormous.

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

### Known Relics
- **Ritual Drum** — A legendary relic obtainable through event codes.

### Relic Stat Priority
- **Offensive scaling stats > Defensive stats** — Focus on stats that improve "damage per level" or "per hit multiplier"
- For Swordsman: Speed, Attack, and Damage relics are best-in-slot
- Use **Refining Sand** to re-roll sub-stats toward your priority stats

### PvP Impact
Relics are arguably the **most build-defining equipment** in PvP. Your relic set determines your playstyle:
- Crit-focused relic sets for burst damage (Swordsman)
- Defense/GDR relic sets for survivability (Warrior)
- Elemental/AoE relic sets for area damage (Sorcerer)

Getting the right sub-stats on relics is one of the most grindy but impactful parts of PvP optimization. The relic system is still evolving with planned updates — save Mentor Coins for upcoming relic content.

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

## 13. Vessel System

The Vessel system is a **major power progression system** that unlocks at a story milestone.

### What Vessels Do
- Vessels provide massive stat boosts through three sub-systems:
  1. **Vessel Training** — Level up your vessel for base stat increases
  2. **Vessel Promotion** — Major milestone upgrades requiring rare items (e.g., Asia Plume Pendant from Clan Event Auctions)
  3. **Glyph Socketing** — Socket glyphs into your vessel for specific stat bonuses

### Vessel Power Scaling
- At Level 50: players report **+300,000 Combat Power** from Vessel Training alone
- At Level 75+: jumps of **millions** in total Combat Power
- This is one of the biggest power spikes in the game

### Glyph Types
| Glyph | Effect | Priority |
|-------|--------|----------|
| **Damage Boost** | Increases all damage dealt | **HIGH — socket first** |
| **Damage Reduction** | Reduces all damage taken (like mini-GDR) | **HIGH — socket second** |
| **Dodge** | Increases evasion chance | Lower priority |

**In plain terms**: The Vessel system is like a second equipment set that grows with you. The power jumps are enormous — hundreds of thousands to millions of CP. Prioritize Damage Boost and Damage Reduction glyphs over Dodge glyphs.

---

## 14. Gear System

Your character has **15 total gear slots**: 9 regular gear slots + 6 class-exclusive gear slots.

### How Gear Works
- Gear is obtained via **"wishing"** (a crafting dinosaur) — costs 2 gear crystals per craft, can queue up to 20
- The crafting dinosaur can be **evolved** for better drop rates
- Gear can be **salvaged** for currency
- Use **Refining Sand** to re-roll sub-stats on gear

### PvP Gear Priority
- For Swordsman: **Speed is the #1 stat to refine for** — every point compounds your DPS
- Prioritize gear with offensive scaling stats over raw defensive stats
- Class-exclusive gear pieces are especially important as they tend to have higher stat ceilings

**In plain terms**: You craft gear by feeding crystals to a dinosaur (yes, really). The dinosaur levels up and gives you better gear over time. Once you get a good piece, use Refining Sand to roll the perfect sub-stats. For Swordsman, always re-roll toward Speed.

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
1. **Vessel System** — Millions of CP from training and glyphs
2. **Relics** — Set bonuses define your build
3. **Artifacts** — Biggest single-item stat contribution
4. **Spirits** — Team-wide power and unique combat abilities
5. **Pets** — Hidden multiplier system, up to 30%+ total power
6. **Skills** — Your damage toolkit
7. **Mounts** — Stat boost + unique ability (Bad Boy for PvP, Jadesky for PvE)
8. **Gear** — 15 slots of base stats with refinable sub-stats
9. **Back Accessories** — Additional stat layer
10. **Outfits** — Collection bonuses add up

---

## Sources & Confidence Levels

| Topic | Confidence | Source |
|-------|-----------|--------|
| Damage formula (multiplicative gates) | UNVERIFIED | Community testing, not server-confirmed |
| GDB/GDR formula (0.3 floor) | UNVERIFIED | Community claims, not confirmed |
| Speed/Cast Time formula | UNVERIFIED | Community theory, GCD cap unknown |
| True Damage (mounts) | LIKELY | Multiple guide sites confirm mount abilities |
| Class rankings (PvP tier) | LIKELY | Multiple guides agree: Warrior > Swordsman > Sorcerer |
| Class subclasses | LIKELY | Multiple guide sites agree |
| Skill coefficients (% ATK values) | LIKELY | Community guides with consistent data across sources |
| Skill slot counts (10 total) | LIKELY | Multiple guide sites agree |
| Named spirit abilities | LIKELY | Spirit tier lists from multiple sources |
| Mount abilities (named, with %) | LIKELY | Mount guides with specific numbers |
| Pet generation system | LIKELY | Community guides confirm Gen 5 system |
| Vessel system power scaling | LIKELY | Player reports of CP gains |
| Gear system (15 slots, dinosaur) | LIKELY | Multiple beginner guides confirm |
| Artifact/Backwear details | UNVERIFIED | Limited data — only names known from event codes |
| Relic set bonuses | UNVERIFIED | Specific set effects need server data |
| Outfit stat specifics | UNVERIFIED | Only Talent Boost Cosmetic confirmed as priority |

### Community Sources
- [Legend of Elements Wiki](https://www.legendofelements.com/)
- [BlueStacks Beginners Guide](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-beginners-guide-en.html)
- [BlueStacks Class Guide](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-classes-guide-en.html)
- [BlueStacks Spirit Tier List](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-tier-list-en.html)
- [Clashiverse Swordsman Guide](https://clashiverse.com/legend-of-elements-swordsman-class-guide/)
- [Clashiverse Mount Guide](https://clashiverse.com/legend-of-elements-mount-guide/)
- [Clashiverse Vessel & Mentor Guide](https://clashiverse.com/legend-of-elements-vessel-mentor-system-guide/)
- [LDPlayer Skill Build Guide](https://www.ldplayer.net/blog/legend-of-elements-skill-build-guide.html)
- [LDPlayer Class Guide](https://www.ldplayer.net/blog/legend-of-elements-classes-guide.html)
- [TreyEx Class Guide](https://www.treyexgaming.com/legend-of-elements-class-guide/)
- [TreyEx Spirit Guide](https://www.treyexgaming.com/legend-of-elements-spirit-guide/)
- [TreyEx Pet Guide](https://www.treyexgaming.com/legend-of-elements-pet-guide/)
- [Tap Guides Spirit Tier List](https://tap-guides.com/2025/10/24/best-spirits-tier-list-legend-of-elements/)
- [Tap Guides Class Builds](https://tap-guides.com/2025/10/24/legend-of-elements-class-builds-best-skill-combinations/)
- [Pocket Gamer Tier List](https://www.pocketgamer.com/league-of-elements/tier-list/)
- [GrindNStrat Tier List](https://grindnstrat.com/legend-of-elements-tier-list/)
- [Theria Games Wiki](https://theriagames.com/legend-of-elements-wiki/)
