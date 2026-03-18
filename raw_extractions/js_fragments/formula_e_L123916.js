// Fragment: formula_e_L123916.js
// Lines: 123916-124054 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil, Math.floor
// Hit lines: 123917, 123921, 123933, 123951, 123954

        const e = new Date(1e3 * this._openTime - 1e3 * this._timeZone);
        return e.setUTCHours(0, 0, 0, 0), Math.ceil((t - e.getTime() - 1e3 * this._timeZone) / 1e3 / 24 / 3600)
      }
      getCreateDay() {
        const t = new Date(1e3 * this.createTime - 1e3 * this._timeZone);
        return t.setUTCHours(0, 0, 0, 0), Math.ceil((this._serverTime - t.getTime() - 1e3 * this._timeZone) / 1e3 / 24 / 3600)
      }
      get showCountry() {
        return t.inst.getOpenDay() < ToolUtil.number(39)
      }
      getOpenDayTime(t) {
        return new Date(1e3 * this._openTime - 1e3 * this._timeZone).setUTCHours(0, 0, 0, 0) + 864e5 * (t - 1) + 1e3 * this._timeZone
      }
      get serverTime() {
        return this._serverTime
      }
      get serverTimeSec() {
        return Math.floor(this._serverTime / 1e3)
      }
      get todayBeginTime() {
        return this._serverTodayStartTime
      }
      get todayEndTime() {
        return this._serverTodayStartTime + 86400
      }
      setCurTime(t) {
        let e = t,
          i = Math.abs(e - this._serverTime);
        if (0 == this._serverOffTime) {
          let t = ConfigManager.inst.GetXmlConfig("globalset").server_time_max;
          this._serverOffTime = Number(t)
        }
        ToolUtil.isRelease && this._setSerTime && i > this._serverOffTime && this._serverOffTime > 0 && this._serverTime > 0 && CoreMapCtrl.inst.outGame(), this._setSerTime = !0, this._serverTime = e, this.refreshNextDay()
      }
      setTimeZone(t) {
        this._timeZone = t, this._serverTodayStartTime = 86400 * Math.floor((this.serverTimeSec - this._timeZone) / 86400) + this._timeZone
      }
      getStartTimeByTime(t) {
        return 86400 * Math.floor((t - this._timeZone) / 86400) + this._timeZone
      }
      getCurDayByStartTime(e) {
        return TimeUtil.toDHMS(TimeUtil.serverSecTime - t.inst.getStartTimeByTime(e))[0] + 1
      }
      getOnlineTime() {
        return this._serverTime - this._onlineTime
      }
      setOnlineTime() {
        this._onlineTime = this._serverTime
      }
      refreshNextDay() {
        let t = TimeUtil.getTimeUntilNextDay(this._serverTime);
        this._nextDayTimeId && this.removeTimeTask(this._nextDayTimeId), this._nextDayTimeId = this.addTimerTask(1, t, (() => {
          EventDispatcher.inst.dispatchEvent(MsgName.Time_Goto_Next_Day), this.refreshNextDay()
        }), this)
      }
      updateTask(t) {
        let e = [];
        for (let i = 0; i < this._taskList.length; ++i)
          if (this._taskList[i].exeTime -= t, this._taskList[i].exeTime <= 0) {
            let {
              taskId: t,
              times: s,
              method: o,
              target: n,
              delay: r,
              args: a
            } = this._taskList[i];
            s > 0 ? (this._taskList[i].times--, this._taskList[i].times <= 0 ? e.push(t) : this._taskList[i].exeTime = r, o.apply(n, ...a)) : s < 0 ? (this._taskList[i].exeTime = r, o.apply(n, ...a)) : e.push(t)
          } for (; e.length;) {
          let t = e.pop();
          this.removeTimeTask(t)
        }
      }
      removeTimeTask(t) {
        let e = -1;
        for (let i = 0; i < this._taskList.length; ++i)
          if (this._taskList[i].taskId == t) {
            e = i;
            break
          } - 1 != e && this._taskList.splice(e, 1)
      }
      updateTimeTaskExeTime(t, e) {
        for (let i = 0; i < this._taskList.length; ++i)
          if (this._taskList[i].taskId == t) {
            this._taskList[i].exeTime = this._taskList[i].exeTime + e;
            break
          }
      }
      addTimerTask(t, e, i, s, ...o) {
        const n = this._taskId;
        return this._taskList.push({
          taskId: n,
          times: t,
          delay: e,
          method: i,
          args: o,
          exeTime: e,
          target: s
        }), this._taskId++, n
      }
      onPreRender() {
        t._lastRTime = Date.now(), t._lastPertime = performance.now()
      }
      onPostRender() {
        this.checkFrameJank(), this.updateScheduleFrameTask()
      }
      checkFrameJank() {
        const e = (Date.now() - t._lastRTime) / 1e3,
          i = this._historyFrameList.length >= 3 ? this._historyFrameList.reduce(((t, e) => t + e)) / this._historyFrameList.length : this._frameTimeCost;
        e > 2 * i && e > 3 * this._frameTimeCost || e > 2 * i && this._frameTimeCost;
        Laya.Config.FPS;
        this._historyFrameList.push(e), this._historyFrameList.length > 3 && this._historyFrameList.shift()
      }
      addFrameTask(t, e, i = 0, ...s) {
        const o = this._schTaskId;
        return this._schTaskList.push({
          taskId: o,
          method: t,
          target: e,
          times: i,
          args: s
        }), this._schTaskId++, o
      }
      removeFrameTask(t) {
        let e = -1;
        for (let i = 0; i < this._schTaskList.length; ++i)
          if (this._schTaskList[i].taskId == t) {
            e = i;
            break
          } - 1 != e && this._schTaskList.splice(e, 1)
      }
      updateScheduleFrameTask() {
        if (0 == this._schTaskList.length) return;
        const e = (Date.now() - t._lastRTime) / 1e3;
        let i = Laya.Config.FPS;
        if (e > this._nextFrameSchTime && e < 1) this._nextFrameSchTime += 1 / i;
        else {
          this._nextFrameSchTime = 2 / i;
          const t = this._schTaskList.shift();
