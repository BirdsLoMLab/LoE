// Fragment: equipment_registS2CHandler_L253468.js
// Lines: 253468-253608 of bundle-beautified.js
// Categories: Equipment
// Keywords: relic
// Hit lines: 253469, 253483, 253487, 253494, 253508

    registS2CHandler() {
      this.addS2CHandle("relic.RetRelicInfo", this.relic_RetRelicInfo), this.addS2CHandle("relic.RetRelicUpLevel", this.relic_RetRelicUpLevel), this.addS2CHandle("relic.RetRelicSell", this.relic_RetRelicSell)
    }
    reset() {
      super.reset()
    }
    relic_RetRelicInfo(t) {
      this.remainsList = t.list, this.dispatchEvent(MsgName.Remains_Refresh)
    }
    relic_RetRelicUpLevel(t) {
      1 == t.isSucc && (this.remainsList[t.one.relicId] = t.one), this.dispatchEvent(MsgName.Remains_LevelUp, t)
    }
    relic_RetRelicSell(t) {}
    quest_sendRelicUpLevel(t) {
      let e = {};
      e.id = t, NetManager.inst.send("relic.ReqRelicUpLevel", e)
    }
    quest_sendRelicSell(t, e) {
      let i = {};
      i.id = t, i.num = e, NetManager.inst.send("relic.ReqRelicSell", i)
    }
    getRemainsDataById(t) {
      if (null != this.remainsList) return this.remainsList[t.toString()]
    }
    getRemainsCfg() {
      if (this.idList.length > 0) return this.idList;
      let t = ConfigManager.inst.GetXmlConfig("relic").relic_id.split(";");
      for (const e of t) {
        let t = parseInt(e);
        this.idList.push(t)
      }
      return this.idList.sort(((t, e) => t - e)), this.idList
    }
    getDataIndex(t) {
      for (let e = 0; e < this.idList.length; e++)
        if (this.idList[e] == t.one.relicId) return e
    }
    getOpenDataByQuality(t) {
      let e = !0,
        i = "",
        s = ConfigManager.inst.getXmlMapCfg("relic", "relic_openfunc");
      if (null != s)
        for (const o of s)
          if (parseInt(o.id) == t) {
            if (e = OpenFuncModel.inst.isFuncOpen(parseInt(o.openfunc), !1), !e) {
              let t = Cfgopenfunction.get(parseInt(o.openfunc));
              i = ToolUtil.chinese(t.lock_desc)
            }
            break
          } return {
        isOpen: e,
        openTips: i
      }
    }
    getRemainsTotalLv() {
      let t = 0,
        e = this.getRemainsCfg();
      for (const i of e) {
        let e = this.getRemainsDataById(i);
        t += null != e ? e.level : 0
      }
      return t
    }
  };
  RemainsCtrl._instance = null, RemainsCtrl = __decorateClass([regClass160("qFzLmGQlQXClVrTG0Nz0Aw")], RemainsCtrl);
  var _LeadLevelModel = class t extends BaseModel {
    constructor() {
      super(), this.curRate = 1, this.RoleLevel = 1, this.initRoleLv = !1, this.AttrLevelMap = new Map, this.curUpAttrIndex = 1, this.attrUpNumMap = new Map, this.prizeMap = new Map, this.smallCrit = [], this.bigCrit = [], this.SDK_ROLE_LV_KEY = "UPDATE_LEVEL_LOG", this._LianqiSkinNewList = []
    }
    static get inst() {
      return null == t._instance && (t._instance = new t), t._instance
    }
    init() {
      super.init()
    }
    reset() {
      super.reset()
    }
    setPrizeMap(t) {
      this.prizeMap = new Map;
      for (let e = 0; e < t.length; e++) {
        const i = t[e];
        this.prizeMap.set(i, !0)
      }
      EventDispatcher.inst.dispatchEvent(MsgName.Lead_Award_State_Change)
    }
    setGetLeadPrizeState(t) {
      this.prizeMap.set(t, !0), EventDispatcher.inst.dispatchEvent(MsgName.Lead_Award_State_Change)
    }
    setRoleLevel(t) {
      let e = !1;
      if (t !== this.RoleLevel) {
        let i = !1;
        if (this.initRoleLv) {
          i = this.getRoleRealm(this.RoleLevel) != this.getRoleRealm(t)
        }
        this.RoleLevel = t, this.initRoleLv = !0, i && EventDispatcher.inst.dispatchEvent(MsgName.Lead_Role_Realm_Change), EventDispatcher.inst.dispatchEvent(MsgName.Lead_Role_Level_Change), LeadLevelCtrl.inst.refreshRedForLv(), 10 == this.RoleLevel && SdkAdMgr.storeGuide();
        let s = LocalCache.getItem(this.SDK_ROLE_LV_KEY, "0", !0);
        e = Number(s) != this.RoleLevel
      }
      e && (LocalCache.setItem(this.SDK_ROLE_LV_KEY, t.toString(), !0), 18 == t ? HwFnsdkMgr.hw_api_logEventLog(HwFnsdkMgr.krLogEvent.level18) : 20 == t ? HwFnsdkMgr.hw_api_logEventLog(HwFnsdkMgr.krLogEvent.level20) : 27 == t ? HwFnsdkMgr.hw_api_logEventLog(HwFnsdkMgr.krLogEvent.level27) : 51 == t ? HwFnsdkMgr.hw_api_logEventLog(HwFnsdkMgr.krLogEvent.level51) : 78 == t ? HwFnsdkMgr.hw_api_logEventLog(HwFnsdkMgr.krLogEvent.level78) : 97 == t ? HwFnsdkMgr.hw_api_logEventLog(HwFnsdkMgr.krLogEvent.level97) : 125 == t ? HwFnsdkMgr.hw_api_logEventLog(HwFnsdkMgr.krLogEvent.level125) : 165 == t && HwFnsdkMgr.hw_api_logEventLog(HwFnsdkMgr.krLogEvent.level165))
    }
    setAttrLevel(t, e) {
      let i = !1;
      this.AttrLevelMap.has(t) && this.AttrLevelMap.get(t) !== e && (i = !0), this.AttrLevelMap.set(t, e), i && EventDispatcher.inst.dispatchEvent(MsgName.Lead_Attr_Level_Change, {
        index: t,
        level: e
      })
    }
    setCurRate(t) {
      this.curRate = t, LeadLevelCtrl.inst.checkAddPointViewRedPoint()
    }
    setCurUpAttrIndex(t) {
      this.curUpAttrIndex = t
    }
    setAttrUpNum(t, e) {
      this.attrUpNumMap.set(t, e)
    }
    setLeadCritInfo(t, e) {
      this.smallCrit = t, this.bigCrit = e
    }
    getRoleLevel() {
      return this.RoleLevel
    }
    getNextBreakRoleLevel() {
      if (!this.isRoleMaxLv())
        for (let t = this.RoleLevel + 1; t < 1e3; t++) {
          let e = Cfgleadingrole.get(t, !0);
          if (!e) return -1;
          if (e && null != e.condition && e.condition.length > 0) return e.id
        }
      return -1
    }
    getUpgradeEffTime() {
      const t = Cfgleadingrole.get(this.RoleLevel, !0);
      return t ? t.upgrade_eff_time : 180
    }
    getCurUpAttrIndex() {
      let t = 1;
      for (let e = 1; e <= 5 && this.isAttrMaxLevel(e); e++) t = e + 1;
      return t = t >= 5 ? 5 : t, this.curUpAttrIndex = t, t
