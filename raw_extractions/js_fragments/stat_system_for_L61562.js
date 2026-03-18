// Fragment: stat_system_for_L61562.js
// Lines: 61562-61670 of bundle-beautified.js
// Categories: Stat System
// Keywords: energy
// Hit lines: 61562, 61563, 61570

            return t.prototype.energy = 0, t.prototype.nextRecoverTime = 0, t.prototype.totalEnergy = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(8).uint32(t.energy), null != t.nextRecoverTime && Object.hasOwnProperty.call(t, "nextRecoverTime") && e.uint32(16).uint32(t.nextRecoverTime), null != t.totalEnergy && Object.hasOwnProperty.call(t, "totalEnergy") && e.uint32(24).uint32(t.totalEnergy), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.RefreshRuinsEnergy; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.energy = t.uint32();
                    break;
                  case 2:
                    s.nextRecoverTime = t.uint32();
                    break;
                  case 3:
                    s.totalEnergy = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.RefreshRuinsEnergy"
            }, t
          }(), re.RefreshRuinsPower = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.curPower = 0, t.prototype.maxPower = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.curPower && Object.hasOwnProperty.call(t, "curPower") && e.uint32(8).uint32(t.curPower), null != t.maxPower && Object.hasOwnProperty.call(t, "maxPower") && e.uint32(16).uint32(t.maxPower), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.RefreshRuinsPower; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.curPower = t.uint32();
                    break;
                  case 2:
                    s.maxPower = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.RefreshRuinsPower"
            }, t
          }(), re.ReqRuinsExecute = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.name = "", t.prototype.zoneid = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(10).string(t.name), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(16).uint32(t.zoneid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.ReqRuinsExecute; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.name = t.string();
                    break;
                  case 2:
                    s.zoneid = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.ReqRuinsExecute"
            }, t
          }(), re.RetRuinsExecute = function() {
            function t(t) {
              if (this.finishEvents = [], this.awards = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.isWin = !1, t.prototype.addScore = 0, t.prototype.totalScore = 0, t.prototype.event = null, t.prototype.finishEvents = ze.emptyArray, t.prototype.awards = ze.emptyArray, t.prototype.beforePower = 0, t.prototype.afterPower = 0, t.prototype.maxPower = 0, t.prototype.eventNotExist = !1, t.prototype.addLootScore = 0, t.prototype.totalLootScore = 0, t.prototype.defeatCnt = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.isWin && Object.hasOwnProperty.call(t, "isWin") && e.uint32(8).bool(t.isWin), null != t.addScore && Object.hasOwnProperty.call(t, "addScore") && e.uint32(16).uint32(t.addScore), null != t.totalScore && Object.hasOwnProperty.call(t, "totalScore") && e.uint32(24).uint32(t.totalScore), null != t.event && Object.hasOwnProperty.call(t, "event") && Ke.db.RuinsEvent.encode(t.event, e.uint32(34).fork()).ldelim(), null != t.finishEvents && t.finishEvents.length) {
                e.uint32(42).fork();
                for (var i = 0; i < t.finishEvents.length; ++i) e.uint32(t.finishEvents[i]);
                e.ldelim()
              }
              if (null != t.awards && t.awards.length)
                for (i = 0; i < t.awards.length; ++i) Ke.ruins.RetRuinsExecute.AwardItem.encode(t.awards[i], e.uint32(50).fork()).ldelim();
              return null != t.beforePower && Object.hasOwnProperty.call(t, "beforePower") && e.uint32(56).uint32(t.beforePower), null != t.afterPower && Object.hasOwnProperty.call(t, "afterPower") && e.uint32(64).uint32(t.afterPower), null != t.maxPower && Object.hasOwnProperty.call(t, "maxPower") && e.uint32(72).uint32(t.maxPower), null != t.eventNotExist && Object.hasOwnProperty.call(t, "eventNotExist") && e.uint32(80).bool(t.eventNotExist), null != t.addLootScore && Object.hasOwnProperty.call(t, "addLootScore") && e.uint32(88).uint32(t.addLootScore), null != t.totalLootScore && Object.hasOwnProperty.call(t, "totalLootScore") && e.uint32(96).uint32(t.totalLootScore), null != t.defeatCnt && Object.hasOwnProperty.call(t, "defeatCnt") && e.uint32(104).uint32(t.defeatCnt), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.RetRuinsExecute; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.isWin = t.bool();
                    break;
                  case 2:
                    s.addScore = t.uint32();
                    break;
                  case 3:
                    s.totalScore = t.uint32();
                    break;
                  case 4:
                    s.event = Ke.db.RuinsEvent.decode(t, t.uint32());
                    break;
                  case 5:
                    if (s.finishEvents && s.finishEvents.length || (s.finishEvents = []), 2 == (7 & o))
