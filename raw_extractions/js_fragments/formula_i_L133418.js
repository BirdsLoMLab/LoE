// Fragment: formula_i_L133418.js
// Lines: 133418-133527 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil
// Hit lines: 133419, 133427

          let i = e * (t.reward / 1e4);
          s += Math.ceil(parseFloat(i.toFixed(3)))
        }));
        let o = Cfgchongsheng_return1.get({
            type: 2
          }),
          n = 0;
        return o.forEach((t => {
          let i = e * (t.reward / 1e4);
          n += Math.ceil(parseFloat(i.toFixed(3)))
        })), [s + n, s, n]
      }
      getRewardTimes(t) {
        return this.limitRewardGetTimes.has(t) ? this.limitRewardGetTimes.get(t) : 0
      }
      getTaskInfo(t) {
        return this.taskInfo.get(t)
      }
      getTaskData() {
        let t = Array.from(Cfgzhaohui_quest1.get());
        return t.sort(((t, e) => {
          let i = this.taskInfo.get(t.id),
            s = this.taskInfo.get(e.id);
          return (null == i ? void 0 : i.finishs) >= t.num && (null == s ? void 0 : s.finishs) >= e.num ? t.id - e.id : (null == i ? void 0 : i.finishs) >= t.num ? 1 : (null == s ? void 0 : s.finishs) >= e.num ? -1 : (null == i ? void 0 : i.rewards) > 0 && (null == s ? void 0 : s.rewards) > 0 ? t.id - e.id : (null == i ? void 0 : i.rewards) > 0 ? -1 : (null == s || s.rewards, 1)
        })), t
      }
      getHuiGuiTaskData(t) {
        let e = import_proto7.default.quest.QuestType.QUEST_TYPE_RETURN,
          i = TaskCtrl.inst.getTaskDataByType(e).filter((e => Cfghuighui_quest1.get(e.questid).is_daily == t));
        return i.sort(((t, e) => {
          let i = parseInt(t.vars.state),
            s = parseInt(e.vars.state);
          if (i == import_proto7.default.quest.QuestState.FINISHED && s == import_proto7.default.quest.QuestState.FINISHED) {
            let i = Cfghuighui_quest1.get(t.questid),
              s = Cfghuighui_quest1.get(e.questid);
            return i.type2 == s.type2 ? i.id - s.id : i.type2 - s.type2
          }
          if (i == import_proto7.default.quest.QuestState.FINISHED) return 1;
          if (s == import_proto7.default.quest.QuestState.FINISHED) return -1;
          if (t.vars.state == e.vars.state) {
            let i = Cfghuighui_quest1.get(t.questid),
              s = Cfghuighui_quest1.get(e.questid);
            return i.type2 == s.type2 ? i.id - s.id : i.type2 - s.type2
          }
          if (i == import_proto7.default.quest.QuestState.REWARD) return -1;
          if (s == import_proto7.default.quest.QuestState.REWARD) return 1;
          if (i == import_proto7.default.quest.QuestState.DOING) {
            let i = Cfghuighui_quest1.get(t.questid),
              s = Cfghuighui_quest1.get(e.questid);
            return i.type2 == s.type2 ? i.id - s.id : i.type2 - s.type2
          }
          return 1
        })), i
      }
      initHuiGuiRedPoint() {
        let t = Cfghuighui_quest1.get();
        for (let e = 0; e < t.length; e++) {
          let i = t[e],
            s = i.is_daily ? 697 : 696,
            o = RedPointMgr.inst.combineKey(s, i.id);
          RedPointMgr.inst.addDepend(s, o)
        }
      }
      updateHuiGuiRedPoint() {
        var t, e;
        const i = TimerMgr.inst.serverTimeSec;
        let s = !1;
        this.getReturnEndTime() - i > 0 && (null == (t = this.returnInfo) ? void 0 : t.bindData.length) < 3 && (s = !0), RedPointMgr.inst.setActive(698, s);
        let o = !1,
          n = null == (e = this.returnInfo) ? void 0 : e.signRewards;
        if (n)
          for (const t in n)
            if (n.hasOwnProperty(t) && 1 == n[t]) {
              o = !0;
              break
            } RedPointMgr.inst.setActive(694, o), this.getHuiGuiTaskData(0).forEach((t => {
          let e = parseInt(t.vars.state);
          RedPointMgr.inst.setActive(696, e == import_proto7.default.quest.QuestState.REWARD, t.questid)
        })), this.getHuiGuiTaskData(1).forEach((t => {
          let e = parseInt(t.vars.state);
          RedPointMgr.inst.setActive(697, e == import_proto7.default.quest.QuestState.REWARD, t.questid)
        }))
      }
      updateChongXiuRedPoint() {
        var t, e;
        let i = Cfgchongsheng_level_up1.get(),
          s = LeadLevelModel.inst.getRoleLevel(),
          o = !1;
        for (let t = 0; t < i.length; t++) {
          let e = i[t];
          if (!this.isLevelBoxRewardGet(e.id) && s >= e.level) {
            o = !0;
            break
          }
        }
        if (RedPointMgr.inst.setActive(701, o), (null == (t = this.getReBornInfo()) ? void 0 : t.returnStatus) == import_proto7.default.callback.CallbackStatus.StatusDone) {
          let t = !1,
            i = Cfgchongsheng_return1.get({
              type: 1
            });
          for (let e = 0; e < i.length; e++) {
            if (!this.isFanLiRewardGet(i[e].id) && s >= i[e].param) {
              t = !0;
              break
            }
          }
          let o = null == (e = this.getReBornInfo()) ? void 0 : e.rebornRecharge,
            n = !1,
            r = Cfgchongsheng_return1.get({
              type: 2
