// Fragment: gacha_draw_super_L297229.js
// Lines: 297229-297429 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: draw
// Hit lines: 297229, 297260, 297284, 297316, 297346, 297376

        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UICardShopIconNoAnim.UID = "ui://jvvif5iiinv19i", __decorateClass([UIProperty], UICardShopIconNoAnim.prototype, "imgFrame", 2), __decorateClass([UIProperty], UICardShopIconNoAnim.prototype, "itemIcon", 2), __decorateClass([UIProperty], UICardShopIconNoAnim.prototype, "goRoot", 2);
  var CardShopIconNoAnim = class extends UICardShopIconNoAnim {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.onClick(this, (() => {
          this.onLoaderClick()
        }))
      }
      onShow() {}
      setData(t, e) {
        this.idx = t;
        const i = DrawModel.inst.drawRewardItemArr[this.idx];
        this.itemId = i.id, this.itemNum = i.num;
        const s = CfgitemBase.get(this.itemId);
        this.setTexture(this.itemIcon, s.icon, "ItemIcon"), this.setImage(this.imgFrame, `card_img_pinzhi0${s.quality}`, "Icon")
      }
      onLoaderClick() {
        const t = ItemUtil.createDataById(this.itemId, this.itemNum);
        ItemCtrl.inst.openItemTipsByData(t, !0)
      }
    },
    UICardShopIconNoAnimTxt = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UICardShopIconNoAnimTxt.UID = "ui://jvvif5iihjq19k", __decorateClass([UIProperty], UICardShopIconNoAnimTxt.prototype, "txtNumber", 2), __decorateClass([UIProperty], UICardShopIconNoAnimTxt.prototype, "goRoot", 2);
  var CardShopIconNoAnimTxt = class extends UICardShopIconNoAnimTxt {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t, e) {
        this.idx = t;
        const i = DrawModel.inst.drawRewardItemArr[this.idx],
          s = (i.id, i.num);
        this.txtNumber.text = s > 1 ? s.toString() : ""
      }
    },
    UICardShopIconTxt = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UICardShopIconTxt.UID = "ui://jvvif5iihjq19j", __decorateClass([UIProperty], UICardShopIconTxt.prototype, "txtNumber", 2), __decorateClass([UIProperty], UICardShopIconTxt.prototype, "goRoot", 2);
  var CardShopIconTxt = class extends UICardShopIconTxt {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {
        this.goRoot.visible = !1
      }
      onEvent() {
        this.addEvent(MsgName.Draw_Turn_One_Card_Finish, this.onTurnOneCardFinish)
      }
      setData(t, e) {
        this.goRoot.visible = !1, this.idx = t;
        const i = DrawModel.inst.drawRewardItemArr[this.idx],
          s = (i.id, i.num);
        this.txtNumber.text = s > 1 ? s.toString() : ""
      }
      onTurnOneCardFinish(t) {
        this.idx == t && (this.goRoot.visible = !0)
      }
    },
    UIeff_open_orange = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIeff_open_orange.UID = "ui://jvvif5iipe5s4v", __decorateClass([UIProperty], UIeff_open_orange.prototype, "ld", 2), __decorateClass([UITransition], UIeff_open_orange.prototype, "open", 2);
  var eff_open_orange = class extends UIeff_open_orange {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.initOk = !0
      }
      onShow() {}
      onComplete() {
        this.initOk && (this.visible = !1)
      }
      onDestroy() {
        this.recycleGif(), this.initOk = !1
      }
      recycleGif() {
        this.gif = null
      }
      setData() {
        this.visible = !0, this.gif || (this.gif = new UIGif), this.gif.set(this.ld, "eff_open_orange", 20, !1, Laya.Handler.create(this, this.onComplete))
      }
    },
    UIeff_open_purple = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIeff_open_purple.UID = "ui://jvvif5iipe5s4g", __decorateClass([UIProperty], UIeff_open_purple.prototype, "ld", 2), __decorateClass([UITransition], UIeff_open_purple.prototype, "open", 2);
  var eff_open_purple = class extends UIeff_open_purple {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.initOk = !0
      }
      onShow() {}
      onDestroy() {
        this.recycleGif()
      }
      recycleGif() {
        this.gif = null
      }
      onComplete() {
        this.initOk && (this.visible = !1)
      }
      setData() {
        this.visible = !0, this.gif || (this.gif = new UIGif), this.gif.set(this.ld, "eff_open_purple", 20, !1, Laya.Handler.create(this, this.onComplete))
      }
    },
    UIeff_open_red = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIeff_open_red.UID = "ui://jvvif5iiksvqa8", __decorateClass([UIProperty], UIeff_open_red.prototype, "ld", 2), __decorateClass([UITransition], UIeff_open_red.prototype, "open", 2);
  var eff_open_red = class extends UIeff_open_red {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.initOk = !0
      }
      onShow() {}
      onComplete() {
        this.initOk && (this.visible = !1)
      }
      onDestroy() {
        this.recycleGif()
      }
      recycleGif() {
        this.gif = null
      }
      setData() {
        this.visible = !0, this.gif || (this.gif = new UIGif), this.gif.set(this.ld, "eff_open_red", 20, !1, Laya.Handler.create(this, this.onComplete))
      }
    },
    _UIDuanWuQianDaoView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "DuanWuQianDao", this.name = "DuanWuQianDaoView"
      }
      onInit() {
        this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.addOpenAni(this.openAni), this.addCloseAni(this.closeAni)
      }
    };
  _UIDuanWuQianDaoView.UID = "ui://kkbz8asdj8ql0", __decorateClass([UIProperty], _UIDuanWuQianDaoView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIDuanWuQianDaoView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UIDuanWuQianDaoView.prototype, "txt_times", 2), __decorateClass([UIProperty], _UIDuanWuQianDaoView.prototype, "listItem", 2), __decorateClass([UIProperty], _UIDuanWuQianDaoView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIDuanWuQianDaoView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIDuanWuQianDaoView.prototype, "openAni", 2), __decorateClass([UITransition], _UIDuanWuQianDaoView.prototype, "closeAni", 2);
  var UIDuanWuQianDaoView = _UIDuanWuQianDaoView,
    DuanWuQianDaoView = class extends UIDuanWuQianDaoView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.listItem, this.itemRender, null, null, !0)
      }
      onEvent() {
        this.addEvent(MsgName.AccSign_Update, this.refreshView)
      }
      onShow() {
        this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid);
        const t = Number(this.args[0]);
        this._cfg = Cfgsign_data.get(Number(t)), this._cfgs = Cfgsign_reward.get({
          sign_id: this._cfg.id
        }), this.refreshView()
