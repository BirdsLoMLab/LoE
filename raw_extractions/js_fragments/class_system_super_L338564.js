// Fragment: class_system_super_L338564.js
// Lines: 338564-338703 of bundle-beautified.js
// Categories: Class System
// Keywords: thunder
// Hit lines: 338566, 338603

        super(), this.StateTxt = {
          Break: ToolUtil.chinese(1837),
          Thunder: ToolUtil.chinese(1838)
        }
      }
      onInit() {
        super.onInit(), this._tianziId = TianJiaoDaoTuCtrl.inst.getItemId(), this._upLevelId = DaoYouRecallCtrl.inst.getUpLvItemId()
      }
      onShow() {
        this.bindRedPoint(this.goRed, 96), this.refreshState(), this.refrehRealmIcon()
      }
      onEvent() {
        this.addEvent(MsgName.Red_Point, this.onRedPointChangeHandle), this.addEvent(MsgName.Player_Change_Gender, this.onPlayerGenderChange), this.addEvent(MsgName.Lead_Role_Realm_Change, this.onPlayerRealmChange)
      }
      onPlayerGenderChange() {
        this.refrehRealmIcon()
      }
      onPlayerRealmChange() {
        this.refrehRealmIcon()
      }
      refrehRealmIcon() {
        const t = LeadLevelModel.inst.getRoleRealmShowCfg(),
          e = CoreMapCtrl.inst.gender;
        this.setImage(this.imgIcon, t.main_btn_icons[1 == e ? 0 : 1])
      }
      onDestroy() {}
      onRedPointChangeHandle(t) {
        "LeadLevel_Realm_Can_Break" !== t.key && "LeadLevel_Realm_Can_Thunder" !== t.key && "Talent_Item" !== t.key && "HuiGuiHaoLi_UpLevelItem" !== t.key || this.refreshState()
      }
      refreshState() {
        var t;
        this.goSystem.visible = !0;
        let e = ItemCtrl.inst.getItemNum(this._tianziId),
          i = ItemCtrl.inst.getItemNum(this._upLevelId),
          s = LeadLevelModel.inst.getRoleLevel(),
          o = null == (t = DaoYouRecallCtrl.inst.getReturnInfo()) ? void 0 : t.maxLevel,
          n = i > 0 && !LeadLevelModel.inst.isCurFullLv() && s <= o;
        if (e > 0 || n) return this.goTianzi.visible = !0, this.txtSystem.visible = !1, void(this.goLight.visible = !1);
        let r = RedPointMgr.inst.getActive(101);
        this.goTianzi.visible = !1, this.goLight.visible = !0, this.txtSystem.visible = !0, this.bgDi.visible = !this.goTianzi.visible, r ? this.txtSystem.text = this.StateTxt.Break : RedPointMgr.inst.getActive(102) ? this.txtSystem.text = this.StateTxt.Thunder : (this.goSystem.visible = !1, this.goLight.visible = !1)
      }
    },
    UIMainVoiceTip = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "MainChat"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIMainVoiceTip.UID = "ui://dhrcubrwswwj7pa", __decorateClass([UIController], UIMainVoiceTip.prototype, "c1", 2), __decorateClass([UIProperty], UIMainVoiceTip.prototype, "imgRec", 2), __decorateClass([UIProperty], UIMainVoiceTip.prototype, "txtTime", 2), __decorateClass([UIProperty], UIMainVoiceTip.prototype, "imgCanncel", 2), __decorateClass([UIProperty], UIMainVoiceTip.prototype, "canncelTip", 2);
  var MainVoiceTip = class extends UIMainVoiceTip {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
    },
    UIBtnMainCityCakeInteractive = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "MainCity"
      }
      onConstruct() {
        this.btnInteract.onClick(this, this.onClickAll, [this.btnInteract]), this.onInit(), this.onEvent()
      }
    };
  UIBtnMainCityCakeInteractive.UID = "ui://c5fcjkqwdn0x2d", __decorateClass([UIController], UIBtnMainCityCakeInteractive.prototype, "c1", 2), __decorateClass([UIProperty], UIBtnMainCityCakeInteractive.prototype, "btnInteract", 2);
  var BtnMainCityCakeInteractive = class extends UIBtnMainCityCakeInteractive {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onEvent() {
        this.addEvent(MsgName.YanHuo_GetCake, this.OnGetCake)
      }
      onShow() {}
      onClickAll(t) {
        var e;
        t == this.btnInteract && (null == (e = this._onClick) || e.apply(this._caller, this._args))
      }
      OnGetCake(t) {
        this._cakeId == t && (this.visible = !1)
      }
      SetCustomClick(t, e, i, s) {
        this._caller = e, this._cakeId = t, this._onClick = i, this._args = s
      }
    },
    UIBtnMainCityChange = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "MainCity"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIBtnMainCityChange.UID = "ui://c5fcjkqw7qru18", __decorateClass([UIController], UIBtnMainCityChange.prototype, "c1", 2), __decorateClass([UIProperty], UIBtnMainCityChange.prototype, "imgMainCity", 2), __decorateClass([UIProperty], UIBtnMainCityChange.prototype, "imgMainDungeon", 2);
  var BtnMainCityChange = class extends UIBtnMainCityChange {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIBtnMainCityPlayer = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "MainCity"
      }
      onConstruct() {
        this.openSubCom(this.player), this.onInit(), this.onEvent()
      }
    };
  UIBtnMainCityPlayer.UID = "ui://c5fcjkqwv2s11z", __decorateClass([UIProperty], UIBtnMainCityPlayer.prototype, "player", 2), __decorateClass([UIProperty], UIBtnMainCityPlayer.prototype, "imgCareerIcon", 2), __decorateClass([UIProperty], UIBtnMainCityPlayer.prototype, "txtName", 2), __decorateClass([UIProperty], UIBtnMainCityPlayer.prototype, "txtLv", 2);
  var BtnMainCityPlayer = class extends UIBtnMainCityPlayer {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIBtnMainCityPlayerInteract = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "MainCity"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIBtnMainCityPlayerInteract.UID = "ui://c5fcjkqwv2s1a", __decorateClass([UIProperty], UIBtnMainCityPlayerInteract.prototype, "txtName", 2);
  var BtnMainCityPlayerInteract = class extends UIBtnMainCityPlayerInteract {
      constructor() {
