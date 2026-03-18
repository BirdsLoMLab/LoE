// Fragment: gacha_draw_t_L195984.js
// Lines: 195984-196116 of bundle-beautified.js
// Categories: Gacha/Draw, Stat System
// Keywords: attack, banner
// Hit lines: 195984, 195985, 196016

        let t = LoginCtrl.inst.getSeverNameById(this.attackInfo.attack.zoneid);
        this.txtFangShou.text = StringUtil.format(ToolUtil.chinese(12201), t, this.attackInfo.attack.name, this.attackInfo.attack.lootScore)
      }
      _onRewardRender(t, e) {
        const i = e;
        let s = this.awards[t],
          o = ItemUtil.createDataById(s[0], s[1]);
        i.setData(o, !0, !1)
      }
      onClickAll(t) {
        t == this.btnBiaoJi ? YaoShenYiJiCtrl.inst.ReqRuinsDeal(2) : t == this.btnRaoGuo && YaoShenYiJiCtrl.inst.ReqRuinsDeal(1)
      }
    },
    _UIYaoShenYiJiZuDuiListView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YaoShenYiJiZuDui", this.name = "YaoShenYiJiZuDuiListView"
      }
      onInit() {
        this.btnShuaXin.onClick(this, this.onClickAll, [this.btnShuaXin]), this.btnChuangJian.onClick(this, this.onClickAll, [this.btnChuangJian]), this.openSubCom(this.btnJiaRu), this.btnJiaRu.onClick(this, this.onClickAll, [this.btnJiaRu]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.addOpenAni(this.openAni)
      }
    };
  _UIYaoShenYiJiZuDuiListView.UID = "ui://7e2eehy8f07o14", __decorateClass([UIController], _UIYaoShenYiJiZuDuiListView.prototype, "c1", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiListView.prototype, "btnShuaXin", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiListView.prototype, "btnChuangJian", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiListView.prototype, "btnJiaRu", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiListView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiListView.prototype, "listDuiWu", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiListView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIYaoShenYiJiZuDuiListView.prototype, "openAni", 2);
  var UIYaoShenYiJiZuDuiListView = _UIYaoShenYiJiZuDuiListView,
    import_proto143 = __toESM(require_proto()),
    _UIYaoShenYiJiZuDuiView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YaoShenYiJiZuDui", this.name = "YaoShenYiJiZuDuiView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnSheZhi.onClick(this, this.onClickAll, [this.btnSheZhi]), this.btnChat.onClick(this, this.onClickAll, [this.btnChat]), this.btnTeamQuit.onClick(this, this.onClickAll, [this.btnTeamQuit]), this.btnApply.onClick(this, this.onClickAll, [this.btnApply]), this.btnZhaoMu.onClick(this, this.onClickAll, [this.btnZhaoMu]), this.openSubCom(this.redPoint), this.openSubCom(this.teamChatRP), this.btnAllServer.onClick(this, this.onClickAll, [this.btnAllServer]), this.btnSect.onClick(this, this.onClickAll, [this.btnSect])
      }
    };
  _UIYaoShenYiJiZuDuiView.UID = "ui://7e2eehy8wosl0", __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "bgld", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "banner", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "list", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "btnSheZhi", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "btnChat", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "btnTeamQuit", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "btnApply", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "btnZhaoMu", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "redPoint", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "teamChatRP", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "bgPanel", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "btnAllServer", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "btnSect", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "goZhaoMu", 2), __decorateClass([UIProperty], _UIYaoShenYiJiZuDuiView.prototype, "fixHeight", 2);
  var UIYaoShenYiJiZuDuiView = _UIYaoShenYiJiZuDuiView,
    _UIYaoShenYiJiApplyListView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YaoShenYiJiApplyList", this.name = "YaoShenYiJiApplyListView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnOk), this.btnOk.onClick(this, this.onClickAll, [this.btnOk]), this.btnRefuse.onClick(this, this.onClickAll, [this.btnRefuse]), this.addOpenAni(this.openAni)
      }
    };
  _UIYaoShenYiJiApplyListView.UID = "ui://qxw7yczgtbj50", __decorateClass([UIController], _UIYaoShenYiJiApplyListView.prototype, "c1", 2), __decorateClass([UIProperty], _UIYaoShenYiJiApplyListView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIYaoShenYiJiApplyListView.prototype, "listItem", 2), __decorateClass([UIProperty], _UIYaoShenYiJiApplyListView.prototype, "goEmpty", 2), __decorateClass([UIProperty], _UIYaoShenYiJiApplyListView.prototype, "btnOk", 2), __decorateClass([UIProperty], _UIYaoShenYiJiApplyListView.prototype, "btnRefuse", 2), __decorateClass([UIProperty], _UIYaoShenYiJiApplyListView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIYaoShenYiJiApplyListView.prototype, "openAni", 2);
  var UIYaoShenYiJiApplyListView = _UIYaoShenYiJiApplyListView,
    import_proto142 = __toESM(require_proto()),
    _YaoShenYiJiZuDuiModel = class t extends BaseModel {
      constructor() {
        super(), this.myTeamDataMap = new Map, this.myTeamApplyMsgMap = new Map, this.applyListMap = new Map, this.teamMap = new Map, this.recruitRoomInfoMap = new Map, this.chatTeamInfoMap = new Map, this.reqTeamListTime = 0
      }
      static get inst() {
        return null == t._instance && (t._instance = new t), t._instance
      }
      init() {
        super.init()
      }
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
      setMyTeamData(t, e, i) {
        this.myTeamDataMap.set(t, e), this.setMyTeamApplyMsg(e.actid, i), this.checkTeamRedP()
      }
      updateTeamData(t) {
        let e = this.myTeamDataMap.get(t.actid);
        if (e) {
          e.limitLevel = t.limitLevel, e.powerType = t.powerType, e.power = t.power, e.autoAgree = t.autoAgree, e.leaderid = t.leaderid, e.limitPower = t.limitPower;
          for (const i in e.roleList) {
            const s = e.roleList[i];
            null != s.show && (s.isLeader = s.charid == t.leaderid)
          }
        }
        this.setMyTeamApplyMsg(t.actid, t.applyState), this.checkTeamRedP()
      }
      deleteMyTeamData(t) {
        this.myTeamDataMap.has(t) && (this.myTeamDataMap.delete(t), this.checkTeamRedP())
      }
      setMyTeamApplyMsg(t, e) {
        this.myTeamApplyMsgMap.set(t, e)
      }
      getMyTeamApplyMsg(t) {
        return this.myTeamApplyMsgMap.get(t)
      }
      deleteMyTeamApplyMsg(t) {
        this.myTeamApplyMsgMap.has(t) && (this.myTeamApplyMsgMap.delete(t), this.checkTeamRedP())
      }
      checkTeamRedP() {
        YaoShenYiJiModel.inst.checkApplyRedP(), YaoShenYiJiModel.inst.checkJoinRedP()
      }
      getMyTeamDataByActId(t) {
        return this.myTeamDataMap.get(t)
      }
      setApplyList(t, e) {
        this.applyListMap.set(t, e), this.checkTeamRedP()
      }
      getApplyListByActId(t) {
        let e = [],
          i = this.applyListMap.get(t);
        if (i)
          for (let t in i) e.push(i[t]);
        return e
      }
      deleteApplyList(t) {
        this.applyListMap.has(t) && (this.applyListMap.delete(t), this.checkTeamRedP())
      }
      setTeamList(t, e) {
        this.teamMap.set(t, e)
      }
      getTeamListByActId(t) {
        let e = [],
          i = this.teamMap.get(t);
        for (let t in i) e.push(i[t]);
        return e.sort(((t, e) => Number(e.powerSum) - Number(t.powerSum))), e
      }
      oneKeyJoinTeam(t) {
        let e = this.getTeamListByActId(t),
          i = null;
        for (const t of e)
          if (this.checkCondition(t)) {
            i = t;
            break
          } if (null == i) UIManager.inst.openMsg(ToolUtil.chinese(12154));
        else if (YaoShenYiJiModel.inst.canCreateOrExitTeam()) YaoShenYiJiZuDuiCtrl.inst.ReqJoin(t, i.teamid);
        else {
          let e = ToolUtil.chinese(12210);
          UIManager.inst.openDialog(e, (() => {
            YaoShenYiJiZuDuiCtrl.inst.ReqJoin(t, i.teamid)
          }))
        }
      }
      checkCondition(t) {
        return !!t.autoAgree && (!(LeadLevelModel.inst.getRoleLevel() < t.limitLevel) && !(PowerModel.inst.curPower < this.getConditionPower(t.powerType, t.power)))
