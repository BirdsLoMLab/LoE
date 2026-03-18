// Fragment: server_api_e_L424394.js
// Lines: 424394-424495 of bundle-beautified.js
// Categories: Server/API
// Keywords: ws://, wss://
// Hit lines: 424394, 424395

          let e = `ws://${this.ip}:${this.port}`;
          ToolUtil.isRelease && (e = `wss://${this.ip}`), t.zoneid && (this.zoneid = t.zoneid), NetManager.inst.connectGame(e, this.uuid, this.token)
        } else if (UIManager.inst.openLoading(null, .42, 5e3), e > 0) {
          if (0 == i && t.list && t.list.length > 0) {
            t.list.sort(((t, e) => e.onlinetime - t.onlinetime));
            for (let s = 0; s < t.list.length; s++) {
              const o = t.list[s];
              if (o.zoneid == e && o.onlinetime > ToolUtil.loginTime) {
                i = o.country;
                break
              }
            }
          }
          this.login_bifrost_LoginZone(e, i, t.zoneid)
        } else {
          if (t.list && t.list.length > 0) {
            t.list.sort(((t, e) => e.onlinetime - t.onlinetime));
            for (let o = 0; o < t.list.length; o++) {
              const n = t.list[o],
                r = s - n.onlinetime;
              if (n.onlinetime < ToolUtil.loginTime || !ToolUtil.isAlipayMiniGame && n.level < ToolUtil.number(41) && r > ToolUtil.number(40) || r > ToolUtil.number(42));
              else {
                for (let t = 0; t < this.serverList.length; t++) {
                  const s = this.serverList[t];
                  if (n.zoneid == s.id && (ToolUtil.isGM || 4 != s.status)) {
                    e = n.zoneid, i = n.country;
                    break
                  }
                }
                if (e > 0) break
              }
            }
          }
          if (e > 0) this.login_bifrost_LoginZone(e, i, t.zoneid);
          else if (this.serverList) {
            const s = [];
            let o = 0,
              n = ToolUtil.currentLang.ext.toUpperCase();
            "CN" == n || "TK" == n || "DE" == n || "FR" == n ? n = "EN" : "ES" != n && "PT" != n || (n = "EN");
            for (let t = 0; t < this.serverList.length; t++) {
              const e = this.serverList[t];
              n == e.language && (3 == e.status ? s.push(e.id) : e.status < 4 && e.id > o && (o = e.id))
            }
            e = s.length > 0 ? s[Math.floor(Math.random() * s.length)] : o, i = 0, e > 0 ? this.login_bifrost_LoginZone(e, i, t.zoneid) : (LoginCtrl.inst.zonestate = 2, this.exitGame())
          } else LoginCtrl.inst.zonestate = 3, this.exitGame()
        }
      }
      login_bifrost_LoginFailed(t) {
        if (9 != t.retcode) 0 == this._netManager.isInMap && (ToolUtil.isRelease ? (LoginCtrl.inst.zonestate = 4, this.exitGame()) : UIManager.inst.openDialog(ToolUtil.chinese(1798), null, null, null, null, null, null, null, null, null, !0)), 6 == t.retcode && ToolUtil.logCustomEventGame("login_verify_fail");
        else {
          let e = JSON.parse(t.retData),
            i = TimeUtil.formatDHMS(e.forbid_endtime, 4),
            s = ToolUtil.chinese(1021),
            o = `${ToolUtil.chinese(1795)}${i} ${ToolUtil.chinese(1796)}${this.zoneid}(${LoginCtrl.inst.getCountry(this.zoneid,this.country)}${ToolUtil.chinese(1797)}${this.uuid}`;
          FnsdkMgr.inst.wxExit(s, o, ToolUtil.chinese(1027), ToolUtil.chinese(1028), !1)
        }
      }
      login_CharInfoList(t) {
        if (this.myIp = t.ip, 0 == t.infolist.length) this.isNew = !0;
        else {
          this.clearTimer1(), SingletonMgr.funcCall("resetData");
          const e = t.infolist[0];
          if (this.roleInfo && String(this.roleInfo.charid) != String(e.charid) && (ToolUtil.miniGame ? FnsdkMgr.inst.wxRestart(ToolUtil.chinese(1021), ToolUtil.chinese(1799), ToolUtil.chinese(1027), ToolUtil.chinese(1028), !1) : UIManager.inst.openDialog(ToolUtil.chinese(1800), (() => {
              location.reload()
            }), (() => {
              location.reload()
            }), ToolUtil.chinese(1021), ToolUtil.chinese(1801), ToolUtil.chinese(1802), null, null, null, null, !0)), null == e.level && (e.level = 1), BaseConfig.isSDK && !this._netManager.isInMap) {
            let t = {
              userName: this.userName,
              roleId: e.charid.toString(),
              roleLevel: e.level.toString(),
              serverId: LoginCtrl.inst.zoneid.toString()
            };
            FNSDK.invoke("logSelectServer", t), ToolUtil.logCustomEventGame("sdk_log_select_server"), ToolUtil.tLogEvent("sdk_select_server")
          }
          for (let t = 0; t < this.serverList.length; t++) {
            const e = this.serverList[t];
            if (this.zoneid == e.id) {
              this.curServer = e;
              break
            }
          }
          if (BaseConfig.isSDK && this.isNew) {
            this.isNew = !1;
            let t = {
              roleId: e.charid.toString(),
              roleName: e.name.toString(),
              serverId: LoginCtrl.inst.zoneid.toString(),
              serverName: this.curServer ? this.curServer.gname : ToolUtil.chinese(1049)
            };
            ToolUtil.logCustomEventGame("sdk_log_create_role"), FNSDK.invoke("logCreateRole", t)
          }
          if (BaseConfig.isSDK && !this._netManager.isInMap) {
            let t = {
              uid: this.uuid,
              roleId: e.charid.toString(),
              roleName: e.name,
              roleLevel: e.level.toString(),
              serverId: LoginCtrl.inst.zoneid.toString(),
              serverName: this.curServer ? this.curServer.gname : ToolUtil.chinese(1049)
            };
            ToolUtil.inAppHw && HwFnsdkMgr.hw_api_logRoleLoginLog(t.roleId, t.roleName), FNSDK.invoke("logEnterGame", t), SdkDyMgr.SetbytedancegiftListen()
