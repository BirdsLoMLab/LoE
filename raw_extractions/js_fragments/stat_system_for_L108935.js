// Fragment: stat_system_for_L108935.js
// Lines: 108935-109097 of bundle-beautified.js
// Categories: Stat System
// Keywords: attack, energy
// Hit lines: 108935, 108936, 108945, 108952, 108997

            return t.prototype.energy = 0, t.prototype.recoverTimeHandler = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.questlist = ze.emptyArray, t.prototype.exploreCount = 0, t.prototype.rate = 0, t.prototype.nextRecoverTime = 0, t.prototype.totalEnergy = 0, t.prototype.isReset = !1, t.prototype.logs = ze.emptyObject, t.prototype.version = 0, t.prototype.attack = null, t.prototype.intoCopy = !1, t.prototype.lastResetTime = 0, t.prototype.lastIntoCopyTime = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(8).uint32(t.energy), null != t.recoverTimeHandler && Object.hasOwnProperty.call(t, "recoverTimeHandler") && e.uint32(16).uint64(t.recoverTimeHandler), null != t.questlist && t.questlist.length) {
                e.uint32(26).fork();
                for (var i = 0; i < t.questlist.length; ++i) e.uint32(t.questlist[i]);
                e.ldelim()
              }
              if (null != t.exploreCount && Object.hasOwnProperty.call(t, "exploreCount") && e.uint32(32).uint32(t.exploreCount), null != t.rate && Object.hasOwnProperty.call(t, "rate") && e.uint32(40).uint32(t.rate), null != t.nextRecoverTime && Object.hasOwnProperty.call(t, "nextRecoverTime") && e.uint32(48).uint32(t.nextRecoverTime), null != t.totalEnergy && Object.hasOwnProperty.call(t, "totalEnergy") && e.uint32(56).uint32(t.totalEnergy), null != t.isReset && Object.hasOwnProperty.call(t, "isReset") && e.uint32(64).bool(t.isReset), null != t.logs && Object.hasOwnProperty.call(t, "logs")) {
                var s = Object.keys(t.logs);
                for (i = 0; i < s.length; ++i) e.uint32(74).fork().uint32(8).uint32(s[i]), Ke.db.RuinsLog.encode(t.logs[s[i]], e.uint32(18).fork()).ldelim().ldelim()
              }
              return null != t.version && Object.hasOwnProperty.call(t, "version") && e.uint32(80).uint32(t.version), null != t.attack && Object.hasOwnProperty.call(t, "attack") && Ke.db.RuinsAttack.encode(t.attack, e.uint32(90).fork()).ldelim(), null != t.intoCopy && Object.hasOwnProperty.call(t, "intoCopy") && e.uint32(96).bool(t.intoCopy), null != t.lastResetTime && Object.hasOwnProperty.call(t, "lastResetTime") && e.uint32(104).uint32(t.lastResetTime), null != t.lastIntoCopyTime && Object.hasOwnProperty.call(t, "lastIntoCopyTime") && e.uint32(112).uint32(t.lastIntoCopyTime), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.RuinsUser; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.energy = t.uint32();
                    break;
                  case 2:
                    n.recoverTimeHandler = t.uint64();
                    break;
                  case 3:
                    if (n.questlist && n.questlist.length || (n.questlist = []), 2 == (7 & r))
                      for (var a = t.uint32() + t.pos; t.pos < a;) n.questlist.push(t.uint32());
                    else n.questlist.push(t.uint32());
                    break;
                  case 4:
                    n.exploreCount = t.uint32();
                    break;
                  case 5:
                    n.rate = t.uint32();
                    break;
                  case 6:
                    n.nextRecoverTime = t.uint32();
                    break;
                  case 7:
                    n.totalEnergy = t.uint32();
                    break;
                  case 8:
                    n.isReset = t.bool();
                    break;
                  case 9:
                    for (n.logs === ze.emptyObject && (n.logs = {}), a = t.uint32() + t.pos, i = 0, s = null; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
                        case 1:
                          i = t.uint32();
                          break;
                        case 2:
                          s = Ke.db.RuinsLog.decode(t, t.uint32());
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.logs[i] = s;
                    break;
                  case 10:
                    n.version = t.uint32();
                    break;
                  case 11:
                    n.attack = Ke.db.RuinsAttack.decode(t, t.uint32());
                    break;
                  case 12:
                    n.intoCopy = t.bool();
                    break;
                  case 13:
                    n.lastResetTime = t.uint32();
                    break;
                  case 14:
                    n.lastIntoCopyTime = t.uint32();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.RuinsUser"
            }, t
          }(), Ze.RuinsMgr = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.user = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.user && Object.hasOwnProperty.call(t, "user") && Ke.db.RuinsUser.encode(t.user, e.uint32(10).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.RuinsMgr; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.user = Ke.db.RuinsUser.decode(t, t.uint32()) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.RuinsMgr"
            }, t
          }(), Ze.RuinsAtkInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.trCharid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.lastAtkTime = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.trCharid && Object.hasOwnProperty.call(t, "trCharid") && e.uint32(8).uint64(t.trCharid), null != t.lastAtkTime && Object.hasOwnProperty.call(t, "lastAtkTime") && e.uint32(16).uint32(t.lastAtkTime), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.RuinsAtkInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.trCharid = t.uint64();
                    break;
                  case 2:
                    s.lastAtkTime = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.RuinsAtkInfo"
            }, t
          }(), Ze.RuinsGlobalUser = function() {
            function t(t) {
              if (this.exploreCount = {}, this.questlist = [], this.finishEvents = [], this.eventLastTime = {}, this.atkInfo = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.score = 0, t.prototype.exploreCount = ze.emptyObject, t.prototype.protectEndtime = 0, t.prototype.curStage = 0, t.prototype.curPower = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.maxPower = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.questlist = ze.emptyArray, t.prototype.event = null, t.prototype.finishEvents = ze.emptyArray, t.prototype.zoneid = 0, t.prototype.eventLastTime = ze.emptyObject, t.prototype.assistCount = 0, t.prototype.isDead = !1, t.prototype.lootScore = 0, t.prototype.atkInfo = ze.emptyObject, t.prototype.defeatCnt = 0, t.prototype.septid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.score && Object.hasOwnProperty.call(t, "score") && e.uint32(8).uint32(t.score), null != t.exploreCount && Object.hasOwnProperty.call(t, "exploreCount"))
                for (var i = Object.keys(t.exploreCount), s = 0; s < i.length; ++s) e.uint32(18).fork().uint32(8).uint64(i[s]).uint32(16).uint32(t.exploreCount[i[s]]).ldelim();
              if (null != t.protectEndtime && Object.hasOwnProperty.call(t, "protectEndtime") && e.uint32(24).uint32(t.protectEndtime), null != t.curStage && Object.hasOwnProperty.call(t, "curStage") && e.uint32(32).uint32(t.curStage), null != t.curPower && Object.hasOwnProperty.call(t, "curPower") && e.uint32(40).uint64(t.curPower), null != t.maxPower && Object.hasOwnProperty.call(t, "maxPower") && e.uint32(48).uint64(t.maxPower), null != t.questlist && t.questlist.length) {
                for (e.uint32(58).fork(), s = 0; s < t.questlist.length; ++s) e.uint32(t.questlist[s]);
                e.ldelim()
              }
              if (null != t.event && Object.hasOwnProperty.call(t, "event") && Ke.db.RuinsEvent.encode(t.event, e.uint32(66).fork()).ldelim(), null != t.finishEvents && t.finishEvents.length) {
                for (e.uint32(74).fork(), s = 0; s < t.finishEvents.length; ++s) e.uint32(t.finishEvents[s]);
                e.ldelim()
              }
              if (null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(80).uint32(t.zoneid), null != t.eventLastTime && Object.hasOwnProperty.call(t, "eventLastTime"))
                for (i = Object.keys(t.eventLastTime), s = 0; s < i.length; ++s) e.uint32(90).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.eventLastTime[i[s]]).ldelim();
              if (null != t.assistCount && Object.hasOwnProperty.call(t, "assistCount") && e.uint32(96).uint32(t.assistCount), null != t.isDead && Object.hasOwnProperty.call(t, "isDead") && e.uint32(104).bool(t.isDead), null != t.lootScore && Object.hasOwnProperty.call(t, "lootScore") && e.uint32(112).uint32(t.lootScore), null != t.atkInfo && Object.hasOwnProperty.call(t, "atkInfo"))
                for (i = Object.keys(t.atkInfo), s = 0; s < i.length; ++s) e.uint32(122).fork().uint32(8).uint64(i[s]), Ke.db.RuinsAtkInfo.encode(t.atkInfo[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              return null != t.defeatCnt && Object.hasOwnProperty.call(t, "defeatCnt") && e.uint32(128).uint32(t.defeatCnt), null != t.septid && Object.hasOwnProperty.call(t, "septid") && e.uint32(136).uint64(t.septid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.RuinsGlobalUser; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.score = t.uint32();
                    break;
                  case 2:
                    n.exploreCount === ze.emptyObject && (n.exploreCount = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = 0; t.pos < a;) switch ((l = t.uint32()) >>> 3) {
                      case 1:
                        i = t.uint64();
                        break;
                      case 2:
                        s = t.uint32();
                        break;
