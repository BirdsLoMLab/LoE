// Fragment: server_api_L423404.js
// Lines: 423404-423530 of bundle-beautified.js
// Categories: Server/API
// Keywords: api, joynetgame
// Hit lines: 423418, 423419, 423429, 423430

        if (null == this._param) {
          this._param = {
            targetPlatformAdapterName: "FNPCPlatformWxMini",
            fngid: "1684763366298110",
            projectId: "301",
            targetPlatform: "wxmini",
            appVersion: "",
            payNotifyUrl: "https://fnsdk.aiysm.com/zzsjwxxyxgnml/4399wx/pay.php",
            "fngid@@osid=1": "1684764026680740",
            "payNotifyUrl@@osid=1": "https://fnsdk.aiysm.com/zzsjwxgnmlios/4399wx_ios/pay.php",
            payRate: "10",
            payTypeKefu: "215",
            payTypeMds: "8006",
            payOfferId: "1450053082",
            ydUrl: "https://y.qq499.com/datacf/api/push",
            ydChannelInfoUrl: "https://mkt.qq499.com/api/wxxyx-attr/channelinfo",
            voiceGameId: "1684763366298110",
            voiceGameTag: "zzsjwxxyxgnml",
            voiceOauthKey: "7140d5e9fa9e48fc47c14e5a932d3070",
            baiduApiKey: "sEHNCYQgwCXFzvz4tzV309U0",
            baiduSecretKey: "U70sl2bh4N19Nhm6sOOCufm7tmbUAH3y"
          };
          var e = this._param;
          if (ToolUtil.inH5Web) {
            let e = {};
            this._param = e, e.targetPlatformAdapterName = "FNPCPlatformHwHF", e.projectId = "311", e.fngid = "1751018213951160", e.fnpid = "4013", e.fnptag = "4013", e.hwLang = t.languageToCode(ToolUtil.currentLang.ext), e.hwClientId = "1751018213951160", e.hwClientSecret = "ed4a6602ef1cc2456ee0241eaee063ea", e.hwArea = "US", e.hwPp = "joynetgame", e.hwMainDomain = "joynetgame.com", e.hwCurrencyCode = "USD", e.isDynamicLoad = "true"
          } else ToolUtil.isWxMiniGame ? (e.gdtActionSetID = "1206164740", e.gdtSecretKey = "3f7283860d28556281d31d1c23ef36f8", e.wxAppId = "wxdbfd70551f103989") : t.isTTMiniGame ? (e.targetPlatform = "dymini", e.targetPlatformAdapterName = "FNPCPlatformDyMini", e.fngid = "1727158736897180", e.payNotifyUrl = "https://fnsdk.aiysm.com/zzsjdyxyxgnml/4399dy/pay.php", e.projectId = "301", e["fngid@@osid=1"] = "1727158919937170", e["payNotifyUrl@@osid=1"] = "https://fnsdk.aiysm.com/zzsjdygnmlios/4399dy_ios/pay.php", e.payRate = "10", e.payTypeKefu = "8018", e.payTypeDy = "8011") : ToolUtil.isQGMiniGame ? (e.targetPlatformAdapterName = "FNPCPlatformOppoRpk", e.projectId = "194", e.fngid = "1748930480686690", e.payNotifyUrl = "https://fnsdk.aiysm.com/zzsjoppokyxfx/oppo_rpk/pay.php", e.rpkAppId = "33434975", e.packageName = "com.swfxrpk.zzsj.nearme.gamecenter") : ToolUtil.isVVMiniGame ? (e.targetPlatformAdapterName = "FNPCPlatformVivoRpk", e.projectId = "194", e.fngid = "1748930532201290", e.payNotifyUrl = "https://fnsdk.aiysm.com/zzsjvivokyxfx/vivo_rpk/pay.php", e.rpkAppId = "105913747", e.rpkPkgName = "com.swfxrpk.zzsj.vivominigame") : ToolUtil.isAlipayMiniGame ? (e.targetPlatformAdapterName = "FNPCPlatformZfbMini", e.fngid = "1732090583435280", e.payNotifyUrl = "https://fnsdk.aiysm.com/zzsjzfbxyxfx/4399zfb/pay.php", e.projectId = "194", e["fngid@@osid=1"] = "1732090693640620", e["payNotifyUrl@@osid=1"] = "https://fnsdk.aiysm.com/zzsjzfbxyxiosfxios/4399zfbios/pay.php", e.payTypeZfb = "8019", e.zfbAppId = "2021004199682148", e.ydUrl = "https://y2.4399data.com/datacf/api/push", e.fnapiLoginUrlPath = "/sdk/api/login_zfb.php") : ToolUtil.inAppHuawei ? (e.targetPlatformAdapterName = "FNPCPlatformHuaweiH5", e.projectId = "194", e.fngid = "1736160388490160", e.payNotifyUrl = "https://fnsdk.4399sy.com/zzsjhwkyxfx/huawei_h5/pay.php", e.h5AppId = "113212871", e.h5CpId = "900086000000100812", e.h5PublicKey = "MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAhsK8zX9FNwL3KxqbK8w5ZqMkyJRJfCUaGgrQY6HoXli7GppjBxDE43TgDV94K4bU9uMw/m+7Gr63T8sTP0/cMF5qCGT9v1KiR3D7kdENfrd4hwapCARCWz9Lair+cHJ1f7kvfr+DY76b5Iu9CVDJj0V9lshEONkLFWIMXwqJZ6gzaiW1NbsWbC+6AdCNKXH0Bwxg1aVJ9PaND7uHeio/KZdNJVR0HTFCvJ5u0jx1LVPLNNjoWdWY/uGykAjewNDxOyJ6XZygT//5tvow64tcykHQCsucmf/sHB7rmWqwlsFixwaFy4j3VGMKwV4QKXVB6UuRwPqNubXhB1yuz6fnKDehTqc+60jikV638FiIcw/JPqVx6SBngFzw5mTYxiurhPOz9cLRA7/0CMlhNnvpVF1FVf4neDFDAJrtsCv2SDn2XK6wl12f2jS2HnkWiJPTVAv4ul0LY+PesHNy3jb44PE5p8NjYTtzm/dhnuzrvN2EMWRPWN7pHA8Ai6HdlzGFAgMBAAE=") : ToolUtil.isKSMiniGame ? (e.targetPlatformAdapterName = "FNPCPlatformKsMini", e.fngid = "1739443454868870", e.payNotifyUrl = "https://fnsdk.aiysm.com/zzsjksxyxgnml/4399ks/pay.php", e.projectId = "301", e["fngid@@osid=1"] = "1739443598464640", e["payNotifyUrl@@osid=1"] = "https://fnsdk.aiysm.com/zzsjksxyxiosgnmlios/4399ks_ios/pay.php", e.payTypeKefu = "8021", e.payTypeKs = "8015", e.ksAppId = "ks694117294446301769") : ToolUtil.isVVMiniGame ? (e.targetPlatformAdapterName = "FNPCPlatformVivoRpk", e.projectId = "194", e.fngid = "1748930532201290", e.payNotifyUrl = "https://fnsdk.aiysm.com/zzsjvivokyxfx/vivo_rpk/pay.php", e.rpkAppId = "105913747", e.rpkPkgName = "com.swfxrpk.zzsj.vivominigame") : ToolUtil.isQGMiniGame && (e.targetPlatformAdapterName = "FNPCPlatformOppoRpk", e.projectId = "194", e.fngid = "1748930480686690", e.payNotifyUrl = "https://fnsdk.aiysm.com/zzsjoppokyxfx/oppo_rpk/pay.php", e.rpkAppId = "33434975", e.packageName = "com.swfxrpk.zzsj.nearme.gamecenter")
        }
        return this._param
      }
      init() {
        if (Laya.LayaEnv.isConch) return NativeToJs.init(), NativeToJs.Login(), ToolUtil.tLogEvent("start_login"), void ToolUtil.logCustomEventGame("sdk_login_start");
        this.initLogCustomEvent(), this.param.appVersion = BaseConfig.appVersion.toString(), ToolUtil.inH5Web || t.inst.isMiniGame || ToolUtil.inAppHuawei ? FNSDKXyx.init(this.param, ((t, e, i) => {
          t == FNCode.SUCC ? this.sdkInitCallBack(t, e, i) : Debug.LogError("msg " + e)
        })) : FNSDK.invoke("setCallbackInitState", {}, ((t, e, i) => {
          t == FNCode.SUCC ? this.sdkInitCallBack(t, e, i) : Debug.LogError("msg " + e)
        })), EventDispatcher.inst.addEventListener(MsgName.Msg_App_SHow_Hide, this, (t => {
          this.onShow(t)
        }))
      }
      tlogOk() {
        ToolUtil.tlogInited = !0, ToolUtil.logEventArr.forEach((t => {
          ToolUtil.tLogEvent(t)
        })), ToolUtil.logEventArr = []
      }
      sdkInitCallBack(e, i, s) {
        ToolUtil.sdkInited = !0, ToolUtil.logEventArr.forEach((t => {
          ToolUtil.tLogEvent(t)
        })), ToolUtil.logEventArr = [], Laya.Browser.onMiniGame && !this.checkWxVersion() || (this.setCallbackLogin(), ToolUtil.tLogEvent("start_login"), this.fnsdkLogin(), this.setCallbackOnShareParamState(), t.inst.isMiniGame && wx.hideShareMenu && wx.hideShareMenu({
          menus: ["shareAppMessage", "shareTimeline"]
        }))
      }
      checkWxVersion() {
        let e = wx.getSystemInfoSync();
        if ("ios" == e.platform) {
          let i = e.version;
          if (!StringUtil.isNullOrEmpty(i)) {
            let e = i.split("."),
              s = e.length,
              o = [];
            for (let t = 0; t < s; t++) o.push(Number.parseInt(e[t]));
            if (o[0] <= 8 && 0 == o[1] && o[2] < 23) return t.inst.wxExit("提示", "暂不支当前微信版本，请升级微信版本", "取消", "确定", !1), !1
          }
        }
        return !0
      }
      checkGameUpdate() {
        if (ToolUtil.isKSMiniGame) return;
        const e = wx.getUpdateManager();
        e.onCheckForUpdate((function(t) {})), e.onUpdateReady((function() {
          const t = {
            title: "更新提示",
            content: "新版本已经准备好，是否重启应用？",
            success(t) {
              t.confirm && e.applyUpdate()
            }
          };
          ToolUtil.isAlipayMiniGame ? wx.confirm(t) : wx.showModal(t)
        })), e.onUpdateFailed((function() {
          t.inst.wxRestart("更新提示", "游戏新版本下载失败，请检查网络重启？", "取消", "确定")
        }))
      }
      appRestart() {
        if (Laya.LayaEnv.isConch || ToolUtil.inAppHuawei || ToolUtil.inH5Web) {
          if (this.reLoadFlag) return;
          this.reLoadFlag = !0, location.reload()
        }
      }
      wxRestart(e, i, s, o, n = !0) {
        ToolUtil.inH5Web || Laya.LayaEnv.isConch ? this.appRestart() : ToolUtil.inAppHuawei ? location.reload() : ToolUtil.inAppWeb ? (console.log(`FNSDK.invoke("reboot")>>${i}`), FNSDK.invoke("reboot")) : ToolUtil.isAlipayMiniGame ? wx.confirm({
          title: e,
          content: i,
          showCancel: n,
          success(t) {
            t.confirm && wx.exitProgram()
          },
          cancelButtonText: s,
          confirmButtonText: o
        }) : wx.showModal ? wx.showModal({
          title: e,
          content: i,
          showCancel: n,
          success(e) {
            e.confirm && (ToolUtil.isAlipayMiniGame ? wx.exitProgram() : t.isTTMiniGame ? wx.restartMiniProgramSync() : ToolUtil.isVVMiniGame || ToolUtil.isQGMiniGame ? wx.exitApplication() : wx.restartMiniProgram({
              path: "",
              success: () => {},
              fail: () => {},
              complete: () => {}
            }))
          },
          cancelText: s,
          confirmText: o
        }) : UIManager.inst.openDialog(i, (() => {
          ToolUtil.isVVMiniGame || ToolUtil.isQGMiniGame ? wx.exitApplication() : wx.restartMiniProgram({
            path: "",
            success: () => {},
            fail: () => {},
            complete: () => {}
          })
        }), null, e, o, s)
      }
      wxExit(t, e, i, s, o = !0) {
        ToolUtil.isAlipayMiniGame ? wx.confirm({
          title: t,
          content: e,
          showCancel: o,
          success(t) {
