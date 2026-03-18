// Fragment: gacha_draw_onClickAll_L287417.js
// Lines: 287417-287518 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 287418

        if (!t || t.length <= 0) return this._ctrl.ReqNoteBoss(), void this.close();
        this._attrCfg = t[0], this._rewardList = this._model.GetDropRewardList(this._cfg.dropid), this.list.numItems = this._rewardList.length, this.setTexture(this.imgboss, this._cfg.banner, "HalfImg"), this.setImage(this.img_quality, `fb_img_btd_${this._cfg.type}`, "Common"), this.txtName.text = ToolUtil.chinese(this._cfg.boss_name), this.barHp.max = 100, this.barHp.value = this.barHp.max, this.barHp.getChild("n2").asTextField.text = "100%", this._model.SetConsumeBtnStatus(3625, this.btnTiaozhan), this._model.isAutoPlaying && this._model.ExecuteAutoSetting(this)
      }
      onClickAll(t) {
        if (t == this.btnChakan) UIManager.inst.open(DaFuWengQingBaoView.UID);
        else if (t == this.btnfight) this._model.isExecutingSetting || (this._hadNote ? this.DoFight(Number(this._attrCfg.attr[1001]), this._onlyId, 3) : this.DoFight(Number(this._attrCfg.attr[1001]), null, 1));
        else if (t == this.btnbiaoji) {
          if (!this._model.isExecutingSetting) {
            if (this._model.selfQingBaoList.length >= this._model.personal_intel_limit && null == this._replaceOnlyId) return void UIManager.inst.open(DaFuWengRuQinChangeView.UID);
            this._hadTag || (this._hadTag = !0, this._canClose = !0, UIManager.inst.openMsg(ToolUtil.chinese(4595)), this._ctrl.ReqNoteBoss())
          }
        } else if (t == this.btnTiaozhan && !this._model.isExecutingSetting)
          if (this.btnTiaozhan.grayed) UIManager.inst.openMsg(ToolUtil.chinese(1428));
          else if (this._hadNote || this._hadReplace) {
          const t = this._model.currentBossChallengeResult.msg.hpRatio / 1e4 * Number(this._attrCfg.attr[1001]);
          this.DoFight(t, this._onlyId, 3)
        } else this.DoFight(Number(this._attrCfg.attr[1001]), null, 1)
      }
      onClickMask() {
        this._model.isExecutingSetting || (0 == this.c1.selectedIndex ? this._canClose ? this.close() : UIManager.inst.openMsg(ToolUtil.chinese(4597)) : this._canClose ? this.close() : UIManager.inst.openDialog(ToolUtil.chinese(4598), (t => {
          this.close()
        }), null, null, null, null, !0, !1, "DaFuWeng_BossTag", ToolUtil.chinese(1505)))
      }
      onClose() {
        this._model.triggerEventData.Use()
      }
      OnItemRender(t, e) {
        e.setData(this._rewardList[t])
      }
      DoFight(t, e, i) {
        this.eff_fight.visible || (this.eff_fight.visible = !0, this.eff_fight.t0.play(Laya.Handler.create(this, this.OnEffectEnd, [t, e, i]), 1))
      }
      OnEffectEnd(t, e, i) {
        this.eff_fight.visible = !1, this._ctrl.ReqChallengeBoss(this._cfg.id, t, i, e)
      }
      RefreshBtnStatus() {
        this._model.SetConsumeBtnStatus(3625, this.btnTiaozhan)
      }
      OnReplace(t) {
        t.result ? (UIManager.inst.openMsg(ToolUtil.chinese(4561)), this._replaceOnlyId = t.bossOnlyId, this._onlyId = t.bossOnlyId, this._completeAuto = !0, this.btnbiaoji.grayed = !0, this.btnbiaoji.text = ToolUtil.chinese(4663), this._hadReplace = !0) : (this._replaceOnlyId = null, UIManager.inst.openMsg(ToolUtil.chinese(4639)))
      }
      OnNoteBoss(t) {
        this._hadNote = !0, this._onlyId = t.bossId, this._completeAuto = !0, this.btnbiaoji.grayed = !0, this.btnbiaoji.text = ToolUtil.chinese(4663)
      }
      OnChallengeBoss() {
        this.eff_fight.visible = !1, this._model.currentBossChallengeResult.isWin ? (this._completeAuto = !0, this.close()) : (this.barHp.value = this._model.currentBossChallengeResult.msg.hpRatio / 100, this.barHp.getChild("n2").asTextField.text = `${MathUtil.formatDecimal(this.barHp.value,2)}%`, this.c1.selectedIndex = 1, this._model.isAutoPlaying && this.AutoNote())
      }
      AutoNote() {
        var t;
        if (1 == (null == (t = this._choose) ? void 0 : t.choose)) {
          if (this._model.selfQingBaoList.length >= this._model.personal_intel_limit && null == this._replaceOnlyId) return void UIManager.inst.open(DaFuWengRuQinChangeView.UID);
          UIManager.inst.openMsg(ToolUtil.chinese(4595)), this._ctrl.ReqNoteBoss()
        } else this._model.selfQingBaoList.length < this._model.personal_intel_limit ? (UIManager.inst.openMsg(ToolUtil.chinese(4595)), this._ctrl.ReqNoteBoss()) : (this._completeAuto = !0, this.close())
      }
    },
    UIdfw_gongjieffect = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "DaFuWengFightRQZ"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIdfw_gongjieffect.UID = "ui://190hhaaeu5epf", __decorateClass([UITransition], UIdfw_gongjieffect.prototype, "t0", 2);
  var dfw_gongjieffect = class extends UIdfw_gongjieffect {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIDaFuWengJiLuItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "DaFuWengJiLu"
      }
      onConstruct() {
        this.openSubCom(this.plotPicItem), this.btnTH.onClick(this, this.onClickAll, [this.btnTH]), this.onInit(), this.onEvent()
      }
    };
  UIDaFuWengJiLuItem.UID = "ui://dndu68jjvkto4", __decorateClass([UIController], UIDaFuWengJiLuItem.prototype, "c1", 2), __decorateClass([UIController], UIDaFuWengJiLuItem.prototype, "c2", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "imgdi", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "plotPicItem", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "img_di", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "txt_name", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "btnTH", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "txtDesc", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "txtfaxian", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "txtshanghai", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "list_reward", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "txtJifen", 2), __decorateClass([UIProperty], UIDaFuWengJiLuItem.prototype, "txtname2", 2);
  var DaFuWengJiLuItem = class extends UIDaFuWengJiLuItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this._ctrl = DaFuWengCtrl.inst, this.creatList(this.list_reward, this.OnItemRender, null, null, !1), this._txt = this.txtDesc.text
      }
      onShow() {}
      onClickAll(t) {
        t == this.btnTH && (this._rankTip.panel.SetData(this._data.onlyId, this._data.bossCfg.boss_type), this._rankTip.OpenTip())
      }
      GetSelfAward() {
        this._ctrl.ReqSelfBossKillInfo(this._data.onlyId)
      }
      GetSectAward() {
        this._ctrl.ReqSectBossKillInfo(this._data.onlyId)
      }
      OnItemRender(t, e) {
        e.setData(this._rewardList[t]), 0 != this.c1.selectedIndex || this._data.hadGotReward ? 1 != this.c1.selectedIndex || this._data.hadGotReward || (e.loadEffect = !0, e.c1.selectedIndex = 0, e.setCustomClick(Laya.Handler.create(this, this.GetSectAward))) : (e.loadEffect = !0, e.c1.selectedIndex = 0, e.setCustomClick(Laya.Handler.create(this, this.GetSelfAward))), (0 == this.c1.selectedIndex && this._data.hadGotReward || 1 == this.c1.selectedIndex && this._data.hadGotReward) && (e.loadEffect = !1, e.c1.selectedIndex = 1, e.setCustomClick(null)), 1 != this.c1.selectedIndex || this._data.haveSectReward || (e.c1.selectedIndex = 0)
