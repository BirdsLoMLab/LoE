// Fragment: formula_s_L124065.js
// Lines: 124065-124265 of bundle-beautified.js
// Categories: Formula, Server/API
// Keywords: Math.max, Math.min, http, joynetgame, token, websocket
// Hit lines: 124067, 124068, 124140, 124174, 124177, 124187, 124193, 124206, 124233, 124265

        const s = performance.now() - t._lastPertime,
          o = performance.now() - i.curTime,
          n = Math.max(t.maxDelta - s, t.minDelta);
        return o >= Math.min(n, i.skipTime)
      }
    };
  _TimerMgr._lastRTime = 0, _TimerMgr._lastPertime = 0, _TimerMgr.maxDelta = 40, _TimerMgr.minDelta = 1, _TimerMgr.assetMgr = 1, _TimerMgr.uiOpen = 2, _TimerMgr.uiClose = 3, _TimerMgr._ctime = {}, _TimerMgr._instance = null;
  var TimerMgr = _TimerMgr,
    {
      regClass: regClass4,
      property: property4
    } = Laya,
    HttpManager = class {
      constructor() {
        this._httpReqId = 0, this._httpReqDict = new Map
      }
      reset() {
        this.abortAllHttpReq()
      }
      static get inst() {
        return null == HttpManager._instance && (HttpManager._instance = new HttpManager, SingletonMgr.register(HttpManager._instance)), HttpManager._instance
      }
      httpReqGetJson(t, e, i, s = !1, o = HttpReqNode.ERROR_MAX_TIMES, n = "json") {
        let r = new HttpReqNode;
        this._httpReqId++;
        let a = this._httpReqId;
        this._httpReqDict.set(this._httpReqId, r);
        let l = {
          method: "get",
          url: t,
          reqNum: 1,
          reqNumMax: o,
          resType: n,
          onSuccess: (t, i) => {
            this._httpReqDict.delete(a), null == e || e(t, i)
          },
          onError: (t, e) => {
            this._httpReqDict.delete(a), null == i || i(t, e)
          },
          no_ran: s
        };
        return r.getByParam(l), a
      }
      httpReqPost(t, e, i, s, o = "json") {
        let n = new HttpReqNode;
        this._httpReqId++;
        let r = this._httpReqId;
        return this._httpReqDict.set(this._httpReqId, n), n.post(t, e, o, ((t, e) => {
          this._httpReqDict.delete(r), null == i || i(t, e)
        }), ((t, e) => {
          this._httpReqDict.delete(r), null == s || s(t, e)
        })), r
      }
      abortHttpReq(t) {
        let e = this._httpReqDict.get(t);
        e && e.abort(), this._httpReqDict.delete(t)
      }
      abortAllHttpReq() {
        for (const [t, e] of this._httpReqDict.entries()) e.abort();
        this._httpReqDict.clear(), this._httpReqId = 0
      }
    };
  HttpManager._instance = null, HttpManager = __decorateClass([regClass4("4EQNDkyiQEqdEDKEtR_gbw")], HttpManager);
  var HttpReq = class extends Laya.HttpRequest {
      constructor() {
        super()
      }
      send(t, e = null, i = "get", s = "json", o = null) {
        super.send(t, e, i, s, o), this._http.onreadystatechange = () => {
          (this._http.status < 200 || this._http.status > 400) && this._onError(this._http)
        }
      }
    },
    _HttpReqNode = class t {
      constructor() {
        this._httpRequest = new HttpReq, this._httpRequest.http.timeout = t.TIMEOUT_TIME, this._httpRequest.once(Laya.Event.COMPLETE, this, this._onCompleteHandler), this._httpRequest.on(Laya.Event.ERROR, this, this._onErrorHandler), this._httpRequest.on(Laya.Event.PROGRESS, this, this._onProcessHandler)
      }
      get(e, i = "text", s, o, n = !1) {
        this._requestBody = {
          method: "get",
          url: e,
          reqNum: 1,
          reqNumMax: t.ERROR_MAX_TIMES,
          resType: i,
          onSuccess: s,
          onError: o,
          no_ran: n
        }, this._send("get", i)
      }
      getByParam(t) {
        this._requestBody = t, this._send("get", t.resType)
      }
      post(e, i, s = "text", o, n, r = !1) {
        this._requestBody = {
          method: "post",
          url: e,
          reqNum: 1,
          reqNumMax: t.ERROR_MAX_TIMES,
          data: i,
          resType: s,
          onSuccess: o,
          onError: n,
          no_ran: r
        }, this._send("post", s)
      }
      postByParam(t) {
        this._requestBody = t, this._send("get", t.resType)
      }
      abort() {
        this._httpRequest.http.abort(), this._httpRequest.offAllCaller(this), delete this._httpRequest
      }
      _send(t, e = "text") {
        if (Debug.Log(Debug.Tag_Mod_Res, `http 请求: ${this._requestBody.url}`), "get" == t) {
          const i = this._requestBody;
          this._httpRequest.send(i.url + (this._requestBody.no_ran ? "" : "?v=" + Laya.timer.currTimer), null, t, e)
        } else if ("post" == t) {
          const i = this._requestBody;
          this._httpRequest.send(i.url + (this._requestBody.no_ran ? "" : "?v=" + Laya.timer.currTimer), i.data, t, e)
        }
      }
      _onCompleteHandler(t) {
        const e = this._requestBody;
        e.onSuccess(this._httpRequest.http.status, this._httpRequest.data), 2 < e.reqNum && e.reqNum < 6 && ApmUtil.inst.SendInfoToApm(9997, "备域名的游戏服列表成功")
      }
      _onErrorHandler(e) {
        var i, s;
        const o = this._requestBody;
        let n = null != (i = o.reqNumMax) ? i : t.ERROR_MAX_TIMES;
        console.log("http请求失败次数", `${o.reqNum}/${n}`, "次\n", o.url), o.reqNum < n ? (o.reqNum % 3 == 0 && (o.url.includes(Laya.loader.cdn) ? o.url = o.url.replace(Laya.loader.cdn, Laya.loader.cdnbak) : o.url = o.url.replace(Laya.loader.cdnbak, Laya.loader.cdn)), o.reqNum++, this._send(o.method, o.resType)) : null == (s = o.onError) || s.call(o, this._httpRequest.http.status, this._httpRequest.data)
      }
      _onProcessHandler(t) {}
    };
  _HttpReqNode.TIMEOUT_TIME = 3e3, _HttpReqNode.ERROR_MAX_TIMES = 9;
  var HttpReqNode = _HttpReqNode,
    import_proto = __toESM(require_proto()),
    {
      regClass: regClass5,
      property: property5
    } = Laya,
    NetManager = class {
      constructor() {
        this.connectStep = 0, this.heatTime = 0, this.heatNum = 0, this.waitSend = new Map, this.waitTime = 0, this.isWait = !1, this.isKick = !1, this.isnetStatus = !0, this.isInMap = !1, this.BifrostOk = !1, this.tokenLogin_ok = !1, this._errorCnt = 0, this.sbgpReplaceStr = "sgwss-mix-us-sydh.joynetgame.com", this.sbgpReplaceStr_new = this.sbgpReplaceStr, this.sbgpReplaceStr_2 = "sbgp.edgebgp.com", this.step = 0, this.disconnectHanndler = new Array, this.dispatcher = new Map, FnsdkMgr.inst.isMiniGame ? (wx.onNetworkStatusChange((t => {
          console.log("net state:" + t.isConnected), 0 == this.isnetStatus && 1 == t.isConnected && NetManager.inst.reconnect(!0), this.isnetStatus = t.isConnected
        })), wx.onHide((function() {
          EventDispatcher.inst.dispatchEvent(MsgName.Msg_App_SHow_Hide, !1)
        })), wx.onShow((function() {
          EventDispatcher.inst.dispatchEvent(MsgName.Msg_App_SHow_Hide, !0)
        }))) : (window.addEventListener("online", (function() {
          NetManager.inst.isnetStatus = !0
        })), window.addEventListener("offline", (function() {
          NetManager.inst.isnetStatus = !1
        })), Laya.stage.on(Laya.Event.VISIBILITY_CHANGE, this, (function() {
          EventDispatcher.inst.dispatchEvent(MsgName.Msg_App_SHow_Hide, Laya.stage.renderingEnabled)
        })), Laya.stage.on(Laya.Event.FOCUS_CHANGE, this, (function() {
          EventDispatcher.inst.dispatchEvent(MsgName.Msg_App_SHow_Hide, Laya.stage.isFocused)
        })), window[this.__proto__.constructor.name] = this)
      }
      static headSize() {
        return this.cmdid_size_len + this.name_size_len + this.payload_size_len
      }
      reset() {}
      static get inst() {
        return null == NetManager._instance && (NetManager._instance = new NetManager, SingletonMgr.register(NetManager._instance)), NetManager._instance
      }
      connectBifrost(t) {
        const e = this;
        return this.uuid = t, new Promise((function(i, s) {
          e.isConnected() && 1 == e.connectType ? i.apply(null, null) : e.disconnect(Laya.Handler.create(e, (() => {
            console.log("websocket 开始 connectBifrost"), e.connecting = !0, e.connect(ToolUtil.bifrost).then((() => {
              ToolUtil.logCustomEventGame("conn_game_server_succ"), e.connectType = 1, e.BifrostOk = !0, e.verifyVersion(), BaseConfig.isSDK ? e.fengNiaoLogin() : e.quickLogin(t), i.apply(null, null)
            })).catch((t => {
              ToolUtil.logCustomEventGame("conn_game_server_fail"), s(t)
            }))
          })))
        }))
      }
      fengNiaoLogin() {
        if (1 != this.connectType) return;
        let t = this.loginData;
        if (null == t) return;
        let e = {};
        if (e.name = t.name, e.uid = t.uid, ToolUtil.inH5Web) e.ext = JSON.stringify(t.ext);
        else {
          let i = FnsdkMgr.inst.isMiniGame || ToolUtil.inAppHuawei ? JSON.stringify(JSON.parse(JSON.stringify(t.ext))) : t.ext;
          e.ext = i
        }
        this.ext = e.ext, e.zoneid = 0, this.send("login.bifrost.FengNiaoLogin", e), Loading.inst.onShow(null, .41, 1e3), ToolUtil.logCustomEventGame("login_verify_start")
      }
      verifyVersion() {
        let t = {
          version: 0
        };
        this.send("login.bifrost.VerifyVersion", t)
      }
      quickLogin(t) {
        let e = {};
        e.uuid = t, e.password = "1", e.zoneid = 0, this.send("login.bifrost.QuickLogin", e)
      }
      tokenLogin(t, e, i) {
        let s = {};
        if (s.version = BaseConfig.appVersion, s.uuid = t, s.token = e, s.reconnect = i, s.loginZoneid = LoginCtrl.inst.loginZoneid, s.loginLanguage = ToolUtil.currentLang.ext, s.language = ToolUtil.currentLang.ext, this.send("login.TokenLogin", s), Loading.inst.onShow(null, .44, 1e3), BaseConfig.isSDK) {
