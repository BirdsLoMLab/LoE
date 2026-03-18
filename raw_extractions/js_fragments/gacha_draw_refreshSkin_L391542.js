// Fragment: gacha_draw_refreshSkin_L391542.js
// Lines: 391542-391643 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 391543

      refreshSkin(t, e) {
        t && (t.bg && e.setUrlTexture(e.imgBg, t.bg, "XiaoXiao"), t.title && e.txt_title && (e.txt_title.text = ToolUtil.chinese(Number(t.title))), t.title_up && e.setUrlTexture(e.imgTitleZSUp, t.title_up, "XiaoXiao"), t.title_bottom && e.setUrlTexture(e.imgTitleZSDown, t.title_bottom, "XiaoXiao"), t.banner && e.setUrlTexture(e.imgBanner, t.banner, "XiaoXiao"))
      }
    };
  XiaoXiaoCtrl._instance = null, XiaoXiaoCtrl = __decorateClass([regClass193("pHl3DVzZS1WtZme3gGD2zQ")], XiaoXiaoCtrl);
  var _UIXiaoXiaoLoseView = class t extends BaseView {
    constructor() {
      super(), this.uid = t.UID, this.pkgName = "XiaoXiaoLose", this.name = "XiaoXiaoLoseView"
    }
    onInit() {
      this.btn1.onClick(this, this.onClickAll, [this.btn1]), this.addOpenAni(this.openAni)
    }
  };
  _UIXiaoXiaoLoseView.UID = "ui://jlfsubn5xv9u0", __decorateClass([UIProperty], _UIXiaoXiaoLoseView.prototype, "txtEmpty", 2), __decorateClass([UIProperty], _UIXiaoXiaoLoseView.prototype, "btn1", 2), __decorateClass([UIProperty], _UIXiaoXiaoLoseView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIXiaoXiaoLoseView.prototype, "openAni", 2);
  var UIXiaoXiaoLoseView = _UIXiaoXiaoLoseView,
    XiaoXiaoLoseView = class extends UIXiaoXiaoLoseView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {
        t == this.btn1 && (UIManager.inst.close(XiaoXiaoFightView.UID), this.close())
      }
    },
    _UIXiaoXiaoWinView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "XiaoXiaoWin", this.name = "XiaoXiaoWinView"
      }
      onInit() {
        this.btn1.onClick(this, this.onClickAll, [this.btn1]), this.addOpenAni(this.openAni)
      }
    };
  _UIXiaoXiaoWinView.UID = "ui://wlpd4vgzxv9u8", __decorateClass([UIProperty], _UIXiaoXiaoWinView.prototype, "list_tips", 2), __decorateClass([UIProperty], _UIXiaoXiaoWinView.prototype, "txtEmpty", 2), __decorateClass([UIProperty], _UIXiaoXiaoWinView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIXiaoXiaoWinView.prototype, "btn1", 2), __decorateClass([UITransition], _UIXiaoXiaoWinView.prototype, "openAni", 2);
  var UIXiaoXiaoWinView = _UIXiaoXiaoWinView,
    XiaoXiaoWinView = class extends UIXiaoXiaoWinView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.list_tips, this.onItemRender, null, null, !0)
      }
      onShow() {
        this.list = [], this.list.push(Number(this.args[2])), this.list.push(XiaoXiaoCtrl.inst.getLvStarByStep(this.args[0], this.args[1], this.args[2])), this.list_tips.numItems = 2
      }
      onClickAll(t) {
        t == this.btn1 && (UIManager.inst.close(XiaoXiaoFightView.UID), this.close())
      }
      onItemRender(t, e) {
        e.setData(t, this.list[t])
      }
    },
    XiaoXiaoFightView = class extends UIXiaoXiaoFightView {
      constructor() {
        super(), this._isRefreshTime = !0, this.clearTime = 0, this.startPos = {
          x: 26,
          y: 1340
        }, this.spaceDis = {
          x: 111,
          y: 111
        }, this.isTouchStart = !1, this.isMoving = !1, this.needRecover = !1, this.useCount = 0, this.targetPosDic = {}, this.beginBeadId = 1, this.endBeadId = 6, this.beatMonstarDic = {}, this._ctrl = XiaoXiaoCtrl.inst, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit()
      }
      onClickAll(t) {
        if (t == this.btnClose) {
          if (this.isMoving) return;
          UIManager.inst.openDialog({
            msg: ToolUtil.chinese(3720),
            hideMask: !0,
            okFunc: () => {
              this.close()
            }
          })
        }
      }
      _recycleModel() {
        if (!(this.monsterItems.length <= 0))
          for (let t = 0; t < this.monsterItems.length; t++) {
            let e = this.monsterItems[t];
            UIModelMgr.inst.recycle(e.uiModel), e.uiModel = null
          }
      }
      onDestroy() {
        this._recycleModel()
      }
      get info() {
        return this._ctrl.getInfo(this._type)
      }
      refreshActTime() {
        this.info ? this._isRefreshTime = this._ctrl.refreshTimeStr(this.txt_times, 1, this.info.closeTime) > 0 : this._isRefreshTime = !1
      }
      onUpdateSec() {
        this._isRefreshTime && this.refreshActTime()
      }
      onHide() {
        this.isTouchStart = !1, this.isMoving = !1, this.useCount = 0, this.beatMonstarDic = {}, this.needRecover = !1, this.clearTween(), this._recycleModel()
      }
      clearTween() {}
