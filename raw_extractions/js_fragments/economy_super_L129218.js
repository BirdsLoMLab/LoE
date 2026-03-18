// Fragment: economy_super_L129218.js
// Lines: 129218-129414 of bundle-beautified.js
// Categories: Economy, Stat System
// Keywords: gold, speed
// Hit lines: 129218, 129299, 129302, 129311, 129314

        super(), this.AddMuMap = new Map, this.AddRoleMap = new Map, this.CoreSkill = [], this.ActiveSkill = [], this.PassSkill = [], this.BasicSkill = [], this.DamageRecord = "", this.BattleTime = 0, this.BattleStartTime = 0, this.BattleEndTime = 0, this.TotalDamage = 0, this.GMMonsterMaxHP = 1e5, this.GMBattleRecordFlag = !1, this.GMMonsterId = 0, this.secondHurt = 0, this.replaceBossToMonsterFlag = !1, this.GMReleaseSkillId = 0, this.Speed = !1
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
      saveMapToLocal(t, e) {
        this.saveArrayToLocal(Array.from(t.entries()), e)
      }
      saveArrayToLocal(t, e) {
        var i = JSON.stringify(t);
        Laya.LocalStorage.setItem("GMBattleToolView" + e, i)
      }
      getMapFromLocal(t) {
        let e = this.getArrayFromLocal(t);
        return e ? new Map(e) : null
      }
      getArrayFromLocal(t) {
        var e = Laya.LocalStorage.getItem("GMBattleToolView" + t);
        return e ? JSON.parse(e) : null
      }
      addItemToGM(t) {
        ToolUtil.isGM && (this.DefaultTxt = StringUtil.format("//packs type=1 baseid={0} num=10000", t))
      }
    };
  _GMModel._instance = null;
  var GMModel = _GMModel,
    EquipTipView = class extends UIEquipTipView {
      constructor() {
        super(), this._refreshPos = !1, this.destoryType = 0, this.maskType = 1, this.layer = ItemCtrl.inst.itemTipsLayer, this.maskTransparent = !0
      }
      onInit() {
        super.onInit()
      }
      onShow() {
        if (this.args && this.args.length > 0) {
          let t = this.args[0],
            e = this.args[1],
            i = this.args[2] || !1;
          this._showOpBtn = i;
          let s = this.args[3] || !1,
            o = !1,
            n = t.itemCfg.subtype;
          if (this.wearItem.visible = !1, i && e && e.posData && (o = e.posData.uidStr == t.thisid, !o)) {
            let t = EquipCtrl.inst.getWearItemDataByPos(n);
            t && (this.wearItem.visible = !0), this.wearItem.setData(t, e, !1, o, s, !0)
          }
          this.selectItem.visible = !0, GMModel.inst.addItemToGM(t.itemId), this.selectItem.setData(t, e, i, o, s, !1), this._refreshPos = !0
        }
      }
      onUpdate(t) {
        this._refreshPos && (this.wearItem.visible || this.selectItem.setXY((this.ui.width - this.selectItem.width) / 2, (this.ui.height - this.selectItem.height) / 2), this._refreshPos = !1)
      }
      onHide() {
        EventDispatcher.inst.dispatchEvent(MsgName.Item_Tips_Close)
      }
      onClickMask() {
        super.onClickMask(), this._showOpBtn && EquipCtrl.inst.clearCraftingQuickWear()
      }
      onDestroy() {}
    },
    _UIEquipForgeSuccessView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Equip", this.name = "EquipForgeSuccessView"
      }
      onInit() {
        this.openSubCom(this.bgImg), this.openSubCom(this.btnGoEquip), this.btnGoEquip.onClick(this, this.onClickAll, [this.btnGoEquip]), this.addOpenAni(this.openAni)
      }
    };
  _UIEquipForgeSuccessView.UID = "ui://u6gwwn9tia8q3q", __decorateClass([UIProperty], _UIEquipForgeSuccessView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UIEquipForgeSuccessView.prototype, "itemList", 2), __decorateClass([UIProperty], _UIEquipForgeSuccessView.prototype, "txtForgeNumber", 2), __decorateClass([UIProperty], _UIEquipForgeSuccessView.prototype, "btnGoEquip", 2), __decorateClass([UIProperty], _UIEquipForgeSuccessView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIEquipForgeSuccessView.prototype, "openAni", 2);
  var UIEquipForgeSuccessView = _UIEquipForgeSuccessView,
    _UIEquipBagView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "EquipBag", this.name = "EquipBagView"
      }
      onInit() {
        this.btnDecompose.onClick(this, this.onClickAll, [this.btnDecompose]), this.openSubCom(this.gold), this.addOpenAni(this.openAni), this.addCloseAni(this.closeAni)
      }
    };
  _UIEquipBagView.UID = "ui://urlk4mknomft2b", __decorateClass([UIProperty], _UIEquipBagView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UIEquipBagView.prototype, "equipSlotList", 2), __decorateClass([UIProperty], _UIEquipBagView.prototype, "equipList", 2), __decorateClass([UIProperty], _UIEquipBagView.prototype, "goEmpty", 2), __decorateClass([UIProperty], _UIEquipBagView.prototype, "btnDecompose", 2), __decorateClass([UIProperty], _UIEquipBagView.prototype, "gold", 2), __decorateClass([UIProperty], _UIEquipBagView.prototype, "goSlotEff", 2), __decorateClass([UIProperty], _UIEquipBagView.prototype, "goBagEff", 2), __decorateClass([UIProperty], _UIEquipBagView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIEquipBagView.prototype, "openAni", 2), __decorateClass([UITransition], _UIEquipBagView.prototype, "closeAni", 2);
  var UIEquipBagView = _UIEquipBagView,
    import_proto291 = __toESM(require_proto()),
    import_proto290 = __toESM(require_proto()),
    _UIEquipMakeView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Equip", this.name = "EquipMakeView"
      }
      onInit() {
        this.openSubCom(this.Gold), this.openSubCom(this.equipStove), this.btnClick.onClick(this, this.onClickAll, [this.btnClick]), this.btnAutoDecompose.addClick(this, this.onClickAll, [this.btnAutoDecompose]), this.openSubCom(this.btnAutoDecompose), this.btnStage.onClick(this, this.onClickAll, [this.btnStage]), this.btnWearDeco.onClick(this, this.onClickAll, [this.btnWearDeco]), this.btnhuanhua.addClick(this, this.onClickAll, [this.btnhuanhua]), this.openSubCom(this.btnhuanhua), this.btnGuideBubble.onClick(this, this.onClickAll, [this.btnGuideBubble]), this.openSubCom(this.goRed), this.btnSwitch0.onClick(this, this.onClickAll, [this.btnSwitch0]), this.openSubCom(this.goRed1), this.btnSwitch2.onClick(this, this.onClickAll, [this.btnSwitch2]), this.btnSwitch1.onClick(this, this.onClickAll, [this.btnSwitch1]), this.openSubCom(this.goRed02), this.openSubCom(this.eff0), this.openSubCom(this.eff1), this.openSubCom(this.eff2), this.btn_equip.addClick(this, this.onClickAll, [this.btn_equip]), this.openSubCom(this.btn_equip), this.addOpenAni(this.openAni), this.addCloseAni(this.closeAni)
      }
    };
  _UIEquipMakeView.UID = "ui://u6gwwn9tcu1b0", __decorateClass([UIController], _UIEquipMakeView.prototype, "c1", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "bgLeft", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "bgRight", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "Gold", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "equipSlotList", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "extendSlotList", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "equipStove", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goEquipEffRoot", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goNone", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goDoing", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goCount", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goUpgradeActive", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goUpgrading", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goUpgradDone", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnClick", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goNum", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goQualityEffRoot", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goGuideEff", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "imgEquipIcon", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goStove", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnAutoDecompose", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnStage", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "proExp", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnWearDeco", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goGuideBubble", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goGuideFly", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnhuanhua", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnGuideBubble", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goRed", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnSwitch0", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goRed1", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnSwitch2", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btnSwitch1", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "goRed02", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "outBtn", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "eff0", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "eff1", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "eff2", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "line", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "line1", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "line2", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "btn_equip", 2), __decorateClass([UIProperty], _UIEquipMakeView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIEquipMakeView.prototype, "openAni", 2), __decorateClass([UITransition], _UIEquipMakeView.prototype, "closeAni", 2);
  var UIEquipMakeView = _UIEquipMakeView,
    _UIEquipSetView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "EquipSet", this.name = "EquipSetView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UIEquipSetView.UID = "ui://pkm0ej0nvl6i0", __decorateClass([UIProperty], _UIEquipSetView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIEquipSetView.prototype, "setList", 2), __decorateClass([UIProperty], _UIEquipSetView.prototype, "goEff", 2), __decorateClass([UIProperty], _UIEquipSetView.prototype, "fixHeight", 2);
  var UIEquipSetView = _UIEquipSetView,
    EquipSetView = class extends UIEquipSetView {
      constructor() {
        super(), this.maskType = 1, this.layer = "Pop"
      }
      onInit() {
        super.onInit(), this.creatList(this.setList, this._onItemRender, null, null, !0)
      }
      onEvent() {
        this.addEvent(MsgName.Equip_Set_Refresh, this.onEquipSetRefreshHandle)
      }
      onEquipSetRefreshHandle() {
        this.sucessView.play(), this.refresh()
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
      onShow() {
        this.refresh()
      }
      refresh() {
        this._setArr = EquipSetCtrl.inst.getAllSetList(), this.setList.numItems = this._setArr.length
      }
      _onItemRender(t, e) {
        e.setData(this._setArr[t])
      }
      get sucessView() {
        return this._sucessView || (this._sucessView = this.addSubChild("EquipSetUp", this.goEff)), this._sucessView
      }
    },
    _MapBlockCtrl = class t extends BaseCtrl {
      constructor() {
        super(), this.openBlock = !1, this._boxList = new Array, this._circleList = new Array, this._rigidbody3D = new Array
      }
      static get inst() {
        return null == t._instance && (t._instance = new t), t._instance
      }
      loadBlockList(t) {
        return __async(this, null, (function*() {
          return this.openBlock ? (yield this.loadBlockListCfg(t), this.createBlockList(), Promise.resolve()) : Promise.resolve()
        }))
      }
      loadBlockListCfg(t) {
        return __async(this, null, (function*() {
          const e = `resourcesLib/WorldMap/Terrain/${t}/block_${t}.json`,
            i = yield ResManager.inst.load(e);
          if (!i) return Promise.resolve();
          i.data.Boxes.forEach((t => {
            this._boxList.push(t)
          }));
          return i.data.Circles.forEach((t => {
            this._circleList.push(t)
          })), ResManager.inst.ignoreCacheTimeCycle(e), Promise.resolve()
        }))
      }
      createBlockList() {
        this._boxList.forEach((t => {
          const e = new Laya.Sprite3D;
          e.transform.position = new Laya.Vector3(t.X, 0, t.Z), CoreMapCtrl.inst.mapRoot.addChild(e);
          const i = e.addComponent(Laya.Rigidbody3D);
          i.isKinematic = !0, i.colliderShape = new Laya.BoxColliderShape(t.W, t.H, 1), this._rigidbody3D.push(i)
        })), this._circleList.forEach((t => {
          const e = new Laya.Sprite3D;
          e.transform.position = new Laya.Vector3(t.X, 0, t.Z), CoreMapCtrl.inst.mapRoot.addChild(e);
          const i = e.addComponent(Laya.Rigidbody3D);
          i.isKinematic = !0, i.colliderShape = new Laya.SphereColliderShape(t.R), this._rigidbody3D.push(i)
        }))
      }
      onExitMap() {
        this._boxList.length = 0, this._circleList.length = 0, this._rigidbody3D.forEach((t => {
          CoreMapCtrl.inst.mapRoot.removeChild(t.owner)
        }))
      }
      isInBoxBlock(t, e, i) {
        return i.X - i.W / 2 <= t && i.X + i.W / 2 >= t && i.Z - i.H / 2 <= e && i.Z + i.H / 2 >= e
      }
      isInBoxesBlock(t, e) {
        return this._boxList.findIndex((i => this.isInBoxBlock(t, e, i)))
      }
      isInCirclBlock(t, e, i) {
        return (e - i.Z) * (e - i.Z) + (t - i.X) * (t - i.X) <= i.R * i.R
      }
      isInCirclesBlock(t, e) {
        return this._circleList.findIndex((i => this.isInCirclBlock(t, e, i)))
      }
      isInBlock(t, e) {
        return -1 !== this.isInBoxesBlock(t, e) || -1 !== this.isInCirclesBlock(t, e)
      }
      getBlockCenter(t, e) {
        let i = this.isInCirclesBlock(t, e);
