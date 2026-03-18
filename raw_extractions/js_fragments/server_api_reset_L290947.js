// Fragment: server_api_reset_L290947.js
// Lines: 290947-291147 of bundle-beautified.js
// Categories: Server/API
// Keywords: socket, websocket
// Hit lines: 290948, 290976, 290997, 290998, 290999, 291000, 291001, 291002, 291003, 291004, 291023, 291051

      reset() {
        this.connected = !1, this.connecting = !1, this.socket = null
      }
      verifyVersion() {
        let t = {
          version: 0
        };
        this.send("login.bifrost.VerifyVersion", t)
      }
      fengNiaoLogin() {
        let t = NetManager.inst.loginData;
        if (null == t) return;
        let e = {};
        e.name = t.name, e.uid = t.uid;
        let i = FnsdkMgr.inst.isMiniGame || ToolUtil.inAppHuawei ? JSON.stringify(JSON.parse(JSON.stringify(t.ext))) : t.ext;
        e.ext = i, e.zoneid = 0, this.send("login.bifrost.FengNiaoLogin", e)
      }
      quickLogin(t) {
        let e = {};
        e.uuid = t, e.password = "1", e.zoneid = 0, this.send("login.bifrost.QuickLogin", e)
      }
      getUuid() {
        var t, e;
        return null != (e = null == (t = NetManager.inst.loginData) ? void 0 : t.uuid) ? e : this.uuid
      }
      connectBifrost(t, e, i) {
        this.callback = e, this.bifrost = t, this.uuid = null != i ? i : this.getUuid();
        const s = this;
        return this.close(), this.timeTaskId = TimerMgr.inst.addTimerTask(1, 5e3, (() => {
          this.connected ? TimerMgr.inst.removeTimeTask(this.timeTaskId) : (this.socket && this.socket.close(), this.reset(), this.connectBifrost(s.bifrost, s.callback, s.uuid))
        }), this), new Promise((function(t, e) {
          s.connected ? t.apply(null, null) : s.connect(s.bifrost).then((() => {
            s.verifyVersion(), BaseConfig.isSDK ? s.fengNiaoLogin() : s.quickLogin(s.getUuid()), t.apply(null, null)
          })).catch((t => {
            e(t)
          }))
        }))
      }
      connect(t) {
        return __async(this, null, (function*() {
          try {
            yield this._connect(t)
          } catch (t) {
            throw t
          }
        }))
      }
      _connect(t) {
        const e = this;
        return new Promise((function(i, s) {
          console.log("NetMgr WebSocket url:" + t), e.socket = new WebSocket(t), e.socket.binaryType = "arraybuffer", e.socket.onopen = () => {
            console.log("NetMgr WebSocket connected."), e.errorCnt = 0, e.connected = !0, e.connecting = !1, i.apply(null, null)
          }, e.socket.onmessage = t => {
            console.log("NetMgr WebSocket meesage." + e.errorCnt), e.on_recv(t.data)
          }, e.socket.onclose = t => {
            console.log("NetMgr WebSocket closed." + e.errorCnt), e.reset()
          }, e.socket.onerror = t => {
            e.errorCnt++, console.error("NetMgr WebSocket onerror." + e.errorCnt), e.reset(), s.apply(t)
          }
        }))
      }
      send(t, e) {
        "string" != typeof t && (t = t.getTypeUrl().split("/")[1]);
        const i = t.length + 1,
          s = t.split(".");
        let o;
        o = 2 == s.length ? import_proto329.default[s[0]][s[1]] : import_proto329.default[s[0]][s[1]][s[2]];
        const n = o.encode(e).finish(),
          r = NetManager.headSize() + i + n.length,
          a = new ArrayBuffer(r),
          l = new DataView(a);
        let c = 0;
        l.setUint16(c, 2, !0), c += NetManager.cmdid_size_len, l.setUint8(c, i), c += NetManager.name_size_len, l.setUint16(c, n.length, !0), c += NetManager.payload_size_len;
        const h = new Uint8Array(i);
        for (let e = 0; e < t.length; ++e) h[e] = t.charCodeAt(e);
        new Uint8Array(a, c, i).set(h), c += i;
        new Uint8Array(a, c, n.length).set(new Uint8Array(n)), this.connected && this.socket.send(a)
      }
      on_recv(t) {
        const e = new DataView(t);
        let i = 0;
        i += NetManager.cmdid_size_len;
        const s = e.getUint8(i);
        i += NetManager.name_size_len;
        e.getUint16(i, !0);
        i += NetManager.payload_size_len;
        const o = NetManager.inst.bytes2UTF8Str(new Uint8Array(t.slice(i, i + s - 1)));
        i += s;
        const n = o.split(".");
        let r;
        const a = n.length;
        if (a > 1) {
          const t = import_proto329.default[n[0]];
          if (t) {
            const e = t[n[1]];
            r = 2 == a ? e : e[n[2]]
          }
        }
        if (r) {
          const e = r.decode(new Uint8Array(t.slice(i)));
          this.close(), this.callback && this.callback.runWith(e)
        }
      }
      close() {
        TimerMgr.inst.removeTimeTask(this.timeTaskId), this.socket && this.socket.close(), this.reset()
      }
    };
  _NetMgr._instance = null;
  var NetMgr = _NetMgr,
    _UILoginView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Login", this.name = "LoginView"
      }
      onInit() {
        this.btnEnter.onClick(this, this.onClickAll, [this.btnEnter])
      }
    };
  _UILoginView.UID = "ui://rrtqxg8yj5pq0", __decorateClass([UIProperty], _UILoginView.prototype, "ldbg", 2), __decorateClass([UIProperty], _UILoginView.prototype, "btnEnter", 2), __decorateClass([UIProperty], _UILoginView.prototype, "txtInput", 2), __decorateClass([UIProperty], _UILoginView.prototype, "txtSever", 2), __decorateClass([UIProperty], _UILoginView.prototype, "list", 2);
  var UILoginView = _UILoginView,
    _UISelectSeverView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Server", this.name = "SelectSeverView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnGM.onClick(this, this.onClickAll, [this.btnGM]), this.openSubCom(this.toolBar), this.addOpenAni(this.openAni), this.addCloseAni(this.closeAni)
      }
    };
  _UISelectSeverView.UID = "ui://r7zidv8vefik1f", __decorateClass([UIProperty], _UISelectSeverView.prototype, "list", 2), __decorateClass([UIProperty], _UISelectSeverView.prototype, "childList", 2), __decorateClass([UIProperty], _UISelectSeverView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UISelectSeverView.prototype, "btnGM", 2), __decorateClass([UIProperty], _UISelectSeverView.prototype, "toolBar", 2), __decorateClass([UITransition], _UISelectSeverView.prototype, "openAni", 2), __decorateClass([UITransition], _UISelectSeverView.prototype, "closeAni", 2);
  var UISelectSeverView = _UISelectSeverView,
    UISeverItem = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "Server"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UISeverItem.UID = "ui://r7zidv8vefik1i", __decorateClass([UIController], UISeverItem.prototype, "c1", 2), __decorateClass([UIProperty], UISeverItem.prototype, "select", 2);
  var SeverItem = class extends UISeverItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    _SelectSeverView = class t extends UISelectSeverView {
      constructor() {
        super(), this.showType = 0, this.curSelectLanguage = null, this.curSelectServer = null, this.lastChild = null, this.gmNum = 0, this.listServer = [], this.dicServerList = new Map, this.dicServer = new Map, this.allServer = new Map, this.regionList = new Map, this.comServer = new Map, this.COUNTRY_NUM = 4, this.barIdx = 0, this.servers = new Map, this.curChild = -1, this.curIndex = -1, this.countryNum = 4, this.isCom = !0, this.maskType = 1, this.layer = "Top", this.canMaskClick = !1
      }
      onInit() {
        super.onInit(), this.regionList.set(0, ["ESTEN", "PT", "ES", "ESPT", "EN"]), this.regionList.set(1, ["EU", "FR", "DE", "TR", "RU"]), this.toolBar.setData([{
          title: ToolUtil.chinese(12299)
        }, {
          title: ToolUtil.chinese(12298)
        }], (t => {
          this.onBarClick(t)
        }), !1), this.toolBar.selectIdx = "mix_us" == BaseConfig.gamePlat ? 0 : 1;
        const t = ConfigManager.inst.GetXmlConfig("country_infos");
        this.COUNTRY_NUM = 1 == t.enable ? 4 : 1, this.creatList(this.list, this.onListItemRenderer, this.listItemProvider, this.onListClick, !0), this.creatList(this.childList, this.onChildItemRenderer, this.childItemProvider, this.onChildClick, !0)
      }
      onBarClick(e, i) {
        this.list.numItems = 0, this.childList.numItems = 0, this.barIdx = e;
        const s = t.roles.get(this.barIdx);
        s ? this.onBifrostCompleted({
          list: s
        }) : NetMgr.inst.connectBifrost(0 == this.barIdx ? ToolUtil.bifrost_us1 : ToolUtil.bifrost_us2, Laya.Handler.create(this, this.onBifrostCompleted.bind(this)), localStorage.getItem("fixed_login_uuid"))
      }
      onBifrostCompleted(e) {
        t.curRoles = e.list ? e.list : [], t.roles.set(this.barIdx, t.curRoles);
        const i = this.servers.get(this.barIdx);
        if (i) this.onSetDate(0, i);
        else {
          let t = ToolUtil.urlServer(0 == this.barIdx ? "mix_us" : "mix_us2");
          HttpManager.inst.httpReqGetJson(t, this.onCompleted.bind(this))
        }
      }
      onCompleted(t, e) {
        this.servers.set(this.barIdx, e), e.sort(((t, e) => {
          let i = t.id;
          i > ToolUtil.spZone && (i = Math.floor(i / 1e3));
          let s = e.id;
          return s > ToolUtil.spZone && (s = Math.floor(s / 1e3)), i - s
        })), this.onSetDate(t, e)
      }
      onSetDate(e, i) {
        var s, o;
        this.listServer = [], this.dicServerList.clear(), this.dicServer.clear(), this.allServer.clear(), this.comServer.clear();
        let n = i.length;
        const r = ToolUtil.chinese(2193);
        this.dicServer.has(r) || (this.listServer.push([0, r]), this.dicServer.set(r, []));
        for (let e = t.curRoles.length - 1; e >= 0; e--) {
          let s = t.curRoles[e];
          for (let t = 0; t < n; t++) {
            if (i[t].id == s.zoneid) {
              this.dicServer.get(r).includes(s.zoneid) || this.dicServer.get(r).push(s.zoneid), this.comServer.has(s.zoneid) || this.comServer.set(s.zoneid, []), this.comServer.get(s.zoneid).push(s.country);
              break
            }
          }
