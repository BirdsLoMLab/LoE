// Fragment: formula_i_L128405.js
// Lines: 128405-128506 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max
// Hit lines: 128406

        const i = t - e;
        return Math.max(i, 0)
      }
      static addValue(t, e) {
        const i = t.match(/^(\d+(\.\d+)?)%$/);
        if (i) {
          const t = parseFloat(i[1]);
          return `${parseFloat((t+e).toFixed(4)).toString()}%`
        } {
          const i = parseFloat(t);
          if (!isNaN(i)) {
            return parseFloat((i + e).toFixed(4)).toString()
          }
          return t
        }
      }
    };
  _SkillHelper.LevelDemolition = 1e3, _SkillHelper.LevelUnit = 30, _SkillHelper.skillConfigMap = new Map;
  var SkillHelper = _SkillHelper,
    AttackComponent = class extends ECSComponent {
      constructor() {
        super(), this.Pause = !1, this._Aim = null, this._AimUid = 0
      }
      static targetLocked(t) {
        return this._targetLock.has(t)
      }
      static clear() {
        this._targetLock.clear()
      }
      get Aim() {
        return this._Aim ? this._Aim : 0 != this._AimUid ? (this._Aim = UnitHelper.getUnitByUid(this._AimUid), this._Aim) : void 0
      }
      set Aim(t) {
        if ("number" == typeof t) {
          let e = UnitHelper.getUnitByUid(t);
          if (null == e) return void(this._AimUid = t);
          t = e
        }
        this._Aim || t === this._Aim || AttackComponent._targetLock.delete(this._Aim), this._Aim = t, t && 2 === t.Type && AttackComponent._targetLock.add(t), this.ClearAimTime = 0
      }
      clearAim() {
        this.Aim && AttackComponent._targetLock.delete(this.Aim), this.Aim = null, this._AimUid = 0, this.ClearAimTime = Laya.timer.currTimer
      }
      canBeFollow() {
        return null == this.Aim && Laya.timer.currTimer - this.ClearAimTime > 1e3
      }
      recycle() {
        this.clearAim(), this.entityId = 0
      }
    };
  AttackComponent._targetLock = new Set, AttackComponent = __decorateClass([ecsclass("AttackComponent")], AttackComponent);
  var _SceneHelper = class t {
    static setServerScene(e) {
      t.IsServerScene = e
    }
    static isServerScene() {
      return t.IsServerScene
    }
  };
  _SceneHelper.IsServerScene = !1;
  var SceneHelper = _SceneHelper,
    _Cfgfaxiang_huanhua = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgfaxiang_huanhua.JsonName = "faxiang_huanhua.json";
  var Cfgfaxiang_huanhua = _Cfgfaxiang_huanhua,
    _CfgskillInitialSlot = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _CfgskillInitialSlot.JsonName = "skillInitialSlot.json";
  var CfgskillInitialSlot = _CfgskillInitialSlot,
    _CfgskillSlotData = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _CfgskillSlotData.JsonName = "skillSlotData.json";
  var CfgskillSlotData = _CfgskillSlotData,
    import_proto297 = __toESM(require_proto()),
    _Cfgfaxiang_baoshi = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgfaxiang_baoshi.JsonName = "faxiang_baoshi.json";
  var Cfgfaxiang_baoshi = _Cfgfaxiang_baoshi,
    _Cfgfaxiang_base = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgfaxiang_base.JsonName = "faxiang_base.json";
  var Cfgfaxiang_base = _Cfgfaxiang_base,
    _Cfgfaxiang_equip_main = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
