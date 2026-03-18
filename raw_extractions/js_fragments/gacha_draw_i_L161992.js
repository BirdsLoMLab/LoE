// Fragment: gacha_draw_i_L161992.js
// Lines: 161992-162092 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 161992

        let i = this.banner.getChildByPath("imgBg").asLoader;
        this.setTexture(i, null == e ? void 0 : e.head_image, "HalfImg")
      }
      onShow() {
        UIManager.inst.close(MonsterIncidentView.UID), this.initShow(!0), this.onUpdateSec();
        this.args[0];
        let t = this.args[1];
        null != t && 2 == t && this.onClickAll(this.btn_jijie_zhaomu)
      }
      initShow(t) {
        let e;
        if (this.txtJijie.text = "", this.btnTargetType.visible = !this.model.myIsLeader, this.unbindAllRedPoint(), this.bindRedPoint(this.redPoint, 253), this.bindRedPoint(this.teamChatRP, 254), this.onRefreshRoomInfo(), this.list.numItems = 3, this.type == import_proto68.default.room.RoomType.rt_team_copy ? e = 299 : this.type == import_proto68.default.room.RoomType.rt_boss_copy && (e = 301), this.bindRedPoint(this.btnQieHuan.getChildByPath("redPoint"), e), this.bindRedPoint(this.adRP, this.type == import_proto68.default.room.RoomType.rt_team_copy ? 297 : 303), this.model.curType != import_proto68.default.room.RoomType.rt_monster_invade && t && UIManager.inst.closeAll(!1, [this.uid]), this.refreshRedPoint(), this.type == import_proto68.default.room.RoomType.rt_boss_copy || this.type == import_proto68.default.room.RoomType.rt_cross_boss) {
          let t = Cfgboss_data.get(this.model.tcidToId(this.tcid)),
            e = CopysBossModel.inst.getMapById(t.id);
          CopysBossCtrl.inst.ReqBossRefreshTime(e.id, t.id, this.type == import_proto68.default.room.RoomType.rt_cross_boss)
        } else if (this.type == import_proto68.default.room.RoomType.rt_monster_invade && !MonsterInvadeModel.inst.isOver) {
          let t = MonsterInvadeModel.inst.challengeId;
          ItemObserverUtil.removeItemIdObserver(t, this), ItemObserverUtil.addItemIdObserver(t, this, (() => this.challengeChange()))
        }
        this.initTargetTypeList(), this.c2.selectedIndex = this.model.mayAssemble(this.type) ? 1 : 0;
        let i = this.model.isAssembleState();
        this.goBattle.visible = !i, this.btn_jijie.visible = i, this.type != import_proto68.default.room.RoomType.rt_boss_copy && this.type != import_proto68.default.room.RoomType.rt_cross_boss || (this.autoEnterCopy.visible = !1)
      }
      initTargetTypeList() {
        if (null == this.tcid) {
          let t = this.model.RoomInfo;
          if (t) this.type = t.type, this.tcid = t.tcid;
          else {
            let t = this.model.openTeamViewArgs;
            if (null == t || null == t.id) return;
            this.tcid = Number(this.model.idToTcid(t.id)), this.type = Math.floor(this.tcid / 1e4)
          }
        }
        let t = Math.floor(this.tcid / 1e4);
        if (this.cmbteam.enabled = this.model.myIsLeader, this.model.myIsLeader) {
          let e = this.model.getTargetTypeList(),
            i = [],
            s = [];
          this.selectedCmbIndex = 0;
          for (let o = 0; o < e.length; o++) {
            let n = e[o];
            n && null != n.title && null != n.type && (i.push(ToolUtil.chinese(n.title)), s.push(n.type), Number(n.type) == t && (this.selectedCmbIndex = o))
          }
          this.cmbteam.items = i, this.cmbteam.values = s, this.cmbteam.selectedIndex = this.selectedCmbIndex
        } else {
          let e = this.model.getTargetType(t),
            i = ToolUtil.chinese(null == e ? void 0 : e.title);
          i && (this.cmbteam.values = [i], this.cmbteam.items = [i])
        }
      }
      onCmbChanged() {
        if (this.cmbteam.selectedIndex == this.selectedCmbIndex) return;
        let t;
        t = this.model.isAssembleState() ? {
          msg: ToolUtil.chinese(2455),
          okFunc: () => {
            this.ctrl.ReqRoomType(Number(this.cmbteam.values[this.cmbteam.selectedIndex])), this.cmbteam.selectedIndex = this.selectedCmbIndex
          },
          cancelFunc: () => {
            this.cmbteam.selectedIndex = this.selectedCmbIndex
          }
        } : this.model.isExistMentorAvatar() ? {
          title: ToolUtil.chinese(1021),
          msg: ToolUtil.chinese(3691),
          okFunc: () => {
            this.ctrl.ReqRoomType(Number(this.cmbteam.values[this.cmbteam.selectedIndex])), this.cmbteam.selectedIndex = this.selectedCmbIndex
          },
          cancelFunc: () => {
            this.cmbteam.selectedIndex = this.selectedCmbIndex
          }
        } : {
          msg: ToolUtil.chinese(2486),
          okFunc: () => {
            this.ctrl.ReqRoomType(Number(this.cmbteam.values[this.cmbteam.selectedIndex])), this.cmbteam.selectedIndex = this.selectedCmbIndex
          },
          cancelFunc: () => {
            this.cmbteam.selectedIndex = this.selectedCmbIndex
          }
        }, UIManager.inst.openDialog(t)
      }
      challengeChange() {
        let t = MonsterInvadeModel.inst,
          e = t.challengeId,
          i = ItemCtrl.inst.getItemNum(e);
        this.txtTimes.text = 0 == i ? "[color=#F84049]0[/color]/" + t.challengeMaxCnt : StringUtil.numberFormat(i) + "/" + t.challengeMaxCnt
      }
      refreshRedPoint() {
        if (this.type == import_proto68.default.room.RoomType.rt_team_copy) {
          let t = 299,
            e = Cfgteam.get(this.model.tcidToId(this.tcid)),
            i = !1,
            s = null,
            o = TeamCtrl.inst.TeamCopyInfo;
          if (null == o) return;
          let n = o && o.passedTcid ? o.passedTcid : [],
            r = Cfgteam.get({
              themeid: e.themeid
            });
          RedPointMgr.inst.setActive(t, !1);
          for (let e = 0; e < r.length; e++) {
            let o = r[e],
