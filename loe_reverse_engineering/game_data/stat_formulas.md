# LoE Stat Formulas & Damage System

## Status: UNVERIFIED — Community Claims Only

### Damage Formula (from community)
```
Final = Base_Damage × (1 + CritDmg) × (1 + FocusDmg) × (1 + BreakDmg) × GDB_Multiplier
```

### GDR Formula (from community)
```
Multiplier = max(0.3, 1 + Attacker_GDB - Defender_GDR)
```

### Speed / Cast Time (from community)
```
Cast_Time = Base_Cast_Time / (1 + Speed%)
```

### Open Questions
- [ ] Are the above formulas accurate? Are there hidden modifiers?
- [ ] What is the 'Server Wall' / GCD cap at 100-120% Speed?
- [ ] How does Break probability gate interact with Crit and Focus gates?
- [ ] Energy regeneration formula per Basic Attack?
- [ ] Exact scaling coefficients for each skill level?

## Known Skill Coefficients (from guides)
- **Empyrean Sword** (Swordsman Core): 1060% ATK + flat damage
- **Divining Blade** (Swordsman Active): +95% ATK SPD for 8s, +22% DMG
- **Tidebreaker**: 30% ATK damage to targeted enemy
- **Draconic Strike**: 3 hits of 320% ATK damage (AoE circular)

## Stat Priorities by Class
### Swordsman
- Speed, Critical Rate, Single-target damage
- Evasion, Crit Chance, Mobility
- Key stats: Attack, Crit Damage, Focus, Damage Bonus

### Mage/Sorcerer
- Elemental Damage, Spell Power, Range
- Defensive buffs, Shields

### Warrior
- Consistent damage, debuff stacking, ATK
- Core skill focused with active/passive support

## Sources
- [Legend of Elements Wiki - Swordsman](https://www.legendofelements.com/characters/swordsman)
- [BlueStacks Class Guide](https://www.bluestacks.com/blog/game-guides/endless-journey-picture-scroll-world/ejsw-classes-guide-en.html)
- [Clashiverse Swordsman Guide](https://clashiverse.com/legend-of-elements-swordsman-class-guide/)
- [LDPlayer Skill Build Guide](https://www.ldplayer.net/blog/legend-of-elements-skill-build-guide.html)
