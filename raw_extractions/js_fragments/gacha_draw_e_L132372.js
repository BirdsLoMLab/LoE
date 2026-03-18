// Fragment: gacha_draw_e_L132372.js
// Lines: 132372-132473 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 132373

        let e = this.model.getLevelInfo(this.msg.levelId);
        this.txtName.text = ToolUtil.chinese(t.name), this.setTexture(this.imgicon, t.banner, "LianTi"), this.effectAttr = Array.from(t.activitate_attr);
        let i = Cfglianti_level.get({
            training_id: this.msg.id,
            level: e.level,
            if_limit: 1
          }),
          s = i.length;
        for (let t = 0; t < s; t++) {
          let e = i[t];
          null == this.msg || this.msg.levelId < e.id || this.effectAttr.push(e.activitate_attr[0])
        }
        this.effectAttr = this.effectAttr.reverse();
        for (let t = this.effectAttr.length - 1; t > 0; t--) this.effectAttr.splice(t, 1);
        this.list.numItems = this.effectAttr.length, this.setImage(this.img_title, this.model.getQualityTitleBg(this.msg.id), "Common");
        let o = CfgitemBase.get(t.item_id);
        this.c2.selectedIndex = o.quality - 4, this.setMaskClick(!1)
      }
      onAfterOpenAni() {
        this.setMaskClick(!0)
      }
      onClickAll(t) {}
    },
    {
      regClass: regClass17,
      property: property17
    } = Laya,
    LianTiCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.init()
      }
      static get inst() {
        return null == LianTiCtrl._instance && (LianTiCtrl._instance = new LianTiCtrl), LianTiCtrl._instance
      }
      init() {
        super.init(), this.model = LianTiModel.inst
      }
      registS2CHandler() {
        this.addS2CHandle("body.RetBodyInfo", this.RetBodyInfo), this.addS2CHandle("body.RetBodyTrainingInfo", this.RetBodyTrainingInfo), this.addS2CHandle("body.RetUpBodyStage", this.RetUpBodyStage), this.addEvent(MsgName.Msg_Task_Refresh, this.refreshTaskRedPoint), ItemObserverUtil.addItemTypeObserver(2, this, (() => {
          this.model && this.model.updateLingwuAndXiuLianRedPoint()
        }), !0), ItemObserverUtil.addItemTypeObserver(1, this, (() => {
          this.model && this.model.updateLingwuAndXiuLianRedPoint()
        }), !0)
      }
      refreshTaskRedPoint() {
        this.model.updateRedPoint()
      }
      RetBodyInfo(t) {
        this.model.info = t.data, this.model.updateRedPoint(), this.dispatchEvent(MsgName.LianTi_Info_Update)
      }
      RetBodyTrainingInfo(t) {
        let e = t.info;
        this.model.info.trainingInfo[t.info.id] = e, this.dispatchEvent(MsgName.LianTi_Info_Update, e.id);
        let i = !1;
        if (0 == e.levelId) i = !0;
        else if (e.levelId > 0) {
          1 == Cfglianti_level.get(Number(e.levelId)).if_limit && (i = !0)
        }
        i && (e.levelId, UIManager.inst.open(LianTiXianActiveView.UID, null, e)), this.model.updateRedPoint()
      }
      RetUpBodyStage(t) {
        this.model.info.masterStage = t.masterStage, this.model.updateRedPoint(), this.dispatchEvent(MsgName.LianTi_DaShi_stage_Update)
      }
      ReqUnlockBodyTraining(t) {
        let e = {};
        e.id = t, NetManager.inst.send("body.ReqUnlockBodyTraining", e)
      }
      ReqLevBodyTraining(t) {
        let e = {};
        e.id = t, NetManager.inst.send("body.ReqLevBodyTraining", e)
      }
      ReqUpBodyStage() {
        NetManager.inst.send("body.ReqUpBodyStage", {})
      }
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
      get xmlCfg() {
        return null == this._xmlCfg && (this._xmlCfg = ConfigManager.inst.GetXmlConfig("lian_ti")), this._xmlCfg
      }
    };
  LianTiCtrl._instance = null, LianTiCtrl = __decorateClass([regClass17("JVB7BdTnQJO_mCfxKi0o5A")], LianTiCtrl);
  var LianTiDaShiView = class extends UILianTiDaShiView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.model = LianTiModel.inst, this.ctrl = LianTiCtrl.inst, this.creatList(this.attrList, this.onItemRenderer)
      }
      onItemRenderer(t, e) {
        e.setData(this.cfg.attr[t], this.nextCfg ? this.nextCfg.attr[t] : null)
      }
      onEvent() {
        this.addEvent(MsgName.LianTi_DaShi_stage_Update, this.onDaShiStageUpdate)
      }
      onShow() {
        this.unbindAllRedPoint, this.bindRedPoint(this.btnJihuo.goRed, 606), this.bindRedPoint(this.btnUpgrade.goRed, 606), this.total = Cfglianti_master.get().length, this.onDaShiStageUpdate(), this.txtDesc.txtDesc.text = ToolUtil.chinese(11448)
      }
      onDaShiStageUpdate() {
