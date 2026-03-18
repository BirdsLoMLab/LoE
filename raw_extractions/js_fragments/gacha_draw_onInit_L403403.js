// Fragment: gacha_draw_onInit_L403403.js
// Lines: 403403-403603 of bundle-beautified.js
// Categories: Gacha/Draw, Server/API
// Keywords: banner, http, joynetgame
// Hit lines: 403407, 403415, 403513, 403526

      onInit() {
        this.btnFacebook.addClick(this, this.onClickAll, [this.btnFacebook]), this.openSubCom(this.btnFacebook), this.btnLine.onClick(this, this.onClickAll, [this.btnLine]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnGM.onClick(this, this.onClickAll, [this.btnGM])
      }
    };
  _UIZhengJiView.UID = "ui://rzfeipymgy2l0", __decorateClass([UIProperty], _UIZhengJiView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "Banner", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtMain", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtKaiFu", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "btnFacebook", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "btnLine", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "btnGM", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtShiNum", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtShi", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtFenNum", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtFen", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtMiaoNum", 2), __decorateClass([UIProperty], _UIZhengJiView.prototype, "txtMiao", 2);
  var UIZhengJiView = _UIZhengJiView,
    ZhengJiView = class extends UIZhengJiView {
      constructor() {
        super(), this.gmNum = 0, this.checkSec = 0, this.layer = "Loading", this.maskType = 1, this.canMaskClick = !1, this.bgmId = 1
      }
      get noticeUrl() {
        let t = `sydh_${BaseConfig.gamePlat}_announcement.txt`;
        return ToolUtil.isRelease ? ToolUtil.get_urlBak("https://sydh-us-cdnres.joynetgame.com/cdnconfig_" + Math.floor(TimerMgr.inst.serverTime / 1e3) + "/serverlists/announcement/" + t) : `http://172.16.12.193/sydh_${BaseConfig.gamePlat}_announcement_open.txt`
      }
      onInit() {
        super.onInit(), Laya.loader.load(this.noticeUrl, Laya.Handler.create(this, this._loadNoticeDataComplete), null, Laya.Loader.TEXT)
      }
      _loadNoticeDataComplete(t) {
        if (null == t || null == t.data) return void this.close();
        const e = JSON.parse(t.data).data;
        0 === e.length ? this.close() : this._updateNotice(e)
      }
      onHide() {
        this._exitGame()
      }
      _exitGame() {
        ToolUtil.miniGame && 0 == ToolUtil.notice && wx.exitMiniProgram(), ToolUtil.notice = 0, LoginCtrl.inst.noticing = !1
      }
      onShow() {
        this.checkSec = 0;
        let t = fgui.UIPackage.branch;
        this.btnFacebook.c1.selectedIndex = "ru" == t ? 1 : 0
      }
      onClickAll(t) {
        if (t == this.btnFacebook) {
          let t = "https://www.facebook.com/legendofelement/";
          "ru" == fgui.UIPackage.branch && (t = "https://vk.com/legendofelements"), SdkMgr.navigateTo(t)
        } else t == this.btnClose ? this.close() : t == this.btnLine ? SdkMgr.navigateTo("https://discord.gg/SfCyzJ3pkr") : t == this.btnGM && ToolUtil.isW && (this.gmNum += 1, this.gmNum > 10 && (this.gmNum = 0, LoginCtrl.inst.serverList = {
          id: 1001,
          gname: "1001服",
          status: 1,
          tip: "",
          openTime: "2023-09-14 08:00:00",
          group: "0"
        }, NetManager.inst.setStep(6), BaseConfig.isSDK && UIManager.inst.openLoading(null, .38, 5e3)))
      }
      _updateNotice(t) {
        for (let e = 0; e < t.length; e++) {
          const i = t[e];
          4 == i.key && i.language == ToolUtil.currentLang.ext && (this._openTime = Number(i.key1), this.txtMain.text = i.content, this.txtKaiFu.text = i.title, this.updateTime())
        }
      }
      onUpdateSec() {
        this.updateTime(), this.checkSec < 60 ? this.checkSec += 1 : (this.checkSec = 0, Laya.loader.load(this.noticeUrl, Laya.Handler.create(this, this._loadNoticeDataComplete), null, Laya.Loader.TEXT))
      }
      updateTime() {
        let t = this._openTime - TimeUtil.serverSecTime,
          e = TimeUtil.formatDHMS(t, 6).split(":");
        if (e.length > 1 && (this.txtShiNum.text = e[0], this.txtFenNum.text = e[1], this.txtMiaoNum.text = e[2]), t <= 0) {
          let t = this.args[0];
          t && t(), this.close()
        }
      }
    },
    UIBtnFacebook = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "ZhengJiGongGao"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIBtnFacebook.UID = "ui://rzfeipymgy2ld", __decorateClass([UIController], UIBtnFacebook.prototype, "c1", 2);
  var BtnFacebook = class extends UIBtnFacebook {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIGongGaoMain = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "ZhengJiGongGao"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIGongGaoMain.UID = "ui://rzfeipymxzoxj", __decorateClass([UIProperty], UIGongGaoMain.prototype, "txtNotice", 2);
  var GongGaoMain = class extends UIGongGaoMain {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIZhengJiGongGaoList = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "ZhengJiGongGao"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIZhengJiGongGaoList.UID = "ui://rzfeipymf2hwl", __decorateClass([UIProperty], UIZhengJiGongGaoList.prototype, "Banner", 2), __decorateClass([UIProperty], UIZhengJiGongGaoList.prototype, "txtMainTitle", 2), __decorateClass([UIProperty], UIZhengJiGongGaoList.prototype, "txtNotice", 2);
  var ZhengJiGongGaoList = class extends UIZhengJiGongGaoList {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.txtNotice.on(Laya.Event.LINK, this, this.onLink)
      }
      onShow() {}
      onDestroy() {
        this.txtNotice && this.txtNotice.off(Laya.Event.LINK, this, this.onLink)
      }
      setData(t) {
        t.imgUrl && t.imgUrl.length > 0 && (this.Banner.url = t.imgUrl), this.txtNotice.text = t.content, this.txtMainTitle.text = t.title
      }
      onLink(t) {
        SdkMgr.navigateTo(t)
      }
      onClickAll(t) {}
    },
    _UIZhiFuBaoFuLiView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "ZhiFuBaoFuLi", this.name = "ZhiFuBaoFuLiView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnTianjia), this.btnTianjia.onClick(this, this.onClickAll, [this.btnTianjia]), this.openSubCom(this.btnGet), this.btnGet.onClick(this, this.onClickAll, [this.btnGet]), this.openSubCom(this.btnGot), this.btnGot.onClick(this, this.onClickAll, [this.btnGot]), this.openSubCom(this.btnGo), this.btnGo.onClick(this, this.onClickAll, [this.btnGo]), this.openSubCom(this.btnGet2), this.btnGet2.onClick(this, this.onClickAll, [this.btnGet2]), this.openSubCom(this.btnGot2), this.btnGot2.onClick(this, this.onClickAll, [this.btnGot2]), this.openSubCom(this.toolBar)
      }
    };
  _UIZhiFuBaoFuLiView.UID = "ui://0a7nfabro1vh0", __decorateClass([UIController], _UIZhiFuBaoFuLiView.prototype, "c1", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "bgImg", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "btnTianjia", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "btnGet", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "btnGot", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "txt_desc", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "txt_name", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "imgBg02", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "btnGo", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "btnGet2", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "btnGot2", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "txt_name_02", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "list_reward", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UIZhiFuBaoFuLiView.prototype, "fixHeight", 2);
  var UIZhiFuBaoFuLiView = _UIZhiFuBaoFuLiView,
    ZhiFuBaoFuLiView = class extends UIZhiFuBaoFuLiView {
      constructor() {
        super(), this.showtype = 1, this.layer = "Pop", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.bindRedPoint(this.btnTianjia.getChild("goRed"), 690), this.bindRedPoint(this.btnGo.getChild("goRed"), 691), this.bindRedPoint(this.btnGet.getChild("goRed"), 690), this.bindRedPoint(this.btnGet2.getChild("goRed"), 691), this.toolBar.setData([{
          title: ToolUtil.chinese(11601),
          redKey: 690
        }, {
          title: ToolUtil.chinese(11602),
          redKey: 691
        }], (t => {
          this.c1.selectedIndex = t, this.onShow()
        })), this.creatList(this.list_reward, ((t = 0, e) => {
          e.setData(this.list[t])
        })), ZhiFuBaoFuLiCtrl.inst.report(2, 1), ZhiFuBaoFuLiCtrl.inst.report(2, 2), this.btnGot.grayed = !0, this.btnGot2.grayed = !0, this.addEvent(MsgName.Zfb_Fuli, this.onShow)
      }
      onShow() {
        0 == this.c1.selectedIndex ? (this.showtype = 1, this.list = ZhiFuBaoFuLiCtrl.inst.alipay_set_page, ZhiFuBaoFuLiCtrl.inst.report(3, 1)) : (this.showtype = 2, this.list = ZhiFuBaoFuLiCtrl.inst.alipay_fufang, ZhiFuBaoFuLiCtrl.inst.report(3, 2)), this.list_reward.numItems = this.list.length;
        let t = ZhiFuBaoFuLiCtrl.inst.AlipayfufangDic.get(this.showtype);
        this.btnGo.visible = !0, this.btnTianjia.visible = !0, this.btnGet.visible = !1, this.btnGet2.visible = !1, this.btnGot.visible = !1, this.btnGot2.visible = !1, this.btnGot.enabled = !1, this.btnGot2.enabled = !1, 1 == t ? (this.btnGot.visible = !0, this.btnGot2.visible = !0, this.btnGo.visible = !1, this.btnTianjia.visible = !1) : 2 == this.showtype ? this.btnGet2.visible = 2 == t : this.btnGet.visible = 2 == t
      }
      onClickAll(t) {
        if (t == this.btnClose) this.close();
        else if (t == this.btnGo) {
          let t = {
            schema: "alipays://platformapi/startapp?appId=2021003125685383&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001206617%2Findex.html%3FcaprMode%3Dsync&chInfo=returnvisit&sms=YES&appClearTop=false"
          };
          FNSDK.invoke("zfbNavigateToGameCenter", t, (function(t, e, i) {
            FNCode.SUCC
          })), ZhiFuBaoFuLiCtrl.inst.report(4, 2)
        } else if (t == this.btnTianjia) {
          let t = {};
          FNSDK.invoke("zfbNavigateToGameCenter", t, (function(t, e, i) {
            FNCode.SUCC
          })), ZhiFuBaoFuLiCtrl.inst.report(4, 1)
        } else t == this.btnGet ? (ZhiFuBaoFuLiCtrl.inst.ReqAlipayFufangAward(1), ZhiFuBaoFuLiCtrl.inst.report(5, 1)) : t == this.btnGet2 ? (ZhiFuBaoFuLiCtrl.inst.ReqAlipayFufangAward(2), ZhiFuBaoFuLiCtrl.inst.report(5, 2)) : t == this.btnGot || this.btnGot2
      }
      taskStage() {
        let t = this;
        FNSDK.invoke("zfbGetFirstTaskState", {}, (function(e, i, s) {
          e == FNCode.SUCC && ("N" == s.status || (t.btnGet.visible = !0))
        }))
      }
    },
    _UIZhiFuBaoPayView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "ZhiFuBaoPay", this.name = "ZhiFuBaoPayView"
      }
      onInit() {
        this.btn_go.onClick(this, this.onClickAll, [this.btn_go]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btn_txt.onClick(this, this.onClickAll, [this.btn_txt]), this.btn_get.onClick(this, this.onClickAll, [this.btn_get])
      }
    };
  _UIZhiFuBaoPayView.UID = "ui://a8yu0tswji7f0", __decorateClass([UIController], _UIZhiFuBaoPayView.prototype, "c1", 2), __decorateClass([UIController], _UIZhiFuBaoPayView.prototype, "button", 2), __decorateClass([UIProperty], _UIZhiFuBaoPayView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIZhiFuBaoPayView.prototype, "btn_go", 2), __decorateClass([UIProperty], _UIZhiFuBaoPayView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIZhiFuBaoPayView.prototype, "img_banner", 2), __decorateClass([UIProperty], _UIZhiFuBaoPayView.prototype, "btn_txt", 2), __decorateClass([UIProperty], _UIZhiFuBaoPayView.prototype, "ListGoods", 2), __decorateClass([UIProperty], _UIZhiFuBaoPayView.prototype, "btn_get", 2), __decorateClass([UIProperty], _UIZhiFuBaoPayView.prototype, "fixHeight", 2);
  var UIZhiFuBaoPayView = _UIZhiFuBaoPayView,
    {
      regClass: regClass195,
      property: property193
    } = Laya,
    ZhiFuBaoPayCtrl = class extends BaseCtrl {
      constructor() {
