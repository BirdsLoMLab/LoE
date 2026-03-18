// Fragment: gacha_draw__onItemProvider_L296973.js
// Lines: 296973-297127 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: draw
// Hit lines: 296974, 296983, 296992, 297001, 297027

      _onItemProvider(t) {
        return "ui://Draw/CardShopIcon"
      }
      _onItemClick(t, e) {}
      _onItemRender2(t, e) {
        let i = e;
        const s = DrawCtrl.inst.cardAnimDataArr[t];
        i.setData(t, s)
      }
      _onItemProvider2(t) {
        return "ui://Draw/CardShopIconNoAnim"
      }
      _onItemClick2(t, e) {}
      _onItemRenderAnimTxt(t, e) {
        let i = e;
        const s = DrawCtrl.inst.cardAnimDataArr[t];
        i.setData(t, s)
      }
      _onItemProviderAnimTxt(t) {
        return "ui://Draw/CardShopIconTxt"
      }
      _onItemClickAnimTxt(t, e) {}
      _onItemRenderNoAnimTxt(t, e) {
        let i = e;
        const s = DrawCtrl.inst.cardAnimDataArr[t];
        i.setData(t, s)
      }
      _onItemProviderNoAnimTxt(t) {
        return "ui://Draw/CardShopIconNoAnimTxt"
      }
      _onItemClickNoAnimTxt(t, e) {}
      freshAll() {
        DrawCtrl.inst.jumpAnim ? (this.freshItmeList2(), this.itemList1.visible = !1, this.itemList2.visible = !0, this.itemListAnimTxt.visible = !1, this.itemListNoAnimTxt.visible = !0, this.noAnimDrawAction()) : (this.itemList1.touchable = !1, this.itemList1.visible = !0, this.itemList2.visible = !1, this.itemListAnimTxt.visible = !0, this.itemListNoAnimTxt.visible = !1, this.freshItmeList1())
      }
      freshItmeList1() {
        let t = DrawModel.inst.drawRewardItemArr.length;
        t > 35 && (t = 35), DrawCtrl.inst.creatCardAnimDataArr(t), this.itemList1.numItems = t, this.itemListAnimTxt.numItems = t
      }
      freshItmeList2() {
        let t = DrawModel.inst.drawRewardItemArr.length;
        DrawCtrl.inst.creatCardAnimDataArr(t), this.itemList2.numItems = t, this.itemListNoAnimTxt.numItems = t, this.itemList2.scrollToView(0, !1, !0)
      }
      onAnimFinish() {
        this.itemList1.touchable = !0, DrawModel.inst.drawRewardItemArr.length > 35 && (this.freshItmeList2(), this.itemList1.visible = !1, this.itemList2.visible = !0, this.itemListAnimTxt.visible = !1, this.itemListNoAnimTxt.visible = !0)
      }
      noAnimDrawAction() {
        this.timerId1 = this.addTimerTask(1, 1e3, (() => {
          EventDispatcher.inst.dispatchEvent(MsgName.Draw_Anim_Finish)
        }), this)
      }
      onAddEff(t) {}
    },
    UICardShopIcon = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Draw"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UICardShopIcon.UID = "ui://jvvif5iik2rf9a", __decorateClass([UIProperty], UICardShopIcon.prototype, "imgFrame", 2), __decorateClass([UIProperty], UICardShopIcon.prototype, "itemIcon", 2), __decorateClass([UIProperty], UICardShopIcon.prototype, "imgTheBack", 2), __decorateClass([UIProperty], UICardShopIcon.prototype, "goRoot", 2), __decorateClass([UITransition], UICardShopIcon.prototype, "t0", 2);
  var CardShopIcon = class extends UICardShopIcon {
      constructor() {
        super(), this.succAddLis = !1, this.hidePoxYOffset = 999999, this.firstShowPoxYOffset = -73, this.autoDrawWaitDuring = 800, this.shakeAngleMax = 30, this.shakeOneFourthDuring = 0, this.shakeCycle = 5, this.arrAutoDelteTimer = []
      }
      onInit() {
        super.onInit(), this.onClick(this, (() => {
          this.onLoaderClick()
        })), this.animY = new CardAnimY(this.goRoot, this.firstShowPoxYOffset, 0), this.animTurn = new CardAnimTurn(this.imgFrame, this.itemIcon, this.imgTheBack)
      }
      onShow() {}
      onEvent() {}
      onUpdate(t) {
        this.animY.onUpdate(t), this.animTurn.onUpdate(t)
      }
      onDestroy() {
        this.offClick(this, this.onLoaderClick), this.clearAll(), EventDispatcher.inst.removeEventListener(MsgName.Draw_Anim_Finish, this, this.onAnimFinish), this.succAddLis = !1
      }
      setData(t, e) {
        this.succAddLis || (EventDispatcher.inst.addEventListener(MsgName.Draw_Anim_Finish, this, this.onAnimFinish), this.succAddLis = !0), this.idx = t, this.cardAnimData = e, this.shakeOneFourthDuring = this.cardAnimData.shakeDuring / this.shakeCycle / 4, this.clearAll(), this.setIdAnNum(), this.beginAnim()
      }
      clearAll() {
        this.arrAutoDelteTimer.forEach((t => {
          this.removeTimerTask(t)
        })), this.arrAutoDelteTimer = [], this.animY.stop(), this.animTurn.stop()
      }
      setIdAnNum() {
        const t = DrawModel.inst.drawRewardItemArr[this.idx];
        this.imgTheBack.visible = !0, this.itemId = t.id, this.itemNum = t.num;
        const e = CfgitemBase.get(this.itemId);
        this.setItemCanClick(!1), this.setTexture(this.itemIcon, e.icon, "ItemIcon"), this.setImage(this.imgFrame, `card_img_pinzhi0${e.quality}`, "Icon")
      }
      setItemCanClick(t) {
        this.canOpenTip = t
      }
      onLoaderClick() {
        if (!this.canOpenTip) return;
        const t = ItemUtil.createDataById(this.itemId, this.itemNum);
        ItemCtrl.inst.openItemTipsByData(t, !0)
      }
      beginAnim() {
        return __async(this, null, (function*() {
          DrawCtrl.inst.jumpAnim ? this.waitToByJump() : (this.firstHideY(), yield this.waitToShow(), yield this.firstShowY(), yield this.downYAnim(), yield this.doToShake(), yield this.waitToTurnAnim(), yield this.showBeforeTurnEffect(), yield this.turnDoing(), yield this.checkAndSendFinishAll())
        }))
      }
      firstHideY() {
        this.goRoot.y = this.hidePoxYOffset, this.imgTheBack.scaleX = 1, this.itemIcon.scaleX = 0, this.imgFrame.scaleX = 0, this.imgTheBack.visible = !0
      }
      waitToByJump() {
        return __async(this, null, (function*() {
          return new Promise(((t, e) => {
            const i = this.addTimerTask(1, 1e3, (() => {
              this.imgTheBack.scaleX = 0, this.imgTheBack.visible = !1, this.cardAnimData.isEnd && EventDispatcher.inst.dispatchEvent(MsgName.Draw_Anim_Finish)
            }), this);
            this.arrAutoDelteTimer.push(i)
          }))
        }))
      }
      waitToShow() {
        return __async(this, null, (function*() {
          return new Promise(((t, e) => {
            const i = this.addTimerTask(1, this.cardAnimData.waitToShowDuring, (() => {
              t(!0)
            }), this);
            this.arrAutoDelteTimer.push(i)
          }))
        }))
      }
      firstShowY() {
        return __async(this, null, (function*() {
          return new Promise(((t, e) => {
            this.goRoot.y = this.firstShowPoxYOffset, t(!0)
          }))
        }))
      }
      downYAnim() {
        return __async(this, null, (function*() {
          return new Promise(((t, e) => {
            this.animY.play(this.cardAnimData, this.cardAnimData.downYDuring, (() => t(!0)))
          }))
        }))
      }
      doToShake() {
        return __async(this, null, (function*() {
          return new Promise(((t, e) => {
            if (!this.cardAnimData.isShadke) return t(!0);
            this.t0.play((() => {
              t(!0)
            }))
          }))
        }))
      }
      waitToTurnAnim() {
        return __async(this, null, (function*() {
          return new Promise(((t, e) => {
