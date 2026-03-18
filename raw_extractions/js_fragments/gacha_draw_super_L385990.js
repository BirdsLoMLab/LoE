// Fragment: gacha_draw_super_L385990.js
// Lines: 385990-386182 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: wish
// Hit lines: 385990, 386045, 386082

        super(), this.uid = t.UID, this.pkgName = "Wish", this.name = "WishActivityView"
      }
      onInit() {
        this.btnimgBg_ta.onClick(this, this.onClickAll, [this.btnimgBg_ta]), this.btn_baoxiang_awards.addClick(this, this.onClickAll, [this.btn_baoxiang_awards]), this.openSubCom(this.btn_baoxiang_awards), this.openSubCom(this.btn_chouqian_one), this.btn_chouqian_one.onClick(this, this.onClickAll, [this.btn_chouqian_one]), this.openSubCom(this.btn_chouqian_ten), this.btn_chouqian_ten.onClick(this, this.onClickAll, [this.btn_chouqian_ten]), this.openSubCom(this.btnAnimanSelect), this.btnAnimanSelect.onClick(this, this.onClickAll, [this.btnAnimanSelect]), this.openSubCom(this.jiang_4), this.btn_dajiang_record.onClick(this, this.onClickAll, [this.btn_dajiang_record]), this.btn_yulan.onClick(this, this.onClickAll, [this.btn_yulan]), this.openSubCom(this.baoxiang_reward), this.openSubCom(this.rarePiaoZi)
      }
    };
  _UIWishActivityView.UID = "ui://i97akwpojowk1e", __decorateClass([UIProperty], _UIWishActivityView.prototype, "btnimgBg_ta", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "btn_baoxiang_awards", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "txt_tips03", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "btn_chouqian_one", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "btn_chouqian_ten", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "btnAnimanSelect", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "txtAni", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "imgSelect_kuang_4", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "jiang_4", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "list_jiangli_3", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "list_jiangli_2", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "list_jiangli_1", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "imgSelect_kuang_3", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "imgSelect_kuang_2", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "imgSelect_kuang_1", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "btn_dajiang_record", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "btn_yulan", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "baoxiang_reward", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "rarePiaoZi", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "Eff1", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "Eff2", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "Eff3", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "Eff4", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "txtJinJi", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "txt_tips01", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "txt_tips02", 2), __decorateClass([UIProperty], _UIWishActivityView.prototype, "txt_tips", 2);
  var UIWishActivityView = _UIWishActivityView,
    _UIWishJiangChiYuLanView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "WishJiangChiYuLan", this.name = "WishJiangChiYuLanView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UIWishJiangChiYuLanView.UID = "ui://jg8wwq64kffc0", __decorateClass([UIProperty], _UIWishJiangChiYuLanView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIWishJiangChiYuLanView.prototype, "list", 2), __decorateClass([UIProperty], _UIWishJiangChiYuLanView.prototype, "fixHeight", 2);
  var UIWishJiangChiYuLanView = _UIWishJiangChiYuLanView,
    import_proto458 = __toESM(require_proto()),
    _UIWishTipsView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "WishTips", this.name = "WishTipsView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnConfirm.onClick(this, this.onClickAll, [this.btnConfirm])
      }
    };
  _UIWishTipsView.UID = "ui://9jptz7crikyp0", __decorateClass([UIProperty], _UIWishTipsView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIWishTipsView.prototype, "txt_desc", 2), __decorateClass([UIProperty], _UIWishTipsView.prototype, "btnConfirm", 2), __decorateClass([UIProperty], _UIWishTipsView.prototype, "list", 2), __decorateClass([UIProperty], _UIWishTipsView.prototype, "fixHeight", 2);
  var UIWishTipsView = _UIWishTipsView,
    WishTipsView = class extends UIWishTipsView {
      constructor() {
        super(), this.num = 0, this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.ctrl = WishCtrl.inst, this.creatList(this.list, this.onItemRenderer)
      }
      onItemRenderer(t, e) {
        e.setData(ItemUtil.createDataById(this.model.cost_id, this.num))
      }
      onShow() {
        this.num = this.args[0], this.list.numItems = 1, this.txt_desc.setVar("val", this.num);
        let t = CfgitemBase.get(this.model.cost_id),
          e = ItemCtrl.inst.getQualityXmfCfg(t.quality),
          i = CfgUtil.getColor(e.color);
        i = "#d07843", this.txt_desc.setVar("val2", `[color=#d07843]${ToolUtil.chinese(t.name)}[/color]`)
      }
      onClickAll(t) {
        t == this.btnClose || this.btnConfirm, this.close()
      }
      onHide() {
        this.dispatchEvent(MsgName.Wish_Refresh_Info)
      }
    },
    _UIWishView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Wish", this.name = "WishView"
      }
      onInit() {
        this.openSubCom(this.toolBar), this.openSubCom(this.goTitle), this.openSubCom(this.gold_item)
      }
    };
  _UIWishView.UID = "ui://i97akwpojowk0", __decorateClass([UIController], _UIWishView.prototype, "c1", 2), __decorateClass([UIProperty], _UIWishView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIWishView.prototype, "img_banner01", 2), __decorateClass([UIProperty], _UIWishView.prototype, "img_banner02", 2), __decorateClass([UIProperty], _UIWishView.prototype, "tabContainer", 2), __decorateClass([UIProperty], _UIWishView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UIWishView.prototype, "goTitle", 2), __decorateClass([UIProperty], _UIWishView.prototype, "gold_item", 2), __decorateClass([UIProperty], _UIWishView.prototype, "fixHeight", 2);
  var UIWishView = _UIWishView,
    WishView = class extends UIWishView {
      constructor() {
        super(), this.curUid = null, this.endTime = -1, this.hide3DCamera = !0
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.ctrl = WishCtrl.inst, this.toolBar.setData([{
          title: ToolUtil.chinese(1768),
          redKey: 427
        }, {
          title: ToolUtil.chinese(1669),
          redKey: 429
        }, {
          title: ToolUtil.chinese(1514),
          redKey: 428
        }], (t => {
          this.clickTab(t)
        }))
      }
      clickTab(t) {
        this.c1.selectedIndex = t, 0 == t ? this.openSubTab(WishActivityView.UID) : 1 == t ? this.openSubTab(ImmortalsPrayTaskView.UID, 3) : 2 == t && this.openSubTab(RankRewardView.UID, this.model.shop)
      }
      openSubTab(t, ...e) {
        null != this.curUid && this.closeSubView(this.curUid), null == this.getSubView(t) && this.openSubView(t, this.tabContainer, null, ...e), this.curUid = t
      }
      onShow() {
        ShopCtrl.inst.ReqMoreShopInfo([this.model.shop]), this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid), this.onUpdateSec();
        let t = this.args[0] || 0;
        this.clickTab(t), this.args && this.args.length > 0 && (this.toolBar.selectIdx = this.args[0]);
        let e = this.model.cost_id;
        this.gold_item.setRes(e), this.setTexture(this.img_banner01, this.model.cfg.banner1, "Wish"), this.setTexture(this.img_banner02, this.model.cfg.banner2, "Wish"), this.model.setDayCacheRedPoint(), this.goTitle.helpId = this.model.help_id
      }
      onUpdateSec() {
        var t, e;
        this.endTime <= 0 && (this.endTime = null != (e = null == (t = this.model.limitActivityData) ? void 0 : t.endTime) ? e : 0), this.goTitle.txtTime.text = `${TimeUtil.formatDHMS(this.endTime-TimeUtil.serverSecTime,8)}`
      }
      onClickAll(t) {}
    },
    {
      regClass: regClass191,
      property: property189
    } = Laya,
    WishCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.remainNum = 0, this.awards = {
          list: [],
          uiType: import_proto458.default.packs.UiType.ESCORT_REWARD
        }, this.logVersion = 0, this.init()
      }
      static get inst() {
        return null == WishCtrl._instance && (WishCtrl._instance = new WishCtrl), WishCtrl._instance
      }
      init() {
        super.init(), this.model = WishModel.inst, ItemObserverUtil.addItemIdObserver(this.model.cost_id, this, (() => {
          this.model.updateChouQianRedPoint()
        }), !1)
      }
      registS2CHandler() {
        this.addS2CHandle("weapon_wish.RetAllWeaponWishInfo", this.RetAllWeaponWishInfo), this.addS2CHandle("weapon_wish.RetOpenWeaponWish", this.RetOpenWeaponWish), this.addS2CHandle("weapon_wish.RetGetWeaponWishTaskProgress", this.RetGetWeaponWishTaskProgress), this.addS2CHandle("weapon_wish.RetChoiceAward", this.RetChoiceAward), this.addS2CHandle("weapon_wish.RetWeaponWishLog", this.RetWeaponWishLog), this.addEvent(MsgName.Msg_Task_Refresh, (() => {
          this.model.updateRedTask()
        }), this), this.addEvent(MsgName.Shop_Server_Buy_Goods, (() => {
          this.model.updateRedShop()
        })), this.addEvent(MsgName.Shop_Server_Push_Info, (() => {
          this.model.updateRedShop()
        }), this), this.addEvent(MsgName.Shop_Server_Push_SimpleInfo, (() => {
          this.model.updateRedShop()
        }), this), this.addEvent(MsgName.Activity_Limit_Refresh, (() => {
          this.model.updateRedPoint()
        }), this), this.addEvent(MsgName.Time_Goto_Next_Day, (() => {
          this.model.setTime_Goto_Next_Day()
        }))
      }
      onJoyGetClose() {
        this.remainNum > 0 ? (UIManager.inst.open(WishTipsView.UID, null, this.remainNum), this.remainNum = 0) : this.dispatchEvent(MsgName.Wish_Refresh_Info), this.removeEvent(MsgName.Joy_Get_Close, this.onJoyGetClose, this)
      }
      RetAllWeaponWishInfo(t) {
        this.model.info = t, this.dispatchEvent(MsgName.Wish_Refresh_Info), this.model.updateRedPoint()
      }
      ReqOpenWeaponWish(t) {
        let e = {};
        e.id = t, this._netManager.send("weapon_wish.ReqOpenWeaponWish", e)
      }
      RetOpenWeaponWish(t) {
        let e = this.model.info.curCell;
        this.model.info.curCell = t.curCell, this.model.info.curRound = t.curRound, this.model.info.costNum = t.costNum, this.model.info.curRoundCostNum = t.curRoundCostNum, this.model.updateRedActivity(), this.remainNum = t.remainNum, this.awards = {
          list: [],
          uiType: import_proto458.default.packs.UiType.ESCORT_REWARD
        };
        let i = t.ids[0].id;
        for (let e = 0; e < t.ids.length; e++) {
          let i = t.ids[e];
          this.awards.list.push(ItemUtil.createDataById(i.id, i.itemNum))
        }
        this.addEvent(MsgName.Joy_Get_Close, this.onJoyGetClose, this), !UIManager.inst.isOpen(WishView.UID) || e >= 4 ? this.openJoyGetView() : this.dispatchEvent(MsgName.Wish_Play_Award_List, {
          cell: e,
          itemId: i
        })
      }
      openJoyGetView() {
        var t, e;
        this.awards && ((null == (e = null == (t = this.awards) ? void 0 : t.list) ? void 0 : e.length) || 0) > 0 && UIManager.inst.open(JoyGetView.UID, null, this.awards), this.awards = null
      }
      ReqGetWeaponWishTask() {
        this._netManager.send("weapon_wish.ReqGetWeaponWishTask", {})
      }
      RetGetWeaponWishTaskProgress(t) {
        this.model.info.awardId = t.awardId, this.dispatchEvent(MsgName.Wish_Get_Progress), this.model.updateRedActivity()
      }
      ReqChoiceAward(t) {
        let e = {};
        e.id = t, this._netManager.send("weapon_wish.ReqChoiceAward", e)
      }
      RetChoiceAward(t) {
        this.model.info.choiceAward = t.id, this.dispatchEvent(MsgName.Wish_Choice_Award), t.id > 0 && UIManager.inst.openMsg(ToolUtil.chinese(11449))
      }
      ReqWeaponWishLog() {
        let t = {};
        t.version = this.logVersion, this._netManager.send("weapon_wish.ReqWeaponWishLog", t)
      }
      RetWeaponWishLog(t) {
        t.version != this.logVersion && (this.log = t, this.logVersion = t.version), UIManager.inst.open(TurntableRewardRcordView.UID, null, 3, this.log)
      }
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
    };
  WishCtrl._instance = null, WishCtrl = __decorateClass([regClass191("h4oQ1VNuT1alOFdJhH5WPA")], WishCtrl);
  var WishJiangChiYuLanView = class extends UIWishJiangChiYuLanView {
