// Fragment: equipment_super_L346651.js
// Lines: 346651-346851 of bundle-beautified.js
// Categories: Equipment
// Keywords: mount
// Hit lines: 346651, 346661, 346719, 346754

        super(), this.uid = t.UID, this.pkgName = "Mount", this.name = "MountChangeView"
      }
      onInit() {
        this.btnUseSkill.onClick(this, this.onClickAll, [this.btnUseSkill]), this.openSubCom(this.skillDesc), this.openSubCom(this.pifuDesc), this.openSubCom(this.mountAtrr), this.openSubCom(this.btnPreview), this.btnPreview.onClick(this, this.onClickAll, [this.btnPreview]), this.btnArrow1.onClick(this, this.onClickAll, [this.btnArrow1]), this.btnArrow2.onClick(this, this.onClickAll, [this.btnArrow2]), this.openSubCom(this.btnUp), this.btnUp.onClick(this, this.onClickAll, [this.btnUp]), this.btn_eff_yulan.onClick(this, this.onClickAll, [this.btn_eff_yulan]), this.btnSelect.addClick(this, this.onClickAll, [this.btnSelect]), this.openSubCom(this.btnSelect), this.btnTianci.onClick(this, this.onClickAll, [this.btnTianci]), this.openSubCom(this.redPointTianCi)
      }
    };
  _UIMountChangeView.UID = "ui://5g2iuxtbfp1gw", __decorateClass([UIController], _UIMountChangeView.prototype, "isFull", 2), __decorateClass([UIController], _UIMountChangeView.prototype, "EWaiSkill", 2), __decorateClass([UIController], _UIMountChangeView.prototype, "c1", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "imgPinZhiDi", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "StarList1", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "skinList", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "imgDi", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "txtFull", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "goFull", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "btnUseSkill", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "skillDesc", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "goHasUse", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "pifuDesc", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "tianciLayer", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "mountAtrr", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "txtEffect", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "txtUnLock", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "txtXingJi2", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "go1", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "attrLayer", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "btnPreview", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "btnArrow1", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "btnArrow2", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "btnUp", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "btn_eff_yulan", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "btnSelect", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "btnTianci", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "imgTagBg", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "txtEmpty", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "tianciTag", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "redPointTianCi", 2), __decorateClass([UIProperty], _UIMountChangeView.prototype, "fixHeight", 2);
  var UIMountChangeView = _UIMountChangeView,
    UIMountItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Mount"
      }
      onConstruct() {
        this.openSubCom(this.goLock), this.openSubCom(this.rp_skin), this.onInit(), this.onEvent()
      }
    };
  UIMountItem.UID = "ui://5g2iuxtbfp1gx", __decorateClass([UIController], UIMountItem.prototype, "button", 2), __decorateClass([UIProperty], UIMountItem.prototype, "imgBg", 2), __decorateClass([UIProperty], UIMountItem.prototype, "imgIcon", 2), __decorateClass([UIProperty], UIMountItem.prototype, "imgLock", 2), __decorateClass([UIProperty], UIMountItem.prototype, "imgQuality", 2), __decorateClass([UIProperty], UIMountItem.prototype, "goLock", 2), __decorateClass([UIProperty], UIMountItem.prototype, "select", 2), __decorateClass([UIProperty], UIMountItem.prototype, "imgShape", 2), __decorateClass([UIProperty], UIMountItem.prototype, "imgSkill", 2), __decorateClass([UIProperty], UIMountItem.prototype, "rp_skin", 2);
  var MountItem = class extends UIMountItem {
      constructor() {
        super(), this._qulatityUrlPrefix = "common_img_pinzhi0"
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onEvent() {
        this.addEvent(MsgName.Mount_Shape_Select, this.refreshSelect)
      }
      onDestroy() {
        null != this.itemId && ItemObserverUtil.removeItemIdObserver(this.itemId, this)
      }
      setData(t, e) {
        this.cfg = t, this.setSelectState(e);
        let i = null == MountModel.inst.shape[t.id] || null == MountModel.inst.shape[t.id];
        this.goLock.visible = i, this.imgLock.visible = i, this.imgSkill.visible = MountModel.inst.skill_shape_id == t.id, this.imgShape.visible = MountModel.inst.shape_id == t.id && 2 == MountModel.inst.shape_type;
        let s = Cfgswordimage.get(null == t ? void 0 : t.image),
          o = null == s ? void 0 : s.item;
        if (o) {
          let t = CfgitemBase.get(o);
          this.setTexture(this.imgIcon, t.icon, "ItemIcon"), this.setImage(this.imgBg, StringUtil.format("{0}{1}", this._qulatityUrlPrefix, t.quality), "Common")
        }
        let n = MountModel.inst.shape[t.id] || 0;
        (null != MountModel.inst.shape[t.id] || null != MountModel.inst.shape[t.id]) && (n += 1), (null == s ? void 0 : s.frame) ? (this.imgQuality.visible = !0, this.setImage(this.imgQuality, null == s ? void 0 : s.frame, "Common")) : this.imgQuality.visible = !1, n >= this.cfg.max_star ? this.refreshRedPoint() : (this.itemId = t.cost[n][0], ItemObserverUtil.addItemIdObserver(this.itemId, this, (() => {
          this.refreshRedPoint()
        }), !0));
        let r = MountModel.inst.getSkinExt(this.cfg.id);
        this.cfg.skin_cost.length > 0 && (!r || 0 == (null == r ? void 0 : r.skinList.length)) && ItemObserverUtil.addItemIdObserver(this.cfg.skin_cost[0][0], this, (() => {
          this.refreshRedPoint()
        }), !0)
      }
      refreshRedPoint() {
        let t = MountModel.inst.shape[this.cfg.id] || 0,
          e = !(t >= this.cfg.max_star) && ItemCtrl.inst.getItemNum(this.cfg.cost[t + 1][0]) >= this.cfg.cost[t + 1][1],
          i = MountCtrl.inst.checkSkinRedP(this.cfg);
        this.rp_skin.setDotVisible(e || i)
      }
      refreshSelect(t) {
        var e;
        this.setSelectState((null == (e = this.cfg) ? void 0 : e.id) == t)
      }
      setSelectState(t) {
        this.select.visible = t;
        let e = t ? 1.1 : 1;
        this.setScale(e, e)
      }
    },
    _UIMountPreviewView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Mount", this.name = "MountPreviewView"
      }
      onInit() {
        this.openSubCom(this.btnCloseTip), this.btnCloseTip.onClick(this, this.onClickAll, [this.btnCloseTip])
      }
    };
  _UIMountPreviewView.UID = "ui://5g2iuxtbctq8le", __decorateClass([UIProperty], _UIMountPreviewView.prototype, "btnCloseTip", 2), __decorateClass([UIProperty], _UIMountPreviewView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIMountPreviewView.prototype, "txtContent1", 2), __decorateClass([UIProperty], _UIMountPreviewView.prototype, "txtContent2", 2), __decorateClass([UIProperty], _UIMountPreviewView.prototype, "StarList2", 2), __decorateClass([UIProperty], _UIMountPreviewView.prototype, "fixHeight", 2);
  var UIMountPreviewView = _UIMountPreviewView,
    MountPreviewView = class extends UIMountPreviewView {
      constructor() {
        super(), this.maskType = 1, this.layer = "Pop"
      }
      onInit() {
        super.onInit(), this.creatList(this.StarList2, this.renderStar2List, null, null, !1)
      }
      onClickAll(t) {
        this.btnCloseTip
      }
      renderStar2List(t, e) {
        let i = e;
        this.setImage(i.imgIcon, MountCtrl.inst.getStarImgName(this.nextStar, t + 1), "Common")
      }
      onShow() {
        let t, e;
        this.curCfg = this.args[0], this.curStar = MountModel.inst.shape[this.curCfg.id] || 0;
        for (const e of this.curCfg.skill_new) this.curStar >= e[0] && (t = e[1]);
        for (const t of this.curCfg.skill_new)
          if (this.curStar < t[0]) {
            e = t[1], this.nextStar = t[0];
            break
          } null != this.nextStar && (this.StarList2.numItems = 5, this.txtContent1.text = SkillData.getSkillDesc(t), this.txtContent2.text = SkillData.getSkillDesc(e))
      }
    },
    _UIMountTianCiView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Mount", this.name = "MountTianCiView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnUp), this.btnUp.onClick(this, this.onClickAll, [this.btnUp]), this.btnChuan.onClick(this, this.onClickAll, [this.btnChuan]), this.btnXieXia.onClick(this, this.onClickAll, [this.btnXieXia])
      }
    };
  _UIMountTianCiView.UID = "ui://5g2iuxtbjvr7ut4", __decorateClass([UIController], _UIMountTianCiView.prototype, "c1", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "imgPinZhiDi", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "imgDi", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "txt_buff", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "goHas", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "btnUp", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "btnChuan", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "btnXieXia", 2), __decorateClass([UIProperty], _UIMountTianCiView.prototype, "fixHeight", 2);
  var UIMountTianCiView = _UIMountTianCiView,
    MountTianCiView = class extends UIMountTianCiView {
      constructor() {
        super(), this.layer = "Pop", this.maskType = 1
      }
      onInit() {
        super.onInit()
      }
      onEvent() {
        this.addEvent(MsgName.Mount_Shape_Update, this.onShow)
      }
      onShow() {
        var t;
        if (this.curShapeCfg = this.args[0], this.curImgCfg = Cfgswordimage.get(this.curShapeCfg.skin_id), this.txtName.text = ToolUtil.chinese(this.curImgCfg.name), this.curShapeCfg.skin_attr.length > 0) {
          let [t, e] = this.curShapeCfg.skin_attr[0], i = Cfgattribute.get(t);
          this.txt_buff.text = ToolUtil.chinese(null == i ? void 0 : i.abbr_c_attribute) + "+" + StringUtil.attrNumber(t, Math.abs(e))
        }
        let e = MountModel.inst.getSkinExt(this.curShapeCfg.id);
        if (MountModel.inst.shape_id == this.curShapeCfg.id && (null == e ? void 0 : e.skinId) == this.curShapeCfg.skin_id ? this.c1.selectedIndex = 2 : (null == e ? void 0 : e.skinList) && e.skinList.includes(this.curShapeCfg.skin_id) ? this.c1.selectedIndex = 1 : this.c1.selectedIndex = 0, this.curShapeCfg.skin_cost.length > 0) {
          let [t, e] = this.curShapeCfg.skin_cost[0];
          this.btnUp.setItem(t, e, !0, !0)
        }
        const i = CfgitemBase.get(null == (t = this.curImgCfg) ? void 0 : t.item);
        this.setTexture(this.imgPinZhiDi, "fb_img_beijing_" + i.quality, "TreasureDetails"), this.setImage(this.imgDi, "fb_img_btd_" + i.quality, "Common"), this.btnUp.goRed.setDotVisible(MountCtrl.inst.checkSkinRedP(this.curShapeCfg)), this.refreshModel()
      }
      refreshModel() {
        let t = StringUtil.format("resourcesLib/Character/{0}/{1}_UI.lh", this.curImgCfg.model, this.curImgCfg.model);
        this.modelPath != t && (this.modelPath = t, this.model && (UIModelMgr.inst.recycle(this.model), this.model = null), this.model = this.LoadUIModel(this.modelLoader, t, (t => {
          var e;
          const i = t.sprite3D;
          null == (e = i.getComponent(Laya.Animator)) || e.play("stand"), UIModelMgr.inst.refTransfrom(i, this.curImgCfg.camera)
        }), null, !1))
      }
      onHide() {
        this.model && (UIModelMgr.inst.recycle(this.model), this.model = null)
      }
      onDestroy() {
        UIModelMgr.inst.recycle(this.model), this.model = null
      }
      onClickAll(t) {
        t == this.btnClose ? this.close() : t == this.btnUp ? MountModel.inst.isSkinActive(this.curShapeCfg.id) ? this.btnUp.isEnough ? MountCtrl.inst.ReqAddShapeSkin(this.curShapeCfg.id) : ItemCtrl.inst.openSourceView(this.btnUp.itemId) : UIManager.inst.openMsg(ToolUtil.chinese(4487)) : t == this.btnChuan ? MountCtrl.inst.ReqWearSkin(this.curShapeCfg.id, this.curShapeCfg.skin_id) : t == this.btnXieXia && MountCtrl.inst.ReqWearSkin(this.curShapeCfg.id, 0)
      }
    },
    MountChangeView = class extends UIMountChangeView {
      constructor() {
        super(), this.selectIndex = 0, this.cfgs = [], this.skillIdData = [], this.layer = "Pop"
      }
      onInit() {
        super.onInit(), this.creatList(this.StarList1, this.renderStarList, null, null, !1), this.creatList(this.skinList, this.renderSkinList, null, this.onSkinClick), this.cfgs = MountModel.inst.getSkinCfg()
      }
      onEvent() {
        this.addEvent(MsgName.Mount_Shape_Update, this.onMountShapUpdate)
      }
      onShow() {
        this.btnPreview.txtLock.text = ToolUtil.chinese(3559)
      }
      onHide() {
        this.model && (UIModelMgr.inst.recycle(this.model), this.model = null)
      }
      onDestroy() {
        ItemObserverUtil.removeItemIdObserver(this.itemId, this), UIModelMgr.inst.recycle(this.model), this.model = null
      }
      refreshView() {
        let t = MountModel.inst.getDefualtSelectSkinIndex();
        this.onSelectMount(t, !1)
      }
      onMountShapUpdate() {
        MountModel.inst.canShowUpEffect = !0, this.onSelectMount(this.selectIndex), MountModel.inst.canShowUpEffect = !1
      }
      getImgCfg() {
        let t = MountModel.inst.getSkinExt(this.curCfg.id);
        return (null == t ? void 0 : t.skinId) == this.curCfg.skin_id ? Cfgswordimage.get(this.curCfg.skin_id) : Cfgswordimage.get(this.curCfg.image)
      }
      onSelectMount(t, e = !0) {
        this.selectIndex = t, this.curCfg = this.cfgs[this.selectIndex], null != this.curCfg && (this.curStar = MountModel.inst.shape[this.curCfg.id] || 0, this.dispatchEvent(MsgName.Mount_Shape_Select, this.curCfg.id), this.refreshInfo(), this.refreshModel(), this.refreshEffect(), this.refreshRes(), this.refreshSkinList(e), this.refreshTianCiSkin())
      }
      refreshInfo() {
        this.btnArrow1.visible = 0 != this.selectIndex, this.btnArrow2.visible = this.selectIndex != this.cfgs.length - 1, this.StarList1.numItems = 5, this.isActive = MountModel.inst.isSkinActive(this.curCfg.id);
        let t, e = MountModel.inst.shape[this.curCfg.id] || 0;
        this.isMaxStar = e == this.curCfg.max_star, this.isFull.selectedIndex = this.isMaxStar ? 1 : 0;
        for (const e of this.curCfg.skill_new) this.curStar >= e[0] && (t = e[1]);
        this.skillDesc.txtAttrName.text = SkillData.getSkillDesc(t), this.txtUnLock.text = this.isMaxStar ? "" : e + 1 + ToolUtil.chinese(1928), this.btnUseSkill.title = this.isActive ? ToolUtil.chinese(1929) : ToolUtil.chinese(1930), this.btnUseSkill.grayed = !this.isActive, this.btnUseSkill.touchable = this.isActive;
        let i = MountModel.inst.skill_shape_id == this.curCfg.id;
        this.EWaiSkill.selectedIndex = i ? 1 : 0;
        let s = MountModel.inst.isSkinSelect(this.curCfg.id);
        this.btnSelect.c1.selectedIndex = s ? 1 : 0, this.btnSelect.grayed = !this.isActive, this.btnSelect.touchable = this.isActive, this.btnPreview.visible = !this.isMaxStar
      }
      renderStarList(t, e) {
        let i = e,
          s = MountModel.inst.shape[this.curCfg.id] || 0;
        this.setImage(i.imgIcon, MountCtrl.inst.getStarImgName(s, t + 1), "Common")
