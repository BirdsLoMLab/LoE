// Fragment: gacha_draw_s_L382119.js
// Lines: 382119-382220 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: draw
// Hit lines: 382120

        let s = "#69b9ff";
        5 == t.cfg.quality ? s = "#ed9c28" : 4 == t.cfg.quality ? s = "#f178ff" : 6 == t.cfg.quality && (s = "#ff7474"), this.txtName.color = s, this.setImage(this.imgBg, "fb_img_pinzhi_" + t.cfg.quality, "Treasure"), this.setTexture(this.imgIcon, t.cfg.icon, "Treasure"), this.c1.selectedIndex = t.has ? 0 : 1, t.data ? (this.listStar.numItems = TreasureCtrl.inst.starMax, this.txtLevel.text = `${ToolUtil.chinese(2082)}${t.data.level}`) : (this.BarTreasureDetails.max = t.cfg.num, this.BarTreasureDetails.value = t.Piece), this.listStar.visible = 1 != e, TreasureCtrl.inst.showTag(this.xian, t.cfg), this.updateNew(), this.txtHeroName.text = `${(t.draw.rate/SkillCtrl.allPercent).toFixed(2)}%`
      }
      updateNew() {
        let t = TreasureCtrl.inst.getNewList();
        this.goNew.visible = t.includes(this.data.id)
      }
      onClickAll(t) {
        t == this.btn && (this.list && (TreasureCtrl.inst.allNowItem = this.list), UIManager.inst.open(TreasureDetailsView.UID, null, this.data), TreasureCtrl.inst.deleteNew(this.data.id), this.updateNew())
      }
    },
    UITreasureCodexGoods = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Treasure"
      }
      onConstruct() {
        this.openSubCom(this.rp_make), this.openSubCom(this.rp_lv), this.btn.onClick(this, this.onClickAll, [this.btn]), this.openSubCom(this.rp_star), this.onInit(), this.onEvent()
      }
    };
  UITreasureCodexGoods.UID = "ui://ayqw9aysxckm7", __decorateClass([UIController], UITreasureCodexGoods.prototype, "c1", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "imgBg", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "imgIcon", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "listStar", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "BarTreasureDetails", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "rp_make", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "txtLevel", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "Level", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "txtName", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "rp_lv", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "btn", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "rp_star", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "xian", 2), __decorateClass([UIProperty], UITreasureCodexGoods.prototype, "goNew", 2);
  var TreasureCodexGoods = class extends UITreasureCodexGoods {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.creatList(this.listStar, this.renderList)
      }
      onShow() {}
      renderList(t = 0, e) {
        e.imgIcon.visible = t < this.data.data.star, e.setQ(this.data.cfg.quality, this.data.data.star)
      }
      setData(t, e = 0, i = null) {
        this.list = i, this.data = t, this.unbindAllRedPoint(), 0 == e ? (this.bindRedPoint(this.rp_lv, 351, t.id), this.bindRedPoint(this.rp_star, 350, t.id), this.bindRedPoint(this.rp_make, 349, t.id)) : (this.rp_lv.visible = !1, this.rp_star.visible = !1, this.rp_make.visible = !1), this.txtName.text = ToolUtil.chinese(t.cfg.name);
        let s = "#69b9ff";
        5 == t.cfg.quality ? s = "#ed9c28" : 4 == t.cfg.quality ? s = "#f178ff" : 6 == t.cfg.quality && (s = "#ff7474"), this.txtName.color = s, this.setImage(this.imgBg, "fb_img_pinzhi_" + t.cfg.quality, "Treasure"), this.setTexture(this.imgIcon, t.cfg.icon, "Treasure"), this.c1.selectedIndex = t.has ? 0 : 1, t.data ? (this.listStar.numItems = TreasureCtrl.inst.starMax, this.txtLevel.text = `${ToolUtil.chinese(2082)}${t.data.level}`) : (this.BarTreasureDetails.max = t.cfg.num, this.BarTreasureDetails.value = t.Piece), this.listStar.visible = 1 != e, TreasureCtrl.inst.showTag(this.xian, t.cfg), this.updateNew()
      }
      updateNew() {
        let t = TreasureCtrl.inst.getNewList();
        this.goNew.visible = t.includes(this.data.id)
      }
      onClickAll(t) {
        t == this.btn && (this.list && (TreasureCtrl.inst.allNowItem = this.list), UIManager.inst.open(TreasureDetailsView.UID, null, this.data), TreasureCtrl.inst.deleteNew(this.data.id), this.updateNew())
      }
    },
    UITreasureCodexList = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Treasure"
      }
      onConstruct() {
        this.btnJianTou.onClick(this, this.onClickAll, [this.btnJianTou]), this.onInit(), this.onEvent()
      }
    };
  UITreasureCodexList.UID = "ui://ayqw9aysxckmh", __decorateClass([UIController], UITreasureCodexList.prototype, "c1", 2), __decorateClass([UIController], UITreasureCodexList.prototype, "c2", 2), __decorateClass([UIProperty], UITreasureCodexList.prototype, "listChuanShuo", 2), __decorateClass([UIProperty], UITreasureCodexList.prototype, "t1", 2), __decorateClass([UIProperty], UITreasureCodexList.prototype, "btnJianTou", 2);
  var TreasureCodexList = class extends UITreasureCodexList {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.creatList(this.listChuanShuo, this.renderList, null, null, !1)
      }
      renderList(t = 0, e) {
        e.setData(this.list[t])
      }
      setData(t, e, i = null, s = -1, o = -1) {
        this.index = e;
        let n = TreasureView.ins.selpoolid;
        if (i) this.list = i;
        else {
          let e = TreasureView.ins.btnSelect3.selected,
            i = TreasureView.ins.btnSelect1.selected;
          this.list = TreasureCtrl.inst.getListByPool(t, n, -1, e, i, o)
        }
        let r = 0;
        if (this.list.forEach((e => {
            e.has && r++, t = e.cfg.quality
          })), s > -1 && (null == o || -1 == o)) this.t1.text = StringUtil.format(ToolUtil.chinese(3914), s, r, this.list.length), this.c1.selectedIndex = 0;
        else {
          let e = TreasureCtrl.inst.getColTitle(t),
            i = TreasureCtrl.inst.getListByPool(t, n),
            s = i.length;
          o > -1 ? (e = CfgUtil.getAttributeName(o), this.c1.selectedIndex = 0, i = TreasureCtrl.inst.getListByPool(t, n, -1, !1, !1, o), s = i.length) : this.c1.selectedIndex = null != t ? t : 0, this.t1.text = `${e} (${r}/${s})`
        }
        this.updateListHeight()
      }
      updateListHeight() {
        -1 == TreasureView.ins.retractList.indexOf(this.index) ? (this.listChuanShuo.numItems = this.list.length, this.c2.selectedIndex = 1) : (this.listChuanShuo.numItems = 0, this.c2.selectedIndex = 0), this.listChuanShuo.resizeToFit()
      }
      onClickAll(t) {
        t == this.btnJianTou && (-1 == TreasureView.ins.retractList.indexOf(this.index) ? TreasureView.ins.retractList.push(this.index) : TreasureView.ins.retractList.splice(TreasureView.ins.retractList.indexOf(this.index), 1), TreasureView.ins.listMiBaoCodex.refreshVirtualList())
      }
      onShow() {}
    },
    UITreasureCodexStatsItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Treasure"
      }
      onConstruct() {
        this.btnLiBao.onClick(this, this.onClickAll, [this.btnLiBao]), this.openSubCom(this.RedPoint), this.onInit(), this.onEvent()
      }
    };
  UITreasureCodexStatsItem.UID = "ui://ayqw9aysmv1f18", __decorateClass([UIController], UITreasureCodexStatsItem.prototype, "c1", 2), __decorateClass([UIProperty], UITreasureCodexStatsItem.prototype, "txtTitle", 2), __decorateClass([UIProperty], UITreasureCodexStatsItem.prototype, "listFaBao", 2), __decorateClass([UIProperty], UITreasureCodexStatsItem.prototype, "listAtt", 2), __decorateClass([UIProperty], UITreasureCodexStatsItem.prototype, "btnLiBao", 2), __decorateClass([UIProperty], UITreasureCodexStatsItem.prototype, "RedPoint", 2), __decorateClass([UIProperty], UITreasureCodexStatsItem.prototype, "txtStats", 2);
  var _UITreasureRewardView = class t extends BaseView {
