// Fragment: server_api_L124281.js
// Lines: 124281-124481 of bundle-beautified.js
// Categories: Server/API
// Keywords: api, socket, token, websocket
// Hit lines: 124282, 124301, 124322, 124326, 124351, 124353, 124354, 124355, 124357, 124358, 124363, 124373, 124380, 124397, 124431, 124448, 124449

      static getZoneLangInfo() {
        HttpManager.inst.httpReqGetJson("https://apiapm.ssgamescenter.com/api/v2/ip/query", ((t, e) => {
          console.warn("getZoneLangInfo>>>>>" + JSON.stringify(e)), this.zoneLangInfo.cityName = e.city_name, this.zoneLangInfo.countryName = e.country_name, this.zoneLangInfo.regionName = e.region_name, this.zoneLangInfo.ispDomain = e.isp_domain, this.zoneLangInfo.ownerDomain = e.owner_domain
        }))
      }
      static getInfo() {
        let t = {
          fngid: "",
          projectId: "",
          fnpid: "",
          cid: ""
        };
        FNSDK.invoke("getFNInfo", t, ((t, e, i) => {
          FnsdkMgr.fnInfo = i, console.log("getFNInfo-------------" + JSON.stringify(FnsdkMgr.fnInfo)), ToolUtil.inAppIos && NetManager.inst.setFnPlatformInfo("", null == i ? void 0 : i.fngid)
        })), FNSDK.invoke("getPlatformInfo", {}, ((t, e, i) => {
          FnsdkMgr.PlatformInfo = i, ToolUtil.inAppIos || NetManager.inst.setFnPlatformInfo(null == i ? void 0 : i.fnpid, null == i ? void 0 : i.fngid), console.log("getPlatformInfo-------------" + JSON.stringify(FnsdkMgr.PlatformInfo))
        }))
      }
      sendFirebaseToken(t) {
        let e = {};
        e.token = t, this.send("misc.ReqPushToken", e)
      }
      getPackId() {
        return ToolUtil.inAppAndroid ? import_proto.default.login.platform.PACK_ID_TYPE.PACK_ID_TYPE_ANDROID : ToolUtil.inAppIos ? import_proto.default.login.platform.PACK_ID_TYPE.PACK_ID_TYPE_IOS : ToolUtil.isAlipayMiniGame && Laya.Browser.platform == Laya.Browser.PLATFORM_PC ? import_proto.default.login.platform.PACK_ID_TYPE.PACK_ID_TYPE_ALI_PC : import_proto.default.login.platform.PACK_ID_TYPE.PACK_ID_TYPE_NONE
      }
      setFnPlatformInfo(t, e) {
        this._Fnp_msg = {
          fnpid: t,
          fngid: e
        }, this._trySendFnPlatformInfo(), (FnsdkMgr.inst.isHezi() || FnsdkMgr.inst.isHaoyou() || FnsdkMgr.inst.isTapTap()) && Loading.inst.setLabel2()
      }
      _trySendFnPlatformInfo() {
        this._Fnp_msg && this.tokenLogin_ok && this._FnPlatformInfo(this._Fnp_msg.fnpid, this._Fnp_msg.fngid)
      }
      _FnPlatformInfo(t, e) {
        let i = {};
        i.fnpid = t, i.fngid = e, this.send("login.platform.FnPlatformInfo", i)
      }
      connectGame(t, e, i, s = !1) {
        if (LoginCtrl.beKickOff) return;
        if (this.connecting && this.isConnected() && 2 == this.connectType && this.url === t) return;
        this.uuid = e, this.token = i, this.url = t;
        const o = this;
        return new Promise((function(n, r) {
          o.disconnect(Laya.Handler.create(o, (() => {
            console.log("websocket 开始 connectGame"), o.connecting = !0, o.connect(t).then((() => {
              o.connectType = 2, o.tokenLogin(e, i, s), n.apply(null, null)
            })).catch((t => {
              o.connecting = !1, r(t)
            }))
          })))
        }))
      }
      connect(t) {
        return __async(this, null, (function*() {
          for (; this.disconnectHanndler.length > 0;) this.disconnectHanndler.pop().recover();
          try {
            yield this._connect(t)
          } catch (t) {
            throw t
          }
        }))
      }
      get usebgp() {
        return this.sbgpReplaceStr_new == this.sbgpReplaceStr_2
      }
      _connect(t) {
        const e = this;
        return new Promise((function(i, s) {
          let o = t.replace(e.sbgpReplaceStr, e.sbgpReplaceStr_new);
          console.log("WebSocket url:" + t, " trueUrl:" + o), ApmUtil.sendIosTs(`WebSocket url: ${o}`), e.socket = new WebSocket(o), e.usebgp && ApmUtil.inst.SendInfoToApm(9991, "connect sbgp.edgebgp.com"), ToolUtil.inAppNative && (e.removeTimer(), e._timer = TimerMgr.inst.addTimerTask(1, 3e3, (() => {
            !e.connected && e.connecting && e.cntError(null)
          }), e)), e.socket.binaryType = "arraybuffer", e.socket.onopen = () => {
            console.log("WebSocket connected."), e.removeTimer(), e._errorCnt = 0, e.connected = !0, e.heatTime = 0, e.connecting = !1, i.apply(null, null)
          }, e.socket.onmessage = t => {
            e.on_recv(t.data)
          }, e.socket.onclose = t => {
            for (console.log("WebSocket closed." + e._errorCnt, e.connected, e.connecting), e.connected = !1, e.connecting = !1; e.disconnectHanndler.length > 0;) {
              const t = e.disconnectHanndler.pop();
              t.run(), t.recover()
            }
            1 != e._errorCnt && 2 != e._errorCnt && (1 == e.connectType || e.BifrostOk ? e.reconnect() : e.reconnectBifronst())
          }, e.socket.onerror = t => {
            e.cntError(t), s.apply(t)
          }
        }))
      }
      removeTimer() {
        this._timer && (TimerMgr.inst.removeTimeTask(this._timer), this._timer = null)
      }
      cntError(t) {
        let e = this;
        e.connected = !1, e.connecting = !1, e._errorCnt++, console.log("WebSocket _errorCnt:" + e._errorCnt, t), 1 == e._errorCnt ? TimerMgr.inst.addTimerTask(1, 2e3, (() => {
          1 == e.connectType || e.BifrostOk ? e.reconnect(!0) : e.reconnectBifronst()
        }), e) : 2 == e._errorCnt ? (e.sbgpReplaceStr_new = e.sbgpReplaceStr_2, TimerMgr.inst.addTimerTask(1, 2e3, (() => {
          1 == e.connectType || e.BifrostOk ? e.reconnect(!0) : e.reconnectBifronst()
        }), e)) : 3 == e._errorCnt && (FnsdkMgr.inst.isMiniGame && FnsdkMgr.inst.wxRestart(ToolUtil.chinese(1021), ToolUtil.chinese(1022), ToolUtil.chinese(1027), ToolUtil.chinese(1028), !1), e.usebgp && ApmUtil.inst.SendInfoToApm(9992, "connect faild：sbgp.edgebgp.com"))
      }
      disconnect(t) {
        console.log("WebSocket disconnected."), (this.connected || this.connecting) && this.socket ? (t && this.disconnectHanndler.push(t), this.socket.close()) : t && (t.run(), t.recover())
      }
      send(t, e) {
        "string" != typeof t && (t = t.getTypeUrl().split("/")[1]);
        const i = t.length + 1,
          s = t.split(".");
        let o;
        o = 2 == s.length ? import_proto.default[s[0]][s[1]] : import_proto.default[s[0]][s[1]][s[2]];
        const n = o.encode(e).finish(),
          r = NetManager.headSize() + i + n.length,
          a = new ArrayBuffer(r),
          l = new DataView(a);
        let c = 0;
        l.setUint16(c, 2, !0), c += NetManager.cmdid_size_len, l.setUint8(c, i), c += NetManager.name_size_len, l.setUint16(c, n.length, !0), c += NetManager.payload_size_len;
        const h = new Uint8Array(i);
        for (let e = 0; e < t.length; ++e) h[e] = t.charCodeAt(e);
        new Uint8Array(a, c, i).set(h), c += i;
        new Uint8Array(a, c, n.length).set(new Uint8Array(n)), this.connected ? (Debug.IsShowLog && "mapscreen.KillNpc" != t && "game.ReqGameTime" != t && "mapscreen.ShowMove" != t && Debug.Log(Debug.Tag_PB, "[color=#00FF00]c2s " + t + "[/color]", JSON.stringify(e, null, 4)), this.socket.send(a)) : this.isInMap && (this.waitSend.set(t, a), console.warn("Cannot send message. WebSocket is not connected. ", t))
      }
      on_recv(t) {
        const e = new DataView(t);
        let i = 0;
        const s = e.getUint16(i, !0);
        if (this.heatNum = 0, 2 != s) return void(0 == s && this.on_heatTime(0));
        if (ToolUtil.isStop) return;
        i += NetManager.cmdid_size_len;
        const o = e.getUint8(i);
        i += NetManager.name_size_len;
        e.getUint16(i, !0);
        i += NetManager.payload_size_len;
        const n = this.bytes2UTF8Str(new Uint8Array(t.slice(i, i + o - 1)));
        i += o;
        const r = n.split(".");
        let a;
        const l = r.length;
        if (l > 1) {
          const t = import_proto.default[r[0]];
          if (t) {
            const e = t[r[1]];
            a = 2 == l ? e : e[r[2]]
          }
        }
        if (a) {
          const e = a.decode(new Uint8Array(t.slice(i))),
            s = this.get_callback(n);
          s ? (Debug.IsShowLog && "mapscreen.ShowMove" != n && "mapscreen.StopMove" != n && "game.Time" != n && "game.SynTimeZone" != n && Debug.Log(Debug.Tag_PB, "[color=yellow]s2c " + n + "[/color]", JSON.stringify(e, null, 4)), s.runWith(e)) : Debug.IsShowLog && Debug.Log(Debug.Tag_PB, "no define \n[color=red]s2c " + n + "[/color]", JSON.stringify(e, null, 4))
        }
      }
      on_heatTime(t) {
        const e = NetManager.headSize(),
          i = new ArrayBuffer(e);
        new DataView(i).setUint16(0, t, !0), this.socket.send(i)
      }
      set_callback(t, e) {
        this.dispatcher.has(t) && console.error("repeat net:" + t), this.dispatcher.set(t, e)
      }
      get_callback(t) {
        return this.dispatcher.has(t) ? this.dispatcher.get(t) : null
      }
      GetCallback(t) {
        return this.get_callback(t)
      }
      client_callback(t, e) {
        let i = this.get_callback(t);
        i && i.runWith(e)
      }
      update(t) {
        this.connected ? (this.heatTime += t, this.heatTime > 7e3 && (this.heatTime = 0, this.heatNum++, this.heatNum > 1 ? (this.connected = !1, this.connecting = !1, this.reconnect()) : this.on_heatTime(1)), this.isWait && this.waitSend.size > 0 && (this.waitSend.forEach(((t, e, i) => {
          this.socket.send(t)
        })), this.waitSend.clear())) : this.connecting || 2 != this.connectType || (this.waitTime += t, this.waitTime > 2e3 && (this.waitTime = 0, this.isreconnect && (this.isreconnect = !1, NetManager.inst.connectGame(this.url, this.uuid, this.token, !0))))
      }
      isConnected() {
        return this.connected
      }
      reconnect(t) {
        0 != this.isKick || this.connecting || 2 != this.connectType || (this.isreconnect = !0, this.isWait = !1, t && (this.waitTime = 3e3))
      }
      reconnectBifronst() {
        this.connectType = 0, NetManager.inst.connectBifrost(this.uuid)
      }
      checkReconnect() {
        return 2 == this.connectType && 0 == this.connected && 0 == this.connecting && 0 == this.isKick
      }
      bytes2UTF8Str(t) {
        let e = "",
          i = 0;
        for (; i < t.length;) {
          const s = t[i++];
          if (0 == (128 & s)) e += String.fromCharCode(s);
          else if (192 == (224 & s)) {
            const o = 63 & t[i++];
            e += String.fromCharCode((31 & s) << 6 | o)
          } else if (224 == (240 & s)) {
            const o = 63 & t[i++],
              n = 63 & t[i++];
            e += String.fromCharCode((15 & s) << 12 | o << 6 | n)
          } else if (240 == (248 & s)) {
            const o = (7 & s) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++];
            e += String.fromCharCode(55296 + (o - 65536 >> 10), 56320 + (1023 & o))
          }
        }
        return e
