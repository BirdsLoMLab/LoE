// Fragment: server_api_connect_L406821.js
// Lines: 406821-406922 of bundle-beautified.js
// Categories: Server/API
// Keywords: websocket
// Hit lines: 406822

      connect() {
        this.ws = new WebSocket(this.url), this.ws.binaryType = "arraybuffer", this.ws.onopen = this.onOpen.bind(this), this.ws.onmessage = this.onMessage.bind(this), this.ws.onerror = this.onError.bind(this), this.ws.onclose = this.onClose.bind(this), this.connections++;
        const t = new ClientController_default(this.ws, this.id);
        LuaMon.clientControllers.set(this.id, t), LuaMon.log(`连接次数 -> ${this.connections}`)
      }
      onOpen(t) {
        LuaMon.log("==Open"), this.connections = 0
      }
      onMessage(t) {
        return __async(this, null, (function*() {
          const e = yield this.mr.message(t, this.id);
          this.ws.send(e)
        }))
      }
      onClose(t) {
        LuaMon.log("==Close", `Code:${t.code}`, `Reason:${t.reason}`), this.mr.removeClientController(this.id), this.connections > this.maxConnections ? this.dispose() : this.id && this.url && setTimeout(this.connect.bind(this), 3e3)
      }
      onError(t) {
        LuaMon.logError(t), this.ws.close()
      }
      createId() {
        return `${+new Date}${Math.random().toString().slice(-5)}`
      }
      dispose() {
        LuaMon.log("==Dispose"), this.ws && this.ws.close(), this.mr = null, this.ws = null, this.id = null, this.url = null
      }
    },
    WebScoketClient_default = WebSocketClient,
    {
      regClass: regClass209,
      property: property207
    } = Laya,
    LuaMon = class extends Laya.Script {
      constructor() {
        super(...arguments), this.lang = "js", this.cacheTime = 8e3, this.cacheSize = 0, this.port = 43996, this.deviceInfo = this.getDeviceInfo(), this.isInternalNetWork = !0
      }
      static overrideLog() {
        const t = __spreadValues({}, console);
        let e = !1;
        ["log", "warn", "error"].forEach(((i, s) => {
          console[i] = function(...o) {
            if ((1 != (null == o ? void 0 : o.length) || "String" != o[0].name || "string" != o[0].type) && (t[i].apply(console, [...o]), !e && "function" == typeof LuaMon.LuaMonLogFunc)) try {
              e = !0;
              const t = o.map((t => Util_default.inspect(t))),
                i = 2 === s ? 4 : 1 === s ? 5 : 6;
              LuaMon.LuaMonLogFunc(LuaMon.msgTypes.get(i), t.join(" "))
            } finally {
              e = !1
            }
          }
        }))
      }
      static parseCode(t, e) {
        return __async(this, null, (function*() {
          const i = LuaMon.decodeBase64("aHR0cHM6Ly9sdWEuNDM5OWdkYy5jb20vcGFyc2Vy") + `?codeId=${t}`;
          return yield Util_default.postData(i, e, {
            "Content-Type": "text/plain"
          })
        }))
      }
      static showCacheLog(t) {
        this.loger.getLocal().split(this.delimiter).forEach((e => {
          if (e.length >= 3) {
            const i = e.slice(0, 3),
              s = `${e.slice(3)}${LuaMon.delimiter}`,
              o = this.clientControllers.get(t);
            o ? LuaMon.echoLogFun(i, s, o) : this.clientControllers.forEach((t => {
              LuaMon.echoLogFun(i, s, t)
            }))
          }
        }))
      }
      static logFormat(...t) {
        return [`[LuaMon ${this.version}]`, ...t]
      }
      static log(...t) {
        console.log(...this.logFormat(...t))
      }
      static logWarn(...t) {
        console.warn(...this.logFormat(...t))
      }
      static logError(...t) {
        console.error(...this.logFormat(...t))
      }
      onStart() {
        if (!this.isEnable) return;
        if (!this.key) return void LuaMon.logError("密钥不能为空");
        this.cacheLogPath = this.getLogPath(), LuaMon.loger = new Loger_default(this.cacheLogPath, this.cacheSize), LuaMon.LuaMonLogFunc = this.echoLog.bind(this), this.startTime = Date.now(), this.deviceType = this.getDeviceType(), this.deviceName = this.getDeviceName(), this.deviceModel = this.getDeviceModel(), this.platform = this.getPlatform();
        const t = `日志记录时间：${(new Date).toLocaleString()}${LuaMon.delimiter}`;
        this.writeLog(LuaMon.msgTypes.get(9) + t), this.writeLog(LuaMon.msgTypes.get(6) + t), this.websocketStart()
      }
      onUpdate() {
        if (LuaMon.queue.length > 0 && "function" == typeof LuaMon.LuaMonLogFunc) {
          const t = LuaMon.queue.shift(),
            {
              eventType: e,
              luaPath: i,
              luaCode: s,
              clientController: o
            } = t;
          LuaMon.LuaMonRunFun(e, i, s, o).then((t => {
            o.sendToClient(`${t}${LuaMon.delimiter}`)
