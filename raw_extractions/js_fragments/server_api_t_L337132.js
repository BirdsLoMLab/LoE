// Fragment: server_api_t_L337132.js
// Lines: 337132-337233 of bundle-beautified.js
// Categories: Server/API
// Keywords: http, joynetgame
// Hit lines: 337133

        let t = `sydh_${BaseConfig.gamePlat}_announcement.txt`;
        return ToolUtil.isRelease ? ToolUtil.get_urlBak("https://sydh-us-cdnres.joynetgame.com/cdnconfig_" + Math.floor(TimerMgr.inst.serverTime / 1e3) + "/serverlists/announcement/" + t) : "http://172.16.12.193/" + t
      }
      onInit() {
        super.onInit(), this.setTexture(this.bgImg, "grxx_bg_juanzhou", "Common"), this.creatList(this.noticeList, this._onItemRender, null, null, !1), Laya.loader.load(this.noticeUrl, Laya.Handler.create(this, this._loadNoticeDataComplete), null, Laya.Loader.TEXT);
        let t = LoginCtrl.inst.zoneid;
        t > ToolUtil.spZone && (t = Math.floor(t / 1e3)), LoginCtrl.inst.zonestate > 0 ? this.txtSer.text = `${ToolUtil.chinese(1816)}${t}-${LoginCtrl.inst.zonestate}` : this.txtSer.text = `${ToolUtil.chinese(1816)}${t}`
      }
      _loadNoticeDataComplete(t) {
        if (null == t || null == t.data) return void this.close();
        const e = JSON.parse(t.data).data;
        0 === e.length ? this.close() : this._updateNoticeList(e)
      }
      onShow() {
        ToolUtil.isW ? this.c1.selectedIndex = 1 : this.c1.selectedIndex = 0
      }
      onClickAll(t) {
        t == this.btnClose ? this.close() : t == this.btn_select && (localStorage.setItem(ToolUtil.login_zongid_key, "0"), localStorage.setItem(ToolUtil.login_country_key, "0"), localStorage.setItem(ToolUtil.select_country_key, "0"), localStorage.setItem(ToolUtil.select_zongid_key, "0"), UIManager.inst.openMsg("clear ok"))
      }
      onHide() {
        this._exitGame()
      }
      _exitGame() {
        ToolUtil.miniGame && 0 == ToolUtil.notice && (ToolUtil.isAlipayMiniGame ? wx.exitProgram() : ToolUtil.isVVMiniGame || ToolUtil.isQGMiniGame ? wx.exitApplication() : wx.exitMiniProgram()), ToolUtil.notice = 0, LoginCtrl.inst.noticing = !1
      }
      _updateNoticeList(t) {
        this.list.splice(0);
        for (let e = 0; e < t.length; e++) {
          const i = t[e];
          i.language == ToolUtil.currentLang.ext && (i.key && i.key == ToolUtil.notice.toString() ? this.list.push(i) : i.key || 0 != ToolUtil.notice || this.list.push(i))
        }
        0 == this.list.length ? this.close() : (this.list.sort(((t, e) => t.key1 - e.key1)), this.noticeList.numItems = this.list.length)
      }
      _onItemRender(t, e) {
        let i = this.list[t];
        e.txtTitle.text = i.title, e.txtNotice.text = i.content
      }
    },
    import_proto387 = __toESM(require_proto()),
    _UIMailView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Mail", this.name = "MailView"
      }
      onInit() {
        this.openSubCom(this.btnAllReceive), this.btnAllReceive.onClick(this, this.onClickAll, [this.btnAllReceive]), this.btnAllDelete.onClick(this, this.onClickAll, [this.btnAllDelete]), this.openSubCom(this.redPointAllAttachment), this.openSubCom(this.btnSelect), this.btnSelect.onClick(this, this.onClickAll, [this.btnSelect]), this.openSubCom(this.txtContent), this.btnDelete.onClick(this, this.onClickAll, [this.btnDelete]), this.openSubCom(this.btnReceive), this.btnReceive.onClick(this, this.onClickAll, [this.btnReceive]), this.btnReturn.onClick(this, this.onClickAll, [this.btnReturn]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UIMailView.UID = "ui://g5miq3gnu0e40", __decorateClass([UIController], _UIMailView.prototype, "PreviewOrDetailCtrl", 2), __decorateClass([UIController], _UIMailView.prototype, "DetailHaveAttachment", 2), __decorateClass([UIController], _UIMailView.prototype, "loading", 2), __decorateClass([UIProperty], _UIMailView.prototype, "clickMask", 2), __decorateClass([UIProperty], _UIMailView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UIMailView.prototype, "txtCapacity", 2), __decorateClass([UIProperty], _UIMailView.prototype, "btnAllReceive", 2), __decorateClass([UIProperty], _UIMailView.prototype, "btnAllDelete", 2), __decorateClass([UIProperty], _UIMailView.prototype, "redPointAllAttachment", 2), __decorateClass([UIProperty], _UIMailView.prototype, "mailList", 2), __decorateClass([UIProperty], _UIMailView.prototype, "btnSelect", 2), __decorateClass([UIProperty], _UIMailView.prototype, "txtShow", 2), __decorateClass([UIProperty], _UIMailView.prototype, "goShow", 2), __decorateClass([UIProperty], _UIMailView.prototype, "goOutside", 2), __decorateClass([UIProperty], _UIMailView.prototype, "go1", 2), __decorateClass([UIProperty], _UIMailView.prototype, "go2", 2), __decorateClass([UIProperty], _UIMailView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIMailView.prototype, "txtTime", 2), __decorateClass([UIProperty], _UIMailView.prototype, "txtContent", 2), __decorateClass([UIProperty], _UIMailView.prototype, "btnDelete", 2), __decorateClass([UIProperty], _UIMailView.prototype, "txtRemainTime", 2), __decorateClass([UIProperty], _UIMailView.prototype, "btnReceive", 2), __decorateClass([UIProperty], _UIMailView.prototype, "btnReturn", 2), __decorateClass([UIProperty], _UIMailView.prototype, "goReward", 2), __decorateClass([UIProperty], _UIMailView.prototype, "attachList", 2), __decorateClass([UIProperty], _UIMailView.prototype, "goWithin", 2), __decorateClass([UIProperty], _UIMailView.prototype, "goEmpty", 2), __decorateClass([UIProperty], _UIMailView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIMailView.prototype, "fixHeight", 2);
  var UIMailView = _UIMailView,
    UIMailItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Mail"
      }
      onConstruct() {
        this.openSubCom(this.attachListWrapper), this.openSubCom(this.redPoint), this.onInit(), this.onEvent()
      }
    };
  UIMailItem.UID = "ui://g5miq3gnu0e4d", __decorateClass([UIController], UIMailItem.prototype, "haveAttachment", 2), __decorateClass([UIController], UIMailItem.prototype, "haveRead", 2), __decorateClass([UIProperty], UIMailItem.prototype, "go1", 2), __decorateClass([UIProperty], UIMailItem.prototype, "go2", 2), __decorateClass([UIProperty], UIMailItem.prototype, "txtTitle", 2), __decorateClass([UIProperty], UIMailItem.prototype, "txtTime", 2), __decorateClass([UIProperty], UIMailItem.prototype, "txtContent", 2), __decorateClass([UIProperty], UIMailItem.prototype, "clickMask", 2), __decorateClass([UIProperty], UIMailItem.prototype, "attachListWrapper", 2), __decorateClass([UIProperty], UIMailItem.prototype, "txtRemainTime", 2), __decorateClass([UIProperty], UIMailItem.prototype, "goReward", 2), __decorateClass([UIProperty], UIMailItem.prototype, "redPoint", 2), __decorateClass([UIProperty], UIMailItem.prototype, "goHaveReceive", 2);
  var import_proto386 = __toESM(require_proto()),
    import_proto384 = __toESM(require_proto()),
    AttachmentState = import_proto384.default.mail.AttachmentState,
    MailState = import_proto384.default.mail.MailState,
    _MailModel = class t extends BaseModel {
      constructor() {
        super()
      }
      static get inst() {
        return null == t._instance && (t._instance = new t), t._instance
      }
      set setMailData(e) {
        let i = e.type,
          s = Number(e.id);
        this._mailData.has(i) || this._mailData.set(i, new Map), this._mailData.get(i).set(s, e), t._updateRedPoint(e)
      }
      getMailList(t) {
        return this._mailData.has(t) ? Array.from(this._mailData.get(t).values()) : new Array
      }
      getMailData(t, e) {
        var i;
        return null == (i = this._mailData.get(t)) ? void 0 : i.get(e)
      }
      init() {
        super.init(), this.unreadNum = new Map, this.lastSendTime = new Map, Object.values(import_proto384.default.mail.MailType).forEach((t => {
          this.lastSendTime.set(t, 0), this.unreadNum.set(t, 0)
        })), this._mailData = new Map, this.mailDetailData = new Map
      }
      updateMail(e) {
        e.mailList.forEach((e => {
          var i;
          if (e.mailState == MailState.STATE_DEL) this.delMail(e.id, e.type);
          else {
            let t = null == (i = this._mailData.get(e.type)) ? void 0 : i.get(Number(e.id));
            t && (t.mailState = e.mailState, t.attachmentState = e.attachmentState)
          }
          t._updateRedPoint(e)
        }))
      }
      delMail(t, e) {
        var i;
        this.mailDetailData.delete(Number(t)), null == (i = this._mailData.get(e)) || i.delete(Number(t))
      }
      updateCheckTime() {
