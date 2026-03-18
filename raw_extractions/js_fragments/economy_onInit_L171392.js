// Fragment: economy_onInit_L171392.js
// Lines: 171392-171566 of bundle-beautified.js
// Categories: Economy
// Keywords: gold
// Hit lines: 171393, 171396, 171466

      onInit() {
        this.openSubCom(this.Gold), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnOnce), this.btnOnce.onClick(this, this.onClickAll, [this.btnOnce]), this.openSubCom(this.btnTen), this.btnTen.onClick(this, this.onClickAll, [this.btnTen]), this.openSubCom(this.btnskip), this.btnskip.onClick(this, this.onClickAll, [this.btnskip]), this.openSubCom(this.effshow)
      }
    };
  _UISkillCallShowView.UID = "ui://tvoubs7ckckn6", __decorateClass([UIProperty], _UISkillCallShowView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "Gold", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "btnOnce", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "btnTen", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "btnskip", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "txtAni", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "list01", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "list02", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "list03", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UISkillCallShowView.prototype, "effshow", 2);
  var UISkillCallShowView = _UISkillCallShowView,
    _UISkillCallNewGetView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "SkillCallNewGet", this.name = "SkillCallNewGetView"
      }
      onInit() {
        this.openSubCom(this.icon_skill), this.addOpenAni(this.openAni)
      }
    };
  _UISkillCallNewGetView.UID = "ui://iqr4nfjvbvhq0", __decorateClass([UIController], _UISkillCallNewGetView.prototype, "c1", 2), __decorateClass([UIController], _UISkillCallNewGetView.prototype, "c2", 2), __decorateClass([UIProperty], _UISkillCallNewGetView.prototype, "effbg_4", 2), __decorateClass([UIProperty], _UISkillCallNewGetView.prototype, "effbg_6", 2), __decorateClass([UIProperty], _UISkillCallNewGetView.prototype, "effbg_5", 2), __decorateClass([UIProperty], _UISkillCallNewGetView.prototype, "icon_skill", 2), __decorateClass([UIProperty], _UISkillCallNewGetView.prototype, "effect", 2), __decorateClass([UIProperty], _UISkillCallNewGetView.prototype, "title1", 2), __decorateClass([UIProperty], _UISkillCallNewGetView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UISkillCallNewGetView.prototype, "openAni", 2);
  var UISkillCallNewGetView = _UISkillCallNewGetView,
    SkillCallNewGetView = class extends UISkillCallNewGetView {
      constructor() {
        super(), this.maskType = 1, this.layer = "Pop"
      }
      onInit() {
        super.onInit()
      }
      onShow() {
        this._itemId = this.args[0], this._itemData = ItemUtil.createDataById(this._itemId), this.icon_skill.setItemId(this._itemId);
        const t = this._itemData.itemCfg.quality;
        this.c1.selectedIndex = 0, this.c2.selectedIndex = t - 4;
        let e = {};
        e.skillId = this._itemId, e.skillLibId = 1;
        let i = new SkillCdData2(e);
        const s = i.skilldata.DesList;
        this.title1.text = i.skilldata.getSkillDescByLv(s[s.length - 1].level)
      }
      onClickAll(t) {}
      onClickMask() {
        this.close();
        const t = UIManager.inst.getView(SkillCallShowView.UID);
        5 == this._itemData.itemCfg.quality && t.showNextOrg(), 6 == this._itemData.itemCfg.quality && t.showNextRed()
      }
    },
    SkillCallShowView = class extends UISkillCallShowView {
      constructor() {
        super(), this._use0 = 0, this._use1 = 0, this.layer = "Pop"
      }
      onInit() {
        super.onInit(), this.setTexture(this.imgBg, "zj_img_zz", "CallHero"), this.creatList(this.list01, null, null, this.onItemClick, !1), this.creatList(this.list02, null, null, this.onItemClick, !1), this.creatList(this.list03, null, null, this.onItemClick, !1)
      }
      onEvent() {
        this.addEvent(MsgName.SkillCall_SkipAnim, this.refreshSkipAnim)
      }
      onShow() {
        this.refreshView()
      }
      onClickMask() {}
      onClickAll(t) {
        if (t == this.btnClose) {
          if (this._inanim) return;
          this.close()
        } else if (t == this.btnOnce) {
          if (this._inanim) return;
          this._cfg.duration && !SkillCallModel.inst.isLimitPoolAwardLeft() ? (UIManager.inst.openMsg(ToolUtil.chinese(2261)), this.close()) : "red" != this.btnOnce.txtConsume.color ? ActivityModel.inst.isLimitRankOpen(2, (() => {
            SkillCallCtrl.inst.recall = !0, SkillCallCtrl.inst.reqSkillDraw(this._cfg.id, 1, this._use0)
          })) : (this.close(), ItemCtrl.inst.openItemTipsByData(this._useItem0))
        } else if (t == this.btnTen) {
          if (this._inanim) return;
          this._cfg.duration && !SkillCallModel.inst.isLimitPoolAwardLeft() ? (UIManager.inst.openMsg(ToolUtil.chinese(2261)), this.close()) : "red" != this.btnTen.txtConsume.color ? ActivityModel.inst.isLimitRankOpen(2, (() => {
            SkillCallCtrl.inst.recall = !0, SkillCallCtrl.inst.reqSkillDraw(this._cfg.id, 10, this._use1)
          })) : (this.close(), ItemCtrl.inst.openItemTipsByData(this._useItem1))
        } else t == this.btnskip && SkillCallCtrl.inst.setSkipAnim(this.btnskip.selected)
      }
      onHide() {
        ItemObserverUtil.removeAllObserver(this)
      }
      refreshView(t, e) {
        this._cfg = Cfgcallskill_pool.get(Number(null != t ? t : this.args[0])), this._data = null != e ? e : this.args[1], this.refreshSkipAnim(), this.effshow.visible = !1, this._playanim = !this.btnskip.selected, this.Gold.setRes(1, 2), this.Gold.setRes(2, this._cfg.cost_1[0][0]), this.Gold.goldType = 2, 1 == this._data.length ? (this.list01.numItems = 0, this.list02.numItems = 1, this.list03.numItems = 0) : (this.list01.numItems = 3, this.list02.numItems = 4, this.list03.numItems = 3), this._items = this.getShowItems(), this.initBtn(), this._playanim ? this.playAnim() : this.skipAnim()
      }
      onItemClick(t, e) {
        this._inanim || e.item3.item4.openTip()
      }
      refreshSkipAnim() {
        this.btnskip.selected = SkillCallCtrl.inst.getSkipAnim()
      }
      getShowItems() {
        const t = [];
        return 1 == this._data.length ? t.push(this.list02.getChildAt(0)) : (t.push(this.list02.getChildAt(0)), t.push(this.list01.getChildAt(0)), t.push(this.list02.getChildAt(1)), t.push(this.list03.getChildAt(0)), t.push(this.list01.getChildAt(1)), t.push(this.list02.getChildAt(2)), t.push(this.list03.getChildAt(1)), t.push(this.list01.getChildAt(2)), t.push(this.list02.getChildAt(3)), t.push(this.list03.getChildAt(2))), t
      }
      skipAnim() {
        this._inanim = !0;
        for (let t = 0; t < this._data.length; t++) 6 != this._data[t].quality ? (this._items[t].setDrawResult(this._data[t]), this._items[t].back.visible = !1, this._items[t].playPiece()) : this._items[t].setUnDraw(this._data[t]);
        this._curId = 0, this.showNextRed()
      }
      playAnim() {
        if (this._inanim = !0, SkillCallCtrl.inst.recall) {
          this.effshow.visible = !1, SkillCallCtrl.inst.recall = !1;
          for (let t = 0; t < this._data.length; t++) this._items[t].setUnDraw(this._data[t]);
          this._data.length > 1 && MusicCtrl.inst.PlaySound(1046), this.addTimerTask(1, 300, this.showBlue)
        } else {
          this.effshow.visible = !0, this.effshow.t0.play();
          for (let t = 0; t < this._data.length; t++) this._items[t].setVisible(!1);
          this.addTimerTask(1, 1e3, (() => {
            for (let t = 0; t < this._data.length; t++) this._items[t].setUnDraw(this._data[t]);
            this._data.length > 1 && MusicCtrl.inst.PlaySound(1046)
          })), this.addTimerTask(1, 1010, this.showBlue)
        }
      }
      showBlue() {
        let t = 0;
        for (let e = 0; e < this._data.length; e++) 4 == this._data[e].quality && this.addTimerTask(1, 100 * t++, (() => {
          this._items[e].playShowEff()
        }));
        this._curId = 0, this.addTimerTask(1, 1e3, this.showNextOrg)
      }
      showNextOrg() {
        for (; this._curId < this._data.length;) {
          const t = this._data[this._curId],
            e = this._items[this._curId++];
          if (5 == t.quality) return void e.playOrangeEff((() => {
            t.isHave ? this.showNextOrg() : UIManager.inst.open(SkillCallNewGetView.UID, null, t.itemId)
          }))
        }
        this._curId >= this._data.length && (this._curId = 0, this.showNextRed())
      }
      showNextRed() {
        for (; this._curId < this._data.length;) {
          const t = this._data[this._curId],
            e = this._items[this._curId++];
          if (6 == t.quality) return void e.playRedEff((() => {
            t.isHave ? this.showNextRed() : UIManager.inst.open(SkillCallNewGetView.UID, null, t.itemId)
          }))
        }
        this._curId >= this._data.length && (this._playanim ? this.showPieces() : this.showPieces(6), this.addTimerTask(1, 500, (() => this._inanim = !1)))
      }
      showPieces(t) {
        let e = !1;
        for (let i = 0; i < this._data.length; i++) {
          this._items[i].refreshNew();
          const s = this._data[i].quality;
          t && s != t || !this._data[i].isHave || (this._items[i].playPiece(), e = !0)
        }
        e && MusicCtrl.inst.PlaySound(1077)
      }
      initBtn() {
        ItemObserverUtil.removeAllObserver(this), this._cfg.cost_1.forEach((t => {
          ItemObserverUtil.addItemIdObserver(t[0], this, this.refreshBtn.bind(this))
        })), this._cfg.cost_2.forEach((t => {
          ItemObserverUtil.addItemIdObserver(t[0], this, this.refreshBtn.bind(this))
        })), this.refreshBtn()
      }
      refreshBtn() {
        this.refreshBtn0(), this.refreshBtn1()
      }
      refreshBtn0() {
        this._use0 = 0;
        for (let t = 0; t < this._cfg.cost_1.length; t++) {
          const e = this._cfg.cost_1[t],
            i = ItemCtrl.inst.checkItemIsEnough(e[0], e[1]);
          if (t == this._cfg.cost_1.length - 1 || i) {
            this._useItem0 = ItemUtil.createDataById(e[0]);
            const t = this._useItem0.itemCfg;
            this.setTexture(this.btnOnce.imgIcon, t.icon, ItemCtrl.inst.getItemIconFolder(t.type)), this.btnOnce.txtConsume.text = e[1].toString(), this.btnOnce.txtConsume.color = i ? "white" : "red", 2 == e[0] && (this._use0 = e[1]);
            break
          }
        }
      }
      refreshBtn1() {
        this._use1 = 0;
        for (let t = 0; t < this._cfg.cost_2.length; t++) {
          const e = this._cfg.cost_2[t],
            i = ItemCtrl.inst.checkItemIsEnough(e[0], e[1]);
          if (t == this._cfg.cost_2.length - 1 || i) {
            this._useItem1 = ItemUtil.createDataById(e[0]);
            const t = this._useItem1.itemCfg;
            this.setTexture(this.btnTen.imgIcon, t.icon, ItemCtrl.inst.getItemIconFolder(t.type)), this.btnTen.txtConsume.text = e[1].toString(), this.btnTen.txtConsume.color = i ? "white" : "red", 2 == e[0] && (this._use1 = e[1]);
            break
          }
