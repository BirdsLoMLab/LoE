// Fragment: formula_e_L128912.js
// Lines: 128912-129014 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.min
// Hit lines: 128914

              const e = BagModel.inst.getItemByThisId(t.posData.uidStr).itemCfg.quality;
              1 == r || 0 == r ? e >= n && l++ : e >= o && l++
            } l = Math.min(l, i.num);
          const c = {
            cfg: i,
            curQuality: a,
            nextQuality: n,
            ownCount: l,
            setType: r,
            showRed: 2 != r && l >= i.num
          };
          t.push(c)
        })), t
      }
      getSetId(t, e) {
        return 100 * t + e
      }
      isEquipSetFuncOpen() {
        return OpenFuncModel.inst.isFuncOpen(import_proto3.default.openfunc.OpenFuncID.EQUIP_SUIT, !1)
      }
    };
  EquipSetCtrl._instance = null, EquipSetCtrl = __decorateClass([regClass10("NKVSw9q2So6wtNkJcEWOLw")], EquipSetCtrl);
  var import_proto4 = __toESM(require_proto()),
    _Cfgweapondefine = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgweapondefine.JsonName = "weapondefine.json";
  var Cfgweapondefine = _Cfgweapondefine,
    _Cfgweaponreplace = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgweaponreplace.JsonName = "weaponreplace.json";
  var Cfgweaponreplace = _Cfgweaponreplace,
    {
      regClass: regClass11,
      property: property11
    } = Laya,
    EquipSuccinctCtrl = class extends BaseCtrl {
      constructor() {
        super(), this._refineLevel = 1, this._isEnterSuccinctView = !1, this._entryRedMap = new Map, this._isCheck = !1, this.init()
      }
      static get inst() {
        return null == EquipSuccinctCtrl._instance && (EquipSuccinctCtrl._instance = new EquipSuccinctCtrl), EquipSuccinctCtrl._instance
      }
      init() {
        super.init(), this.addEvent(MsgName.Lead_Role_Level_Change, (() => {
          this.checkUpgradeRed()
        })), this.addEvent(MsgName.Func_Open_Id_Change, (t => {
          t == import_proto4.default.openfunc.OpenFuncID.EQUIP_REFINE && (this.checkPosRed(), this.checkUpgradeRed())
        })), this._entryRedMap && this._entryRedMap.clear()
      }
      reset() {
        super.reset()
      }
      get equipCtrl() {
        return EquipCtrl.inst
      }
      registS2CHandler() {
        this.addS2CHandle("equip.RetEquipRefineUp", this.on_RetEquipRefineUp), this.addS2CHandle("equip.RetEquipRefine", this.on_RetEquipRefine), this.addS2CHandle("equip.RetEquipReplaceEntry", this.on_RetEquipReplaceEntry), this.addS2CHandle("equip.RefreshEquipRefine", this.on_RefreshEquipRefiney)
      }
      on_EquipPosInfo(t, e) {
        this.refineLevel = t.refineLevel, e && this.checkPosRed(), this.checkUpgradeRed(!0);
        const i = EquipSuccinctCtrl.inst.getDefineCfg(1).consume[0][0];
        ItemObserverUtil.removeAllObserver(this), ItemObserverUtil.addItemIdObserver(i, this, (t => {
          1 != t && this.checkPosRed()
        }), !1)
      }
      on_RetEquipRefineUp(t) {
        t && t.ret && (this.refineLevel = t.level, this.checkUpgradeRed())
      }
      on_RetEquipRefine(t) {
        if (!t || !t.ret) return;
        const e = this.equipCtrl.getEquipSlotDataByPos(t.pos);
        let i = !1;
        this.equipCtrl.isWearForSlot(e) && (null == e.posData.entry || 0 == Object.keys(e.posData.entry).length ? (e.posData.entry = t.entry, i = !0) : e.posData.newEntry = t.entry), this.checkPosRed(), this.dispatchEvent(MsgName.Equip_Succinct_Entry_Refresh, {
          isUnlock: i
        })
      }
      on_RetEquipReplaceEntry(t) {
        if (!t || !t.ret) return;
        const e = this.equipCtrl.getEquipSlotDataByPos(t.pos);
        this.equipCtrl.isWearForSlot(e) && (e.posData.entry = t.entry, e.posData.newEntry = null), this.dispatchEvent(MsgName.Equip_Succinct_Entry_Refresh, {
          isReplace: 2 == t.type
        })
      }
      on_RefreshEquipRefiney(t) {
        if (!t) return;
        const e = this.equipCtrl.getEquipSlotDataByPos(t.pos);
        this.equipCtrl.isWearForSlot(e) && (e.posData.entry = t.entry, e.posData.newEntry = t.newEntry), this.dispatchEvent(MsgName.Equip_Succinct_Entry_Refresh)
      }
      send_ReqEquipRefineUp() {
        NetManager.inst.send("equip.ReqEquipRefineUp", {})
      }
      send_ReqEquipRefine(t) {
        let e = {};
        e.pos = t, NetManager.inst.send("equip.ReqEquipRefine", e)
      }
      send_ReqEquipReplaceEntry(t, e) {
        let i = {};
