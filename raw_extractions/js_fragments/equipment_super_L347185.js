// Fragment: equipment_super_L347185.js
// Lines: 347185-347285 of bundle-beautified.js
// Categories: Equipment
// Keywords: mount
// Hit lines: 347185

        super(), this.uid = t.UID, this.pkgName = "Mount", this.name = "MountView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.toolBar)
      }
    };
  _UIMountView.UID = "ui://5g2iuxtbfp1g0", __decorateClass([UIController], _UIMountView.prototype, "stage", 2), __decorateClass([UIProperty], _UIMountView.prototype, "imgPinZhiDi", 2), __decorateClass([UIProperty], _UIMountView.prototype, "starRoot", 2), __decorateClass([UIProperty], _UIMountView.prototype, "transRoot", 2), __decorateClass([UIProperty], _UIMountView.prototype, "extractRoot", 2), __decorateClass([UIProperty], _UIMountView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIMountView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIMountView.prototype, "toolBar", 2);
  var UIMountView = _UIMountView,
    import_proto408 = __toESM(require_proto()),
    _Cfgparking_sword_set = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgparking_sword_set.JsonName = "parking_sword_set.json";
  var Cfgparking_sword_set = _Cfgparking_sword_set,
    _UIParkingSpotManageFeeView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "ParkingSpotManage", this.name = "ParkingSpotManageFeeView"
      }
      onInit() {
        this.openSubCom(this.img_di), this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.btnArrow1.onClick(this, this.onClickAll, [this.btnArrow1]), this.btnArrow2.onClick(this, this.onClickAll, [this.btnArrow2]), this.btn_jlyl.onClick(this, this.onClickAll, [this.btn_jlyl]), this.openSubCom(this.btnclose), this.btnclose.onClick(this, this.onClickAll, [this.btnclose]), this.btn_zhanshi.onClick(this, this.onClickAll, [this.btn_zhanshi]), this.btn_cut.onClick(this, this.onClickAll, [this.btn_cut]), this.btn_add.onClick(this, this.onClickAll, [this.btn_add]), this.btn_addmax.onClick(this, this.onClickAll, [this.btn_addmax]), this.openSubCom(this.btn_get), this.btn_get.onClick(this, this.onClickAll, [this.btn_get]), this.openSubCom(this.btn_unLock), this.btn_unLock.onClick(this, this.onClickAll, [this.btn_unLock]), this.btnGo.onClick(this, this.onClickAll, [this.btnGo])
      }
    };
  _UIParkingSpotManageFeeView.UID = "ui://v9yantnxq8cz1", __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "img_di", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "imgPinZhiDi", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "imgDi", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btnArrow1", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btnArrow2", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btn_jlyl", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btnclose", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btn_zhanshi", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txt_time", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "moneyRate", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txt_dengji", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "bar", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txt_levelnumb", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "img_icon", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txt_numb", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txt_level1", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txt_level2", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "list_attr", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "txtNumber", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btn_cut", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btn_add", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btn_addmax", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "goNumb", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btn_get", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "skinList", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btn_unLock", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "lvEff", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "btnGo", 2), __decorateClass([UIProperty], _UIParkingSpotManageFeeView.prototype, "fixHeight", 2);
  var UIParkingSpotManageFeeView = _UIParkingSpotManageFeeView,
    _UIParkingSpotAwardView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "ParkingSpotAward", this.name = "ParkingSpotAwardView"
      }
      onInit() {
        this.openSubCom(this.img_di), this.openSubCom(this.btnclose), this.btnclose.onClick(this, this.onClickAll, [this.btnclose]), this.btnArrow1.onClick(this, this.onClickAll, [this.btnArrow1]), this.btnArrow2.onClick(this, this.onClickAll, [this.btnArrow2])
      }
    };
  _UIParkingSpotAwardView.UID = "ui://jmny4nfuq8cz16", __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "img_di", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "btnclose", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "imgPinZhiDi", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "btnArrow1", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "btnArrow2", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "imgDi", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "listAward", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "skinList", 2), __decorateClass([UIProperty], _UIParkingSpotAwardView.prototype, "fixHight", 2);
  var UIParkingSpotAwardView = _UIParkingSpotAwardView,
    ParkingSpotAwardView = class extends UIParkingSpotAwardView {
      constructor() {
        super(), this.selectIndex = 0, this.layer = "Pop", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.ctrl = ParkingSpotCtrl.inst, this.cfgs = this.ctrl.getSkinCfg(), this.creatList(this.listAward, this.onItemRenderer), this.creatList(this.skinList, this.renderSkinList, null, this.onSkinClick)
      }
      onItemRenderer(t, e) {
        let i = this.awards[t];
        e.setData(i[0], i[1])
      }
      renderSkinList(t, e) {
        e.setData(this.cfgs[t], this.selectIndex == t, t, this.ownerId)
      }
      onSkinClick(t, e) {
        this.onSelectMount(t)
      }
      onEvent() {
        this.addEvent(MsgName.Mount_Shape_Update, this.onMountShapUpdate)
      }
      onMountShapUpdate() {
        MountModel.inst.canShowUpEffect = !0, this.onSelectMount(this.selectIndex), MountModel.inst.canShowUpEffect = !1
      }
      onShow() {
        var t, e;
        let i = null != (t = this.args[0]) ? t : MountModel.inst.getDefualtSelectSkinIndex();
        this.ownerId = null != (e = this.args[1]) ? e : 0, this.onSelectMount(i, !1)
      }
      onSelectMount(t, e = !0) {
        this.selectIndex = t, this.curCfg = this.cfgs[this.selectIndex], null != this.curCfg && (this.dispatchEvent(MsgName.Mount_Shape_Select, this.curCfg.id), this.refreshInfo(), this.refreshModel(), this.refreshSkinList(e))
      }
      refreshModel() {
        let t = this.ctrl.getShapeImageCfg(this.curCfg.id),
          e = StringUtil.format("resourcesLib/Character/{0}/{1}_UI.lh", t.model, t.model);
        this.modelPath != e && (this.modelPath = e, this.model && (UIModelMgr.inst.recycle(this.model), this.model = null), this.model = this.LoadUIModel(this.modelLoader, e, (e => {
          var i;
          const s = e.sprite3D;
          null == (i = s.getComponent(Laya.Animator)) || i.play("stand"), UIModelMgr.inst.refTransfrom(s, t.camera)
        }), null, !1))
      }
      refreshInfo() {
        this.btnArrow1.visible = 0 != this.selectIndex, this.btnArrow2.visible = this.selectIndex != this.cfgs.length - 1;
        const t = this.ctrl.getShapeImageCfg(this.curCfg.id);
        this.txtName.text = ToolUtil.chinese(null == t ? void 0 : t.name);
        let e = this.curCfg.id,
          i = Cfgparking_sword_set.get(e).drop_id,
          s = Cfgdropdata.get(i);
        this.awards = s.show, this.listAward.numItems = this.awards.length;
        const o = CfgitemBase.get(null == t ? void 0 : t.item);
        this.setTexture(this.imgPinZhiDi, "fb_img_beijing_" + o.quality, "TreasureDetails"), this.setImage(this.imgDi, "fb_img_btd_" + o.quality, "Common")
      }
      refreshSkinList(t) {
        this.skinList.numItems = this.cfgs.length, this.skinList.stopDrag(), this.skinList.scrollPane.setPosX(109 * (this.selectIndex - 2) - 12, t)
      }
      onClickBtnPre() {
        let t = Math.max(0, this.selectIndex - 1);
        this.onSelectMount(t)
      }
      onClickBtnNext() {
        let t = Math.min(this.cfgs.length - 1, this.selectIndex + 1);
        this.onSelectMount(t)
      }
      onClickAll(t) {
        t == this.btnclose ? this.close() : t == this.btnArrow1 ? this.onClickBtnPre() : t == this.btnArrow2 && this.onClickBtnNext()
      }
