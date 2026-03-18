// Fragment: economy_t_L290042.js
// Lines: 290042-290143 of bundle-beautified.js
// Categories: Economy
// Keywords: diamond
// Hit lines: 290043

        let t = ConfigManager.inst.GetXmlConfig("itemdefine");
        return parseInt(t.itemid.diamond)
      }
      getMaxResCount() {
        let t = 0;
        for (const e of this.rewardList) 2 != e.getType && (t += e.price);
        return t
      }
      ReqGetRewardRetrieval(t, e) {
        let i = {};
        i.id = t, i.type = e, NetManager.inst.send("reward_retrieval.ReqGetRewardRetrieval", i)
      }
      checkRewardFindRedP() {
        let t = this.canShowBtn();
        RedPointMgr.inst.setActive(25, t && !this.hasOpenView)
      }
      canShowBtn() {
        let t = OpenFuncModel.inst.isFuncOpen(1017, !1),
          e = this.getRewardFindList();
        return t && e.length > 0
      }
      getRewardFindList() {
        let t = [];
        for (const e of this.rewardList) 2 != e.getType && t.push(e);
        return t.sort(((t, e) => t.id - e.id)), t
      }
      checkViewClose() {
        0 == this.getRewardFindList().length && UIManager.inst.close(RewardRetrieveView.UID)
      }
    };
  RewardRetrieveCtrl._instance = null, RewardRetrieveCtrl = __decorateClass([regClass175("5-61wM7TRcOBPUfc_VzA3w")], RewardRetrieveCtrl);
  var DailyTaskView = class extends UIDailyTaskView {
      constructor() {
        super(), this.playingFlyAnim = !1, this.effTweener = [], this.flyEffects = [], this.canGetRewardItem = [], this.destoryType = 0, this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.listTask, this.renderItemList, null, null), this.creatList(this.listDaily, this.renderDailyScoreItemList, null, this.clickDailyScoreItem)
      }
      onEvent() {
        this.addEvent(MsgName.Msg_Task_Refresh, this.refreshDailyTask), this.addEvent(MsgName.WeiMian_Open, this.refreshDailyTask), this.addEvent(MsgName.Task_Active_Score, this.refreshScore), this.addEvent(MsgName.Task_Play_DailyEffect, this.playFlyEffect), this.addEvent(MsgName.Reward_Find_Refresh, this.refreshRewardFind), this.bindRedPoint(this.btnGet.goRed, 7), this.bindRedPoint(this.rewardFindRed, 25)
      }
      onShow() {
        this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid), this.setTexture(this.imgBg, "szrc_bg_1", "DailyTask"), this.refreshDailyTask(), this.refreshScore(), this.refreshTimer(), this.refreshRewardFind()
      }
      refreshRewardFind() {
        this.btnRewardFind.visible = RewardRetrieveCtrl.inst.canShowBtn()
      }
      refreshScore() {
        this.playingFlyAnim || (this.refreshWeekScore(), this.refreshDailyScore())
      }
      onClickAll(t) {
        t == this.btnClose ? UIManager.inst.close(this.uid) : t == this.btnGet ? this.clickBtnGetAll() : t == this.btnRewardFind && UIManager.inst.open(RewardRetrieveView.UID)
      }
      onHide() {
        this.stopTimer(), this.clearTween()
      }
      refreshTimer() {
        this.setTimeText(), this.timerId = this.addTimerTask(-1, 1e3, (() => {
          this.setTimeText()
        }))
      }
      setTimeText() {
        const t = new Date(TimerMgr.inst.serverTime - 1e3 * TimerMgr.inst.timeZone);
        t.setUTCHours(0, 0, 0, 0);
        let e = t.getTime() / 1e3 + TimerMgr.inst.timeZone + 86400 - TimerMgr.inst.serverTime / 1e3;
        e > 0 && (this.txtTips.text = StringUtil.format(ToolUtil.chinese(1450), TimeUtil.formatDHMS(e, 6)))
      }
      stopTimer() {
        this.timerId && (this.removeTimerTask(this.timerId), this.timerId = null)
      }
      clearTween() {
        for (const t of this.effTweener) null != t && t.kill();
        for (const t of this.flyEffects) null != t && t.dispose()
      }
      renderItemList(t, e) {
        let i = e,
          s = this.taskData[t];
        this.setDailyItemDta(s, i)
      }
      playFlyEffect(t) {
        this.playDailyFlyEffect(t)
      }
      refreshWeekScore() {
        this.weekBar.setData()
      }
      refreshDailyScore(t = !1) {
        let e = TaskCtrl.inst.getDailyTaskActiveScore();
        this.dailyScoreData = TaskCtrl.inst.getDialyRewardCfg();
        let i = e / this.dailyScoreData[4].id * 100;
        if (this.listDaily.numItems = this.dailyScoreData.length, this.listDaily.scrollPane.touchEffect = !1, t) {
          let t = fgui.GTween.to(this.sliderDaily.value, i, .6).onUpdate((t => {
            this.sliderDaily.value = t.value.x, this.goDailyEnd.visible = this.sliderDaily.value >= 100
          })).onComplete((() => {
            for (let e = 0; e < this.effTweener.length; e++) {
              this.effTweener[e] == t && (this.effTweener[e] = null)
            }
          }));
          null == this.effectSliderDaily && (this.effectSliderDaily = fgui.UIPackage.createObject("DailyTask", "DailyTask_jingyantiao_eff"), this.goSliderDailyNode.addChild(this.effectSliderDaily)), this.effectSliderDaily.setScale(1 * Math.min(i / 100, 1), 1), this.effectSliderDaily.visible = !0, this.effectSliderDaily.t0.play((() => {
            this.dailyLevel.setData(e, 2)
          })), this.effTweener.push(t)
        } else this.sliderDaily.value = i, this.goDailyEnd.visible = this.sliderDaily.value >= 100, this.dailyLevel.setData(e, 2)
      }
