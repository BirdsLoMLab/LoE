// Fragment: economy_onInit_L190672.js
// Lines: 190672-190848 of bundle-beautified.js
// Categories: Economy, Gacha/Draw
// Keywords: draw, gold
// Hit lines: 190676, 190717, 190720, 190748

      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.CardDuiHuan1), this.openSubCom(this.gold_item01), this.openSubCom(this.gold_item02), this.openSubCom(this.CardDuiHuan2)
      }
    };
  _UITreasureDrawCardView.UID = "ui://lm17ooqgr1be0", __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "txt1", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "img_bg", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "imgIcon", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "txtNumber", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "txtName", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "txtTimes", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "CardDuiHuan1", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "gold_item01", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "gold_item02", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "gold", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "CardDuiHuan2", 2), __decorateClass([UIProperty], _UITreasureDrawCardView.prototype, "fixHeight", 2);
  var UITreasureDrawCardView = _UITreasureDrawCardView,
    TreasureDrawCardView = class extends UITreasureDrawCardView {
      constructor() {
        super(), this.maskType = 1, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit()
      }
      onEvent() {
        this.addEvent(MsgName.Treature_Event, this.doShow)
      }
      onShow() {
        this.doShow()
      }
      doShow() {
        let t = TreasureCtrl.inst,
          e = t.ResCfg;
        this.txt1.text = `${ToolUtil.chinese(2527)}${ToolUtil.chinese(e.name)}`, this.txtName.text = `${ToolUtil.chinese(2528)}${ToolUtil.chinese(e.name)}：`, this.setTexture(this.imgIcon, e.icon, t.ResPkg);
        let i = ItemCtrl.inst.getItemNum(t.resid),
          s = TreasureCtrl.inst.getMaxVoucher();
        this.txtNumber.text = `${i}/${s}`;
        let o = t.xmlCfg.map[0].exchange_info,
          n = o[0];
        this.CardDuiHuan1.setData(n), this.gold_item01.setRes(Number(n.item_id));
        let r = t.xmlCfg.map[1].exchange_price;
        n = o[1], this.CardDuiHuan2.setData(n, r), this.gold_item02.setRes(Number(n.item_id)), this.onUpdateSec()
      }
      onUpdateSec() {
        let t = TreasureCtrl.inst.getTime();
        t < 0 && (t = TreasureCtrl.inst.xmlCfg.cd_time), this.txtTimes.text = TimeUtil.formatSeconds2(t)
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
    },
    _UITreasureExplorePoolView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "TreasureExplore", this.name = "TreasureExplorePoolView"
      }
      onInit() {
        this.openSubCom(this.Gold), this.btnTreasureExploreTip.onClick(this, this.onClickAll, [this.btnTreasureExploreTip]), this.openSubCom(this.btnAnimanSelect), this.btnAnimanSelect.onClick(this, this.onClickAll, [this.btnAnimanSelect]), this.openSubCom(this.btnOnce), this.btnOnce.onClick(this, this.onClickAll, [this.btnOnce]), this.openSubCom(this.btnTen), this.btnTen.onClick(this, this.onClickAll, [this.btnTen]), this.openSubCom(this.btnTreasureExploreSelect), this.btnTreasureExploreSelect.onClick(this, this.onClickAll, [this.btnTreasureExploreSelect]), this.openSubCom(this.btnHundredSelect), this.btnHundredSelect.onClick(this, this.onClickAll, [this.btnHundredSelect]), this.openSubCom(this.btnHundred), this.btnHundred.onClick(this, this.onClickAll, [this.btnHundred]), this.openSubCom(this.lder), this.openSubCom(this.goldItem), this.openSubCom(this.goldItem_02), this.openSubCom(this.lder0), this.openSubCom(this.lder1), this.openSubCom(this.lder2), this.openSubCom(this.lder3), this.openSubCom(this.lder4), this.openSubCom(this.lder5), this.openSubCom(this.lder6), this.openSubCom(this.lder7), this.openSubCom(this.lder9), this.openSubCom(this.lder8), this.btnTreasureExploreGaiLv.onClick(this, this.onClickAll, [this.btnTreasureExploreGaiLv]), this.btnTreasureExploreVedio.addClick(this, this.onClickAll, [this.btnTreasureExploreVedio]), this.openSubCom(this.btnTreasureExploreVedio)
      }
    };
  _UITreasureExplorePoolView.UID = "ui://5yze5rm0j7hd14", __decorateClass([UIController], _UITreasureExplorePoolView.prototype, "c1", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "ldBgMini", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "ldBg", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "txt1", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "imgMap", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "Gold", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnTreasureExploreTip", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "ListMapSelect", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnAnimanSelect", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "txtFree", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "ttSkipAdLayer", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnOnce", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnTen", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "txtAni", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnTreasureExploreSelect", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "txtChouqu", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnHundredSelect", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnHundred", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "TreasureExploreNumInfo", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "goldItem", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "goldItem_02", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder0", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder1", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder2", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder3", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder4", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder5", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder6", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder7", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder9", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "lder8", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "conTen", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnTreasureExploreGaiLv", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "btnTreasureExploreVedio", 2), __decorateClass([UIProperty], _UITreasureExplorePoolView.prototype, "fixHeight", 2);
  var UITreasureExplorePoolView = _UITreasureExplorePoolView,
    _UITreasureOutPutView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "TreasureOutPut", this.name = "TreasureOutPutView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp])
      }
    };
  _UITreasureOutPutView.UID = "ui://53hzjst3r1be0", __decorateClass([UIProperty], _UITreasureOutPutView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UITreasureOutPutView.prototype, "listFaBao", 2), __decorateClass([UIProperty], _UITreasureOutPutView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UITreasureOutPutView.prototype, "fixHeight", 2);
  var UITreasureOutPutView = _UITreasureOutPutView,
    TreasureOutPutView = class extends UITreasureOutPutView {
      constructor() {
        super(), this.maskType = 1, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit(), this.creatList(this.listFaBao, this.renderList, null, null, !1)
      }
      onShow() {
        this.list = [], TreasureCtrl.inst.allNowItem = [];
        let t = TreasureExplorePoolView.ins.selid;
        TreasureCtrl.inst.colArr.forEach((e => {
          let i = TreasureCtrl.inst.getShowByPool(e, t);
          i.length > 0 && (this.list.push(e), TreasureCtrl.inst.allNowItem = TreasureCtrl.inst.allNowItem.concat(i))
        })), SkillCtrl.allPercent = 0;
        for (let e = 0; e < this.list.length; e++) {
          const i = TreasureCtrl.inst.getShowByPool(this.list[e], t);
          for (let t = 0; t < i.length; t++) SkillCtrl.allPercent += i[t].draw.rate
        }
        let e = TreasureCtrl.inst.getPool(t),
          i = Cfgtreasure_draw.get();
        for (let s = 0; s < e.cfg.prob2.length; s++) {
          const o = e.cfg.prob2[s][0];
          for (let e = 0; e < i.length; e++) {
            let s = i[e];
            s.item_id == o && s.pool_id == t && (SkillCtrl.allPercent += s.rate)
          }
        }
        SkillCtrl.allPercent /= 100, this.listFaBao.numItems = this.list.length + 1
      }
      renderList(t = 0, e) {
        e.setData(this.list[t], t)
      }
      onClickAll(t) {
        t == this.btnClose ? this.close() : t == this.btnHelp && UIManager.inst.openHelp(209)
      }
    },
    _TreasureExplorePoolView = class t extends UITreasureExplorePoolView {
      constructor() {
        super(), this.selid = 1, this.conArr = [], this._effMap = new Map, this.preBg = "", this.jumpidx = 0, this.scoll = !0, this._effIdx = 0, this._efftime = 0, this._effItemTime = 200, this._effGetViewTime = -700, this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), t.ins = this, this.setTexture(this.ldBg, "fb_img_tyjmdi", "TreasureExplore", "jpg", (() => {
          this.ldBgMini.visible = !1
        })), this.creatList(this.ListMapSelect, this.onItemRender, null, this.clickItem, !1);
        for (let t = 0; t < 10; t++) this.conArr.push(this.getChildByPath("lder" + t).asCom);
        this.btnOnce.setClickCDTime(1e3), this.btnTen.setClickCDTime(1e3), this.btnHundred.setClickCDTime(1e3)
      }
      showEff() {
        let t = TreasureCtrl.inst.showItems;
        if (1 == t.length) this.c1.selectedIndex = 1, this.addEff(t[0], this.lder);
        else if (10 == t.length) {
          this.c1.selectedIndex = 2;
          for (let e = 0; e < t.length; e++) this.addEff(t[e], this.conArr[e])
        } else this.c1.selectedIndex = 0
      }
      addEff(t, e) {
        let i = this.addSubChild(t.effRes, e);
        this._effMap.set(e, i), 4 == t.quality ? MusicCtrl.inst.PlaySound(1042) : 5 == t.quality && MusicCtrl.inst.PlaySound(1043)
      }
      onItemRender(t, e) {
        let i = e,
          s = this.listArr[t],
          o = s.id == this.selid;
        i.setData(s, o), o && (this.jumpidx = t, this.choosePool = s, this.btnHundred.setItem(TreasureCtrl.inst.resid, 100), this.btnTen.setItem(TreasureCtrl.inst.resid, s.cfg.cost_2[0][1]), this.btnOnce.setItem(TreasureCtrl.inst.resid, s.cfg.cost1[0][1]), this.preBg != s.cfg.big && (this.setTexture(this.imgMap, s.cfg.big, "TreasureExplore"), this.preBg = s.cfg.big, this.txt1.text = ToolUtil.chinese(s.cfg.name)))
      }
      clickItem(t, e) {
        this.selid = this.listArr[t].id, this.doShow()
      }
      onEvent() {
        this.addEvent(MsgName.Treature_Event, this.doShow), this.addEvent(MsgName.Treature_Skip, this.TreatureSkip)
      }
      TreatureSkip() {
        const t = LocalCache.getItem("trsjump");
        TreasureCtrl.jumpFlag = this.btnTreasureExploreSelect.selected = "1" == t
      }
      onShow() {
        this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid), this.args.length > 0 && (this.selid = Number(this.args[0])), this.Gold.setRes(1, TreasureCtrl.inst.resid, !1, TreasureCtrl.inst.getMaxVoucher()), this.goldItem_02.setRes(TreasureCtrl.inst.resid, !1, TreasureCtrl.inst.getMaxVoucher()), this.goldItem_02.setFun((() => {
          UIManager.inst.open(TreasureDrawCardView.UID)
        })), this.goldItem.setRes(66);
        const t = LocalCache.getItem("trsjump");
        TreasureCtrl.jumpFlag = this.btnTreasureExploreSelect.selected = "1" == t, this.doShow(), this.ttSkipAdLayer.visible = FnsdkMgr.inst.showTtPaySkipAd()
      }
      doShow() {
        this.listArr = TreasureCtrl.inst.getPoolList(), this.ListMapSelect.numItems = this.listArr.length, this.scoll && (this.scoll = !1, this.ListMapSelect.scrollToView(this.jumpidx));
        let t = TreasureCtrl.inst.info.advCount,
          e = TreasureCtrl.inst.xmlCfg.adv_count;
        this.btnTreasureExploreVedio.SetData(t, e), TreasureCtrl.inst.adFlag = !0, TreasureCtrl.inst.redpointUpdate()
      }
      onClickAll(t) {
        TreasureCtrl.inst.poolBtnStop || (t == this.btnTreasureExploreTip ? UIManager.inst.openHelp(35) : t == this.btnTreasureExploreGaiLv ? UIManager.inst.open(TreasureOutPutView.UID) : t == this.btnTreasureExploreVedio ? this.btnAnimanSelect.selected ? this.onttPaySkipAd() : FnsdkMgr.inst.showAd(2, Laya.Handler.create(this, (t => {
          t && TreasureCtrl.inst.ReqTreasureDrawAdv(this.selid)
        }))) : t == this.btnOnce ? this.btnOnce.isEnough ? this.checkTanBaoOpen(1) : ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(TreasureCtrl.inst.resid)) : t == this.btnTen ? this.btnTen.isEnough ? this.checkTanBaoOpen(10) : ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(TreasureCtrl.inst.resid)) : t == this.btnTreasureExploreSelect ? (TreasureCtrl.jumpFlag = this.btnTreasureExploreSelect.selected, LocalCache.setItem("trsjump", this.btnTreasureExploreSelect.selected ? "1" : "0")) : t == this.btnAnimanSelect ? (this.btnTreasureExploreVedio.c1.selectedIndex = this.btnAnimanSelect.selected ? 1 : 0, this.btnTreasureExploreVedio.txtNum.text = "3") : t == this.btnHundredSelect ? (this.btnHundred.visible = this.btnHundredSelect.selected, this.btnTen.visible = !this.btnHundredSelect.selected) : t == this.btnHundred && (this.btnHundred.isEnough ? this.checkTanBaoOpen(100) : ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(TreasureCtrl.inst.resid))))
      }
      onttPaySkipAd() {
        let t = 0;
        switch (this.selid) {
          case 1:
            t = 310316;
            break;
          case 2:
            t = 310317;
            break;
          case 3:
            t = 310318;
            break;
          case 4:
            t = 310319;
            break;
          case 5:
            t = 310320
        }
        FnsdkMgr.inst.ttPaySkipAd(t)
      }
      checkTanBaoOpen(t) {
        let e = ActivityCtrl.inst.getActivityIsOpenById(1203),
          i = ActivityCtrl.inst.getActivityIsOpenById(1204);
        e && 2 != this.selid || i && 3 != this.selid ? this.openComfirmView(t) : ActivityModel.inst.isLimitRankOpen(1, (() => {
