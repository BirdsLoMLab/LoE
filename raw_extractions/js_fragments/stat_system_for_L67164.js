// Fragment: stat_system_for_L67164.js
// Lines: 67164-67278 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 67164, 67165, 67178

            return t.prototype.bossid = 0, t.prototype.level = 0, t.prototype.hp = "", t.prototype.maxhp = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.bossid && Object.hasOwnProperty.call(t, "bossid") && e.uint32(8).uint32(t.bossid), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(16).uint32(t.level), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(26).string(t.hp), null != t.maxhp && Object.hasOwnProperty.call(t, "maxhp") && e.uint32(34).string(t.maxhp), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept_boss.SeptBossUpdateHp; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.bossid = t.uint32();
                    break;
                  case 2:
                    s.level = t.uint32();
                    break;
                  case 3:
                    s.hp = t.string();
                    break;
                  case 4:
                    s.maxhp = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept_boss.SeptBossUpdateHp"
            }, t
          }(), de.ReqApplyAttend = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept_boss.ReqApplyAttend; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept_boss.ReqApplyAttend"
            }, t
          }(), de.RetApplyAttend = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.ret = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).bool(t.ret), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept_boss.RetApplyAttend; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.ret = t.bool() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept_boss.RetApplyAttend"
            }, t
          }(), de.ReqActiveBuff = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept_boss.ReqActiveBuff; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept_boss.ReqActiveBuff"
            }, t
          }(), de.RetActiveBuff = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.ret = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).bool(t.ret), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept_boss.RetActiveBuff; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.ret = t.bool() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept_boss.RetActiveBuff"
            }, t
          }(), de.ReqSeptBossRankRwd = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept_boss.ReqSeptBossRankRwd; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept_boss.ReqSeptBossRankRwd"
            }, t
          }(), de.RetSeptBossRankRwd = function() {
            function t(t) {
              if (t)
