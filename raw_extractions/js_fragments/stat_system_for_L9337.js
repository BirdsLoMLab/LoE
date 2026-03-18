// Fragment: stat_system_for_L9337.js
// Lines: 9337-9445 of bundle-beautified.js
// Categories: Stat System
// Keywords: energy
// Hit lines: 9337, 9338, 9345

            return t.prototype.energy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.nextRecoverTime = 0, t.prototype.totalEnergy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(8).uint64(t.energy), null != t.nextRecoverTime && Object.hasOwnProperty.call(t, "nextRecoverTime") && e.uint32(16).uint32(t.nextRecoverTime), null != t.totalEnergy && Object.hasOwnProperty.call(t, "totalEnergy") && e.uint32(24).uint64(t.totalEnergy), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.diaoyu.RefreshDiaoyuEnergy; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.energy = t.uint64();
                    break;
                  case 2:
                    s.nextRecoverTime = t.uint32();
                    break;
                  case 3:
                    s.totalEnergy = t.uint64();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/diaoyu.RefreshDiaoyuEnergy"
            }, t
          }(), P), Ke.double_rebate = ((M = {}).NotifyDoubleRebate = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.buyId = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.buyId && Object.hasOwnProperty.call(t, "buyId") && e.uint32(8).uint32(t.buyId), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.double_rebate.NotifyDoubleRebate; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.buyId = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/double_rebate.NotifyDoubleRebate"
            }, t
          }(), M), Ke.dragon = ((D = {}).RetAllDragonInfo = function() {
            function t(t) {
              if (this.awardIds = [], this.exchangeIds = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.score = 0, t.prototype.dailyScore = 0, t.prototype.round = 0, t.prototype.awardIds = ze.emptyArray, t.prototype.cell = 0, t.prototype.exchangeIds = ze.emptyObject, t.prototype.subFuncid = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.score && Object.hasOwnProperty.call(t, "score") && e.uint32(8).uint32(t.score), null != t.dailyScore && Object.hasOwnProperty.call(t, "dailyScore") && e.uint32(16).uint32(t.dailyScore), null != t.round && Object.hasOwnProperty.call(t, "round") && e.uint32(24).uint32(t.round), null != t.awardIds && t.awardIds.length) {
                e.uint32(34).fork();
                for (var i = 0; i < t.awardIds.length; ++i) e.uint32(t.awardIds[i]);
                e.ldelim()
              }
              if (null != t.cell && Object.hasOwnProperty.call(t, "cell") && e.uint32(40).uint32(t.cell), null != t.exchangeIds && Object.hasOwnProperty.call(t, "exchangeIds")) {
                var s = Object.keys(t.exchangeIds);
                for (i = 0; i < s.length; ++i) e.uint32(50).fork().uint32(8).uint32(s[i]).uint32(16).uint32(t.exchangeIds[s[i]]).ldelim()
              }
              return null != t.subFuncid && Object.hasOwnProperty.call(t, "subFuncid") && e.uint32(56).uint32(t.subFuncid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.dragon.RetAllDragonInfo; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.score = t.uint32();
                    break;
                  case 2:
                    n.dailyScore = t.uint32();
                    break;
                  case 3:
                    n.round = t.uint32();
                    break;
                  case 4:
                    if (n.awardIds && n.awardIds.length || (n.awardIds = []), 2 == (7 & r))
                      for (var a = t.uint32() + t.pos; t.pos < a;) n.awardIds.push(t.uint32());
                    else n.awardIds.push(t.uint32());
                    break;
                  case 5:
                    n.cell = t.uint32();
                    break;
                  case 6:
                    for (n.exchangeIds === ze.emptyObject && (n.exchangeIds = {}), a = t.uint32() + t.pos, i = 0, s = 0; t.pos < a;) {
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
                    n.exchangeIds[i] = s;
                    break;
                  case 7:
                    n.subFuncid = t.uint32();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/dragon.RetAllDragonInfo"
            }, t
          }(), D.RetDragonScore = function() {
            function t(t) {
              if (t)
