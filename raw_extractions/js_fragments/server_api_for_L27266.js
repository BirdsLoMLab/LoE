// Fragment: server_api_for_L27266.js
// Lines: 27266-27385 of bundle-beautified.js
// Categories: Server/API
// Keywords: token
// Hit lines: 27266, 27267, 27285

            return t.prototype.uuid = "", t.prototype.logintime = 0, t.prototype.fengniaoData = "", t.prototype.token = "", t.prototype.deskey = ze.newBuffer([]), t.prototype.gatewayIp = "", t.prototype.gatewayPort = 0, t.prototype.name = "", t.prototype.retData = "", t.prototype.list = ze.emptyArray, t.prototype.whitelist = !1, t.prototype.zoneid = 0, t.prototype.loginZoneid = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.uuid && Object.hasOwnProperty.call(t, "uuid") && e.uint32(10).string(t.uuid), null != t.token && Object.hasOwnProperty.call(t, "token") && e.uint32(18).string(t.token), null != t.logintime && Object.hasOwnProperty.call(t, "logintime") && e.uint32(24).uint32(t.logintime), null != t.deskey && Object.hasOwnProperty.call(t, "deskey") && e.uint32(34).bytes(t.deskey), null != t.gatewayIp && Object.hasOwnProperty.call(t, "gatewayIp") && e.uint32(42).string(t.gatewayIp), null != t.gatewayPort && Object.hasOwnProperty.call(t, "gatewayPort") && e.uint32(48).uint32(t.gatewayPort), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(58).string(t.name), null != t.fengniaoData && Object.hasOwnProperty.call(t, "fengniaoData") && e.uint32(66).string(t.fengniaoData), null != t.retData && Object.hasOwnProperty.call(t, "retData") && e.uint32(74).string(t.retData), null != t.list && t.list.length)
                for (var i = 0; i < t.list.length; ++i) Ke.login.bifrost.MyZone.encode(t.list[i], e.uint32(82).fork()).ldelim();
              return null != t.whitelist && Object.hasOwnProperty.call(t, "whitelist") && e.uint32(88).bool(t.whitelist), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(96).uint32(t.zoneid), null != t.loginZoneid && Object.hasOwnProperty.call(t, "loginZoneid") && e.uint32(104).uint32(t.loginZoneid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.bifrost.LoginSuccess; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.uuid = t.string();
                    break;
                  case 3:
                    s.logintime = t.uint32();
                    break;
                  case 8:
                    s.fengniaoData = t.string();
                    break;
                  case 2:
                    s.token = t.string();
                    break;
                  case 4:
                    s.deskey = t.bytes();
                    break;
                  case 5:
                    s.gatewayIp = t.string();
                    break;
                  case 6:
                    s.gatewayPort = t.uint32();
                    break;
                  case 7:
                    s.name = t.string();
                    break;
                  case 9:
                    s.retData = t.string();
                    break;
                  case 10:
                    s.list && s.list.length || (s.list = []), s.list.push(Ke.login.bifrost.MyZone.decode(t, t.uint32()));
                    break;
                  case 11:
                    s.whitelist = t.bool();
                    break;
                  case 12:
                    s.zoneid = t.uint32();
                    break;
                  case 13:
                    s.loginZoneid = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.bifrost.LoginSuccess"
            }, t
          }(), mt.MyZone = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.zoneid = 0, t.prototype.onlinetime = 0, t.prototype.name = "", t.prototype.level = 0, t.prototype.country = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(8).uint32(t.zoneid), null != t.onlinetime && Object.hasOwnProperty.call(t, "onlinetime") && e.uint32(16).uint32(t.onlinetime), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(26).string(t.name), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(32).uint32(t.level), null != t.country && Object.hasOwnProperty.call(t, "country") && e.uint32(40).uint32(t.country), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.bifrost.MyZone; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.zoneid = t.uint32();
                    break;
                  case 2:
                    s.onlinetime = t.uint32();
                    break;
                  case 3:
                    s.name = t.string();
                    break;
                  case 4:
                    s.level = t.uint32();
                    break;
                  case 5:
                    s.country = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.bifrost.MyZone"
            }, t
          }(), mt.FengNiaoLogin = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.name = "", t.prototype.uid = "", t.prototype.ext = "", t.prototype.zoneid = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(10).string(t.name), null != t.uid && Object.hasOwnProperty.call(t, "uid") && e.uint32(18).string(t.uid), null != t.ext && Object.hasOwnProperty.call(t, "ext") && e.uint32(26).string(t.ext), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(32).uint32(t.zoneid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.bifrost.FengNiaoLogin; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.name = t.string();
                    break;
                  case 2:
                    s.uid = t.string();
                    break;
                  case 3:
                    s.ext = t.string();
                    break;
                  case 4:
                    s.zoneid = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
