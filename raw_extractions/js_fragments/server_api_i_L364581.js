// Fragment: server_api_i_L364581.js
// Lines: 364581-364682 of bundle-beautified.js
// Categories: Server/API
// Keywords: joynetgame
// Hit lines: 364582

        let i = this.info.options[this.idx];
        this.choiceContent.text = i.text, this.img.visible = !StringUtil.isNullOrEmpty(i.image), this.setSize(this.width, this.img.visible ? 255 : 55), this.img.visible && (this.img.url = ToolUtil.get_urlBak(`https://sydh-us-cdnres.joynetgame.com/cdnconfig_${Laya.timer.currTimer}/serverlists/${i.image}`)), 1 == i.other ? (this.inputContent.visible = !0, this.background.visible = !0) : (this.inputContent.visible = !1, this.background.visible = !1)
      }
      onClickAll(t) {
        t == this.btn && Laya.timer.frameOnce(1, this, (() => {
          this.dispatchEvent(MsgName.Quest_Refresh, this.info)
        }))
      }
      getAnswer(t) {
        const e = this.info.options[this.idx];
        t.value = e.key, (t.other = e.other) && (t.text = this.inputContent.text)
      }
    },
    UIQuestionaryItem01 = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIQuestionaryItem01.UID = "ui://igttcw7dfus78", __decorateClass([UIProperty], UIQuestionaryItem01.prototype, "txtDesc", 2), __decorateClass([UIProperty], UIQuestionaryItem01.prototype, "choiceList", 2);
  var QuestionaryItem01 = class extends UIQuestionaryItem01 {
      constructor() {
        super(), this.questionInfo = null, this.totalNum = null
      }
      onInit() {
        super.onInit(), this.creatList(this.choiceList, this.onRenderSingleChoice, null, null, !1)
      }
      onEvent() {
        this.addEvent(MsgName.Quest_Select, this.onSelect)
      }
      onRenderSingleChoice(t, e) {
        e.setInfo(t, this.questionInfo)
      }
      onSelect(t) {
        if (t.questionId != this.questionInfo.questionId) return;
        let e = 50 + this.txtDesc.height;
        for (let t = 0; t < this.questionInfo.options.length; t++) {
          e += 55, this.questionInfo.options[t].image && (e += 200)
        }
        0 == this.questionInfo.hasLink ? (this.setSize(599, 0), this.visible = !1) : (this.setSize(599, e), this.choiceList.setSize(568, e - this.txtDesc.height), this.visible = !0)
      }
      setInfo(t, e) {
        null != t && (this.questionInfo = t, this.totalNum = e, this.txtDesc.setVar("index", this.questionInfo.number), this.txtDesc.setVar("text", this.questionInfo.questionName), this.choiceList.setXY(this.choiceList.x, 15 + this.txtDesc.height), this.choiceList.numItems = this.questionInfo.options.length, this.onSelect(this.questionInfo))
      }
      getAnswer() {
        const t = {};
        t.questionId = this.questionInfo.questionId, t.number = this.questionInfo.number, t.type = this.questionInfo.type;
        for (let e = 0; e < this.choiceList.numItems; e++) {
          const i = this.choiceList.getChildAt(e);
          i.btn.selected && i.getAnswer(t)
        }
        return t
      }
    },
    UIQuestionaryItem02 = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIQuestionaryItem02.UID = "ui://igttcw7dfus7a", __decorateClass([UIProperty], UIQuestionaryItem02.prototype, "txtDesc", 2), __decorateClass([UIProperty], UIQuestionaryItem02.prototype, "choiceList", 2);
  var QuestionaryItem02 = class extends UIQuestionaryItem02 {
      constructor() {
        super(), this.questionInfo = null, this.totalNum = null
      }
      onInit() {
        super.onInit(), this.creatList(this.choiceList, this.onRenderSingleChoice, null, null, !1)
      }
      onEvent() {
        this.addEvent(MsgName.Quest_Select, this.onSelect)
      }
      onSelect(t) {
        if (t.questionId != this.questionInfo.questionId) return;
        let e = 50 + this.txtDesc.height;
        for (let t = 0; t < this.questionInfo.options.length; t++) {
          e += 55, this.questionInfo.options[t].image && (e += 200)
        }
        0 == this.questionInfo.hasLink ? (this.setSize(599, 0), this.visible = !1) : (this.setSize(599, e), this.choiceList.setSize(568, e - this.txtDesc.height), this.visible = !0)
      }
      setInfo(t, e) {
        null != t && (this.questionInfo = t, this.totalNum = e, this.txtDesc.setVar("index", this.questionInfo.number), this.txtDesc.setVar("text", this.questionInfo.questionName), this.txtDesc.setVar("minChoice", this.questionInfo.minChoice), this.txtDesc.setVar("maxChoice", this.questionInfo.maxChoice), this.choiceList.setXY(this.choiceList.x, 15 + this.txtDesc.height), this.choiceList.numItems = this.questionInfo.options.length, this.onSelect(this.questionInfo))
      }
      onRenderSingleChoice(t, e) {
        e.setInfo(t, this.questionInfo)
      }
      getAnswer() {
        const t = {};
        t.questionId = this.questionInfo.questionId, t.number = this.questionInfo.number, t.type = this.questionInfo.type, t.value = "";
        for (let e = 0; e < this.choiceList.numItems; e++) {
          const i = this.choiceList.getChildAt(e);
          i.btn.selected && i.getAnswer(t)
        }
        return t
      }
    },
    UIQuestionaryItem03 = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Questionary"
