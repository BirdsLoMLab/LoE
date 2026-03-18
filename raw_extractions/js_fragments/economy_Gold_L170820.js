// Fragment: economy_Gold_L170820.js
// Lines: 170820-170920 of bundle-beautified.js
// Categories: Economy
// Keywords: gold
// Hit lines: 170820

  var Gold = class extends UIGold {
      constructor() {
        super(), this._goodItems = new Array
      }
      onUpdate(t) {}
      onHide() {}
      onDestroy() {}
      dispose() {
        super.dispose(), ItemObserverUtil.removeAllObserver(this)
      }
      set goldType(t) {
        if (this._goldType !== t) switch (this._goldType = t, this.btnArrow2.visible = !1, this.btnGoldAdd.visible = !1, t) {
          case 0:
            this.btnArrow2.visible = !0, this._adjustResFrame(), this._refreshDefaultShowRes();
            break;
          case 1:
            this.btnGoldAdd.visible = !0
        }
      }
      set exchangeId(t) {
        this._exchangeId = t
      }
      setRes(t, e, i = !1, s = 0) {
        let o = this._getGoodItem(t);
        o && (o.visible = !0, ItemObserverUtil.removeItemIdObserver(o.getItemId(), this), ItemObserverUtil.addItemIdObserver(e, this, (() => {
          o.setData(e, !i, s)
        })))
      }
      hideAllRes() {
        for (const t of this._goodItems) t.visible = !1, ItemObserverUtil.removeItemIdObserver(t.getItemId(), this)
      }
      hideRes(t) {
        let e = this._getGoodItem(t);
        e && (e.visible = !1, ItemObserverUtil.removeItemIdObserver(e.getItemId(), this))
      }
      setVal(t, e, i = !1) {
        let s = this._getGoodItem(t);
        s && (i && ItemObserverUtil.removeItemIdObserver(s.getItemId(), this), s.setCount(e))
      }
      getVal(t) {
        let e = this._getGoodItem(t);
        return e ? e.getCount() : 0
      }
      onInit() {
        super.onInit(), this._initItemList()
      }
      initResShow() {
        this.resShow || (this.resShow = this.addSubChild("GoodResShow", this.goResShowNode), this.resShow.setClickFunc((() => {
          this.goResShowNode.visible = !1, ToolUtil.hidePopup(this.resShow), this._adjustResFrame()
        })))
      }
      _initItemList() {
        for (let t = 1; t < 5; t++) {
          const e = "goodItem" + t,
            i = Reflect.get(this, e);
          i && (i.visible = !1, this._goodItems.push(i))
        }
      }
      onEvent() {
        this.on(fgui.Events.XY_CHANGED, this, this._onXYChangeHandle), this.goResShowNode.on(Laya.Event.UNDISPLAY, this, (() => {
          this.btnArrow2.selected = !this._isTopShow
        })), this.goResShowNode.on(Laya.Event.DISPLAY, this, (() => {
          this.btnArrow2.selected = this._isTopShow
        }))
      }
      onShow() {
        this._bagResArray = BagModel.inst.getBagResShowData().slice(), this._mainResArray = BagModel.inst.getMainResShowData().slice(), this.goldType = 0
      }
      onClickAll(t) {
        t == this.btnArrow2 ? (this.initResShow(), this._adjustResFrame(), this._refereshResView(), this.goResShowNode.visible = !0, fgui.GRoot.inst.showPopup(this.goResShowNode, this.resPos, this._isTopShow ? fgui.PopupDirection.Up : fgui.PopupDirection.Down, !0)) : t == this.btnGoldAdd && (this.addFun ? this.addFun() : UIManager.inst.openExchange(this._exchangeId))
      }
      _refreshDefaultShowRes() {
        for (let t = 0; t < this._goodItems.length; t++) {
          const e = this._mainResArray[t];
          e ? this.setRes(t + 1, parseInt(e.resid), 1 == parseInt(e.showUnit)) : this.hideRes(t + 1)
        }
      }
      _refereshResView() {
        this.initResShow(), this.resShow.refreshList(this._bagResArray)
      }
      _getGoodItem(t) {
        if (!(t < 1 || t > this._goodItems.length)) return this._goodItems[t - 1]
      }
      _onXYChangeHandle() {
        this._adjustResFrame()
      }
      _adjustResFrame() {
        let t = this.localToGlobal(0, 0);
        this._isTopShow = t.y > this.goResShowNode.height, this.btnArrow2.selected = !this._isTopShow
      }
    },
    import_proto91 = __toESM(require_proto()),
    _Cfgcallskill_pool = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgcallskill_pool.JsonName = "callskill_pool.json";
  var Cfgcallskill_pool = _Cfgcallskill_pool,
    import_proto89 = __toESM(require_proto()),
    _Cfgcall_level = class t extends ConfigBase {
