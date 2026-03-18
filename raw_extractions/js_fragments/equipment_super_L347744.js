// Fragment: equipment_super_L347744.js
// Lines: 347744-347940 of bundle-beautified.js
// Categories: Equipment
// Keywords: mount
// Hit lines: 347744, 347763, 347795, 347821, 347840

        super(), this.pkgName = "Mount"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIMountSkillDesc.UID = "ui://5g2iuxtbn413ust", __decorateClass([UIController], UIMountSkillDesc.prototype, "EWaiSkill", 2), __decorateClass([UIProperty], UIMountSkillDesc.prototype, "txtAttrName", 2);
  var MountSkillDesc = class extends UIMountSkillDesc {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIMountSkillDescItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Mount"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIMountSkillDescItem.UID = "ui://5g2iuxtblxp9uso", __decorateClass([UIController], UIMountSkillDescItem.prototype, "EWaiSkill", 2), __decorateClass([UIProperty], UIMountSkillDescItem.prototype, "txtAttrName", 2);
  var MountSkillDescItem = class extends UIMountSkillDescItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onEvent() {
        this.txtAttrName.on(Laya.Event.LINK, this, this.onLink)
      }
      onDestroy() {
        this.txtAttrName.off(Laya.Event.LINK, this, this.onLink)
      }
      onShow() {}
      onClickAll(t) {}
      setData(t) {
        this.txtAttrName.text = SkillData.getSkillDesc(t)
      }
      onLink(t) {
        let e = this.txtAttrName.displayObject.localToGlobal(new Laya.Point(0, 0));
        UIManager.inst.open(SkillTipView.UID, null, t, e.y)
      }
    },
    UIMountStarUp = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Mount"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIMountStarUp.UID = "ui://5g2iuxtbfp1gp", __decorateClass([UIProperty], UIMountStarUp.prototype, "AttrList", 2);
  var MountStarUp = class extends UIMountStarUp {
      constructor() {
        super(), this._isFull = !1
      }
      onInit() {
        super.onInit(), this.creatList(this.AttrList, this.renderList, null, null, !1)
      }
      onShow() {}
      renderList(t, e) {
        e instanceof MountAttr && e.setData(this._attr1[t], null == this._attr2 || this._isFull ? null : this._attr2[t])
      }
      setData(t, e, i, s) {
        this._isFull = i;
        let o = Cfgsworddata.get(1e3 * t + e);
        this._attr1 = Object.entries(o.attr).map((([t, e]) => [parseInt(t), e])), i || (o = s ? Cfgsworddata.get(1e3 * (t + 1) + 0) : Cfgsworddata.get(1e3 * t + e + 1), this._attr2 = Object.entries(o.attr).map((([t, e]) => [parseInt(t), e]))), this.AttrList.numItems = this._attr1.length, this.AttrList.scrollPane.touchEffect = !1
      }
    },
    UIMount_selectkuang = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Mount"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIMount_selectkuang.UID = "ui://5g2iuxtbvc6dlw", __decorateClass([UIController], UIMount_selectkuang.prototype, "c1", 2), __decorateClass([UITransition], UIMount_selectkuang.prototype, "t0", 2);
  var Mount_selectkuang = class extends UIMount_selectkuang {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIStarUp = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Mount"
      }
      onConstruct() {
        this.addOpenAni(this.openAni), this.onInit(), this.onEvent()
      }
    };
  UIStarUp.UID = "ui://5g2iuxtbfp1gu", __decorateClass([UIProperty], UIStarUp.prototype, "imgStar", 2), __decorateClass([UIProperty], UIStarUp.prototype, "imgStage", 2), __decorateClass([UIProperty], UIStarUp.prototype, "l1", 2), __decorateClass([UIProperty], UIStarUp.prototype, "l2", 2), __decorateClass([UITransition], UIStarUp.prototype, "openAni", 2);
  var StarUp = class extends UIStarUp {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.getGif(this.l1, "common_effectliziLoop"), this.getGif(this.l2, "common_effectliziLoop")
      }
      onShow() {}
    },
    UIMountInforStats = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "MountInfor"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIMountInforStats.UID = "ui://w0852bxjfpsq7", __decorateClass([UIController], UIMountInforStats.prototype, "c1", 2), __decorateClass([UIProperty], UIMountInforStats.prototype, "txtAttr2", 2), __decorateClass([UIProperty], UIMountInforStats.prototype, "txtVal2", 2), __decorateClass([UIProperty], UIMountInforStats.prototype, "tianzi", 2), __decorateClass([UIProperty], UIMountInforStats.prototype, "txtAttr1", 2), __decorateClass([UIProperty], UIMountInforStats.prototype, "txtVal1", 2);
  var MountInforStats = class extends UIMountInforStats {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIMount_YuLan = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "MountInfor"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIMount_YuLan.UID = "ui://w0852bxjll5s9", __decorateClass([UIProperty], UIMount_YuLan.prototype, "txtLock", 2);
  var Mount_YuLan = class extends UIMount_YuLan {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UITipGetItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "MountInfor"
      }
      onConstruct() {
        this.btnForward.onClick(this, this.onClickAll, [this.btnForward]), this.onInit(), this.onEvent()
      }
    };
  UITipGetItem.UID = "ui://w0852bxjgq506", __decorateClass([UIProperty], UITipGetItem.prototype, "imgBg", 2), __decorateClass([UIProperty], UITipGetItem.prototype, "btnForward", 2), __decorateClass([UIProperty], UITipGetItem.prototype, "txtTitle", 2), __decorateClass([UIProperty], UITipGetItem.prototype, "txtContent", 2);
  var TipGetItem = class extends UITipGetItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        t && (this.txtTitle.text = ToolUtil.chinese(t.name), t.desc.length > 0 ? this.txtContent.text = ToolUtil.chinese(t.desc) : this.txtContent.text = " ", this.txtContent.ensureSizeCorrect(), this.btnForward.visible = t.skip && 0 != t.skip, this._skipId = t.skip)
      }
      onEvent() {}
      onClickAll(t) {
        t == this.btnForward && UIManager.inst.goto(this._skipId)
      }
      onUpdate(t) {}
      onHide() {}
      onDestroy() {}
    },
    _UINaiLongBossView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "NaiLongBoss", this.name = "NaiLongBossView"
      }
      onInit() {
        this.openSubCom(this.img_boss), this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.btnRank.onClick(this, this.onClickAll, [this.btnRank]), this.openSubCom(this.btn_TianZhu), this.btn_TianZhu.onClick(this, this.onClickAll, [this.btn_TianZhu]), this.openSubCom(this.btn_LeiJi), this.btn_LeiJi.onClick(this, this.onClickAll, [this.btn_LeiJi]), this.btn_goods01.onClick(this, this.onClickAll, [this.btn_goods01]), this.btn_goods02.onClick(this, this.onClickAll, [this.btn_goods02]), this.openSubCom(this.effect1), this.openSubCom(this.effect2), this.openSubCom(this.gold_item), this.btnRes.onClick(this, this.onClickAll, [this.btnRes]), this.addOpenAni(this.openAni)
      }
    };
  _UINaiLongBossView.UID = "ui://2biek8458tl30", __decorateClass([UIController], _UINaiLongBossView.prototype, "c1", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "img_boss", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "bar2", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "txtBar", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "imgTitle", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "title", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "txt_times", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "goTime", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "btnRank", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "txt_rank", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "list_goods", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "btn_TianZhu", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "btn_LeiJi", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "btn_goods01", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "txt_gold01", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "btn_goods02", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "txt_gold02", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "effect1", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "effect2", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "gold_item", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "btnRes", 2), __decorateClass([UIProperty], _UINaiLongBossView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UINaiLongBossView.prototype, "openAni", 2);
  var UINaiLongBossView = _UINaiLongBossView,
    _UINaiLongMainView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "NaiLongMain", this.name = "NaiLongMainView"
      }
      onInit() {
        this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.openSubCom(this.mainGroup), this.addOpenAni(this.openAni)
      }
    };
  _UINaiLongMainView.UID = "ui://2jvr75lz8tl30", __decorateClass([UIProperty], _UINaiLongMainView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UINaiLongMainView.prototype, "imgTitle", 2), __decorateClass([UIProperty], _UINaiLongMainView.prototype, "txt_times", 2), __decorateClass([UIProperty], _UINaiLongMainView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UINaiLongMainView.prototype, "goTime", 2), __decorateClass([UIProperty], _UINaiLongMainView.prototype, "mainGroup", 2), __decorateClass([UIProperty], _UINaiLongMainView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UINaiLongMainView.prototype, "openAni", 2), __decorateClass([UITransition], _UINaiLongMainView.prototype, "loop", 2);
