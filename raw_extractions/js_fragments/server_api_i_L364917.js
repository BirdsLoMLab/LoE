// Fragment: server_api_i_L364917.js
// Lines: 364917-365117 of bundle-beautified.js
// Categories: Server/API
// Keywords: joynetgame
// Hit lines: 364918, 364970, 365057, 365087

        let i = this.info.options[this.idx];
        this.choiceContent.text = i.text, this.img.visible = !StringUtil.isNullOrEmpty(i.image), this.setSize(this.width, this.img.visible ? 255 : 55), this.img.visible && (this.img.url = ToolUtil.get_urlBak(`https://sydh-us-cdnres.joynetgame.com/cdnconfig_${Laya.timer.currTimer}/serverlists/${i.image}`)), 1 == i.other ? (this.inputContent.visible = !0, this.background.visible = !0) : (this.inputContent.visible = !1, this.background.visible = !1)
      }
      onClickAll(t) {
        if (t == this.btn) {
          let t = -1;
          for (let e = 0; e < this.info.options.length; e++) {
            1 == this.info.options[e].exclusive && (t = e)
          }
          let e = this.info.options[this.idx],
            i = this.parent._children;
          if (1 == e.exclusive)
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              this.idx != t && (e.btn.selected = !1)
            } else if (-1 != t) {
              i[t].btn.selected = !1
            } if (this.btn.selected && this.info.maxChoice) {
            let t = 0;
            for (let e = 0; e < i.length; e++) {
              if (i[e].btn.selected && (t++, t > this.info.maxChoice)) return UIManager.inst.openMsg(StringUtil.format(ToolUtil.chinese(2065), this.info.maxChoice)), void(this.btn.selected = !1)
            }
          }
          Laya.timer.frameOnce(1, this, (() => {
            this.dispatchEvent(MsgName.Quest_Refresh, this.info)
          }))
        }
      }
      getAnswer(t) {
        const e = this.info.options[this.idx];
        t.value += e.key, (t.other = e.other) && (t.text = this.inputContent.text)
      }
    },
    UIQuestionaryMoreSelectStage = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIQuestionaryMoreSelectStage.UID = "ui://igttcw7dpemey", __decorateClass([UIProperty], UIQuestionaryMoreSelectStage.prototype, "list", 2), __decorateClass([UIProperty], UIQuestionaryMoreSelectStage.prototype, "txtDesc", 2), __decorateClass([UIProperty], UIQuestionaryMoreSelectStage.prototype, "img", 2);
  var QuestionaryMoreSelectStage = class extends UIQuestionaryMoreSelectStage {
      constructor() {
        super(), this.questionInfo = null, this.g = 0
      }
      onInit() {
        super.onInit()
      }
      setInfo(t, e, i) {
        if (null != t) {
          this.questionInfo = t, this.g = e;
          const s = t.options[e];
          this.txtDesc.text = s.text, this.img.visible = !StringUtil.isNullOrEmpty(s.image), this.setSize(this.width, this.img.visible ? 255 : 55), this.img.visible && (this.img.url = ToolUtil.get_urlBak(`https://sydh-us-cdnres.joynetgame.com/cdnconfig_${Laya.timer.currTimer}/serverlists/${s.image}`)), this.creatList(this.list, this.onSelect, null, null, !1), this.list.numItems = i
        }
      }
      onSelect(t, e) {
        e.setInfo(this.g, t, this.questionInfo)
      }
      getAnswer(t) {
        let e = !1;
        for (let i = 0; i < this.list.numItems; i++) {
          const s = this.list.getChildAt(i);
          s.btn.selected && (e = !0, s.getAnswer(t))
        }
      }
    },
    UIQuestionaryNumberTxt = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIQuestionaryNumberTxt.UID = "ui://igttcw7dlhcxw", __decorateClass([UIProperty], UIQuestionaryNumberTxt.prototype, "txtDesc", 2);
  var QuestionaryNumberTxt = class extends UIQuestionaryNumberTxt {
      constructor() {
        super(), this.questionInfo = null
      }
      onInit() {
        super.onInit()
      }
      setInfo(t, e) {
        null != t && (this.questionInfo = t, this.txtDesc.text = t.text)
      }
    },
    UIQuestionaryReward = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIQuestionaryReward.UID = "ui://igttcw7dr17913", __decorateClass([UIProperty], UIQuestionaryReward.prototype, "rewardList", 2), __decorateClass([UIProperty], UIQuestionaryReward.prototype, "txtTitle", 2), __decorateClass([UIProperty], UIQuestionaryReward.prototype, "txtTimes", 2);
  var QuestionaryReward = class extends UIQuestionaryReward {
      constructor() {
        super(), this.delay = 1e3
      }
      onInit() {
        super.onInit(), this.creatList(this.rewardList, this.onRewardListRender)
      }
      onRewardListRender(t, e) {
        e.setDataById(Number(this.rewardData[t][0]), this.rewardData[t][1])
      }
      setInfo(t) {
        this.questionInfo = t, t && (this.txtTitle.text = this.questionInfo.name, this.rewardData = [], Object.keys(this.questionInfo.data.items).forEach(((t, e) => {
          this.rewardData.push([t, this.questionInfo.data.items[t]])
        })), this.rewardList.numItems = this.rewardData.length)
      }
      onShow() {}
      onUpdate(t) {
        if (this.questionInfo && (this.delay += t, this.delay > 1e3)) {
          this.delay = 1e3;
          let t = this.questionInfo.endtime - TimerMgr.inst.serverTimeSec;
          this.txtTimes.setVar("time", TimeUtil.formatDHMS(t, 6))
        }
      }
    },
    UIQuestionarySelectStage = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIQuestionarySelectStage.UID = "ui://igttcw7dovqxv", __decorateClass([UIProperty], UIQuestionarySelectStage.prototype, "list", 2), __decorateClass([UIProperty], UIQuestionarySelectStage.prototype, "txtDesc", 2), __decorateClass([UIProperty], UIQuestionarySelectStage.prototype, "img", 2);
  var QuestionarySelectStage = class extends UIQuestionarySelectStage {
      constructor() {
        super(), this.questionInfo = null, this.g = 0
      }
      onInit() {
        super.onInit()
      }
      setInfo(t, e, i) {
        if (null != t) {
          this.questionInfo = t, this.g = e;
          const s = t.options[e];
          this.txtDesc.text = s.text, this.img.visible = !StringUtil.isNullOrEmpty(s.image), this.setSize(this.width, this.img.visible ? 255 : 55), this.img.visible && (this.img.url = ToolUtil.get_urlBak(`https://sydh-us-cdnres.joynetgame.com/cdnconfig_${Laya.timer.currTimer}/serverlists/${s.image}`)), this.creatList(this.list, this.onSelect, null, null, !1), this.list.numItems = i
        }
      }
      onSelect(t, e) {
        e.setInfo(this.g, t, this.questionInfo)
      }
      getAnswer(t) {
        for (let e = 0; e < this.list.numItems; e++) {
          const i = this.list.getChildAt(e);
          i.btn.selected && i.getAnswer(t)
        }
      }
    },
    UIQuestionarySort = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
      }
      onConstruct() {
        this.btn.addClick(this, this.onClickAll, [this.btn]), this.openSubCom(this.btn), this.onInit(), this.onEvent()
      }
    };
  UIQuestionarySort.UID = "ui://igttcw7dkk5n11", __decorateClass([UIProperty], UIQuestionarySort.prototype, "btn", 2), __decorateClass([UIProperty], UIQuestionarySort.prototype, "choiceContent", 2), __decorateClass([UIProperty], UIQuestionarySort.prototype, "img", 2);
  var QuestionarySort = class extends UIQuestionarySort {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      setInfo(t, e) {
        this.idx = t, this.info = e, this.choiceContent.text = this.info.options[this.idx].text, this.img.visible = !StringUtil.isNullOrEmpty(this.info.options[this.idx].image), this.setSize(this.width, this.img.visible ? 255 : 55), this.img.visible && (this.img.url = ToolUtil.get_urlBak(`https://sydh-us-cdnres.joynetgame.com/cdnconfig_${Laya.timer.currTimer}/serverlists/${e.options[t].image}`))
      }
      onClickAll(t) {
        this.btn
      }
    },
    UIQuestionEnterItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
      }
      onConstruct() {
        this.btnGoTo.onClick(this, this.onClickAll, [this.btnGoTo]), this.openSubCom(this.questionnaireRedPoint), this.onInit(), this.onEvent()
      }
    };
  UIQuestionEnterItem.UID = "ui://igttcw7dop9it", __decorateClass([UIController], UIQuestionEnterItem.prototype, "canGetReward", 2), __decorateClass([UIProperty], UIQuestionEnterItem.prototype, "questionTitle", 2), __decorateClass([UIProperty], UIQuestionEnterItem.prototype, "btnGoTo", 2), __decorateClass([UIProperty], UIQuestionEnterItem.prototype, "questionnaireRedPoint", 2);
  var QuestionEnterItem = class extends UIQuestionEnterItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      setData(t) {
        if (this.unbindAllRedPoint(), !t) return;
        this.questionInfo = t, this.questionTitle.text = t.name;
        let e = "1" == LocalCache.getItem(`QuesRP_${t.id}`),
          i = RedPointMgr.inst.combineKey(265, t.id);
        RedPointMgr.inst.setActive(i, e), this.bindRedPoint(this.questionnaireRedPoint, i)
      }
      onShow() {}
      onClickAll(t) {
