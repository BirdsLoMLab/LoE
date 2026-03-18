// Fragment: stat_system_for_L62462.js
// Lines: 62462-62570 of bundle-beautified.js
// Categories: Stat System
// Keywords: attack
// Hit lines: 62462, 62463, 62470

            return t.prototype.attack = null, t.prototype.actThisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.attack && Object.hasOwnProperty.call(t, "attack") && Ke.db.RuinsAttack.encode(t.attack, e.uint32(10).fork()).ldelim(), null != t.actThisid && Object.hasOwnProperty.call(t, "actThisid") && e.uint32(16).uint64(t.actThisid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.NotifyRuinsAttackIpc; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.attack = Ke.db.RuinsAttack.decode(t, t.uint32());
                    break;
                  case 2:
                    s.actThisid = t.uint64();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.NotifyRuinsAttackIpc"
            }, t
          }(), re.RetRuinsGotoStageIpc = function() {
            function t(t) {
              if (this.items = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.items = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.items && Object.hasOwnProperty.call(t, "items"))
                for (var i = Object.keys(t.items), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.items[i[s]]).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.ruins.RetRuinsGotoStageIpc; t.pos < o;) {
                var r = t.uint32();
                if (r >>> 3 == 1) {
                  n.items === ze.emptyObject && (n.items = {});
                  var a = t.uint32() + t.pos;
                  for (i = 0, s = 0; t.pos < a;) {
                    var l = t.uint32();
                    switch (l >>> 3) {
                      case 1:
                        i = t.uint32();
                        break;
                      case 2:
                        s = t.uint32();
                        break;
                      default:
                        t.skipType(7 & l)
                    }
                  }
                  n.items[i] = s
                } else t.skipType(7 & r)
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.RetRuinsGotoStageIpc"
            }, t
          }(), re.RetRuinsAssistAwardIpc = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.eventCfgid = 0, t.prototype.addScore = 0, t.prototype.addLootScore = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.eventCfgid && Object.hasOwnProperty.call(t, "eventCfgid") && e.uint32(8).uint32(t.eventCfgid), null != t.addScore && Object.hasOwnProperty.call(t, "addScore") && e.uint32(16).uint32(t.addScore), null != t.addLootScore && Object.hasOwnProperty.call(t, "addLootScore") && e.uint32(24).uint32(t.addLootScore), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.RetRuinsAssistAwardIpc; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.eventCfgid = t.uint32();
                    break;
                  case 2:
                    s.addScore = t.uint32();
                    break;
                  case 3:
                    s.addLootScore = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.RetRuinsAssistAwardIpc"
            }, t
          }(), re.NotifyRuinsAssistLogIpc = function() {
            function t(t) {
              if (this.awards = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.logType = 0, t.prototype.assistCharid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.assistName = "", t.prototype.assistZoneid = 0, t.prototype.monsterId = 0, t.prototype.killName = "", t.prototype.killZoneid = 0, t.prototype.dam = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.awards = ze.emptyObject, t.prototype.happenTime = 0, t.prototype.actThisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.isWin = !1, t.prototype.lootScore = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.logType && Object.hasOwnProperty.call(t, "logType") && e.uint32(8).int32(t.logType), null != t.assistCharid && Object.hasOwnProperty.call(t, "assistCharid") && e.uint32(16).uint64(t.assistCharid), null != t.assistName && Object.hasOwnProperty.call(t, "assistName") && e.uint32(26).string(t.assistName), null != t.assistZoneid && Object.hasOwnProperty.call(t, "assistZoneid") && e.uint32(32).uint32(t.assistZoneid), null != t.monsterId && Object.hasOwnProperty.call(t, "monsterId") && e.uint32(40).uint32(t.monsterId), null != t.killName && Object.hasOwnProperty.call(t, "killName") && e.uint32(50).string(t.killName), null != t.killZoneid && Object.hasOwnProperty.call(t, "killZoneid") && e.uint32(56).uint32(t.killZoneid), null != t.dam && Object.hasOwnProperty.call(t, "dam") && e.uint32(64).uint64(t.dam), null != t.awards && Object.hasOwnProperty.call(t, "awards"))
                for (var i = Object.keys(t.awards), s = 0; s < i.length; ++s) e.uint32(74).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.awards[i[s]]).ldelim();
              return null != t.happenTime && Object.hasOwnProperty.call(t, "happenTime") && e.uint32(80).uint32(t.happenTime), null != t.actThisid && Object.hasOwnProperty.call(t, "actThisid") && e.uint32(88).uint64(t.actThisid), null != t.isWin && Object.hasOwnProperty.call(t, "isWin") && e.uint32(96).bool(t.isWin), null != t.lootScore && Object.hasOwnProperty.call(t, "lootScore") && e.uint32(104).uint32(t.lootScore), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.ruins.NotifyRuinsAssistLogIpc; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.logType = t.int32();
                    break;
                  case 2:
                    n.assistCharid = t.uint64();
                    break;
                  case 3:
                    n.assistName = t.string();
                    break;
