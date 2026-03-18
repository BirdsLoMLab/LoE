// Fragment: formula_i_L169399.js
// Lines: 169399-169499 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil
// Hit lines: 169399

        let i = Math.ceil(t / 5),
          s = t % 5;
        return 0 == i ? "xing_0" : 1 == i ? 0 == s ? "xing_5" : e > s ? "xing_0" : "xing_5" : 2 == i ? 0 == s ? "xing_6" : e > s ? "xing_5" : "xing_6" : 3 == i ? 0 == s ? "xing_7" : e > s ? "xing_6" : "xing_7" : 4 == i ? 0 == s ? "xing_8" : e > s ? "xing_7" : "xing_8" : 5 == i ? 0 == s ? "xing_9" : e > s ? "xing_8" : "xing_9" : 0 == s ? "xing_7" : e > s ? "xing_6" : "xing_7"
      }
    };
  MountCtrl._instance = null, MountCtrl = __decorateClass([regClass54("NQtc90okROyH6Yub2JeSmQ")], MountCtrl);
  var _UIParkingSkinBuyTipView = class t extends BaseView {
    constructor() {
      super(), this.uid = t.UID, this.pkgName = "ParkingSpotSkin", this.name = "ParkingSkinBuyTipView"
    }
    onInit() {
      this.btnGold.onClick(this, this.onClickAll, [this.btnGold]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnMult.onClick(this, this.onClickAll, [this.btnMult]), this.btnAdd.onClick(this, this.onClickAll, [this.btnAdd]), this.btnCut.onClick(this, this.onClickAll, [this.btnCut]), this.openSubCom(this.btnExchange), this.btnExchange.onClick(this, this.onClickAll, [this.btnExchange])
    }
  };
  _UIParkingSkinBuyTipView.UID = "ui://f1i7xm9rrncgd", __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "btnGold", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "imgPinZhiDi", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "imgPic", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "txtInputNum", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "btnMult", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "btnAdd", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "btnCut", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "goNumb", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "txtLimit", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "btnExchange", 2), __decorateClass([UIProperty], _UIParkingSkinBuyTipView.prototype, "fixHight", 2);
  var UIParkingSkinBuyTipView = _UIParkingSkinBuyTipView,
    ParkingSkinBuyTipView = class extends UIParkingSkinBuyTipView {
      constructor() {
        super(), this.ctrl = null, this.maxCanBuy = 1, this._dataSource = [], this._exchangeNum = 1, this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.ctrl = ParkingSpotCtrl.inst
      }
      onShow() {
        this.shopId = this.args[0], this.cfg = this.args[1];
        let t = ShopModel.inst.getShopGoodsDataByItemId(this.cfg.item);
        this.shopId = Number(t[0]), this.goodsData = t[1], this.txtTitle.text = ToolUtil.chinese(this.cfg.name), this.maxCanBuy = this.getMaxCanBuy(), this.btnMult.title = `+${this.maxCanBuy}`, ItemObserverUtil.addItemIdObserver(this.ctrl.coin_id, this, (() => {
          let t = CfgitemBase.get(this.ctrl.coin_id);
          this.setTexture(this.btnGold.getChildByPath("imgIcon"), t.icon, "ItemIcon"), this.btnGold.getChildByPath("txtNumber").text = `${StringUtil.numberFormat(ItemCtrl.inst.getItemNum(t.id))}`, this.refreshExchange(), this.updateGoodsData()
        }), !0), this.imgPic.visible = 1 != this.cfg.type, 1 == this.cfg.type ? this.setTexture(this.imgPinZhiDi, this.cfg.show_bigimg_name, "ParkingSpot") : (this.setTexture(this.imgPinZhiDi, this.ctrl.curSceneBgTexName, "ParkingSpot"), this.setTexture(this.imgPic, this.cfg.show_bigimg_name, "ParkingSpot")), this.updateGoodsData();
        let e = ShopCtrl.inst.getTotalNeedNum(this.goodsData, this._exchangeNum)[0];
        ItemObserverUtil.addItemIdObserver(e, this, (() => {
          this.refreshExchange()
        }), !0)
      }
      onEvent() {
        this.addEvent(MsgName.Shop_Server_Push_Info, this.updateGoodsData, this), this.addEvent(MsgName.Shop_Server_Buy_Goods, this.updateGoodsData, this)
      }
      updateGoodsData() {
        let t = ShopModel.inst.getShopGoodsDataByItemId(this.cfg.item);
        this.shopId = Number(t[0]), this.goodsData = t[1];
        let e = this.goodsData.config.limit;
        this.txtLimit.setVar("val", `${e-this.goodsData.buycount}/${e}`)
      }
      onClickAll(t) {
        if (t == this.btnClose) this.close();
        else if (t == this.btnAdd) this._addNum();
        else if (t == this.btnCut) this._reduceNum();
        else if (t == this.btnGold) ItemCtrl.inst.openItemTipsById(this.ctrl.coin_id);
        else if (t == this.btnMult) this._MultNum();
        else if (t == this.btnExchange) {
          let t = ShopCtrl.inst.getTotalNeedNum(this.goodsData, this._exchangeNum),
            e = t[0],
            i = t[1];
          if (ItemCtrl.inst.getItemNum(e) < i) return void UIManager.inst.openMsg(ToolUtil.chinese(10554));
          ShopCtrl.inst.ReqBuyGoods(this.shopId, this.goodsData.id, this._exchangeNum)
        }
      }
      _addNum() {
        this.checkIsOk(1) && (this._exchangeNum = Math.min(this._exchangeNum + 1, this.maxCanBuy), this.refreshExchange())
      }
      _reduceNum() {
        this._exchangeNum = Math.max(this._exchangeNum - 1, 1), this.refreshExchange()
      }
      _MultNum() {
        this.checkIsOk() && (this._exchangeNum = this.maxCanBuy, this.refreshExchange())
      }
      getMaxCanBuy() {
        let t = 1;
        for (let e = 1; e <= this.goodsData.config.limit - this.goodsData.buycount; e++) {
          let i = ShopCtrl.inst.getTotalNeedNum(this.goodsData, e),
            s = i[0],
            o = i[1];
          if (!(ItemCtrl.inst.getItemNum(s) > o)) break;
          t = e
        }
        return t
      }
      refreshExchange() {
        this.txtInputNum.text = this._exchangeNum.toString();
        let t = ShopCtrl.inst.getTotalNeedNum(this.goodsData, this._exchangeNum),
          e = t[0],
          i = t[1],
          s = CfgitemBase.get(e);
        this.setTexture(this.btnExchange.imgIcon, s.icon, "ItemIcon");
        let o = ItemCtrl.inst.getItemNum(e);
        if (0 == i) {
          const t = "FFFFFF";
          this.btnExchange.txtConsume.text = StringUtil.format("[color=#{0}]{1}[/color]", t, i)
        } else {
          const t = o >= i ? "FFFFFF" : "C10E0E";
          this.btnExchange.txtConsume.text = StringUtil.format("[color=#{0}]{1}[/color]/{2}", t, StringUtil.numberFormat(o), StringUtil.numberFormat(i))
        }
      }
      checkIsOk(t) {
        if (t) {
          ShopCtrl.inst.getTotalNeedNum(this.goodsData, this._exchangeNum)[0];
          ItemCtrl.inst.getItemNum(this.cfg.item), ShopModel.inst.getGoodsPrice(this.goodsData)
        }
        return this._exchangeNum != this.maxCanBuy || (UIManager.inst.openMsg(ToolUtil.chinese(2563)), !1)
      }
