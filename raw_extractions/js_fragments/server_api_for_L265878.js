// Fragment: server_api_for_L265878.js
// Lines: 265878-265979 of bundle-beautified.js
// Categories: Server/API
// Keywords: api
// Hit lines: 265879

        for (const i in this.Param) this.Param.hasOwnProperty(i) && (t += `${e}${i}=${this.Param[i]}`, e = "&");
        this.getUrl("https://chat-api.4399sy.com/api/wx/add_wx" + t)
      }
      get Param() {
        var t;
        let e = LoginCtrl.inst,
          i = {};
        return i.appid = StringUtil.encode("10019"), i.scene = StringUtil.encode("1"), i.wx_id = StringUtil.encode("80000"), i.source_id = StringUtil.encode("app"), i.business_id = StringUtil.encode("sydh"), i.type = StringUtil.encode("2"), i.game = StringUtil.encode("sydh"), i.platform = StringUtil.encode(BaseConfig.gamePlat), i.server_id = StringUtil.encode(e.zoneid), i.uid = StringUtil.encode(NetManager.inst.loginData.uid), i.role_id = StringUtil.encode(e.charid.toString()), i.client_id = StringUtil.encode(null == (t = FnsdkMgr.PlatformInfo) ? void 0 : t.fngid), i.ts = StringUtil.encode(TimeUtil.serverSecTime), i.sign = this.getSign(i), i
      }
      getUrl(t) {
        console.log("getUrl++++++++++" + t), HttpManager.inst.httpReqGetJson(t, ((t, e) => {
          if (console.log("=============httpReqGetJson okUrl+++++", t, e), 0 == (null == e ? void 0 : e.code)) {
            let t = null == e ? void 0 : e.data;
            SdkMgr.navigateTo(t)
          }
          console.log("=============httpReqGetJson dataUrl+++++" + JSON.stringify(e))
        }), ((e, i) => {
          console.error("=============httpReqGetJson errorUrl+++++" + t, e, i)
        }), !0, 1)
      }
      getSign(t = {}, e = "Jc30WxLtEWqZAsGCx0OLglbgZ") {
        const i = Object.keys(t).sort();
        let s = "";
        for (const e of i) s += e + encodeURIComponent(t[e]);
        return s += e, s = s.replace(/~/g, "%7E"), Md5.hashStr(s).toString().toUpperCase()
      }
    },
    {
      regClass: regClass169,
      property: property168
    } = Laya,
    PlayerCtrl = class extends BaseCtrl {
      constructor() {
        super(), this._isGetPushReward = !1, this._pushMsgIds = [], this.kuaishouawardInfo = {}, this.isOpenFirebase = !1, this.hideExtSkill = !1, this.hidePet = !1, this.appWelfareStatus = 0, this.hotSpotsList = [], this.iconList = [], this.hideConfig = !1, this.redPointInfo = {}, this.tiktok_nogot = !1, this.pwa_got = !1, this.isBeginDayCollect = !1, this.dayCollectTime = 0, this.dayCollectMap = {}, this.isGetSubReward = !1, this.hasShortcutFlag = !1, this.init()
      }
      static get inst() {
        return null == PlayerCtrl._instance && (PlayerCtrl._instance = new PlayerCtrl), PlayerCtrl._instance
      }
      init() {
        super.init(), this.addEvent(MsgName.Func_Open_Id_Change, this.onSoarOpenFunc), this.addEvent(MsgName.Func_Open_Id_Change, this.onCollectOpen), this.addEvent(MsgName.Func_Open_Id_Change, this.refreshCollectRedPoint), this.addEvent(MsgName.Msg_Task_Refresh, this.refreshSoarRP)
      }
      registS2CHandler() {
        this.addS2CHandle("misc.RetMiscChangeName", this._onRetRename), this.addS2CHandle("misc.RetSystemAttr", this._onRetLocalCharacterAttr), this.addS2CHandle("misc.RetPlayerDetailInfo", this._onRetPlayerDetailInfo), this.addS2CHandle("misc.RetCharacterAttr", this._onRetCharacterAttr), this.addS2CHandle("misc.RetMiscGenderState", this.RetMiscGenderState), this.addS2CHandle("misc.RetMiscChangeGender", this.RetMiscChangeGender), this.addS2CHandle("misc.RetMiscChangeNameTimes", this._onRetChangeNameTimes), this.addS2CHandle("misc.RetReportPlayer", this._onRetReportPlayer), this.addS2CHandle("misc.RetMiscChangeIcon", this.RetMiscChangeIcon), this.addS2CHandle("misc.RetMiscRedPointInfo", this.misc_RetMiscRedPointInfo), this.addS2CHandle("misc.RetChangePersonalSignature", this._onRetChangePersonalSignature), this.addS2CHandle("misc.RetAllIconInfo", this.onRetAllIconInfo), this.addS2CHandle("misc.RetOneIcon", this.onRetOneIcon), this.addS2CHandle("misc.RetHeadFrameIcon", this.onRetHeadFrameIcon), this.addS2CHandle("misc.RetUseIcon", this.onRetUseIcon), this.addS2CHandle("misc.RetUseHeadFrame", this.onRetUseHeadFrame), this.addS2CHandle("misc.GetItemRecord", this.GetItemRecord), this.addS2CHandle("role_level.RetSoaringTaskInfo", this.onRetSoaringTaskInfo), this.addS2CHandle("role_level.RetSoaringInfo", this.onRetSoaringInfo), this.addS2CHandle("openfunc.RetSoaringOpenFunc", this.RetSoaringOpenFunc), this.addS2CHandle("platform.RefreshCollect", this.onRefreshCollect), this.addS2CHandle("title.NotifyTitleInfo", this.NotifyTitleInfo), this.addS2CHandle("title.ChangeTitleInfo", this.ChangeTitleInfo), this.addS2CHandle("title.NotifyChangeTitleInfo", this.NotifyChangeTitleInfo), this.addS2CHandle("misc.RetDailyBoxAward", this.RetDailyBoxAward), this.addS2CHandle("misc.RetHideUserConfig", this.RetHideUserConfig), this.addS2CHandle("platform.RetCustomizeIcon", this.RetCustomizeIcon), this.addS2CHandle("platform.RetGameClubHotSpots", this.RetGameClubHotSpots), this.addS2CHandle("platform.RetGameClubHotSpotsRedpoint", this.RetGameClubHotSpotsRedpoint), this.addS2CHandle("platform.NotifyAppWelfareStatus", this.NotifyAppWelfareStatus), this.addS2CHandle("platform.RetAllKuaishouAward", this.RetAllKuaishouAward), this.addS2CHandle("platform.RetOneKuaishouAward", this.RetOneKuaishouAward), this.addS2CHandle("platform.RetAppBindPhoneData", this.RetAppBindPhoneData), this.addS2CHandle("platform.RetBindCode", this.RetBindCode), this.addS2CHandle("platform.RetOpenFirebase", this.RetOpenFirebase), this.addS2CHandle("misc.RetHideExtSkill", this.RetHideExtSkill), this.addS2CHandle("misc.RetHidePet", this.RetHidePet), this.addS2CHandle("misc.RetSetLangid", this.RetSetLangid), this.addS2CHandle("misc.RetGetPushReward", this.onRetGetPushReward), this.addS2CHandle("misc.RetSetPushIds", this.onRetSetPushIds)
      }
      RetSetLangid(t) {
        t.ret
      }
      setLang(t, e = !1, i = null) {
        let s = "en";
        for (let e = 0; e < ToolUtil.langs.length; e++) {
          let i = ToolUtil.langs[e];
          if (i.id == t) {
            s = i.ext;
            break
          }
        }
        ActivityModel.inst.clearData(), ToolUtil.setCurrentLang(t), UIManager.inst.changeLanguage(s, e, i)
      }
      ReqSetLangid(t, e = !1) {
        let i = {};
        i.langid = t, i.islogin = e, this._netManager.send("misc.ReqSetLangid", i)
      }
      ReqGetPushReward() {
        this._netManager.send("misc.ReqGetPushReward", {})
      }
      get isGetPushReward() {
        return this._isGetPushReward
      }
      onRetGetPushReward(t) {
        this._isGetPushReward = t.isGet, RedPointMgr.inst.setActive(337, !this._isGetPushReward && OpenFuncModel.inst.isFuncOpen(import_proto305.default.openfunc.OpenFuncID.US_PUSH, !1)), this.dispatchEvent(MsgName.Player_PushReward_Refresh)
      }
      ReqSetPushIds(t) {
        this._netManager.send("misc.ReqSetPushIds", {
          ids: t
        })
      }
      get pushMsgIds() {
        return this._pushMsgIds
      }
      onRetSetPushIds(t) {
        this._pushMsgIds = t.ids, this.dispatchEvent(MsgName.Player_PushIds_Refresh)
      }
      RetAllKuaishouAward(t) {
        this.kuaishouawardInfo = t.awardInfo, this.refreshKuaishouRed(), this.dispatchEvent(MsgName.KuaishouAward_Refresh)
      }
      RetOneKuaishouAward(t) {
        this.kuaishouawardInfo[t.type] = t.status, this.dispatchEvent(MsgName.KuaishouAward_Refresh)
      }
      RetAppBindPhoneData(t) {
        BangDingModel.inst.setBindPhoneData(t), this.dispatchEvent(MsgName.AppBindPhoneData_Refresh)
      }
      RetBindCode(t) {
        this.dispatchEvent(MsgName.Alipay_BindCode_Refresh, [t.code, t.expireTime])
      }
      RetOpenFirebase(t) {
        this.isOpenFirebase = t.isopen
      }
      RetHideExtSkill(t) {
        this.hideExtSkill = t.isHide
      }
      RetHidePet(t) {
        this.hidePet = t.isHide
