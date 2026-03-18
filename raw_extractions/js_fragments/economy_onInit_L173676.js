// Fragment: economy_onInit_L173676.js
// Lines: 173676-173780 of bundle-beautified.js
// Categories: Economy
// Keywords: gold
// Hit lines: 173677, 173680

      onInit() {
        this.openSubCom(this.toolBar), this.openSubCom(this.gold), this.btnAutoUse.onClick(this, this.onClickAll, [this.btnAutoUse]), this.addOpenAni(this.openAni), this.addCloseAni(this.closeAni)
      }
    };
  _UIBagView.UID = "ui://84dr9u8phx4f0", __decorateClass([UIController], _UIBagView.prototype, "c1", 2), __decorateClass([UIProperty], _UIBagView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UIBagView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UIBagView.prototype, "itemList", 2), __decorateClass([UIProperty], _UIBagView.prototype, "gold", 2), __decorateClass([UIProperty], _UIBagView.prototype, "txtLoad", 2), __decorateClass([UIProperty], _UIBagView.prototype, "btnAutoUse", 2), __decorateClass([UIProperty], _UIBagView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIBagView.prototype, "openAni", 2), __decorateClass([UITransition], _UIBagView.prototype, "closeAni", 2);
  var UIBagView = _UIBagView,
    _UIBagExpandView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Bag", this.name = "BagExpandView"
      }
      onInit() {
        this.btnOk.onClick(this, this.onClickAll, [this.btnOk]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.itemIcon), this.addOpenAni(this.openAni), this.addCloseAni(this.closeAni)
      }
    };
  _UIBagExpandView.UID = "ui://84dr9u8peobtn", __decorateClass([UIProperty], _UIBagExpandView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIBagExpandView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIBagExpandView.prototype, "btnOk", 2), __decorateClass([UIProperty], _UIBagExpandView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIBagExpandView.prototype, "itemIcon", 2), __decorateClass([UIProperty], _UIBagExpandView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIBagExpandView.prototype, "openAni", 2), __decorateClass([UITransition], _UIBagExpandView.prototype, "closeAni", 2);
  var UIBagExpandView = _UIBagExpandView,
    BagExpandView = class extends UIBagExpandView {
      constructor() {
        super(), this.maskType = 1, this.layer = "MainMenu", this.maskTransparent = !0
      }
      onInit() {
        super.onInit()
      }
      onEvent() {}
      onShow() {
        if (0 == this.args.length) return;
        this._packType = this.args[0];
        let t = CfgbagBase.get(this._packType);
        if (null != t) {
          const e = t.unlock_cost[0],
            i = e[0],
            s = e[1],
            o = CfgitemBase.get(i);
          let n = ItemUtil.createDataById(i, 0);
          this.itemIcon.setData(n, !0, !1), this.itemIcon.touchable = !1, this.itemIcon.showNeedAndOwnTxt(s), this.txtName.text = StringUtil.format(ToolUtil.chinese(1325), ToolUtil.chinese(o.name), s, t.grid_num)
        }
      }
      onClickAll(t) {
        t == this.btnClose ? this.close() : t == this.btnOk && (BagCtrl.inst.send_ReqAddPackCapacity(this._packType), this.close())
      }
      onUpdate(t) {}
    },
    BagView = class extends UIBagView {
      constructor() {
        super(), this._isAutoUse = !1, this.maskType = 0, this.maskTransparent = !0, this.moveCamera = 1
      }
      onUpdate(t) {}
      onDestroy() {}
      onInit() {
        super.onInit(), this.btnAutoUse.visible = !1, this.setTexture(this.bgImg, "common_img_banpingtanchuang", "Common"), this._initItemList(), this._initBagTab()
      }
      onEvent() {
        this.addEvent(MsgName.Bag_Refresh_Capacity, this.onBagRefreshHandle), this.addEvent(MsgName.Bag_Refresh_Items, this.onBagRefreshHandle), this.addEvent(MsgName.Bag_Refresh_New, this.onBagNewRefreshHandle), this.addEvent(MsgName.Item_Tips_Close, this.onItemTipsCloseHandle), this.addEvent(MsgName.Bag_Auto_Use_State_Change, this.onAutoStateChangeHandle)
      }
      onShow() {
        this._refereshPackTypeDefault(), this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid), this.dispatchEvent(MsgName.Main_Task_Up, fgui.GRoot.inst.height - this.fixHeight.height - 95)
      }
      onHide() {
        if (this.toolBar) {
          this.toolBar.selectIdx = -1;
          const t = [];
          for (const e of this._toolBarArr) t.push(e.extraData.id);
          BagCtrl.inst.cleanNewStateForPack(t)
        }
      }
      onBeforeClose() {
        this.dispatchEvent(MsgName.Main_Task_Down)
      }
      onBagRefreshHandle(t) {
        t === this._packType && (this._refrshItemList(!0, !1), this._refreshCapacity()), this.refreshToolBar()
      }
      onBagNewRefreshHandle() {
        this.refreshToolBar()
      }
      onItemTipsCloseHandle() {
        this._cleanSelect()
      }
      _initBagTab() {
        let t = BagModel.inst.getBagCfgList(1);
        this._toolBarArr = [];
        for (const e of t) {
          let t = {
            title: ToolUtil.chinese(e.name),
            extraData: e
          };
          this._toolBarArr.push(t)
        }
        this.toolBar.setData(this._toolBarArr, (t => {
          let e = this._toolBarArr[t];
          e && this._switchBag(e.extraData.id)
        }), !1)
      }
      _refereshPackTypeDefault() {
        this.refreshToolBar();
        for (let t = 0; t < this._toolBarArr.length; t++) {
          const e = this._toolBarArr[t];
          if (!BagCtrl.inst.checkBagIsEmpty(e.extraData.id)) return void(this.toolBar.selectIdx = t)
        }
        this.toolBar.selectIdx = 0
      }
      refreshToolBar() {
        if (this._toolBarArr) {
          for (const t of this._toolBarArr) {
            const e = t.extraData.id;
            let i = BagModel.inst.getBagData(e);
