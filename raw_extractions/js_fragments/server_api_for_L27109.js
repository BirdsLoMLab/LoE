// Fragment: server_api_for_L27109.js
// Lines: 27109-27209 of bundle-beautified.js
// Categories: Server/API
// Keywords: login
// Hit lines: 27109

              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.CreateCharOK; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.charid = t.uint64() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.CreateCharOK"
            }, t
          }(), It.SelectCharLogin = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(8).uint64(t.charid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.SelectCharLogin; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.charid = t.uint64() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.SelectCharLogin"
            }, t
          }(), It.PlatfromVersion = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.platform = 0, t.prototype.version = 0, t.prototype.downUrl = "", t.prototype.appVersion = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.platform && Object.hasOwnProperty.call(t, "platform") && e.uint32(8).uint32(t.platform), null != t.version && Object.hasOwnProperty.call(t, "version") && e.uint32(16).uint32(t.version), null != t.downUrl && Object.hasOwnProperty.call(t, "downUrl") && e.uint32(26).string(t.downUrl), null != t.appVersion && Object.hasOwnProperty.call(t, "appVersion") && e.uint32(34).string(t.appVersion), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.PlatfromVersion; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.platform = t.uint32();
                    break;
                  case 2:
                    s.version = t.uint32();
                    break;
                  case 3:
                    s.downUrl = t.string();
                    break;
                  case 4:
                    s.appVersion = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.PlatfromVersion"
            }, t
          }(), It.NeedVersionList = function() {
            function t(t) {
              if (this.platformVersions = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.platformVersions = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.platformVersions && t.platformVersions.length)
                for (var i = 0; i < t.platformVersions.length; ++i) Ke.login.PlatfromVersion.encode(t.platformVersions[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.NeedVersionList; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.platformVersions && s.platformVersions.length || (s.platformVersions = []), s.platformVersions.push(Ke.login.PlatfromVersion.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.NeedVersionList"
            }, t
          }(), It.bifrost = ((mt = {}).VerifyVersion = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.version = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.version && Object.hasOwnProperty.call(t, "version") && e.uint32(8).uint32(t.version), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.bifrost.VerifyVersion; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.version = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.bifrost.VerifyVersion"
            }, t
          }(), mt.QuickLogin = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.uuid = "", t.prototype.password = "", t.prototype.zoneid = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.uuid && Object.hasOwnProperty.call(t, "uuid") && e.uint32(10).string(t.uuid), null != t.password && Object.hasOwnProperty.call(t, "password") && e.uint32(18).string(t.password), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(24).uint32(t.zoneid), e
            }, t.decode = function(t, e) {
