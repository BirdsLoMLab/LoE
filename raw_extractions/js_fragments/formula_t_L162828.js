// Fragment: formula_t_L162828.js
// Lines: 162828-162928 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil
// Hit lines: 162828

          if (this.curPage = Math.ceil(t / this.MAX_NUM_PAGE), t > this.curIdx) {
            let t = this.curPage + 1;
            e > this.MAX_NUM_PAGE / 2 && t != this.curReqPage && this.curPage * this.MAX_NUM_PAGE + 1 <= this.load_user_show_num && (this.reqRankInfoX(this.limitRankCfgType, this.curPage * this.MAX_NUM_PAGE + 1, t * this.MAX_NUM_PAGE), this.curReqPage = t)
          } else {
            let t = this.curPage - 1;
            t = t < 0 ? 0 : t, e < this.MAX_NUM_PAGE / 2 && t != this.curPage && t != this.curReqPage && (this.reqRankInfoX(this.limitRankCfgType, t * this.MAX_NUM_PAGE + 1, this.curPage * this.MAX_NUM_PAGE), this.curReqPage = t)
          }
        }
        this.curIdx = t
      }
      onRankPageUpdate(t) {
        t == this.limitRankCfgType && this.reqRankInfoX(this.limitRankCfgType, (this.curPage - 1) * this.MAX_NUM_PAGE + 1, this.curPage * this.MAX_NUM_PAGE)
      }
      reqRankInfoX(t, e, i) {
        let s = this.limitActivityData && this.limitActivityData.iscross,
          o = s ? this.limitActivityData.rankKey : "";
        RankCtrl.inst.reqRankInfoX(t, e, i, o, s)
      }
      onInit() {
        super.onInit(), this.ctrl = RankCtrl.inst, this.model = RankModel.inst, this.oldHeight = this.rankList.height, this.creatList(this.rankList, this.onRankListItemRender), this.creatList(this.rewardList, this.onRewardListItemRender)
      }
      onEvent() {
        this.addEvent(MsgName.Rank_RefreshCloths, this.refreshModelCase), this.addEvent(MsgName.Rank_PageUpdate, this.onRankPageUpdate), this.addEvent(MsgName.Rank_RefreshInfos, this.updateRankData), this.rankList.on(fgui.Events.SCROLL, this, this.onRankListScroll)
      }
      onRankListItemRender(t, e) {
        if (t < this.info3Array.length) e.setData(this.info3Array[t].rank - 1, this.limitRankCfgType, this.info3Array[t], this.isCross, !1, this.isPersonBang);
        else {
          let i = 0,
            s = 0;
          this.info3Array.length > 0 && (s = this.info3Array.length - 1, i = this.info3Array[this.info3Array.length - 1].rank - 1), e.setData(t - s + i, this.limitRankCfgType, null, this.isCross)
        }
      }
      onRewardListItemRender(t, e) {
        var i;
        e.setData(this.rewardCfgs[t]);
        let s = this.ctrl.getRankInfo3FromRankInfo(null == (i = this.myRankData) ? void 0 : i.myrank);
        s && (this.rewardCfgs[t].min <= s.rank && this.rewardCfgs[t].max >= s.rank ? e.selfInterval.selectedIndex = 1 : e.selfInterval.selectedIndex = 0)
      }
      refreshModelCase(t) {
        var e, i;
        let s = this.limitRankCfgType == import_proto70.default.rank.RankType.FIRE_DRAGON || this.limitRankCfgType == import_proto70.default.rank.RankType.HAPPY_PARTY_CHARM ? -1.5 : 0;
        for (let t = 0; t <= 2; t++)(null == (e = this.info3Array) ? void 0 : e[t]) && this.model.rankMisc ? null == (i = this.model.rankMisc.data) || i.forEach((e => {
          String(e.id) == String(this.info3Array[t].charid) && this["model" + t].SetData(t + 1, this.info3Array[t].name, e, this.info3Array[t].rank, s)
        })) : this["model" + t].SetData(t + 1, null, null, 0, s)
      }
      onShow() {
        this.subParam = this.args[1], this.ctrl.clearPlayerModel(), this.subParam ? (this.showSub.selectedIndex = 1, this.btnSub0.title = this.subParam.getSubTitle(0), this.btnSub1.title = this.subParam.getSubTitle(1), this.onSub()) : (this.showSub.selectedIndex = 0, this.refreshView(this.args[0]))
      }
      refreshView(t) {
        var e, i, s, o;
        null != t || (t = this.args[0]), this.unbindAllRedPoint();
        const n = t;
        switch (this.tab.selectedIndex = Number(n.tabType), this.limitRankCfgType = n.rankType, this.myRankData = n.myRankData, this.tab.selectedIndex) {
          case 0:
            this.load_user_show_num = n.maxCount;
            break;
          case 1:
            this.rewardCfgs = n.rewardCfgs
        }
        this.limitActivityData = n.activityData;
        const r = n.label;
        this.isPersonBang = n.isPersonBang, this.isCross = null == (e = this.limitActivityData) ? void 0 : e.iscross, this.zonelist = null == (i = this.limitActivityData) ? void 0 : i.zonelist, this.btn_canyuweimian.visible = this.isCross;
        const a = Cfglimit_rank_activity.get({
          type: this.limitRankCfgType
        })[0];
        this.txtDataDesc.text = r || (a ? ToolUtil.chinese(a.label) : ToolUtil.chinese(2078));
        let l = this.model.getRankInfo(this.limitRankCfgType);
        this.info3Array = this.ctrl.getRankInfo3FromAllRank(l), this.limitRankCfgType == import_proto70.default.rank.RankType.LIMIT_SEPT_BOSS ? (this.info3Array = AbyssCtrl.inst.getRankList(), this.myselfItem.setAbyssData(n.sectMyRankData), this.rankList.numItems = Math.max(20, this.info3Array.length)) : (this.rewardList.numItems = null != (o = null == (s = this.rewardCfgs) ? void 0 : s.length) ? o : 0, this.rankList.numItems = this.load_user_show_num, this.myselfItem.SetData(this.myRankData, this.isCross, !1, this.isPersonBang));
        let c = [];
        for (let t = 0; t <= 2; t++) t < this.info3Array.length && this.info3Array[t] && c.push({
          charid: this.info3Array[t].charid,
          zoneid: this.info3Array[t].zoneid
        });
        this.ctrl.ReqRankMisc(c), this.refreshModelCase(null), this.selectedIndex = this.c2.selectedIndex, this.btn_canyuweimian.x = this.rankList.x + this.rankList.width - this.btn_canyuweimian.width
      }
      onSub() {
        const t = this.subTab.selectedIndex;
        this.refreshView(this.subParam.getParam(t))
      }
      updateRankData() {
        let t = this.model.getRankInfo(this.limitRankCfgType);
        this.info3Array = this.ctrl.getRankInfo3FromAllRank(t), this.limitRankCfgType == import_proto70.default.rank.RankType.LIMIT_SEPT_BOSS && (this.info3Array = AbyssCtrl.inst.getRankList()), this.rankList.refreshVirtualList()
      }
      onClickAll(t) {
        t == this.btn_canyuweimian ? UIManager.inst.open(MonsterWeiMianView.UID, null, this.zonelist) : (t == this.btnSub0 || t == this.btnSub1) && this.onSub()
      }
      onHide() {
        this.rankList.off(fgui.Events.SCROLL, this, this.onRankListScroll), this.ctrl.clearPlayerModel()
      }
      set selectedIndex(t) {
        this.c2.selectedIndex = t;
        let e = this.rankList.scrollPane,
          i = 40;
        switch (this.c2.selectedIndex) {
          case 0:
            i = 80;
            break;
          case 1:
            i = 40;
            break;
          case 2:
