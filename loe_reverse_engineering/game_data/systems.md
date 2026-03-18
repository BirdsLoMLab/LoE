# LoE Game Systems — Code-Verified

> **Source:** JS fragments from `bundle-ac7a6.js`
> **All data below extracted directly from game client code.**

---

## Martial Type Enum

**Source:** `class_system_Cfgmartial_level_L129734.js` (L129734)

```javascript
MartialType = {
    Wind = 1,
    Fire = 2,
    Thunder = 3
}
```

Only 3 martial types. These map to class/element progression, not the full 6-element system used for damage types.

---

## Pet System

**Source:** `spirits_pets_t_L45363.js`, `spirits_pets_t_L45580.js`, `spirits_pets_for_L75364.js`

### Data Structures
```
PetPhotoData: { petId, isGetAward, genration }    // Note: typo "genration" in original code
PetList: PetData[]
PetCommonInfo: { elementLevel, followUid }
PetBaseInfo: base pet configuration
```

### Incubation
- `ReqPetIncubate`: Two paths — `sysList` (system eggs) and `hybridList` (hybrid eggs)
- `RetPetIncubate`: Returns `newPet[]` (newly created pets)

### Leveling
- `ReqPetUpLevel`: Level up by position slot (`pos`)
- `RetPetUpLevel`: Returns `pos` and new `level`
- Pets have per-position level tracking

### Photo Collection
- `photoExp`, `photoLevel`, `getAwardLevel` track photo progression
- Box awards at specific photo levels
- Generation-based photo collections with rarity tiers

### Follow Pet Skill Formula
```javascript
followSkillId = 1e4 * skill_id + 1e3 * quality + level
```
- `active_num` values: 2 = passive, 4 = active/special

---

## Spirit System

**Source:** `spirits_pets_for_L75147.js`, `spirits_pets_t_L74925.js`

### Slot Management
- `ReqLockSlot` / `ReqCancelLockSlot`: Spirit slot locking
- Spirits use slot-based positioning

### Upgrading
- `ReqUpSpirit`: Map of `spiritId → experience` for upgrades
- `RefreshUpSpirits`: Batch spirit upgrade refresh with change flag

### Star Awakening
- `ReqStarUp`: Star level increase (with `isComplete` flag)
- `RetStarUp`: Returns updated `SpiritData[]` and acquired `skillId`
- **Star advancement grants new skills**

### Succession (Inheritance)
```javascript
SuccinctType = {
    0 = none,
    1 = hand (manual),
    2 = auto
}
```
- `ReqSuccinct`: Configure with `condList` (condition mapping)
- `RetSuccinct`: Returns `entrys` (entry ability data) and `isStopAuto` flag

---

## Skill System

**Source:** `skill_system_t_L361589.js`, `skill_system_t_L414575.js`, `skill_system_o_L171718.js`

### Skill Lookup
```javascript
CfgskillDecData.get(BattleHelper.getSkillId(skill_id), true)
// Returns icon, name, description data
```

### Skill Level
```javascript
SkillHelper.getSkillLevel(skill_id)
SkillHelper.LevelDemolition = 1000
SkillHelper.LevelUnit = 30
```

### Skill Star System
```javascript
CfgskillStarData.get(100 * skillId + starLevel)
```
- Star progression locked behind level requirements
- Quality-based star cap: `100 * id + quality + star`
- Consumption costs in `consume[]` arrays

### Skill Description Parameters
```javascript
Cfgskill_desData.get({skill_id: id})
// Each level has: value1, value2, value3, value4, value5
// Description format: desc(value1, value2, value3, value4, value5)
```

### Skill Quality & Career
```javascript
CfgskillCareerData.get(10 * skillId + quality)
// Career-specific skill data, quality progression tracked
// Inheritance requires completion of previous quality tier
```

### Skill Attributes (Star Levels)
```javascript
// Star level stores attr[][] arrays
// Each attr: [attrType, attrValue]
// attrType maps to NumericType IDs
```

### Skill Gacha
```javascript
Cfgcallskill_pool.get()
// Fields: cost_1[], cost_2[]  (single/10-draw costs)
//         duration              (limited-time pools)
//         daily_max_num         (daily pull cap)
//         red_guaranteed        (pity system guarantee)
```

---

## Element Level System

**Source:** `class_system_t_L164850.js`, `class_system_for_L163929.js`

### Element Progression
```javascript
Cfgelement_level.get()    // Element level config
// unlock_skill[] determines which skills unlock per element level
// Skills filtered by element_type matching
```

### Skill Filtering
```javascript
getSkillArr(elementTypes[], activeNum, elementLevel) {
    // Filters Cfgpet_skill by element_type AND active_num
    // Supports 1-element or 2-element queries
    // active_num: 2 = passive, 4 = active/special
}
```

### Hybrid Pet Rewards
```javascript
Cfgpet_hybrid_extra.get()
// Quality tier and red entry count determine extra rewards
// Generation-based bonuses applied
// Multi-item drop tables supported
```

---

## Qi Ling (Celestial Spirit) System

**Source:** `skill_system_e_L257086.js`

```javascript
Cfgqiling_star.get(...)
// skill_id field for each star level
// Qi Ling gain skills at awakening levels
// Skill descriptions dynamically formatted with attribute values
```

---

## Config Table References

| Config File | ID Pattern | Purpose |
|-------------|-----------|---------|
| `skillDecData` | `skill_id` | Skill definitions |
| `skillStarData` | `100 * skillId + starLevel` | Star level data |
| `skillCareerData` | `10 * skillId + quality` | Career-specific skills |
| `skill_desData` | `{skill_id: id}` | Skill descriptions |
| `callskill_pool` | pool ID | Skill gacha pools |
| `element_level` | level | Element progression |
| `pet_skill` | filtered by element_type | Pet skills |
| `pet_hybrid_extra` | quality + red count | Hybrid rewards |
| `qiling_star` | star level | Qi Ling awakening |
