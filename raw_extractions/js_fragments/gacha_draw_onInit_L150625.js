// Fragment: gacha_draw_onInit_L150625.js
// Lines: 150625-150739 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 150629, 150639

      onInit() {
        this.btnQieHuan.onClick(this, this.onClickAll, [this.btnQieHuan]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnBattle.onClick(this, this.onClickAll, [this.btnBattle]), this.openSubCom(this.btnEnterCopy), this.btnEnterCopy.onClick(this, this.onClickAll, [this.btnEnterCopy]), this.openSubCom(this.btnSelect), this.btnSelect.onClick(this, this.onClickAll, [this.btnSelect]), this.btn_jijie.onClick(this, this.onClickAll, [this.btn_jijie]), this.btn_reward.onClick(this, this.onClickAll, [this.btn_reward]), this.btn_hurt.onClick(this, this.onClickAll, [this.btn_hurt]), this.btnChat.onClick(this, this.onClickAll, [this.btnChat]), this.btnTeamQuit.onClick(this, this.onClickAll, [this.btnTeamQuit]), this.btnApply.onClick(this, this.onClickAll, [this.btnApply]), this.btnZhaoMu.onClick(this, this.onClickAll, [this.btnZhaoMu]), this.openSubCom(this.redPoint), this.openSubCom(this.teamChatRP), this.btnAllServer.onClick(this, this.onClickAll, [this.btnAllServer]), this.btnSect.onClick(this, this.onClickAll, [this.btnSect]), this.btn_jijie_zhaomu.onClick(this, this.onClickAll, [this.btn_jijie_zhaomu]), this.btnTargetType.onClick(this, this.onClickAll, [this.btnTargetType]), this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.btnAddCnt.onClick(this, this.onClickAll, [this.btnAddCnt]), this.openSubCom(this.adRP)
      }
    };
  _UITeamListsView.UID = "ui://bnmjdp0tjnpui", __decorateClass([UIController], _UITeamListsView.prototype, "c1", 2), __decorateClass([UIController], _UITeamListsView.prototype, "c2", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "bgld", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "banner", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txtNote", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txtName", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnQieHuan", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txtLable", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txtValue", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txtMapName", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "goBoss", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txtTime", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "list", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnBattle", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnEnterCopy", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "autoEnterCopy", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnSelect", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "autoSelect", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "goBattle", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btn_jijie", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txt_name", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txt_level", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txt_tips", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "bar_reward", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txt_percent", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btn_reward", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btn_hurt", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnChat", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnTeamQuit", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnApply", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnZhaoMu", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "redPoint", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "teamChatRP", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "cmbteam", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "bgPanel", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnAllServer", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnSect", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btn_jijie_zhaomu", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "goZhaoMu", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnTargetType", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "txtTimes", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "btnAddCnt", 2), __decorateClass([UIProperty], _UITeamListsView.prototype, "adRP", 2);
  var UITeamListsView = _UITeamListsView,
    _UICopysBossView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "CopysBoss", this.name = "CopysBossView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.bannerGuaiWu), this.btnAddCnt.onClick(this, this.onClickAll, [this.btnAddCnt]), this.openSubCom(this.addRedPoint), this.btnCopyBossGo.onClick(this, this.onClickAll, [this.btnCopyBossGo]), this.btn_taofa.addClick(this, this.onClickAll, [this.btn_taofa]), this.openSubCom(this.btn_taofa), this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.btn_canyuweimian.onClick(this, this.onClickAll, [this.btn_canyuweimian])
      }
    };
  _UICopysBossView.UID = "ui://aj3njv6spfx70", __decorateClass([UIProperty], _UICopysBossView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "banner", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "bannerGuaiWu", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "txtScore", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "txtTime", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "btnAddCnt", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "addRedPoint", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "bannerMessage", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "list", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "btnCopyBossGo", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "btn_taofa", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "txt_time", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "txt_defall", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "worldBossTip", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "list_biaoqian", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "groupTabGo", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UICopysBossView.prototype, "btn_canyuweimian", 2);
  var UICopysBossView = _UICopysBossView,
    _UICopysBossDayTimeView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "CopysBossDayTime", this.name = "CopysBossDayTimeView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp])
      }
    };
  _UICopysBossDayTimeView.UID = "ui://b2wg1pqcncx20", __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "img_banner", 2), __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "txt_title", 2), __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "txt_title02", 2), __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "txt_daojishi", 2), __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "ItemList", 2), __decorateClass([UIProperty], _UICopysBossDayTimeView.prototype, "fixHeight", 2);
  var UICopysBossDayTimeView = _UICopysBossDayTimeView,
    CopysBossDayTimeView = class extends UICopysBossDayTimeView {
      constructor() {
        super(), this.endTime = 0, this.maskType = 1, this.layer = "Pop"
      }
      onInit() {
        super.onInit(), this.creatList(this.ItemList, this.onItemRender)
      }
      onEvent() {
        this.addEvent(MsgName.BossDungeon_ChallengeCount, this.onChallengeCount, this), this.addEvent(MsgName.Time_Goto_Next_Day, this.refreshTime, this)
      }
      onChallengeCount() {
        this.endTime = TimerMgr.inst.todayEndTime, this._cfgs = CopysBossCtrl.inst.getCrossBossBuyItems(), this.ItemList.numItems = this._cfgs.length, this.ItemList.refreshVirtualList()
      }
      refreshTime() {
        this.endTime = TimerMgr.inst.todayEndTime, this._cfgs = CopysBossCtrl.inst.getCrossBossBuyItems(), this.ItemList.numItems = this._cfgs.length, this.ItemList.refreshVirtualList()
      }
      onShow() {
        RedPointMgr.inst.setActive(685, !1), this.endTime = TimerMgr.inst.todayEndTime, this._cfgs = CopysBossCtrl.inst.getCrossBossBuyItems(), this.ItemList.numItems = this._cfgs.length, this.onUpdateSec()
      }
      onUpdateSec() {
        let t = this.endTime - TimerMgr.inst.serverTimeSec;
        t <= 0 && (this.endTime = TimerMgr.inst.todayEndTime, t = this.endTime - TimerMgr.inst.serverTimeSec);
        const [e, i, s, o] = TimeUtil.toDHMS(t);
        if (e > 0) this.txt_daojishi.text = `${e}${ToolUtil.chinese(1216)}${i}${ToolUtil.chinese(1217)}`;
        else {
          let t = String(o).padStart(2, "0"),
            e = String(s).padStart(2, "0"),
            n = String(i).padStart(2, "0");
          this.txt_daojishi.text = `${n}:${e}:${t}`
        }
      }
      onItemRender(t, e) {
        e.setData(this._cfgs[t])
      }
      onClickAll(t) {
        t == this.btnClose ? this.close() : t == this.btnHelp && UIManager.inst.openHelp(147)
      }
    },
    _UICopysBossDetailView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "CopysBossDetail", this.name = "CopysBossDetailView"
      }
      onInit() {
        this.btnBattle.onClick(this, this.onClickAll, [this.btnBattle]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnArrow1.onClick(this, this.onClickAll, [this.btnArrow1]), this.btnArrow2.onClick(this, this.onClickAll, [this.btnArrow2]), this.btnAddCnt.onClick(this, this.onClickAll, [this.btnAddCnt]), this.btnTeam.onClick(this, this.onClickAll, [this.btnTeam]), this.openSubCom(this.btnSlect), this.btnSlect.onClick(this, this.onClickAll, [this.btnSlect]), this.openSubCom(this.btnSelect), this.btnSelect.onClick(this, this.onClickAll, [this.btnSelect]), this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.btn_sect_rank.onClick(this, this.onClickAll, [this.btn_sect_rank]), this.btn_jiangli.onClick(this, this.onClickAll, [this.btn_jiangli]), this.btnHonor.onClick(this, this.onClickAll, [this.btnHonor]), this.btnWorldBattle.onClick(this, this.onClickAll, [this.btnWorldBattle])
      }
    };
  _UICopysBossDetailView.UID = "ui://u0mc9oedod9j0", __decorateClass([UIController], _UICopysBossDetailView.prototype, "diethRecodTime", 2), __decorateClass([UIController], _UICopysBossDetailView.prototype, "c1", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnBattle", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "title", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnArrow1", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnArrow2", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "MapIcon", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "MapLine", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txtMapName", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "DingWei", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "ldBg", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "imgIcon", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "Hero01", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txtRefresh", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "Hero02", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txtName", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txtRecommand", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "Name", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "list", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "ListGoods", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txtBattleCnt", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnAddCnt", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "Time", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnTeam", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnSlect", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txt_title02", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "imgBattlieing", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "goCurSelect", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "bar_bossHp_green", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "bar_bossHp_red", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txt_title", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "ScoreBg02", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "ScoreBg", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txtScore", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "pingfen", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnSelect", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "goDouble", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btn_sect_rank", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btn_jiangli", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "worldGroup", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txtTips", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txt_tips02", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnHonor", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "btnWorldBattle", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "txt_yijibai", 2), __decorateClass([UIProperty], _UICopysBossDetailView.prototype, "fixHeight", 2);
  var UICopysBossDetailView = _UICopysBossDetailView,
    _UITeamCopyAddTimesView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "TeamCopyAddTimes", this.name = "TeamCopyAddTimesView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnAdvTimes), this.btnAdvTimes.onClick(this, this.onClickAll, [this.btnAdvTimes]), this.openSubCom(this.btnBuyTimes), this.btnBuyTimes.onClick(this, this.onClickAll, [this.btnBuyTimes]), this.openSubCom(this.btn_douyin), this.btn_douyin.onClick(this, this.onClickAll, [this.btn_douyin]), this.openSubCom(this.adRP)
      }
    };
  _UITeamCopyAddTimesView.UID = "ui://akwxwu5lr2y60", __decorateClass([UIController], _UITeamCopyAddTimesView.prototype, "c1", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "btnAdvTimes", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "imgguangao", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "btnBuyTimes", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "txtLeaveTimes", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "goBuyCnt", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "btn_douyin", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "adRP", 2), __decorateClass([UIProperty], _UITeamCopyAddTimesView.prototype, "fixHeight", 2);
  var UITeamCopyAddTimesView = _UITeamCopyAddTimesView,
    TeamCopyAddTimesView = class extends UITeamCopyAddTimesView {
      constructor() {
        super(), this.maskType = 1, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit()
      }
      onEvent() {
        this.addEvent(MsgName.TeamDungeon_Refresh_Info, this.RefreshInfo), this.addEvent(MsgName.Bag_Refresh_Items, this.RefreshInfo), this.addEvent(MsgName.BossDungeon_ChallengeCount, this.RefreshInfo)
      }
      onShow() {
        this.type = this.args[0], this.RefreshInfo(), this.unbindAllRedPoint(), 0 == this.type ? this.bindRedPoint(this.adRP, 297) : 1 == this.type && this.bindRedPoint(this.adRP, 303)
      }
      RefreshInfo() {
        0 == this.type ? this.RefreshTeamCopy() : 1 == this.type && this.RefreshBossCopy()
      }
      RefreshTeamCopy() {
        let t = TeamCtrl.inst,
          e = TeamModel.inst,
          i = t.TeamCopyInfo,
          s = i.dailyExchangeCnt,
          o = i.dailyAdCnt;
        this.buyNum = e.dayBuyLimit - s, this.txtLeaveTimes.text = `${ToolUtil.chinese(1271)}${this.buyNum}/${e.dayBuyLimit}`, this.adNum = e.dayAdvLimit - o, this.btnAdvTimes.setText(`${this.adNum}/${e.dayAdvLimit}`), this.btnBuyTimes.grayed = this.buyNum <= 0, this.btnAdvTimes.grayed = this.adNum <= 0, this.btn_douyin.txtConsume.text = `${this.adNum}/${e.dayAdvLimit}`, this.btn_douyin.grayed = this.adNum <= 0;
        let n = e.exchange;
        this.btnBuyTimes.setItem(n[0], n[1]), this.refreshButtonLayout(e.dayAdvLimit)
      }
      refreshButtonLayout(t) {
        FnsdkMgr.isTTMiniGame ? this.btn_douyin.visible = t > 0 : this.btnAdvTimes.visible = this.imgguangao.visible = t > 0;
        let e = fgui.GRoot.inst.width;
        this.goBuyCnt.x = 0 == t ? (e - 292) / 2 : (e - 292) / 2 - 140
      }
