// Fragment: gacha_draw_super_L296376.js
// Lines: 296376-296559 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: draw
// Hit lines: 296376, 296459

        super(), this.uid = t.UID, this.pkgName = "Draw", this.name = "CardShopShowView"
      }
      onInit() {
        this.openSubCom(this.btnMask), this.btnMask.onClick(this, this.onClickAll, [this.btnMask]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.Gold), this.openSubCom(this.openAnim), this.openSubCom(this.btnCardSelect1), this.btnCardSelect1.onClick(this, this.onClickAll, [this.btnCardSelect1]), this.openSubCom(this.btnCardSelect2), this.btnCardSelect2.onClick(this, this.onClickAll, [this.btnCardSelect2]), this.btn1.addClick(this, this.onClickAll, [this.btn1]), this.openSubCom(this.btn1), this.btn2.addClick(this, this.onClickAll, [this.btn2]), this.openSubCom(this.btn2), this.btn3.addClick(this, this.onClickAll, [this.btn3]), this.openSubCom(this.btn3), this.btn4.addClick(this, this.onClickAll, [this.btn4]), this.openSubCom(this.btn4)
      }
    };
  _UICardShopShowView.UID = "ui://jvvif5iik2rf97", __decorateClass([UIController], _UICardShopShowView.prototype, "c1", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "bgImg1", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "btnMask", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "goAuto", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "Gold", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "openAnim", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "txtJump", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "txtAuto", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "btnCardSelect1", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "btnCardSelect2", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "btn1", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "btn2", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "btn3", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "btn4", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "goBtns", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "card", 2), __decorateClass([UIProperty], _UICardShopShowView.prototype, "fixHeight", 2);
  var UICardShopShowView = _UICardShopShowView,
    _Cfgdraw_type = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgdraw_type.JsonName = "draw_type.json";
  var Cfgdraw_type = _Cfgdraw_type,
    _Cfgdraw_data = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgdraw_data.JsonName = "draw_data.json";
  var Cfgdraw_data = _Cfgdraw_data,
    DrawRewardItemData = class {
      constructor(t, e) {
        this.id = t, this.num = e;
        const i = CfgitemBase.get(t);
        this.quality = i.quality
      }
    },
    _DrawModel = class t extends BaseModel {
      constructor() {
        super(), this.mapCfgTypeIdToOpen = new Map, this.mapCfgTypeIdToCfgDataId = new Map, this.mapCfgTypeIdToExp = new Map, this.mapCfgTypeIdToAdCnt = new Map, this.mapCfgTypeIdToFinishCfgDataIdArr = new Map
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
      serverSetRetAllLuckyDrawInfo(t) {
        for (const e in t.datas.datas) {
          const i = t.datas.datas[e];
          this.mapCfgTypeIdToExp.set(parseInt(e), i.exp), this.mapCfgTypeIdToAdCnt.set(parseInt(e), i.cnt), this.mapCfgTypeIdToCfgDataId.set(parseInt(e), i.id), this.mapCfgTypeIdToOpen.set(parseInt(e), !0);
          let s = [];
          i.awardList.forEach((t => {
            s.push(t)
          })), this.mapCfgTypeIdToFinishCfgDataIdArr.set(parseInt(e), s)
        }
        EventDispatcher.inst.dispatchEvent(MsgName.Draw_AllLuckyDrawInfo)
      }
      needSort() {
        const t = Cfgdraw_data.get(this.Proto_RetLuckyDraw.id),
          e = Cfgdraw_type.get(t.id),
          i = this.Proto_RetLuckyDraw.type || 0,
          s = this.Proto_RetLuckyDraw.cntType || 0;
        let o = 0;
        return o = 0 == i ? e.ticketCost[s][0] : e.currencyCost[s][0], o >= 50
      }
      serverSetRetLuckyDraw(t) {
        this.Proto_RetLuckyDraw = t;
        const e = t.info;
        let i = Cfgdraw_data.get(e.id);
        this.mapCfgTypeIdToExp.set(i.id, e.exp);
        const s = Cfgdraw_data.get(t.id).id;
        this.mapCfgTypeIdToCfgDataId.set(s, e.id), this.mapCfgTypeIdToAdCnt.set(s, e.cnt), this.mapCfgTypeIdToOpen.set(t.id, !0), this.drawRewardItemArr = [], t.list.forEach((t => {
          this.drawRewardItemArr.push(new DrawRewardItemData(parseInt(t.id.toString()), t.num))
        })), this.needSort() && this.drawRewardItemArr.sort((function(t, e) {
          return e.quality - t.quality
        })), EventDispatcher.inst.dispatchEvent(MsgName.Draw_LuckyDraw)
      }
      serverSetRetLuckyDrawAward(t) {
        let e = Cfgdraw_data.get(t.id),
          i = this.mapCfgTypeIdToFinishCfgDataIdArr.get(e.id) || [];
        i.push(t.id), this.mapCfgTypeIdToFinishCfgDataIdArr.set(e.id, i), EventDispatcher.inst.dispatchEvent(MsgName.Draw_LuckyDrawAward)
      }
    };
  _DrawModel._instance = null;
  var DrawModel = _DrawModel,
    UIbtnCard = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.openSubCom(this.goRed), this.onInit(), this.onEvent()
      }
    };
  UIbtnCard.UID = "ui://jvvif5iivwuouz5", __decorateClass([UIProperty], UIbtnCard.prototype, "imgBg", 2), __decorateClass([UIProperty], UIbtnCard.prototype, "imgBgLock", 2), __decorateClass([UIProperty], UIbtnCard.prototype, "imgIcon", 2), __decorateClass([UIProperty], UIbtnCard.prototype, "txtConsume", 2), __decorateClass([UIProperty], UIbtnCard.prototype, "goContent", 2), __decorateClass([UIProperty], UIbtnCard.prototype, "goRed", 2);
  var BtnCardData = class {
      constructor(t, e) {
        this.cfgTypeRow = t, this.idx = e;
        const i = this.cfgTypeRow.costId[0],
          s = this.cfgTypeRow.costId[1],
          o = ItemCtrl.inst.getItemNum(i) >= this.cfgTypeRow.ticketCost[e][1];
        this.itemId = o ? i : s, this.useNum = o ? this.cfgTypeRow.ticketCost[e][0] : this.cfgTypeRow.currencyCost[e][0], this.costNum = o ? this.cfgTypeRow.ticketCost[e][1] : this.cfgTypeRow.currencyCost[e][1], this.type = o ? 0 : 1
      }
    },
    btnCard = class extends UIbtnCard {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        this.btnCardData = t, this.flushAll()
      }
      flushAll() {
        this.title = `${this.btnCardData.useNum}${ToolUtil.chinese(1508)}`, this.txtConsume.text = this.btnCardData.costNum.toString(), this.setTexture(this.imgIcon, CfgitemBase.get(this.btnCardData.itemId).icon, "ItemIcon");
        let t = ItemCtrl.inst.getItemNum(this.btnCardData.itemId) >= this.btnCardData.costNum ? "#FFFFFF" : "#F84089";
        this.txtConsume.color = t
      }
    },
    import_proto334 = __toESM(require_proto()),
    CardEffectData = class {},
    CardAnimData = class {
      constructor(t, e, i, s, o, n, r, a, l) {
        this.idx = t, this.isEnd = e, this.isShadke = i, this.waitToTrunDuring = o, this.waitToShowDuring = s, this.downYDuring = n, this.turnDuring = r, this.shakeDuring = a, this.showEffType = l
      }
    },
    {
      regClass: regClass176,
      property: property174
    } = Laya,
    DrawCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.allCfgDataId = [], this.allOpenFuncId = [], this.maxCfgTypeIdToDataId = new Map, this.minCfgTypeIdToDataId = new Map, this.mapCfgTypeIdToAdServerTime = new Map, this.init()
      }
      static get inst() {
        return null == DrawCtrl._instance && (DrawCtrl._instance = new DrawCtrl), DrawCtrl._instance
      }
      init() {
        super.init(), this.addEvent(MsgName.Func_Open_Id_Change, this.onFuncOpenChange), Cfgdraw_data.get().forEach((t => {
          const e = t.id,
            i = t.onlyId,
            s = this.maxCfgTypeIdToDataId.get(e) || 0;
          this.allCfgDataId.push(i), i > s && this.maxCfgTypeIdToDataId.set(e, i), 1 == t.level && this.minCfgTypeIdToDataId.set(e, i)
        }));
        for (let t of Cfgdraw_type.get()) this.allOpenFuncId.push(t.draw_openfunc), this.allOpenFuncId.push(t.adv_openfunc)
      }
      registS2CHandler() {
        this.addS2CHandle("lucky_draw.RetAllLuckyDrawInfo", this.onRetAllLuckyDrawInfo), this.addS2CHandle("lucky_draw.RetLuckyDraw", this.onRetLuckyDraw), this.addS2CHandle("lucky_draw.RetLuckyDrawAward", this.onRetLuckyDrawAward)
      }
      reset() {
        super.reset()
      }
      onRetAllLuckyDrawInfo(t) {
        DrawModel.inst.serverSetRetAllLuckyDrawInfo(t), this.UpdateRedPoint()
      }
      onRetLuckyDraw(t) {
        DrawModel.inst.serverSetRetLuckyDraw(t), UIManager.inst.open(CardShopShowView.UID), this.UpdateRedPoint()
      }
      onRetLuckyDrawAward(t) {
        DrawModel.inst.serverSetRetLuckyDrawAward(t), this.UpdateRedPoint()
      }
      ReqAllLuckyDrawInfo() {
        NetManager.inst.send("lucky_draw.ReqAllLuckyDrawInfo", {})
      }
      ReqLuckyDraw(t, e, i) {
        let s = {};
        s.id = DrawModel.inst.mapCfgTypeIdToCfgDataId.get(t) || this.minCfgTypeIdToDataId.get(t), s.type = e, s.cntType = i, NetManager.inst.send("lucky_draw.ReqLuckyDraw", s)
      }
      ReqLuckyDrawAward(t) {
        let e = {};
        e.id = t, NetManager.inst.send("lucky_draw.ReqLuckyDrawAward", e)
      }
      isFinishAward(t) {
        const e = Cfgdraw_data.get(t);
        return (DrawModel.inst.mapCfgTypeIdToFinishCfgDataIdArr.get(e.id) || []).includes(t)
      }
      canGetAward(t) {
        const e = Cfgdraw_data.get(t),
          i = DrawModel.inst.mapCfgTypeIdToCfgDataId.get(e.id);
        return 0 != e.award.length && (!this.isFinishAward(t) && i >= t)
      }
      getShowEffType(t) {
        const e = DrawModel.inst.drawRewardItemArr[t],
          i = CfgitemBase.get(e.id).quality;
        return 4 == i ? 2 : 5 == i ? 1 : 6 == i ? 3 : 0
      }
      getCfgTypeIdByCfgDataId(t) {
