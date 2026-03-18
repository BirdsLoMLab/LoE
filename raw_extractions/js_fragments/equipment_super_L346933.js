// Fragment: equipment_super_L346933.js
// Lines: 346933-347133 of bundle-beautified.js
// Categories: Equipment
// Keywords: mount
// Hit lines: 346933, 346943, 346985, 347052, 347062

        super(), this.uid = t.UID, this.pkgName = "Mount", this.name = "MountExtractView"
      }
      onInit() {
        this.btn_jin.addClick(this, this.onClickAll, [this.btn_jin]), this.openSubCom(this.btn_jin), this.btn_mu.addClick(this, this.onClickAll, [this.btn_mu]), this.openSubCom(this.btn_mu), this.btn_shui.addClick(this, this.onClickAll, [this.btn_shui]), this.openSubCom(this.btn_shui), this.btn_huo.addClick(this, this.onClickAll, [this.btn_huo]), this.openSubCom(this.btn_huo), this.btn_tu.addClick(this, this.onClickAll, [this.btn_tu]), this.openSubCom(this.btn_tu), this.btn_stats.onClick(this, this.onClickAll, [this.btn_stats]), this.openSubCom(this.btn_cuiling), this.btn_cuiling.onClick(this, this.onClickAll, [this.btn_cuiling])
      }
    };
  _UIMountExtractView.UID = "ui://5g2iuxtbrt1ulf", __decorateClass([UIProperty], _UIMountExtractView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "btn_jin", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "btn_mu", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "btn_shui", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "btn_huo", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "btn_tu", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "btn_stats", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "title", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "listAttr", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "txtFull", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "goFull", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "txtCurLv", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "txtNextLv", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "txtDesc", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "btn_cuiling", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "list_goods", 2), __decorateClass([UIProperty], _UIMountExtractView.prototype, "fixHeight", 2);
  var UIMountExtractView = _UIMountExtractView,
    UIMountAttr = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Mount"
      }
      onConstruct() {
        this.openSubCom(this.goEffect), this.onInit(), this.onEvent()
      }
    };
  UIMountAttr.UID = "ui://5g2iuxtbfp1go", __decorateClass([UIController], UIMountAttr.prototype, "c1", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "txtAttrName", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "txtAttr", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "goArrow", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "txtAttr02", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "txtAttrName_tianzi", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "txtAttr_tianzi", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "txtAttr_tianzi02", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "tianzi", 2), __decorateClass([UIProperty], UIMountAttr.prototype, "goEffect", 2);
  var MountAttr = class extends UIMountAttr {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t, e) {
        const i = t[0];
        let s = Cfgattribute.get(i);
        const o = i == TianJiaoDaoTuCtrl.inst.getAttrId();
        this.c1.selectedIndex = o ? 1 : 0;
        const n = ToolUtil.chinese(s.abbr_c_attribute),
          r = "+" + StringUtil.attrNumber(t[0], t[1]);
        let a;
        if (this.txtAttrName.text = n, this.txtAttr.text = r, MountModel.inst.canShowUpEffect && null != this.lastValue && null != this.lastAttr && this.lastValue != t[1] && this.lastAttr == t[0] && (this.goEffect.visible = !0, this.goEffect.t0.play()), this.lastAttr = t[0], this.lastValue = t[1], null != e) {
          a = "+" + StringUtil.attrNumber(e[0], e[1]);
          let i = e[1] > t[1] ? "#30772E" : "#7E92A6";
          this.txtAttr02.text = StringUtil.format("[color={0}]{1}[/color]", i, a), this.goArrow.visible = !0
        } else a = "", this.txtAttr02.text = a, this.goArrow.visible = !1;
        o && (this.txtAttrName_tianzi.text = n, this.txtAttr_tianzi.text = r, this.txtAttr_tianzi02.text = a)
      }
    },
    MountExtractView = class extends UIMountExtractView {
      constructor() {
        super(), this.selectIndex = 0, this.nameStr = [ToolUtil.chinese(1937), ToolUtil.chinese(1938), ToolUtil.chinese(1939), ToolUtil.chinese(1940), ToolUtil.chinese(1941)], this.layer = "Pop"
      }
      onInit() {
        super.onInit(), this.creatList(this.list_goods, this.renderItemList), this.creatList(this.listAttr, this.renderAttrList)
      }
      onEvent() {
        this.addEvent(MsgName.Mount_Quech_Update, this.refreshView), this.addEvent(MsgName.Player_MapData_Refresh, this.loadSwordModel)
      }
      onShow() {
        this.setTexture(this.imgBg, "fj_bg_3", "Mount")
      }
      onDestroy() {
        UIModelMgr.inst.recycle(this.model), this.model = null
      }
      onClickAll(t) {
        t == this.btn_jin ? this.selectBtn(0) : t == this.btn_mu ? this.selectBtn(1) : t == this.btn_shui ? this.selectBtn(2) : t == this.btn_huo ? this.selectBtn(3) : t == this.btn_tu ? this.selectBtn(4) : t == this.btn_stats ? this.showAttrTips() : t == this.btn_cuiling && this.onClickBtn()
      }
      loadSwordModel() {
        let t = UnitHelper.getMyUnit();
        if (null == t) return;
        let e = Cfgswordimage.get(t.unitInfo.serverData.showdata.flySword);
        if (null == e) return;
        let i = StringUtil.format("resourcesLib/Character/{0}/{1}_UI.lh", e.model, e.model);
        this.modelPath != i && (this.modelPath = i, this.model && UIModelMgr.inst.recycle(this.model), this.model = this.LoadUIModel(this.modelLoader, i, (() => {
          var t;
          let i = e.camera[0].split(","),
            s = e.camera[1].split(","),
            o = e.camera[2].split(",");
          null == (t = this.model.sprite3D.getComponent(Laya.Animator)) || t.play("stand"), this.model.sprite3D.transform.localPosition = new Laya.Vector3(Number(i[0]), Number(i[1]), Number(i[2])), this.model.sprite3D.transform.rotationEuler = new Laya.Vector3(Number(s[0]), Number(s[1]), Number(s[2])), this.model.sprite3D.transform.localScale = new Laya.Vector3(Number(o[0]), Number(o[1]), Number(o[2]))
        }), null, !1))
      }
      refreshView(t) {
        this.loadSwordModel();
        let e = MountCtrl.inst.geyExtractLevel(1);
        this.btn_jin.text = StringUtil.format(ToolUtil.chinese(1942), e), this.btn_jin.goRed.setDotVisible(MountCtrl.inst.checkCanUpExtral(1, e));
        let i = MountCtrl.inst.geyExtractLevel(2);
        this.btn_mu.text = StringUtil.format(ToolUtil.chinese(1942), i), this.btn_mu.goRed.setDotVisible(MountCtrl.inst.checkCanUpExtral(2, i));
        let s = MountCtrl.inst.geyExtractLevel(3);
        this.btn_shui.text = StringUtil.format(ToolUtil.chinese(1942), s), this.btn_shui.goRed.setDotVisible(MountCtrl.inst.checkCanUpExtral(3, s));
        let o = MountCtrl.inst.geyExtractLevel(4);
        this.btn_huo.text = StringUtil.format(ToolUtil.chinese(1942), o), this.btn_huo.goRed.setDotVisible(MountCtrl.inst.checkCanUpExtral(4, o));
        let n = MountCtrl.inst.geyExtractLevel(5);
        this.btn_tu.text = StringUtil.format(ToolUtil.chinese(1942), n), this.btn_tu.goRed.setDotVisible(MountCtrl.inst.checkCanUpExtral(5, n)), t ? this.selectBtn(MountCtrl.inst.getCanUpExtralIndex()) : this.selectBtn(this.selectIndex)
      }
      refreshAttr() {
        this.txtDesc.text = StringUtil.format(ToolUtil.chinese(1943), this.nameStr[this.selectIndex]);
        let t = this.selectIndex + 1,
          e = MountCtrl.inst.geyExtractLevel(t);
        this.cfg = MountCtrl.inst.getExtralCfg(t, e), this.nextCfg = MountCtrl.inst.getExtralCfg(t, e + 1), this.isMaxLv = null == this.nextCfg, this.goFull.visible = this.isMaxLv, this.btn_cuiling.visible = !this.isMaxLv, this.txtNextLv.text = this.isMaxLv ? "" : StringUtil.format(ToolUtil.chinese(1942), e + 1), this.txtCurLv.text = StringUtil.format(ToolUtil.chinese(1942), e), this.list_goods.numItems = this.isMaxLv ? 0 : this.nextCfg.cost.length, this.listAttr.numItems = null == this.cfg ? this.nextCfg.attr.length : this.cfg.attr.length
      }
      renderItemList(t, e) {
        let i = e,
          s = ItemUtil.createDataById(this.nextCfg.cost[t][0], this.nextCfg.cost[t][1]);
        i.setData(s, !0, !1), i.showNeedAndOwnTxt(this.nextCfg.cost[t][1])
      }
      selectBtn(t) {
        this.selectIndex = t, this.btn_jin.goSelect.c1.selectedIndex = 0 == t ? 1 : 0, this.btn_mu.goSelect.c1.selectedIndex = 1 == t ? 1 : 0, this.btn_shui.goSelect.c1.selectedIndex = 2 == t ? 1 : 0, this.btn_huo.goSelect.c1.selectedIndex = 3 == t ? 1 : 0, this.btn_tu.goSelect.c1.selectedIndex = 4 == t ? 1 : 0, MountModel.inst.canShowUpEffect = !0, this.refreshAttr(), MountModel.inst.canShowUpEffect = !1
      }
      renderAttrList(t, e) {
        if (e instanceof MountAttr)
          if (this.isMaxLv) e.setData(this.cfg.attr[t], null);
          else {
            let i = [this.nextCfg.attr[t][0], 0],
              s = null == this.cfg ? i : this.cfg.attr[t];
            e.setData(s, this.isMaxLv ? null : this.nextCfg.attr[t])
          }
      }
      showAttrTips() {
        UIManager.inst.open(HeroFetterStatsView.UID, null, MountCtrl.inst.getExtralAttr())
      }
      onClickBtn() {
        MountCtrl.inst.ReqQuench(this.selectIndex + 1)
      }
    },
    _UIMountStarUpView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Mount", this.name = "MountStarUpView"
      }
      onInit() {
        this.openSubCom(this.lockIcon), this.btnSelect.addClick(this, this.onClickAll, [this.btnSelect]), this.openSubCom(this.btnSelect), this.openSubCom(this.MountStarUp), this.btnArrow1.onClick(this, this.onClickAll, [this.btnArrow1]), this.btnArrow2.onClick(this, this.onClickAll, [this.btnArrow2]), this.openSubCom(this.LevelDengjie), this.openSubCom(this.btnPut1), this.btnPut1.onClick(this, this.onClickAll, [this.btnPut1]), this.openSubCom(this.btnPut2), this.btnPut2.onClick(this, this.onClickAll, [this.btnPut2]), this.openSubCom(this.goStarUp)
      }
    };
  _UIMountStarUpView.UID = "ui://5g2iuxtbq9ytusm", __decorateClass([UIProperty], _UIMountStarUpView.prototype, "imgPinZhiDi", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "LockMask", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "lockIcon", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtLock", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "goLock", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "imgDi", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtStage", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "btnSelect", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtStage1", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtStage2", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "MountStarUp", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtXingJi1", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "attr1", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtStar", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtUnLock", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "listAttr", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtXingJi2", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "attr2", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "btnArrow1", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "btnArrow2", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "imgCost2", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "imgCost3", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtNum", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "StarList", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "proExp", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "imgCost", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtExp", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "LevelDengjie", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "level", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "btnPut1", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "btnPut2", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "goStarUp", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "imgCost1", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "txtCost", 2), __decorateClass([UIProperty], _UIMountStarUpView.prototype, "gold", 2);
  var UIMountStarUpView = _UIMountStarUpView,
    UIMountStar = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Mount"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIMountStar.UID = "ui://5g2iuxtbfp1gn", __decorateClass([UIProperty], UIMountStar.prototype, "imgIcon", 2);
  var MountStar = class extends UIMountStar {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
    },
    MountStarUpView = class extends UIMountStarUpView {
      constructor() {
        super(), this.curSpecialAttr = []
      }
      onInit() {
        super.onInit(), this.maxStage = MountModel.inst.getMountMaxStage(), this.creatList(this.StarList, this.renderStarList, null, null, !1), this.creatList(this.listAttr, this.renderAttrList)
      }
      onEvent() {
        this.addEvent(MsgName.Mount_Update, this.refreshView), this.addEvent(MsgName.Mount_LvUp, this.showUp), this.bindRedPoint(this.btnPut2.goRed, 245)
      }
      onShow() {
        this.refreshView(MountModel.inst.stage)
      }
      onDestroy() {
        ItemObserverUtil.removeItemIdObserver(this.itemId, this), UIModelMgr.inst.recycle(this.model), this.model = null
      }
      onClickAll(t) {
        t == this.btnSelect ? this.onClickBtnSelect() : t == this.btnArrow1 ? this.onClickBtnPre() : t == this.btnArrow2 ? this.onClickBtnNext() : t == this.btnPut1 ? this.onClickBtnPut1() : t == this.btnPut2 && this.onClickBtnPut2()
      }
      refreshView(t = 0) {
        0 == t && (t = this.selectIndex), this.onSelectMount(t)
      }
      onSelectMount(t) {
        this.selectIndex = t, this.curCfg = Cfgsworddata.get(1e3 * this.selectIndex), null != this.curCfg && (MountModel.inst.canShowUpEffect = !0, this.refreshInfo(), this.refreshStar(), this.refreshModel(), this.refreshBaseAttr(), this.refreshSpecialAttr(), this.refreshRes(), MountModel.inst.canShowUpEffect = !1)
      }
      refreshInfo() {
        this.btnArrow1.visible = 1 != this.selectIndex, this.btnArrow2.visible = this.selectIndex != this.maxStage;
        let t = this.selectIndex > MountModel.inst.stage;
        this.btnSelect.grayed = t, this.btnSelect.touchable = !t, this.goLock.visible = t;
        const e = Cfgswordimage.get(this.curCfg.image);
        this.txtName.text = ToolUtil.chinese(null == e ? void 0 : e.name);
        const i = CfgitemBase.get(null == e ? void 0 : e.item);
        this.setTexture(this.imgPinZhiDi, "fb_img_beijing_" + i.quality, "TreasureDetails"), this.setImage(this.imgDi, "fb_img_btd_" + i.quality, "Common"), t && (this.txtLock.text = StringUtil.format(ToolUtil.chinese(1944), this.selectIndex));
        let s = MountModel.inst.shape_id == this.selectIndex && 1 == MountModel.inst.shape_type;
        this.btnSelect.c1.selectedIndex = s ? 1 : 0
      }
      refreshStar() {
        let t = MountModel.inst.stage,
          e = MountModel.inst.star;
        this.starCfg = Cfgsworddata.get(1e3 * t + e), this.LevelDengjie.txtLv.text = t.toString(), this.txtStage.text = StringUtil.format(ToolUtil.chinese(1945), t), this.txtExp.text = StringUtil.format("{0}/{1}", MountModel.inst.exp, this.starCfg.exp), this.proExp.value = MountModel.inst.exp / this.starCfg.exp * this.proExp.max, this.StarList.numItems = MountModel.inst.getMountMaxStar(t), this.txtStage1.text = StringUtil.format(ToolUtil.chinese(1946), t, e)
      }
      renderStarList(t, e) {
        e instanceof MountStar && (e.imgIcon.visible = t < MountModel.inst.star)
      }
      refreshModel() {
        let t = Cfgswordimage.get(this.curCfg.image);
        if (null == t) return;
        let e = StringUtil.format("resourcesLib/Character/{0}/{1}_UI.lh", t.model, t.model);
        this.modelPath != e && (this.modelPath = e, this.model && UIModelMgr.inst.recycle(this.model), this.model = this.LoadUIModel(this.modelLoader, e, (() => {
          var e;
          let i = t.camera[0].split(","),
            s = t.camera[1].split(","),
            o = t.camera[2].split(",");
          null == (e = this.model.sprite3D.getComponent(Laya.Animator)) || e.play("stand"), this.model.sprite3D.transform.localPosition = new Laya.Vector3(Number(i[0]), Number(i[1]), Number(i[2])), this.model.sprite3D.transform.rotationEuler = new Laya.Vector3(Number(s[0]), Number(s[1]), Number(s[2])), this.model.sprite3D.transform.localScale = new Laya.Vector3(Number(o[0]), Number(o[1]), Number(o[2]))
        }), null, !1))
      }
