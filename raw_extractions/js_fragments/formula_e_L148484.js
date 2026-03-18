// Fragment: formula_e_L148484.js
// Lines: 148484-148586 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil
// Hit lines: 148486

              let e = 1,
                i = t;
              t > 0 && (i = n * t, e = Math.ceil(a / i));
              const o = Math.min(c, e);
              if (a -= i * o, this.addAutoUseRes(s, o), r[s.toString()] = o, a <= 0) break
            }
          }
          Object.keys(r).length > 0 && e.sendReqFairylandManures(i.charId, t.posId, r);
          break
        }
      }
      autoAllPick() {
        if (this._autoModel.isAuto)
          for (const [t, e] of this._farmModel.myFarmData.posDataMap) this.autoPick(e)
      }
      autoPick(t) {
        if (!this._autoModel.isAuto || !t || 6 != t.flowerState) return;
        if (TimerMgr.inst.serverTimeSec - t.autoPickStartTime <= 0) return;
        const e = this._autoModel.autoMap.get(3);
        for (const i of e.list)
          if (i.isSelect && t.cropId == i.cropId) {
            StealFarmCtrl.inst.startPick(t);
            break
          }
      }
      autoGet(t) {
        if (!this._autoModel.isAuto || !t || 7 != t.flowerState) return;
        const e = this._autoModel.autoMap.get(4);
        for (const i of e.list)
          if (i.isSelect) {
            StealFarmCtrl.inst.sendReqFairylandFarmDo(t.posId, 3, t.seedId);
            break
          }
      }
      onUpdate(t) {
        this._autoModel.isAuto && StealFarmCtrl.inst.isInitMyData() ? (this._timeDelay += t, this._timeDelay >= 1e3 && (this._timeDelay = 0, this.autoAllPick())) : this._timeDelay = 0
      }
      set isReadRed(t) {
        RedPointMgr.inst.getActive(311) && (this._isReadRed = t, this.refreshRed())
      }
      refreshRed() {
        !this._isReadRed && WelfareCtrl.inst.isCropCardActive() && OpenFuncModel.inst.isFuncOpen(this.getOpenFuncId()) ? RedPointMgr.inst.setActive(311, !this._autoModel.isAuto) : RedPointMgr.inst.setActive(311, !1)
      }
      addPosDataObserver() {
        for (const [t, e] of this._farmModel.myFarmData.posDataMap) e.addObserver(this)
      }
      onObservableValueChange(t, e, i, s) {
        if ("flowerState" != t) "isLock" != t || e || this.autoPlant(s);
        else switch (e) {
          case 0:
            this.autoPlant(s);
            break;
          case 3:
            this.autoSpeed(s);
            break;
          case 6:
            this.autoPick(s);
            break;
          case 7:
            this.autoGet(s)
        }
      }
    };
  StealFarmStewardCtrl._instance = null, StealFarmStewardCtrl = __decorateClass([regClass34("4w0qoCRITE-fEZXw46V2WQ")], StealFarmStewardCtrl);
  var {
    regClass: regClass35,
    property: property35
  } = Laya, StealFarmUpgradeCtrl = class extends BaseCtrl {
    constructor() {
      super(), this._adSeeCount = 0, this._isUpgrading = !1, this.init()
    }
    static get inst() {
      return null == StealFarmUpgradeCtrl._instance && (StealFarmUpgradeCtrl._instance = new StealFarmUpgradeCtrl), StealFarmUpgradeCtrl._instance
    }
    onInit() {
      this.addEvent(MsgName.Func_Open_Id_Change, (t => {
        t == import_proto36.default.openfunc.OpenFuncID.FAIRYLAND && this.checkTechRed()
      })), this.addEvent(MsgName.Func_Open_Init, (t => {
        this.checkTechRed()
      }))
    }
    resetData() {}
    registS2CHandler() {
      this.addS2CHandle("kobold.RetKoboldInfo", this.onRetKoboldInfoHanlde), this.addS2CHandle("kobold.RetKoboldLevelUp", this.onRetKoboldLevelUpHanlde), this.addS2CHandle("kobold.RetKoboldSpeed", this.onRetKoboldSpeedHanlde), this.addS2CHandle("kobold.RetKoboldUpdate", this.onRetKoboldUpdateHanlde), this.addS2CHandle("kobold.RetKoboldAd", this.onRetKoboldAdHanlde), this.addS2CHandle("kobold.RetKoboldHelp", this.onRetKoboldHelpHanlde)
    }
    sendReqKoboldInfo() {
      NetManager.inst.send("kobold.ReqKoboldInfo", {})
    }
    sendReqKoboldLevelUp(t) {
      let e = {};
      e.type = t, NetManager.inst.send("kobold.ReqKoboldLevelUp", e)
    }
    sendReqKoboldSpeed(t, e) {
      let i = {};
      i.type = t, i.num = e, NetManager.inst.send("kobold.ReqKoboldSpeed", i)
    }
    sendReqKoboldHelp(t) {
      let e = {};
      e.type = t, NetManager.inst.send("kobold.ReqKoboldHelp", e)
    }
    sendReqKoboldAd() {
      NetManager.inst.send("kobold.ReqKoboldAd", {})
    }
