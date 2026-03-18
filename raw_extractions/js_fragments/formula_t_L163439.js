// Fragment: formula_t_L163439.js
// Lines: 163439-163625 of bundle-beautified.js
// Categories: Formula, Skill System
// Keywords: Math.ceil, skill_id
// Hit lines: 163439, 163509, 163525

        let t = Math.ceil(this.dataArr.length / 5);
        t = t < 0 ? 0 : t;
        let e = 180 * t;
        this.listGet.setSize(700, e), this.listGet.numItems = this.dataArr.length, MusicCtrl.inst.PlaySound(1084);
        let i = YiShouYCCtrl.inst.getIncubateExtraReward(this.dataArr);
        i.length > 0 ? (this.rewards = i, this.rewardPart.visible = !0, this.rewardList.numItems = i.length) : this.rewardPart.visible = !1
      }
      _onShowItemRender(t, e) {
        var i;
        e.setData(this.dataArr[t], 2, null == (i = this.dataArr[this._index - 1]) ? void 0 : i.uid)
      }
      _onShowRewardItemRender(t, e) {
        let [i, s] = this.rewards[t];
        e.setDataById(i, s)
      }
      onClickAll(t) {
        t == this.btnTouch && (this.btnTouch.enabled = !1, this._index = this.dataArr.length, this.listGet.numItems = this.dataArr.length)
      }
    },
    _UIYiShouYCWinView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YiShouYCWin", this.name = "YiShouYCWinView"
      }
      onInit() {
        this.btnTouchArea.onClick(this, this.onClickAll, [this.btnTouchArea]), this.openSubCom(this.yishou_level), this.btnYuanSu.onClick(this, this.onClickAll, [this.btnYuanSu]), this.btnDai.onClick(this, this.onClickAll, [this.btnDai]), this.btnGrowth.onClick(this, this.onClickAll, [this.btnGrowth]), this.openSubCom(this.yishouTip), this.openSubCom(this.yuansuTips), this.btn_fenjie.onClick(this, this.onClickAll, [this.btn_fenjie]), this.openSubCom(this.btn_shangjia), this.btn_shangjia.onClick(this, this.onClickAll, [this.btn_shangjia])
      }
    };
  _UIYiShouYCWinView.UID = "ui://hkxz7vvcj07t0", __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "btnTouchArea", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "imgEgg", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "listEntry", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "imgIcon", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "txtGrowth", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "yishou_level", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "img_yuansu", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "img_pinzhi_kuang", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "touch", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "imgQuality", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "txtQuality", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "btnYuanSu", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "btnDai", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "btnGrowth", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "yishouTip", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "yuansuTips", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "btn_fenjie", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "btn_shangjia", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "bottomLayer", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "rewardList", 2), __decorateClass([UIProperty], _UIYiShouYCWinView.prototype, "rewardPart", 2), __decorateClass([UITransition], _UIYiShouYCWinView.prototype, "t0", 2);
  var UIYiShouYCWinView = _UIYiShouYCWinView,
    _UIYiShouYCSalvageTipsView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YiShouYCSalvageTips", this.name = "YiShouYCSalvageTipsView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnCancel.onClick(this, this.onClickAll, [this.btnCancel]), this.btnYes.onClick(this, this.onClickAll, [this.btnYes])
      }
    };
  _UIYiShouYCSalvageTipsView.UID = "ui://hq8l7fqnj07t0", __decorateClass([UIProperty], _UIYiShouYCSalvageTipsView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIYiShouYCSalvageTipsView.prototype, "btnCancel", 2), __decorateClass([UIProperty], _UIYiShouYCSalvageTipsView.prototype, "btnYes", 2), __decorateClass([UIProperty], _UIYiShouYCSalvageTipsView.prototype, "goOp", 2), __decorateClass([UIProperty], _UIYiShouYCSalvageTipsView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIYiShouYCSalvageTipsView.prototype, "txtCnt", 2), __decorateClass([UIProperty], _UIYiShouYCSalvageTipsView.prototype, "list_goods", 2), __decorateClass([UIProperty], _UIYiShouYCSalvageTipsView.prototype, "fixHeight", 2);
  var UIYiShouYCSalvageTipsView = _UIYiShouYCSalvageTipsView,
    _UIYiShouYCInforView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YiShouYCInfor", this.name = "YiShouYCInforView"
      }
      onInit() {
        this.openSubCom(this.skillIcon), this.openSubCom(this.txt_desc), this.btn_help.onClick(this, this.onClickAll, [this.btn_help]), this.btnHybrid.onClick(this, this.onClickAll, [this.btnHybrid]), this.openSubCom(this.yishou_level), this.btnDai.onClick(this, this.onClickAll, [this.btnDai]), this.btnYuanSu.onClick(this, this.onClickAll, [this.btnYuanSu]), this.btnGrowth.onClick(this, this.onClickAll, [this.btnGrowth]), this.btnEntry.onClick(this, this.onClickAll, [this.btnEntry]), this.openSubCom(this.yishouTip), this.openSubCom(this.yuansuTips), this.openSubCom(this.pingfen_tips), this.openSubCom(this.peiYuTips), this.openSubCom(this.skill_infor_item), this.openSubCom(this.skill_item), this.btn_fenjie.onClick(this, this.onClickAll, [this.btn_fenjie]), this.openSubCom(this.btn_shangjia), this.btn_shangjia.onClick(this, this.onClickAll, [this.btn_shangjia])
      }
    };
  _UIYiShouYCInforView.UID = "ui://hoi3dwh3j07t0", __decorateClass([UIController], _UIYiShouYCInforView.prototype, "c1", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "bg", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "modelLoader", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "touch", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "imghero", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "imgQuality", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txtQuality", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txtHybridCnt", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "imgIcon", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txtGrowth", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "skillIcon", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txtSkillName", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txt_desc", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txtEntryTitle", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "listEntry", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "btn_help", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "imgQuality2", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txtQuality2", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "xiyouGroup", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "btnHybrid", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "yishou_level", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "btnDai", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "img_yuansu", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "img_pinzhi_kuang", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "btnYuanSu", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "btnGrowth", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "btnEntry", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "yishouTip", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "yuansuTips", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "txtTips", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "pingfen_tips", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "peiYuTips", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "skill_infor_item", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "skill_item", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "btn_fenjie", 2), __decorateClass([UIProperty], _UIYiShouYCInforView.prototype, "btn_shangjia", 2);
  var UIYiShouYCInforView = _UIYiShouYCInforView,
    YiShouYCInforView = class extends UIYiShouYCInforView {
      constructor() {
        super(), this.model = null, this.entryArr = [], this.globalRect = new Laya.Rectangle, this.isDrag = !1, this.layer = "Pop", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.listEntry, this._onShowItemRender)
      }
      onEvent() {
        this.addEvent(MsgName.YiShou_Pet_Entry_Click, this.onEntryClick, this), this.addEvent(MsgName.Cultivate_Refresh_Pet, this.refreshBtnState, this), this.addEvent(MsgName.YiShou_Pet_Select_PeiYu, this.onShow, this), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpHandle), Laya.stage.on(Laya.Event.MOUSE_DRAG, this, this.onMouseDragHandle)
      }
      onShow() {
        this.charId = null != this.args[1] ? this.args[1] : LoginCtrl.inst.charid;
        let t = 1;
        if (this.skillIcon.txt_level.text = "", this.args[0].charid || this.args[0].uid || this.args[0].generation) {
          this.pet = this.args[0], this.cfgPet = Cfgpet_data.get(this.pet.cfgid), this.c1.selectedIndex = 0, this.entryArr = this.pet.entry;
          let e = YiShouPeiYuModel.inst.isSelfMonster(this.charId);
          this.txtHybridCnt.text = e ? YiShouPeiYuModel.inst.getHybridDesc(this.pet, this.charId) : this.pet.lendCnt ? this.pet.lendCnt.toString() : "0", this.txtEntryTitle.text = ToolUtil.chinese(2644), this.txtGrowth.text = this.pet.growthRate.toFixed(4), t = this.pet.generation;
          for (let e of this.cfgPet.dai_skill)
            if (e[0] == t) {
              let t = Cfgpet_skill.get(e[1], !0);
              if (t) {
                let e = CfgskillDecData.get(t.skill_id);
                this.skillIcon.txt_level.text = StringUtil.format("Lv.{0}", t.level), this.txtSkillName.text = ToolUtil.chinese(null == t ? void 0 : t.name), this.txt_desc.txt_desc.text = StringUtil.format(ToolUtil.chinese(null == t ? void 0 : t.desc), t.value1, t.value2, t.value3, t.value4, t.value5), this.setTexture(this.skillIcon.imgIcon.imgIcon, null == e ? void 0 : e.icon, "ItemIcon")
              }
              break
            } this.btn_help.visible = !0
        } else {
          this.cfgPet = this.args[0];
          let t = this.args[1] || 1;
          this.c1.selectedIndex = 1;
          for (let t of this.cfgPet.entry) this.entryArr.push(t[0]);
          this.txtGrowth.text = "", this.txtEntryTitle.text = ToolUtil.chinese(2645), this.yishou_level.visible = !1;
          let e = t - 1;
          if (this.cfgPet.dai_skill.length > 0 && this.cfgPet.dai_skill.length > e) {
            let t = this.cfgPet.dai_skill[e],
              i = Cfgpet_skill.get(t[1], !0);
            if (i) {
              let t = CfgskillDecData.get(i.skill_id);
              this.skillIcon.txt_level.text = StringUtil.format("Lv.{0}", i.level), this.txtSkillName.text = ToolUtil.chinese(null == i ? void 0 : i.name), this.txt_desc.txt_desc.text = StringUtil.format(ToolUtil.chinese(null == i ? void 0 : i.desc), i.value1, i.value2, i.value3, i.value4, i.value5), this.setTexture(this.skillIcon.imgIcon.imgIcon, null == t ? void 0 : t.icon, "ItemIcon")
            }
          }
          this.txtTips.text = ToolUtil.chinese(this.cfgPet.obtain_way)
        }
        this.txtName.text = YiShouYCCtrl.inst.getPetName(this.pet, this.cfgPet), this.setTexture(this.imgBg, "ys_img_pz_" + this.cfgPet.quality, "YiShouYC");
        let e = YiShouPeiYuModel.inst.getQualityCfg(this.cfgPet.quality);
        this.setImage(this.imgQuality, e.ratebg, "YiShouDaDangTips"), this.txtQuality.text = e.name, this.setImage(this.imgQuality2, e.ratebg, "YiShouDaDangTips"), this.txtQuality2.text = e.name, this.setImage(this.img_yuansu, "gf_img_yuansu" + this.cfgPet.element, "Common"), this.setImage(this.img_pinzhi_kuang, "ys_img_pz_kuang_" + this.cfgPet.quality, "Common"), this.entryArr.sort(((t, e) => {
          const i = Cfgpet_entry.get(t, !0),
            s = Cfgpet_entry.get(e, !0);
          return (null == s ? void 0 : s.quality) - (null == i ? void 0 : i.quality)
        })), this.listEntry.numItems = this.entryArr.length, this.pet ? this.yishou_level.txtLv.text = this.pet.generation.toString() : this.yishou_level.txtLv.text = "1", this.refreshMosterModel(this.cfgPet.monster_id), this.refreshBtnState()
      }
      _onShowItemRender(t, e) {
        e.setData(this.entryArr[t], this.pet)
      }
      refreshBtnState() {
        if (this.pet) {
          this.btn_shangjia.grayed = YiShouPeiYuModel.inst.monsterHasUp(this.pet);
          let t = this.pet.generation != YiShouPeiYuModel.inst.getMaxDaiNum() && 1 == this.args[2] && OpenFuncModel.inst.isFuncOpen(67, !1);
          this.btn_shangjia.visible = t, this.btn_fenjie.visible = t, this.bg.setSize(665, t ? 1126 : 1012)
        } else this.bg.setSize(665, 1012)
      }
      refreshMosterModel(t) {
        let e = CfgUnitConfig.get(t),
          i = StringUtil.format("resourcesLib/Character/{0}/{1}_UI.lh", e.Perfab, e.Perfab);
        this.modelPath != i && (this.modelPath = i, this.model && UIModelMgr.inst.recycle(this.model), this.model = this.LoadUIModel(this.modelLoader, i, (() => {
          var t;
          let e = Cfgpet_data.get(Number(this.cfgPet.id)),
            i = e.preview_camera[0].split(","),
            s = e.preview_camera[1].split(","),
            o = e.preview_camera[2].split(",");
          null == (t = this.model.sprite3D.getComponent(Laya.Animator)) || t.play("stand"), this.model.sprite3D.transform.localPosition = new Laya.Vector3(Number(i[0]), Number(i[1]), Number(i[2])), this.model.sprite3D.transform.rotationEuler = new Laya.Vector3(Number(s[0]), Number(s[1]), Number(s[2])), this.model.sprite3D.transform.localScale = new Laya.Vector3(Number(o[0]), Number(o[1]), Number(o[2]))
        }), null, !1))
      }
      onClickAll(t) {
        if (t == this.btnHybrid && this.pet) this.peiYuTips.setData(this.pet, this.charId), this.peiYuTips.visible = !0;
        else if (t == this.btnDai) this.showTips(this.btnDai, "", YiShouPeiYuModel.inst.getDaiByNumberTips(this.pet ? this.pet.generation : 1), 0);
        else if (t == this.btnYuanSu && this.pet) this.yuansuTips.visible = !0, this.yishouTip.visible = !1, this.yuansuTips.setData(this.pet);
        else if (t == this.btnGrowth && this.pet) this.showTips(this.btnGrowth, "", YiShouPeiYuModel.inst.getTipGrowthByPet(this.pet), 0);
        else if (t == this.btnEntry);
        else if (t == this.btn_shangjia) this.btn_shangjia.grayed || YiShouPeiYuModel.inst.onFastUp(this.pet);
        else if (t == this.btn_help) this.pet && this.showTips(this.btn_help, "", YiShouYCModel.inst.getEntryTips(this.pet), 0);
        else if (t == this.btn_fenjie) {
          null == YiShouYCCtrl.inst.getPosInfoByUid(this.pet.uid) ? UIManager.inst.open(YiShouYCSalvageTipsView.UID, null, [this.pet]) : UIManager.inst.openMsg(ToolUtil.chinese(2636))
        }
      }
      showTips(t, e, i, s = 0, o = 0) {
        this.yuansuTips.visible = !1, t.localToGlobalRect(0, 0, t.width, t.height, this.globalRect), this.ui.globalToLocalRect(this.globalRect.x, this.globalRect.y, this.globalRect.width, this.globalRect.height, this.globalRect), this.yishouTip.setXY(this.yishouTip.x, this.globalRect.y), this.yishouTip.visible = !0, i += "\n";
        let n = this.pet ? this.pet.elementAwakeLevel : 0;
        this.yishouTip.setData(e, i, s, o, n)
      }
      onEntryClick(t) {
        var e;
        let i = 0;
        this.pet && (this.pet.elementAwakeLevel > 0 || YiShouYCCtrl.inst.isOnBattle(this.pet.uid)) && (i = null == (e = this.cfgPet) ? void 0 : e.element), this.showTips(this.btnEntry, ToolUtil.chinese(t.name), ToolUtil.chinese(t.desc), 1, i)
      }
      onMouseUpHandle(t) {
        this.isDrag || (this.yishouTip.visible && (YiShouYCCtrl.inst.isPointInGraph(t.stageX, t.stageY, this.yishouTip) || (this.yishouTip.visible = !1)), this.yuansuTips.visible && (YiShouYCCtrl.inst.isPointInGraph(t.stageX, t.stageY, this.yuansuTips) || (this.yuansuTips.visible = !1)), this.peiYuTips.visible && (YiShouYCCtrl.inst.isPointInGraph(t.stageX, t.stageY, this.peiYuTips) || UIManager.inst.isOpen(DialogView.UID) || (this.peiYuTips.visible = !1))), this.isDrag = !1
      }
      onMouseDragHandle() {
        this.isDrag = !0
      }
      onHide() {
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUpHandle), Laya.stage.off(Laya.Event.MOUSE_DRAG, this, this.onMouseDragHandle)
      }
      onDestroy() {}
    },
    YiShouYCSalvageTipsView = class extends UIYiShouYCSalvageTipsView {
      constructor() {
        super(), this.salvageArr = [], this.itemArr = [], this.maskType = 1, this.layer = "Pop"
      }
      onInit() {
        super.onInit(), this.creatList(this.list_goods, this._onShowItemRender)
      }
      onShow() {
        this.salvageArr = this.args[0];
        for (let t of this.salvageArr) {
          let e = Cfgpet_data.get(t.cfgid),
            i = YiShouYCModel.inst.getQualityItems(e.quality);
          this.addItems(i)
        }
        this.list_goods.numItems = this.itemArr.length
      }
      addItems(t) {
        if (t)
          for (let e of t) {
            let t = this.itemArr.find((function(t) {
              return t.itemId == e.itemId
            }));
            t ? t.count += e.count : this.itemArr.push(e)
          }
      }
      _onShowItemRender(t, e) {
        e.setData(this.itemArr[t])
      }
      onClickAll(t) {
        if (t == this.btnClose) this.close();
        else if (t == this.btnCancel) this.close();
        else if (t == this.btnYes) {
