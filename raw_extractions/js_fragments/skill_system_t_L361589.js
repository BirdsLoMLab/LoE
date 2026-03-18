// Fragment: skill_system_t_L361589.js
// Lines: 361589-361693 of bundle-beautified.js
// Categories: Skill System
// Keywords: skill_id
// Hit lines: 361590, 361593

        if (d && g) {
          m = d.skill_id;
          SkillHelper.getSkillConfig(m);
          const t = CfgskillDecData.get(BattleHelper.getSkillId(m));
          I = g.skill_id;
          const e = CfgskillDecData.get(BattleHelper.getSkillId(I));
          this.txtSkillName.text = ToolUtil.chinese(e.name);
          const i = SkillHelper.getSkillLevel(I);
          this.curSkillInfo.setData(i, e.icon), this.txtSkillDesc.text = SkillData.getSkillAddDesByCfg(t, m, I, "#d07843", "#30772E")
        }
        this.btnWake.goRed.setDotVisible(this._curQiLingData.showWakeRed), this.setTexture(this.imgBg, `fb_img_beijing_${l.quality}`, "TreasureDetails", "png"), this.setImage(this.imgNameBg, `fb_img_btd_${l.quality}`, "Common"), this.txtName.color = CfgUtil.get16Color("#ffffff", .8)
      }
      refreshCost(t) {
        if (this._itemArr.splice(0), this._isEnoughRes = !0, t)
          for (const e of t) {
            const t = e[1],
              i = e[0];
            this._itemArr.push(ItemUtil.createDataById(e[0], t)), ItemCtrl.inst.checkItemIsEnough(i, t) || (this._isEnoughRes = !1, this._noResId = i)
          }
        this.itemList.numItems = this._itemArr.length, this.btnWake.grayed = !this._isEnoughRes
      }
      _onItemRender(t, e) {
        let i = e;
        const s = this._itemArr[t];
        i.setData(s)
      }
      loadModel(t) {
        this._modelPath != t && (this.recycleModel(), this._curModel = QiLingCtrl.inst.loadModel(this.modelLoader, t, this.touch), this._modelPath = t)
      }
      recycleModel() {
        this._curModel && UIModelMgr.inst.recycle(this._curModel), this._curModel = null, this._modelPath = null
      }
    },
    _UIQiLingStarInfoView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "QiLingUpgrade", this.name = "QiLingStarInfoView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UIQiLingStarInfoView.UID = "ui://wjtdoxkto5kb5", __decorateClass([UIProperty], _UIQiLingStarInfoView.prototype, "pageList", 2), __decorateClass([UIProperty], _UIQiLingStarInfoView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIQiLingStarInfoView.prototype, "fixHeight", 2);
  var UIQiLingStarInfoView = _UIQiLingStarInfoView,
    QiLingStarInfoView = class extends UIQiLingStarInfoView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.pageList, this._onItemRender)
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
      onUpdate(t) {}
      onShow() {
        const t = this.args[0],
          [e, i] = QiLingCtrl.inst.getAllStartAttrList(t.id, t.wake, t.star),
          s = Cfgqiling_star.get(QiLingCtrl.inst.getQiLingStarKey(t.id, t.wake, t.star), !0);
        e.forEach((t => {
          t.attrArr = t.attrArr.filter((t => t.star <= s.star_view))
        })), this._dataSource = e.filter((t => t.attrArr.length > 0)), this.pageList.numItems = this._dataSource.length, this.pageList.scrollToView(i || 0)
      }
      _onItemRender(t, e) {
        e.setData(this._dataSource[t])
      }
    },
    QiLingLevelUpView = class extends UIQiLingLevelUpView {
      constructor() {
        super(), this._isPlayEff = !1, this._slotDataArr = [], this._lvAttrArr = [], this._lvLimit = !1, this._starAttrArr = [], this._itemArr = [], this._curModel = null, this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.emptyInfo.txtColor = "#b0b9bd", this.emptyInfo.fontSize = 36, this.creatList(this.lvAttrList, this._onLvItemRender), this.creatList(this.itemList, this._onItemRender), this.creatList(this.starAttrList, this._onStarItemRender), this.toolBar.setData([{
          title: ToolUtil.chinese(1702)
        }, {
          title: ToolUtil.chinese(1705)
        }], (t => {
          this.setClickTab(t)
        }))
      }
      onEvent() {
        this.addEvent(MsgName.QiLing_Slot_Refresh, this.onSlotRefreshHandle), this.addEvent(MsgName.QiLing_Star_Refresh, this.onSlotRefreshHandle), this.addEvent(MsgName.QiLing_Wake_Refresh, this.onWakeHandle), this.addEvent(MsgName.QiLing_Stage_Refresh, this.onStageRefreshHandle), this.addEvent(MsgName.QiLing_Red_Refresh, this.onRedPointChangeHandle)
      }
      onRedPointChangeHandle(t) {
        if (!this._curQiLingData) return;
        const e = QiLingCtrl.inst.getPosForQiLing(this._curQiLingData);
        this.refreshPos(e, !0)
      }
      onWakeHandle(t) {
        this._curQiLingData.id == t && this.close()
      }
      onClickAll(t) {
        if (t == this.btnSelect) QiLingCtrl.inst.send_ReqUpQiling(QiLingCtrl.inst.getMainPosId(), this._curQiLingData.id);
        else if (t == this.btnArrow1) {
          let t = this._curIdx - 1;
          t < 0 && (t = this._slotDataArr.length - 1), this.refreshBase(t), this.refreshAttr()
        } else if (t == this.btnArrow2) {
          let t = this._curIdx + 1;
          t > this._slotDataArr.length - 1 && (t = 0), this.refreshBase(t), this.refreshAttr()
        } else if (t == this.btnPreview) UIManager.inst.open(QiLingStarInfoView.UID, null, this._curQiLingData);
        else if (t == this.btnClose) this.close();
        else if (t == this.btnWake) {
          let t, e = [];
          for (const i of this._slotDataArr) {
            const s = QiLingModel.inst.getQiLingData(i.qilingId);
            QiLingCtrl.inst.isWakeFullQiLing(s.wake) || (e.push(i), s.id == this._curQiLingData.id && (t = e.length - 1))
