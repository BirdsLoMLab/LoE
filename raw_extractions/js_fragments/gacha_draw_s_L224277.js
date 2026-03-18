// Fragment: gacha_draw_s_L224277.js
// Lines: 224277-224377 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: probability
// Hit lines: 224277

            if (i.probability >= 100 * Math.random()) {
              let s = i.skillDataIdB;
              i.skillB && (s = 1e4 * i.skillB + e % 1e4), Laya.timer.frameOnce(1, t, (() => {
                SpellSystem.releaseSpell(t, s, i.buffConfigId)
              })), i.frequency = 1, i.cdTime && (i.buffCDTime = Laya.timer.currTimer + i.cdTime)
            } BuffComponentSystem.resetExplosiveFrequency(n, e)
        }
        e == t.CoreSkill && (t.setCoreSkillInfo(), null == (s = null == n ? void 0 : n.Buff_30Info) || s.RemoveOne()), n && (e == t.CoreSkill && n.Buff_27map && n.Buff_27map.addNum(), e == t.CoreSkill && n.Buff_29Info && n.Buff_29Info.resetCnt(), null == (o = n.Buff_49Info) || o.skillEnd(e)), SpellSystem.removeTagStep23(t, e), SpellSystem.skillStepType27Skill(t, e), Debug.isShowLogTag(Debug.Tag_BUFF) && Debug.log_buff(`releaseSkillEnd:${e}`)
      }
      static splitArrowAddEnergy(t, e, i) {
        null != t && t.HitTargetAddEnergySkillId == e && (t.energyValue = t.energyValue + i * t.HitTargetAddEnergy, t.HitTargetAddEnergySkillId = 0, t.HitTargetAddEnergy = 0)
      }
      static AimPosFlyToTargetEffect(t, e, i, s) {
        return __async(this, null, (function*() {
          var o;
          let n = t.getStepParasValue(e, i, s);
          if (null == n || null == n.Paras) return;
          let r = t.Targets.get(e);
          if (null == r || 0 == r.length) return;
          let a = parseInt(null == n ? void 0 : n.Paras[0]);
          if (0 === a) return void Debug.LogError("FlyToTargetEffect unitConfigId === 0");
          let l = this.parseArgs(t, e, n.Paras[1], s),
            c = [];
          const h = null == (o = t.entity.getComponent(AttackComponent)) ? void 0 : o.Aim;
          if (null != h) {
            for (let i of r) null !== i && c.push(this.createAndHandleTask(t, h, i, a, l, e));
            try {
              yield Promise.all(c), this.isLastStep(t, e, i) && this.onSkillPlayOver(t, e)
            } catch (t) {
              Debug.LogError("One or more tasks failed", t)
            }
          }
        }))
      }
      static createAndHandleTask(t, e, i, s, o, n, r = !0) {
        return r && Quaternion7.forwardLookAt(e.Position, i.Position, Vector313.Up, MathUtil.quaternion), UnitFactorySystem.createSkill(t, e, MathUtil.quaternion, i, s, o, n).then((s => {
          let o = SkillHelper.getSkillConfig(n),
            r = CfgskillDecData.get(o.SkillId),
            a = t.entity == UnitHelper.getMyEntity() ? r.hitSound : 0;
          return SpellSystem.playHitEffect(t, i, n, a, e), s
        }))
      }
      static checkNoAimSelectTarget(t) {
        var e, i;
        if (ECSEntity.checkIsDisposed(null == (e = null == t ? void 0 : t.entity) ? void 0 : e.id) || null != t.Aim) return;
        const s = null == (i = t.entity) ? void 0 : i.getComponent(UnitComponent2);
        t.Aim = UnitHelper.getClosestTarget(s)
      }
      static addBuffAdditionalDamage(t, e, i, s, o, n) {
        if (!t || !t.entity || !i) return;
        const r = t.entity,
          a = r.getComponent(BuffComponent),
          l = r.getComponent(UnitComponent2);
        if (!a || !l) return;
        const c = BuffComponentSystem.getBuff42(a, e.skillId),
          h = BuffComponentSystem.getBuff56Arr(a, e.skillId),
          u = BuffComponentSystem.getBuff68Arr(a, e.skillId),
          p = l.entityId,
          d = r.getComponent(AttackComponent),
          g = null == d ? void 0 : d.Aim;
        if (SpellSystem.checkNoAimSelectTarget(d), !d || !g) return;
        let m = !1;
        const I = e.cfgJudge,
          y = e.from,
          _ = e.skillId,
          f = e.damage_type,
          C = e.skillDecCfg,
          U = null == y ? void 0 : y.entityId,
          b = (t, r) => {
            var a;
            let c = !1;
            if (!t || t.length <= 0) return c;
            if (!ECSEntity.checkIsDisposed(p))
              for (const h of t) {
                if (!h || h.IsDie) continue;
                if (ECSEntity.checkIsDisposed(null == (a = null == h ? void 0 : h.entity) ? void 0 : a.id)) continue;
                const t = Laya.Pool.getItemByClass("DamageInfo", DamageInfo2);
                t.damage = Math.floor(i * r), t.dmgHealType = s, t.dmgSubType = o, BattleHelper.applyDamage(l, h, t, e.skillId, n), c = !0
              }
            return c
          };
        c && c.length > 0 && (c.forEach((e => {
          e.takeEffect = !1, e.curSkillDataId = 0;
          let i = [];
          if (0 != e.judgeParameter) {
            let s = CfgSkillJudgeConfig.get(e.judgeParameter, !0);
            i = SpellSystem.getTargets(t, _, s)
          } else i.push(g);
          b(i, e.y) && (m = !0)
        })), m && BuffListenSkillComponentSystem.dispatchAdditionalDamage(e)), h && h.length > 0 && (m = !1, h.forEach((e => {
          e.takeEffect = !1, e.curSkillDataId = 0;
          let i = [];
          if (0 != e.judgeParameter) {
            let s = CfgSkillJudgeConfig.get(e.judgeParameter, !0);
            i = SpellSystem.getTargets(t, _, s)
          } else i.push(g);
          if (b(i, e.y) && (m = !0), e.n > 1) {
            e.targets = i;
            let t = e.n - 1,
              s = 0;
            const o = e.gapTime;
