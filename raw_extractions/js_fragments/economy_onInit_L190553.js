// Fragment: economy_onInit_L190553.js
// Lines: 190553-190657 of bundle-beautified.js
// Categories: Economy
// Keywords: gold
// Hit lines: 190554, 190557

      onInit() {
        this.openSubCom(this.TreasureExploreMaps), this.openSubCom(this.Gold), this.openSubCom(this.goTitle), this.btnTreasure.onClick(this, this.onClickAll, [this.btnTreasure])
      }
    };
  _UITreasureExploreView.UID = "ui://5yze5rm0jjp40", __decorateClass([UIProperty], _UITreasureExploreView.prototype, "ldBgMini", 2), __decorateClass([UIProperty], _UITreasureExploreView.prototype, "ldBg", 2), __decorateClass([UIProperty], _UITreasureExploreView.prototype, "TreasureExploreMaps", 2), __decorateClass([UIProperty], _UITreasureExploreView.prototype, "Gold", 2), __decorateClass([UIProperty], _UITreasureExploreView.prototype, "goTitle", 2), __decorateClass([UIProperty], _UITreasureExploreView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UITreasureExploreView.prototype, "btnTreasure", 2);
  var UITreasureExploreView = _UITreasureExploreView,
    import_proto134 = __toESM(require_proto()),
    _UITreasureView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Treasure", this.name = "TreasureView"
      }
      onInit() {
        this.btnldBg1.onClick(this, this.onClickAll, [this.btnldBg1]), this.openSubCom(this.goTitle0), this.openSubCom(this.goTitle1), this.openSubCom(this.toolBar), this.btnXunBao.onClick(this, this.onClickAll, [this.btnXunBao]), this.btnFaBaoJiaCheng.onClick(this, this.onClickAll, [this.btnFaBaoJiaCheng]), this.openSubCom(this.rp1), this.btnSelect1.onClick(this, this.onClickAll, [this.btnSelect1]), this.btnSelect2.onClick(this, this.onClickAll, [this.btnSelect2]), this.btnSelect3.onClick(this, this.onClickAll, [this.btnSelect3]), this.openSubCom(this.rp_upstar), this.openSubCom(this.dropDown), this.btn_suipian.onClick(this, this.onClickAll, [this.btn_suipian]), this.btnOneKeyUpStar.onClick(this, this.onClickAll, [this.btnOneKeyUpStar])
      }
    };
  _UITreasureView.UID = "ui://ayqw9aysxckm0", __decorateClass([UIController], _UITreasureView.prototype, "c1", 2), __decorateClass([UIController], _UITreasureView.prototype, "c2", 2), __decorateClass([UIController], _UITreasureView.prototype, "c3", 2), __decorateClass([UIController], _UITreasureView.prototype, "c4", 2), __decorateClass([UIController], _UITreasureView.prototype, "button", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "ldBg_mini", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "btnldBg1", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "goTitle0", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "goTitle1", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "btnXunBao", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "btnFaBaoJiaCheng", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "rp1", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "listMiBaoCodex", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "listMiBaoStats", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "ListMapSelect", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "btnSelect1", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "btnSelect2", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "btnSelect3", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "rp_upstar", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "dropDown", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "txtFull", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "goFull", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "btn_suipian", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "List_select", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "btnOneKeyUpStar", 2), __decorateClass([UIProperty], _UITreasureView.prototype, "fixHeight", 2);
  var UITreasureView = _UITreasureView,
    _TreasureView = class t extends UITreasureView {
      constructor() {
        super(), this.lvMax = 10, this.attrArr = [], this.selpoolid = 0, this.retractList = [], this.sortArr = [ToolUtil.chinese(2512), ToolUtil.chinese(1986), ToolUtil.chinese(2508)], this.hide3DCamera = !0
      }
      onInit() {
        t.ins = this, super.onInit(), this.creatList(this.List_select, this.renderMap, null, this.clickItem), this.creatList(this.listMiBaoCodex, this.renderList), this.creatList(this.listMiBaoStats, this.renderSuit), this.setTexture(this.btnldBg1, "fb_bg_bj", "TreasureCodex", "jpg", (() => {
          this.ldBg_mini.visible = !1
        })), this.toolBar.setData([{
          title: ToolUtil.chinese(2510),
          redKey: 347
        }, {
          title: ToolUtil.chinese(2511),
          redKey: 352
        }], (t => {
          this.setClickTab(t)
        })), this.bindAndCreateRedPoint(this.btn_suipian, 355), this.btnSelect1.mode = fgui.ButtonMode.Radio, this.btnSelect2.mode = fgui.ButtonMode.Radio, this.btnSelect3.mode = fgui.ButtonMode.Radio, RedPointMgr.inst.setActive(357, !1), this.creatList(this.dropDown.list, this.onDropRender, null, this.onDropClicked, !1), this.goTitle0.helpId = this.goTitle1.helpId = 34
      }
      refreshDrop() {
        this.dropDown.title.text = this.sortArr[t.sortType], this.dropDown.list.numItems = this.sortArr.length, this.dropDown.list.resizeToFit(this.sortArr.length), this.dropDown.setDropOpen(!1)
      }
      onDropRender(e, i) {
        i.title.text = this.sortArr[e], i.stage.selectedIndex = t.sortType == e ? 2 : 1
      }
      onDropClicked(e, i) {
        t.sortType != e && 0 != i.stage.selectedIndex && (t.sortType = e, this.refreshDrop(), this.doShow()), this.dropDown.isOpen.selectedIndex = 0
      }
      clickItem(t, e) {
        this.selpoolid = this.listArr[t].id, this.doShow()
      }
      renderList(e = 0, i) {
        if (this.lvList) {
          let s = this.lvList[e];
          i.setData(0, e, s, 0 == t.sortType ? -1 : s[0].level, 1 == t.sortType ? this.attrArr[e] : -1)
        } else {
          let t = this.list[e];
          i.setData(t, e)
        }
      }
      renderMap(t = 0, e) {
        let i = this.listArr[t],
          s = this.selpoolid == i.id;
        e.setData(i, s, this.toolBar.selectIdx, !0)
      }
      renderSuit(t = 0, e) {
        let i = this.suitArr[t];
        e.setData(i)
      }
      onEvent() {
        this.addEvent(MsgName.Treature_Event, this.doShow)
      }
      onShow() {
        this.dispatchEvent(MsgName.Main_Menu_Open_Button, this.uid), RedPointMgr.inst.getActive(358) ? this.c3.selectedIndex = 1 : this.c3.selectedIndex = 0, this.doShow(), this.refreshDrop()
      }
      setClickTab(t = 0) {
        this.c1.selectedIndex = t, this.doShow()
      }
      doShow() {
        var e;
        if (this.listArr = TreasureCtrl.inst.getPoolList(this.c1.selectedIndex), 0 == this.selpoolid && (this.selpoolid = this.listArr[0].id), this.btnOneKeyUpStar.visible = !1, this.List_select.numItems = this.listArr.length, 1 == this.c1.selectedIndex) this.suitArr = TreasureCtrl.inst.getSuitList(this.selpoolid), this.listMiBaoStats.numItems = this.suitArr.length, this.c2.selectedIndex = 0 == this.listMiBaoStats.numItems ? 1 : 0;
        else {
          let i = [];
          this.retractList = [], this.lvList = null, 0 == t.sortType ? (this.lvList = TreasureCtrl.inst.getAllListByQuality(this.selpoolid, this.btnSelect3.selected, this.btnSelect1.selected), this.listMiBaoCodex.numItems = this.lvList.length, i = TreasureCtrl.inst.getAllListByQuality(this.selpoolid, !0)) : 1 == t.sortType ? (this.attrArr.length = 0, this.lvList = TreasureCtrl.inst.getAllListByAttr(this.selpoolid, this.btnSelect3.selected, this.btnSelect1.selected, this.attrArr), this.listMiBaoCodex.numItems = this.lvList.length, i = TreasureCtrl.inst.getAllListByAttr(this.selpoolid, !0)) : 2 == t.sortType && (this.lvList = TreasureCtrl.inst.getAllListByLv(this.selpoolid, this.btnSelect3.selected, this.btnSelect1.selected), this.listMiBaoCodex.numItems = this.lvList.length, i = TreasureCtrl.inst.getAllListByLv(this.selpoolid, !0)), this.c2.selectedIndex = 0 == this.listMiBaoCodex.numItems ? 1 : 0;
          let s = 0,
            o = TreasureCtrl.inst.getListByPool(0, this.selpoolid, -1, this.btnSelect3.selected, this.btnSelect1.selected);
          for (const t of o) t.has && s++;
          if ((null == (e = this.lvList) ? void 0 : e.length) > 0) {
            let t = [];
            for (let e = 0; e < this.lvList.length; e++) {
              let i = this.lvList[e];
              i.sort(((t, e) => t.cfg.sort - e.cfg.sort)), t = t.concat(i)
            }
            TreasureCtrl.inst.allNowItem = t
          } else TreasureCtrl.inst.allNowItem = o;
          this.rp_upstar.setDotVisible(i.length > 0), this.btnOneKeyUpStar.visible = this.btnSelect3.selected && this.checkOneKey(i)
        }
      }
      checkOneKey(t) {
        let e = 0;
        return t.forEach((t => {
          t.forEach((t => {
            e += t.canOneUpStarTimes()
          }))
        })), e >= ToolUtil.number(44)
      }
      onClickAll(t) {
        t == this.btnXunBao ? UIManager.inst.open(TreasureExploreView.UID) : t == this.btnFaBaoJiaCheng ? UIManager.inst.open(CharacterAttrDetailView.UID, null, {
          isLocal: !0,
          attrType: import_proto134.default.misc.SystemAttributeType.TREASURE,
