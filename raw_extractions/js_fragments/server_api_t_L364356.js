// Fragment: server_api_t_L364356.js
// Lines: 364356-364456 of bundle-beautified.js
// Categories: Server/API
// Keywords: joynetgame
// Hit lines: 364356

          let t = ToolUtil.get_urlBak(`https://sydh-us-cdnres.joynetgame.com/cdnconfig_${Laya.timer.currTimer}/serverlists/${this.questionInfo.filename}`);
          HttpManager.inst.httpReqGetJson(t, this.onCompleted.bind(this))
        } else this.onCompleted(0, JSON.parse(data))
      }
      onCompleted(t, e) {
        QuestionaryModel.inst.data = e, this.questionsData = e.questionAndOptions, QuestionaryModel.inst.questionList.splice(0), QuestionaryModel.inst.questionList.push({
          type: "reward"
        });
        for (let t = 0; t < this.questionsData.length; t++) {
          const e = this.questionsData[t];
          "radio" != e.type && "checkbox" != e.type || "1" == e.outOrder && this.Sort(e.options), e.optionLink && e.optionLink.originLink && (e.hasLink = !1), QuestionaryModel.inst.questionList.push(e)
        }
        QuestionaryModel.inst.questionList.push({
          type: "btn"
        }), this.list_question.numItems = QuestionaryModel.inst.questionList.length
      }
      Sort(t) {
        let e = [];
        for (let i = 0; i < t.length; i++) {
          const s = t[i];
          "1" == s.isOrder && (e.push(s), t[i] = !1)
        }
        for (let t = e.length - 1; t > 0; t--) {
          const i = Math.floor(Math.random() * (t + 1));
          [e[t], e[i]] = [e[i], e[t]]
        }
        for (let i = 0; i < t.length; i++) {
          0 == t[i] && (t[i] = e.shift())
        }
      }
      onQuestionListRender(t, e) {
        let i, s = QuestionaryModel.inst.questionList[t];
        switch (s.type) {
          case "radio":
          case "checkbox":
          case "input":
          case "matrix-radio":
          case "select":
          case "matrix-checkbox":
          case "sort":
            i = e, i.setInfo(s, this.questionsData.length);
            break;
          case "reward":
            i = e, i.setInfo(this.questionInfo);
            break;
          case "btn":
            i = e;
            break;
          default:
            return this.list_question.defaultItem
        }
      }
      onQuestionProvider(t) {
        switch (QuestionaryModel.inst.questionList[t].type) {
          case "radio":
            return "ui://Questionary/QuestionaryItem01";
          case "checkbox":
            return "ui://Questionary/QuestionaryItem02";
          case "input":
            return "ui://Questionary/QuestionaryItem03";
          case "matrix-radio":
            return "ui://Questionary/QuestionaryItem04";
          case "select":
            return "ui://Questionary/QuestionaryItem05";
          case "matrix-checkbox":
            return "ui://Questionary/QuestionaryItem06";
          case "sort":
            return "ui://Questionary/QuestionaryItem07";
          case "reward":
            return "ui://Questionary/QuestionaryReward";
          case "btn":
            return "ui://Questionary/BtnQuestionarySubmit";
          default:
            return this.list_question.defaultItem
        }
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
      onRefresh() {
        let t = QuestionaryModel.inst.questionList;
        for (let e = 0; e < t.length; e++) {
          const i = t[e];
          if (i.optionLink && i.optionLink.originLink) {
            const e = i.optionLink.originLink.split("_");
            for (let s = 0; s < t.length; s++) {
              const o = t[s];
              if (o.number == e[0]) {
                let t = this.list_question._children[s];
                if (t.visible) {
                  let s = e[1].split("|"),
                    n = !1;
                  for (let e = 0; e < s.length; e++) {
                    let r = s[e] - 1,
                      a = t.choiceList._children[r];
                    for (let t = 0; t < o.options.length && (o.options[t].defaultSort != r || (n = 1 == a.btn.selected, i.hasLink = n, !n)); t++);
                    if (n) break
                  }
                } else i.hasLink = !1;
                this.dispatchEvent(MsgName.Quest_Select, i)
              }
