// Fragment: formula_s_L161614.js
// Lines: 161614-161715 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil
// Hit lines: 161615

        let s = t.length;
        this.maxThemeid = t[s - 1].themeid, this.numItems = Math.ceil(e / 4), this.list.numItems = this.numItems, this.ctrl.TeamCopyInfo.dailyCnt > 0 ? this.txtBattleCnt.text = ToolUtil.chinese(1390) + this.ctrl.TeamCopyInfo.dailyCnt + "/" + this.model.dialyCount : this.txtBattleCnt.text = ToolUtil.chinese(1391) + this.ctrl.TeamCopyInfo.dailyCnt + "[/color]/" + this.model.dialyCount;
        let o = 4 * this.numItems;
        if (this.list.scrollPane.setPosY(279.5 * (o - i - 2)), this.numItems > 1) {
          let t = e % 4,
            i = 0;
          t > 0 && (i = 279.5 * (4 - t) - 50), this.list.scrollPane.setPosY(i)
        }
      }
      onClickAll(t) {
        t == this.btnAddCnt && (this.ctrl.canAddCnt() ? UIManager.inst.open(TeamCopyAddTimesView.UID, null, 0) : UIManager.inst.openMsg(ToolUtil.chinese(1389)))
      }
    },
    import_proto67 = __toESM(require_proto()),
    _UITeamCopyDetailView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "TeamCopyDetail", this.name = "TeamCopyDetailView"
      }
      onInit() {
        this.btnTeam.onClick(this, this.onClickAll, [this.btnTeam]), this.btnBattle.onClick(this, this.onClickAll, [this.btnBattle]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnAddCnt.onClick(this, this.onClickAll, [this.btnAddCnt]), this.btn0.onClick(this, this.onClickAll, [this.btn0]), this.btn1.onClick(this, this.onClickAll, [this.btn1]), this.btn2.onClick(this, this.onClickAll, [this.btn2]), this.openSubCom(this.btnSlect), this.btnSlect.onClick(this, this.onClickAll, [this.btnSlect]), this.openSubCom(this.awardRP), this.btn_jiacheng.onClick(this, this.onClickAll, [this.btn_jiacheng]), this.btnAward.onClick(this, this.onClickAll, [this.btnAward]), this.openSubCom(this.awardRedPoint), this.openSubCom(this.adRP), this.openSubCom(this.btn_select), this.btn_select.onClick(this, this.onClickAll, [this.btn_select]), this.btn_wenhao.onClick(this, this.onClickAll, [this.btn_wenhao]), this.btnKangXinAttr.onClick(this, this.onClickAll, [this.btnKangXinAttr])
      }
    };
  _UITeamCopyDetailView.UID = "ui://nouth9sftxdf0", __decorateClass([UIController], _UITeamCopyDetailView.prototype, "c1", 2), __decorateClass([UIController], _UITeamCopyDetailView.prototype, "c2", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btnTeam", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btnBattle", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "txtBattleCnt", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btnAddCnt", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "title", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "ldBg", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "imgIcon", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "txtName", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "txtRecommand", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "list", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btn0", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btn1", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btn2", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btnSlect", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "imgBattlieing", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "goCurSelect", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "awardRP", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btn_jiacheng", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btnAward", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "awardRedPoint", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "goAward", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "adRP", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "txt_double", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btn_select", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btn_wenhao", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "btnKangXinAttr", 2), __decorateClass([UIProperty], _UITeamCopyDetailView.prototype, "fixHeight", 2);
  var UITeamCopyDetailView = _UITeamCopyDetailView,
    _UITeamCopyDetailAddView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "TeamCopyDetailAdd", this.name = "TeamCopyDetailAddView"
      }
      onInit() {}
    };
  _UITeamCopyDetailAddView.UID = "ui://hdy9avotho4d0", __decorateClass([UIProperty], _UITeamCopyDetailAddView.prototype, "sectAddBg", 2), __decorateClass([UIProperty], _UITeamCopyDetailAddView.prototype, "txt_add", 2), __decorateClass([UIProperty], _UITeamCopyDetailAddView.prototype, "txt_person", 2), __decorateClass([UIProperty], _UITeamCopyDetailAddView.prototype, "txt_tips", 2), __decorateClass([UIProperty], _UITeamCopyDetailAddView.prototype, "list", 2), __decorateClass([UIProperty], _UITeamCopyDetailAddView.prototype, "fixHeight", 2);
  var UITeamCopyDetailAddView = _UITeamCopyDetailAddView,
    TeamCopyDetailAddView = class extends UITeamCopyDetailAddView {
      constructor() {
        super(), this.dayNum = 0, this.maskType = 1, this.layer = "Top", this.maskTransparent = !0
      }
      onInit() {
        super.onInit(), this.model = TeamModel.inst, this.creatList(this.list, this.onItemRenderer)
      }
      onItemRenderer(t, e) {
        e.setData(this.items[t], this.dayNum)
      }
      onShow() {
        this.dayNum = TimerMgr.inst.getOpenDay(), this.cfg = this.args[0], this.tcid = this.model.idToTcid(this.cfg.id), this.txt_person.setVar("value", this.dayNum), this.items = this.model.getBuffAdd(this.tcid), this.list.numItems = this.items.length;
        let t = 0;
        for (let e = 0; e < this.model.buff_num_item.length; e++) this.dayNum >= Number(this.model.buff_num_item[e].num) && (t = e);
        t > 0 && this.list.scrollToView(t, !0, !0)
      }
      onClickAll(t) {}
    },
    _UITeamCopyTaskView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "TeamCopyTask", this.name = "TeamCopyTaskView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UITeamCopyTaskView.UID = "ui://nnmwnkq6txdf0", __decorateClass([UIProperty], _UITeamCopyTaskView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UITeamCopyTaskView.prototype, "list", 2), __decorateClass([UIProperty], _UITeamCopyTaskView.prototype, "fixHeight", 2);
  var UITeamCopyTaskView = _UITeamCopyTaskView,
    TeamCopyTaskView = class extends UITeamCopyTaskView {
      constructor() {
        super(), this.maskType = 1, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit(), this.creatList(this.list, this.onItemRender)
      }
      onItemRender(t, e) {
        e.setData(this.cfgs[t])
      }
      onEvent() {
        this.addEvent(MsgName.TeamDungeon_Task_Award, this.onTaskAward)
      }
      onTaskAward() {
        this.cfgs = Array.from(Cfgteam_task.get({
          copy_id: this.params.id
        }));
        let t = TeamCtrl.inst.TeamCopyInfo;
        t && t.taskStatus && this.cfgs.sort(((e, i) => {
          let s = Number(t.taskStatus[e.id] || 0),
            o = Number(t.taskStatus[i.id] || 0);
          return s = 2 == s ? s : 1 - s, o = 2 == o ? o : 1 - o, s - o
        })), this.list.numItems = this.cfgs.length
      }
      onShow() {
        this.unbindAllRedPoint(), this.params = this.args[0], this.onTaskAward()
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
    },
    TeamCopyDetailView = class extends UITeamCopyDetailView {
      constructor() {
        super(), this.prePassedTcid = null, this.maskType = 1, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit(), this.setTexture(this.bgImg, "grxx_bg_juanzhou", "Common"), this.setTexture(this.ldBg, "zg_mslx_di", "Fight"), this.ctrl = TeamCtrl.inst, this.model = TeamModel.inst, this.btns = [this.btn0, this.btn1, this.btn2];
        for (let t = 0; t < this.btns.length; t++) this.btns[t].text = this.model.getDifficultyName(t + 1);
        this.creatList(this.list, this.onItemRender)
      }
      onItemRender(t, e) {
        e.setData(this.itemShows[t])
