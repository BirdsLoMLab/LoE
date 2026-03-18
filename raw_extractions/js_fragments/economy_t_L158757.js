// Fragment: economy_t_L158757.js
// Lines: 158757-158858 of bundle-beautified.js
// Categories: Economy
// Keywords: diamond
// Hit lines: 158758

        let t = ConfigManager.inst.GetXmlConfig("itemdefine");
        return parseInt(t.itemid.diamond)
      }
      getHasBuyNum() {
        return this.hasBuyNum
      }
      setHasBuyNum(t) {
        this.hasBuyNum = t
      }
      isOpenMainBtn() {
        let t = TimerMgr.inst.serverTimeSec;
        for (const e of this.serverSessionData)
          if (t >= e.startTime && t < e.endTime) return !0;
        return !1
      }
      isPreview() {
        let t = this.getEnteringTime(),
          e = TimerMgr.inst.serverTimeSec;
        for (const i of this.serverSessionData)
          if (e < i.startTime + t) return !0;
        return !1
      }
      getMainBtnTime() {
        let t = TimerMgr.inst.serverTimeSec,
          e = this.getEnteringTime();
        for (const i of this.serverSessionData)
          if (t >= i.startTime + e && t <= i.endTime) return i.endTime;
        return -1
      }
      checkNextRefreshBtn() {
        let t, e = TimerMgr.inst.serverTimeSec,
          i = this.getEnteringTime(),
          s = !1;
        for (let o = 0; o < this.serverSessionData.length; o++) {
          const n = this.serverSessionData[o];
          if (e >= n.startTime && e < n.startTime + i) {
            s = !0, t = n.startTime + i - e;
            break
          }
        }
        if (!s) {
          let s = !1;
          for (let o = 0; o < this.serverSessionData.length; o++) {
            const n = this.serverSessionData[o];
            if (e >= n.startTime + i && e <= n.endTime) {
              s = !0, t = n.endTime - e;
              break
            }
          }
          if (!s)
            for (const i of this.serverSessionData)
              if (e < i.startTime) {
                t = i.startTime - e;
                break
              }
        }
        null != t && (null != this.mainBtnTimerId && TimerMgr.inst.removeTimeTask(this.mainBtnTimerId), this.mainBtnTimerId = TimerMgr.inst.addTimerTask(1, 1e3 * t, (() => {
          EventDispatcher.inst.dispatchEvent(MsgName.XianYuanYanHui_Doing_Session), this.checkNextRefreshBtn()
        }), null, null))
      }
      checkNextStart() {
        let t, e = TimerMgr.inst.serverTimeSec,
          i = this.getEnteringTime();
        for (const s of this.serverSessionData)
          if (e < s.startTime + i) {
            t = s.startTime - e + i;
            break
          } null != t && (null != this.startTimerId && TimerMgr.inst.removeTimeTask(this.startTimerId), this.startTimerId = TimerMgr.inst.addTimerTask(1, 1e3 * t, (() => {
          this.showStartTips(), this.checkNextStart()
        }), null, null))
      }
      checkLoginPop() {
        if (30 == CoreMapCtrl.inst.mapType) return;
        let t = this.getDoingSessionId();
        if (0 == t) return;
        let e = TimerMgr.inst.serverTimeSec,
          i = this.getEnteringTime();
        for (const s of this.serverSessionData)
          if (e >= s.startTime + i && e < s.endTime) {
            -1 == LocalCache.getItem("XIANYUAN_WEDDING_POP", "").split(",").indexOf(t.toString()) && this.showStartTips(!0)
          }
      }
      setHasLookLoginPop(t) {
        let e = LocalCache.getItem("XIANYUAN_WEDDING_POP", "").split(","); - 1 == e.indexOf(t.toString()) && (e.push(t.toString()), LocalCache.setItem("XIANYUAN_WEDDING_POP", e.join(",")))
      }
      showStartTips(t = !1) {
        if (30 == CoreMapCtrl.inst.mapType) return;
        if (null == this.weddingSession) return;
        if (null == this.weddingSession.session) return;
        let e = this.getDoingSessionId();
        if (e == this.getCurSessionId() && !t) {
          let t = this.weddingSession.session.user1.charid == LoginCtrl.inst.charid ? this.weddingSession.session.user2.name : this.weddingSession.session.user1.name;
          UIManager.inst.open(XianYuanYXTipsView.UID, null, t)
        }
        if (this.weddingSession.userInfo.buySession == e) UIManager.inst.open(XianYuanYXTips2View.UID);
        else
          for (const t of this.weddingSession.userInfo.inviteListClient)
            if (t.sessionId == e && t.agree) return void UIManager.inst.open(XianYuanYXTips2View.UID)
      }
      setDoingSessionData(t) {
        this.serverSessionData = t, this.serverSessionData.sort(((t, e) => t.startTime - e.startTime)), this.checkNextRefreshBtn(), this.checkNextStart(), this.checkLoginPop()
      }
