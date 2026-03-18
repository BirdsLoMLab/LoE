// Fragment: stat_system_for_L23264.js
// Lines: 23264-23387 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 23264, 23265, 23287

            return t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.pos = 0, t.prototype.starttime = 0, t.prototype.stageid = 0, t.prototype.iswin = !1, t.prototype.hp = "", t.prototype.maxhp = "", t.prototype.ctime = 0, t.prototype.rate = 0, t.prototype.name = "", t.prototype.hprate = 0, t.prototype.eventid = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(8).uint64(t.charid), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(16).uint32(t.pos), null != t.starttime && Object.hasOwnProperty.call(t, "starttime") && e.uint32(24).uint32(t.starttime), null != t.stageid && Object.hasOwnProperty.call(t, "stageid") && e.uint32(32).uint32(t.stageid), null != t.iswin && Object.hasOwnProperty.call(t, "iswin") && e.uint32(40).bool(t.iswin), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(50).string(t.hp), null != t.maxhp && Object.hasOwnProperty.call(t, "maxhp") && e.uint32(58).string(t.maxhp), null != t.ctime && Object.hasOwnProperty.call(t, "ctime") && e.uint32(64).uint32(t.ctime), null != t.rate && Object.hasOwnProperty.call(t, "rate") && e.uint32(72).uint32(t.rate), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(82).string(t.name), null != t.hprate && Object.hasOwnProperty.call(t, "hprate") && e.uint32(88).uint32(t.hprate), null != t.eventid && Object.hasOwnProperty.call(t, "eventid") && e.uint32(96).uint32(t.eventid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.helpbor.HelpBroCopyCallback; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.charid = t.uint64();
                    break;
                  case 2:
                    s.pos = t.uint32();
                    break;
                  case 3:
                    s.starttime = t.uint32();
                    break;
                  case 4:
                    s.stageid = t.uint32();
                    break;
                  case 5:
                    s.iswin = t.bool();
                    break;
                  case 6:
                    s.hp = t.string();
                    break;
                  case 7:
                    s.maxhp = t.string();
                    break;
                  case 8:
                    s.ctime = t.uint32();
                    break;
                  case 9:
                    s.rate = t.uint32();
                    break;
                  case 10:
                    s.name = t.string();
                    break;
                  case 11:
                    s.hprate = t.uint32();
                    break;
                  case 12:
                    s.eventid = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/helpbor.HelpBroCopyCallback"
            }, t
          }(), ot.ReqHelpBorChat = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.starttime = 0, t.prototype.pos = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(8).uint64(t.charid), null != t.starttime && Object.hasOwnProperty.call(t, "starttime") && e.uint32(16).uint32(t.starttime), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(24).uint32(t.pos), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.helpbor.ReqHelpBorChat; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.charid = t.uint64();
                    break;
                  case 2:
                    s.starttime = t.uint32();
                    break;
                  case 3:
                    s.pos = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/helpbor.ReqHelpBorChat"
            }, t
          }(), ot.RetHelpBorChat = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.ret = !1, t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.starttime = 0, t.prototype.pos = 0, t.prototype.hprate = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).bool(t.ret), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(16).uint64(t.charid), null != t.starttime && Object.hasOwnProperty.call(t, "starttime") && e.uint32(24).uint32(t.starttime), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(32).uint32(t.pos), null != t.hprate && Object.hasOwnProperty.call(t, "hprate") && e.uint32(40).uint32(t.hprate), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.helpbor.RetHelpBorChat; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.ret = t.bool();
                    break;
                  case 2:
                    s.charid = t.uint64();
                    break;
                  case 3:
                    s.starttime = t.uint32();
                    break;
                  case 4:
                    s.pos = t.uint32();
                    break;
                  case 5:
                    s.hprate = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/helpbor.RetHelpBorChat"
            }, t
          }(), ot.RetHelpCopyStart = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.eventid = 0, t.prototype.timeout = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.eventid && Object.hasOwnProperty.call(t, "eventid") && e.uint32(8).uint32(t.eventid), null != t.timeout && Object.hasOwnProperty.call(t, "timeout") && e.uint32(16).uint32(t.timeout), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
