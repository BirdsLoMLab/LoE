// Fragment: stat_system_onItemRender_L166411.js
// Lines: 166411-166512 of bundle-beautified.js
// Categories: Stat System
// Keywords: attack
// Hit lines: 166412

      onItemRender(t, e) {
        0 == t ? (e.txtName.text = ToolUtil.chinese(13223), e.txtValue.text = this._curCfg.attack.toString()) : 1 == t ? (e.txtName.text = ToolUtil.chinese(13224), e.txtValue.text = this._curCfg.time_limit.toString()) : 2 == t && (e.txtName.text = ToolUtil.chinese(13225), e.txtValue.text = this._curCfg.long.toString())
      }
    },
    import_proto80 = __toESM(require_proto()),
    _UIDiaoYuRankRewardView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "DiaoYuRank", this.name = "DiaoYuRankRewardView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.rank_reward_myself), this.openSubCom(this.toolBar), this.addOpenAni(this.openAni)
      }
    };
  _UIDiaoYuRankRewardView.UID = "ui://lxyowvhdixaxc", __decorateClass([UIController], _UIDiaoYuRankRewardView.prototype, "subTab", 2), __decorateClass([UIProperty], _UIDiaoYuRankRewardView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIDiaoYuRankRewardView.prototype, "listItem", 2), __decorateClass([UIProperty], _UIDiaoYuRankRewardView.prototype, "rank_reward_myself", 2), __decorateClass([UIProperty], _UIDiaoYuRankRewardView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UIDiaoYuRankRewardView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIDiaoYuRankRewardView.prototype, "openAni", 2);
  var UIDiaoYuRankRewardView = _UIDiaoYuRankRewardView,
    DiaoYuRankRewardView = class extends UIDiaoYuRankRewardView {
      constructor() {
        super(), this.myRank = 0, this.tabIndex = 0, this.maskType = 1, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit(), this.creatList(this.listItem, this.onItemRender), this.initTab()
      }
      onEvent() {
        this.addEvent(MsgName.Rank_RefreshMyInfo, this.refreshMyInfo)
      }
      onShow() {}
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
      initTab() {
        this.toolBar.setData([{
          title: ToolUtil.chinese(13283)
        }, {
          title: ToolUtil.chinese(13284)
        }], (t => {
          this.clickTab(t)
        }))
      }
      clickTab(t) {
        var e, i;
        this.tabIndex = t;
        let s = 0 == t ? import_proto80.default.rank.RankType.DIAO_YU_POINT : import_proto80.default.rank.RankType.DIAO_YU_WEIGHT,
          o = RankCtrl.inst.GetMainRankId(s),
          n = (null == (e = this.ActivityData) ? void 0 : e.iscross) ? null == (i = this.ActivityData) ? void 0 : i.rankKey : "";
        RankCtrl.inst.ReqMyRankInfo(o, n), this.rewardCfgs = DiaoYuCtrl.inst.getRankRewardCfg(import_proto80.default.rank.RankType.DIAO_YU_POINT), this.fishRewardCfgs = DiaoYuCtrl.inst.getRankRewardCfg(import_proto80.default.rank.RankType.DIAO_YU_WEIGHT)
      }
      get ActivityData() {
        return DiaoYuCtrl.inst.limitActivityData
      }
      refreshMyInfo(t) {
        this.myRankData = t, this.myRank = null != t.myrank && null != t.myrank.info3 ? t.myrank.info3.rank : 0;
        let e = ToolUtil.chinese(13314);
        this.rank_reward_myself.txtRank.text = e + (this.myRank > 0 ? this.myRank.toString() : ToolUtil.chinese(1240)), this.listItem.numItems = 0 == this.tabIndex ? this.rewardCfgs.length : this.fishRewardCfgs.length
      }
      onItemRender(t, e) {
        0 == this.tabIndex ? e.setData1(this.rewardCfgs[t], this.myRank) : e.setData2(this.fishRewardCfgs[t], this.myRank)
      }
    },
    import_proto81 = __toESM(require_proto()),
    _UIDiaoYuRankView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "DiaoYuRank", this.name = "DiaoYuRankView"
      }
      onInit() {
        this.openSubCom(this.model0), this.openSubCom(this.model1), this.openSubCom(this.model2), this.openSubCom(this.mySelf), this.openSubCom(this.toolBar), this.openSubCom(this.bgTitle2), this.openSubCom(this.bgTitle1), this.addOpenAni(this.openAni)
      }
    };
  _UIDiaoYuRankView.UID = "ui://lxyowvhdoocl0", __decorateClass([UIController], _UIDiaoYuRankView.prototype, "c1", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "tabContainer", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "model0", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "model1", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "model2", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "list_rank", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "imgbg", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "mySelf", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "txtDataDesc", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "bgTitle2", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "bgTitle1", 2), __decorateClass([UIProperty], _UIDiaoYuRankView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIDiaoYuRankView.prototype, "openAni", 2);
  var UIDiaoYuRankView = _UIDiaoYuRankView,
    DiaoYuRankView = class extends UIDiaoYuRankView {
      constructor() {
        super(), this.tabIndex = 0, this.rankData = new Array, this.teamRankData = new Array, this._isRefreshTime = !0, this.mainCloseButtonType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.list_rank, this.onRankListItemRender), RankCtrl.inst.enterRankView3D()
      }
      onClose() {
        RankCtrl.inst.exitRank3D()
      }
      closeMyView(t) {
        t == this.uid && UIManager.inst.open(DiaoYuView.UID)
      }
      onEvent() {
        this.addEvent(MsgName.Refresh_MyRank_Info, this.refreshMyself), this.addEvent(MsgName.Refresh_Rank_Info, this.RetRankInfo), this.addEvent(MsgName.Rank_RefreshCloths, this.RefreshTopCloth), this.addEvent(MsgName.Main_Menu_Btn_Close_Click, this.closeMyView)
      }
      onShow() {
        this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid), this.refreshTab(), this.refreshActTime(), this.bgTitle1.helpId = 376, this.bgTitle2.helpId = 376
      }
      get ActivityData() {
        return DiaoYuCtrl.inst.limitActivityData
      }
      refreshTab() {
        this.toolBar.setData([{
          title: ToolUtil.chinese(13283)
        }, {
          title: ToolUtil.chinese(13284)
        }], (t => {
          this.clickTab(t)
        })), this.toolBar.refreshList(!0, !1), this.toolBar.selectIdx = this.tabIndex
      }
      clickTab(t) {
        var e, i;
