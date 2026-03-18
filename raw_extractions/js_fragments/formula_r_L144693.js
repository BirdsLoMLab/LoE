// Fragment: formula_r_L144693.js
// Lines: 144693-144858 of bundle-beautified.js
// Categories: Formula, Stat System
// Keywords: Math.max, Math.min, speed
// Hit lines: 144695, 144721, 144739, 144758

            let r = e.Position.clone(),
              a = i.clone(),
              l = Math.max(1, s / 16.666666666666668),
              c = 1;
            const [h, u] = t.calculateControlPoints(r, a, o, o);
            let p = new Vector39;
            const d = () => {
              if (ToolUtil.needPass || c >= l) return Laya.timer.clear(null, d), void n(!0);
              let i = c / l;
              p.set(e.Position.x, e.Position.y, e.Position.z);
              let s = t.calculateCubicBezierPoint(i, r, h, u, a, MathUtil.vector3);
              e.Position = s, Quaternion4.forwardLookAt(p, s, Vector39.Up, MathUtil.quaternion), e.Rotation = MathUtil.quaternion, c++
            };
            Laya.timer.frameLoop(1, null, d)
          }))
        }))
      }
      static easeInOutSine(t) {
        return -(Math.cos(Math.PI * t) - 1) / 2
      }
      static defeatCubicBezierMoveNew(e, i, s, o = 2.5) {
        return __async(this, null, (function*() {
          return new Promise((n => {
            var r;
            let a = e.Position.clone();
            a.y = 0;
            let l = i.clone();
            l.y = 0;
            let c = Math.max(1, s / 16.666666666666668),
              h = 1;
            const [u, p] = t.calculateControlPointsY(a, l, o, o);
            let d = [];
            for (;;) {
              let e = h / c;
              e = t.easeInOutSine(e);
              let i = new Vector39,
                s = t.calculateCubicBezierPoint(e, a, u, p, l, i);
              if (h != c - 3 && h != c - 2 || SceneHelper.isServerScene() || (s.y = -.5), h++, d.push(s), h >= c) break
            }
            if (d.length <= 0) return void n(!1);
            let g = d.length - 1,
              m = null == (r = e.entity) ? void 0 : r.id,
              I = fgui.GTween.to(0, 1, s / 1e3);
            I.onUpdate((t => {
              let i = t.value.x,
                s = Math.floor(i * c);
              s = Math.min(s, g);
              let o = d[s];
              if (ECSEntity.checkIsDisposed(m)) return e.Position.y = 0, I.kill(!0), void n(!1);
              o.y <= -.5 && (o.y = -.5), e.Position = o
            })).onComplete((() => {
              e.Position.y = 0, n(!0)
            }))
          }))
        }))
      }
      static traceTargetAsync(t, e, i, s) {
        return __async(this, null, (function*() {
          return new Promise(((o, n) => {
            var r, a, l, c;
            const h = null == (r = t.entity.getComponent(SummonComponent)) ? void 0 : r.Index;
            if (null == h) return o(!1);
            let u = e.entity.getComponent(RenderNodeComponent).FollowNodes[h],
              p = u.position.clone();
            const d = new Vector39(p.x, p.y, p.z),
              g = (null == (l = null == (a = t.entity) ? void 0 : a.getComponent(NumericComponent)) ? void 0 : l.get(NumericType.Speed)) * SummonModSystem.chaseSpeedCoef;
            let m = new Vector39;
            const I = new Quaternion4,
              y = new Laya.Vector3;
            Laya.Vector3.subtract(p, t.Position, y), Laya.Vector3.normalize(y, y), AnimatorSystem.play(t.entity.getComponent(AnimatorComponent), 2);
            let _ = Laya.timer.currTimer,
              f = e == UnitHelper.getMyUnit() ? 150 : 400,
              C = null == (c = e.entity) ? void 0 : c.id;
            const U = () => {
              if (e.entity && !ECSEntity.checkIsDisposed(C) && Laya.timer.currTimer - _ > f && (p.set(u.position.x, u.position.y, u.position.z), _ = Laya.timer.currTimer), (null == s ? void 0 : s.isCancellationRequested) || ECSEntity.checkIsDisposed(C)) return Laya.timer.clear(null, U), o(!0);
              Vector39.equals(d, p) || (Quaternion4.forwardLookAt(t.Position, p, Vector39.Up, I), t.Rotation = I, d.set(p.x, p.y, p.z), Laya.Vector3.subtract(p, t.Position, y), Laya.Vector3.normalize(y, y));
              const n = Vector39.distance(t.Position, e.Position) / g,
                r = .001 * Laya.timer.delta;
              return Vector39.lerp(t.Position, p, r / n, m), t.Position = m, t.inFollowRange(e, i) ? (Laya.timer.clear(null, U), o(!0)) : void 0
            };
            Laya.timer.frameLoop(1, null, U)
          }))
        }))
      }
    },
    DropSystem = class extends ECSSystem {
      constructor() {
        super(), DropSystem._group = new Map
      }
      start() {}
      static dropGroup(t, e, i, s) {
        const o = new DropGroup;
        o.setData(t, e, i, s), DropSystem.waitDrop.push(o)
      }
      static serverDropGroup(t) {
        const e = new DropGroup;
        e.id = Laya.timer.currTimer, e.setServerData(t), DropSystem.waitDrop.push(e)
      }
      update(t) {
        for (let t = 0; t < DropSystem.dropMax; t++)
          if (DropSystem.waitDrop.length > 0) {
            const t = DropSystem.waitDrop.shift();
            t.drop(), DropSystem._group.set(t.id, t)
          } DropSystem._group.forEach((e => {
          e.onUpdate(t)
        }))
      }
      static dispose(t) {
        this._group.delete(t.id)
      }
    };
  DropSystem.waitDrop = [], DropSystem.dropMax = 1, DropSystem = __decorateClass([ecsclass("DropSystem")], DropSystem);
  var _DropGroup = class t {
    constructor() {
      this.dropTime = .2, this.stopTime = .1, this.flyTime = .3, this.dropY = .35, this.flyY = 1, this.flying = !1, this.curTime = 0, this.serverDrop = null, this.vMax = 12, this.disMin = .2, this.id = 0
    }
    setData(e, i, s, o) {
      this.callBack = s, this.fly_callBack = o, this.id = t.addid++, this.pos = i.clone(), this.pos.y = .5, this.cfg = CfgdropPerformData.get(e), this.posArr = CfgdropFormationData.get(this.cfg.group.length).formation
    }
    setServerData(t) {
      this.serverDrop = t;
      const e = ConfigManager.inst.GetXmlConfig("globalset").drop_residence_time;
      e && (this.stopTime = parseInt(e) / 1e3), this.flyY = 1.8
    }
    drop() {
      this._items = new Map, this.cfg ? this.cfg.group.forEach(((t, e) => {
        const i = new DropInfo;
        i.setData(t);
        const s = UnitFactorySystem.createDropUnit(i),
          o = this.posArr[e],
          n = new Laya.Vector3(.001 * o[0], this.dropY, .001 * o[1]);
        Laya.Vector3.add(this.pos, n, n);
        const r = s.getComponent(UnitComponent2);
        r.Position = this.pos, this._items.set(s.id, new DropItem(s, this, i)), this.doDrop(r, n)
      })) : this.addServerDrop()
    }
    addServerDrop() {
      if (null == this.serverDrop) return;
      const t = MathUtil.posS2C(this.serverDrop.npcPos);
      this.serverDrop.data.sort(((t, e) => {
        const i = CfgitemBase.get(Number(t.itemid)),
          s = CfgitemBase.get(Number(e.itemid));
        return null == i || null == s ? 1 : i.quality === s.quality ? i.id - s.id : s.quality - i.quality
      }));
      const e = this.serverDrop.data.slice(0, 10);
      for (let i of e) {
        const e = Number(i.itemid),
          s = CfgitemBase.get(e);
        if (!s) continue;
        if (0 == s.model) continue;
        const o = MathUtil.posS2C(i.pos);
        o.y = .5;
        const n = new DropInfo;
        n.Prefab = `resourcesLib/Character/${s.model}/${s.model}.lh`;
        const r = `resourcesLib/effect/Prefab/SceneFX/${s.effect}.lh`,
          a = UnitFactorySystem.createDropUnit(n, r),
          l = a.getComponent(UnitComponent2);
        l.Position = t, this._items.set(a.id, new DropItem(a, this, n)), this.doServerDrop(l, o, "")
      }
    }
    dispose() {
      DropSystem.dispose(this), this.callBack && (this.callBack(), this.callBack = null)
    }
    onUpdate(t) {
      if (this.curTime += t, this.curTime < 0);
      else if (this.flying) this._items.forEach((e => {
