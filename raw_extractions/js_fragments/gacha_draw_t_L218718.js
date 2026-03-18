// Fragment: gacha_draw_t_L218718.js
// Lines: 218718-218819 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 218719

        let t = this.eventExt.event;
        this.eventCfg = Cfgmonster_invade_event.get(t.id), this.txtName.text = ToolUtil.chinese(this.eventCfg.name), this.setTexture(this.imgTitleDi, this.model.getQualitFightCidentBg(this.eventCfg.quality), "MonsterInvade"), this.setTexture(this.img_Banner, this.eventCfg.banner, "MonsterInvade"), this.txtDesc.txtDesc.text = ToolUtil.chinese(this.eventCfg.event_desc), this.btnSelect.selected = this.model.monsterInvadeInfo.data.multiple;
        let e = this.model.challengeId;
        this.setTexture(this.btnimg_icon, CfgitemBase.get(e).icon, "ItemIcon"), ItemObserverUtil.addItemIdObserver(e, this, (() => this.challengeChange()));
        let i = this.model.fourAwardId,
          s = CfgitemBase.get(i);
        this.txtItemName.text = ToolUtil.chinese(s.name), this.setTexture(this.img_icon2, s.icon, "ItemIcon"), ItemObserverUtil.addItemIdObserver(i, this, (() => this.onFourAwardId()))
      }
      onFourAwardId() {
        if (null == this.txtItemNum) return;
        let t = MonsterInvadeModel.inst.fourAwardId,
          e = ItemCtrl.inst.getItemNum(t);
        this.txtItemNum.text = e > 0 ? `${e}` : `[color=#FF0000]${e}[/color]`
      }
      onMonsterInvadeMultiple(t) {
        this.btnSelect.selected = t
      }
      challengeChange() {
        if (null == this.txtNumber2) return;
        let t = ItemCtrl.inst.getItemNum(this.model.challengeId);
        this.txtNumber2.text = 0 == t ? ToolUtil.chinese(1540) + this.model.challengeMaxCnt : ToolUtil.chinese(1541) + StringUtil.numberFormat(t) + "/" + this.model.challengeMaxCnt
      }
      onClickAll(t) {
        if (t == this.btnClose) this.close();
        else if (t == this.btnFight) this.onClickBtnFight();
        else if (t == this.btnTeam) {
          if (!MainRunningHuFaCtrl.inst.isFree()) return void UIManager.inst.openMsg(ToolUtil.chinese(2446));
          let t = TeamModel.inst;
          t.openTeamViewArgs = {
            type: 3,
            id: this.eventCfg.copy_id
          }, t.RoomInfo && t.curRoomType == import_proto206.default.room.RoomType.rt_monster_invade ? UIManager.inst.open(TeamListsView.UID) : UIManager.inst.open(TeamsView.UID)
        } else if (t == this.btnSelect) {
          let t = MonsterInvadeModel.inst.fourAwardId;
          if (0 == ItemCtrl.inst.getItemNum(t) && this.btnSelect.selected) return this.btnSelect.selected = !this.btnSelect.selected, void ItemCtrl.inst.openSourceView(t);
          this.ctrl.ReqMonsterMultiple(this.btnSelect.selected)
        } else t == this.btnAddCnt ? this.model.openMonsterGoodsTipsView(import_proto206.default.db.MonsterEventType.MONSTER_TYPE_BATTLE) : t == this.btnimg_icon ? ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(this.model.challengeId)) : t == this.btn4Rate && ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(this.model.fourAwardId))
      }
      onClickBtnFight() {
        return __async(this, null, (function*() {
          if (MainCityCtrl.inst.isInMainCity() && !(yield MainCityCtrl.inst.isNotBusy())) return;
          if (TeamModel.inst.RoomInfo) {
            if (Math.floor(TeamModel.inst.RoomInfo.tcid / 1e4) != import_proto206.default.room.RoomType.rt_monster_invade) return void UIManager.inst.openMsg(ToolUtil.chinese(1910));
            if (!TeamModel.inst.myIsLeader) return void UIManager.inst.openMsg(ToolUtil.chinese(1846))
          }
          if (ItemCtrl.inst.getItemNum(this.model.challengeId) <= 0) this.onClickAll(this.btnAddCnt);
          else if (this.eventCfg.quality <= 3) UIManager.inst.openDialog(ToolUtil.chinese(1911) + this.model.getEventName(this.eventCfg.id) + ToolUtil.chinese(1912), (() => this.reqExecute()));
          else {
            let t = TeamModel.inst;
            t.curType == import_proto206.default.room.RoomType.rt_monster_invade && t.RoomInfo ? this.reqExecute() : UIManager.inst.openDialog(ToolUtil.chinese(1913), (() => this.reqExecute()), (() => this.onClickAll(this.btnTeam)), null, ToolUtil.chinese(1763), ToolUtil.chinese(1764))
          }
        }))
      }
      reqExecute() {
        let t = TeamModel.inst;
        t.RoomInfo && t.userNum < 3 ? UIManager.inst.openDialog(ToolUtil.chinese(1760), (() => {
          this.reqExecuteExt()
        })) : this.reqExecuteExt()
      }
      reqExecuteExt() {
        MonsterInvadeModel.inst.executeWithUId = this.uid, this.ctrl.ReqExecute(this.eventExt.id, this.model.getEventName(this.eventExt.event.id))
      }
      onRetExecute(t) {
        if (t.succ && this.eventExt && t.id == this.eventExt.id && MonsterInvadeModel.inst.executeWithUId == this.uid) {
          let t = TeamModel.inst,
            e = TeamCtrl.inst,
            i = t.idToTcid(this.eventCfg.copy_id),
            s = Math.floor(i / 1e4);
          i != t.curTcid && null != t.curTcid && t.RoomInfo ? (this.isReqRoomTC = !0, e.ReqRoomTC(i, s)) : (this.model.reqStart(this.eventCfg.copy_id), this.close())
        }
      }
      onRetRoomTC() {
        this.isReqRoomTC && MonsterInvadeModel.inst.executeWithUId == this.uid && (this.model.reqStart(this.eventCfg.copy_id), this.close()), this.isReqRoomTC = !1
      }
      onHide() {
        let t = !0;
        this.args[0] && null != this.args[0].playAni && (t = this.args[0].playAni), t && this.dispatchEvent(MsgName.MonsterInvade_Event_Effect)
      }
      onDestroy() {
        ItemObserverUtil.removeItemIdObserver(MonsterInvadeModel.inst.fourAwardId, this), ItemObserverUtil.removeItemIdObserver(MonsterInvadeModel.inst.challengeId, this)
      }
    },
    import_proto207 = __toESM(require_proto()),
    UIBtnMonsterMapExploreItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "MonsterMapExplore"
      }
      onConstruct() {
        this.btnMonsterMapExplore.onClick(this, this.onClickAll, [this.btnMonsterMapExplore]), this.btnimg_Icon.onClick(this, this.onClickAll, [this.btnimg_Icon]), this.openSubCom(this.btnMonsterInvadeAdd), this.btnMonsterInvadeAdd.onClick(this, this.onClickAll, [this.btnMonsterInvadeAdd]), this.btnMonsterMapExploreSelect.onClick(this, this.onClickAll, [this.btnMonsterMapExploreSelect]), this.openSubCom(this.goEffect), this.onInit(), this.onEvent()
      }
    };
  UIBtnMonsterMapExploreItem.UID = "ui://ez4g8wa4langg", __decorateClass([UIProperty], UIBtnMonsterMapExploreItem.prototype, "btnMonsterMapExplore", 2), __decorateClass([UIProperty], UIBtnMonsterMapExploreItem.prototype, "btnimg_Icon", 2), __decorateClass([UIProperty], UIBtnMonsterMapExploreItem.prototype, "txtNumber", 2), __decorateClass([UIProperty], UIBtnMonsterMapExploreItem.prototype, "btnMonsterInvadeAdd", 2), __decorateClass([UIProperty], UIBtnMonsterMapExploreItem.prototype, "txtTimes", 2), __decorateClass([UIProperty], UIBtnMonsterMapExploreItem.prototype, "btnMonsterMapExploreSelect", 2), __decorateClass([UIProperty], UIBtnMonsterMapExploreItem.prototype, "goBtnEffect", 2), __decorateClass([UIProperty], UIBtnMonsterMapExploreItem.prototype, "goEffect", 2);
  var Cache_Explore_Key = "Cache_Explore_Key",
    BtnMonsterMapExploreItem = class extends UIBtnMonsterMapExploreItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.model = MonsterInvadeModel.inst, this.ctrl = MonsterInvadeCtrl.inst, this.btnMonsterMapExplore.setClickCDTime(1e3)
      }
      onShow() {
        let t = this.model.exploreId;
