// Fragment: stat_system_r_L155412.js
// Lines: 155412-155512 of bundle-beautified.js
// Categories: Stat System
// Keywords: speed
// Hit lines: 155412

        let r = this._dragDelta.x * o.Speed * ToolUtil.delTime * .001,
          a = this._dragDelta.y * o.Speed * ToolUtil.delTime * .001,
          l = !1;
        if (l || (l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (this._dragDelta.x >= 0 && this._dragDelta.y >= 0 ? (r = o.Speed * ToolUtil.delTime * .001, a = 0, l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (r = 0, a = o.Speed * ToolUtil.delTime * .001, l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (r = 0, a = 0))) : this._dragDelta.x >= 0 && this._dragDelta.y <= 0 ? (r = o.Speed * ToolUtil.delTime * .001, a = 0, l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (r = 0, a = -o.Speed * ToolUtil.delTime * .001, l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (r = 0, a = 0))) : this._dragDelta.x <= 0 && this._dragDelta.y >= 0 ? (r = -o.Speed * ToolUtil.delTime * .001, a = 0, l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (r = 0, a = o.Speed * ToolUtil.delTime * .001, l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (r = 0, a = 0))) : this._dragDelta.x <= 0 && this._dragDelta.y <= 0 && (r = -o.Speed * ToolUtil.delTime * .001, a = 0, l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (r = 0, a = -o.Speed * ToolUtil.delTime * .001, l = OperationSystem.mapData.isInBlock(n.x + r, n.z + a), l && (r = 0, a = 0))))), MathUtil.vector3.x = n.x + r, MathUtil.vector3.y = 0, MathUtil.vector3.z = n.z + a, Laya.Vector3.lerp(n, MathUtil.vector3, .05 * Laya.timer.delta, this._position), CoreMapCtrl.inst.clampMapSize(this._position), CoreMapCtrl.inst.isSeverBattle()) {
          this._delte += t;
          const e = 38 == CoreMapCtrl.inst.mapType;
          (this._delte > 200 || e) && (this._delte -= 200, e && (this._delte = 0), l = OperationSystem.mapData.isInBlock(this._position.x + this._dragDelta.x, this._position.z + this._dragDelta.y), l ? TeamCtrl.inst.TeamCopyMove(this._position.x, this._position.z) : TeamCtrl.inst.TeamCopyMove(this._position.x + this._dragDelta.x, this._position.z + this._dragDelta.y))
        }
        if (0 == r && 0 == a) return;
        const c = this.mainCharacter.getComponent(UnitComponent2);
        c.Position = this._position, AnimatorSystem.play(this.mainCharAnimatorComp, 2), HudSystem.updateAllHud(), HurtSystem.updateAllHurt();
        const h = null == (s = this.mainCharacter.getComponent(AttackComponent)) ? void 0 : s.Aim;
        if (null != h && c.canReachExtraTarget(h)) return void(c.canReachTarget(h) && (Laya.Quaternion.forwardLookAt(this._position, h.Position, Vector312.Up, this._rotation), Laya.timer.clearAll(c), c.setRotationDirect(this._rotation)));
        let u = this.directionToYRotation(this._dragDelta.x, this._dragDelta.y);
        u && (Laya.Quaternion.createFromYawPitchRoll(u * (Math.PI / 180), 0, 0, this._rotation), Laya.timer.clearAll(c), c.setRotationDirect(this._rotation))
      }
      directionToYRotation(t, e) {
        let i = Math.sqrt(t * t + e * e),
          s = t / i,
          o = e / i,
          n = Math.acos(o) * (180 / Math.PI);
        return s < 0 && (n = 360 - n), n
      }
    };
  OperationSystem._buffStop = !1, OperationSystem = __decorateClass([ecsclass("OperationSystem")], OperationSystem);
  var _UIXianCiView = class t extends BaseView {
    constructor() {
      super(), this.uid = t.UID, this.pkgName = "XianCiGift", this.name = "XianCiView"
    }
    onInit() {
      this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
    }
  };
  _UIXianCiView.UID = "ui://5g0k98z6nzgs1n", __decorateClass([UIProperty], _UIXianCiView.prototype, "tabContainer", 2), __decorateClass([UIProperty], _UIXianCiView.prototype, "list", 2), __decorateClass([UIProperty], _UIXianCiView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIXianCiView.prototype, "fixHeight", 2);
  var UIXianCiView = _UIXianCiView,
    _UIXianCiGiftView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "XianCiGift", this.name = "XianCiGiftView"
      }
      onInit() {
        this.openSubCom(this.btn_buy), this.btn_buy.onClick(this, this.onClickAll, [this.btn_buy]), this.btn_get.onClick(this, this.onClickAll, [this.btn_get]), this.btnReward.onClick(this, this.onClickAll, [this.btnReward]), this.btnTask.onClick(this, this.onClickAll, [this.btnTask]), this.openSubCom(this.awardRP), this.openSubCom(this.taskRP), this.addCloseAni(this.closeAni), this.addOpenAni(this.openAni)
      }
    };
  _UIXianCiGiftView.UID = "ui://5g0k98z6o19p0", __decorateClass([UIController], _UIXianCiGiftView.prototype, "c1", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "imgBanner", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "imgBanner02", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "btn_buy", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "btn_get", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "txtRatio", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "txt_time", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "btnReward", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "btnTask", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "list_reward", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "list_Task", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "txt_time_reset", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "awardRP", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "taskRP", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "imgDayLimit", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "txt_day_limit", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "imgWeekLimit", 2), __decorateClass([UIProperty], _UIXianCiGiftView.prototype, "txt_week_limit", 2), __decorateClass([UITransition], _UIXianCiGiftView.prototype, "closeAni", 2), __decorateClass([UITransition], _UIXianCiGiftView.prototype, "openAni", 2);
  var UIXianCiGiftView = _UIXianCiGiftView,
    import_proto49 = __toESM(require_proto()),
    _Cfgxianci_overview = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgxianci_overview.JsonName = "xianci_overview.json";
  var Cfgxianci_overview = _Cfgxianci_overview,
    _Cfgxianci_point_pass = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgxianci_point_pass.JsonName = "xianci_point_pass.json";
  var Cfgxianci_point_pass = _Cfgxianci_point_pass,
    _Cfgxianci_point_task = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgxianci_point_task.JsonName = "xianci_point_task.json";
  var Cfgxianci_point_task = _Cfgxianci_point_task,
    _Cfgxianci_sign_pass = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgxianci_sign_pass.JsonName = "xianci_sign_pass.json";
  var Cfgxianci_sign_pass = _Cfgxianci_sign_pass,
    _XianCiGiftModel = class t extends BaseModel {
      constructor() {
        super()
      }
      static get inst() {
        return null == t._instance && (t._instance = new t), t._instance
      }
      init() {
        super.init()
      }
      updateTaskRedPoint() {
        var t;
        if (null == this.limitActivityData || null == this.curCfg) return;
        let e = !1,
          i = Cfgxianci_point_task.get({
            type_id: this.curCfg.task
          });
        for (let s = 0; s < i.length; s++) {
          let o = i[s],
            n = TaskCtrl.inst.getTaskDataById(o.id);
          if (n && TaskCtrl.inst.isGetRewardState(parseInt(null == (t = null == n ? void 0 : n.vars) ? void 0 : t.state))) {
            e = !0;
            break
          }
        }
        RedPointMgr.inst.setActive(598, e)
      }
