// Fragment: class_system_s_L283287.js
// Lines: 283287-283479 of bundle-beautified.js
// Categories: Class System, Gacha/Draw
// Keywords: banner, element_type
// Hit lines: 283287, 283379

        let s = YiShouYCModel.inst.ElementMap.get(t.element_type);
        if (s || (s = 0), s > t.active_num && (s = t.active_num), e) {
          this.c1.selectedIndex = s >= t.active_num ? 0 : 1;
          let e = StringUtil.format(ToolUtil.chinese(null == t ? void 0 : t.black_desc), t.value1, t.value2, t.value3, t.value4, t.value5);
          this.txtDesc.text = StringUtil.format("{0}({1}/{2})：{3}", ToolUtil.chinese(t.name), s, t.active_num, e)
        } else {
          let e = s >= t.active_num ? 0 : 1;
          this.c1.selectedIndex = e;
          let i = StringUtil.format(ToolUtil.chinese(null == t ? void 0 : t.desc), t.value1, t.value2, t.value3, t.value4, t.value5);
          this.txtDesc.text = StringUtil.format("{0}({1}/{2})：{3}", ToolUtil.chinese(t.name), s, t.active_num, i)
        }
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIYiShouYuanSuTips = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Common"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIYiShouYuanSuTips.UID = "ui://rcahvl3bure87z41", __decorateClass([UIProperty], UIYiShouYuanSuTips.prototype, "txtTitle", 2), __decorateClass([UIProperty], UIYiShouYuanSuTips.prototype, "listSkill", 2), __decorateClass([UIProperty], UIYiShouYuanSuTips.prototype, "txtTip", 2);
  var YiShouYuanSuTips = class extends UIYiShouYuanSuTips {
      constructor() {
        super(), this.skillArr1 = []
      }
      onInit() {
        super.onInit(), this.creatList(this.listSkill, this._onItemRender1, null, null, !1)
      }
      onShow() {}
      setData(t) {
        if (this.pet = t, this.cfgPet = Cfgpet_data.get(this.pet.cfgid), this.cfgPet) {
          let t = YiShouYCCtrl.inst.getElementTips(this.cfgPet.element);
          this.txtTitle.text = t, this.skillArr1 = YiShouYCCtrl.inst.getSkillArrByElement(this.cfgPet.element, YiShouYCModel.inst.followElementLevel || 1), this.listSkill.numItems = this.skillArr1.length, this.removeTimerTask(this.timeID), this.timeID = this.addTimerTask(1, 10, (() => {
            this.listSkill.scrollToView(0)
          }))
        }
      }
      _onItemRender1(t, e) {
        e.setData(this.skillArr1[t], !0, t != this.skillArr1.length - 1)
      }
      onClickAll(t) {}
    },
    UIYueNanShiBa = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Common"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIYueNanShiBa.UID = "ui://rcahvl3b10m9r1e9zvpt", __decorateClass([UIController], UIYueNanShiBa.prototype, "c1", 2), __decorateClass([UIProperty], UIYueNanShiBa.prototype, "Tips", 2), __decorateClass([UIProperty], UIYueNanShiBa.prototype, "BtnShow18", 2), __decorateClass([UIProperty], UIYueNanShiBa.prototype, "con2", 2), __decorateClass([UIProperty], UIYueNanShiBa.prototype, "con3", 2), __decorateClass([UIProperty], UIYueNanShiBa.prototype, "fixHeight", 2);
  var YueNanShiBa = class extends UIYueNanShiBa {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIYueNanShiBaFight = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Common"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIYueNanShiBaFight.UID = "ui://rcahvl3b10m9r1e9zvq0", __decorateClass([UIProperty], UIYueNanShiBaFight.prototype, "Tips", 2), __decorateClass([UIProperty], UIYueNanShiBaFight.prototype, "fixHeight", 2);
  var YueNanShiBaFight = class extends UIYueNanShiBaFight {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    import_proto321 = __toESM(require_proto()),
    _UICommunityView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Community", this.name = "CommunityView"
      }
      onInit() {
        this.openSubCom(this.btnShare), this.btnShare.onClick(this, this.onClickAll, [this.btnShare]), this.openSubCom(this.btnThumbsUp), this.btnThumbsUp.onClick(this, this.onClickAll, [this.btnThumbsUp]), this.openSubCom(this.btnExchange), this.btnExchange.onClick(this, this.onClickAll, [this.btnExchange]), this.btnBD.onClick(this, this.onClickAll, [this.btnBD]), this.btnBD2.onClick(this, this.onClickAll, [this.btnBD2]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.toolBar)
      }
    };
  _UICommunityView.UID = "ui://qzyoxv9gjoay0", __decorateClass([UIController], _UICommunityView.prototype, "c1", 2), __decorateClass([UIController], _UICommunityView.prototype, "c2", 2), __decorateClass([UIController], _UICommunityView.prototype, "c3", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "btnShare", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "btnThumbsUp", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "btnExchange", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "Homepage", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "btnBD", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "btnBD2", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "txtTips", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "Banner", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "listItem", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "txtGoogle", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "txtFackbook", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "txtApple", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "Account", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "txtDiscord", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "Discord", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UICommunityView.prototype, "fixHeight", 2);
  var UICommunityView = _UICommunityView,
    _CommunityModel = class t extends BaseModel {
      constructor() {
        super(), this.botAuthUrl = "", this.botAuthStatus = 0
      }
      static get inst() {
        return null == t._instance && (t._instance = new t), t._instance
      }
      init() {
        super.init(), this.initEvent()
      }
      initEvent() {
        EventDispatcher.inst.addEventListener(MsgName.Time_Goto_Next_Day, this, (() => {
          RedPointMgr.inst.setActive(720, !0)
        }))
      }
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
      getShareRedDayKey() {
        const t = new Date(TimeUtil.serverTime);
        return `${t.getFullYear()}${String(t.getMonth()+1).padStart(2,"0")}${String(t.getDate()).padStart(2,"0")}`
      }
      get xmlCfg() {
        return null == this._xmlCfg && (this._xmlCfg = ConfigManager.inst.GetXmlConfig("globalset")), this._xmlCfg
      }
      get likeRewardVec() {
        return XmlUtil.get(this.xmlCfg, "vector", "gt_like_reward", "item")
      }
      get bdRewardVec() {
        return XmlUtil.get(this.xmlCfg, "vector", "gt_binding_reward", "item")
      }
      get shareItemDropId() {
        return Number(this.xmlCfg.gt_share_item)
      }
    };
  _CommunityModel._instance = null;
  var CommunityModel = _CommunityModel,
    {
      regClass: regClass174,
      property: property172
    } = Laya,
    CommunityCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.init()
      }
      static get inst() {
        return null == CommunityCtrl._instance && (CommunityCtrl._instance = new CommunityCtrl), CommunityCtrl._instance
      }
      init() {
        super.init(), this.model = CommunityModel.inst
      }
      registS2CHandler() {
        this.addS2CHandle("socialize.RetSocializeData", this.RetSocializeData), this.addS2CHandle("platform.RetBotAuthUrl", this.RetBotAuthUrl), this.addS2CHandle("platform.RetBotAuthStatus", this.RetBotAuthStatus)
      }
      RetSocializeData(t) {
        t.socializeData && t.socializeData.shareReward ? RedPointMgr.inst.setActive(720, 2 != t.socializeData.shareReward) : RedPointMgr.inst.setActive(720, !0), this.model.info = t.socializeData, RedPointMgr.inst.setActive(721, 2 != this.model.info.bindReward), 0 == RedPointMgr.inst.getActive(722) && "" == LocalCache.getItem("SheJiaoDiscordFirstRed", "") && RedPointMgr.inst.setActive(722, !0), this.dispatchEvent(MsgName.Community_Info)
      }
      RetBotAuthUrl(t) {
        this.model.botAuthUrl = t.url, this.dispatchEvent(MsgName.Community_BotAuthUrl)
      }
      RetBotAuthStatus(t) {
        t.authStatus && (this.model.botAuthStatus = 1), t.rewardStatus && (this.model.botAuthStatus = 2), this.dispatchEvent(MsgName.Community_BotAuthStatus)
      }
      ReqShareSuccess() {
        NetManager.inst.send("socialize.ReqShareSuccess", {})
      }
      ReqGetSharereward() {
        NetManager.inst.send("socialize.ReqGetSharereward", {})
      }
      ReqLikeDone() {
        NetManager.inst.send("socialize.ReqLikeDone", {})
      }
      ReqGetLikeReward() {
        NetManager.inst.send("socialize.ReqGetLikeReward", {})
      }
      ReqUpdateBindStatus() {
        NetManager.inst.send("socialize.ReqUpdateBindStatus", {})
      }
      ReqGetBindReward() {
        NetManager.inst.send("socialize.ReqGetBindReward", {})
      }
      ReqBotAuthUrl() {
        NetManager.inst.send("platform.ReqBotAuthUrl", {})
      }
      ReqGetBotAuthReward() {
        NetManager.inst.send("platform.ReqGetBotAuthReward", {})
      }
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
    };
  CommunityCtrl._instance = null, CommunityCtrl = __decorateClass([regClass174("eWDeI6m-TYSI2gZsXyZn9w")], CommunityCtrl);
  var CommunityView = class extends UICommunityView {
