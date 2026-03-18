// Fragment: skill_system_e_L257086.js
// Lines: 257086-257252 of bundle-beautified.js
// Categories: Skill System
// Keywords: skill_id
// Hit lines: 257086, 257152

          const e = t.skill_id,
            i = CfgskillDecData.get(BattleHelper.getSkillId(e));
          if (i) {
            this.txtSkillName.text = ToolUtil.chinese(i.name), this.txtSkillDesc.text = SkillData.getSkillDesByCfg(e, i);
            const t = SkillHelper.getSkillLevel(e);
            this.skill_icon.setData(t, i.icon)
          }
        }
      }
    },
    QiLingInforView = class extends UIQiLingInforView {
      constructor() {
        super(), this._curModel = null, this._page = 0, this.maskType = 1, this.layer = ItemCtrl.inst.itemTipsLayer
      }
      onInit() {
        super.onInit()
      }
      onShow() {
        this._itemData = this.args[0], this._itemData && this.refreshView()
      }
      onClickAll(t) {
        t == this.btn_yulan ? UIManager.inst.open(QiLingInforYuLanView.UID, null, this._cfgql, this._wake) : t == this.btnLeft ? this.onLeft() : t == this.btnRight && this.onRight()
      }
      onDestroy() {
        this.dispatchEvent(MsgName.Item_Tips_Close), this.recycleModel()
      }
      refreshView() {
        if (this.setTexture(this.imgBg, "tips_img_pz_" + this._itemData.itemCfg.quality, "HeroDetailInfor"), this.setTexture(this.img_title_di, "fb_img_btd_" + this._itemData.itemCfg.quality, "MonsterInvade"), this.creatList(this.list_getItem, this.onSourceRender), this.refreshSource(), this._itemData.itemCfg.subtype == ItemSubType.Qiling.Item) this._cfgql = Cfgqiling_qiling.get({
          item_id: this._itemData.itemId
        })[0], this.refreshQL(0);
        else if (this._itemData.itemCfg.subtype == ItemSubType.Qiling.Wake) {
          const t = Cfgqiling_quality.get().find((t => {
            var e;
            return (null == (e = t.quality_item_id[0]) ? void 0 : e[0]) == this._itemData.itemId
          })).qiling_id;
          this._cfgWakes = Cfgqiling_quality.get({
            qiling_id: t
          }).filter((t => 0 != t.wake)), this.page = 0
        } else this.showType.selectedIndex = 1, this._cfgskin = Cfgqiling_skin.get({
          show_item: this._itemData.itemCfg.id
        })[0], this.list_getItem.y = 930, this._cfgskin && (this.txtMartialName.text = ToolUtil.chinese(this._itemData.itemCfg.name), this.loadModel(QiLingCtrl.inst.getUIModelInfo(this._cfgskin.id)), this.creatList(this.list_stats03, this.onAttrRender), this._attrs = this._cfgskin.attr, this.list_stats03.numItems = this._attrs.length, this.txtNo.visible = 0 == this._attrs.length)
      }
      recycleModel() {
        this._curModel && UIModelMgr.inst.recycle(this._curModel), this._curModel = null, this._modelPath = null
      }
      loadModel(t) {
        this._modelPath != t && (this.recycleModel(), this._curModel = QiLingCtrl.inst.loadModel(this.modelLoader, t, this.touch), this._modelPath = t)
      }
      refreshSource() {
        if (ItemCtrl.inst.checkItemHasSource(this._itemData.itemId)) {
          this._sourceArr = ItemCtrl.inst.getItemSourceForView(this._itemData.itemCfg.id);
          let t = this._sourceArr.length;
          this.list_getItem.numItems = t, this.list_getItem.scrollPane.touchEffect = !0, this.list_getItem.height = this._sourceArr.length <= 3 ? 140 * t : 450
        } else this.list_getItem.numItems = 0, this.list_getItem.height = 0
      }
      onSourceRender(t, e) {
        e.setData(this._sourceArr[t])
      }
      onAttrRender(t, e) {
        const i = this._attrs[t];
        e.txtAttr1.text = CfgUtil.getAttributeName(i[0]), e.txtVal1.text = CfgUtil.getAttributeValDesc(i[0], i[1], !0)
      }
      refreshQL(t) {
        this._wake = t, this.list_getItem.y = 1150, this.txtDesc.text = ToolUtil.chinese(this._itemData.itemCfg.desc), this.showType.selectedIndex = 0;
        const e = Cfgqiling_star.get(QiLingCtrl.inst.getQiLingStarKey(this._cfgql.id, t, 0));
        if (this.list_star.numItems = 5, e) {
          const t = e.skill_id,
            i = CfgskillDecData.get(BattleHelper.getSkillId(t));
          if (i) {
            this.txtSkillName.text = ToolUtil.chinese(i.name), this.txtSkillDesc.text = SkillData.getSkillDesByCfg(t, i);
            const e = SkillHelper.getSkillLevel(t);
            this.skill_icon.setData(e, i.icon)
          }
        }
        QiLingCtrl.inst.getQiLingShowAttrArr(this._cfgql.id, t, 0, 0).forEach(((t, e) => {
          0 == e ? (this.txtAttr1.text = t.name, this.txtVal1.text = t.valStr) : (this.txtAttr2.text = t.name, this.txtVal2.text = t.valStr)
        }));
        const i = Cfgqiling_quality.get({
            qiling_id: this._cfgql.id,
            wake: t
          })[0].skin,
          s = QiLingCtrl.inst.getUIModelInfo(i);
        this.txtMartialName.text = ToolUtil.chinese(this._itemData.itemCfg.name), this.loadModel(s)
      }
      get page() {
        return this._page
      }
      set page(t) {
        this._page = MathUtil.clamp(t, 0, this._cfgWakes.length - 1), this.refreshPage();
        const e = this._cfgWakes[this._page];
        this._cfgql = Cfgqiling_qiling.get(e.qiling_id), this.refreshQL(e.wake)
      }
      refreshPage() {
        this.btnRight.visible = this._page != this._cfgWakes.length - 1, this.btnLeft.visible = 0 != this._page
      }
      onRight() {
        this.page++
      }
      onLeft() {
        this.page--
      }
    },
    import_proto295 = __toESM(require_proto()),
    _RoleResCtrl = class t extends BaseCtrl {
      constructor() {
        super(), this._totalResMap = new Map, this._initResMap = new Map, this.init()
      }
      static get inst() {
        return null == t._instance && (t._instance = new t), t._instance
      }
      reset() {
        super.reset(), this._totalResMap.clear(), this._initResMap.clear()
      }
      init() {
        super.init()
      }
      registS2CHandler() {
        this.addS2CHandle("resource.RetAllResource", this.on_RetAllResource), this.addS2CHandle("resource.RetOneResource", this.on_RetOneResource), this.addS2CHandle("resource.RetResources", this.on_RetResources)
      }
      on_RetAllResource(t) {
        let [e] = this._getResMap(t.copyId, this._totalResMap), [i] = this._getResMap(t.copyId, this._initResMap);
        for (const s of t.resources) e.set(s.resId, s.resValue), i.set(s.resId, s.resValue), ItemObserverMgr.inst.addItemByCfg(CfgitemBase.get(s.resId), 2);
        ItemObserverMgr.inst.checkAll(), this.dispatchEvent(MsgName.Role_Refresh_Res)
      }
      on_RetOneResource(t) {
        this._refreshRes(t.copyId, t.resId, t.resValue), this.dispatchEvent(MsgName.Role_Refresh_Res)
      }
      on_RetResources(t) {
        for (const e of t.resList) this._refreshRes(e.copyId, e.resId, e.resValue);
        this.dispatchEvent(MsgName.Role_Refresh_Res)
      }
      _getResMap(t = 0, e) {
        let i = e.get(t),
          s = null == i;
        return s && (i = new Map, e.set(t, i)), [i, s]
      }
      _refreshRes(t, e, i) {
        let [s, o] = this._getResMap(t, this._totalResMap), [n, r] = this._getResMap(t, this._initResMap);
        s.set(e, i), n.set(e, i), ItemObserverMgr.inst.addItemByCfg(CfgitemBase.get(e), o ? 2 : 3), ItemObserverMgr.inst.checkAll()
      }
      GMSetNum(t, e) {
        this._refreshRes(0, t, e)
      }
      getResNum(t, e = 0) {
        if (!t) return 0;
        let [i] = this._getResMap(e, this._totalResMap), s = i.get(t);
        return null == s ? 0 : Math.floor(s)
      }
      isResType(t) {
        const e = CfgitemBase.get(t);
        return !!e && 1 == e.type
      }
    };
  _RoleResCtrl._instance = null;
  var RoleResCtrl = _RoleResCtrl,
    _UITianJiaoDaoTuInforView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "TianJiaoDaoTuInfor", this.name = "TianJiaoDaoTuInforView"
      }
      onInit() {
        this.openSubCom(this.btnUse), this.btnUse.onClick(this, this.onClickAll, [this.btnUse])
      }
    };
  _UITianJiaoDaoTuInforView.UID = "ui://rh4nctlmmvu20", __decorateClass([UIProperty], _UITianJiaoDaoTuInforView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UITianJiaoDaoTuInforView.prototype, "img_title_di", 2), __decorateClass([UIProperty], _UITianJiaoDaoTuInforView.prototype, "txtMartialName", 2), __decorateClass([UIProperty], _UITianJiaoDaoTuInforView.prototype, "listattr", 2), __decorateClass([UIProperty], _UITianJiaoDaoTuInforView.prototype, "txt_desc", 2), __decorateClass([UIProperty], _UITianJiaoDaoTuInforView.prototype, "sourceList", 2), __decorateClass([UIProperty], _UITianJiaoDaoTuInforView.prototype, "btnUse", 2), __decorateClass([UIProperty], _UITianJiaoDaoTuInforView.prototype, "fixHeight", 2);
  var UITianJiaoDaoTuInforView = _UITianJiaoDaoTuInforView,
    TianJiaoDaoTuInforView = class extends UITianJiaoDaoTuInforView {
      constructor() {
