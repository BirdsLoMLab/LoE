// Fragment: formula_t_L166913.js
// Lines: 166913-167064 of bundle-beautified.js
// Categories: Formula, Stat System
// Keywords: Math.ceil, attack
// Hit lines: 166914, 166916, 166946, 166947, 166955, 166959, 166964

        if (t.touchPos.y > 955 && this.isMoving && 1 == this.isPressed) {
          this.isSkill = !0, this.fightBox.frame.hp.value -= this.levCfg.attack * DiaoYuCtrl.inst.skillDamageRate;
          let t = this.fightBox.frame.hurtSkillBox;
          t.visible = !0, t.hurtTxt.text = "-" + (this.levCfg.attack * DiaoYuCtrl.inst.skillDamageRate).toString(), t.t0.play((() => {
            t.visible = !1
          })), this.c1.selectedIndex = 0, this.isPressed = !1, this.btnDiaoYu.setState("up")
        }
      }
      onEvent() {
        this.addEvent(MsgName.DiaoYu_FishID, this.onStartFishing), this.addEvent(MsgName.DiaoYu_Result, this.setWaitFishing), this.addEvent(MsgName.DiaoYu_RefreshEnergy, this.refreshFishCount)
      }
      onShow() {
        this.txtTitle.helpId = 376;
        let t = DiaoYuCtrl.inst.spotCfg;
        this.txtTitle.setTitle(ToolUtil.chinese(t.name)), UIManager.inst.playBgm(24), this.diaoyuMask.visible = !1, this.bowen.visible = !1, this.bowen2.visible = !1, this.bowen3.visible = !1, this.fightBoxV.visible = !0, this.waitBox.visible = !0, this.fishingHpCheck = DiaoYuCtrl.inst.fishingHpCheck, this.refreshFishCount(), this.setWaitFishing()
      }
      onUpdateSec() {
        DiaoYuCtrl.inst.refreshRecoverTimeStr(this.txtTimeTips), this.bgTime.visible = "" != this.txtTimeTips.text
      }
      refreshFishCount() {
        let t = CfgitemBase.get(DiaoYuCtrl.inst.baitID);
        this.setTexture(this.btnIconXiaoHao, t.icon, "ItemIcon");
        let e = Cfgfishing_muilt_lock.get(DiaoYuCtrl.inst.fishCount);
        this.txtNum.text = e.cpst[0][1].toString(), this.btnMult.txtNum.setVar("val", DiaoYuCtrl.inst.fishCount), this.setTexture(this.btnimg_Icon, t.icon, "ItemIcon");
        let i = DiaoYuCtrl.inst.baitNum >= e.cpst[0][1] ? 8 : 26;
        this.txtTiLi.text = StringUtil.format("[color={0}]{1}[/color]/{2}", CfgUtil.getColor(i), DiaoYuCtrl.inst.baitNum, DiaoYuCtrl.inst.baitMaxNum), this.c1.selectedIndex = 0, DiaoYuCtrl.inst.refreshRecoverTimeStr(this.txtTimeTips), this.bgTime.visible = "" != this.txtTimeTips.text
      }
      setWaitFishing() {
        this.c2.selectedIndex = 0, this.waitBox.visible = !0, this.isMoving = !1, this.stopFrameMove(), this.setAnimState("stand"), this.bowen2.visible = !1, this.bowen2.t0.stop(!0), this.shuibo.visible = !0, this.refreshFishCount()
      }
      onStartFishing(t) {
        this.c2.selectedIndex = 1;
        let e = Cfgfishing_fish.get(t);
        if (this.fishCfg = e, this.levCfg = Cfgfishing_lev.get(DiaoYuCtrl.inst.fishLv), e.hp <= this.levCfg.attack * DiaoYuCtrl.inst.skipHpCheck) return this.fixHeightF.visible = !1, this.setAnimState("landing"), DiaoYuCtrl.inst.ReqDiaoYuResult(!0), MusicCtrl.inst.StopAllSound(), this.removeTimerTask(this.curMusicTimerId), void(this.curMusicTimerId = null);
        this.fixHeightF.visible = !0, this.fightBoxV.visible = !0, this.fightBox.frame.hurtSkillBox.visible = !1, this.isPressed = !1, this.fightBox.frame.hp.max = e.hp, this.fightBox.frame.hp.value = e.hp, this.fightBox.imgFish.x = DiaoYuCtrl.inst.fish_pos, this.fightBox.frame.x = DiaoYuCtrl.inst.frame_pos, this.fightBox.imgFish.c1.selectedIndex = 0, this.barLeftTime.max = 1e3 * this.levCfg.time_limit, this.barLeftTime.value = this.barLeftTime.max, this.txtLeftTime.text = TimeUtil.formatDHMS(Math.ceil(this.barLeftTime.max / 1e3), 2), this.FishDTime = 0, this.SecDTime = 0, this.c1.selectedIndex = 0, this.isSkill = !1, this.SkillCDLeftTime = 1e3 * DiaoYuCtrl.inst.skillOpenCd, this.SkillLeftTime = 1e3 * DiaoYuCtrl.inst.skillTime, this.hurtBoxtes = [];
        for (let t = 1; t <= 4; t++) {
          let e = this.fightBox.frame.getChildByPath("hurtBox" + t);
          this.hurtBoxtes.push(e), e.visible = !1
        }
        this.bowen.visible = !0, this.bowen.t0.play(), this.isMoving = !0, this.startFrameMove(e.pulling, 1), this.setAnimState("bite")
      }
      onUpdate(t) {
        this.isMoving && (this.isSkill ? this.fightBox.imgFish.x = this.fightBox.frame.x : this.isPressed ? this.fightBox.imgFish.x += t * this.fishSpeed * .01 : this.fightBox.imgFish.x -= t * this.fishSpeed * .01, this.fightBox.imgFish.x <= this.fishL ? this.fightBox.imgFish.x = this.fishL : this.fightBox.imgFish.x >= this.fishR && (this.fightBox.imgFish.x = this.fishR), this.fightBox.imgFish.x >= this.fightBox.frame.x - this.frameW / 2 && this.fightBox.imgFish.x <= this.fightBox.frame.x + this.frameW / 2 ? (this.FishDTime += t, this.FishDTime >= 1e3 * this.fishingHpCheck && (this.FishDTime = 0, this.curHPTween = fgui.GTween.to(this.fightBox.frame.hp.value, this.fightBox.frame.hp.value - this.levCfg.attack, .1).setEase(fgui.EaseType.Linear).onUpdate((t => {
          this.fightBox.frame.hp.value = t.value.x
        })).onComplete((() => {
          let t = this.hurtBoxtes.pop();
          t.visible = !0, t.hurtTxt.text = "-" + this.levCfg.attack.toString(), t.t0.play((() => {
            t.visible = !1, this.hurtBoxtes.push(t)
          }))
        }))), this.isSkill ? (this.fightBox.imgFish.c1.selectedIndex = 2, this.YellowFire.visible = !1, this.blueFire.visible = !0, this.txtTips.text = ToolUtil.chinese(13230), 0 == this.fightBox.imgFish.fish3.playing && (this.fightBox.imgFish.fish2.stop(!0), this.fightBox.imgFish.fish3.play())) : (this.fightBox.imgFish.c1.selectedIndex = 1, this.YellowFire.visible = !0, this.blueFire.visible = !1, this.txtTips.text = ToolUtil.chinese(13229), 0 == this.fightBox.imgFish.fish2.playing && (this.fightBox.imgFish.fish3.stop(!0), this.fightBox.imgFish.fish2.play())), this.curMusicTimerId || (MusicCtrl.inst.PlaySound(1121), this.curMusicTimerId = this.addTimerTask(-1, 3500, (() => {
          MusicCtrl.inst.PlaySound(1121)
        })))) : (this.fightBox.imgFish.c1.selectedIndex = 0, this.YellowFire.visible = !1, this.blueFire.visible = !1, this.fightBox.imgFish.fish2.stop(!0), this.fightBox.imgFish.fish3.stop(!0), this.txtTips.text = ToolUtil.chinese(13228), this.curMusicTimerId && (MusicCtrl.inst.StopAllSound(), this.removeTimerTask(this.curMusicTimerId), this.curMusicTimerId = null)), this.levCfg.id >= DiaoYuCtrl.inst.skillOpen && (this.SkillCDLeftTime > 0 && (this.SkillCDLeftTime -= t), this.SkillCDLeftTime <= 0 && 1 != this.c1.selectedIndex && 0 == this.isSkill && (this.SkillCDLeftTime = 0, this.c1.selectedIndex = 1), this.SkillLeftTime > 0 && this.isSkill && (this.SkillLeftTime -= t), this.SkillLeftTime <= 0 && (this.SkillCDLeftTime = 1e3 * DiaoYuCtrl.inst.skillCd, this.SkillLeftTime = 1e3 * DiaoYuCtrl.inst.skillTime, this.isSkill = !1, this.c1.selectedIndex = 0, this.fightBox.imgFish.scaleX = 1, this.fightBox.imgFish.scaleY = 1)), this.fightBox.frame.hp.value <= 0 && this.playLandingAnim(), this.barLeftTime.value = this.barLeftTime.value - t, this.SecDTime += t, this.SecDTime >= 1e3 && (this.SecDTime = 0, this.txtLeftTime.text = TimeUtil.formatDHMS(Math.ceil(this.barLeftTime.value / 1e3), 2)), this.barLeftTime.value <= 0 && (DiaoYuCtrl.inst.ReqDiaoYuResult(!1), this.diaoyuMask.visible = !1, this.isMoving = !1))
      }
      getFrameMoveDirectionByX(t) {
        if (t <= this.frameL) return 1;
        if (t >= this.frameR) return -1;
        const e = this.frameR - this.frameL;
        if (e <= 0) return Math.random() < .5 ? -1 : 1;
        const i = (t - this.frameL) / e;
        let s = .5;
        return s = i <= .3 ? .7 : i <= .5 ? .6 : i <= .7 ? .4 : .3, Math.random() < s ? 1 : -1
      }
      startFrameMove(t, e) {
        if (!this.isMoving) return;
        let i = Cfgfishing_pulling.get({
            pulling: t
          }),
          s = i.find((t => t.step == e));
        s || (s = i.find((t => 1 == t.step)));
        const o = this.getFrameMoveDirectionByX(this.fightBox.frame.x),
          n = Math.abs(s.offset) * o;
        this.curTween = fgui.GTween.to(this.fightBox.frame.x, this.fightBox.frame.x + n, s.last_time / 10).setEase(fgui.EaseType.Linear).onUpdate((t => {
          t.value.x <= this.frameL ? this.fightBox.frame.x = this.frameL : t.value.x >= this.frameR ? this.fightBox.frame.x = this.frameR : this.fightBox.frame.x = t.value.x
        })).onComplete((() => {
          this.curTimerId = this.addTimerTask(1, s.last_time / 10 * 1e3, (() => {
            this.startFrameMove(t, e + 1)
          }))
        }))
      }
      stopFrameMove() {
        this.curTween && (this.curTween.kill(), this.curTween = null), this.curHPTween && (this.curHPTween.kill(), this.curHPTween = null), this.curTimerId && (this.removeTimerTask(this.curTimerId), this.curTimerId = null)
      }
      playLandingAnim() {
        this.fightBoxV.visible = !1, this.bowen.visible = !1, this.bowen.t0.stop(!0), this.bowen2.visible = !0, this.bowen2.t0.play(), this.isMoving = !1, this.stopFrameMove(), MusicCtrl.inst.StopAllSound(), this.removeTimerTask(this.curMusicTimerId), this.curMusicTimerId = null, this.setAnimState("landing"), MusicCtrl.inst.PlaySound(1122), this.addTimerTask(1, 400, (() => {
          DiaoYuCtrl.inst.ReqDiaoYuResult(!0), FnsdkMgr.phone_vibrate(), this.diaoyuMask.visible = !1
        })), this.addTimerTask(1, 1200, (() => {
          this.setAnimState("stand")
        }))
      }
      playCastingAnim() {
        this.waitBox.visible = !1, this.setAnimState("casting"), this.shuibo.visible = !1, this.bowen3.visible = !0, this.bowen3.t0.play((() => {
          this.bowen3.visible = !1
        })), this.addTimerTask(1, 800, (() => {
          MusicCtrl.inst.PlaySound(1120)
        })), this.addTimerTask(1, 1900, (() => {
          DiaoYuCtrl.inst.ReqDiaoYu(DiaoYuCtrl.inst.fishCount)
        }))
      }
      setAnimState(t) {
        var e, i;
        null == (i = null == (e = DiaoYuCtrl.inst.heroGo) ? void 0 : e.getComponent(Laya.Animator)) || i.play(t), DiaoYuCtrl.inst.effectBite && (DiaoYuCtrl.inst.effectBite.active = "bite" == t), DiaoYuCtrl.inst.effectStand && (DiaoYuCtrl.inst.effectStand.active = "stand" == t), DiaoYuCtrl.inst.effectLanding && (DiaoYuCtrl.inst.effectLanding.active = "landing" == t), DiaoYuCtrl.inst.effectCasting && (DiaoYuCtrl.inst.effectCasting.active = "casting" == t)
      }
      onClickAll(t) {
        if (t == this.btnDiaoYu);
        else if (t == this.btnTuiChu) this.close(), UIManager.inst.open(DiaoYuView.UID);
        else if (t == this.btnSearch) {
          let t = Cfgfishing_muilt_lock.get(DiaoYuCtrl.inst.fishCount);
          if (DiaoYuCtrl.inst.baitNum >= t.cpst[0][1]) this.playCastingAnim();
          else {
            let t = CfgitemBase.get(DiaoYuCtrl.inst.baitID);
            ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(t.id, 1))
          }
        } else if (t == this.btnimg_Icon) {
          let t = CfgitemBase.get(DiaoYuCtrl.inst.baitID);
          ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(t.id, 1))
        } else t == this.btnAdd ? ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(DiaoYuCtrl.inst.fishExchangeItem, ItemCtrl.inst.getItemNum(DiaoYuCtrl.inst.fishExchangeItem)), !0) : t == this.btnIconXiaoHao || t == this.btnMult && UIManager.inst.open(DiaoYuBeiLvView.UID, null, DiaoYuCtrl.inst.fishCount, this)
      }
    },
    {
      regClass: regClass52,
      property: property52
    } = Laya,
    DiaoYuCtrl = class extends BaseCtrl {
      constructor() {
        super(), this._isFishBoxOpen = !1, this.fishLv = 1, this.fishExp = 0, this.fishBag = {}, this.dataCfg = null, this.spotCfg = null, this.baitNum = 0, this.nextRecoverTime = 0, this.boxLv = 1, this.boxFishs = {}, this.boxRewardIds = [], this.boxUnlockIds = [], this.fishCount = 1, this.DiaoYuBgLocalScale = new Laya.Vector3(10.19, 10.19, 10.19), this.DiaoYuBgLocalPosition = new Laya.Vector3(-40, -32.6, 82.72), this.DiaoYuBgLocalRotationEulerX = 20, this.srcLocalScale = new Laya.Vector3(10.2, 10.2, 1), this.srcBgLocalPosition = new Laya.Vector3(-50, -20.72, 79.79), this.srcLocalRotationEulerX = 3, this.isDiaoYuScene = !1, this._sceneTask = [], this.init()
      }
      static get inst() {
        return null == DiaoYuCtrl._instance && (DiaoYuCtrl._instance = new DiaoYuCtrl), DiaoYuCtrl._instance
      }
      init() {
        super.init()
      }
      onUpdate(t) {}
      get isFishBoxOpen() {
        return this._isFishBoxOpen
      }
      set isFishBoxOpen(t) {
        this._isFishBoxOpen = t
      }
      registS2CHandler() {
        this.addS2CHandle("diaoyu.RetDiaoYuUseInfo", this.onRetDiaoYuUseInfo), this.addS2CHandle("diaoyu.RetDiaoYuInfo", this.onRetDiaoYuInfo), this.addS2CHandle("diaoyu.RetDiaoYu", this.onRetDiaoYu), this.addS2CHandle("diaoyu.RetDiaoYuResult", this.onRetDiaoYuResult), this.addS2CHandle("diaoyu.RetSetFishBox", this.onRetSetFishBox), this.addS2CHandle("diaoyu.RetFishBoxUpLv", this.onRetFishBoxUpLv), this.addS2CHandle("diaoyu.RetFishTuJianUnlock", this.onRetFishTuJianUnlock), this.addS2CHandle("diaoyu.RetFishTuJianReward", this.onRetFishTuJianReward), this.addS2CHandle("diaoyu.RefreshDiaoyuEnergy", this.onRefreshDiaoyuEnergy);
        let t = Cfgfishing_box_lev.get(1);
        ItemObserverUtil.addItemIdObserver(t.exp[0][0], this, (() => {
          this.refreshBoxUpLvRed()
        }), !1), this.addEvent(MsgName.Shop_Server_Push_Info, this.onExchangeShop), this.addEvent(MsgName.Shop_Server_Buy_Goods, this.onExchangeShop), this.addEvent(MsgName.Msg_Task_Refresh, this.refreshTaskRedPointExt)
      }
      onRetDiaoYuUseInfo(t) {
        this.isFishBoxOpen = t.fishBox.open, this.fishLv = t.lv, this.fishExp = t.exp, this.fishBag = t.fishsBag, this.baitNum = t.energy, this.nextRecoverTime = t.nextRecoverTime, t.id && (this.dataCfg = Cfgfishing_data.get(t.id), this.spotCfg = Cfgfishing_fishing_spot.get(this.dataCfg.fishing_spot)), this.boxLv = t.fishBox.level, this.boxFishs = t.fishBox.fishShows, this.boxRewardIds = t.fishBox.tujianRewards, this.boxUnlockIds = t.fishBox.unlockTujian, this.refreshRed(), this.dispatchEvent(MsgName.DiaoYu_Info)
      }
      onRetDiaoYuInfo(t) {
        this.fishLv = t.lv, this.fishExp = t.exp, this.baitNum = t.energy, this.nextRecoverTime = t.nextRecoverTime, this.spotCfg = Cfgfishing_fishing_spot.get(t.id), this.refreshRed(), this.dispatchEvent(MsgName.DiaoYu_ShowInfo)
      }
