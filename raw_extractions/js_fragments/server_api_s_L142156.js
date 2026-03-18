// Fragment: server_api_s_L142156.js
// Lines: 142156-142279 of bundle-beautified.js
// Categories: Server/API
// Keywords: api
// Hit lines: 142161, 142179

        let s = NativeToJs.extObj,
          o = FnsdkMgr.DeviceInfo,
          n = JSON.parse(s.ext),
          r = LoginCtrl.inst,
          a = t.wp,
          l = `https://api.aiysm.com/api2/page/wap/safari?pay_money=${this.encode(i)}&client_id=${this.encode(a.fngid)}&serverId=${this.encode(r.zoneid)}&callback_info=${this.encode(r.charid+"_"+e)}&role_id=${this.encode(a.roleId)}&role_name=${this.encode(a.roleName)}&username=${this.encode(s.name)}&url_scheme=ssjjsy${this.encode(a.fngidOld)}&device=${this.encode(o.deviceName)}&nm=${this.encode(o.networkName)}&osVersion=${this.encode(o.osVersion)}&appVersion=${this.encode(a.appVersion)}&did=${this.encode(o.deviceId)}&os=iOS&deviceType=${this.encode(o.deviceType)}&screen=${this.encode(a.screen)}&suid=${this.encode(s.uid)}&timestamp=${this.encode(TimeUtil.serverSecTime)}&p_client_id=${this.encode(a.fngidOld)}&oauth_token=${this.encode(n.access_token)}`;
        console.log("=============payWeb:" + l), FNSDK.isSupport("showWebView", (e => {
          if (!e) return void console.log("isWebPay notSupport showWebView=============:");
          let i = {};
          i.webUrl = l, FNSDK.invoke("showWebView", i, ((e, i, s) => {
            e == FNCode.SUCC ? (t.payWaiting = !1, TimerMgr.inst.removeTimeTask(t.payTimeId), ApmUtil.inst.SendInfoToApm(1205, "打开活动页成功")) : (UIManager.inst.openMsg("打开web失败"), ApmUtil.inst.SendInfoToApm(1204, `切url失败：${l}`))
          }))
        }))
      }
      static encode(t) {
        return encodeURIComponent(t)
      }
      static isWebPay(e, i) {
        let s = Cfgrecharge.get(e),
          o = {};
        o.price = i ? i.toString() : s.money.toString();
        let n = t.wp,
          r = NativeToJs.extObj,
          a = `https://api.aiysm.com/api2/admin/open/is_cz?&client_id=${this.encode(n.fngid)}&channel_id=${this.encode(0)}&appVersion=${this.encode(n.appVersion)}&os=iOS&suid=${this.encode(r.uid)}&username=${this.encode(r.name)}&pay_money=${this.encode(o.price)}&p_client_id=${this.encode(n.fngidOld)}`;
        console.log("isWebPay=============:" + a), HttpManager.inst.httpReqGetJson(a, ((s, n) => {
          var r;
          console.log("=============httpReqGetJson ok>>>>" + a, s, n), "1" == String(null == (r = null == n ? void 0 : n.data) ? void 0 : r.open) ? t.payWeb(e, o.price) : (t.innerPay(e, i), TimerMgr.inst.removeTimeTask(t.payTimeId)), console.log("=============httpReqGetJson data>>>>" + JSON.stringify(n))
        }), ((t, e) => {
          console.error("=============httpReqGetJson error>>>>" + a, t, e)
        }), !0, 1)
      }
      static innerPay(e, i) {
        t.payWaiting && (t.payWaiting = !1, PayMgr.pay(e, i))
      }
      static getWebPayParam(e, i) {
        if (t.payWaiting = !0, t.payTimeId = TimerMgr.inst.addTimerTask(1, 3e3, (() => {
            t.innerPay(e, i), console.log("isWebPay 超时转内购=============:")
          }), this), t.wp) t.isWebPay(e, i);
        else {
          var s = {
            client_id: "",
            channel_id: "",
            appVersion: "",
            os: "",
            suid: "",
            username: "",
            paymoney: "",
            pay_money: "",
            fngid: "",
            serverId: "",
            callbackInfo: "",
            roleId: "",
            roleName: "",
            userName: "",
            urlScheme: "",
            device: "",
            nm: "",
            osVersion: ""
          };
          s.appVersion = "", s.deviceId = "", s.os = "", s.deviceType = "", s.screen = "", s.suid = "", s.timestamp = "", s.fngidOld = "", FNSDK.invoke("getFNInfo", s, ((s, o, n) => {
            t.wp = n, console.log("getFNInfo============="), console.log(JSON.stringify(n)), console.log("getFNInfo=============22"), t.isWebPay(e, i)
          }))
        }
      }
    };
  _PayWebMgr.payTimeId = 0, _PayWebMgr.payWaiting = !1;
  var PayWebMgr = _PayWebMgr,
    import_proto27 = __toESM(require_proto()),
    _PayCtrl = class t extends BaseCtrl {
      constructor() {
        super(), this._todayPay = 0, this.init()
      }
      static get inst() {
        return null == t._instance && (t._instance = new t), t._instance
      }
      get todayPay() {
        return this._todayPay
      }
      get TotalPay() {
        return this._totalPay
      }
      get TotalMonety() {
        return this._totalMoney
      }
      get isFirstPay() {
        return this.TotalMonety && this.TotalMonety <= 0
      }
      onInit() {}
      registS2CHandler() {
        this.addS2CHandle("pay.PayInfo", this.pay_PayInfo), this.addS2CHandle("pay.PrivilegeCardInfo", this.pay_PayInfPrivilegeCardInfo), this.addS2CHandle("pay.RetBuyAdTimes", this.pay_RetBuyAdTimes), this.addS2CHandle("pay.RetCheckPay", this.pay_RetCheckPay), this.addS2CHandle("pay.RetPayConfig", this.RetPayConfig), this.addS2CHandle("pay.NotifyPayInfo", this.NotifyPayInfo)
      }
      pay_PayInfo(t) {
        this._totalMoney <= 0 && t.totalMoney > 0 && HwFnsdkMgr.hw_api_logEventLog("First_Purchase", "首充"), this._totalPay = t.totalPay, this._totalMoney = t.totalMoney, this._todayPay = t.todayPay, CopysBossCtrl.inst.setCrossBossRewardRedPoint(), VIPCtrl.inst.refreshVipByPay(), EventDispatcher.inst.dispatchEvent(MsgName.Pay_Push_PayInfo, t)
      }
      pay_PayInfPrivilegeCardInfo(t) {
        this.privilege_cards = t.privilegeCards, this.dispatchEvent(MsgName.Pay_LifeCard)
      }
      pay_RetBuyAdTimes(t) {
        this.callback && (this.callback.runWith(t.ret), this.callback = null), 0 == t.ret && UIManager.inst.openMsg(ToolUtil.chinese(1435))
      }
      pay_RetCheckPay(t) {
        if (t.ret)
          if (ToolUtil.inAppIos && !ToolUtil.inAppHw) try {
            PayWebMgr.getWebPayParam(t.payId, t.money)
          } catch (e) {
            PayMgr.pay(t.payId, t.money)
          } else PayMgr.pay(t.payId, t.money)
      }
      RetPayConfig(t) {
        this.dispatchEvent(MsgName.Pay_RetPayConfig, t)
      }
      ReqPayConfig(t) {
        let e;
        e = "number" == typeof t ? {
          payId: [t]
        } : {
          payId: t
        }, this._netManager.send("pay.ReqPayConfig", e)
      }
      pay_ReqBuyAdTimes(t) {
        this.callback = t, this._netManager.send("pay.ReqBuyAdTimes", {})
      }
      getPrivilegeCardInfo(t) {
        return this.privilege_cards[t]
