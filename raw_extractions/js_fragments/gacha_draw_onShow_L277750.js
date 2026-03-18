// Fragment: gacha_draw_onShow_L277750.js
// Lines: 277750-277858 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: recruit
// Hit lines: 277751, 277758

      onShow() {
        this.recruit = this.args[0], this.stealLeftTimeSec = this.recruit.stoptime - TimerMgr.inst.serverTimeSec, this.totalTimeSec = this.recruit.stoptime - this.recruit.time, StealFarmCtrl.inst.sendReqFairylandStolenCharInfo(this.recruit.stolenid), this.refreshStealPro()
      }
      onClickAll(t) {
        t == this.btnDrive ? this.onClickBtnDrive() : this.btnClose, this.close()
      }
      onClickBtnDrive() {
        return __async(this, null, (function*() {
          MainCityCtrl.inst.isInMainCity() && !(yield MainCityCtrl.inst.isNotBusy()) || (Number(this.recruit.charid) == Number(LoginCtrl.inst.charid) ? UIManager.inst.openMsg(ToolUtil.chinese(1007)) : Number(this.recruit.stolenid) == Number(LoginCtrl.inst.charid) ? UIManager.inst.openMsg(ToolUtil.chinese(1004)) : StealFarmCtrl.inst.sendReqFairylandExpel(this.recruit.charid, this.recruit.mid, this.recruit.time))
        }))
      }
      onUpdateSec() {
        this.refreshStealPro()
      }
      refreshPlayer(t) {
        t && (this._avatarData.charId = t.charId, this._avatarData.icon = t.icon, this._avatarData.career = t.career, this._avatarData.gender = t.gender, this.imgHead.setData(this._avatarData), this.txtName.text = t.name, this.txtLevel.text = `Lv.${t.level}`)
      }
      refreshStealPro() {
        this.stealLeftTimeSec < 0 ? this.close() : (this.stealLeftTimeSec -= 1, this.proBar.value = this.stealLeftTimeSec / this.totalTimeSec * 100, this.txtTime.text = StealFarmCtrl.inst.getLeftTimeFormat(this.stealLeftTimeSec))
      }
    },
    StealFarmInvite = class extends UIStealFarmInvite {
      constructor() {
        super(), this.delay = 0
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onEvent() {
        this.addEvent(MsgName.Chat_FarmRecruit, this.refreshData), this.addEvent(MsgName.Chat_ParkingSpot_State, this.refreshParkingSpotState)
      }
      refreshData(t) {
        if (this.protoMsg) {
          let e = this.protoMsg.extraDatas[0];
          if (4 == this.protoMsg.childType) {
            let i = e.fairyRecruit;
            if (i.stoptime < TimerMgr.inst.serverTimeSec) {
              let e = t;
              Number(e.charid) == Number(i.charid) && e.massifid == i.mid && e.starttime == i.time && (i.stoptime = 0, this.setBtnJoin(!1))
            }
          } else if (5 == this.protoMsg.childType) {
            let i = e.koboldRecruit;
            if (i.stoptime < TimerMgr.inst.serverTimeSec) {
              let e = t;
              Number(e.charid) == Number(i.charid) && e.type == i.type && e.starttime == i.starttime && (i.stoptime = 0, this.setBtnJoin(!1))
            }
          }
        }
      }
      onClickAll(t) {
        if (t == this.btnJoin) {
          let t = this.protoMsg.extraDatas[0];
          if (4 == this.protoMsg.childType) {
            let e = t.fairyRecruit;
            if (Number(e.stolenid) == Number(LoginCtrl.inst.charid)) return void UIManager.inst.openMsg(ToolUtil.chinese(1004));
            if (Number(e.charid) == Number(LoginCtrl.inst.charid)) return void UIManager.inst.openMsg(ToolUtil.chinese(1007));
            e.stoptime > TimerMgr.inst.serverTimeSec && UIManager.inst.open(StealFarmStealHelpView.UID, null, e)
          } else if (5 == this.protoMsg.childType) {
            let e = t.koboldRecruit;
            e.stoptime > TimerMgr.inst.serverTimeSec && (UIManager.inst.openMsg(ToolUtil.chinese(1003)), StealFarmCtrl.inst.sendReqKoboldHelp(e.charid, e.type, e.starttime))
          } else if (26 == this.protoMsg.childType) {
            if (!OpenFuncModel.inst.isFuncOpen(import_proto318.default.openfunc.OpenFuncID.PARKING_SPOT, !0)) return;
            let e = t.parkingSpot;
            UIManager.inst.open(ParkingSpotView.UID, null, import_proto318.default.parking_spot.ParkingSpotType.Self, e.ownerId)
          }
        }
      }
      refreshParkingSpotState(t) {
        var e, i, s;
        if (26 != (null == (e = this.protoMsg) ? void 0 : e.childType)) return;
        t.ownerId, t.parkingCharId, t.pos, t.shapeId;
        let o = null == (s = null == (i = this.protoMsg) ? void 0 : i.extraDatas[0]) ? void 0 : s.parkingSpot;
        t.ownerId == (null == o ? void 0 : o.ownerId) && t.parkingCharId == (null == o ? void 0 : o.parkingCharId) && t.pos == (null == o ? void 0 : o.pos) && t.shapeId == (null == o ? void 0 : o.shapeId) && this.setData(this.protoMsg, !0)
      }
      onUpdateSec() {
        this.delay > 0 && (this.delay -= 1)
      }
      setData(t, e = !1) {
        this.msg.changeText(t.content);
        const i = t.extraDatas[0];
        if (i) {
          if (4 == t.childType) {
            const t = i.fairyRecruit,
              e = t.stoptime > TimerMgr.inst.serverTimeSec;
            this.setBtnJoin(e), e && 0 == this.delay && (this.delay = 10, StealFarmCtrl.inst.sendChatState(t.charid, t.mid, t.time))
          } else if (5 == t.childType) {
            const t = i.koboldRecruit,
              e = t.stoptime > TimerMgr.inst.serverTimeSec;
            this.setBtnJoin(e), e && 0 == this.delay && (this.delay = 10, StealFarmCtrl.inst.sendHelpChatState(t.charid, t.type, t.starttime))
          } else if (26 == t.childType) {
            const t = i.parkingSpot,
              e = `${t.ownerId}_${t.parkingCharId}_${t.pos}_${t.shapeId}`,
              s = "0" == LocalCache.getItem(e, "0");
            this.setBtnJoin(s)
          }
        } else this.setBtnJoin(!1);
        this.protoMsg = t
      }
      setBtnJoin(t) {
        this.btnJoin.text = t ? ToolUtil.chinese(1365) : ToolUtil.chinese(1361), this.btnJoin.enabled = t, this.btnJoin.grayed = !t
      }
    },
    UIWangLingJieChatLeft = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.openSubCom(this.playerAvatar), this.openSubCom(this.honorIcon), this.openSubCom(this.imgTitle1), this.openSubCom(this.imgTitle2), this.openSubCom(this.msg), this.onInit(), this.onEvent()
