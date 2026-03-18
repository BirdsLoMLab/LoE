// Fragment: formula__NumericType_L127017.js
// Lines: 127017-127210 of bundle-beautified.js
// Categories: Formula, Stat System
// Keywords: DILI, Math.max, Math.min, dodge, speed
// Hit lines: 127018, 127110

    _NumericType = class {};
  _NumericType.Max = 1e4, _NumericType.ATK_FIXED = 59, _NumericType.ENHANCEMENT_ATK_ADD = 72, _NumericType.ENHANCEMENT_DEF_ADD = 73, _NumericType.ENHANCEMENT_HP_ADD = 74, _NumericType.RACE_1_ATK_PER = "RACE_1_ATK_PER", _NumericType.RACE_1_ATK_PER1 = 81, _NumericType.RACE_1_ATK_PER2 = 82, _NumericType.RACE_1_ATK_PER3 = 83, _NumericType.RACE_1_ATK_PER4 = 84, _NumericType.RACE_1_ATK_PER5 = 85, _NumericType.RACE_1_ATK_PER6 = 86, _NumericType.RACE_1_ATK_PER7 = 87, _NumericType.RACE_1_ATK_PER8 = 88, _NumericType.RACE_1_ATK_PER9 = 89, _NumericType.RACE_1_ATK_PER10 = 90, _NumericType.AREA_1_ATK_PER = "AREA_1_ATK_PER", _NumericType.AREA_1_ATK_PER1 = 91, _NumericType.AREA_1_ATK_PER2 = 92, _NumericType.AREA_1_ATK_PER3 = 93, _NumericType.AREA_1_ATK_PER4 = 94, _NumericType.AREA_1_ATK_PER5 = 95, _NumericType.AREA_1_ATK_PER6 = 96, _NumericType.AREA_1_ATK_PER7 = 97, _NumericType.AREA_1_ATK_PER8 = 98, _NumericType.AREA_1_ATK_PER9 = 99, _NumericType.AREA_1_ATK_PER10 = 100, _NumericType.GAMEPLAY_1_ATK_PER = 101, _NumericType.GAMEPLAY_16_ATK_PER = 156, _NumericType.HOOK_AWARD = 116, _NumericType.HOOK_TIME_ADD = 117, _NumericType.GAMEPLAY_1_DAM = 121, _NumericType.GAMEPLAY_16_DAM = 171, _NumericType.GAMEPLAY_1_DEF = 136, _NumericType.GAMEPLAY_16_DEF = 186, _NumericType.Hp = 1e3, _NumericType.HpBase = 10 * _NumericType.Hp + 1, _NumericType.HpAdd = 10 * _NumericType.Hp + 2, _NumericType.HpPct = 10 * _NumericType.Hp + 3, _NumericType.HpFinalAdd = 10 * _NumericType.Hp + 4, _NumericType.HpFinalPct = 10 * _NumericType.Hp + 5, _NumericType.MaxHp = 1001, _NumericType.MaxHpBase = 10 * _NumericType.MaxHp + 1, _NumericType.MaxHpAdd = 10 * _NumericType.MaxHp + 2, _NumericType.MaxHpPct = 10 * _NumericType.MaxHp + 3, _NumericType.MaxHpFinalAdd = 10 * _NumericType.MaxHp + 4, _NumericType.MaxHpFinalPct = 10 * _NumericType.MaxHp + 5, _NumericType.HpRecover = 1002, _NumericType.HpRecoverBase = 10 * _NumericType.HpRecover + 1, _NumericType.HpRecoverAdd = 10 * _NumericType.HpRecover + 2, _NumericType.HpRecoverPct = 10 * _NumericType.HpRecover + 3, _NumericType.HpRecoverFinalAdd = 10 * _NumericType.HpRecover + 4, _NumericType.HpRecoverFinalPct = 10 * _NumericType.HpRecover + 5, _NumericType.PAtk = 1003, _NumericType.PAtkBase = 10 * _NumericType.PAtk + 1, _NumericType.PAtkAdd = 10 * _NumericType.PAtk + 2, _NumericType.PAtkPct = 10 * _NumericType.PAtk + 3, _NumericType.PAtkFinalAdd = 10 * _NumericType.PAtk + 4, _NumericType.PAtkFinalPct = 10 * _NumericType.PAtk + 5, _NumericType.MAtk = 1004, _NumericType.MAtkBase = 10 * _NumericType.MAtk + 1, _NumericType.MAtkAdd = 10 * _NumericType.MAtk + 2, _NumericType.MAtkPct = 10 * _NumericType.MAtk + 3, _NumericType.MAtkFinalAdd = 10 * _NumericType.MAtk + 4, _NumericType.MAtkFinalPct = 10 * _NumericType.MAtk + 5, _NumericType.PDef = 1005, _NumericType.PDefBase = 10 * _NumericType.PDef + 1, _NumericType.PDefAdd = 10 * _NumericType.PDef + 2, _NumericType.PDefPct = 10 * _NumericType.PDef + 3, _NumericType.PDefFinalAdd = 10 * _NumericType.PDef + 4, _NumericType.PDefFinalPct = 10 * _NumericType.PDef + 5, _NumericType.MDef = 1006, _NumericType.MDefBase = 10 * _NumericType.MDef + 1, _NumericType.MDefAdd = 10 * _NumericType.MDef + 2, _NumericType.MDefPct = 10 * _NumericType.MDef + 3, _NumericType.MDefFinalAdd = 10 * _NumericType.MDef + 4, _NumericType.MDefFinalPct = 10 * _NumericType.MDef + 5, _NumericType.Speed = 1007, _NumericType.SpeedBase = 10 * _NumericType.Speed + 1, _NumericType.SpeedAdd = 10 * _NumericType.Speed + 2, _NumericType.SpeedPct = 10 * _NumericType.Speed + 3, _NumericType.SpeedFinalAdd = 10 * _NumericType.Speed + 4, _NumericType.SpeedFinalPct = 10 * _NumericType.Speed + 5, _NumericType.Crit = 1008, _NumericType.CritBase = 10 * _NumericType.Crit + 1, _NumericType.CritAdd = 10 * _NumericType.Crit + 2, _NumericType.CritPct = 10 * _NumericType.Crit + 3, _NumericType.CritFinalAdd = 10 * _NumericType.Crit + 4, _NumericType.CritFinalPct = 10 * _NumericType.Crit + 5, _NumericType.CritDef = 1009, _NumericType.CritDefBase = 10 * _NumericType.CritDef + 1, _NumericType.CritDefAdd = 10 * _NumericType.CritDef + 2, _NumericType.CritDefPct = 10 * _NumericType.CritDef + 3, _NumericType.CritDefFinalAdd = 10 * _NumericType.CritDef + 4, _NumericType.CritDefFinalPct = 10 * _NumericType.CritDef + 5, _NumericType.CritDam = 1010, _NumericType.CritDamBase = 10 * _NumericType.CritDam + 1, _NumericType.CritDamAdd = 10 * _NumericType.CritDam + 2, _NumericType.CritDamPct = 10 * _NumericType.CritDam + 3, _NumericType.CritDamFinalAdd = 10 * _NumericType.CritDam + 4, _NumericType.CritDamFinalPct = 10 * _NumericType.CritDam + 5, _NumericType.CritDamDef = 1011, _NumericType.CritDamDefBase = 10 * _NumericType.CritDamDef + 1, _NumericType.CritDamDefAdd = 10 * _NumericType.CritDamDef + 2, _NumericType.CritDamDefPct = 10 * _NumericType.CritDamDef + 3, _NumericType.CritDamDefFinalAdd = 10 * _NumericType.CritDamDef + 4, _NumericType.CritDamDefFinalPct = 10 * _NumericType.CritDamDef + 5, _NumericType.PHit = 1012, _NumericType.PHitBase = 10 * _NumericType.PHit + 1, _NumericType.PHitAdd = 10 * _NumericType.PHit + 2, _NumericType.PHitPct = 10 * _NumericType.PHit + 3, _NumericType.PHitFinalAdd = 10 * _NumericType.PHit + 4, _NumericType.PHitFinalPct = 10 * _NumericType.PHit + 5, _NumericType.MHit = 1013, _NumericType.MHitBase = 10 * _NumericType.MHit + 1, _NumericType.MHitAdd = 10 * _NumericType.MHit + 2, _NumericType.MHitPct = 10 * _NumericType.MHit + 3, _NumericType.MHitFinalAdd = 10 * _NumericType.MHit + 4, _NumericType.MHitFinalPct = 10 * _NumericType.MHit + 5, _NumericType.PBlock = 1014, _NumericType.PBlockBase = 10 * _NumericType.PBlock + 1, _NumericType.PBlockAdd = 10 * _NumericType.PBlock + 2, _NumericType.PBlockPct = 10 * _NumericType.PBlock + 3, _NumericType.PBlockFinalAdd = 10 * _NumericType.PBlock + 4, _NumericType.PBlockFinalPct = 10 * _NumericType.PBlock + 5, _NumericType.MBlock = 1015, _NumericType.MBlockBase = 10 * _NumericType.MBlock + 1, _NumericType.MBlockAdd = 10 * _NumericType.MBlock + 2, _NumericType.MBlockPct = 10 * _NumericType.MBlock + 3, _NumericType.MBlockFinalAdd = 10 * _NumericType.MBlock + 4, _NumericType.MBlockFinalPct = 10 * _NumericType.MBlock + 5, _NumericType.PPrecise = 1016, _NumericType.PPreciseBase = 10 * _NumericType.PPrecise + 1, _NumericType.PPreciseAdd = 10 * _NumericType.PPrecise + 2, _NumericType.PPrecisePct = 10 * _NumericType.PPrecise + 3, _NumericType.PPreciseFinalAdd = 10 * _NumericType.PPrecise + 4, _NumericType.PPreciseFinalPct = 10 * _NumericType.PPrecise + 5, _NumericType.MPrecise = 1017, _NumericType.MPreciseBase = 10 * _NumericType.MPrecise + 1, _NumericType.MPreciseAdd = 10 * _NumericType.MPrecise + 2, _NumericType.MPrecisePct = 10 * _NumericType.MPrecise + 3, _NumericType.MPreciseFinalAdd = 10 * _NumericType.MPrecise + 4, _NumericType.MPreciseFinalPct = 10 * _NumericType.MPrecise + 5, _NumericType.AtkMst = 1018, _NumericType.AtkMstBase = 10 * _NumericType.AtkMst + 1, _NumericType.AtkMstAdd = 10 * _NumericType.AtkMst + 2, _NumericType.AtkMstPct = 10 * _NumericType.AtkMst + 3, _NumericType.AtkMstFinalAdd = 10 * _NumericType.AtkMst + 4, _NumericType.AtkMstFinalPct = 10 * _NumericType.AtkMst + 5, _NumericType.DefMst = 1019, _NumericType.DefMstBase = 10 * _NumericType.DefMst + 1, _NumericType.DefMstAdd = 10 * _NumericType.DefMst + 2, _NumericType.DefMstPct = 10 * _NumericType.DefMst + 3, _NumericType.DefMstFinalAdd = 10 * _NumericType.DefMst + 4, _NumericType.DefMstFinalPct = 10 * _NumericType.DefMst + 5, _NumericType.PlayerAtkSkillA = 1020, _NumericType.PlayerDefSkillA = 1021, _NumericType.AtkPlayerSpirt = 1022, _NumericType.AtkPlayerSpirtBase = 10 * _NumericType.AtkPlayerSpirt + 1, _NumericType.AtkPlayerSpirtAdd = 10 * _NumericType.AtkPlayerSpirt + 2, _NumericType.AtkPlayerSpirtPct = 10 * _NumericType.AtkPlayerSpirt + 3, _NumericType.AtkPlayerSpirtFinalAdd = 10 * _NumericType.AtkPlayerSpirt + 4, _NumericType.AtkPlayerSpirtFinalPct = 10 * _NumericType.AtkPlayerSpirt + 5, _NumericType.DefPlayerSpirt = 1023, _NumericType.DefPlayerSpirtBase = 10 * _NumericType.DefPlayerSpirt + 1, _NumericType.DefPlayerSpirtAdd = 10 * _NumericType.DefPlayerSpirt + 2, _NumericType.DefPlayerSpirtPct = 10 * _NumericType.DefPlayerSpirt + 3, _NumericType.DefPlayerSpirtFinalAdd = 10 * _NumericType.DefPlayerSpirt + 4, _NumericType.DefPlayerSpirtFinalPct = 10 * _NumericType.DefPlayerSpirt + 5, _NumericType.PlayerAtkAttackA = 1024, _NumericType.PlayerDefAttackA = 1025, _NumericType.DoubleHit = 1026, _NumericType.DoubleHitBase = 10 * _NumericType.DoubleHit + 1, _NumericType.DoubleHitAdd = 10 * _NumericType.DoubleHit + 2, _NumericType.DoubleHitPct = 10 * _NumericType.DoubleHit + 3, _NumericType.DoubleHitFinalAdd = 10 * _NumericType.DoubleHit + 4, _NumericType.DoubleHitFinalPct = 10 * _NumericType.DoubleHit + 5, _NumericType.CharstateCd = 1027, _NumericType.CharstateCdBase = 10 * _NumericType.CharstateCd + 1, _NumericType.CharstateCdAdd = 10 * _NumericType.CharstateCd + 2, _NumericType.CharstateCdPct = 10 * _NumericType.CharstateCd + 3, _NumericType.CharstateCdFinalAdd = 10 * _NumericType.CharstateCd + 4, _NumericType.CharstateCdFinalPct = 10 * _NumericType.CharstateCd + 5, _NumericType.Pass = 1028, _NumericType.PassBase = 10 * _NumericType.Pass + 1, _NumericType.PassAdd = 10 * _NumericType.Pass + 2, _NumericType.PassPct = 10 * _NumericType.Pass + 3, _NumericType.PassFinalAdd = 10 * _NumericType.Pass + 4, _NumericType.PassFinalPct = 10 * _NumericType.Pass + 5, _NumericType.Hit = 1029, _NumericType.HitBase = 10 * _NumericType.Hit + 1, _NumericType.HitAdd = 10 * _NumericType.Hit + 2, _NumericType.HitPct = 10 * _NumericType.Hit + 3, _NumericType.HitFinalAdd = 10 * _NumericType.Hit + 4, _NumericType.HitFinalPct = 10 * _NumericType.Hit + 5, _NumericType.EffectHit = 1030, _NumericType.EffectHitBase = 10 * _NumericType.EffectHit + 1, _NumericType.EffectHitAdd = 10 * _NumericType.EffectHit + 2, _NumericType.EffectHitPct = 10 * _NumericType.EffectHit + 3, _NumericType.EffectHitFinalAdd = 10 * _NumericType.EffectHit + 4, _NumericType.EffectHitFinalPct = 10 * _NumericType.EffectHit + 5, _NumericType.EffectBlock = 1031, _NumericType.EffectBlockHitBase = 10 * _NumericType.EffectBlock + 1, _NumericType.EffectBlockAdd = 10 * _NumericType.EffectBlock + 2, _NumericType.EffectBlockPct = 10 * _NumericType.EffectBlock + 3, _NumericType.EffectBlockFinalAdd = 10 * _NumericType.EffectBlock + 4, _NumericType.EffectBlockFinalPct = 10 * _NumericType.EffectBlock + 5, _NumericType.BuffTimeAdd = 1032, _NumericType.BuffTimeAddBase = 10 * _NumericType.BuffTimeAdd + 1, _NumericType.BuffTimeAddAdd = 10 * _NumericType.BuffTimeAdd + 2, _NumericType.BuffTimeAddPct = 10 * _NumericType.BuffTimeAdd + 3, _NumericType.BuffTimeAddFinalAdd = 10 * _NumericType.BuffTimeAdd + 4, _NumericType.BuffTimeAddFinalPct = 10 * _NumericType.BuffTimeAdd + 5, _NumericType.BuffTimeMns = 1033, _NumericType.BuffTimeMnsBase = 10 * _NumericType.BuffTimeMns + 1, _NumericType.BuffTimeMnsAdd = 10 * _NumericType.BuffTimeMns + 2, _NumericType.BuffTimeMnsPct = 10 * _NumericType.BuffTimeMns + 3, _NumericType.BuffTimeMnsFinalAdd = 10 * _NumericType.BuffTimeMns + 4, _NumericType.BuffTimeMnsFinalPct = 10 * _NumericType.BuffTimeMns + 5, _NumericType.ActiveSkillAddA = 1034, _NumericType.ActiveSkillSubA = 1035, _NumericType.TargetDamAdd = 1036, _NumericType.TargetDamAddBase = 10 * _NumericType.TargetDamAdd + 1, _NumericType.TargetDamAddAdd = 10 * _NumericType.TargetDamAdd + 2, _NumericType.TargetDamAddPct = 10 * _NumericType.TargetDamAdd + 3, _NumericType.TargetDamAddFinalAdd = 10 * _NumericType.TargetDamAdd + 4, _NumericType.TargetDamAddFinalPct = 10 * _NumericType.TargetDamAdd + 5, _NumericType.PvpDamDef = 1037, _NumericType.PvpDamDefBase = 10 * _NumericType.PvpDamDef + 1, _NumericType.PvpDamDefAdd = 10 * _NumericType.PvpDamDef + 2, _NumericType.PvpDamDefPct = 10 * _NumericType.PvpDamDef + 3, _NumericType.PvpDamDefFinalAdd = 10 * _NumericType.PvpDamDef + 4, _NumericType.PvpDamDefFinalPct = 10 * _NumericType.PvpDamDef + 5, _NumericType.AllDamAdd = 1038, _NumericType.AllDamAddBase = 10 * _NumericType.AllDamAdd + 1, _NumericType.AllDamAddAdd = 10 * _NumericType.AllDamAdd + 2, _NumericType.AllDamAddPct = 10 * _NumericType.AllDamAdd + 3, _NumericType.AllDamAddFinalAdd = 10 * _NumericType.AllDamAdd + 4, _NumericType.AllDamAddFinalPct = 10 * _NumericType.AllDamAdd + 5, _NumericType.AllDamDef = 1039, _NumericType.AllDamDefBase = 10 * _NumericType.AllDamDef + 1, _NumericType.AllDamDefAdd = 10 * _NumericType.AllDamDef + 2, _NumericType.AllDamDefPct = 10 * _NumericType.AllDamDef + 3, _NumericType.AllDamDefFinalAdd = 10 * _NumericType.AllDamDef + 4, _NumericType.AllDamDefFinalPct = 10 * _NumericType.AllDamDef + 5, _NumericType.HealAdd = 1040, _NumericType.HealAddBase = 10 * _NumericType.HealAdd + 1, _NumericType.HealAddAdd = 10 * _NumericType.HealAdd + 2, _NumericType.HealAddPct = 10 * _NumericType.HealAdd + 3, _NumericType.HealAddFinalAdd = 10 * _NumericType.HealAdd + 4, _NumericType.HealAddFinalPct = 10 * _NumericType.HealAdd + 5, _NumericType.HealDef = 1041, _NumericType.HealDefBase = 10 * _NumericType.HealDef + 1, _NumericType.HealDefAdd = 10 * _NumericType.HealDef + 2, _NumericType.HealDefPct = 10 * _NumericType.HealDef + 3, _NumericType.HealDefFinalAdd = 10 * _NumericType.HealDef + 4, _NumericType.HealDefFinalPct = 10 * _NumericType.HealDef + 5, _NumericType.CharstateReduceCdDef = 1042, _NumericType.CharstateReduceCdDefBase = 10 * _NumericType.CharstateReduceCdDef + 1, _NumericType.CharstateReduceCdDefAdd = 10 * _NumericType.CharstateReduceCdDef + 2, _NumericType.CharstateReduceCdDefPct = 10 * _NumericType.CharstateReduceCdDef + 3, _NumericType.CharstateReduceCdDefFinalAdd = 10 * _NumericType.CharstateReduceCdDef + 4, _NumericType.CharstateReduceCdDefFinalPct = 10 * _NumericType.CharstateReduceCdDef + 5, _NumericType.CharstateDoubleHitDef = 1043, _NumericType.CharstateDoubleHitDefBase = 10 * _NumericType.TargetDamAdd + 1, _NumericType.CharstateDoubleHitDefAdd = 10 * _NumericType.TargetDamAdd + 2, _NumericType.CharstateDoubleHitDefPct = 10 * _NumericType.TargetDamAdd + 3, _NumericType.CharstateDoubleHitDefFinalAdd = 10 * _NumericType.TargetDamAdd + 4, _NumericType.CharstateDoubleHitDefFinalPct = 10 * _NumericType.TargetDamAdd + 5, _NumericType.AttackCrit = 1044, _NumericType.CharstateAttackCritDef = 1045, _NumericType.CharstateAttackCritDefBase = 10 * _NumericType.TargetDamAdd + 1, _NumericType.CharstateAttackCritDefAdd = 10 * _NumericType.TargetDamAdd + 2, _NumericType.CharstateAttackCritDefPct = 10 * _NumericType.TargetDamAdd + 3, _NumericType.CharstateAttackCritDefFinalAdd = 10 * _NumericType.TargetDamAdd + 4, _NumericType.CharstateAttackCritDefFinalPct = 10 * _NumericType.TargetDamAdd + 5, _NumericType.CharstateAttackCritDam = 1046, _NumericType.CharstateAttackCritDamBase = 10 * _NumericType.CharstateAttackCritDam + 1, _NumericType.CharstateAttackCritDamAdd = 10 * _NumericType.CharstateAttackCritDam + 2, _NumericType.CharstateAttackCritDamPct = 10 * _NumericType.CharstateAttackCritDam + 3, _NumericType.CharstateAttackCritDamFinalAdd = 10 * _NumericType.CharstateAttackCritDam + 4, _NumericType.CharstateAttackCritDamFinalPct = 10 * _NumericType.CharstateAttackCritDam + 5, _NumericType.CharstateAttackCritDamDef = 1047, _NumericType.CharstateAttackCritDamDefBase = 10 * _NumericType.CharstateAttackCritDamDef + 1, _NumericType.CharstateAttackCritDamDefAdd = 10 * _NumericType.CharstateAttackCritDamDef + 2, _NumericType.CharstateAttackCritDamDefPct = 10 * _NumericType.CharstateAttackCritDamDef + 3, _NumericType.CharstateAttackCritDamDefFinalAdd = 10 * _NumericType.CharstateAttackCritDamDef + 4, _NumericType.CharstateAttackCritDamDefFinalPct = 10 * _NumericType.CharstateAttackCritDamDef + 5, _NumericType.CoreSkillCrit = 1048, _NumericType.CharstateSkillCritDef = 1049, _NumericType.CharstateSkillCritDefBase = 10 * _NumericType.CharstateSkillCritDef + 1, _NumericType.CharstateSkillCritDefAdd = 10 * _NumericType.CharstateSkillCritDef + 2, _NumericType.CharstateSkillCritDefPct = 10 * _NumericType.CharstateSkillCritDef + 3, _NumericType.CharstateSkillCritDefFinalAdd = 10 * _NumericType.CharstateSkillCritDef + 4, _NumericType.CharstateSkillCritDefFinalPct = 10 * _NumericType.CharstateSkillCritDef + 5, _NumericType.CharstateSkillCritDam = 1050, _NumericType.CharstateSkillCritDamBase = 10 * _NumericType.CharstateSkillCritDam + 1, _NumericType.CharstateSkillCritDamAdd = 10 * _NumericType.CharstateSkillCritDam + 2, _NumericType.CharstateSkillCritDamPct = 10 * _NumericType.CharstateSkillCritDam + 3, _NumericType.CharstateSkillCritDamFinalAdd = 10 * _NumericType.CharstateSkillCritDam + 4, _NumericType.CharstateSkillCritDamFinalPct = 10 * _NumericType.CharstateSkillCritDam + 5, _NumericType.CharstateSkillCritDamDef = 1051, _NumericType.CharstateSkillCritDamDefBase = 10 * _NumericType.CharstateSkillCritDamDef + 1, _NumericType.CharstateSkillCritDamDefAdd = 10 * _NumericType.CharstateSkillCritDamDef + 2, _NumericType.CharstateSkillCritDamDefPct = 10 * _NumericType.CharstateSkillCritDamDef + 3, _NumericType.CharstateSkillCritDamDefFinalAdd = 10 * _NumericType.CharstateSkillCritDamDef + 4, _NumericType.CharstateSkillCritDamDefFinalPct = 10 * _NumericType.CharstateSkillCritDamDef + 5, _NumericType.ActiveSkillCrit = 1052, _NumericType.CharstateBuffCritDef = 1053, _NumericType.CharstateBuffCritDefBase = 10 * _NumericType.CharstateBuffCritDef + 1, _NumericType.CharstateBuffCritDefAdd = 10 * _NumericType.CharstateBuffCritDef + 2, _NumericType.CharstateBuffCritDefPct = 10 * _NumericType.CharstateBuffCritDef + 3, _NumericType.CharstateBuffCritDefFinalAdd = 10 * _NumericType.CharstateBuffCritDef + 4, _NumericType.CharstateBuffCritDefFinalPct = 10 * _NumericType.CharstateBuffCritDef + 5, _NumericType.CharstateBuffCritDam = 1054, _NumericType.CharstateBuffCritDamBase = 10 * _NumericType.CharstateBuffCritDam + 1, _NumericType.CharstateBuffCritDamAdd = 10 * _NumericType.CharstateBuffCritDam + 2, _NumericType.CharstateBuffCritDamPct = 10 * _NumericType.CharstateBuffCritDam + 3, _NumericType.CharstateBuffCritDamFinalAdd = 10 * _NumericType.CharstateBuffCritDam + 4, _NumericType.CharstateBuffCritDamFinalPct = 10 * _NumericType.CharstateBuffCritDam + 5, _NumericType.CharstateBuffCritDamDef = 1055, _NumericType.CharstateBuffCritDamDefBase = 10 * _NumericType.CharstateBuffCritDamDef + 1, _NumericType.CharstateBuffCritDamDefAdd = 10 * _NumericType.CharstateBuffCritDamDef + 2, _NumericType.CharstateBuffCritDamDefPct = 10 * _NumericType.CharstateBuffCritDamDef + 3, _NumericType.CharstateBuffCritDamDefFinalAdd = 10 * _NumericType.CharstateBuffCritDamDef + 4, _NumericType.CharstateBuffCritDamDefFinalPct = 10 * _NumericType.CharstateBuffCritDamDef + 5, _NumericType.PlayerAtkAttackB = 1056, _NumericType.PlayerDefAttackB = 1057, _NumericType.PlayerAtkSkillB = 1058, _NumericType.PlayerDefSkillB = 1059, _NumericType.ActiveSkillAddB = 1060, _NumericType.ActiveSkillSubB = 1061, _NumericType.CharstateMaxEnergy = 1062, _NumericType.CharStateAtkSpeed = 1063, _NumericType.CharStateChargeTimeReduction = 1064, _NumericType.CharStateReduction = 1065, _NumericType.CharStateRecoverEnergyIncrease = 1066, _NumericType.PassiveSkillAddA = 1067, _NumericType.PassiveSkillSubA = 1068, _NumericType.PassiveSkillAddB = 1069, _NumericType.PassiveSkillSubB = 1070, _NumericType.DamageTypeAddPrefix = "DamageTypeAdd", _NumericType.DamageTypeAdd1 = 1071, _NumericType.DamageTypeAdd2 = 1072, _NumericType.DamageTypeAdd3 = 1073, _NumericType.DamageTypeAdd4 = 1074, _NumericType.DamageTypeAdd5 = 1075, _NumericType.DamageTypeAdd6 = 1076, _NumericType.DamageTypeAdd7 = 1077, _NumericType.DamageTypeAdd8 = 1078, _NumericType.DamageTypeAdd9 = 1079, _NumericType.DamageTypeAdd10 = 1080, _NumericType.FixedAddAttack = 1081, _NumericType.FixedAddCoreSkill = 1082, _NumericType.FixedAddActiveSkill = 1083, _NumericType.FixedAddPassiveSkill = 1084, _NumericType.FixedAddSpirit = 1085, _NumericType.SkillDamageAddA = 1086, _NumericType.SkillDamageSubA = 1087, _NumericType.SkillDamageAddB = 1088, _NumericType.SkillDamageSubB = 1089, _NumericType.SkillDamageFixedAdd = 1090, _NumericType.FieldSkillCD = 1091, _NumericType.FieldSkillDamageAdd = 1092, _NumericType.FieldSkillDamageSub = 1093, _NumericType.FieldSkillDamageFixed = 1094, _NumericType.AllSkillTypeAddA = 1095, _NumericType.AllSkillTypeSubA = 1096, _NumericType.AllSkillTypeAddB = 1097, _NumericType.AllSkillTypeSubB = 1098, _NumericType.AllSkillTypeFixed = 1099, _NumericType.DamageMaxHp = 1100, _NumericType.DamageTypeFixedPrefix = "DamageTypeFixed", _NumericType.DamageTypeFixed1 = 1101, _NumericType.DamageTypeFixed2 = 1102, _NumericType.DamageTypeFixed3 = 1103, _NumericType.DamageTypeFixed4 = 1104, _NumericType.DamageTypeFixed5 = 1105, _NumericType.DamageTypeFixed6 = 1106, _NumericType.DamageTypeFixed7 = 1107, _NumericType.DamageTypeFixed8 = 1108, _NumericType.DamageTypeFixed9 = 1109, _NumericType.DamageTypeFixed10 = 1110, _NumericType.GUIDE_FREQUENCY_ADD = 1111, _NumericType.Crit2 = 1112, _NumericType.Crit2_Def = 1113, _NumericType.Crit2_DAM = 1114, _NumericType.Crit2_DAM_DEF = 1115, _NumericType.DILI = 1116, _NumericType.DODGE = 1117, _NumericType.DODGE_DEF = 1118, _NumericType.MONSTER_DAM_ADD = 1119, _NumericType.CRIT_EXTRA_ADD = 1120, _NumericType.CRIT2_EXTRA_ADD = 1121, _NumericType.CHARSTATE_HUANHUA_DAM_ADD = 1127, _NumericType.CHARSTATE_HUANHUA_DAM_DEF = 1128, _NumericType.CHARSTATE_QILING_DAM_ADD = 1129, _NumericType.CHARSTATE_QILING_DAM_DEF = 1130, _NumericType.CHARSTATE_FAZE_DAM_ADD = 1131, _NumericType.CHARSTATE_FAZE_DAM_DEF = 1132, _NumericType.CHARSTATE_PET_DAM_ADD = 1133, _NumericType.CHARSTATE_PET_DAM_DEF = 1134, _NumericType.CHARSTATE_HUANHUA_DAM_ADD_B = 1135, _NumericType.CHARSTATE_HUANHUA_DAM_DEF_B = 1136, _NumericType.CHARSTATE_QILING_DAM_ADD_B = 1137, _NumericType.CHARSTATE_QILING_DAM_DEF_B = 1138, _NumericType.CHARSTATE_FAZE_DAM_ADD_B = 1139, _NumericType.CHARSTATE_FAZE_DAM_DEF_B = 1140, _NumericType.CHARSTATE_PET_DAM_ADD_B = 1141, _NumericType.CHARSTATE_PET_DAM_DEF_B = 1142, _NumericType.CHARSTATE_SPIRIT_DAM_ADD_B = 1143, _NumericType.CHARSTATE_SPIRIT_DAM_DEF_B = 1144, _NumericType.CHARSTATE_DILI_DEF = 1146, _NumericType.CHARSTATE_LINGLI_RECOVERY = 1147, _NumericType.CHARSTATE_LINGLI = 1148, _NumericType.CHARSTATE_LINGLI_MAX = 1149, _NumericType.CHARSTATE_POLING = 1150, _NumericType.CHARSTATE_POLING_DEF = 1151, _NumericType.CHARSTATE_POLING_DAM = 1152, _NumericType.CHARSTATE_POLING_DAM_DEF = 1153, _NumericType.CHARSTATE_POLING_EXTRA_ADD = 1154, _NumericType.hudunBase = 9999;
  var NumericType = _NumericType,
    _CfgCareerDislayConfig = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _CfgCareerDislayConfig.JsonName = "CareerDislayConfig.json";
  var CfgCareerDislayConfig = _CfgCareerDislayConfig,
    _CfgUnitConfig = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _CfgUnitConfig.JsonName = "UnitConfig.json";
  var CfgUnitConfig = _CfgUnitConfig,
    _Cfgcolor = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgcolor.JsonName = "color.json";
  var Cfgcolor = _Cfgcolor,
    _Cfgdungeon_data = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgdungeon_data.JsonName = "dungeon_data.json";
  var Cfgdungeon_data = _Cfgdungeon_data,
    _CfgmainUIbtn = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _CfgmainUIbtn.JsonName = "mainUIbtn.json";
  var CfgmainUIbtn = _CfgmainUIbtn,
    _CfgBuff = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _CfgBuff.JsonName = "Buff.json";
  var CfgBuff = _CfgBuff,
    BuffImmuneDeadComponent = class extends ECSComponent {
      constructor() {
        super(...arguments), this.stack = 1, this.recordTime = 0, this.taskTimerId = 0
      }
      setData(t, e, i, s, o, n) {
        this.buffConfigId = t, this.level = e, this.stack = i, this.n = s, this.recoverHpPct = o, this.effectId = n
      }
      get Config() {
        return CfgBuff.get(this.buffConfigId)
      }
      get LevelConfig() {
        return Buff.getLevelConfig(this.buffConfigId, this.level)
      }
      clearTimerTask() {
        this.taskTimerId && (TimerMgr.inst.removeFrameTask(this.taskTimerId), this.taskTimerId = 0)
      }
      recycle() {
        this.clearTimerTask(), this.buffConfigId = 0, this.level = 0, this.stack = 0, this.n = 0, this.recoverHpPct = 0, this.effectId = 0, this.recordTime = 0
      }
    };
  BuffImmuneDeadComponent = __decorateClass([ecsclass("BuffImmuneDeadComponent")], BuffImmuneDeadComponent);
  var ECSSystem = class {
      constructor() {
        this.enabled = !0, this.priority = 0
      }
      get name() {
        return this.constructor.name
      }
      get ecs() {
        if (!this.ecsInstance) throw new TypeError("[ECS] System.ecs is undefined");
        return this.ecsInstance
      }
      setEnvironment(t) {
        this.ecsInstance = t
      }
      load() {
        return __async(this, null, (function*() {}))
      }
      unload() {}
      start() {}
      pause() {}
      update(t) {}
    },
    import_proto2 = __toESM(require_proto()),
    Vector3 = Laya.Vector3,
    Quaternion = Laya.Quaternion,
    MathUtil = class {
      static clamp(t, e, i) {
        return Math.min(i, Math.max(e, t))
      }
      static lerp(t, e, i) {
        return e + t * (i - e)
      }
      static lerpInt(t, e, i) {
        return Math.floor(this.lerp(t, e, i))
      }
      static inverseLerp(t, e, i) {
        return (t - e) / (i - e)
      }
      static floatApproximately(t, e, i = 1e-4) {
        return Math.abs(t - e) < i
      }
      static vector2Approximately(t, e, i = 1e-4) {
        var s = t.x - e.x,
          o = t.y - e.y;
        return Math.abs(s) < i && Math.abs(o) < i
      }
      static vector3Approximately(t, e, i = 1e-4) {
        var s = t.x - e.x,
          o = t.y - e.y,
          n = t.z - e.z;
        return Math.abs(s) < i && Math.abs(o) < i && Math.abs(n) < i
      }
      static horizontalAngle(t) {
        var e;
        return 180 / Math.PI * Math.atan(t.x / (null != (e = t.z) ? e : t.y))
      }
      static directionToAngle(t) {
        let e = t.x,
          i = t.z,
          s = Math.sqrt(e * e + i * i);
        if (0 === s) return 0;
        let o = e / s,
          n = i / s,
          r = Math.acos(n) * (180 / Math.PI);
        return o < 0 && (r = 360 - r), r
      }
      static randomPointInCircle(t, e, i, s) {
        const o = 2 * Math.random() * Math.PI,
          n = Math.sqrt(Math.random()) * i;
        s.x = t + n * Math.cos(o), s.z = e + n * Math.sin(o)
      }
      static generateRandomPointsOnCircle(t, e, i, s) {
        const o = [];
        let n = 100;
        for (; o.length < s;) {
          let r = 2 * Math.random() * Math.PI,
            a = t + i * Math.cos(r),
            l = e + i * Math.sin(r),
            c = new Laya.Vector3(a, 0, l),
            h = !1;
          for (let t of o) {
            if (Math.sqrt(__pow(c.x - t.x, 2) + __pow(c.z - t.z, 2)) < 1.2) {
              h = !0;
              break
            }
          }
          if (h || o.push(c), o.length >= s || n-- <= 0) break
        }
        return o
      }
      static randomInt(t, e) {
        const i = e - t + 1;
        return t + Math.floor(Math.random() * i)
      }
      static randomUniqueInt(t, e, i) {
        const s = [];
        for (; s.length < i;) {
          const i = this.randomInt(t, e);
          s.includes(i) || s.push(i)
        }
        return s
      }
      static isVector3NaN(t) {
        return !!(Number.isNaN(t.x) || Number.isNaN(t.y) || Number.isNaN(t.z))
      }
      static speedS2C(t) {
        return t / 100
      }
      static posS2C(t) {
        var e, i;
        return new Vector3((null != (e = null == t ? void 0 : t.x) ? e : 0) / 100, 0, (null != (i = null == t ? void 0 : t.y) ? i : 0) / -100)
      }
      static posC2S(t, e) {
        let i = new import_proto2.default.mapscreen.Pos;
        return i.x = Math.floor(100 * (null != t ? t : 0)), i.y = Math.floor(-100 * (null != e ? e : 0)), i
      }
      static determineSegment(t, e, i) {
        const s = e / i;
        for (let e = 1; e <= i; e++)
          if (t <= e * s) return e;
        return -1
      }
      static formatDecimal(t, e) {
        let i = t.toFixed(e);
        for (;
          "0" === i.charAt(i.length - 1);) i = i.slice(0, -1);
        return "." === i.charAt(i.length - 1) && (i = i.slice(0, -1)), i
      }
