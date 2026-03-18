// Fragment: server_api_onShow_L150286.js
// Lines: 150286-150388 of bundle-beautified.js
// Categories: Server/API
// Keywords: http
// Hit lines: 150288

      onShow() {
        SdkIconMgr.inst.cb_upload = t => {
          XianYouQuanCtrl.inst.draftUrls.push(t.replace("http:", "https:").replace("f1.img4399.com", "f1img.qq933.com")), this.refreshPictureNum()
        }, this.descInput.text = XianYouQuanCtrl.inst.draftText, this.refreshWordNum(), this.refreshPictureNum()
      }
      onClickAll(t) {
        this.uploadSelect.visible = !1, t == this.btnHelp ? UIManager.inst.openHelp(1002) : t == this.btnFace ? (this.emoji.visible = !0, fgui.GRoot.inst.showPopup(this.emoji, this.btnFace, fgui.PopupDirection.Up, !0)) : t == this.btn_issue ? XianYouQuanCtrl.inst.draftText ? (XianYouQuanCtrl.inst.ReqPublishMoment(), UIManager.inst.open(XianYouQuanComView.UID, null, 2)) : UIManager.inst.openMsg(ToolUtil.chinese(120003)) : t == this.btn_take_picture ? SdkIconMgr.inst.pickImageFromCamera(`zzss_xyqicon${XianYouQuanCtrl.inst.draftUrls.length}`, "2") : t == this.btn_photo_album ? SdkIconMgr.inst.pickImageFromLocal("2") : this.btnCloseUpload
      }
      onDestroy() {
        this.descInput.off(Laya.Event.KEY_DOWN, this, this.refreshWordNum)
      }
    },
    _UIXianYouQuanMyHomeView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "XianYouQuan", this.name = "XianYouQuanMyHomeView"
      }
      onInit() {
        this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.btnHelp02.onClick(this, this.onClickAll, [this.btnHelp02]), this.openSubCom(this.xianyouMessage), this.openSubCom(this.goEmpty), this.addOpenAni(this.openAni)
      }
    };
  _UIXianYouQuanMyHomeView.UID = "ui://ld0k05mdfrul37", __decorateClass([UIController], _UIXianYouQuanMyHomeView.prototype, "c1", 2), __decorateClass([UIProperty], _UIXianYouQuanMyHomeView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UIXianYouQuanMyHomeView.prototype, "btnHelp02", 2), __decorateClass([UIProperty], _UIXianYouQuanMyHomeView.prototype, "xianyouMessage", 2), __decorateClass([UIProperty], _UIXianYouQuanMyHomeView.prototype, "list_moment", 2), __decorateClass([UIProperty], _UIXianYouQuanMyHomeView.prototype, "goEmpty", 2), __decorateClass([UIProperty], _UIXianYouQuanMyHomeView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIXianYouQuanMyHomeView.prototype, "openAni", 2);
  var UIXianYouQuanMyHomeView = _UIXianYouQuanMyHomeView,
    XianYouQuanMyHomeView = class extends UIXianYouQuanMyHomeView {
      constructor() {
        super(), this.charId = 0
      }
      onInit() {
        super.onInit(), this.creatList(this.list_moment, this.onMomentRender)
      }
      onMomentRender(t, e) {
        e.setHomeMomentData(this.homeData.simpleInfo, this.homeData.moments.infoes[t], !1)
      }
      onEvent() {
        this.addEvent(MsgName.XianYouQuan_HomePage, this.onHomePage), this.addEvent(MsgName.XianYouQuan_Del_Moment, this.onDelMoment), this.addEvent(MsgName.XianYouQuan_Publish_Discuss, this.onPublishDiscuss), this.addEvent(MsgName.XianYouQuan_Del_Discuss, this.onDelDiscuss), this.addEvent(MsgName.XianYouQuan_Moment_Like, this.onMomentLike), this.addEvent(MsgName.XianYouQuan_ShareMoment, this.onShareMoment), this.addEvent(MsgName.XianYouQuan_RelationUpdate, this.onRelationUpdate)
      }
      onHomePage(t) {
        t.simpleInfo.charId == this.charId && (this.homeData = t, this.xianyouMessage.setData(t), this.list_moment.numItems = t.moments.infoes.length, this.goEmpty.visible = 0 == t.moments.infoes.length)
      }
      onDelMoment(t) {
        for (let e = 0; e < this.homeData.moments.infoes.length; e++)
          if (this.homeData.moments.infoes[e].id == t) {
            this.homeData.moments.infoes.splice(e, 1), this.list_moment.numItems = this.homeData.moments.infoes.length, this.goEmpty.visible = 0 == this.homeData.moments.infoes.length;
            break
          }
      }
      onPublishDiscuss(t) {
        for (let e = 0; e < this.homeData.moments.infoes.length; e++)
          if (this.homeData.moments.infoes[e].id == t.mid && this.homeData.moments.infoes[e].discusses.length < 3) {
            this.homeData.moments.infoes[e].discusses.push(t.info), this.homeData.moments.infoes[e].discussNum += 1, this.list_moment.refreshVirtualList();
            break
          }
      }
      onDelDiscuss(t) {
        for (let e = 0; e < this.homeData.moments.infoes.length; e++)
          if (this.homeData.moments.infoes[e].id == t.momentId) {
            let i = this.homeData.moments.infoes[e];
            for (let e = 0; e < i.discusses.length; e++)
              if (i.discusses[e].id == t.discussId) {
                i.discusses.splice(e, 1), i.discussNum -= 1, this.list_moment.refreshVirtualList();
                break
              } break
          }
      }
      onMomentLike(t) {
        for (let e = 0; e < this.homeData.moments.infoes.length; e++)
          if (this.homeData.moments.infoes[e].id == t.momentId) {
            this.homeData.moments.infoes[e].likeNum = t.likeNum, this.homeData.moments.infoes[e].isLike = t.isLike, this.list_moment.refreshVirtualList();
            break
          }
      }
      onShareMoment(t) {
        for (let e = 0; e < this.homeData.moments.infoes.length; e++)
          if (this.homeData.moments.infoes[e].id == t.momentId) {
            this.homeData.moments.infoes[e].sharedNum = t.sharedNum, this.list_moment.refreshVirtualList();
            break
          }
      }
      onRelationUpdate() {
        let t = XianYouQuanCtrl.inst.getRelationInfo(this.charId);
        t && (t.fromFollowTo > 0 ? this.homeData.fansCnt += 1 : this.homeData.fansCnt -= 1), this.xianyouMessage.setData(this.homeData), this.list_moment.refreshVirtualList()
      }
      onShow() {
        var t, e;
        this.charId = this.args[0], this.charId || (this.charId = null == (t = XianYouQuanCtrl.inst.getUserInfo()) ? void 0 : t.charId), this.c1.selectedIndex = this.charId == (null == (e = XianYouQuanCtrl.inst.getUserInfo()) ? void 0 : e.charId) ? 0 : 1, XianYouQuanCtrl.inst.ReqHomePage(this.charId)
      }
      onClickAll(t) {
        (t == this.btnHelp || t == this.btnHelp02) && UIManager.inst.openHelp(1002)
      }
    },
    _UIXianYouQuanDynamicView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "XianYouQuan", this.name = "XianYouQuanDynamicView"
      }
      onInit() {
        this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.btnEmoji.onClick(this, this.onClickAll, [this.btnEmoji]), this.btnSend.onClick(this, this.onClickAll, [this.btnSend]), this.btnCancelReply.onClick(this, this.onClickAll, [this.btnCancelReply]), this.openSubCom(this.emoji), this.addOpenAni(this.openAni)
      }
    };
  _UIXianYouQuanDynamicView.UID = "ui://ld0k05mdxu6n3o", __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "showList", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "btnEmoji", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "btnSend", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "input", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "txtWordNum", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "txtReplyName", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "btnCancelReply", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "inputTextGroup", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "emoji", 2), __decorateClass([UIProperty], _UIXianYouQuanDynamicView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UIXianYouQuanDynamicView.prototype, "openAni", 2);
  var UIXianYouQuanDynamicView = _UIXianYouQuanDynamicView,
    XianYouQuanDynamicView = class extends UIXianYouQuanDynamicView {
      constructor() {
        super(), this.replyParentId = 0, this.replyDiscussId = 0, this.replyName = "", this.discussInfoList = [], this.nowPage = 1, this.totalPage = 1, this.lastText = "", this.hide3DCamera = !0
      }
