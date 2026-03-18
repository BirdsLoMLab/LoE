// Fragment: stat_system_O_L413500.js
// Lines: 413500-413622 of bundle-beautified.js
// Categories: Stat System
// Keywords: DILI, block, dodge
// Hit lines: 413500, 413503, 413514, 413516, 413520, 413522

        const O = C.GetAsFloat(NumericType.DODGE),
          V = U.GetAsFloat(NumericType.DODGE_DEF),
          E = Math.random() < MathUtil.clamp(O - V, 0, .7);
        if (Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------mingzhongchengqu-----------"), Debug.Log(Debug.Tag_Mod_Damage, "enemy DODGE:" + C.GetAsFloat(NumericType.DODGE)), Debug.Log(Debug.Tag_Mod_Damage, "my DODGE_DEF:" + U.GetAsFloat(NumericType.DODGE_DEF)), Debug.Log(Debug.Tag_Mod_Damage, "isDodge:" + E), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------")), E) return f.damage = 0, f.dmgSubType |= 4, f;
        const N = C.GetAsInt(NumericType.PHit),
          F = U.GetAsInt(NumericType.PHit) - N;
        let H = 1;
        F > 0 && (H = 1 - Math.min(.5, F * Hit_RATIO)), B = Math.max(x * MIN_DMG_ATK_PCT, x - (1 - a) * C.GetAsInt(NumericType.PDef) * H), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------gongjichengqu-----------"), Debug.Log(Debug.Tag_Mod_Damage, "my pAtk:" + x), Debug.Log(Debug.Tag_Mod_Damage, "enemy PDef:" + C.GetAsInt(NumericType.PDef)), Debug.Log(Debug.Tag_Mod_Damage, "ignoreDefPct:" + a), Debug.Log(Debug.Tag_Mod_Damage, "isHit:" + (F > 0)), Debug.Log(Debug.Tag_Mod_Damage, "(1-(fromPHit-toPHit)*0.1%)=" + H), Debug.Log(Debug.Tag_Mod_Damage, "curDamage:" + B), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------")), B *= n, Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------beilvChengqu-----------"), Debug.Log(Debug.Tag_Mod_Damage, "skillRatio: " + n), Debug.Log(Debug.Tag_Mod_Damage, "curDamage：" + B), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------"));
        const G = C.GetAsInt(NumericType.PBlock),
          Y = U.GetAsInt(NumericType.PBlock),
          j = G - Y;
        let q = 0;
        q = Math.min(.5, j * BLOCK_RATIO);
        const X = Math.random() < q && j > 0;
        X && (f.dmgSubType |= 2, B *= .5), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------gedangchengqu-----------"), Debug.Log(Debug.Tag_Mod_Damage, "my block:" + Y), Debug.Log(Debug.Tag_Mod_Damage, "enemy block:" + G), Debug.Log(Debug.Tag_Mod_Damage, "isTriggleBlock:" + X), Debug.Log(Debug.Tag_Mod_Damage, "blockFactor:" + q), Debug.Log(Debug.Tag_Mod_Damage, "curDamage:" + B), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------"));
        let W = 0;
        if (C.GetAsFloat(NumericType.DILI) > 0) {
          const t = C.get(NumericType.Hp),
            e = C.get(NumericType.MaxHp);
          let i = (e - t) / e;
          i /= DI_LI, i = MathUtil.clamp(i, 0, 1), W = i * (C.GetAsFloat(NumericType.DILI) - U.GetAsFloat(NumericType.CHARSTATE_DILI_DEF)), W = MathUtil.clamp(W, 0, .9), W = 1 - W, B *= W
        }
        Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------diLiChengQU-----------"), Debug.Log(Debug.Tag_Mod_Damage, "enemy DILI:" + C.GetAsFloat(NumericType.DILI)), Debug.Log(Debug.Tag_Mod_Damage, "my DILI_DE:" + U.GetAsFloat(NumericType.CHARSTATE_DILI_DEF)), Debug.Log(Debug.Tag_Mod_Damage, "(1-missPct/85%*(enemy_DILI-my_DILI_DEF))=" + W), Debug.Log(Debug.Tag_Mod_Damage, "curDamage:" + B), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------"));
        {
          let t = U.GetAsFloat(NumericType.Crit) - C.GetAsFloat(NumericType.CritDef),
            e = 0;
          if (b) switch (b) {
            case 1:
              e = U.GetAsFloat(NumericType.AttackCrit);
              break;
            case 4:
              e = U.GetAsFloat(NumericType.CoreSkillCrit);
              break;
            case 5:
              e = U.GetAsFloat(NumericType.ActiveSkillCrit)
          }
          t += e, Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "my Crit ：" + U.GetAsFloat(NumericType.Crit)), Debug.Log(Debug.Tag_Mod_Damage, "enemy CritDef：" + C.GetAsFloat(NumericType.CritDef)), Debug.Log(Debug.Tag_Mod_Damage, "Crit：" + t), Debug.Log(Debug.Tag_Mod_Damage, "moldCrit:" + e), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------")), t = MathUtil.clamp(t, 0, 1);
          if (t > Math.random() || l) {
            4 == b && null != k && k.Buff54Arr.forEach((t => {
              B *= t.x + 1, S += t.y, Debug.isShowLogTag(Debug.Tag_Mod_Damage) && Debug.Log(Debug.Tag_Mod_Damage, `buff 54  value.x = ${t.x} | add value.y=${t.y} finalDamage = ${B} `)
            })), f.dmgSubType |= 1;
            let t = (CRIT_MIN_PCT + U.GetAsFloat(NumericType.CritDam) - C.GetAsFloat(NumericType.CritDamDef)) * (1 + U.GetAsFloat(NumericType.CRIT_EXTRA_ADD));
            t = Math.max(CRIT_MIN_PCT, t), B *= t, Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "------------chufa- baoJi-----------"), Debug.Log(Debug.Tag_Mod_Damage, "my CritDam：" + U.GetAsFloat(NumericType.CritDam)), Debug.Log(Debug.Tag_Mod_Damage, "enemy CritDamDef:" + C.GetAsFloat(NumericType.CritDamDef)), Debug.Log(Debug.Tag_Mod_Damage, "my CRIT_EXTRA_ADD:" + U.GetAsFloat(NumericType.CRIT_EXTRA_ADD)), Debug.Log(Debug.Tag_Mod_Damage, "(200%+CritDam-CritDamDef)=" + t), Debug.Log(Debug.Tag_Mod_Damage, "forceCirt: " + l), Debug.Log(Debug.Tag_Mod_Damage, "curDamage：" + B), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------"))
          } else f.dmgSubType |= 0, Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------buchufa- baoJi-----------"), Debug.Log(Debug.Tag_Mod_Damage, "curDamage：" + B), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------"))
        }
        let Z = U.GetAsFloat(NumericType.Crit2) - C.GetAsFloat(NumericType.Crit2_Def);
        Z = MathUtil.clamp(Z, 0, 1);
        const Q = Z > Math.random();
        let J = 0;
        Q && (f.dmgSubType |= 32, J = (CRIT2_MIN_PCT + U.GetAsFloat(NumericType.Crit2_DAM) - C.GetAsFloat(NumericType.Crit2_DAM_DEF)) * (1 + U.GetAsFloat(NumericType.CRIT2_EXTRA_ADD)), J = Math.max(CRIT2_MIN_PCT, J), B *= J), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------tongxuan ChengQu -----------"), Debug.Log(Debug.Tag_Mod_Damage, "jiqiao:" + Z), Debug.Log(Debug.Tag_Mod_Damage, "my Crit2_DAM:" + U.GetAsFloat(NumericType.Crit2_DAM)), Debug.Log(Debug.Tag_Mod_Damage, "enemy Crit2_DAM_DEF:" + C.GetAsFloat(NumericType.Crit2_DAM_DEF)), Debug.Log(Debug.Tag_Mod_Damage, "tongxuan CRIT2_EXTRA_ADD:" + U.GetAsFloat(NumericType.CRIT2_EXTRA_ADD)), Debug.Log(Debug.Tag_Mod_Damage, "isTriggleJiQiao:" + Q), Debug.Log(Debug.Tag_Mod_Damage, "(200%+Crit2_DAM-Crit2_DAM_DEF)=" + J), Debug.Log(Debug.Tag_Mod_Damage, "curDamage：" + B), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------"));
        let z = U.GetAsFloat(NumericType.CHARSTATE_POLING) - C.GetAsFloat(NumericType.CHARSTATE_POLING_DEF);
        z = MathUtil.clamp(z, 0, 1);
        const K = z > Math.random();
        let $ = 0;
        K && (f.dmgSubType |= 512, $ = (CRIT_MIN_PCT + U.GetAsFloat(NumericType.CHARSTATE_POLING_DAM) - C.GetAsFloat(NumericType.CHARSTATE_POLING_DAM_DEF)) * (1 + U.GetAsFloat(NumericType.CHARSTATE_POLING_EXTRA_ADD)), $ = Math.max(CRIT2_MIN_PCT, $), B *= $), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------poling ChengQu -----------"), Debug.Log(Debug.Tag_Mod_Damage, "isTrigglePoling:" + K), Debug.Log(Debug.Tag_Mod_Damage, "my poLingAllFactor:" + $), Debug.Log(Debug.Tag_Mod_Damage, "curDamage：" + B), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------")), B *= Math.max(.3, 1 + U.GetAsFloat(NumericType.AllDamAdd) - C.GetAsFloat(NumericType.AllDamDef));
        const tt = B;
        Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------quanJu ChengQu-----------"), Debug.Log(Debug.Tag_Mod_Damage, "my AllDamAdd:" + U.GetAsFloat(NumericType.AllDamAdd)), Debug.Log(Debug.Tag_Mod_Damage, "enemy AllDamDef:" + C.GetAsFloat(NumericType.AllDamDef)), Debug.Log(Debug.Tag_Mod_Damage, "curDamage：:" + tt), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------"));
        let et = 0,
          it = 0,
          st = 0,
          ot = 0;
        if (b) switch (b) {
          case 1:
            et = U.GetAsFloat(NumericType.PlayerAtkAttackA), it = C.GetAsFloat(NumericType.PlayerDefAttackA), st = U.GetAsFloat(NumericType.PlayerAtkAttackB), ot = C.GetAsFloat(NumericType.PlayerDefAttackB);
            break;
          case 4:
            et = U.GetAsFloat(NumericType.PlayerAtkSkillA), it = C.GetAsFloat(NumericType.PlayerDefSkillA), st = U.GetAsFloat(NumericType.PlayerAtkSkillB), ot = C.GetAsFloat(NumericType.PlayerDefSkillB);
            break;
          case 5:
            et = U.GetAsFloat(NumericType.ActiveSkillAddA), it = C.GetAsFloat(NumericType.ActiveSkillSubA), st = U.GetAsFloat(NumericType.ActiveSkillAddB), ot = C.GetAsFloat(NumericType.ActiveSkillSubB);
            break;
          case 6:
            et = U.GetAsFloat(NumericType.PassiveSkillAddA), it = C.GetAsFloat(NumericType.PassiveSkillSubA), st = U.GetAsFloat(NumericType.PassiveSkillAddB), ot = C.GetAsFloat(NumericType.PassiveSkillSubB);
            break;
          case 3:
            et = U.GetAsFloat(NumericType.AtkPlayerSpirt), it = C.GetAsFloat(NumericType.DefPlayerSpirt), st = U.GetAsFloat(NumericType.CHARSTATE_SPIRIT_DAM_ADD_B), ot = C.GetAsFloat(NumericType.CHARSTATE_SPIRIT_DAM_DEF_B);
            break;
          case 7:
            et = U.GetAsFloat(NumericType.CHARSTATE_HUANHUA_DAM_ADD), it = C.GetAsFloat(NumericType.CHARSTATE_HUANHUA_DAM_DEF), st = U.GetAsFloat(NumericType.CHARSTATE_HUANHUA_DAM_ADD_B), ot = C.GetAsFloat(NumericType.CHARSTATE_HUANHUA_DAM_DEF_B);
            break;
          case 8:
            et = U.GetAsFloat(NumericType.CHARSTATE_QILING_DAM_ADD), it = C.GetAsFloat(NumericType.CHARSTATE_QILING_DAM_DEF), st = U.GetAsFloat(NumericType.CHARSTATE_QILING_DAM_ADD_B), ot = C.GetAsFloat(NumericType.CHARSTATE_QILING_DAM_DEF_B);
            break;
          case 9:
            et = U.GetAsFloat(NumericType.CHARSTATE_FAZE_DAM_ADD), it = C.GetAsFloat(NumericType.CHARSTATE_FAZE_DAM_DEF), st = U.GetAsFloat(NumericType.CHARSTATE_FAZE_DAM_ADD_B), ot = C.GetAsFloat(NumericType.CHARSTATE_FAZE_DAM_DEF_B);
            break;
          case 10:
            et = U.GetAsFloat(NumericType.CHARSTATE_PET_DAM_ADD), it = C.GetAsFloat(NumericType.CHARSTATE_PET_DAM_DEF), st = U.GetAsFloat(NumericType.CHARSTATE_PET_DAM_ADD_B), ot = C.GetAsFloat(NumericType.CHARSTATE_PET_DAM_DEF_B)
        }
        let nt = 0,
          rt = 0;
        if (w && 1 === w) nt = U.GetAsFloat(NumericType.FieldSkillDamageAdd), rt = C.GetAsFloat(NumericType.FieldSkillDamageSub);
        if (st += s.x, 4 == b) {
          if ((null == s ? void 0 : s.skillId) == (null == T ? void 0 : T.CoreSkill)) {
            const t = null == T ? void 0 : T.NextCoreSkillInfo;
            t && (st += t.argX / 1e4, S += t.argY, Debug.IsShowLog && Debug.Log(Debug.Tag_Mod_Damage, "is  NextCoreSkillInfo coreInfo.argY=" + t.argY + "|argX=" + t.argX))
          }
          const t = null == k ? void 0 : k.Buff_30Info;
          (null == t ? void 0 : t.enabled()) && (st += t.x, S += t.y, Debug.IsShowLog && Debug.Log(Debug.Tag_Mod_Damage, "is 30 b30.x b30.x=" + t.x + "|b30.y=" + t.y));
          const e = null == k ? void 0 : k.Buff_29Info;
          e && (st += e.getAdd(), Debug.IsShowLog && isNaN(e.getAdd()) && Debug.LogError("is NaN b29.getAdd()=" + e.getAdd()))
        }
        if (null == s ? void 0 : s.isAcumulateSkill) {
          const t = null == k ? void 0 : k.Buff_31Info;
          if (t) {
            const e = null == T ? void 0 : T.getSkillAcumulateTime(null == s ? void 0 : s.skillId);
            t.setCnt(e), st += t.x, S += t.y, Debug.IsShowLog && (isNaN(t.x) || isNaN(t.y)) && Debug.LogError("is NaN b31.y=" + t.x + "|b31.y=" + t.y)
          }
        }
        const at = null == k ? void 0 : k.Buff_38Info;
        if (at && (st += at.x + at.z, S += at.y, Debug.IsShowLog && (isNaN(at.x) || isNaN(at.y) || isNaN(at.z)) && Debug.LogError("is NaN b38.x=" + at.x + "|b38.y=" + at.y + "|b38.z=" + at.z)), null != k && null != k.Buff40Map && k.Buff40Map.forEach((e => {
            null != e && e.forEach((e => {
              t.isSameSkillMode(b, e.skillMod) && (st += e.x, S += e.y, Debug.IsShowLog && (isNaN(e.x) || isNaN(e.y)) && Debug.LogError("is NaN Buff40Map value.x=" + e.x + "|value.y=" + e.y), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && Debug.Log(Debug.Tag_Mod_Damage, `buff40.buffConfigId = ${e.buffConfigId} add x = ${e.x} value.y = ${e.y} `))
            }))
          })), null != k && k.Buff45Arr) {
          const e = CfgskillDecData.get(t.getSkillId(null == T ? void 0 : T.CoreSkill), !0);
          (null == e ? void 0 : e.damage_type) == o && k.Buff45Arr.forEach((t => {
            st += t.x, S += t.y, Debug.IsShowLog && (isNaN(t.x) || isNaN(t.y)) && Debug.LogError("is NaN Buff45Arr value.x=" + t.x + "|value.y=" + t.y), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && Debug.Log(Debug.Tag_Mod_Damage, `buff 45 .buffConfigId = ${t.buffConfigId} add x = ${t.x} value.y = ${t.y} `)
          }))
        }
        if (v && k) {
          const t = BuffComponentSystem.getBuff65ImproveDamage(k, v, null == s ? void 0 : s.skillId);
          st += t, Debug.isShowLogTag(Debug.Tag_Mod_Damage) && t > 0 && Debug.Log(Debug.Tag_Mod_Damage, `buff 65  buff65Improve = ${t} `)
