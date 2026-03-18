// Fragment: stat_system_t_L197236.js
// Lines: 197236-197337 of bundle-beautified.js
// Categories: Stat System
// Keywords: attack
// Hit lines: 197236, 197237

        let t = LoginCtrl.inst.getSeverNameById(this.attackInfo.attack.zoneid);
        this.txtFangShou.text = StringUtil.format(ToolUtil.chinese(12201), t, this.attackInfo.attack.name)
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
    _UIYaoShenYiJiView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YaoShenYiJi", this.name = "YaoShenYiJiView"
      }
      onInit() {
        this.openSubCom(this.goTitle), this.btn_duihuan.onClick(this, this.onClickAll, [this.btn_duihuan]), this.btnTeam.addClick(this, this.onClickAll, [this.btnTeam]), this.openSubCom(this.btnTeam), this.btn_bang_reward.onClick(this, this.onClickAll, [this.btn_bang_reward]), this.btn_bang.onClick(this, this.onClickAll, [this.btn_bang]), this.btn_xianyao.addClick(this, this.onClickAll, [this.btn_xianyao]), this.openSubCom(this.btn_xianyao), this.btn_canyuweimian.onClick(this, this.onClickAll, [this.btn_canyuweimian]), this.btnInfo.onClick(this, this.onClickAll, [this.btnInfo]), this.openSubCom(this.bgTitle02), this.openSubCom(this.toolBar), this.addOpenAni(this.openAni)
      }
    };
  _UIYaoShenYiJiView.UID = "ui://qt0gqjnutbj50", __decorateClass([UIController], _UIYaoShenYiJiView.prototype, "c1", 2), __decorateClass([UIController], _UIYaoShenYiJiView.prototype, "crossC2", 2), __decorateClass([UIController], _UIYaoShenYiJiView.prototype, "c2", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "tabContainer", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "txt_times", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "goTime", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "goTitle", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "btn_duihuan", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "btnTeam", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "btn_bang_reward", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "btn_bang", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "btn_xianyao", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "txt_activity", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "goOver", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "btn_canyuweimian", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "txtCrossNum", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "btnInfo", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "goActivity", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "bgTitle02", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "listTask", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "listShop", 2), __decorateClass([UIProperty], _UIYaoShenYiJiView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIYaoShenYiJiView.prototype, "openAni", 2);
  var UIYaoShenYiJiView = _UIYaoShenYiJiView,
    _UIYaoShenYiJiRewardView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YaoShenYiJiReward", this.name = "YaoShenYiJiRewardView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.rank_reward_myself), this.openSubCom(this.toolBar), this.addOpenAni(this.openAni)
      }
    };
  _UIYaoShenYiJiRewardView.UID = "ui://qnhz3bgktbj50", __decorateClass([UIController], _UIYaoShenYiJiRewardView.prototype, "subTab", 2), __decorateClass([UIProperty], _UIYaoShenYiJiRewardView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIYaoShenYiJiRewardView.prototype, "listItem", 2), __decorateClass([UIProperty], _UIYaoShenYiJiRewardView.prototype, "rank_reward_myself", 2), __decorateClass([UIProperty], _UIYaoShenYiJiRewardView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UIYaoShenYiJiRewardView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIYaoShenYiJiRewardView.prototype, "openAni", 2);
  var UIYaoShenYiJiRewardView = _UIYaoShenYiJiRewardView,
    import_proto145 = __toESM(require_proto()),
    YaoShenYiJiRewardView = class extends UIYaoShenYiJiRewardView {
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
          title: ToolUtil.chinese(1908)
        }, {
          title: ToolUtil.chinese(12148)
        }], (t => {
          this.clickTab(t)
        }))
      }
      clickTab(t) {
        var e, i, s;
        this.tabIndex = t;
        let o = 0 == t ? import_proto145.default.rank.RankType.YAOSHOU_USER : import_proto145.default.rank.RankType.YAOSHOU_TEAM,
          n = RankCtrl.inst.GetMainRankId(o),
          r = (null == (e = this.ActivityData) ? void 0 : e.iscross) ? null == (i = this.ActivityData) ? void 0 : i.rankKey : "",
          a = YaoShenYiJiZuDuiModel.inst.getMyTeamDataByActId(null == (s = this.ActivityData) ? void 0 : s.rankKey),
          l = null != a ? a.teamid : 0;
        RankCtrl.inst.ReqMyRankInfo(n, r, l), 0 == t ? this.rewardCfgs = YaoShenYiJiModel.inst.getRankRewardCfg() : this.teamRewardCfgs = YaoShenYiJiModel.inst.getTeamRankRewardCfg()
      }
      get ActivityData() {
        return YaoShenYiJiModel.inst.getActivityData()
      }
      refreshMyInfo(t) {
        this.myRankData = t, 0 == this.tabIndex ? this.myRank = null != t.myrank && null != t.myrank.info3 ? t.myrank.info3.rank : 0 : this.myRank = null != t.myrank && null != t.myrank.info5 ? t.myrank.info5.rank : 0;
        let e = 0 == this.tabIndex ? ToolUtil.chinese(2211) : ToolUtil.chinese(12242);
        this.rank_reward_myself.txtRank.text = e + (this.myRank > 0 ? this.myRank.toString() : ToolUtil.chinese(1240)), this.listItem.numItems = 0 == this.tabIndex ? this.rewardCfgs.length : this.teamRewardCfgs.length
      }
      onItemRender(t, e) {
        0 == this.tabIndex ? e.setData1(this.rewardCfgs[t], this.myRank) : e.setData2(this.teamRewardCfgs[t], this.myRank)
      }
    },
    import_proto146 = __toESM(require_proto()),
    _UIYaoShenYiJiBangView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YaoShenYiJiBang", this.name = "YaoShenYiJiBangView"
      }
      onInit() {
        this.openSubCom(this.model0), this.openSubCom(this.model1), this.openSubCom(this.model2), this.openSubCom(this.mySelf), this.openSubCom(this.toolBar), this.openSubCom(this.bgTitle2), this.openSubCom(this.bgTitle1), this.addOpenAni(this.openAni)
      }
    };
  _UIYaoShenYiJiBangView.UID = "ui://lfya6rftq7ob0", __decorateClass([UIController], _UIYaoShenYiJiBangView.prototype, "c1", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "tabContainer", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "model0", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "model1", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "model2", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "list_rank", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "imgbg", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "mySelf", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "txtDataDesc", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "bgTitle2", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "bgTitle1", 2), __decorateClass([UIProperty], _UIYaoShenYiJiBangView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIYaoShenYiJiBangView.prototype, "openAni", 2);
  var UIYaoShenYiJiBangView = _UIYaoShenYiJiBangView,
    YaoShenYiJiBangView = class extends UIYaoShenYiJiBangView {
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
        t == this.uid && UIManager.inst.open(YaoShenYiJiView.UID)
