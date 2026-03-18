// Fragment: formula_t_L132850.js
// Lines: 132850-132953 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max, Math.min
// Hit lines: 132850, 132853

          let t = Math.max(0, this._curIdx - 1);
          this.refreshContent(t)
        } else if (t == this.btnRight) {
          let t = Math.min(this._itemDataArr.length - 1, this._curIdx + 1);
          this.refreshContent(t)
        } else t == this.btnWear && MethodExercisesCtrl.inst.quickWearOrOff(this._itemDataArr[this._curIdx]) && this.close()
      }
      onShow() {
        this._itemDataArr = this.args[0], this._isCanSellOnekey = this.args[2];
        let t = this.args[1];
        this.refreshContent(t)
      }
      refreshContent(t) {
        if (this._curIdx == t) return !1;
        this._curIdx = t;
        let e = this._itemDataArr[t];
        if (!e) return !1;
        let i = e.level;
        0 == i && (i = 1);
        const s = Cfgmartial_level.get(MethodExercisesCtrl.inst.converLevelId(e.id, i));
        if (!s) return !1;
        this.txtMartialName.text = ToolUtil.chinese(e.cfg.name), this.iconItem.setData(e, !0);
        const o = e.isActive;
        return this.btnWear.visible = o, this.btnWear.visible && (e.isWear ? (this.btnWear.text = ToolUtil.chinese(1880), this.refreshWearRed(!1)) : (this.btnWear.text = ToolUtil.chinese(1881), this.refreshWearRed(!1))), this.refreshBtnState(e), this.btnLeft.visible = t > 0, this.btnRight.visible = t < this._itemDataArr.length - 1, this._ownArr = s.own_attr, this._wearArr = s.wear_attr, this.ownList.numItems = this._ownArr.length, this.wearList.numItems = this._wearArr.length, this.ownList.height = 34 * this.ownList.numItems, this.wearList.height = 34 * this.wearList.numItems, !0
      }
      refreshBtnState(t) {
        if (!t.isActive) return this.btnUpgrade.text = ToolUtil.chinese(1882), this.btnUpgrade.grayed = !t.isUnlock, this._btnState = 0, void this.refreshUpgradeRed();
        switch (this._btnState = t.itemData.opType, this._btnState) {
          case 1:
            this.btnUpgrade.text = ToolUtil.chinese(1702), this.btnUpgrade.grayed = !MethodExercisesCtrl.inst.isEnoughUpgrade(t.id, t.level);
            break;
          case 2:
            this.btnUpgrade.text = ToolUtil.chinese(1883), this.btnUpgrade.grayed = !MethodExercisesCtrl.inst.isEnoughMake(t.id);
            break;
          case 3:
            this.btnUpgrade.text = ToolUtil.chinese(1884);
            let e = MethodExercisesCtrl.inst.isEnoughSell(t.id) && this._isCanSellOnekey;
            this.btnUpgrade.grayed = !e
        }
        this.refreshUpgradeRed()
      }
      refreshUpgradeRed() {
        let t = this.btnUpgrade.getChild("goRed");
        t && t.setDotVisible(!this.btnUpgrade.grayed)
      }
      refreshWearRed(t) {
        let e = this.btnWear.getChild("goRed");
        e && e.setDotVisible(t)
      }
      initOwnList() {
        this.creatList(this.ownList, this._onOwnItemRender), this.ownList.scrollPane.touchEffect = !1
      }
      _onOwnItemRender(t, e) {
        e.setData(this._ownArr[t])
      }
      initWearList() {
        this.creatList(this.wearList, this._onWearItemRender), this.wearList.scrollPane.touchEffect = !1
      }
      _onWearItemRender(t, e) {
        e.setData(this._wearArr[t])
      }
    },
    MethodExercisesOpView = class extends UIMethodExercisesOpView {
      constructor() {
        super(), this._guideData = {
          isWearState: !1
        }, this._effItemIdArr = [], this._isCanWearOnekey = !1, this._isCanUpgradeOnekey = !1, this._isCanMakeOnekey = !1, this._isCanSellOnekey = !1, this._posDataArr = [], this._itemDataArr = [], this._successEffArr = []
      }
      onInit() {
        super.onInit(), this.setTexture(this.imgBg2, "common_img_banpingtanchuang", "Common"), this.initPosList(), this.initItemList()
      }
      onEvent() {
        this.addEvent(MsgName.Martial_Pos_Lock_State_Change, this.onMartialPosLockStateChangeHandle), this.addEvent(MsgName.Martial_Pos_Wear_Refresh, this.onMartialPosWearRefreshHandle), this.addEvent(MsgName.Martial_Item_Unlock_Refresh, this.onMartialItemUnlockHandle), this.addEvent(MsgName.Martial_Wear_Guide_State_Change, this.onMartialWearGuideStateChangeHandle), this.addEvent(MsgName.Martial_Level_Result, this.onMartialLevelUpResultHandle), this.addEvent(MsgName.Martial_Make_Result, this.onMartialMakeResultHandle)
      }
      onClickAll(t) {
        if (t == this.btnUpgrade) {
          if (this.btnUpgrade.grayed) return;
          switch (this._opType) {
            case 1:
              MethodExercisesCtrl.inst.upgradeWithOneClick(this._type);
              break;
            case 2:
              MethodExercisesCtrl.inst.makeWithOneClick(this._type);
              break;
            case 3:
              MethodExercisesCtrl.inst.sellWithOneClick(this._type)
          }
        } else if (t == this.btnWears) {
          if (!this._isCanWearOnekey) return void UIManager.inst.openMsg(ToolUtil.chinese(1872));
          MethodExercisesCtrl.inst.wearWithOneClick(this._type)
        } else if (t == this.btnLeft) {
          let t = this._type - 1;
          t < 1 && (t = 3), this.switchType(t) && this._switchFunc && this._switchFunc(!0, t)
        } else if (t == this.btnRight) {
          let t = this._type + 1;
          t > 3 && (t = 1), this.switchType(t) && this._switchFunc && this._switchFunc(!1, t)
        }
      }
      onHide() {
        ItemObserverUtil.removeAllObserver(this)
      }
      onAfterOpenAni() {
        let t = UIManager.inst.getView(RealmView.UID);
        t && t.showOrHideMethodExercisesView(!1)
