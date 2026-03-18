// Fragment: formula_doShow_L144347.js
// Lines: 144347-144448 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.min
// Hit lines: 144348

      doShow() {
        this.showList = StageCtrl.inst.getBossDpsList(!1, this.showNum), !StageCtrl.inst.ReFight && StageCtrl.inst.bossFighting() && this.showList.unshift(new StageDpsItem(StageCtrl.inst.stageShowInfo.cfg.id, 0)), this.DamageList.numItems = Math.min(t.showMaxNum, this.showList.length), this.DamageList.resizeToFit(), this.onBeforeOpenAni()
      }
      onClickAll(e) {
        e == this.btn2 ? (this.showNum = 1 == this.showNum ? t.showMaxNum : 1, this.btn2.rotation = 1 == this.showNum ? 0 : 180, this.doShow()) : e == this.btn1 ? this._onItemClick(null, null) : e == this.btn3 && (this.c1.selectedIndex = 0 == this.c1.selectedIndex ? 1 : 0)
      }
      onUpdate(t) {}
      onHide() {}
      onDestroy() {
        t._self = null
      }
      _initItemList() {
        this.creatList(this.DamageList, this._onItemRender, null, this._onItemClick, !1)
      }
      _onItemRender(t, e) {
        let i = e,
          s = this.showList[t];
        i.txtBarrier.text = s.stageStr, i.txtDamage.text = s.getDps();
        let o = !1;
        StageCtrl.inst.bossFighting() && 0 == t && (o = !0, i.txtDamage1.text = StageDpsItem.getDps(this.nowDps)), i.txtBarrier.visible = !o, i.txtDamage.visible = !o, i.txtDamage1.visible = o
      }
      _onItemClick(t, e) {}
    };
  _MainDamageRankingView.showMaxNum = 3;
  var MainDamageRankingView = _MainDamageRankingView,
    {
      regClass: regClass27,
      property: property27
    } = Laya,
    LvCtrl = class extends BaseCtrl {
      constructor() {
        super(), this._lineZ = 0, this.doorEntityId = 0, this.testDoor = !1, this.reset(), this.initData()
      }
      reset() {
        super.reset()
      }
      updateMainView() {
        MainDamageRankingView.setNowDps()
      }
      static get inst() {
        return null == LvCtrl._instance && (LvCtrl._instance = new LvCtrl), LvCtrl._instance
      }
      initData() {
        this.nowS = 0
      }
      get liveY() {
        return 0 == this._lineZ ? null : this._lineZ
      }
      setState(t) {
        var e, i;
        if (this.prevS = this.nowS, 1 == t) {
          let t = StageCtrl.inst.stageInfo.cfgDoor;
          if (this.cfgDoor == t && 0 == ECSEntity.checkIsDisposed(this.doorEntityId)) return;
          this.door ? this.removeDoor(!1) : this.createDoor()
        } else if (2 == t);
        else if (3 == t) {
          let t = null == (i = null == (e = this.door) ? void 0 : e.getComponent(AnimatorComponent)) ? void 0 : i.doorMono;
          t && t.show(1)
        }
        this.nowS = t
      }
      createDoor() {
        let t = StageCtrl.inst.stageInfo.cfgDoor,
          e = new DoorInfo;
        this.cfgDoor = t, this._lineZ = .01 * -t.posz + 1, e.setData(t.resid, new Laya.Vector3(.01 * t.posx, 0, .01 * -t.posz)), this.door = UnitFactorySystem.createWallUnit(e, "", "door" + t.id), this.doorEntityId = this.door.id
      }
      test() {
        let t = new DoorInfo;
        t.setData(900001), this.door = UnitFactorySystem.createWallUnit(t, "", "door")
      }
      onExitMap() {
        this.removeDoor()
      }
      removeDoor(t = !0) {
        var e;
        if (t) ECSEntity.disposedByEntityId(this.doorEntityId), this.door = null, this.doorEntityId = 0, this.cfgDoor = null, this._lineZ = 0;
        else {
          if (!this.door || ECSEntity.checkIsDisposed(this.doorEntityId)) return void this.createDoor();
          let t = this.door,
            i = this.doorEntityId;
          this.createDoor();
          let s = null == (e = t.getComponent(AnimatorComponent)) ? void 0 : e.doorMono;
          if (!s) return void ECSEntity.disposedByEntityId(i);
          s.show(2), TimerMgr.inst.addTimerTask(1, 2e3, (() => {
            ECSEntity.disposedByEntityId(i), t = null
          }), this)
        }
      }
      createMonster() {}
    };
  LvCtrl._instance = null, LvCtrl = __decorateClass([regClass27("VGMsYwoiQ_qII2wyJk7EUw")], LvCtrl);
  var _Cfgyaoshen_model_show = class t extends ConfigBase {
    static get(e, i) {
      return ConfigManager.inst.GetConfig(t, e, i)
    }
  };
  _Cfgyaoshen_model_show.JsonName = "yaoshen_model_show.json";
  var Cfgyaoshen_model_show = _Cfgyaoshen_model_show,
    _Cfgyaoshen_route = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
