// Fragment: class_system_Cfgmartial_level_L129734.js
// Lines: 129734-129835 of bundle-beautified.js
// Categories: Class System
// Keywords: fire, thunder, wind
// Hit lines: 129735

  var Cfgmartial_level = _Cfgmartial_level,
    MartialType = (t => (t[t.Wind = 1] = "Wind", t[t.Fire = 2] = "Fire", t[t.Thunder = 3] = "Thunder", t))(MartialType || {}),
    MethodExercisesModel = class t extends BaseModel {
      constructor() {
        super(), this._qualityInfo = new Map
      }
      static get inst() {
        return null == t._instance && (t._instance = new t, SingletonMgr.register(t._instance)), t._instance
      }
      init() {
        super.init()
      }
      initAllMartial() {
        if (!this._unlockMap) {
          this._unlockMap = new Map;
          const t = ConfigManager.inst.getXmlMapCfg("martial", "martial_pos_unlock");
          for (const e of t) this._unlockMap.set(parseInt(e.id), e)
        }
        if (!this._posCfgMap) {
          this._posCfgMap = new Map;
          const t = ConfigManager.inst.getXmlMapCfg("martial", "martial_slot");
          for (const e of t) this._posCfgMap.set(parseInt(e.pos), e)
        }
        if (!this._martialMap) {
          this._martialMap = new Map;
          for (const t in MartialType) {
            const e = parseInt(t);
            isNaN(e) || this._createNewMartial(e)
          }
          this.refreshWearPosOpenFunc()
        }
        if (!this._unlockItemMap) {
          this._unlockItemMap = new Map;
          for (const t in MartialType) {
            const e = parseInt(t);
            isNaN(e) || this._unlockItemMap.set(e, new Map)
          }
        }
      }
      _createNewMartial(t) {
        if (this._martialMap.has(t)) return;
        let e = ConfigManager.inst.GetXmlConfig("martial").martial_pos_count;
        this.PosNum = e;
        let i = new Map;
        for (let s = 0; s < e; s++) {
          let e = s + 1,
            o = {
              pos: e,
              posId: this.convertPosId(e, t),
              isLock: !1
            };
          i.set(o.posId, o)
        }
        let s = {
          type: t,
          posMap: i
        };
        this._martialMap.set(t, s)
      }
      convertPosId(t, e) {
        return 100 * e + t
      }
      convertType(t) {
        return Math.floor(t / 100)
      }
      getAllMartialData() {
        return this._martialMap
      }
      getMartialData(t) {
        return this._martialMap.get(t)
      }
      getUnlockItemMap(t) {
        return this._unlockItemMap.get(t)
      }
      getAllUnlockItem() {
        return this._unlockItemMap
      }
      getPosCfg(t) {
        return this._posCfgMap.get(t)
      }
      refreshWearPosOpenFunc() {
        if (!this._martialMap) return !1;
        let t = !1;
        for (const [e, i] of this._martialMap)
          for (const [e, s] of i.posMap) {
            const i = this._unlockMap.get(e),
              o = s.isLock;
            if (i) {
              const t = parseInt(i.openfunc_id);
              s.isLock = !OpenFuncModel.inst.isFuncOpen(t, !1), s.lockCfg = i
            }
            t || (t = o != s.isLock)
          }
        return t
      }
      refreshWearPos(t) {
        for (const e in t)
          if (Object.prototype.hasOwnProperty.call(t, e)) {
            const i = t[e],
              s = parseInt(e),
              o = this.convertType(s),
              n = this.getMartialData(o);
