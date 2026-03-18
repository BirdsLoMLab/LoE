// Fragment: formula_onItemRender_L166177.js
// Lines: 166177-166353 of bundle-beautified.js
// Categories: Formula, Stat System
// Keywords: Math.ceil, attack
// Hit lines: 166178, 166247, 166253

      onItemRender(t, e) {
        0 == t ? (e.txtAttrName.text = ToolUtil.chinese(13223), e.txtAttr1.text = this.curCfg.attack.toString(), e.txtAttr2.text = this.nextCfg.attack.toString()) : 1 == t ? (e.txtAttrName.text = ToolUtil.chinese(13224), e.txtAttr1.text = this.curCfg.time_limit.toString(), e.txtAttr2.text = this.nextCfg.time_limit.toString()) : 2 == t && (e.txtAttrName.text = ToolUtil.chinese(13225), e.txtAttr1.text = this.curCfg.long.toString(), e.txtAttr2.text = this.nextCfg.long.toString())
      }
      onShow() {
        let t = this.args[0],
          e = this.args[1];
        t && e ? (this.curCfg = Cfgfishing_lev.get(t), this.nextCfg = Cfgfishing_lev.get(e), this.txtNow.text = "Lv." + t, this.txtNext.text = "Lv." + e, this.listItem.numItems = 3) : this.close()
      }
      onClickAll(t) {}
    },
    DiaoYuGetView = class extends UIDiaoYuGetView {
      constructor() {
        super(), this.fishs = [], this.rewardList = [], this.levelTween = null, this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.listShuXing, this.itemRender, null, null, !1), this.creatList(this.listReward, this.itemRenderReward, null, null, !1)
      }
      itemRender(t, e) {
        let i = this.fishs[0],
          s = Cfgfishing_fish.get(i.cfgId);
        e.setData(s.attr[t], t)
      }
      itemRenderReward(t, e) {
        if (t < this.fishs.length - 1) {
          e.c1.selectedIndex = 0;
          let i = this.fishs[t + 1].cfgId,
            s = Cfgfishing_fish.get(i),
            o = s.pic_id.replace("icon", "item");
          this.setTexture(e.imgIcon, o, "ItemIcon"), this.setImage(e.imgFrame, "common_img_pinzhi0" + s.quality, "Common"), e.txtWeight.setVar("val", this.fishs[t + 1].weight.toString())
        } else e.c1.selectedIndex = 1, e.itemIcon.setData(this.rewardList[t - this.fishs.length + 1])
      }
      onShow() {
        this.fishs = this.args[0];
        let t = this.args[1];
        if (this.fishs.length <= 0) return void this.close();
        this.sortFishes();
        let e = this.fishs[0],
          i = Cfgfishing_fish.get(e.cfgId);
        this.setTexture(this.icon, i.pic_id, "DiaoYu"), this.txtName.text = ToolUtil.chinese(i.name), this.c2.selectedIndex = i.quality - 2 < 0 ? 0 : i.quality - 2, this.setImage(this.itemQuality, `fb_img_btd_${i.quality}`, "Common"), this.newRecord.visible = DiaoYuCtrl.inst.isNewMaxWeightFish(e.cfgId, e.weight), this.weightTxt.setVar("val", e.weight), this.listReward.numItems = this.fishs.length - 1;
        for (let e in t) this.rewardList.push(ItemUtil.createDataById(Number(e), t[e]));
        this.listReward.numItems = this.fishs.length - 1 + this.rewardList.length;
        let s = DiaoYuCtrl.inst.fishLv,
          o = DiaoYuCtrl.inst.fishExp,
          n = o;
        for (let t = 0; t < this.fishs.length; t++) {
          let e = this.fishs[t];
          n += Cfgfishing_fish.get(e.cfgId).exp
        }
        let r = s,
          a = 0,
          l = Cfgfishing_lev.get().length;
        for (let t = s; t <= l; t++) {
          let e = Cfgfishing_lev.get(t);
          if (e.exp <= 0) {
            r = t, a = 0;
            break
          }
          if (n < e.exp) {
            r = t, a = n;
            break
          }
          n -= e.exp
        }
        DiaoYuCtrl.inst.fishLv = r, DiaoYuCtrl.inst.fishExp = a, this.txtLevel.setVar("lev", s);
        let c = Cfgfishing_lev.get(s);
        this.pillBar.max = c.exp > 0 ? c.exp : 1, this.pillBar.value = o, this.pillTxt.text = o + "/" + this.pillBar.max, this.playLevelUpAnim(s, r, o, a, s, r), this.listShuXing.numItems = i.attr.length
      }
      playLevelUpAnim(t, e, i, s, o, n) {
        if (t == Cfgfishing_lev.get().length) return this.pillBar.max = 1, this.pillBar.value = 1, this.pillTxt.text = ToolUtil.chinese(1553), void(o < n && UIManager.inst.open(DiaoYuLevelUpView.UID, null, o, n));
        this.levelTween = t != e ? fgui.GTween.to(i, this.pillBar.max, .8).setEase(fgui.EaseType.Linear).onUpdate((t => {
          this.pillBar.value = t.value.x, this.pillTxt.text = Math.ceil(t.value.x) + "/" + this.pillBar.max
        })).onComplete((() => {
          this.levelTween = null, this.txtLevel.setVar("lev", t + 1);
          let i = Cfgfishing_lev.get(t + 1);
          this.pillBar.max = i.exp > 0 ? i.exp : 1, this.playLevelUpAnim(t + 1, e, 0, s, o, n)
        })) : fgui.GTween.to(i, s, .8).setEase(fgui.EaseType.Linear).onUpdate((t => {
          this.pillBar.value = t.value.x, this.pillTxt.text = Math.ceil(t.value.x) + "/" + this.pillBar.max
        })).onComplete((() => {
          this.levelTween = null, o < n && UIManager.inst.open(DiaoYuLevelUpView.UID, null, o, n)
        }))
      }
      sortFishes() {
        this.fishs = this.fishs.sort(((t, e) => {
          let i = Cfgfishing_fish.get(t.cfgId),
            s = Cfgfishing_fish.get(e.cfgId);
          return i.quality !== s.quality ? s.quality - i.quality : DiaoYuCtrl.inst.isFishLocked(i.id) !== DiaoYuCtrl.inst.isFishLocked(s.id) ? DiaoYuCtrl.inst.isFishLocked(s.id) ? -1 : 1 : e.weight - t.weight
        }))
      }
      onClose() {
        this.levelTween && (this.levelTween.kill(), this.levelTween = null), this.dispatchEvent(MsgName.DiaoYu_Result)
      }
      onClickAll(t) {}
    },
    import_proto79 = __toESM(require_proto()),
    _UIDiaoYuGuanLiView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "DiaoYuGuanLi", this.name = "DiaoYuGuanLiView"
      }
      onInit() {
        this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.btnJiaCheng.onClick(this, this.onClickAll, [this.btnJiaCheng]), this.openSubCom(this.ShangZhen), this.btnTab1.addClick(this, this.onClickAll, [this.btnTab1]), this.openSubCom(this.btnTab1), this.btnTab2.addClick(this, this.onClickAll, [this.btnTab2]), this.openSubCom(this.btnTab2), this.btnTab3.addClick(this, this.onClickAll, [this.btnTab3]), this.openSubCom(this.btnTab3), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnTabSwitch1.addClick(this, this.onClickAll, [this.btnTabSwitch1]), this.openSubCom(this.btnTabSwitch1), this.btnTabSwitch2.addClick(this, this.onClickAll, [this.btnTabSwitch2]), this.openSubCom(this.btnTabSwitch2), this.addOpenAni(this.openAni)
      }
    };
  _UIDiaoYuGuanLiView.UID = "ui://x4vv2xums8lr0", __decorateClass([UIController], _UIDiaoYuGuanLiView.prototype, "c2", 2), __decorateClass([UIController], _UIDiaoYuGuanLiView.prototype, "c1", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "btnJiaCheng", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "ShangZhen", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "listItem", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "btnTab1", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "btnTab2", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "btnTab3", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "btnTabSwitch1", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "btnTabSwitch2", 2), __decorateClass([UIProperty], _UIDiaoYuGuanLiView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIDiaoYuGuanLiView.prototype, "openAni", 2);
  var UIDiaoYuGuanLiView = _UIDiaoYuGuanLiView,
    DiaoYuGuanLiView = class extends UIDiaoYuGuanLiView {
      constructor() {
        super(), this._listPosX = 336, this.fishList = [], this.tabType = 1, this.layer = "Pop", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.setImage(this.btnTab1.imgTab, "dwzb_menu_yu", "DiaoYuTuJian"), this.setImage(this.btnTab2.imgTab, "dwzb_menu_zhiwu", "DiaoYuTuJian"), this.setImage(this.btnTab3.imgTab, "dwzb_menu_haishou", "DiaoYuTuJian"), this.bindRedPoint(this.btnTab2.rp, RedPointMgr.inst.combineKey(832, 4)), this.bindRedPoint(this.btnTab3.rp, RedPointMgr.inst.combineKey(832, 2)), this.bindRedPoint(this.btnTabSwitch1.rp, RedPointMgr.inst.combineKey(832, 1)), this.bindRedPoint(this.btnTabSwitch2.rp, RedPointMgr.inst.combineKey(832, 5)), this.creatList(this.listItem, this.onItemRender, null, null, !0)
      }
      onEvent() {
        this.addEvent(MsgName.DiaoYu_SetFishBox, (() => {
          this.refreshViewByFishType(this.tabType)
        }), this), this.addEvent(MsgName.DiaoYu_PlayFishBoxEff, (t => {
          this.ShangZhen.playEff(t)
        }), this)
      }
      onShow() {
        this.onClickAll(this.btnTab1), this.btnTab1.rp.dot.visible = this.btnTabSwitch1.rp.dot.visible || this.btnTabSwitch2.rp.dot.visible
      }
      onUpdateSec() {
        this.btnTab1.rp.dot.visible = this.btnTabSwitch1.rp.dot.visible || this.btnTabSwitch2.rp.dot.visible
      }
      refreshViewByFishType(t) {
        var e, i;
        this.refreshList(t);
        let s = DiaoYuCtrl.inst.getBoxFishMaxSlot(t);
        this.ShangZhen.c1.selectedIndex = s - 2;
        let o = DiaoYuCtrl.inst.getBoxTypeByFishType(t);
        this.ShangZhen.setData(this.tabType, null != (i = null == (e = DiaoYuCtrl.inst.boxFishs[o]) ? void 0 : e.slotMap) ? i : {})
      }
      refreshList(t) {
        this.fishList = DiaoYuCtrl.inst.getFishListByType(t), this.fishList = this.fishList.sort(((t, e) => DiaoYuCtrl.inst.getBoxFishSlot(e.id) - DiaoYuCtrl.inst.getBoxFishSlot(t.id))), this.listItem.numItems = this.fishList.length, this.c2.selectedIndex = this.fishList.length > 0 ? 0 : 1, this.tabType = t
      }
      onItemRender(t, e) {
        e.setData(this.fishList[t])
      }
      onClickAll(t) {
        t == this.btnHelp ? UIManager.inst.openHelp(378) : t == this.btnJiaCheng && UIManager.inst.open(CharacterAttrDetailView.UID, null, {
          isLocal: !0,
          attrType: import_proto79.default.misc.SystemAttributeType.DIAOYU,
          isFilterZero: !0
        }), t == this.btnTab1 ? (this.c1.selectedIndex = 0, this._listPosX = this.listItem.x, this.onClickAll(this.btnTabSwitch1)) : t == this.btnTab2 ? (this.c1.selectedIndex = 1, this.listItem.x = this._listPosX, this.refreshViewByFishType(4)) : t == this.btnTab3 ? (this.c1.selectedIndex = 2, this.listItem.x = this._listPosX, this.refreshViewByFishType(2)) : t == this.btnClose ? this.close() : t == this.btnTabSwitch1 ? (this.switch(this.btnTabSwitch1, this.btnTabSwitch2), this.refreshViewByFishType(1)) : t == this.btnTabSwitch2 && (this.switch(this.btnTabSwitch2, this.btnTabSwitch1), this.refreshViewByFishType(5))
      }
      switch (t, e) {
        e.getController("button").selectedIndex = 0, t.getController("button").selectedIndex = 1
      }
    },
    _Cfgfishing_pulling = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgfishing_pulling.JsonName = "fishing_pulling.json";
  var Cfgfishing_pulling = _Cfgfishing_pulling,
    _UIDiaoYuFightView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "DiaoYu", this.name = "DiaoYuFightView"
      }
      onInit() {
        this.openSubCom(this.txtTitle), this.openSubCom(this.shuibo), this.btnSearch.onClick(this, this.onClickAll, [this.btnSearch]), this.btnimg_Icon.onClick(this, this.onClickAll, [this.btnimg_Icon]), this.btnAdd.onClick(this, this.onClickAll, [this.btnAdd]), this.btnIconXiaoHao.onClick(this, this.onClickAll, [this.btnIconXiaoHao]), this.btnMult.addClick(this, this.onClickAll, [this.btnMult]), this.openSubCom(this.btnMult), this.openSubCom(this.bowen3), this.btnTuiChu.onClick(this, this.onClickAll, [this.btnTuiChu]), this.openSubCom(this.fightBox), this.openSubCom(this.bowen), this.openSubCom(this.bowen2), this.openSubCom(this.YellowFire), this.openSubCom(this.blueFire), this.btnDiaoYu.addClick(this, this.onClickAll, [this.btnDiaoYu]), this.openSubCom(this.btnDiaoYu), this.addOpenAni(this.openAni)
      }
    };
  _UIDiaoYuFightView.UID = "ui://kistww3ooy4j1b", __decorateClass([UIController], _UIDiaoYuFightView.prototype, "c1", 2), __decorateClass([UIController], _UIDiaoYuFightView.prototype, "c2", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "shuibo", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "btnSearch", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "btnimg_Icon", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "txtTiLi", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "btnAdd", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "bgTime", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "txtTimeTips", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "btnIconXiaoHao", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "txtNum", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "btnMult", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "waitBox", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "bowen3", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "btnTuiChu", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "fightBox", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "barLeftTime", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "bowen", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "bowen2", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "txtLeftTime", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "txtTips", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "diaoyuMask", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "YellowFire", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "blueFire", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "skillBox", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "btnDiaoYu", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "fightBoxV", 2), __decorateClass([UIProperty], _UIDiaoYuFightView.prototype, "fixHeightF", 2), __decorateClass([UITransition], _UIDiaoYuFightView.prototype, "openAni", 2);
  var UIDiaoYuFightView = _UIDiaoYuFightView,
    _UIDiaoYuBeiLvView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "DiaoYu", this.name = "DiaoYuBeiLvView"
      }
      onInit() {
        this.btnQueDing.onClick(this, this.onClickAll, [this.btnQueDing]), this.btnQuXiao.onClick(this, this.onClickAll, [this.btnQuXiao]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.addOpenAni(this.openAni)
      }
    };
  _UIDiaoYuBeiLvView.UID = "ui://kistww3ogzs8r", __decorateClass([UIProperty], _UIDiaoYuBeiLvView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIDiaoYuBeiLvView.prototype, "btnQueDing", 2), __decorateClass([UIProperty], _UIDiaoYuBeiLvView.prototype, "btnQuXiao", 2), __decorateClass([UIProperty], _UIDiaoYuBeiLvView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIDiaoYuBeiLvView.prototype, "comBox", 2), __decorateClass([UIProperty], _UIDiaoYuBeiLvView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIDiaoYuBeiLvView.prototype, "openAni", 2);
  var UIDiaoYuBeiLvView = _UIDiaoYuBeiLvView,
    DiaoYuBeiLvView = class extends UIDiaoYuBeiLvView {
