// Fragment: gacha_draw_t_L196252.js
// Lines: 196252-196353 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 196253

        let t = YaoShenYiJiZuDuiModel.inst.getTeamArgsByActId(this.actId);
        null != t && (this.txtName.text = ToolUtil.chinese(t[0]), this.setTexture(this.banner, t[1], "YaoShenYiJi")), this.refreshView(), YaoShenYiJiZuDuiCtrl.inst.ReqRuinsTeamInfo()
      }
      refreshView() {
        this.teamData = YaoShenYiJiZuDuiModel.inst.getMyTeamDataByActId(this.actId), this.list.numItems = 3;
        let t = this.teamData.leaderid == LoginCtrl.inst.charid;
        this.btnApply.grayed = !t, this.btnZhaoMu.grayed = !t, this.btnSheZhi.visible = t
      }
      onMouseDown(t) {
        let e = t.target;
        if (null != e && null != e.$owner && (e.$owner && e.$owner instanceof fgui.GButton || this.dispatchEvent(MsgName.Team_ListItemHide), "btnTouch" == e.$owner.name)) {
          e.$owner.parent.showBtnList()
        }
      }
      onClickEmpty(t) {
        if (t.target && t.target.$owner && t.target.$owner.name) {
          let e = t.target.$owner.name;
          if ("btnAllServer" == e || "btnSect" == e || "btnZhaoMu" == e || "bgPanel" == e || "goZhaoMu" == e) return
        }
        this.goZhaoMu.visible = !1
      }
      onItemRender(t, e) {
        var i;
        let s = [];
        if (null != this.teamData)
          for (const t in this.teamData.roleList) {
            let e = this.teamData.roleList[t];
            null != e.show && s.push(e)
          }
        let o = null == (i = this.teamData) ? void 0 : i.leaderid;
        e.setData(s[t], o, this.actId)
      }
      onClickAll(t) {
        if (t == this.btnClose) this.close();
        else if (t == this.btnSheZhi) YaoShenYiJiModel.inst.openTeamSettingView();
        else if (t == this.btnChat);
        else if (t == this.btnTeamQuit) {
          if (YaoShenYiJiModel.inst.canCreateOrExitTeam()) return void this.onClicBtnQuit();
          let t = {
            msg: ToolUtil.chinese(12208),
            onlyOk: !0
          };
          UIManager.inst.openDialog(t)
        } else if (t == this.btnApply) {
          if (this.btnApply.grayed) return void UIManager.inst.openMsg(ToolUtil.chinese(1846));
          this.onClicBtnApply()
        } else if (t == this.btnZhaoMu) {
          if (this.btnZhaoMu.grayed) return void UIManager.inst.openMsg(ToolUtil.chinese(1846));
          this.onClicBtnRecruit()
        } else t == this.btnAllServer ? this.onZhaoMu(import_proto143.default.db.ChatType.TEAM_HELP) : t == this.btnSect && this.onZhaoMu(import_proto143.default.db.ChatType.TO_SEPT)
      }
      onClicBtnQuit() {
        UIManager.inst.openDialog(ToolUtil.chinese(2474), (() => {
          YaoShenYiJiZuDuiCtrl.inst.ReqLeave(this.actId)
        }), null, ToolUtil.chinese(2473))
      }
      onClicBtnApply() {
        UIManager.inst.open(YaoShenYiJiApplyListView.UID, null, this.actId)
      }
      onClicBtnRecruit() {
        SectModel.inst.isInPlayerSect() ? this.goZhaoMu.visible = !0 : this.onZhaoMu(import_proto143.default.db.ChatType.TEAM_HELP)
      }
      onZhaoMu(t) {
        YaoShenYiJiZuDuiCtrl.inst.ReqRecruit(this.actId) && (YaoShenYiJiZuDuiModel.inst.sendTeamMsg(t, this.actId), UIManager.inst.open(ChatView.UID, null, t))
      }
    },
    {
      regClass: regClass86,
      property: property86
    } = Laya,
    YaoShenYiJiZuDuiCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.init()
      }
      static get inst() {
        return null == YaoShenYiJiZuDuiCtrl._instance && (YaoShenYiJiZuDuiCtrl._instance = new YaoShenYiJiZuDuiCtrl), YaoShenYiJiZuDuiCtrl._instance
      }
      init() {
        super.init()
      }
      registS2CHandler() {
        this.addS2CHandle("ruins_team.RetTeamList", this.RetTeamList), this.addS2CHandle("ruins_team.RefreshBase", this.RefreshBase), this.addS2CHandle("ruins_team.RetCreate", this.RetCreate), this.addS2CHandle("ruins_team.RetApplyList", this.RetApplyList), this.addS2CHandle("ruins_team.RetJoin", this.RetJoin), this.addS2CHandle("ruins_team.RetLeave", this.RetLeave), this.addS2CHandle("ruins_team.NotifyCloseTeam", this.NotifyCloseTeam), this.addS2CHandle("ruins_team.NotifyRecruit", this.NotifyRecruit), this.addS2CHandle("ruins_team.RetApplyUser", this.RetApplyUser), this.addS2CHandle("ruins_team.RefreshInfo", this.RefreshInfo), this.addS2CHandle("ruins_team.RetKick", this.RetKick), this.addS2CHandle("ruins_team.RetChatTeamInfo", this.RetChatTeamInfo), this.addS2CHandle("ruins_team.RetRuinsTeamInfo", this.RetRuinsTeamInfo)
      }
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
      RefreshInfo(t) {
        let e = YaoShenYiJiZuDuiModel.inst.getMyTeamDataByActId(t.actid);
        YaoShenYiJiZuDuiModel.inst.setMyTeamData(t.actid, t.team, t.applyState), this.dispatchEvent(MsgName.Activity_MyTeam_Refresh), YaoShenYiJiCtrl.inst.refreshPlayerList(), t.isJoin && null == e && (UIManager.inst.close(YaoShenYiJiZuDuiListView.UID), UIManager.inst.open(YaoShenYiJiZuDuiView.UID, null, t.actid))
      }
      ReqTeamList(t) {
        let e = {};
        e.actid = t, NetManager.inst.send("ruins_team.ReqTeamList", e)
      }
      RetTeamList(t) {
        YaoShenYiJiZuDuiModel.inst.setTeamList(t.actid, t.teamList), this.dispatchEvent(MsgName.Activity_Team_Refresh)
      }
      RefreshBase(t) {
        YaoShenYiJiZuDuiModel.inst.updateTeamData(t), this.dispatchEvent(MsgName.Activity_MyTeam_Refresh), YaoShenYiJiCtrl.inst.refreshPlayerList()
