// Fragment: gacha_draw_SetBossInfo_L277035.js
// Lines: 277035-277136 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 277036

    SetBossInfo(t, e) {
      this.txtContent.setVar("val1", ToolUtil.chinese(t.boss_name)).setVar("val2", e), this.setTexture(this._iconLoader, t.banner, "HalfImg")
    }
    SetShowStatus(t) {
      const e = t <= 0;
      this.c1.selectedIndex = e ? 2 : 0, this.c2.selectedIndex = this.IsSelf() ? 0 : 1, this.bar.value = t, this.bar.getChild("title").asTextField.text = `${t}%`
    }
    RefreshBtnStatus() {
      this._model.SetConsumeBtnStatus(3626, this.btnZhuLi)
    }
    ResetReq() {
      t._hadReq = !1
    }
  };
  _DaFuWengGroupInvite._hadReq = !1;
  var DaFuWengGroupInvite = _DaFuWengGroupInvite,
    UIEliminateInvite = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.btnJoin.onClick(this, this.onClickAll, [this.btnJoin]), this.onInit(), this.onEvent()
      }
    };
  UIEliminateInvite.UID = "ui://hqqfn7tafp1g2x", __decorateClass([UIController], UIEliminateInvite.prototype, "c1", 2), __decorateClass([UIProperty], UIEliminateInvite.prototype, "txtContent", 2), __decorateClass([UIProperty], UIEliminateInvite.prototype, "btnJoin", 2);
  var EliminateInvite = class extends UIEliminateInvite {
      constructor() {
        super(), this.roomid = -1, this.tcid = -1, this.canIn = !1
      }
      onInit() {
        super.onInit(), this.addPVETimer()
      }
      onShow() {
        this.setBtnJoin(!1)
      }
      delPVETimer() {
        this.removeTimerTask(this.pveTimer)
      }
      addPVETimer() {
        this.delPVETimer(), this.pveTimer = this.addTimerTask(-1, 1e3, (() => {
          this.onPVEItemUpdate()
        }), this)
      }
      onEvent() {
        this.addEvent(MsgName.Chat_ReqRetRecruitInfo, this.refreshData, this)
      }
      onClickAll(t) {
        if (t == this.btnJoin) {
          if (FamousBossModel.inst.isFighting) return;
          if (!MainRunningHuFaCtrl.inst.isFree()) return void UIManager.inst.openMsg(ToolUtil.chinese(2442));
          const t = this.msg.extraDatas[0].roomRecruit;
          null != t ? TeamModel.inst.userNum > 0 ? UIManager.inst.openMsg(ToolUtil.chinese(1360)) : (TeamModel.inst.isApplying = !0, TeamCtrl.inst.ReqJoinRoom(t.roomid, t.tcid, t.type)) : this.onBtnInviClick()
        }
      }
      onBtnInviClick() {
        const t = this.msg.extraDatas[0];
        let e = t.roomid;
        e || (e = t.location.massId);
        const i = this.msg.charid;
        PVEDungeonCtrl.inst.ReqApplyCopyMass(i, e)
      }
      setBtnJoin(t) {
        this.btnJoin.text = t ? ToolUtil.chinese(1362) : ToolUtil.chinese(1361), this.btnJoin.enabled = t, this.btnJoin.grayed = !t
      }
      refreshData(t) {
        let e = t.data;
        for (const t of e) {
          let e = `${t.type||0}_${t.roomid}_${t.tcid||0}_${t.chatidStr}`;
          if (e == this.key) {
            let i = 1 == t.closed;
            this.setBtnJoin(!i), i ? LocalCache.setItem("recruit_" + e, "true") : LocalCache.removeItem("recruit_" + e)
          }
        }
      }
      setData(t) {
        var e;
        let i = String(t.charid) == String(LoginCtrl.inst.charid);
        this.c1.selectedIndex = i ? 1 : 0, this.txtContent.text = t.content, this.msg = t, this.roomid = -1;
        let s = !1,
          o = t.extraDatas;
        if (o && o.length > 0 && null != o[0].roomRecruit) {
          let i = o[0].roomRecruit,
            n = TeamCtrl.inst.recruitInfo;
          i.type = Math.floor((i.tcid || 0) / 1e4);
          let r = `${i.type||0}_${i.roomid}_${i.tcid||0}_${t.chatIdStr}`;
          this.key = r;
          let a = "true" == LocalCache.getItem("recruit_" + r, "");
          if (n.has(r) && (null == (e = n.get(r)) ? void 0 : e.closed) || a) {
            let t = n.get(r);
            s = t && t.closed || !1, a && (s = !0), s ? LocalCache.setItem("recruit_" + r, "true") : LocalCache.removeItem("recruit_" + r)
          } else ChatModel.inst.isRefreshList && !ChatModel.inst.firstRecruitInfo.has(r) && (ChatModel.inst.firstRecruitInfo.set(r, !0), TeamCtrl.inst.ReqRetRecruitInfoExt(i.roomid, i.tcid, t.chatIdStr))
        }
        this.setBtnJoin(!s)
      }
      onPVEItemUpdate() {}
    },
    UIEmojiSelect = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
