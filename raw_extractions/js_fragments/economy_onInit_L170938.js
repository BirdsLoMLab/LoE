// Fragment: economy_onInit_L170938.js
// Lines: 170938-171133 of bundle-beautified.js
// Categories: Economy
// Keywords: gold
// Hit lines: 170939, 170942, 170967, 170969, 171033

      onInit() {
        this.openSubCom(this.costInfo), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.Gold), this.addOpenAni(this.openAni), this.addCloseAni(this.closeAni)
      }
    };
  _UICallHeroShowView.UID = "ui://mgzwj9cuirv40", __decorateClass([UIProperty], _UICallHeroShowView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UICallHeroShowView.prototype, "cardList1", 2), __decorateClass([UIProperty], _UICallHeroShowView.prototype, "cardList2", 2), __decorateClass([UIProperty], _UICallHeroShowView.prototype, "cardList3", 2), __decorateClass([UIProperty], _UICallHeroShowView.prototype, "costInfo", 2), __decorateClass([UIProperty], _UICallHeroShowView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UICallHeroShowView.prototype, "Gold", 2), __decorateClass([UIProperty], _UICallHeroShowView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UICallHeroShowView.prototype, "openAni", 2), __decorateClass([UITransition], _UICallHeroShowView.prototype, "closeAni", 2);
  var UICallHeroShowView = _UICallHeroShowView,
    _CallHeroShowView = class t extends UICallHeroShowView {
      constructor() {
        super(), this.totalCardItemList = new Map, this.cardDataTotalArr = [], this.cardDataArr1 = [], this.cardDataArr2 = [], this.curTurnCardIdx = 0, this._callCtrl = CallHeroCtrl.inst, this._isVibrate = !1, this.layer = "WindowFull", this.hide3DCamera = !0
      }
      onInit() {
        super.onInit(), this._costData = this._callCtrl.getCallCostInfo()
      }
      onEvent() {
        this.addEvent(MsgName.Call_Hero_Turn_Card_Finish, this.onTurnCardFinish)
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
      onHide() {
        this._isVibrate = !1
      }
      onUpdateSec() {
        this.costInfo.onUpdateSec()
      }
      onShow() {
        this._isVibrate = !1, 0 != this.args.length && (this.lotterRewardArr = this.args[0], !this.lotterRewardArr || this.lotterRewardArr.length <= 0 || (this.setTexture(this.imgBg, "zj_img_zz", "CallHero"), this.refreshCardList(), this.refreshCost(), this.refreshGold(), this.curTurnCardIdx = 0, this.onStartTurnCard(this.curTurnCardIdx)))
      }
      refreshGold() {
        this.Gold.goldType = 2, this.Gold.exchangeId = 2, this.Gold.hideAllRes();
        const t = this._costData[0];
        this.Gold.setRes(1, 2), this.Gold.setRes(2, parseInt(t.cost_id))
      }
      refreshCost() {
        this.costInfo.setData(this._costData, !1)
      }
      refreshCardList() {
        this.initCardDataList(), this.cardList1.visible = !1, this.cardList2.visible = !1, this.cardList3.visible = !1, 1 == this.cardDataArr1.length ? this.updateCardList(this.cardList3, this.cardDataArr1) : (this.updateCardList(this.cardList1, this.cardDataArr1), this.updateCardList(this.cardList2, this.cardDataArr2))
      }
      initCardDataList() {
        this.cardDataTotalArr = [], this.cardDataArr1 = [], this.cardDataArr2 = [], this.totalCardItemList = new Map;
        for (let e = 0; e < this.lotterRewardArr.length; e++) {
          let i = this.lotterRewardArr[e];
          const s = i.sData;
          let o = CfgitemBase.get(s.itemid),
            n = 1,
            r = i.isHaveHero;
          if (r && o.decompose.length > 0) {
            s.itemid = o.decompose[0][0];
            let t = HeroModel.inst.getHeroDefaultStar(i.heroId);
            s.itemnum = t * o.decompose[0][1]
          }
          n = 5 == o.type ? r ? 2 : 1 : 3;
          let a = {
            idx: e,
            itemid: s.itemid,
            itemnum: s.itemnum,
            isShowNewHero: 5 == o.type && !r,
            type: n
          };
          1 == e || 3 == e || 6 == e || 8 == e ? this.cardDataArr2.push(a) : this.cardDataArr1.push(a), this.cardDataTotalArr.push(a), HeroModel.inst.isRed(i.heroId) && (t.pingjiayouOpen = !0)
        }
      }
      updateCardList(t, e) {
        t.visible = !0, this.creatList(t, ((t, i) => {
          let s = i,
            o = e[t];
          s.updateInfo(o.itemid, o.itemnum, o.isShowNewHero, o.type), this.totalCardItemList.set(o.idx, s)
        }), null, null, !1), t.numItems = e.length, t.touchable = !1
      }
      isExistTmpHeroList(t, e) {
        return -1 !== e.indexOf(t)
      }
      onTurnCardFinish() {
        this.isStartTurnCard && (this.curTurnCardIdx++, this.curTurnCardIdx >= this.totalCardItemList.size ? this.onCheckTurnCardFinish() : this.onStartTurnCard(this.curTurnCardIdx))
      }
      onCheckTurnCardFinish() {
        this.isSkipAnima() ? this.onTurnCardAll() : this.addTimerTask(1, 300, (() => {
          this.onTurnCardAll()
        }), this)
      }
      onTurnCardAll() {
        this.refreshTurnUI(!1)
      }
      onStartTurnCard(t) {
        this.refreshTurnUI(!0);
        let e = this.totalCardItemList.get(t),
          i = this.isSkipAnima();
        e.playTurnCard(i);
        let s = !1;
        e.isRareHeroType() && (s = !i || !this._isVibrate), s && ToolUtil.isRelease && (this.addTimerTask(1, i ? 0 : e.getTurnCardTime(), (() => {
          FnsdkMgr.phone_vibrate()
        })), this._isVibrate = !0)
      }
      refreshTurnUI(t) {
        this.isStartTurnCard = t, this.Gold.visible = !t, this.costInfo.visible = !t
      }
      isSkipAnima() {
        return this._callCtrl.getSkipAni()
      }
      onClose() {
        t.pingjiayouOpen && !ToolUtil.inH5Web && (t.pingjiayouOpen = !1, LocalCache.recordOne("storeGuideHw_flag", (() => {
          HwFnsdkMgr.storeGuideHw((t => {}))
        }), !0))
      }
    };
  _CallHeroShowView.pingjiayouOpen = !1;
  var CallHeroShowView = _CallHeroShowView,
    {
      regClass: regClass56,
      property: property56
    } = Laya,
    CallHeroCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.hasOpenCallHeroView = !1, this._freeCount = 0, this._skipAnim = !1, this.SkipAniKey = "SkipAni_CallHero", this._curVideoCnt = 0, this._curCallCnt = 0, this.init()
      }
      static get inst() {
        return null == CallHeroCtrl._instance && (CallHeroCtrl._instance = new CallHeroCtrl), CallHeroCtrl._instance
      }
      reset() {
        super.reset()
      }
      init() {
        super.init(), EventDispatcher.inst.addEventListener(MsgName.Func_Open_Init, this, this.checkAllRed), EventDispatcher.inst.addEventListener(MsgName.Func_Open_Id_Change, this, this.checkAllRed), EventDispatcher.inst.addEventListener(MsgName.Activity_Limit_Refresh, this, this.checkTenRed), EventDispatcher.inst.addEventListener(MsgName.Activity_Limit_Delete, this, this.checkTenRed)
      }
      registS2CHandler() {
        this.addS2CHandle("lottery.RetSpiritLotteryFreeCount", this.on_RetSpiritLotteryFreeCount), this.addS2CHandle("lottery.RetSpiritLottery", this.on_RetSpiritLottery), this.addS2CHandle("lottery.RetSpiritLotteryAdv", this.OnRetSpiritLotteryAdv), this.addS2CHandle("lottery.RetSpiritLotteryCount", this.OnRetSpiritLotteryCount)
      }
      on_RetSpiritLottery(t) {
        let e = [];
        if (t.rewards) {
          let i = new Set;
          for (const s of t.rewards) {
            let t = !1,
              o = CfgitemBase.get(s.itemid);
            HeroModel.inst.isHaveHero(o.gethero) || i.has(o.gethero) ? t = !0 : 5 == o.type && i.add(o.gethero);
            let n = {
              sData: s,
              isHaveHero: t,
              heroId: o.gethero
            };
            e.push(n)
          }
        }
        UIManager.inst.open(CallHeroShowView.UID, null, e)
      }
      on_RetSpiritLotteryFreeCount(t) {
        this._freeCount = t.freeCount, this._nextTime = t.nextTime, this.dispatchEvent(MsgName.Call_Hero_Free_Count_Info), this.checkFreeRed()
      }
      send_ReqSpiritLottery(t) {
        let e = {};
        e.id = t, NetManager.inst.send("lottery.ReqSpiritLottery", e)
      }
      getFreeCount() {
        return this._freeCount
      }
      getNextTime() {
        return this._nextTime
      }
      getCallCostInfo() {
        let t = this.getXmlMapKeyData("lottery_cost");
        if (t) return t.info
      }
      setSkipAni(t) {
        this._skipAnim = t, this.dispatchEvent(MsgName.Call_Hero_Skip_Ani_Change)
      }
      getSkipAni() {
        return this._skipAnim
      }
      getXmlMapKeyData(t) {
        const e = ConfigManager.inst.GetXmlConfig("spirit").map;
        if (Array.isArray(e))
          for (const i of e)
            if (i.var === t) return i
      }
      checkAllRed() {
        this.checkAdRedP(), this.checkFreeRed(), this.checkTenRed()
      }
      checkFreeRed() {
        let t = OpenFuncModel.inst.isFuncOpen(import_proto89.default.openfunc.OpenFuncID.SHOP, !1),
          e = AdventureCtrl.inst.hasReparied(8001);
        RedPointMgr.inst.setActive(140, this._freeCount > 0 && t && e)
      }
      checkAdRedP() {
        let t = OpenFuncModel.inst.isFuncOpen(import_proto89.default.openfunc.OpenFuncID.SHOP, !1),
          e = this.TotalVideoCnt - this._curVideoCnt,
          i = AdventureCtrl.inst.hasReparied(8001);
        RedPointMgr.inst.setActive(139, e > 0 && t && !this.hasOpenCallHeroView && i)
      }
      checkTenRed() {
        let t = this.getCallCostInfo();
        const e = parseInt(t[1].cost_id);
        let i = OpenFuncModel.inst.isFuncOpen(import_proto89.default.openfunc.OpenFuncID.SHOP, !1),
          s = ActivityModel.inst.isLimitRankOpen(0);
        ItemObserverUtil.addItemIdObserver(e, this, (() => {
          let t = ItemCtrl.inst.getItemNum(e),
