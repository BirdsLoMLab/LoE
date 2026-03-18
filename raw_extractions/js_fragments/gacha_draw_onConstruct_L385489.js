// Fragment: gacha_draw_onConstruct_L385489.js
// Lines: 385489-385593 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 385493

      onConstruct() {
        this.btnIcon1.onClick(this, this.onClickAll, [this.btnIcon1]), this.onInit(), this.onEvent()
      }
    };
  UIWeiMianZLBanner.UID = "ui://1e5xzp38cqgzv", __decorateClass([UIProperty], UIWeiMianZLBanner.prototype, "Banner", 2), __decorateClass([UIProperty], UIWeiMianZLBanner.prototype, "txtRatio", 2), __decorateClass([UIProperty], UIWeiMianZLBanner.prototype, "iconBg", 2), __decorateClass([UIProperty], UIWeiMianZLBanner.prototype, "btnIcon1", 2), __decorateClass([UIProperty], UIWeiMianZLBanner.prototype, "imgIcon1", 2), __decorateClass([UIProperty], UIWeiMianZLBanner.prototype, "goIcon1", 2);
  var WeiMianZLBanner = class extends UIWeiMianZLBanner {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {
        t == this.btnIcon1 && ItemCtrl.inst.openItemTipsById(this._itemId)
      }
      setItem(t) {
        this._itemId = t;
        const e = CfgitemBase.get(t);
        this.setTexture(this.imgIcon1, e.icon, ItemCtrl.inst.getItemIconFolder(e.type))
      }
    },
    _UIWeiMianShopView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "WeiMianShop", this.name = "WeiMianShopView"
      }
      onInit() {
        this.openSubCom(this.dikuang), this.openSubCom(this.goldItem), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UIWeiMianShopView.UID = "ui://oi74nn76e6sr0", __decorateClass([UIProperty], _UIWeiMianShopView.prototype, "dikuang", 2), __decorateClass([UIProperty], _UIWeiMianShopView.prototype, "bg", 2), __decorateClass([UIProperty], _UIWeiMianShopView.prototype, "goldItem", 2), __decorateClass([UIProperty], _UIWeiMianShopView.prototype, "shopList", 2), __decorateClass([UIProperty], _UIWeiMianShopView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIWeiMianShopView.prototype, "fixHeight", 2);
  var UIWeiMianShopView = _UIWeiMianShopView,
    WeiMianShopView = class extends UIWeiMianShopView {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {
        this.btnClose
      }
    },
    UIbtnWeiMianBuy = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "WeiMianShop"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIbtnWeiMianBuy.UID = "ui://oi74nn76vta33", __decorateClass([UIProperty], UIbtnWeiMianBuy.prototype, "imgIcon", 2), __decorateClass([UIProperty], UIbtnWeiMianBuy.prototype, "txtBuy", 2);
  var btnWeiMianBuy = class extends UIbtnWeiMianBuy {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIWeiMianShopItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "WeiMianShop"
      }
      onConstruct() {
        this.openSubCom(this.goods), this.btnSectBuy.addClick(this, this.onClickAll, [this.btnSectBuy]), this.openSubCom(this.btnSectBuy), this.onInit(), this.onEvent()
      }
    };
  UIWeiMianShopItem.UID = "ui://oi74nn76vta34", __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "txtLimit", 2), __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "txtName", 2), __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "goods", 2), __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "txtLock", 2), __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "btnSectBuy", 2), __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "txtSuggest2", 2), __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "txtSuggest1", 2), __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "goSuggest", 2), __decorateClass([UIProperty], UIWeiMianShopItem.prototype, "goGet", 2);
  var WeiMianShopItem = class extends UIWeiMianShopItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {
        this.btnSectBuy
      }
    },
    UIWeiMianEnemy = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "WeiMianTongJi"
      }
      onConstruct() {
        this.openSubCom(this.avatar), this.openSubCom(this.btnGo), this.btnGo.onClick(this, this.onClickAll, [this.btnGo]), this.openSubCom(this.rp), this.onInit(), this.onEvent()
      }
    };
  UIWeiMianEnemy.UID = "ui://mc1m0tlexam92", __decorateClass([UIProperty], UIWeiMianEnemy.prototype, "avatar", 2), __decorateClass([UIProperty], UIWeiMianEnemy.prototype, "txtName", 2), __decorateClass([UIProperty], UIWeiMianEnemy.prototype, "btnGo", 2), __decorateClass([UIProperty], UIWeiMianEnemy.prototype, "rp", 2), __decorateClass([UIProperty], UIWeiMianEnemy.prototype, "txtnumber1", 2), __decorateClass([UIProperty], UIWeiMianEnemy.prototype, "txtnumber2", 2), __decorateClass([UIProperty], UIWeiMianEnemy.prototype, "txtplace", 2);
  var WeiMianEnemy = class extends UIWeiMianEnemy {
      constructor() {
        super(), this.ctrl = WeiMianRuQinCtrl.inst, this.model = WeiMianRuQinModel.inst
      }
      onInit() {
        super.onInit(), this.btnGo.setClickCDTime(1500)
      }
      onShow() {}
      onClickAll(t) {
        t == this.btnGo && (this.model.curZoneId != LoginCtrl.inst.zoneid || this.model.curCopyId != this._data.lastCopy ? (UIManager.inst.close(WeiMianTongJiView.UID), this.ctrl.tp(this._data.lastCopy, LoginCtrl.inst.zoneid)) : (UIManager.inst.openMsg(ToolUtil.chinese(3952)), UIManager.inst.close(WeiMianTongJiView.UID)))
      }
      setData(t) {
