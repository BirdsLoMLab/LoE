// Fragment: gacha_draw_t_L329690.js
// Lines: 329690-329794 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: wish
// Hit lines: 329694

        var t;
        return null == (t = this.limitActivityData) ? void 0 : t.iscross
      }
      get xmlCfg() {
        return null == this._xmlCfg && (this._xmlCfg = ConfigManager.inst.GetXmlConfig("wish")), this._xmlCfg
      }
      get help_id() {
        return Cfgactivity_data.get(this.limitActivityData.id).helpid
      }
      get cost_id() {
        return Number(this.xmlCfg.cost_id)
      }
    };
  _WishModel._instance = null;
  var WishModel = _WishModel,
    ImmortalsPrayTaskView = class extends UIImmortalsPrayTaskView {
      constructor() {
        super(), this.type = 2, this._sec = 0
      }
      onInit() {
        super.onInit(), this.creatList(this.list_task, this.render, null, this.itemClick), this.addEvent(MsgName.Msg_Task_Refresh, this.onShow)
      }
      render(t = 0, e) {
        let i = this.arrTask[t];
        e.setData(i, this.type)
      }
      itemClick(t = 0, e) {}
      onShow() {
        this.args && this.args.length > 0 && (this.type = this.args[0]), 3 == this.type ? this.arrTask = WishModel.inst.getTaskData(!1, import_proto373.default.quest.QuestType.QUEST_TYPE_WEAPONWISH) : this.arrTask = TurntableCtrl.inst.getTaskData(!1, import_proto373.default.quest.QuestType.QUEST_TYPE_LUCKY_BAG), this.list_task.numItems = this.arrTask.length, this.onUpdate(0)
      }
      onUpdate(t) {
        if (this._sec -= t, this._sec > 0) return;
        this._sec = 1e3;
        let e = ArenaModel.inst.getDailyLeftTime(),
          i = TimeUtil.formatDHMS(e, 3);
        this.txt_times.text = StringUtil.format(ToolUtil.chinese(1770), i)
      }
      onClickAll(t) {}
    },
    ImmortalsPrayComView = class extends UIImmortalsPrayComView {
      constructor() {
        super(), this.curUid = null, this.endTime = -1, this.hide3DCamera = !0
      }
      onInit() {
        super.onInit(), this.setTexture(this.img_banner01, ImmortalsPrayCtrl.inst.banner1Name, "ImmortalsPray"), this.setTexture(this.img_banner02, ImmortalsPrayCtrl.inst.banner2Name, "ImmortalsPray"), this.setTexture(this.imgBg, "sbqy_img_bg", "ImmortalsPray", "jpg"), this.toolBar.setData([{
          title: ToolUtil.chinese(1768),
          redKey: 422
        }, {
          title: ToolUtil.chinese(1669),
          redKey: 424
        }, {
          title: ToolUtil.chinese(1514),
          redKey: 423
        }], (t => {
          this.clickTab(t)
        })), this.goTitle.helpId = 56
      }
      openSubTab(t, ...e) {
        null != this.curUid && this.closeSubView(this.curUid), null == this.getSubView(t) && this.openSubView(t, this.tabContainer, null, ...e), this.curUid = t
      }
      clickTab(t) {
        this.c1.selectedIndex = t, 0 == t ? this.openSubTab(ImmortalsPrayView.UID) : 1 == t ? this.openSubTab(ImmortalsPrayTaskView.UID) : 2 == t && this.openSubTab(RankRewardView.UID, ImmortalsPrayCtrl.inst.shopid)
      }
      onShow() {
        ShopCtrl.inst.ReqMoreShopInfo([ImmortalsPrayCtrl.inst.shopid]), this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid), this.onUpdateSec(), this.args && this.args.length > 0 && (this.toolBar.selectIdx = this.args[0])
      }
      onUpdateSec() {
        var t;
        if (this.endTime <= 0) {
          let e = ActivityCtrl.inst.getActivityDataById(ImmortalsPrayCtrl.inst.actid);
          this.endTime = null != (t = null == e ? void 0 : e.endTime) ? t : 0
        }
        this.goTitle.txtTime.text = `${TimeUtil.formatDHMS(this.endTime-TimeUtil.serverSecTime,8)}`
      }
      onClickAll(t) {}
    },
    _UIImmortalsPrayLiBaoView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "ImmortalsPrayLiBao", this.name = "ImmortalsPrayLiBaoView"
      }
      onInit() {}
    };
  _UIImmortalsPrayLiBaoView.UID = "ui://ocphk0zhlyfi0", __decorateClass([UIProperty], _UIImmortalsPrayLiBaoView.prototype, "list_libao", 2), __decorateClass([UIProperty], _UIImmortalsPrayLiBaoView.prototype, "fixHeight", 2);
  var UIImmortalsPrayLiBaoView = _UIImmortalsPrayLiBaoView,
    ImmortalsPrayLiBaoView = class extends UIImmortalsPrayLiBaoView {
      constructor() {
        super(), this.goodsDatas = []
      }
      onInit() {
        super.onInit(), this.addEvent(MsgName.Msg_Task_Refresh, this.doShow), this.addEvent(MsgName.Shop_Server_Buy_Goods, this.doShow), this.addEvent(MsgName.Shop_Server_Push_Info, this.doShow), this.creatList(this.list_libao, this.render2)
      }
      render2(t = 0, e) {
        e.setData(this.goodsDatas[t])
      }
      onShow() {
        this.doShow()
      }
      doShow() {
        this.goodsDatas.length = 0;
        let t = ShopModel.inst.getGoodsListByShopId(ImmortalsPrayCtrl.inst.shopid);
        for (let e = 0; e < t.length; e++) {
          t[e].goodsData.forEach(((t, e, i) => {
            this.goodsDatas.push(t)
          }))
        }
