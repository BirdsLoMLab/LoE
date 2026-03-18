// Fragment: server_api_for_L27420.js
// Lines: 27420-27528 of bundle-beautified.js
// Categories: Server/API
// Keywords: token
// Hit lines: 27420, 27421, 27428

            return t.prototype.token = "", t.prototype.deskey = ze.newBuffer([]), t.prototype.gatewayIp = "", t.prototype.gatewayPort = 0, t.prototype.whitelist = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.token && Object.hasOwnProperty.call(t, "token") && e.uint32(10).string(t.token), null != t.deskey && Object.hasOwnProperty.call(t, "deskey") && e.uint32(18).bytes(t.deskey), null != t.gatewayIp && Object.hasOwnProperty.call(t, "gatewayIp") && e.uint32(26).string(t.gatewayIp), null != t.gatewayPort && Object.hasOwnProperty.call(t, "gatewayPort") && e.uint32(32).uint32(t.gatewayPort), null != t.whitelist && Object.hasOwnProperty.call(t, "whitelist") && e.uint32(40).bool(t.whitelist), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.bifrost.LoginZoneSuccess; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.token = t.string();
                    break;
                  case 2:
                    s.deskey = t.bytes();
                    break;
                  case 3:
                    s.gatewayIp = t.string();
                    break;
                  case 4:
                    s.gatewayPort = t.uint32();
                    break;
                  case 5:
                    s.whitelist = t.bool();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.bifrost.LoginZoneSuccess"
            }, t
          }(), mt.LoginZoneFail = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.retcode = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.retcode && Object.hasOwnProperty.call(t, "retcode") && e.uint32(8).int32(t.retcode), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.bifrost.LoginZoneFail; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.retcode = t.int32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.bifrost.LoginZoneFail"
            }, t
          }(), mt), It), Ke.lord = ((yt = {}).ReqLordBase = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.lord.ReqLordBase; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/lord.ReqLordBase"
            }, t
          }(), yt.RetLordBase = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.buyTimes = 0, t.prototype.times = 0, t.prototype.restoreCtime = 0, t.prototype.blockTimes = 0, t.prototype.blockBuyTimes = 0, t.prototype.blockRefreshCd = 0, t.prototype.blockCd = 0, t.prototype.blockRestoreCtime = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.buyTimes && Object.hasOwnProperty.call(t, "buyTimes") && e.uint32(8).uint32(t.buyTimes), null != t.times && Object.hasOwnProperty.call(t, "times") && e.uint32(16).uint32(t.times), null != t.restoreCtime && Object.hasOwnProperty.call(t, "restoreCtime") && e.uint32(24).uint32(t.restoreCtime), null != t.blockTimes && Object.hasOwnProperty.call(t, "blockTimes") && e.uint32(40).uint32(t.blockTimes), null != t.blockBuyTimes && Object.hasOwnProperty.call(t, "blockBuyTimes") && e.uint32(48).uint32(t.blockBuyTimes), null != t.blockRefreshCd && Object.hasOwnProperty.call(t, "blockRefreshCd") && e.uint32(56).uint32(t.blockRefreshCd), null != t.blockCd && Object.hasOwnProperty.call(t, "blockCd") && e.uint32(64).uint32(t.blockCd), null != t.blockRestoreCtime && Object.hasOwnProperty.call(t, "blockRestoreCtime") && e.uint32(72).uint32(t.blockRestoreCtime), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.lord.RetLordBase; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.buyTimes = t.uint32();
                    break;
                  case 2:
                    s.times = t.uint32();
                    break;
                  case 3:
                    s.restoreCtime = t.uint32();
                    break;
                  case 5:
                    s.blockTimes = t.uint32();
                    break;
                  case 6:
                    s.blockBuyTimes = t.uint32();
                    break;
                  case 7:
                    s.blockRefreshCd = t.uint32();
                    break;
                  case 8:
                    s.blockCd = t.uint32();
                    break;
                  case 9:
                    s.blockRestoreCtime = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/lord.RetLordBase"
            }, t
          }(), yt.ReqLordBlockInfo = function() {
