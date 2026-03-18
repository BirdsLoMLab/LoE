// Fragment: server_api_t_L26673.js
// Lines: 26673-26873 of bundle-beautified.js
// Categories: Server/API
// Keywords: login, token
// Hit lines: 26673, 26682, 26718, 26729, 26744, 26755, 26761, 26776, 26800, 26811, 26812, 26815, 26825, 26845, 26856, 26862, 26873

          }(), dt), Ke.login = ((It = {}).platform = ((gt = {}).PlatformInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.device = "", t.prototype.deviceName = "", t.prototype.did = "", t.prototype.os = "", t.prototype.osVersion = "", t.prototype.screen = "", t.prototype.mno = "", t.prototype.nm = "", t.prototype.packId = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.device && Object.hasOwnProperty.call(t, "device") && e.uint32(10).string(t.device), null != t.deviceName && Object.hasOwnProperty.call(t, "deviceName") && e.uint32(18).string(t.deviceName), null != t.did && Object.hasOwnProperty.call(t, "did") && e.uint32(26).string(t.did), null != t.os && Object.hasOwnProperty.call(t, "os") && e.uint32(34).string(t.os), null != t.osVersion && Object.hasOwnProperty.call(t, "osVersion") && e.uint32(42).string(t.osVersion), null != t.screen && Object.hasOwnProperty.call(t, "screen") && e.uint32(50).string(t.screen), null != t.mno && Object.hasOwnProperty.call(t, "mno") && e.uint32(58).string(t.mno), null != t.nm && Object.hasOwnProperty.call(t, "nm") && e.uint32(66).string(t.nm), null != t.packId && Object.hasOwnProperty.call(t, "packId") && e.uint32(72).uint32(t.packId), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.platform.PlatformInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.device = t.string();
                    break;
                  case 2:
                    s.deviceName = t.string();
                    break;
                  case 3:
                    s.did = t.string();
                    break;
                  case 4:
                    s.os = t.string();
                    break;
                  case 5:
                    s.osVersion = t.string();
                    break;
                  case 6:
                    s.screen = t.string();
                    break;
                  case 7:
                    s.mno = t.string();
                    break;
                  case 8:
                    s.nm = t.string();
                    break;
                  case 9:
                    s.packId = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.platform.PlatformInfo"
            }, t
          }(), gt.FnPlatformInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.fnpid = "", t.prototype.fngid = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.fnpid && Object.hasOwnProperty.call(t, "fnpid") && e.uint32(10).string(t.fnpid), null != t.fngid && Object.hasOwnProperty.call(t, "fngid") && e.uint32(18).string(t.fngid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.platform.FnPlatformInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.fnpid = t.string();
                    break;
                  case 2:
                    s.fngid = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.platform.FnPlatformInfo"
            }, t
          }(), gt.ZfbChannelInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.zfbChannel = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.zfbChannel && Object.hasOwnProperty.call(t, "zfbChannel") && e.uint32(10).string(t.zfbChannel), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.platform.ZfbChannelInfo; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.zfbChannel = t.string() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.platform.ZfbChannelInfo"
            }, t
          }(), gt.PACK_ID_TYPE = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "PACK_ID_TYPE_NONE"] = 0, e[t[1] = "PACK_ID_TYPE_IOS"] = 1, e[t[2] = "PACK_ID_TYPE_ANDROID"] = 2, e[t[3] = "PACK_ID_TYPE_ALI_PC"] = 3, e
          }(), gt.ZoneLangInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.countryName = "", t.prototype.cityName = "", t.prototype.regionName = "", t.prototype.ispDomain = "", t.prototype.ownerDomain = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.countryName && Object.hasOwnProperty.call(t, "countryName") && e.uint32(10).string(t.countryName), null != t.cityName && Object.hasOwnProperty.call(t, "cityName") && e.uint32(18).string(t.cityName), null != t.regionName && Object.hasOwnProperty.call(t, "regionName") && e.uint32(26).string(t.regionName), null != t.ispDomain && Object.hasOwnProperty.call(t, "ispDomain") && e.uint32(34).string(t.ispDomain), null != t.ownerDomain && Object.hasOwnProperty.call(t, "ownerDomain") && e.uint32(42).string(t.ownerDomain), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.platform.ZoneLangInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.countryName = t.string();
                    break;
                  case 2:
                    s.cityName = t.string();
                    break;
                  case 3:
                    s.regionName = t.string();
                    break;
                  case 4:
                    s.ispDomain = t.string();
                    break;
                  case 5:
                    s.ownerDomain = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.platform.ZoneLangInfo"
            }, t
          }(), gt), It.LoginFailedCode = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "FAILED_UNKNOWN"] = 0, e[t[1] = "FAILED_UNIQUE_ERROR"] = 1, e[t[2] = "FAILED_UUID_ERROR"] = 2, e[t[3] = "FAILED_PID_ERROR"] = 3, e[t[4] = "FAILED_TOKEN_ERROR"] = 4, e[t[5] = "FAILED_PASSWORDERROR"] = 5, e[t[6] = "FAILED_NAME_ILLEGAL"] = 6, e[t[7] = "FAILED_NAME_REPEATED"] = 7, e[t[8] = "FAILED_UUID_FORBID"] = 8, e[t[9] = "FAILED_WHITELIST"] = 9, e[t[10] = "FAILED_FORBID_CREATE"] = 10, e
          }(), It.TokenLogin = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.version = 0, t.prototype.uuid = "", t.prototype.token = "", t.prototype.reconnect = !1, t.prototype.loginZoneid = 0, t.prototype.loginLanguage = "", t.prototype.language = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.version && Object.hasOwnProperty.call(t, "version") && e.uint32(8).uint32(t.version), null != t.uuid && Object.hasOwnProperty.call(t, "uuid") && e.uint32(18).string(t.uuid), null != t.token && Object.hasOwnProperty.call(t, "token") && e.uint32(26).string(t.token), null != t.reconnect && Object.hasOwnProperty.call(t, "reconnect") && e.uint32(32).bool(t.reconnect), null != t.loginZoneid && Object.hasOwnProperty.call(t, "loginZoneid") && e.uint32(40).uint32(t.loginZoneid), null != t.loginLanguage && Object.hasOwnProperty.call(t, "loginLanguage") && e.uint32(50).string(t.loginLanguage), null != t.language && Object.hasOwnProperty.call(t, "language") && e.uint32(58).string(t.language), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.TokenLogin; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.version = t.uint32();
                    break;
                  case 2:
                    s.uuid = t.string();
                    break;
                  case 3:
                    s.token = t.string();
                    break;
                  case 4:
                    s.reconnect = t.bool();
                    break;
                  case 5:
                    s.loginZoneid = t.uint32();
                    break;
                  case 6:
                    s.loginLanguage = t.string();
                    break;
                  case 7:
                    s.language = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.TokenLogin"
            }, t
          }(), It.ClientVersion = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.version = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.version && Object.hasOwnProperty.call(t, "version") && e.uint32(8).uint32(t.version), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.ClientVersion; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.version = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.ClientVersion"
            }, t
          }(), It.LoginFailed = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.retcode = 0, t.prototype.forbidtime = 0, t.prototype.desc = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.retcode && Object.hasOwnProperty.call(t, "retcode") && e.uint32(8).int32(t.retcode), null != t.forbidtime && Object.hasOwnProperty.call(t, "forbidtime") && e.uint32(16).uint32(t.forbidtime), null != t.desc && Object.hasOwnProperty.call(t, "desc") && e.uint32(26).string(t.desc), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.LoginFailed; t.pos < i;) {
