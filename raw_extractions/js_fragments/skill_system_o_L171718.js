// Fragment: skill_system_o_L171718.js
// Lines: 171718-171820 of bundle-beautified.js
// Categories: Skill System
// Keywords: skill_id
// Hit lines: 171720

        const o = s.skilldata.DesList;
        this.txt_desc.txt_desc.text = s.skilldata.getSkillDescByLv(o[o.length - 1].level), this.txt_level.text = `${o[o.length-1].level}${ToolUtil.chinese(2260)}`, this.txt_name.text = ToolUtil.chinese(e.dec.name), this._txtData = [], Cfgskill_desData.get({
          skill_id: e.skillId
        }).forEach((t => {
          this._txtData.push(t)
        })), this.list_stats.numItems = this._txtData.length, this.list_stats.scrollPane.scrollTop(!1)
      }
      onTxtRender(t, e) {
        const i = this._txtData[t];
        e.txt_level.text = `Lv.${i.level}`, e.txt_desc.text = ToolUtil.chinese(i.des)
      }
    },
    SkillCallView = class extends UISkillCallView {
      constructor() {
        super(), this._use0 = 0, this._use1 = 0
      }
      onInit() {
        super.onInit(), this.isFullScreenUI = !0, this.hide3DCamera = !0, this.moveCamera = 2, this.bindRedPoint(this.tabrp, 387), this.setTexture(this.ldBg, "zh_bg_1", "CallHero", "jpg"), this._cfgPools = Array.from(Cfgcallskill_pool.get().filter((t => !t.duration))), this.creatList(this.dropDown.list, this.onDropRender, null, this.onDropClicked, !1), this.skill05.imgType.selectedIndex = 0, this.skill06.imgType.selectedIndex = 1, this.skill07.imgType.selectedIndex = 2, this.skill08.imgType.selectedIndex = 3, this.skill09.imgType.selectedIndex = 4
      }
      onEvent() {
        this.addEvent(MsgName.SkillCall_UpdateCnt, this.refreshTxtCnt), this.addEvent(MsgName.SkillCall_LimitSkillGet, this.refreshLimitBubble), this.addEvent(MsgName.SkillCall_UpdateSkillbox, this.refreshSkillBox), this.addEvent(MsgName.SkillCall_SkipAnim, this.refreshSkipAnim)
      }
      onShow() {
        this._cfg = this.args[0], null != this.args[2] && ("102" == this.args[2] ? this._cfg = this._cfgPools.find((t => 201 == t.id)) : "103" == this.args[2] ? this._cfg = this._cfgPools.find((t => 301 == t.id)) : this._cfg = this._cfgPools.find((t => 101 == t.id))), this.refreshSkipAnim(), this.setData(this._cfg)
      }
      onClickAll(t) {
        t == this.btnHelp ? UIManager.inst.openHelp(13) : t == this.btnPreview ? UIManager.inst.open(SkillCallPreviewView.UID, null, this._cfg) : t == this.btn_libao ? UIManager.inst.open(SkillCallSelectView.UID) : t == this.btnOnce ? 1 != this.limit.selectedIndex || SkillCallModel.inst.isLimitPoolAwardLeft() ? "red" != this.btnOnce.txtConsume.color ? ActivityModel.inst.isLimitRankOpen(2, (() => {
          SkillCallCtrl.inst.reqSkillDraw(this._cfg.id, 1, this._use0)
        })) : ItemCtrl.inst.openItemTipsByData(this._useItem0) : UIManager.inst.openMsg(ToolUtil.chinese(2261)) : t == this.btnTen ? 1 != this.limit.selectedIndex || SkillCallModel.inst.isLimitPoolAwardLeft() ? "red" != this.btnTen.txtConsume.color ? ActivityModel.inst.isLimitRankOpen(2, (() => {
          SkillCallCtrl.inst.reqSkillDraw(this._cfg.id, 10, this._use1)
        })) : ItemCtrl.inst.openItemTipsByData(this._useItem1) : UIManager.inst.openMsg(ToolUtil.chinese(2261)) : t == this.btnskip && SkillCallCtrl.inst.setSkipAnim(this.btnskip.selected)
      }
      onUpdateSec() {
        this.refreshSkillBox()
      }
      onHide() {
        ItemObserverUtil.removeAllObserver(this)
      }
      setData(t) {
        var e, i;
        this._cfg = t, this.initBtn(), this.refreshTxtCnt();
        const s = this._cfg.cost_1[0][0];
        null == (i = (e = this.args)[1]) || i.call(e, [s], s), t.duration ? (this.limit.selectedIndex = 1, this.refreshLimitBubble()) : (this.limit.selectedIndex = 0, this.refreshDrop(), this.refreshSkillBox()), this.rp.setDotVisible(101 == t.id && RedPointMgr.inst.getActive(SkillCallCtrl.inst.getRPSkillBox())), SkillCallCtrl.inst.hasOpenCallSkillView.set(t.id, !0), SkillCallCtrl.inst.refreshItemsRP()
      }
      refreshDrop() {
        this.dropDown.title.text = ToolUtil.chinese(this._cfg.name), this.dropDown.list.numItems = this._cfgPools.length, this.dropDown.list.resizeToFit(this._cfgPools.length), this.dropDown.setDropOpen(!1)
      }
      onDropRender(t, e) {
        const i = this._cfgPools[t],
          s = OpenFuncModel.inst.isFuncOpen(i.open_id);
        this.bindRedPoint(e.rp, RedPointMgr.inst.combineKey(387, i.id)), e.title.text = ToolUtil.chinese(i.name), e.stage.selectedIndex = s ? i.id == this._cfg.id ? 2 : 1 : 0
      }
      onDropClicked(t, e) {
        const i = this._cfgPools[t];
        i.id != this._cfg.id && (0 != e.stage.selectedIndex ? this.setData(i) : UIManager.inst.openMsg(OpenFuncModel.inst.getFuncOpenMsg(i.open_id)))
      }
      initBtn() {
        ItemObserverUtil.removeAllObserver(this), this._cfg.cost_1.forEach((t => {
          ItemObserverUtil.addItemIdObserver(t[0], this, this.refreshBtn.bind(this))
        })), this._cfg.cost_2.forEach((t => {
          ItemObserverUtil.addItemIdObserver(t[0], this, this.refreshBtn.bind(this))
        })), this.refreshBtn()
      }
      refreshBtn() {
        this.refreshBtn0(), this.refreshBtn1()
      }
      refreshBtn0() {
        this._use0 = 0;
        for (let t = 0; t < this._cfg.cost_1.length; t++) {
          const e = this._cfg.cost_1[t],
            i = ItemCtrl.inst.checkItemIsEnough(e[0], e[1]);
          if (t == this._cfg.cost_1.length - 1 || i) {
            this._useItem0 = ItemUtil.createDataById(e[0]);
            const t = this._useItem0.itemCfg;
            this.setTexture(this.btnOnce.imgIcon, t.icon, ItemCtrl.inst.getItemIconFolder(t.type)), this.btnOnce.txtConsume.text = e[1].toString(), this.btnOnce.txtConsume.color = i ? "white" : "red", 2 == e[0] && (this._use0 = e[1]);
            break
          }
        }
      }
      refreshBtn1() {
        this._use1 = 0;
        for (let t = 0; t < this._cfg.cost_2.length; t++) {
          const e = this._cfg.cost_2[t],
            i = ItemCtrl.inst.checkItemIsEnough(e[0], e[1]);
          if (t == this._cfg.cost_2.length - 1 || i) {
            this._useItem1 = ItemUtil.createDataById(e[0]);
            const t = this._useItem1.itemCfg;
            this.setTexture(this.btnTen.imgIcon, t.icon, ItemCtrl.inst.getItemIconFolder(t.type)), this.btnTen.txtConsume.text = e[1].toString(), this.btnTen.txtConsume.color = i ? "white" : "red", 2 == e[0] && (this._use1 = e[1]);
            break
          }
        }
        const t = this._cfg.cost_2[0][0];
        ItemObserverUtil.addItemIdObserver(t, this, (() => {
          let e = ActivityModel.inst.isLimitRankOpen(2),
            i = ItemCtrl.inst.getItemNum(t) >= 10;
          this.btnTen.goRed.setDotVisible(i && e)
        }), !0)
      }
      refreshTxtCnt() {
        this.txtCnt.text = `${ToolUtil.chinese(2262)} ${SkillCallModel.inst.getDrawCnt(this._cfg.id)}/${this._cfg.daily_max_num}`, this.txt_number.text = (this._cfg.red_guaranteed - SkillCallModel.inst.getRedCount(this._cfg.id)).toString()
      }
      refreshLimitBubble() {
        this.setLimitBubble(this._cfg.career_skill[0], this.skill01), this.setLimitBubble(this._cfg.career_skill[1], this.skill02), this.setLimitBubble(this._cfg.career_skill[2], this.skill03), this.setLimitBubble(this._cfg.career_skill[3], this.skill04)
