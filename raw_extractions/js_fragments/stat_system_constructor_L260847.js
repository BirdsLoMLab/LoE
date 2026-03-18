// Fragment: stat_system_constructor_L260847.js
// Lines: 260847-260965 of bundle-beautified.js
// Categories: Stat System
// Keywords: attack
// Hit lines: 260864, 260865

      constructor() {
        this.cd = 0, this.argX = 0, this.argY = 0
      }
    },
    ActionMap = new Map([
      [1, "stand"],
      [2, "move"],
      [3, "skill"],
      [4, "attack1"],
      [5, "die"],
      [6, "admission"],
      [7, "disappear"],
      [8, "play"],
      [10, "sleep"],
      [11, "dizzy"],
      [12, "fast"]
    ]),
    ATTACK_ACTIONS = ["attack", "skill", "a_skill", "relax"],
    CANPLay_ACTIONS = ["attack", "skill", "die", "relax"],
    AnimatorSystem = class extends ECSSystem {
      start() {}
      pause() {}
      static playE(t, e, i = !1, s = 1) {
        this.play(null == t ? void 0 : t.getComponent(AnimatorComponent), e, i, s)
      }
      static play(t, e, i = !1, s = 1) {
        var o, n;
        if (!t) return;
        const r = "string" != typeof e ? ActionMap.get(e) : e;
        if (t.Animator) {
          if (t.Animator.speed != s && 0 != s && (t.Animator.speed = s), i || AnimatorSystem.canPlay(t, r)) {
            if (!AnimatorSystem.hasClip(t, r)) {
              if (Debug.IsShowLog) {
                const e = null == (o = t.entity) ? void 0 : o.getComponent(SpellComponent);
                if (e) {
                  let i = e.BasicSkillIds.join(",");
                  Debug.IsShowLog && Debug.log_gxh(`ConfigId = ${t.entity.getComponent(UnitComponent2).ConfigId}找不到动作${r} CoreSkill=${e.CoreSkill} basicSkillIds=${i}`)
                }
              }
              return
            }(null == (n = t.Animator) ? void 0 : n.destroyed) || t.Animator.play(r, 0, 0)
          }
        } else ActionMap.forEach(((e, i) => {
          e === r && (t.MotionType = i)
        }))
      }
      static canPlay(t, e) {
        if (!t) return;
        const i = "string" != typeof e ? ActionMap.get(e) : e;
        if (CANPLay_ACTIONS.some((t => i.includes(t)))) return !0;
        const s = AnimatorSystem.getCurClipName(t);
        return !(null == s ? void 0 : s.startsWith("die")) && (!AnimatorSystem.getClipLooping(t, i) && (("relax" != s || "stand" != i) && !((null == t ? void 0 : t.entity) === UnitHelper.getMyEntity() && AnimatorSystem.isAttackAction(s) && !AnimatorSystem.isAttackAction(i))))
      }
      static isAttackAction(t) {
        if (!t) return !1;
        const e = "string" != typeof t ? ActionMap.get(t) : t;
        return ATTACK_ACTIONS.some((t => e.includes(t)))
      }
      static getDuration(t) {
        if (!t || !t.Animator) return 0;
        return 1e3 * (null == t ? void 0 : t.Animator.getControllerLayer().getCurrentPlayState().duration)
      }
      static getCurClipName(t) {
        if (!(null == t ? void 0 : t.Animator)) return null;
        const e = t.Animator.getControllerLayer();
        if (!e) return null;
        const i = e.getCurrentPlayState();
        return (null == i ? void 0 : i.currentState) ? i.currentState.name : null
      }
      static getClipLooping(t, e) {
        var i, s, o, n;
        if (!(null == t ? void 0 : t.Animator)) return !1;
        const r = t.Animator.getControllerLayer();
        if (!r) return !1;
        if (e !== (null == (s = null == (i = r.getCurrentPlayState()) ? void 0 : i.currentState) ? void 0 : s.name)) return !1;
        const a = r.getAnimatorState(e);
        return null != (n = null == (o = null == a ? void 0 : a.clip) ? void 0 : o.islooping) && n
      }
      static hasClip(t, e) {
        var i, s;
        const o = "string" != typeof e ? ActionMap.get(e) : e;
        return null != (null == (s = null == (i = null == t ? void 0 : t.Animator) ? void 0 : i.getControllerLayer()) ? void 0 : s.getAnimatorState(o))
      }
      static hasXianQiClip(t, e) {
        var i, s;
        const o = "string" != typeof e ? ActionMap.get(e) : e;
        return null != (null == (s = null == (i = null == t ? void 0 : t.xianQiAnimator) ? void 0 : i.getControllerLayer()) ? void 0 : s.getAnimatorState(o))
      }
      static doorPlay(t, e = 0) {
        var i;
        let s = null == (i = null == t ? void 0 : t.getComponent(AnimatorComponent)) ? void 0 : i.doorMono;
        s && s.show(e)
      }
      static xianQiPlay(t, e) {
        var i, s, o;
        if (e && (null == (i = null == t ? void 0 : t.unitInfo) ? void 0 : i.xianQiSkill)) {
          if (BattleHelper.getSkillId(e) == (null == (s = null == t ? void 0 : t.unitInfo) ? void 0 : s.xianQiSkill) && (null == t ? void 0 : t.unitInfo.xianQiAttackEffectId) > 0 && !UnitHelper.isBlockOtherSkillEffect(t.entity, null == t ? void 0 : t.unitInfo.xianQiAttackEffectId)) {
            const e = null == (o = null == t ? void 0 : t.unitInfo) ? void 0 : o.xianQiAttackAniName;
            let i = PlayEffect.Instance;
            i.unit = t, i.effectId = null == t ? void 0 : t.unitInfo.xianQiAttackEffectId, i.uniqueName = e, src_default.dispatch(ON_ADD_XIAN_QI_EFFECT, i)
          }
        }
      }
    };
  AnimatorSystem = __decorateClass([ecsclass("AnimatorSystem")], AnimatorSystem);
  var AnimatorComponent = class extends ECSComponent {
    constructor() {
      super(), this.MotionType = 1
    }
    get xianQiAnimator() {
      return this._xianQiAnimator
    }
    set xianQiAnimator(t) {
      this._xianQiAnimator = t
    }
    set Animator(t) {
      this.animator = t, 0 != this.MotionType && AnimatorSystem.play(this, this.MotionType)
    }
    setAnimator(t, e = 1) {
