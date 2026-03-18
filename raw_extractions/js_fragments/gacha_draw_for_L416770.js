// Fragment: gacha_draw_for_L416770.js
// Lines: 416770-416870 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: probability
// Hit lines: 416770

        if (c > l[0].probability) return o;
        c = 100 * Math.random();
        for (const t in l[0].dirAgrs)
          if (l[0].dirAgrs.hasOwnProperty(t)) {
            if (c <= l[0].dirAgrs[t]) {
              o = parseInt(t);
              break
            }
          } return o
      }
      static getYouZouPos(t, e) {
        var i;
        let s = null == (i = t.entity.getComponent(RenderNodeComponent)) ? void 0 : i.GameObject;
        if (null == s) return Laya.Vector3.ZERO;
        s.transform.getForward(forward), forward.z *= -.5;
        const o = new Laya.Vector3;
        Laya.Vector3.transformQuat(forward, directions[e], o);
        const n = new Laya.Vector3;
        return Laya.Vector3.add(s.transform.position, o, n), n
      }
    },
    AAIHandlerClass = class {
      Execute(t, e) {
        return __async(this, null, (function*() {}))
      }
    },
    eventClasses = new Map;

  function AIEventSubscriber(t) {
    return function(e) {
      if (eventClasses.get(t)) return;
      const i = new e;
      eventClasses.set(t, i)
    }
  }
  var AI_PlayerAttack = class extends AAIHandlerClass {
    constructor() {
      super(...arguments), this.recordYouzouTime = 0
    }
    getMonsterPriority(t) {
      if (!this._monsterPriority) {
        this._monsterPriority = new Map;
        let t = ConfigManager.inst.GetXmlConfig("globalset");
        if (!t.target_npc_sequence) return;
        t.target_npc_sequence.split(",").forEach(((t, e) => {
          this._monsterPriority.set(parseInt(t), e)
        }))
      }
      return this._monsterPriority.has(t) ? this._monsterPriority.get(t) : this._monsterPriority.keys.length
    }
    static isEventMonster(t) {
      if (!this._monsterEvent) {
        this._monsterEvent = new Set;
        let t = ConfigManager.inst.GetXmlConfig("globalset");
        if (!t.target_npc_event) return;
        t.target_npc_event.split(",").forEach(((t, e) => {
          this._monsterEvent.add(parseInt(t))
        }))
      }
      return this._monsterEvent.has(t)
    }
    Check(t) {
      return null != this.selectTarget(t) || MonsterCtrl.inst.needMoveToBoss() ? 0 : 1
    }
    Execute(t, e) {
      return __async(this, null, (function*() {
        var i, s, o, n, r, a, l;
        const c = t.entity;
        if (!c) return;
        const h = c.getComponent(UnitComponent2),
          u = c.getComponent(MovableComponent);
        t: for (;;) {
          if (h.IsDie || (null == (i = c.getComponent(NumericComponent)) ? void 0 : i.get(NumericType.Hp)) <= 0) return;
          if (MonsterCtrl.inst.needMoveToBoss() && (yield MovableSystem.moveToPosAsync(u, StageCtrl.inst.getBossBornPos(), null, e), MonsterCtrl.inst.gotoBoss = !1, null == e ? void 0 : e.isCancellationRequested)) return;
          const p = this.selectTarget(t);
          if (null == p || p.IsDie || ECSEntity.checkIsDisposed(p.entityId)) return void(null == (s = c.getComponent(AttackComponent)) || s.clearAim());
          if (null == (o = t.entity.getComponent(MovableComponent)) ? void 0 : o.Operating) {
            if (!h.canReachTarget(p)) {
              if (yield ECSTimeUtil.waitAsync(100, e), null == e ? void 0 : e.isCancellationRequested) return void(null == (r = c.getComponent(AttackComponent)) || r.clearAim());
              continue
            }
          } else {
            if (!UnitHelper.isMyUnit(h) && UnitHelper.getDistanceSquared(h, p) <= 25 && (yield ECSTimeUtil.waitAsync(2e3 * Math.random(), e), null == e ? void 0 : e.isCancellationRequested)) return;
            for (;;) {
              h.Position.y = 0;
              const t = yield MovableSystem.moveToTargetAsync2(u, p, e);
              if (e.isCancellationRequested) return void(null == (n = c.getComponent(AttackComponent)) || n.clearAim());
              if (!t) {
                if (yield ECSTimeUtil.waitAsync(100, e), null == e ? void 0 : e.isCancellationRequested) return;
                break
              }
              if (h.canReachTarget(p)) break
            }
          }
          const d = p.entityId,
            g = c.getComponent(AttackComponent);
          for (;;) {
            if (MonsterCtrl.inst.needMoveToBoss()) continue t;
            const i = c.getComponent(SpellComponent);
            if (null == i) return;
            if (ECSEntity.checkIsDisposed(d) || p.IsDie || !h.canReachExtraTarget(p.entity.getComponent(UnitComponent2))) {
