// Fragment: gacha_draw_t_L218880.js
// Lines: 218880-218982 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 218882

        let t = this.eventExt.event,
          e = Cfgmonster_invade_event.get(t.id);
        this.txtName.text = ToolUtil.chinese(e.name), this.setTexture(this.imgTitleDi, this.model.getQualitFightCidentBg(e.quality), "MonsterInvade"), this.setTexture(this.img_Banner, e.banner, "MonsterInvade"), this.txtDesc.text = ToolUtil.chinese(e.event_desc), this.rewards = [];
        let i = 0;
        for (let e = 0; e < t.reward.awardItem.length; e++) {
          let s = t.reward.awardItem[e],
            o = s.baseid,
            n = s.num;
          this.rewards.push([Number(o), n]), i++
        }
        this.list.numItems = i
      }
      onClickAll(t) {
        (t == this.btnClose || t == this.btnReward) && this.close()
      }
      onHide() {
        this.ctrl.ReqMonsterReward([this.eventExt.id])
      }
    },
    {
      regClass: regClass117,
      property: property116
    } = Laya,
    MonsterInvadeCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.init()
      }
      static get inst() {
        return null == MonsterInvadeCtrl._instance && (MonsterInvadeCtrl._instance = new MonsterInvadeCtrl), MonsterInvadeCtrl._instance
      }
      init() {
        super.init(), this.model = MonsterInvadeModel.inst, this.startTime = TimeUtil.serverSecTime
      }
      onUpdate(t) {
        if (!(TimeUtil.serverSecTime - this.startTime > 5)) return;
        this.startTime = TimeUtil.serverSecTime;
        let e = TeamModel.inst.myIsLeader,
          i = this.model.monsetrBestEventId;
        if (this.model.monsterInvadeInfo && this.model.monsterInvadeInfo.data) {
          let t = this.model.monsterInvadeInfo.data.event;
          for (let s in t) {
            let o = t[s];
            TimeUtil.serverSecTime > o.endTime && (o.id == i && e && i > 0 && this.ReqMonsterExpire(), this.model.updateRedPoint())
          }
        }
      }
      onActivityLimitRefresh() {
        this.model.isOver && this.model.clearJsonData(), this.model.updateActivity(), this.model.isOver ? (RedPointMgr.inst.setCustomActive(361, !1), RedPointMgr.inst.setCustomActive(362, !1), RedPointMgr.inst.setCustomActive(365, !1), RedPointMgr.inst.setCustomActive(368, !1), RedPointMgr.inst.setCustomActive(369, !1)) : (RedPointMgr.inst.delCustomActive(361), RedPointMgr.inst.delCustomActive(362), RedPointMgr.inst.delCustomActive(365), RedPointMgr.inst.delCustomActive(368), RedPointMgr.inst.delCustomActive(369))
      }
      registS2CHandler() {
        this.addS2CHandle("monster_invade.MonsterInvadeInfo", this.MonsterInvadeInfo), this.addS2CHandle("monster_invade.RetMonsterExplore", this.RetMonsterExplore), this.addS2CHandle("monster_invade.RetExecute", this.RetExecute), this.addS2CHandle("monster_invade.RetMonsterMultiple", this.RetMonsterMultiple), this.addS2CHandle("monster_invade.RetMonsterReward", this.RetMonsterReward), this.addS2CHandle("monster_invade.RetMonsterUseYuxi", this.RetMonsterUseYuxi), this.addEvent(MsgName.Shop_Server_Push_Info, this.onExchangeShop), this.addEvent(MsgName.Shop_Server_Buy_Goods, this.onExchangeShop), this.addEvent(MsgName.Msg_Task_Refresh, this.refreshTaskRedPointExt), this.addEvent(MsgName.Activity_Limit_Refresh, this.onActivityLimitRefresh, this)
      }
      refreshTaskRedPointExt() {
        this.model.updateTaskRedPoint()
      }
      onExchangeShop() {
        this.model.updateExchangeShopRedPoint(), this.model.updateGiftBagRedPoint()
      }
      ReqMonsterExpire() {
        this._netManager.send("monster_invade.ReqMonsterExpire", {})
      }
      ReqMonsterUseYuxi(t) {
        let e = {};
        e.use = t, this._netManager.send("monster_invade.ReqMonsterUseYuxi", e)
      }
      ReqMonsterExchange(t, e) {
        let i = {};
        i.type = t, i.cnt = e, this._netManager.send("monster_invade.ReqMonsterExchange", i)
      }
      ReqMonsterReward(t) {
        let e = {};
        e.id = t, this._netManager.send("monster_invade.ReqMonsterReward", e)
      }
      ReqMonsterExplore(t) {
        let e = {};
        e.batch = t, this._netManager.send("monster_invade.ReqMonsterExplore", e)
      }
      ReqExecute(t, e) {
        this.model.curEventName = e;
        let i = {};
        i.id = t, this._netManager.send("monster_invade.ReqExecute", i)
      }
      ReqMonsterMultiple(t) {
        let e = {};
        e.multiple = t, this._netManager.send("monster_invade.ReqMonsterMultiple", e)
      }
      MonsterInvadeInfo(t) {
        this.model.curCfgData = Cfgmonster_invade_data.get(t.playId), this.model.monsterInvadeInfo = t, t.open && LocalCache.setItem(Cache_Explore_Key, "0"), this.model.updateRedPoint(), this.dispatchEvent(MsgName.MonsterInvade_Update_Event)
      }
      RetMonsterExplore(t) {
        var e, i;
        let s = UIManager.inst,
          o = null == (i = null == (e = this.model.monsterInvadeInfo) ? void 0 : e.data) ? void 0 : i.event,
          n = null;
        for (let e in t.event) o[e] = t.event[e], t.batch || (n = new MonsterEventExt(Number(e), t.event[e]));
        t.batch ? s.open(MonsterExploreView.UID, null, t.event) : n && (Cfgmonster_invade_event.get(n.event.id).event_type == import_proto208.default.db.MonsterEventType.MONSTER_TYPE_BATTLE ? s.open(MonsterFightIncidentView.UID, null, {
          playAni: !0
        }, n) : s.open(MonsterRewardIncidentView.UID, null, n)), this.model.updateRedPoint(), this.dispatchEvent(MsgName.MonsterInvade_Update_Event)
      }
      RetExecute(t) {
        this.dispatchEvent(MsgName.MonsterInvade_Execute_Event, t)
      }
      RetMonsterMultiple(t) {
