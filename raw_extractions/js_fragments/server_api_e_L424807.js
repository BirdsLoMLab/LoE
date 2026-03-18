// Fragment: server_api_e_L424807.js
// Lines: 424807-424995 of bundle-beautified.js
// Categories: Server/API
// Keywords: api, http, joynetgame
// Hit lines: 424807, 424819, 424832, 424856, 424858, 424895

          let e = ToolUtil.get_urlBak("https://sydh-us-cdnres.joynetgame.com/cdnconfig_" + Laya.timer.currTimer + "/serverlists/sydh_mix_us.json");
          HttpManager.inst.httpReqGetJson(e, this.onCompleted1.bind(this), (() => {
            this.getServers1(t), ApmUtil.inst.SendInfoToApm(9999, "主备游戏服列表失败")
          }))
        } else HttpManager.inst.httpReqGetJson(ToolUtil.urlServer(), this.onCompleted2.bind(this), (() => {
          this.getServers1(t), ApmUtil.inst.SendInfoToApm(9999, "主备游戏服列表失败")
        }))
      }
      onCompleted1(t, e) {
        LoginCtrl.inst.serverList.push(...e), this.getServers2()
      }
      getServers2(t) {
        let e = ToolUtil.get_urlBak("https://sydh-us-cdnres.joynetgame.com/cdnconfig_" + Laya.timer.currTimer + "/serverlists/sydh_mix_us2.json");
        HttpManager.inst.httpReqGetJson(e, this.onCompleted2.bind(this), (() => {
          this.getServers2(t), ApmUtil.inst.SendInfoToApm(9999, "主备游戏服列表失败")
        }))
      }
      onCompleted2(t, e) {
        var i;
        LoginCtrl.inst.serverList.push(...e), LoginCtrl.inst.serverList.sort(((t, e) => t.id - e.id)), null == (i = this.callback) || i.run()
      }
    };
  LoginCtrl._instance = null, LoginCtrl.LoginSuccInfo = null, LoginCtrl.beKickOff = !1, LoginCtrl = __decorateClass([regClass225("fYjYa759Q7ySamSV_6UoUw")], LoginCtrl);
  var _ApmUtil = class t {
    constructor() {
      this.server_id = 0, this.uid = "", this.log_time = 0, this.code = 0, this.code_msg = "", this.did = "", this.device = "", this.device_name = "", this.game_version = "", this.os = "", this.os_version = "", this.Mno = "", this.Nm = "", this.channel = "", this.geo = "", this.f_code = 0, this.apiUrl = "", this.timeout = 5e3, this.http = null, this.infoStr = null, this.initedDeviceInfo = !1, this.ver = "", this.apiUrl = "https://apiapm.joynetgame.com/api/apm/19258715e23f80911"
    }
    static get inst() {
      return null == t._instance && (t._instance = new t, SingletonMgr.register(t._instance)), t._instance
    }
    InitDeviceInfo() {
      var t;
      if (BaseConfig.isSDK) {
        if (this.device = "default", FnsdkMgr.inst.isMiniGame) {
          if (this.device = "isMiniGame", FnsdkMgr.isTTMiniGame ? this.device = "isTTMiniGame" : ToolUtil.isWxMiniGame ? this.device = "isWxMiniGame" : ToolUtil.isAlipayMiniGame && (this.device = "isAlipayMiniGame"), wx.getSystemInfoSync) {
            let t = wx.getSystemInfoSync();
            this.os = t.platform, this.os_version = t.system + "_wxSDK " + t.SDKVersion, this.device_name = t.model
          }
        } else ToolUtil.inAppAndroid ? this.device = "inAppAndroid" : ToolUtil.inAppWeb ? this.device = "inAppWeb" : ToolUtil.inAppIos ? this.device = "inAppIos" : ToolUtil.inAppHuawei ? this.device = "inAppHuawei" : ToolUtil.inAppSmart ? this.device = "inAppSmart" : ToolUtil.inAppHw && (this.device = "inAppHw");
        if (this.initedDeviceInfo = !0, this.channel = (null == (t = Laya.Browser) ? void 0 : t.platform) + "", ToolUtil.isRelease) {
          const t = Laya.URL.formatURL("resourcesLib/fileconfig.json", "").split("fileconfig-")[1].replace(".json", "");
          const e = Laya.URL.formatURL("resourcesLib/Config/version.json", "").split("version-")[1].replace(".json", "");
          this.ver = `v${BaseConfig.appVersion}.${t}.${e}.${ToolUtil.version}`
        }
      }
    }
    SendInfoToApm(t, e) {
      if (0 == this.initedDeviceInfo) return;
      let i = new Date;
      this.log_time = i.valueOf(), this.code = t, this.code_msg = e, null == this.http && (this.http = new Laya.HttpRequest, this.http.on(Laya.Event.COMPLETE, this, this.onSendComplete));
      let s = this.getPostParams();
      this.http.send(this.apiUrl, s, "post", "text")
    }
    onSendComplete() {}
    getPostParams() {
      this.uid = LoginCtrl.inst.charid.toString(), this.game_version = this.ver;
      let t = FnsdkMgr.DeviceInfo;
      return this.Nm = null == t ? void 0 : t.networkName, this.os = null == t ? void 0 : t.deviceType, this.os_version = null == t ? void 0 : t.osVersion, this.device_name = null == t ? void 0 : t.deviceName, this.server_id = LoginCtrl.inst.zoneid, this.infoStr = StringUtil.format("server_id={0}&uid={1}&log_time={2}&code={3}&code_msg={4}&did={5}&device={6}&device_name={7}&game_version={8}&os={9}&os_version={10}&Mno={11}&Nm={12}&channel={13}&geo={14}", this.server_id, this.uid, this.log_time, this.code, this.code_msg, this.did, this.device, this.device_name, this.game_version, this.os, this.os_version, this.Mno, this.Nm, this.channel, this.geo), this.infoStr
    }
    static sendIosTs(e) {
      ToolUtil.iosAppForbid && (e = `${t.iosts_step++}:::${e}`, t.inst.SendInfoToApm(998001, e))
    }
    reset() {}
  };
  _ApmUtil._instance = null, _ApmUtil.iosts_step = 0;
  var ApmUtil = _ApmUtil,
    _Debug = class t {
      static initLogTag() {
        this.tag_list.push(this.Tag_SHOW), this.tag_list.push(this.Tag_PB), this.tag_list.push(this.Tag_BUFF), this.tag_list.push(this.Tag_CHC), this.tag_list.push(this.Tag_GXH), this.tag_list.push(this.Tag_Battle), this.tag_list.push(this.Tag_WC), this.tag_list.push(this.Tag_ZWQ), this.tag_list.push(this.Tag_Mod_Res), this.tag_list.push(this.Tag_Mod_AI), this.tag_list.push(this.Tag_Mod_Music), this.tag_list.push(this.Tag_Mod_FGUI), this.tag_list.push(this.Tag_Mod_Damage), this.tagDic = new Map, this.refreshTagList()
      }
      static refreshTagList() {
        this.tagDic.clear(), t.IsShowLog = !1, this.tag_list.forEach((e => {
          "open" == Laya.LocalStorage.getItem(e) && (this.tagDic.set(e, e), e == this.Tag_SHOW && (t.IsShowLog = !0))
        })), 0 == ToolUtil.isRelease && (t.IsShowLog = !0), ToolUtil.isForTest && (t.IsShowLog = !0, this.tagDic.set(this.Tag_SHOW, "1"), this.tagDic.set(this.Tag_PB, "1"))
      }
      static GetCurTime() {
        let t = new Date,
          e = t.getHours();
        return this.timeStr = e > 9 ? e + ":" : "0" + e + ":", e = t.getMinutes(), this.timeStr += e > 9 ? e + ":" : "0" + e + ":", e = t.getSeconds(), this.timeStr += e > 9 ? e + "  " : "0" + e + "  ", e = t.getMilliseconds(), this.timeStr += e, this.timeStr
      }
      static getStack() {
        try {
          let t = (new Error).stack.toString().split("\n");
          t.shift(), t.shift(), t.shift();
          let e = "",
            i = t.length;
          for (let s = 0; s < i; s++) {
            const i = t[s];
            if (i.trim().startsWith("at http://")) break;
            e += i + "\n"
          }
          return e.trim(), e
        } catch (t) {
          return ""
        }
      }
      static Log(e, i, ...s) {
        if (!1 === this.IsShowLog || !e) return;
        if (null === this.tagDic && this.initLogTag(), !this.tagDic.has(e)) return;
        "object" == typeof i && (i = JSON.stringify(i));
        let o = this.tagDic.get(e),
          n = "";
        if (e == this.Tag_Mod_Damage) return n = StringUtil.format("[{0}][{1}]{2} {3}", this.GetCurTime(), o, i, ""), n = "%c" + n, n = StringUtil.format("[color=#ff00ff]{0}[/color] ", n), s.push("color:#ff00ff"), void console.log(n, ...s);
        if (e == this.Tag_PB) {
          let t = "at\r\n";
          n = StringUtil.format("[{0}][{1}]{2}\r\n{3}", this.GetCurTime(), o, i, t)
        } else n = StringUtil.format("[{0}][{1}]{2}\r\n{3}", this.GetCurTime(), o, i, t.getStack());
        e == this.Tag_WC && (n = StringUtil.format("[color=#ff00ff]{0}[/color]", n)), console.log(n, ...s)
      }
      static LogBattle(t, e) {
        !1 !== this.IsShowLog && (null === this.tagDic && this.initLogTag(), this.tagDic.has(t) && console.log(e))
      }
      static isShowLogTag(t) {
        return this.tagDic.has(t)
      }
      static LogWarn(e, ...i) {
        if (!1 === this.IsShowLog) return;
        let s = StringUtil.format("[{0}]{1}\r\n{2}", this.GetCurTime(), e, t.getStack());
        console.warn(s, ...i)
      }
      static LogError(e, ...i) {
        if (!1 === this.IsShowLog) return;
        let s = StringUtil.format("[{0}]{1}\r\n{2}", this.GetCurTime(), e, t.getStack());
        console.error(s, ...i)
      }
      static ShowLayaFPS(t) {
        t ? Laya.Stat.show(0, 0) : Laya.Stat.hide()
      }
      static UpdtGameFps() {
        if (this.frameDeltaArray[this.frame] = Laya.timer.delta, this.frame++, this.frame == this.frameNum) {
          null == this.fpsTxt && (this.fpsTxt = new Laya.Text, this.fpsTxt.width = 100, this.fpsTxt.height = 60, this.fpsTxt.fontSize = 34, Laya.stage.addChild(this.fpsTxt), this.fpsTxt.x = 100, this.fpsTxt.mouseEnabled = !1, this.fpsTxt.mouseThrough = !0);
          let t = 0;
          for (let e = 0; e < this.frameNum; e++) t += this.frameDeltaArray[e];
          let e = 1e3 / (t / this.frameNum);
          this.fpsTxt.text = "" + Math.floor(e), this.frame = 0
        }
      }
      static listenError() {
        ApmUtil.inst.InitDeviceInfo(), ToolUtil.miniGame && (Laya.Browser.onWeiXin ? wx.onError && wx.onError((function(e) {
          t.errorHandler(e.message, e.stack)
        })) : ToolUtil.isAlipayMiniGame ? wx.onError && wx.onError(((e, i) => {
          t.errorHandler(e, i)
        })) : Laya.Browser.window.onerror && (Laya.Browser.window.onerror = function(e, i, s, o, n) {
          0 != t.isCollectError() && (e = "\r\n\r\n ================================Error=================================== \r\n\r\n" + e, e += "\r\n\r\n ===============================stack==================================== \r\n", e += n.stack, e += "\r\n =================================================================== \r\n")
        }))
      }
      static errorHandler(e, i, s = !0) {
        if (0 == t.isCollectError()) return;
        console.warn("捕获错误：", e, i);
        let o = "\r\n\r\n ================================Error=================================== \r\n\r\n";
        o += e, o += "\r\n\r\n ===============================stack==================================== \r\n", o += i, o += "\r\n =================================================================== \r\n", s && ApmUtil.inst.SendInfoToApm(2001, o)
      }
      static isCollectError() {
        return !(t.curErrorNum >= 3) && (t.curErrorNum++, !0)
      }
      static getNodePath(t) {
        let e;
        return e = t.parent ? this.getNodePath(t.parent) + "/" + t.name : t.name, e
      }
      static log_chc(e, ...i) {
        t.Log(t.Tag_CHC, e, ...i)
      }
      static log_gxh(e, ...i) {
        t.Log(t.Tag_GXH, e, ...i)
      }
      static wc(e, ...i) {
        t.Log(t.Tag_WC, e, ...i)
      }
      static zwq(e, ...i) {
        t.Log(t.Tag_ZWQ, e, ...i)
      }
      static log_buff(e, ...i) {
        t.Log(t.Tag_BUFF, e, ...i)
      }
      static log_battle(e) {
        t.LogBattle(t.Tag_Battle, e)
      }
      static setLog() {
        if (Laya.LayaEnv.isConch) {
          const e = console.log;
          console.log = function(...i) {
            if (!i || !i[0]) return;
            let s = "console.log>>>" + t.doLog(i);
            t.fnlog(s, e)
          };
          const i = console.warn;
          console.warn = function(...e) {
            if (!e || !e[0]) return;
            let s = "console.w>>>" + t.doLog(e);
