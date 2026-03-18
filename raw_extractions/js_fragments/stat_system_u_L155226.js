// Fragment: stat_system_u_L155226.js
// Lines: 155226-155329 of bundle-beautified.js
// Categories: Stat System
// Keywords: speed
// Hit lines: 155229

        const u = h.Position.clone(),
          p = e.clone(),
          d = Vector311.distance(u, p);
        0 === (i = null != (a = null != i ? i : null == (r = null == (n = t.entity) ? void 0 : n.getComponent(NumericComponent)) ? void 0 : r.get(NumericType.Speed)) ? a : t.Speed) && (i = 1);
        const g = d / i * 1e3,
          m = t.entity.getComponent(AnimatorComponent);
        0 === h.moveTimes && m && AnimatorSystem.play(m, 2), h.moveTimes++;
        let I = 0,
          y = null,
          _ = null;
        if (o && u && p && !Vector311.equals(p, u)) {
          Quaternion6.forwardLookAt(u, p, Vector311.Up, MathUtil.quaternion), h.setRotationDirect(MathUtil.quaternion), I = MathUtil.quaternion.y;
          const e = t.entity.getComponent(RenderNodeComponent);
          y = null == (l = null == e ? void 0 : e.GameObject) ? void 0 : l.transform
        }
        const f = Laya.timer.currTimer;
        let C = 0;
        const U = null == t ? void 0 : t.entityId,
          b = SceneHelper.isServerScene();
        b && o && 1 == h.Type && (_ = null == (c = t.entity) ? void 0 : c.getComponent(ServerSpellComponent2));
        let w = Laya.timer.currTimer,
          S = () => {
            var e;
            const i = ECSEntity.checkIsDisposed(U);
            if ((null == s ? void 0 : s.isCancellationRequested) || !t.Enable || C >= 1 || i) return S && Laya.timer.clear(null, S), C >= 1 && (h.Position = p), h.moveTimes--, void(h.moveTimes <= 0 && !i && m && (h.moveTimes = 0, AnimatorSystem.play(m, 1)));
            if (C = Math.min(1, (Laya.timer.currTimer - f) / g), Vector311.lerp(u, p, C, MathUtil.vector3), h.Position = MathUtil.vector3, o && b && y && I && _) {
              const t = (null == (e = y.rotation) ? void 0 : e.y) - I,
                i = Laya.timer.currTimer - w;
              !ServerSpellSystem.isInAcitonCD(_) && Math.abs(t) > 2 && i > 1e3 && (w = Laya.timer.currTimer, Quaternion6.forwardLookAt(u, p, Vector311.Up, MathUtil.quaternion), h.setRotationDirect(MathUtil.quaternion))
            }
          };
        Laya.timer.frameLoop(1, null, S)
      }
      static RefreshPos(t, e) {
        return __async(this, null, (function*() {
          t.MoveCancelToken && (t.MoveCancelToken.cancel(), t.MoveCancelToken = null), t.Enable = !1, t.entity.getComponent(UnitComponent2).Position = e, t.Enable = !0, AnimatorSystem.play(t.entity.getComponent(AnimatorComponent), 1, !0)
        }))
      }
      static stop(t, e = !0) {
        var i;
        e && AnimatorSystem.play(t.entity.getComponent(AnimatorComponent), 1), null == (i = t.MoveCancelToken) || i.cancel(), t.MoveCancelToken = null
      }
      static moveToPathPosAsync(t, e, i, s, o = !0, n = !1) {
        return __async(this, null, (function*() {
          var r, a;
          if (!(null == (a = null == (r = t.entity) ? void 0 : r.getComponent(UnitComponent2)) ? void 0 : a.CharacterController)) return yield this.moveToPosAsync(t, e, i, s, o, null, n);
          const l = this.FindPath(t, e);
          if (0 === l.length) return yield this.moveToPosAsync(t, e, i, s, o, null, n);
          for (let e = 0; e < l.length; ++e)
            if (yield this.moveToPosAsync(t, l[e], i, s, o, null, n), s.isCancellationRequested) return Promise.reject(!1);
          return yield this.moveToPosAsync(t, e, i, s, o, null, n)
        }))
      }
      static FindPath(t, e) {
        let i = [];
        const s = t.entity.getComponent(UnitComponent2),
          o = Laya.Vector3.distance(s.Position, e) / this.PathStep;
        for (let t = 0; t <= o; ++t) {
          Laya.Vector3.lerp(s.Position, e, t / o, this._tempStepVect);
          const n = new Laya.Vector3;
          this._tempStepVect.cloneTo(n), i.push(n)
        }
        return i = i.filter((t => MapBlockCtrl.inst.isInBlock(t.x, t.z))).map((t => {
          const i = MapBlockCtrl.inst.getBlockCenter(t.x, t.z),
            o = Math.abs(i.x - s.Position.x),
            n = Math.abs(e.z - s.Position.z),
            r = t.x <= e.x ? 1 : -1,
            a = t.z <= e.z ? 1 : -1;
          t.clone();
          for (let e = 0; e < 100; ++e)
            if (t.x += r * this.PathStep * (o <= n ? 1 : 0), t.z += a * this.PathStep * (o > n ? 1 : 0), !MapBlockCtrl.inst.isInBlock(t.x, t.z)) return t;
          return console.error("未找到适合的点"), t
        })), i
      }
    };
  MovableSystem.PathStep = 1.5, MovableSystem._tempStepVect = new Laya.Vector3, MovableSystem = __decorateClass([ecsclass("MovableSystem")], MovableSystem);
  var Vector312 = Laya.Vector3,
    OperationSystem = class extends ECSSystem {
      constructor(t) {
        super(), this.inputNode = t, this._dragDelta = Laya.Point.create(), this._position = new Vector312(0, 0, 0), this._rotation = new Laya.Quaternion, this._delte = 200, this.recordTime = 0, this._dragDelta = Laya.Point.create()
      }
      get mainCharacter() {
        return null == this._mainCharacter && (this._mainCharacter = UnitHelper.getMyEntity()), this._mainCharacter
      }
      set mainCharacter(t) {
        this._mainCharacter = t
      }
      ResetMainCharacter() {
        this._mainCharacter = null, this._mainCharMoveComp = null, this._mainCharAnimatorComp = null, OperationSystem._buffStop = !1
      }
      get mainCharMoveComp() {
        var t;
        return null == this._mainCharMoveComp && (this._mainCharMoveComp = null == (t = UnitHelper.getMyEntity()) ? void 0 : t.getComponent(MovableComponent)), this._mainCharMoveComp
      }
      get mainCharAnimatorComp() {
        var t;
        return null == this._mainCharAnimatorComp && (this._mainCharAnimatorComp = null == (t = UnitHelper.getMyEntity()) ? void 0 : t.getComponent(AnimatorComponent)), this._mainCharAnimatorComp
      }
      start() {
        EventDispatcher.inst.addEventListener(MsgName.Msg_JoyStick_Drag, this, this.onJoyStickDrag), EventDispatcher.inst.addEventListener(MsgName.Msg_JoyStick_Start, this, this.onJoyStickStart), EventDispatcher.inst.addEventListener(MsgName.Msg_JoyStick_End, this, this.onJoyStickEnd), EventDispatcher.inst.addEventListener(MsgName.Msg_ClickMove_Move, this, this.onDrag), EventDispatcher.inst.addEventListener(MsgName.Msg_ClickMove_Stop, this, this.onEnd), src_default.on("onAddBuff", this.onAddBuff), src_default.on("onRemoveBuff", this.onRemoveBuff)
      }
      onAddBuff(t) {
        4002 == t.buffConfigId && UnitHelper.isMyEntity(t.entity) && (OperationSystem._buffStop = !0, EventDispatcher.inst.dispatchEvent(MsgName.Send_Frost_Msg))
      }
