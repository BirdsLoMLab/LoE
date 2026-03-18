// Fragment: stat_system_c_L154886.js
// Lines: 154886-155086 of bundle-beautified.js
// Categories: Stat System
// Keywords: speed
// Hit lines: 154887, 154896, 154908, 154919, 154952, 154980, 154998, 155006

          const c = Vector311.distance(r.Position, e.Position),
            h = null != (n = null == (o = null == (s = t.entity) ? void 0 : s.getComponent(NumericComponent)) ? void 0 : o.get(NumericType.Speed)) ? n : t.Speed;
          if (0 == h) return Promise.resolve(!1);
          const u = c / h * 1e3;
          let p = Math.max(1, Math.floor(u / 30)),
            d = 1;
          AnimatorSystem.play(t.entity.getComponent(AnimatorComponent), 2);
          const g = new Vector311;
          for (;;) {
            let s = d / p;
            if (Vector311.lerp(a, l, s, g), r.Position = g, d++, d >= p || !t.Enable || i.isCancellationRequested || r.canReachTarget(e) || 0 == t.Speed) break;
            yield ECSTimeUtil.waitAsync(30, i)
          }
          return Promise.resolve(!i.isCancellationRequested)
        }))
      }
      static moveToTargetAsync2(t, e, i, s = 0) {
        return __async(this, null, (function*() {
          var o, n, r, a;
          const l = null == (o = t.entity) ? void 0 : o.getComponent(UnitComponent2);
          if (null == l ? void 0 : l.canReachTarget(e)) return Promise.resolve(!0);
          if (0 == t.Enable || null == l) return Promise.resolve(!1);
          let c = null != (a = null == (r = null == (n = t.entity) ? void 0 : n.getComponent(NumericComponent)) ? void 0 : r.get(NumericType.Speed)) ? a : t.Speed;
          return 37 == CoreMapCtrl.inst.mapType && (c = 30), 0 == c ? Promise.resolve(!1) : (AnimatorSystem.play(t.entity.getComponent(AnimatorComponent), 2), l.CharacterController ? yield this.moveToTargetPathAsync(t, e, i, c): s > 0 ? yield this.moveToTargetNormalAsyncRandomOffPos(t, e, i, c, s): yield this.moveToTargetNormalAsync(t, e, i, c))
        }))
      }
      static moveToTargetNormalAsync(t, e, i, s) {
        return new Promise(((o, n) => {
          var r;
          const a = new Vector311,
            l = t.entity.getComponent(UnitComponent2);
          let c = null == (r = null == e ? void 0 : e.entity) ? void 0 : r.id;
          const h = () => {
            if (t.Operating || !t.Enable || 0 == t.Speed) return Laya.timer.clear(null, h), void o(!1);
            if (i.isCancellationRequested) return Laya.timer.clear(null, h), void o(!1);
            const n = Vector311.distance(l.Position, e.Position),
              r = n / s;
            if (Number.isNaN(n) || Number.isNaN(r) || 0 == r) return Laya.timer.clear(null, h), void o(!1);
            if (!e || e.IsDie || ECSEntity.checkIsDisposed(c)) return Laya.timer.clear(null, h), void o(!1);
            if (l.canReachTarget(e)) return Laya.timer.clear(null, h), void o(!0);
            const u = .001 * Laya.timer.delta;
            Vector311.lerp(l.Position, e.Position, u / r, a), l.Position = a, Vector311.subtract(e.Position, l.Position, a), a.normalize();
            let p = MathUtil.directionToAngle(a) * (Math.PI / 180);
            Quaternion6.createFromAxisAngle(Vector311.Up, p, MathUtil.quaternion), l.Rotation = MathUtil.quaternion
          };
          Laya.timer.frameLoop(1, null, h)
        }))
      }
      static moveToTargetNormalAsyncRandomOffPos(t, e, i, s, o) {
        return new Promise(((n, r) => {
          var a;
          const l = new Vector311,
            c = t.entity.getComponent(UnitComponent2);
          let h = e.Position;
          h.y = 0;
          const u = Vector311.distance(c.Position, h);
          let p = 1 == o ? 2.2 : 1.5,
            d = 2 * Math.random() * Math.PI,
            g = new Vector311(p * Math.cos(d), 0, p * Math.sin(d)),
            m = new Vector311;
          Vector311.add(h, g, m), m.y = 0;
          let I = 0,
            y = 1;
          y = 1 == o ? u > 6 ? 2 : 1.2 : 1.8;
          let _ = null == (a = null == e ? void 0 : e.entity) ? void 0 : a.id;
          const f = () => {
            if (t.Operating || !t.Enable || 0 == t.Speed) return Laya.timer.clear(null, f), void n(!1);
            if (i.isCancellationRequested) return Laya.timer.clear(null, f), void n(!1);
            if (I += .001 * Laya.timer.delta, I > y) return Laya.timer.clear(null, f), void n(!1);
            const r = Vector311.distance(c.Position, m),
              a = r / s;
            if (Number.isNaN(r) || Number.isNaN(a) || 0 == a) return Laya.timer.clear(null, f), void n(!1);
            if (!e || e.IsDie || ECSEntity.checkIsDisposed(_)) return Laya.timer.clear(null, f), void n(!1);
            let u = r < .1;
            if (2 == o && (u = c.canReachTarget(e) || r < .1), u) {
              Vector311.subtract(h, c.Position, l), l.normalize();
              let t = MathUtil.directionToAngle(l) * (Math.PI / 180);
              return Quaternion6.createFromAxisAngle(Vector311.Up, t, MathUtil.quaternion), c.Rotation = MathUtil.quaternion, Laya.timer.clear(null, f), void n(!0)
            }
            const p = .001 * Laya.timer.delta;
            Vector311.lerp(c.Position, m, p / a, l), c.Position = l, Vector311.subtract(m, c.Position, l), l.normalize();
            let d = MathUtil.directionToAngle(l) * (Math.PI / 180);
            Quaternion6.createFromAxisAngle(Vector311.Up, d, MathUtil.quaternion), c.Rotation = MathUtil.quaternion
          };
          Laya.timer.frameLoop(1, null, f)
        }))
      }
      static moveToTargetPathAsync(t, e, i, s) {
        return __async(this, null, (function*() {
          var o;
          const n = t.entity.getComponent(UnitComponent2),
            r = new Laya.Vector3;
          let a, l = null == (o = null == e ? void 0 : e.entity) ? void 0 : o.id;
          for (;;) {
            if (t.Operating || !t.Enable || 0 == t.Speed) return Promise.resolve(!1);
            if (i.isCancellationRequested) return Promise.resolve(!1);
            if (!e || e.IsDie || ECSEntity.checkIsDisposed(l)) return Promise.resolve(!1);
            if (n.canReachTarget(e)) return Promise.resolve(!0);
            a && e.Position.equal(r) || (a = this.FindPath(t, e.Position), e.Position.cloneTo(r)), a.length > 0 ? yield this.moveToPosAsync(t, a.shift(), s, i, !0, e): yield this.moveToPosAsync(t, e.Position, s, i, !0, e)
          }
        }))
      }
      static moveToPosAsync(t, e, i, s, o = !0, n = null, r = !1) {
        return __async(this, null, (function*() {
          return new Promise((a => {
            var l, c, h, u, p;
            if (!t.entity) return void a(!0);
            const d = null == (l = t.entity) ? void 0 : l.getComponent(UnitComponent2);
            if (!(null == d ? void 0 : d.Position)) return void a(!0);
            const g = null == (c = null == d ? void 0 : d.Position) ? void 0 : c.clone(),
              m = e.clone(),
              I = Vector311.distance(null == d ? void 0 : d.Position, e);
            0 == (i = null != (p = null != i ? i : null == (u = null == (h = t.entity) ? void 0 : h.getComponent(NumericComponent)) ? void 0 : u.get(NumericType.Speed)) ? p : t.Speed) && (i = 1);
            const y = I / i * 1e3;
            if (0 == y || 0 == I || !d || MathUtil.isVector3NaN(g) || MathUtil.isVector3NaN(m)) return void a(!0);
            4 == d.Type || r || AnimatorSystem.play(t.entity.getComponent(AnimatorComponent), 2);
            const _ = new Vector311;
            1 == o && (Vector311.equals(m, g) || (Quaternion6.forwardLookAt(g, m, Vector311.Up, MathUtil.quaternion), d.Rotation = MathUtil.quaternion));
            const f = Laya.timer.currTimer,
              C = () => {
                if (ToolUtil.needPass || n && d.canReachTarget(n) || (null == s ? void 0 : s.isCancellationRequested) || !t.Enable || 0 == t.Speed || t.Operating) return C && Laya.timer.clear(null, C), void a(!(null == s ? void 0 : s.isCancellationRequested));
                const e = Math.min(1, (Laya.timer.currTimer - f) / y);
                return Vector311.lerp(g, m, e, _), d.Position = _, Laya.timer.currTimer - f > y ? (C && Laya.timer.clear(null, C), void a(!(null == s ? void 0 : s.isCancellationRequested))) : void 0
              };
            Laya.timer.frameLoop(1, null, C)
          }))
        }))
      }
      static gouMoveToPosAsync(t, e, i, s, o, n, r, a, l = 0) {
        return __async(this, null, (function*() {
          return new Promise((c => {
            var h, u;
            const p = null == (h = null == e ? void 0 : e.Position) ? void 0 : h.clone(),
              d = s.clone(),
              g = BattleHelper.getMoveTime(null == e ? void 0 : e.Position, s, o);
            if (!g || !e || MathUtil.isVector3NaN(p) || MathUtil.isVector3NaN(d)) return void c(0);
            const m = new Vector311,
              I = new Vector311(0, GouZiOffsetY, 0),
              y = Laya.timer.currTimer,
              _ = null == (u = i.entity) ? void 0 : u.getComponent(RenderNodeComponent),
              f = t.entity.getComponent(RenderNodeComponent);
            let C = 0;
            const U = new Laya.Vector3;
            Laya.Vector3.subtract(s, p, U), Laya.Vector3.normalize(U, U);
            const b = null == t ? void 0 : t.entityId,
              w = null == e ? void 0 : e.entityId;
            let S = !1;
            const k = () => {
              if (ToolUtil.needPass || !i.Enable || ECSEntity.checkIsDisposed(b) || ECSEntity.checkIsDisposed(w)) return k && Laya.timer.clear(null, k), void c(0);
              const t = Math.min(1, (Laya.timer.currTimer - y) / g),
                o = f.getGouDirectPos();
              r ? Vector311.lerp(p, o, t, m) : Vector311.lerp(p, d, t, m), I.x = m.x, I.z = m.z, e.Position = I, r ? _.setGouRoation(m, o) : _.setGouRoation(s, o);
              const h = Vector311.distance(o, e.Position);
              if (_.setLianDis(h, o), n) {
                if (!r && l && !S) {
                  let t = BattleHelper.checkAimTarget(e, p, U, a, !0);
                  t && (S = !0, GouZiDaZhanCtrl.inst.ReqFinishHook(t, l))
                }
                if (C = BattleHelper.checkAimTarget(e, p, U, a, !1), C) return c(C), void(k && Laya.timer.clear(null, k))
              }
              return Laya.timer.currTimer - y > g || h < .01 ? (k && Laya.timer.clear(null, k), void c(C)) : void 0
            };
            Laya.timer.loop(25, null, k)
          }))
        }))
      }
      static gouAimTargetAsync(t, e, i, s, o) {
        return __async(this, null, (function*() {
          return new Promise((n => {
            var r, a, l, c;
            const h = null == (r = e.entity) ? void 0 : r.getComponent(UnitComponent2);
            if (!(null == h ? void 0 : h.Position)) return void n(0);
            const u = null == (a = null == h ? void 0 : h.Position) ? void 0 : a.clone();
            let p = BattleHelper.getMoveTime(u, i, s);
            if (p > 1e4 && (p = 1e4), !p || !h || MathUtil.isVector3NaN(u)) return void n(0);
            const d = Laya.timer.currTimer,
              g = null == (l = e.entity) ? void 0 : l.getComponent(RenderNodeComponent),
              m = null == (c = null == t ? void 0 : t.entity) ? void 0 : c.getComponent(RenderNodeComponent),
              I = t.entityId,
              y = e.entityId,
              _ = new Vector311(0, GouZiOffsetY, 0),
              f = SceneManager.inst.ECS.entities.get(o),
              C = null == f ? void 0 : f.getComponent(UnitComponent2);
            1 == (null == C ? void 0 : C.Type) && (C.Position = new Vector311(u.x, C.Position.y, u.z));
            const U = null == f ? void 0 : f.id,
              b = () => {
                if (ToolUtil.needPass || !C || !e.Enable || ECSEntity.checkIsDisposed(I) || ECSEntity.checkIsDisposed(U) || ECSEntity.checkIsDisposed(y)) return b && Laya.timer.clear(null, b), void n(0);
                const t = m.getGouDirectPos(),
                  i = C.Position;
                let s = 0;
                return i && (_.x = i.x, _.z = i.z, h.Position = _, g.setGouRoation(_, t), s = Vector311.distance(t, _), g.setLianDis(s, t)), Laya.timer.currTimer - d > p || s < .01 ? (b && Laya.timer.clear(null, b), void n(o)) : void 0
              };
            Laya.timer.frameLoop(1, null, b)
          }))
        }))
      }
      static rushToPosAsync(t, e, i, s) {
        return __async(this, null, (function*() {
          return new Promise((o => {
            const n = t.entity.getComponent(UnitComponent2),
              r = new Quaternion6;
