// Fragment: economy_onInit_L162317.js
// Lines: 162317-162421 of bundle-beautified.js
// Categories: Economy
// Keywords: gold
// Hit lines: 162318, 162321

      onInit() {
        this.openSubCom(this.goTitle), this.openSubCom(this.Gold), this.btn_delete.onClick(this, this.onClickAll, [this.btn_delete]), this.btn_cancel.onClick(this, this.onClickAll, [this.btn_cancel]), this.btn_save.onClick(this, this.onClickAll, [this.btn_save]), this.openSubCom(this.btn_editor), this.btn_editor.onClick(this, this.onClickAll, [this.btn_editor]), this.openSubCom(this.editorRedPoint), this.openSubCom(this.shangzhen_item01), this.openSubCom(this.shangzhen_item02), this.openSubCom(this.shangzhen_item03), this.openSubCom(this.shangzhen_item04), this.openSubCom(this.yiShouSkill), this.openSubCom(this.statsTips), this.openSubCom(this.statsTipsMin), this.openSubCom(this.emptyItem), this.btnElement.onClick(this, this.onClickAll, [this.btnElement]), this.openSubCom(this.yuansuTips), this.openSubCom(this.btn_screen), this.btn_screen.onClick(this, this.onClickAll, [this.btn_screen]), this.btn_yushe.addClick(this, this.onClickAll, [this.btn_yushe]), this.openSubCom(this.btn_yushe), this.btn_baocun.onClick(this, this.onClickAll, [this.btn_baocun]), this.btn_go.onClick(this, this.onClickAll, [this.btn_go]), this.btn_toggle.onClick(this, this.onClickAll, [this.btn_toggle])
      }
    };
  _UIYiShouYCView.UID = "ui://dvjuvbbakzlx4", __decorateClass([UIController], _UIYiShouYCView.prototype, "c1", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "goTitle", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "Gold", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "lineGroup", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "list_YiShou", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_delete", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_cancel", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_save", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_editor", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "editorRedPoint", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "txtTips", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "tipGroup", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "shangzhen_item01", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "shangzhen_item02", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "shangzhen_item03", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "shangzhen_item04", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "yiShouSkill", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "statsTips", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "statsTipsMin", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "emptyItem", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btnElement", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "txtTip", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "yuansuTips", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_screen", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_yushe", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_baocun", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_go", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIYiShouYCView.prototype, "btn_toggle", 2);
  var UIYiShouYCView = _UIYiShouYCView,
    _Cfgpet_pos_level = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgpet_pos_level.JsonName = "pet_pos_level.json";
  var Cfgpet_pos_level = _Cfgpet_pos_level,
    _Cfgpet_skill = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgpet_skill.JsonName = "pet_skill.json";
  var Cfgpet_skill = _Cfgpet_skill,
    _UIYiShouYCDetailsView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YiShouYCDetails", this.name = "YiShouYCDetailsView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnSalvage.onClick(this, this.onClickAll, [this.btnSalvage]), this.btnReset.onClick(this, this.onClickAll, [this.btnReset]), this.btnShangZhen.onClick(this, this.onClickAll, [this.btnShangZhen]), this.openSubCom(this.btnUpgreat), this.btnUpgreat.onClick(this, this.onClickAll, [this.btnUpgreat]), this.openSubCom(this.redPoint), this.btnGoBattle.onClick(this, this.onClickAll, [this.btnGoBattle]), this.openSubCom(this.yishou_level), this.btnDai.onClick(this, this.onClickAll, [this.btnDai]), this.btn_arrow_l.onClick(this, this.onClickAll, [this.btn_arrow_l]), this.btn_arrow_r.onClick(this, this.onClickAll, [this.btn_arrow_r]), this.openSubCom(this.skillIcon), this.btnSkill.onClick(this, this.onClickAll, [this.btnSkill]), this.btnHybrid.onClick(this, this.onClickAll, [this.btnHybrid]), this.btnLock.onClick(this, this.onClickAll, [this.btnLock]), this.btn.onClick(this, this.onClickAll, [this.btn]), this.btnSharde.onClick(this, this.onClickAll, [this.btnSharde]), this.btnFollow.addClick(this, this.onClickAll, [this.btnFollow]), this.openSubCom(this.btnFollow), this.btnYuanSu.onClick(this, this.onClickAll, [this.btnYuanSu]), this.btnRename.onClick(this, this.onClickAll, [this.btnRename]), this.btnGrowth.onClick(this, this.onClickAll, [this.btnGrowth]), this.btn_help.onClick(this, this.onClickAll, [this.btn_help]), this.openSubCom(this.yishouTip), this.btnShareClose.onClick(this, this.onClickAll, [this.btnShareClose]), this.btnFriend.onClick(this, this.onClickAll, [this.btnFriend]), this.btnSept.onClick(this, this.onClickAll, [this.btnSept]), this.btnWorld.onClick(this, this.onClickAll, [this.btnWorld]), this.btnYiJie.onClick(this, this.onClickAll, [this.btnYiJie]), this.openSubCom(this.yuansuTips), this.openSubCom(this.skillTip), this.openSubCom(this.peiYuTips)
      }
    };
  _UIYiShouYCDetailsView.UID = "ui://d4evepomsx0y0", __decorateClass([UIController], _UIYiShouYCDetailsView.prototype, "c1", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnSalvage", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnReset", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnShangZhen", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnUpgreat", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "redPoint", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnGoBattle", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "loader", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "touch", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "yishou_level", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnDai", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btn_arrow_l", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btn_arrow_r", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "skillIcon", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnSkill", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "lock", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "unlock", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnHybrid", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnLock", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "imgQuality", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "txtQuality", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "txtHybridCount", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btn", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnSharde", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnFollow", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "img_yuansu", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "img_pinzhi_kuang", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnYuanSu", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnRename", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnGrowth", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "listEntry", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btn_help", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "imgIcon", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "txtGrowth", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "attrList", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "txtAtt", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "txtAttUp", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "goArrow", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "txtTips", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "yishouTip", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "bgPanel", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnShareClose", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnFriend", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnSept", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnWorld", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "btnYiJie", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "goShare", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "yuansuTips", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "skillTip", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "peiYuTips", 2), __decorateClass([UIProperty], _UIYiShouYCDetailsView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIYiShouYCDetailsView.prototype, "FX_star", 2);
  var UIYiShouYCDetailsView = _UIYiShouYCDetailsView,
    import_proto75 = __toESM(require_proto()),
    _Cfgpet_element_awake_level = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgpet_element_awake_level.JsonName = "pet_element_awake_level.json";
  var Cfgpet_element_awake_level = _Cfgpet_element_awake_level,
    _Cfgpet_hybrid_extra = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgpet_hybrid_extra.JsonName = "pet_hybrid_extra.json";
  var Cfgpet_hybrid_extra = _Cfgpet_hybrid_extra,
    _Cfgpet_pos_new_level = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgpet_pos_new_level.JsonName = "pet_pos_new_level.json";
  var Cfgpet_pos_new_level = _Cfgpet_pos_new_level,
    _UIYiShouPeiYuEndView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YiShouPeiYuEnd", this.name = "YiShouPeiYuEndView"
      }
      onInit() {
        this.openSubCom(this.item), this.openSubCom(this.btnGo), this.btnGo.onClick(this, this.onClickAll, [this.btnGo])
      }
    };
  _UIYiShouPeiYuEndView.UID = "ui://gmedwggcwv9v0", __decorateClass([UIProperty], _UIYiShouPeiYuEndView.prototype, "imgIcon", 2), __decorateClass([UIProperty], _UIYiShouPeiYuEndView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIYiShouPeiYuEndView.prototype, "item", 2), __decorateClass([UIProperty], _UIYiShouPeiYuEndView.prototype, "btnGo", 2), __decorateClass([UIProperty], _UIYiShouPeiYuEndView.prototype, "fixHeight", 2);
  var UIYiShouPeiYuEndView = _UIYiShouPeiYuEndView,
    YiShouPeiYuEndView = class extends UIYiShouPeiYuEndView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit()
      }
      onShow() {
        let t = this.args[0],
          e = Cfgpet_data.get(t.cfgid);
        this.txtName.text = ToolUtil.chinese(e.name), this.item.txtLv.text = t.dai.toString();
        let i = CfgitemBase.get(null == e ? void 0 : e.egg_appearance);
        this.setTexture(this.imgIcon, i.icon + "_500", "YiShouYC")
      }
      onClickAll(t) {
        t == this.btnGo && (this.close(), UIManager.inst.close(YiShouPeiYuView.UID), UIManager.inst.open(YiShouYCEnterView.UID, null, 1))
      }
    },
    import_proto74 = __toESM(require_proto()),
    _UISectHallView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Sect", this.name = "SectHallView"
      }
      onInit() {
        this.btnDonate.onClick(this, this.onClickAll, [this.btnDonate]), this.openSubCom(this.goRed), this.openSubCom(this.npc1), this.openSubCom(this.npc2), this.openSubCom(this.npc3), this.btn_sectPeople.addClick(this, this.onClickAll, [this.btn_sectPeople]), this.openSubCom(this.btn_sectPeople), this.openSubCom(this.btnPanel), this.btnPanel.onClick(this, this.onClickAll, [this.btnPanel]), this.openSubCom(this.playerInfo)
      }
    };
  _UISectHallView.UID = "ui://2ezy3h51wka120", __decorateClass([UIProperty], _UISectHallView.prototype, "btnDonate", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "goRed", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "topRight", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "npc1", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "npc2", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "npc3", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "btn_sectPeople", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "btnPanel", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "bottomRight", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "playerInfo", 2), __decorateClass([UIProperty], _UISectHallView.prototype, "topLeft", 2);
  var UISectHallView = _UISectHallView,
    _UISectDonateView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Sect", this.name = "SectDonateView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnFree), this.btnFree.onClick(this, this.onClickAll, [this.btnFree]), this.openSubCom(this.btnDetermine), this.btnDetermine.onClick(this, this.onClickAll, [this.btnDetermine])
      }
    };
  _UISectDonateView.UID = "ui://2ezy3h51f5f32y", __decorateClass([UIProperty], _UISectDonateView.prototype, "title", 2), __decorateClass([UIProperty], _UISectDonateView.prototype, "ItemList", 2), __decorateClass([UIProperty], _UISectDonateView.prototype, "txtNumber", 2), __decorateClass([UIProperty], _UISectDonateView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UISectDonateView.prototype, "btnFree", 2), __decorateClass([UIProperty], _UISectDonateView.prototype, "btnDetermine", 2), __decorateClass([UIProperty], _UISectDonateView.prototype, "fixHeight", 2);
  var UISectDonateView = _UISectDonateView,
    SectDonateView = class extends UISectDonateView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
