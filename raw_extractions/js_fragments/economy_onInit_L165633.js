// Fragment: economy_onInit_L165633.js
// Lines: 165633-165833 of bundle-beautified.js
// Categories: Economy, Formula
// Keywords: Math.ceil, gold
// Hit lines: 165634, 165637, 165658, 165735, 165751, 165771, 165774

      onInit() {
        this.openSubCom(this.Gold)
      }
    };
  _UIYiShouYCAtlasView.UID = "ui://heybpntrj07t0", __decorateClass([UIProperty], _UIYiShouYCAtlasView.prototype, "ldBg_mini", 2), __decorateClass([UIProperty], _UIYiShouYCAtlasView.prototype, "ldBg", 2), __decorateClass([UIProperty], _UIYiShouYCAtlasView.prototype, "Gold", 2), __decorateClass([UIProperty], _UIYiShouYCAtlasView.prototype, "listEgg", 2), __decorateClass([UIProperty], _UIYiShouYCAtlasView.prototype, "fixHeight", 2);
  var UIYiShouYCAtlasView = _UIYiShouYCAtlasView,
    UIYiShouYCAtlasQuality = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YiShouYCAtlas"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIYiShouYCAtlasQuality.UID = "ui://heybpntrjkixg", __decorateClass([UIProperty], UIYiShouYCAtlasQuality.prototype, "atlasList", 2), __decorateClass([UIProperty], UIYiShouYCAtlasQuality.prototype, "imgBg1", 2), __decorateClass([UIProperty], UIYiShouYCAtlasQuality.prototype, "imgBg2", 2), __decorateClass([UIProperty], UIYiShouYCAtlasQuality.prototype, "txtTitle", 2);
  var _YiShouYCAtlasQuality = class t extends UIYiShouYCAtlasQuality {
    constructor() {
      super()
    }
    onInit() {
      super.onInit(), this.creatList(this.atlasList, this._onShowItemRender, null, null, !1)
    }
    onShow() {}
    setData(e) {
      this.petQualityInfo = e, this.atlasList.numItems = this.petQualityInfo.petArr.length, this.txtTitle.text = StringUtil.format(ToolUtil.chinese(11512), this.petQualityInfo.petDai);
      let i = Math.ceil(this.petQualityInfo.petArr.length / 3);
      i = i < 0 ? 0 : i;
      let s = 66 + i * t.ColumnHeight;
      this.setSize(681, s), this.atlasList.setSize(681, s - 66)
    }
    _onShowItemRender(t, e) {
      e.setData(this.petQualityInfo.petArr[t])
    }
    onClickAll(t) {}
  };
  _YiShouYCAtlasQuality.ColumnHeight = 305;
  var YiShouYCAtlasQuality = _YiShouYCAtlasQuality,
    YiShouYCAtlasView = class extends UIYiShouYCAtlasView {
      constructor() {
        super(), this.petQualityArr = [], this.oneRowNum = 3
      }
      onInit() {
        super.onInit(), this.creatList(this.listEgg, this._onShowItemRender, null, null, !1)
      }
      onEvent() {
        this.addEvent(MsgName.YiShou_Photo_Change, this.onPhotoChange, this)
      }
      onShow() {
        this.updateView()
      }
      updateView() {
        this.petQualityArr = [];
        let t = Cfgpet_data.get(),
          e = YiShouPeiYuModel.inst.getMaxDaiNum();
        for (let i = 1; i <= e; i++) {
          let e = new PetQualityInfo;
          e.petDai = i, e.petArr = [], this.petQualityArr.push(e);
          for (let s of t) {
            let t = new PetDaiInfo;
            t.setData(i, s), e.petArr.push(t)
          }
          e.petArr.sort(((t, e) => {
            let i = t.cfgPet.quality,
              s = e.cfgPet.quality;
            if (i == s) {
              let i = t.cfgPet.element,
                s = e.cfgPet.element,
                o = t.cfgPet.id,
                n = e.cfgPet.id;
              return i == s ? o == n ? t.dai - e.dai : o - n : i - s
            }
            return s - i
          }))
        }
        this.petQualityArr.sort(((t, e) => e.petDai - t.petDai)), this.listEgg.numItems = this.petQualityArr.length, this.setRewardScrollPosY()
      }
      setRewardScrollPosY() {
        let t = 0,
          e = !1;
        for (let i = 0; i < this.petQualityArr.length; i++) {
          const s = this.petQualityArr[i];
          if (this.haveGet(s)) {
            e = !0, t += this.haveRewardHeight(s);
            break
          }
          t += this.calHeight(s)
        }
        e && (this.removeTimerTask(this.timeID), this.timeID = this.addTimerTask(1, 10, (() => {
          this.listEgg.scrollPane.posY = t
        })))
      }
      haveGet(t) {
        let e = !1;
        for (let i of t.petArr) {
          if (YiShouYCCtrl.inst.isHavePetPhotoAward(i.cfgPet.id, i.dai)) {
            e = !0;
            break
          }
        }
        return e
      }
      haveRewardHeight(t) {
        const e = Math.ceil(t.petArr.length / this.oneRowNum);
        let i = -1;
        for (let s = 0; s < e; s++) {
          for (let e = 0; e < this.oneRowNum; e++) {
            const o = s * this.oneRowNum + e,
              n = t.petArr[o];
            if (n && YiShouYCCtrl.inst.isHavePetPhotoAward(n.cfgPet.id, n.dai)) {
              i = s;
              break
            }
          }
          if (-1 !== i) break
        }
        return 66 + (i >= 0 ? i : 0) * YiShouYCAtlasQuality.ColumnHeight
      }
      calHeight(t) {
        let e = Math.ceil(t.petArr.length / this.oneRowNum);
        return e = e < 0 ? 0 : e, 66 + e * YiShouYCAtlasQuality.ColumnHeight
      }
      onPhotoChange() {
        this.updateView()
      }
      _onShowItemRender(t, e) {
        e.setData(this.petQualityArr[t])
      }
      onClose() {
        this.removeTimerTask(this.timeID)
      }
      onClickAll(t) {}
    },
    import_proto78 = __toESM(require_proto()),
    _UIYiShouYCHatchView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YiShouYCHatch", this.name = "YiShouYCHatchView"
      }
      onInit() {
        this.openSubCom(this.Gold), this.openSubCom(this.goTitle), this.openSubCom(this.btnAnimanSelect), this.btnAnimanSelect.onClick(this, this.onClickAll, [this.btnAnimanSelect]), this.btnGo.onClick(this, this.onClickAll, [this.btnGo]), this.btnHatch.onClick(this, this.onClickAll, [this.btnHatch]), this.openSubCom(this.yishou_level), this.openSubCom(this.emptyItem), this.openSubCom(this.eggRedPoint), this.openSubCom(this.btnSetting), this.btnSetting.onClick(this, this.onClickAll, [this.btnSetting]), this.btn_peiyu.onClick(this, this.onClickAll, [this.btn_peiyu])
      }
    };
  _UIYiShouYCHatchView.UID = "ui://h4pjnvonj07t0", __decorateClass([UIController], _UIYiShouYCHatchView.prototype, "c1", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "ldBg_mini", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "ldBg", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "imgBg_mini", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "Gold", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "goTitle", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "imagEgg", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "txtTip", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "btnAnimanSelect", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "txtAni", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "goSkipAnima", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "btnGo", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "listEgg", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "btnHatch", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "effectEgg", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "barHatch", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "yishou_level", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "emptyItem", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "eggRedPoint", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "btnSetting", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "btn_peiyu", 2), __decorateClass([UIProperty], _UIYiShouYCHatchView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIYiShouYCHatchView.prototype, "loop", 2), __decorateClass([UITransition], _UIYiShouYCHatchView.prototype, "open", 2), __decorateClass([UITransition], _UIYiShouYCHatchView.prototype, "stop_e", 2);
  var UIYiShouYCHatchView = _UIYiShouYCHatchView,
    _UIItemTipView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Bag", this.name = "ItemTipView"
      }
      onInit() {}
    };
  _UIItemTipView.UID = "ui://84dr9u8pw9zt1k", __decorateClass([UIProperty], _UIItemTipView.prototype, "goContent", 2);
  var UIItemTipView = _UIItemTipView,
    ItemTipView = class extends UIItemTipView {
      constructor() {
        super(), this._recordArr = [], this.maskType = 1, this.layer = ItemCtrl.inst.itemTipsLayer
      }
      onInit() {
        super.onInit()
      }
      onDestroy() {
        EventDispatcher.inst.dispatchEvent(MsgName.Item_Tips_Close)
      }
      onHide() {
        this._recordArr.splice(0)
      }
      onShow() {
        if (this.args && this.args.length > 0) {
          const t = this.args[0],
            e = this.args[1],
            i = this.args[2];
          if (!t || !t.itemCfg) return void this.close();
          const s = t.itemCfg.id,
            o = this.goContent.numChildren;
          if (0 == o) this._recordArr.splice(0);
          else if (this._recordArr.includes(s)) {
            const t = this._recordArr.indexOf(s),
              e = o - 1;
            return void(t != e && (this.goContent.swapChildrenAt(t, e), ArrayUtil.swap(this._recordArr, t, e)))
          }
          const n = this.addSubChild("ItemTipContent", this.goContent);
          n && (this._recordArr.push(s), n.setData(t, e, i, (t => {
            const e = this._recordArr.indexOf(t);
            this._recordArr.splice(e, 1), this.removeSubChild(n), 0 == this.goContent.numChildren && this.close()
          })))
        }
      }
    },
    _UIYiShouYCHatchTipsView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YiShouYCHatchTips", this.name = "YiShouYCHatchTipsView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnAnimanSelect_1), this.btnAnimanSelect_1.onClick(this, this.onClickAll, [this.btnAnimanSelect_1]), this.openSubCom(this.btnAnimanSelect_2), this.btnAnimanSelect_2.onClick(this, this.onClickAll, [this.btnAnimanSelect_2]), this.openSubCom(this.btnSave), this.btnSave.onClick(this, this.onClickAll, [this.btnSave])
      }
    };
  _UIYiShouYCHatchTipsView.UID = "ui://6rc0oo88jsek0", __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "line", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "btnAnimanSelect_1", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "txtAni_1", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "goSkipAnima_1", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "btnAnimanSelect_2", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "txtAni_2", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "goSkipAnima_2", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "btnSave", 2), __decorateClass([UIProperty], _UIYiShouYCHatchTipsView.prototype, "fixHight", 2);
  var UIYiShouYCHatchTipsView = _UIYiShouYCHatchTipsView,
    YiShouYCHatchTipsView = class extends UIYiShouYCHatchTipsView {
      constructor() {
        super(), this.layer = "Pop", this.maskType = 1
      }
      onInit() {
