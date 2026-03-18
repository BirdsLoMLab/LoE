// Fragment: gacha_draw_setData_L413365.js
// Lines: 413365-413466 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: probability
// Hit lines: 413366

      setData(t, e, i, s, o, n, r) {
        this.buffConfigId = t, this.frequency = e, this.skillIdA = i, this.probability = s, this.skillDataIdB = o, this.cdTime = n, this.skillB = r, this.initFrequency = e
      }
    },
    _BattleHelper = class t {
      static padZero(t) {
        return t < 10 ? "0" + t : t
      }
      static padMilliseconds(t) {
        return t < 10 ? "00" + t : t < 100 ? "0" + t : t
      }
      static clearSecondRecord() {
        t.skillDamage.clear(), t.myTotal = 0, t.skillNum.clear()
      }
      static getTime() {
        const e = Date.now(),
          i = new Date(e),
          s = i.getHours(),
          o = i.getMinutes(),
          n = i.getSeconds(),
          r = i.getMilliseconds();
        return `${t.padZero(s)}:${t.padZero(o)}:${t.padZero(n)}.${t.padMilliseconds(r)}`
      }
      static isMy(t) {
        var e;
        if (!t) return !1;
        if (UnitHelper.isMyUnit(t.getComponent(UnitComponent2))) return !0;
        const i = null == t ? void 0 : t.getComponent(SummonComponent);
        return i ? UnitHelper.isMyEntity(i.MasterEntity) : !!(null == (e = null == t ? void 0 : t.getComponent(MagicNPCComponent)) ? void 0 : e.isMy)
      }
      static printLog(e, i, s, o = 0, n = 0) {
        if ((6 == CoreMapCtrl.inst.mapType || 15 == CoreMapCtrl.inst.mapType || 2 == CoreMapCtrl.inst.mapType || 1 == CoreMapCtrl.inst.mapType && StageCtrl.inst.bossFighting()) && t.isMy(null == e ? void 0 : e.entity)) {
          let e = 0,
            i = 0;
          0 == n ? (t.skillDamage.has(o) ? t.skillDamage.set(o, t.skillDamage.get(o) + s.damage) : t.skillDamage.set(o, s.damage), t.skillNum.has(o) ? t.skillNum.set(o, t.skillNum.get(o) + 1) : t.skillNum.set(o, 1), e = t.skillDamage.get(o), i = t.skillNum.get(o)) : (t.skillDamage.has(n) ? t.skillDamage.set(n, t.skillDamage.get(n) + s.damage) : t.skillDamage.set(n, s.damage), t.skillNum.has(n) ? t.skillNum.set(n, t.skillNum.get(n) + 1) : t.skillNum.set(n, 1), e = t.skillDamage.get(n), i = t.skillNum.get(n)), t.myTotal += s.damage, 0 == n ? Debug.log_battle(`${t.getTime()} i=${t.totalIndex} skillId=${o} totalNum=${i} buffId=${n} dmgInfo=${null==s?void 0:s.damage} skillTotalDamage=${e}  totalDamage= ${t.myTotal}}`) : Debug.log_battle(`${t.getTime()} i=${t.totalIndex} buffId=${n}  totalNum=${i}  sourceSkillId=${o} dmgInfo=${null==s?void 0:s.damage} skillTotalDamage=${e}  totalDamage= ${t.myTotal}}`), t.totalIndex += 1
        }
      }
      static isNeedPiaoZi(t) {
        return 0 != t.damage || 0 != t.lingLi || 0 == t.damage && 4 == (4 & t.dmgSubType)
      }
      static applyDamage(e, i, s, o = 0, n = 0, r = !1) {
        var a, l, c, h, u;
        Debug.isShowLogTag(Debug.Tag_Battle) && this.printLog(e, i, s, o, n);
        const p = i;
        if (!i) return void t.recoverDamageInfo(s);
        const d = null == (a = p.entity) ? void 0 : a.getComponent(NumericComponent),
          g = null == (l = null == d ? void 0 : d.entity) ? void 0 : l.getComponent(BuffComponent),
          m = SceneHelper.isServerScene();
        if (!m && s.damage > 0 && 1 == s.dmgHealType && i == UnitHelper.getMyUnit() && !r) {
          const t = BuffComponentSystem.damageBuff105(g, s.damage);
          t && (s.damage = s.damage - t)
        }
        let I = this.isNeedPiaoZi(s);
        if (!m && d && s.damage < 0 && 2 == s.dmgHealType) {
          let t = BuffComponentSystem.buff101HPOverflowAttack(g, d, s.damage);
          s.damage = t
        }
        if (I) {
          const t = EntityHurtInfo2.createEntityHurtInfo();
          t.setData(null == e ? void 0 : e.entityId, null == (c = null == i ? void 0 : i.entity) ? void 0 : c.id, s, o, n), EventDispatcher.inst.dispatchEvent(MsgName.EntityHurt, t), EntityHurtInfo2.recoverEntityHurtInfo(t)
        }
        if (1 == i.IsDie) return void t.recoverDamageInfo(s);
        const y = s.damage;
        if (!m && d) {
          if (0 != s.damage) {
            let t = d.getRealDamage(y);
            const n = d.GetAsInt(NumericType.Hp),
              r = d.GetAsInt(NumericType.MaxHp);
            let a = MathUtil.clamp(n - t, 0, r);
            0 == n && (a = 0), d.set(NumericType.HpBase, a, !1, null == (h = null == e ? void 0 : e.entity) ? void 0 : h.id), t > 0 && 1 == s.dmgHealType && BuffComponentSystem.buff106HPChange(g, t), n > 0 && (i.BeHit = e), s.damage > 0 && e && BuffComponentSystem.buff114DamageHandle(g, t, o, e.entityId)
          }
          if (0 != s.lingLi) {
            const t = d.GetAsInt(NumericType.CHARSTATE_LINGLI),
              i = d.GetAsInt(NumericType.CHARSTATE_LINGLI_MAX);
            let o = MathUtil.clamp(t - s.lingLi, 0, i);
            d.set(NumericType.CHARSTATE_LINGLI, o, !1, null == (u = null == e ? void 0 : e.entity) ? void 0 : u.id)
          }
        }!m && d && (s.damage > 0 && 1 == s.dmgHealType || s.damage < 0 && 2 == s.dmgHealType) && BuffComponentSystem.buff6HPChange(g, d), EventDispatcher.inst.dispatchEvent(MsgName.EntityHurt_Change), t.recoverDamageInfo(s)
      }
      static recoverDamageInfo(t) {
        t.reset(), Laya.Pool.recover("DamageInfo", t)
      }
      static getSkillId(t) {
        return Math.floor(t / 1e4)
      }
      static getSkillSeptId(t) {
        return 1e4 * Math.floor(t / 1e4) + 1e3 * SkillCtrl.inst.initQuality + 1
      }
      static getSkillMainId(t, e, i) {
        return 1e4 * t + 1e3 * e + i
      }
      static getReplaceSkillStepSkill(t, e) {
        let i = e % 1e4;
        return i = Math.floor(i / 1e3), 1e4 * t + 1e3 * i + e % 1e3
      }
      static getReplaceSkillDataStepId(t, e) {
        let i = t % 1e4;
        i = Math.floor(i / 1e3);
        let s = t % 1e3;
        return 1e4 * Math.floor(e / 1e4) + 1e3 * i + s
      }
      static calcDamageNew(e, i, s, o, n, r, a = 0, l = !1) {
