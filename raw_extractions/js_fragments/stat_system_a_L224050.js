// Fragment: stat_system_a_L224050.js
// Lines: 224050-224151 of bundle-beautified.js
// Categories: Stat System
// Keywords: attack
// Hit lines: 224051

          let a = 0;
          s && (a = s * r), n = Math.ceil(e.get(2 == i ? NumericType.MaxHp : NumericType.Hp) * o), a && n > a && (n = a, Debug.isShowLogTag(Debug.Tag_Mod_Damage) && (Debug.Log(Debug.Tag_Mod_Damage, "-------------getLimitMaxDamage MaxHpPct Hp attack-----------"), Debug.Log(Debug.Tag_Mod_Damage, "skillRatio=" + o), Debug.Log(Debug.Tag_Mod_Damage, "damage=" + n), Debug.Log(Debug.Tag_Mod_Damage, "formulaType=" + i), Debug.Log(Debug.Tag_Mod_Damage, "limitMaxDamage=" + a), Debug.Log(Debug.Tag_Mod_Damage, "-------------------------------")))
        }
        return n
      }
      static playFlyEffect(t, e, i, s, o) {
        return __async(this, null, (function*() {
          var n, r, a, l, c, h, u, p;
          if (ECSEntity.checkIsDisposed(null == (n = null == t ? void 0 : t.entity) ? void 0 : n.id)) return;
          let d = t.getStepParasValue(e, i, o);
          if (null == d || null == d.Paras) return;
          const g = d.Paras[4] ? this.parseArgs(t, e, d.Paras[4], o) : 0;
          let m;
          0 != g && (t.setSkillTarget(e, null), m = CfgSkillJudgeConfig.get(g), SpellSystem.selectTargets(t, e, m));
          let I = t.Targets.get(e);
          const y = t.entity.getComponent(UnitComponent2);
          if (null == I || 0 == I.length || null == y) return;
          let _ = parseInt(null == d ? void 0 : d.Paras[0]);
          if (0 === _) return void(Debug.IsShowLog && Debug.LogError("FlyEffect need entity id"));
          let f = this.parseArgs(t, e, d.Paras[1], o),
            C = this.parseArgs(t, e, d.Paras[2], o) / 1e4,
            U = this.parseArgs(t, e, d.Paras[3], o);
          if (!C && !U) return;
          const b = d.Paras[5] ? this.parseArgs(t, e, d.Paras[5], o) : 1,
            w = d.Paras[6],
            S = (w ? this.parseArgs(t, e, w, o) : 0) / 100,
            k = SkillHelper.getSkillConfig(e),
            v = CfgskillDecData.get(k.SkillId);
          var T = null == v ? void 0 : v.damage_type,
            P = BattleHelper.getReplaceDamageType(t, e);
          0 != P && (T = P);
          let M = 0;
          w && (M = this.parseArgs(t, e, w, o));
          const D = SpellSystem.getSpellSkillDamageInfoByPool();
          D.setData(m, y, e, I, T, v, b, C, U, S, M), src_default.dispatch(ON_SPELL_SKILL_DAMAGE, D);
          const x = null == (r = null == y ? void 0 : y.entity) ? void 0 : r.getComponent(NumericComponent),
            R = null == (l = null == (a = y.entity) ? void 0 : a.getComponent(AttackComponent)) ? void 0 : l.Aim;
          let L = [],
            A = [],
            B = 0,
            O = 0,
            V = 0,
            E = BuffComponentSystem.getMasterHave108BuffArr(null == (c = y.entity) ? void 0 : c.getComponent(BuffComponent));
          for (let i of I) {
            if (!i) continue;
            Quaternion7.forwardLookAt(y.Position, i.Position, Vector313.Up, MathUtil.quaternion);
            let o = 0;
            if (2 == b || 3 == b) {
              const t = null == (h = i.entity) ? void 0 : h.getComponent(NumericComponent);
              o = SpellSystem.getLimitMaxDamage(x, t, b, M, C)
            }
            let n = SpellSystem.onColliderIn(y, i, e, T, C, U, o, S, s);
            A.push(BuffComponentSystem.buff94DamageTriggerType(n));
            const r = n.damage,
              a = n.dmgHealType,
              l = n.dmgSubType;
            i == R && (B = r, O = a, V = l);
            const c = i.entityId,
              u = UnitFactorySystem.createSkill(t, y, MathUtil.quaternion, i, _, f, e).then((o => {
                const h = t.entity == UnitHelper.getMyEntity() ? v.hitSound : 0;
                return ECSEntity.checkIsDisposed(c) || (SpellSystem.playHitEffect(t, i, e, h, y), BattleHelper.applyDamage(y, i, n, e), BuffComponentSystem.addMasterHave108BuffDamage(y, i, E, r, a, l, e, s, !1)), o
              }));
            L.push(u)
          }
          try {
            yield Promise.all(L), this.isLastStep(t, e, i, o) && this.onSkillPlayOver(t, e), BuffComponentSystem.buff94DamageHandle(y, null == (p = null == (u = t.entity) ? void 0 : u.getComponent(AttackComponent)) ? void 0 : p.Aim, A), SpellSystem.addBuffAdditionalDamage(t, D, B, O, V, s), SpellSystem.splitArrowAddEnergy(t, e, I.length), SpellSystem.recoverSpellSkillDamageInfoToPool(D)
          } catch (t) {
            Debug.LogError("One or more tasks failed", t)
          }
        }))
      }
      static getSpellSkillDamageInfoByPool() {
        return Laya.Pool.getItemByClass("SpellSkillDamageInfo", SpellSkillDamageInfo2)
      }
      static recoverSpellSkillDamageInfoToPool(t) {
        t && (t.reset(), Laya.Pool.recover("SpellSkillDamageInfo", t))
      }
      static getDamageArgInfoByPool() {
        return Laya.Pool.getItemByClass("DamageArgInfo", DamageArgInfo)
      }
      static recoverDamageArgInfoToPool(t) {
        t && (t.reset(), Laya.Pool.recover("DamageArgInfo", t))
      }
      static onColliderIn(t, e, i, s, o = 1e4, n = 0, r = 0, a = 0, l = 0) {
        var c, h, u, p;
        let d = Laya.Pool.getItemByClass("DamageInfo", DamageInfo2);
        if (ECSEntity.checkIsDisposed(null == (c = null == e ? void 0 : e.entity) ? void 0 : c.id) || ECSEntity.checkIsDisposed(null == (h = null == t ? void 0 : t.entity) ? void 0 : h.id)) return d;
        const g = t.entity.getComponent(BuffComponent),
          m = t.entity.getComponent(SpellComponent),
          I = BuffComponentSystem.checkGiantFireballCrit(g, i);
        m.addTempImproveAttr(i), m.add23TempImproveAttr(i);
        const y = SpellSystem.getDamageArgInfoByPool();
        if (y.setData(i, i == m.AcumulateSkillId, l), Debug.isShowLogTag(Debug.Tag_BUFF) && Debug.Log(Debug.Tag_BUFF, "-------------calcDamageNew skillId=" + i), null != g) {
          let t = BuffComponentSystem.getSkillDmgImprove(g, i);
          null != t && t.takeEffect && (y.setXy(t.x, t.y), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && Debug.Log(Debug.Tag_Mod_Damage, " buff 16  B bufImproveInfo.x  =" + t.x + "|y=" + t.y))
        }
        null != m.skillStep24Info && m.skillStep24Info.skillDataId == i && (y.addXy(0, m.skillStep24Info.argY), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && Debug.Log(Debug.Tag_Mod_Damage, " skill  24 B skillStep24Info.argX=" + m.skillStep24Info.argX + "|argY=" + m.skillStep24Info.argY));
        var _ = BuffComponentSystem.getBuff25TakeEffectDamage(g, i);
        if (_ > 0 && (y.addXy(_, 0), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && Debug.Log(Debug.Tag_Mod_Damage, " buff  25 B argX=" + _)), 0 == r ? d = BattleHelper.calcDamageNew(t, e, y, s, o, n, a, I) : d.setData(r), m.removeTempImproveAttr(i), m.remove23TempImproveAttr(i), g && e && !ECSEntity.checkIsDisposed(null == (u = null == e ? void 0 : e.entity) ? void 0 : u.id)) {
          const t = BuffComponentSystem.getBuff11Damage(g, i);
          0 != t && (d.damage *= Math.max(0, 1 + t), Debug.isShowLogTag(Debug.Tag_Mod_Damage) && Debug.Log(Debug.Tag_Mod_Damage, `factor Buff11 =${t} target damage=${d.damage}`));
          const s = null == (p = e.entity) ? void 0 : p.getComponent(NumericComponent);
