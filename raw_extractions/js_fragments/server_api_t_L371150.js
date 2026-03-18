// Fragment: server_api_t_L371150.js
// Lines: 371150-371253 of bundle-beautified.js
// Categories: Server/API
// Keywords: joynetgame
// Hit lines: 371153

          let t = JSON.parse(NetManager.inst.ext).access_token,
            i = StringUtil.encode(LoginCtrl.inst.zoneid),
            s = StringUtil.encode(LoginCtrl.inst.charid.toString()),
            o = `https://payment.joynetgame.com/?domain_area=eru&client_id=${StringUtil.encode(null==(e=FnsdkMgr.PlatformInfo)?void 0:e.fngid)}&oauth_token=${t}&server_id=${i}&role_id=${s}&area_id=${LoginCtrl.isEU?"EU":"EST"}`;
          SdkMgr.navigateTo(o), QuestionaryCtrl.inst.ReqPopupAward(3, 2)
        }
      }
    },
    _UIShopView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Shop", this.name = "ShopView"
      }
      onInit() {}
    };
  _UIShopView.UID = "ui://clp0u142dlme1n", __decorateClass([UIProperty], _UIShopView.prototype, "bgLoader", 2), __decorateClass([UIProperty], _UIShopView.prototype, "ItemList", 2), __decorateClass([UIProperty], _UIShopView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIShopView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIShopView.prototype, "txtFull", 2), __decorateClass([UIProperty], _UIShopView.prototype, "goFull", 2);
  var UIShopView = _UIShopView,
    ShopView = class extends UIShopView {
      constructor() {
        super(), this.hide3DCamera = !0, this.moveCamera = 2
      }
      onClickAll(t) {}
      onDestroy() {
        ShopModel.inst.checkHasLookTab()
      }
      onInit() {
        super.onInit(), this.creatList(this.ItemList, this._onItemRender, this._onItemProvider)
      }
      onEvent() {
        this.addEvent(MsgName.Shop_Server_Push_Info, this.onServerPushInfoHandle), this.addEvent(MsgName.Shop_Server_Buy_Goods, this.onServerPushBuyGoods), this.addEvent(MsgName.Shop_New_Goods, this.onServerPushBuyGoods), this.addEvent(MsgName.Item_Record, this.refreshTitle)
      }
      onShow() {
        this.setTexture(this.bgLoader, "sc_bg2", "Shop"), ShopCtrl.inst.ReqShopIcon(), ShopModel.inst.hasOpenShopView = !0, ShopModel.inst.checkShopRedP()
      }
      onServerPushInfoHandle() {
        this.refreshItemList(!0)
      }
      onServerPushBuyGoods() {
        this.refreshItemList(!1)
      }
      refreshItemList(t) {
        this.goodsList = ShopModel.inst.getShopGoodsList(this.selectTabId);
        let e = this.goodsList.length <= 1;
        this.goFull.visible = e, this.ItemList.visible = !e, this.ItemList.numItems = this.goodsList.length, t && this.ItemList.scrollToView(0)
      }
      switchTab(t) {
        this.selectTabId = t;
        let e = ShopModel.inst.getShopIdListByTabId(t);
        (null == e ? void 0 : e.length) > 0 && e.forEach(((t, e, i) => {
          SdkMgr.logChannelGameEvent("open_shop", {
            shop_id: t
          })
        })), ShopCtrl.inst.ReqMoreShopInfo(e), this.refreshTitle()
      }
      refreshTitle() {
        3 == this.selectTabId ? this.txtTitle.text = ShopModel.inst.getAssistTitleDesc() : this.txtTitle.text = ""
      }
      _onItemRender(t, e) {
        const i = this.goodsList[t];
        let s = 6 == i.shopType || 7 == i.shopType;
        return i.isTitle && s || i.isTitle && !s || 1 == this.selectTabId || 2 == this.selectTabId || 3 == this.selectTabId || 6 == this.selectTabId || 4 == this.selectTabId ? e.setData(i) : void 0
      }
      _onItemProvider(t) {
        const e = this.goodsList[t];
        let i = 6 == e.shopType || 7 == e.shopType;
        return e.isTitle && i ? "ui://Shop/ShopTitleWithTime" : e.isTitle && !i ? "ui://Shop/ShopTitleNoTime" : 1 == this.selectTabId ? "ui://Shop/ShopChargeRow" : 2 == this.selectTabId ? "ui://Shop/ShopGiftItem" : 3 == this.selectTabId || 6 == this.selectTabId || 4 == this.selectTabId ? "ui://Shop/ShopLimitRow" : void 0
      }
    },
    ShopNewView = class extends UIShopNewView {
      constructor() {
        super(), this.curSelectIndex = 0
      }
      onInit() {
        super.onInit(), this._costData = CallHeroCtrl.inst.getCallCostInfo(), this.imgTitle.helpId = 0, HwFnsdkMgr.hw_api_logEventLog("click_store", "点击打开充值商店"), this.bindRedPoint(this.rp_chaozhi, 154)
      }
      onEvent() {
        this.addEvent(MsgName.Shop_Icon_Ret, this.refreshTab), this.addEvent(MsgName.Shop_Server_Push_Icon, this.refreshTab), this.addEvent(MsgName.Shop_Server_Push_Info, this.refreshTab), this.addEvent(MsgName.Shop_Server_Buy_Goods, this.onServerPushBuyGoods), this.addEvent(MsgName.Call_Hero_CallCnt, this.RefreshCallCnt), this.addEvent(MsgName.Shop_New_Goods, this.refreshTab), this.addEvent(MsgName.Shop_Server_Push_Info, this.checkShopCartBtn)
      }
      onShow() {
        this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid);
        const t = parseInt(this.args && this.args[0] || 0);
        this.curSelectIndex = t, ShopCtrl.inst.ReqShopIcon(), ShopCtrl.inst.ReqShopCartInfo(), this.checkChaoZhi()
      }
      onClickAll(t) {
        var e;
        t == this.btn_shopCar ? UIManager.inst.open(ShopCarView.UID, null, ShopModel.inst.getShopIdListByTabId(null == (e = this.shopTabList[this.curSelectIndex]) ? void 0 : e.tabId), 2) : t == this.btn_shopCar ? UIManager.inst.open(ShopCarView.UID) : t == this.btnChaoZhi && UIManager.inst.open(ShopChaoZhiChongZhiView.UID)
      }
      checkChaoZhi() {
        this.btnChaoZhi.visible = QuestionaryCtrl.inst.isOpenChaoZhi()
      }
      onServerPushBuyGoods() {
        this.refreshTab(), this.refreshRes()
      }
      RefreshCallCnt() {
        this.refreshTab()
      }
      refreshTab() {
        this.shopTabList = ShopModel.inst.getShopTabList(), this.toolBar.setData(this.shopTabList, (t => {
          this.switchTab(t)
        }), !1), this.toolBar.refreshList(!0, !1), this.toolBar.selectIdx = this.curSelectIndex, this.toolBar.visible = this.shopTabList.length > 1
      }
      switchTab(t) {
        this.curSelectIndex = t;
        let e = this.shopTabList[t];
        ShopModel.inst.setHasLookTab(e.tabId), ShopModel.inst.checkNewGoods(), this.showShopView(t), this.refreshRes(), this.setTitle(e.icon), this.refreshTab(), this.checkShopCartBtn()
