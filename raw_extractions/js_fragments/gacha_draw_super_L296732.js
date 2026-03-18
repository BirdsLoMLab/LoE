// Fragment: gacha_draw_super_L296732.js
// Lines: 296732-296932 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: draw
// Hit lines: 296732, 296756, 296775, 296808, 296827, 296861, 296884, 296907, 296930

        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIbtnCardAd.UID = "ui://jvvif5iibqr07l", __decorateClass([UIProperty], UIbtnCardAd.prototype, "bg0", 2), __decorateClass([UIProperty], UIbtnCardAd.prototype, "bg1", 2), __decorateClass([UIProperty], UIbtnCardAd.prototype, "txtAdNumber", 2), __decorateClass([UIProperty], UIbtnCardAd.prototype, "txtAdNumberGray", 2);
  var btnCardAd = class extends UIbtnCardAd {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        this.txtAdNumber.text = t.toString(), this.txtAdNumberGray.text = t.toString()
      }
      setGray(t) {
        this.txtAdNumber.visible = !t, this.txtAdNumberGray.visible = t, this.bg0.grayed = t, this.bg1.grayed = t
      }
    },
    UIbtnGetPrize = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIbtnGetPrize.UID = "ui://jvvif5iim6o69b", __decorateClass([UIProperty], UIbtnGetPrize.prototype, "loaderIcon", 2);
  var btnGetPrize = class extends UIbtnGetPrize {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      updateInfo() {}
    },
    UIbtnShopTab = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.openSubCom(this.dot), this.onInit(), this.onEvent()
      }
    };
  UIbtnShopTab.UID = "ui://jvvif5iiryrx9t", __decorateClass([UIProperty], UIbtnShopTab.prototype, "goBg", 2), __decorateClass([UIProperty], UIbtnShopTab.prototype, "txtTabUnSel", 2), __decorateClass([UIProperty], UIbtnShopTab.prototype, "guidePoint", 2), __decorateClass([UIProperty], UIbtnShopTab.prototype, "txtTabSel", 2), __decorateClass([UIProperty], UIbtnShopTab.prototype, "dot", 2);
  var btnShopTab = class extends UIbtnShopTab {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onEvent() {
        this.addEvent(MsgName.Shop_Main_Menu_After_Switch, this.onMenuAfterSwitch)
      }
      setData(t, e, i, s) {
        this.idx = i, this.redPointKey = e, this.txtTabSel.text = t, this.txtTabUnSel.text = t, this.bindRedPoint(this.dot, this.redPointKey), this.setSelectr(s == this.idx), this.setGuideName(i)
      }
      setSelectr(t) {
        this.goBg.visible = t, this.txtTabSel.visible = t, this.txtTabUnSel.visible = !t
      }
      onMenuAfterSwitch(t) {
        this.setSelectr(t == this.idx)
      }
      setGuideName(t) {
        this.guidePoint.name = `Guide_${t}`
      }
    },
    UICardEff = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UICardEff.UID = "ui://jvvif5iis8zkad", __decorateClass([UIProperty], UICardEff.prototype, "goOrange", 2), __decorateClass([UIProperty], UICardEff.prototype, "goPurple", 2), __decorateClass([UIProperty], UICardEff.prototype, "goRed", 2);
  var CardEff = class extends UICardEff {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onEvent() {
        this.addEvent(MsgName.Draw_Add_Orange_Effect, this.onAddEff)
      }
      creatCom(t, e, i) {
        const s = fgui.UIPackage.createObject("Draw", i);
        return e.addChild(s), s
      }
      setComPos(t, e) {
        const i = t.point,
          s = e.parent.globalToLocal(i.x, i.y);
        e.setXY(s.x, s.y)
      }
      creatComAndSetPos(t, e, i) {
        const s = this.creatCom(t, e, i);
        return this.setComPos(t, s), s
      }
      getFirstCanUse(t, e, i) {
        for (let i = 0; i < e.numChildren; i++) {
          let s = e.getChildAt(i);
          if (!s.visible) return this.setComPos(t, s), s
        }
        return this.creatComAndSetPos(t, e, i)
      }
      getRed(t) {
        return this.getFirstCanUse(t, this.goRed, "cardeff_red")
      }
      getPurple(t) {
        return this.getFirstCanUse(t, this.goPurple, "cardeff_purple")
      }
      getOrange(t) {
        return this.getFirstCanUse(t, this.goOrange, "cardeff_orange")
      }
      onAddEff(t) {
        3 == t.cardAnimData.showEffType && this.getRed(t).setData(), 2 == t.cardAnimData.showEffType && this.getPurple(t).setData(), 1 == t.cardAnimData.showEffType && this.getOrange(t).setData()
      }
    },
    UIcardeff_orange = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIcardeff_orange.UID = "ui://jvvif5iiirv4jl", __decorateClass([UITransition], UIcardeff_orange.prototype, "t0", 2);
  var cardeff_orange = class extends UIcardeff_orange {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData() {
        this.visible = !0, this.t0.play((() => {
          this.visible = !1
        }))
      }
    },
    UIcardeff_purple = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIcardeff_purple.UID = "ui://jvvif5iiirv4jm", __decorateClass([UITransition], UIcardeff_purple.prototype, "t0", 2);
  var cardeff_purple = class extends UIcardeff_purple {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData() {
        this.visible = !0, this.t0.play((() => {
          this.visible = !1
        }))
      }
    },
    UIcardeff_red = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIcardeff_red.UID = "ui://jvvif5iiirv4jn", __decorateClass([UITransition], UIcardeff_red.prototype, "t0", 2);
  var cardeff_red = class extends UIcardeff_red {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData() {
        this.visible = !0, this.t0.play((() => {
          this.visible = !1
        }))
      }
    },
    UICardOpenAnim = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
