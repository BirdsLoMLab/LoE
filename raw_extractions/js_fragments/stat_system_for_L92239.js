// Fragment: stat_system_for_L92239.js
// Lines: 92239-92373 of bundle-beautified.js
// Categories: Stat System
// Keywords: energy
// Hit lines: 92239, 92242, 92273

            return t.prototype.id = 0, t.prototype.lv = 0, t.prototype.exp = 0, t.prototype.protectTime = 0, t.prototype.statue = 0, t.prototype.endTime = 0, t.prototype.cache = ze.emptyArray, t.prototype.actThisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.energy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.freeze = 0, t.prototype.nextRecoverTime = 0, t.prototype.totalCostEnergy = 0, t.prototype.diaoyuPoint = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.maxWeightFish = null, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), null != t.lv && Object.hasOwnProperty.call(t, "lv") && e.uint32(16).uint32(t.lv), null != t.exp && Object.hasOwnProperty.call(t, "exp") && e.uint32(24).uint32(t.exp), null != t.protectTime && Object.hasOwnProperty.call(t, "protectTime") && e.uint32(32).uint32(t.protectTime), null != t.statue && Object.hasOwnProperty.call(t, "statue") && e.uint32(40).uint32(t.statue), null != t.endTime && Object.hasOwnProperty.call(t, "endTime") && e.uint32(48).uint32(t.endTime), null != t.cache && t.cache.length)
                for (var i = 0; i < t.cache.length; ++i) Ke.db.DiaoYuFish.encode(t.cache[i], e.uint32(58).fork()).ldelim();
              return null != t.actThisid && Object.hasOwnProperty.call(t, "actThisid") && e.uint32(64).uint64(t.actThisid), null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(72).uint64(t.energy), null != t.freeze && Object.hasOwnProperty.call(t, "freeze") && e.uint32(80).uint32(t.freeze), null != t.nextRecoverTime && Object.hasOwnProperty.call(t, "nextRecoverTime") && e.uint32(88).uint32(t.nextRecoverTime), null != t.totalCostEnergy && Object.hasOwnProperty.call(t, "totalCostEnergy") && e.uint32(96).uint32(t.totalCostEnergy), null != t.diaoyuPoint && Object.hasOwnProperty.call(t, "diaoyuPoint") && e.uint32(104).uint64(t.diaoyuPoint), null != t.maxWeightFish && Object.hasOwnProperty.call(t, "maxWeightFish") && Ke.db.DiaoYuFish.encode(t.maxWeightFish, e.uint32(114).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.DiaoYuActInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.id = t.uint32();
                    break;
                  case 2:
                    s.lv = t.uint32();
                    break;
                  case 3:
                    s.exp = t.uint32();
                    break;
                  case 4:
                    s.protectTime = t.uint32();
                    break;
                  case 5:
                    s.statue = t.uint32();
                    break;
                  case 6:
                    s.endTime = t.uint32();
                    break;
                  case 7:
                    s.cache && s.cache.length || (s.cache = []), s.cache.push(Ke.db.DiaoYuFish.decode(t, t.uint32()));
                    break;
                  case 8:
                    s.actThisid = t.uint64();
                    break;
                  case 9:
                    s.energy = t.uint64();
                    break;
                  case 10:
                    s.freeze = t.uint32();
                    break;
                  case 11:
                    s.nextRecoverTime = t.uint32();
                    break;
                  case 12:
                    s.totalCostEnergy = t.uint32();
                    break;
                  case 13:
                    s.diaoyuPoint = t.uint64();
                    break;
                  case 14:
                    s.maxWeightFish = Ke.db.DiaoYuFish.decode(t, t.uint32());
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.DiaoYuActInfo"
            }, t
          }(), Ze.DiaoYuFish = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.cfgId = 0, t.prototype.weight = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.cfgId && Object.hasOwnProperty.call(t, "cfgId") && e.uint32(8).uint32(t.cfgId), null != t.weight && Object.hasOwnProperty.call(t, "weight") && e.uint32(16).uint32(t.weight), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.DiaoYuFish; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.cfgId = t.uint32();
                    break;
                  case 2:
                    s.weight = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.DiaoYuFish"
            }, t
          }(), Ze.DoubleRebateMgr = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.buyId = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.buyId && Object.hasOwnProperty.call(t, "buyId") && e.uint32(8).uint32(t.buyId), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.DoubleRebateMgr; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.buyId = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.DoubleRebateMgr"
            }, t
          }(), Ze.DragonInfo = function() {
            function t(t) {
              if (this.awardIds = [], this.exchangeIds = {}, this.scoreInfo = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.score = 0, t.prototype.dailyScore = 0, t.prototype.round = 0, t.prototype.awardIds = ze.emptyArray, t.prototype.cell = 0, t.prototype.exchangeIds = ze.emptyObject, t.prototype.scoreInfo = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.score && Object.hasOwnProperty.call(t, "score") && e.uint32(8).uint32(t.score), null != t.dailyScore && Object.hasOwnProperty.call(t, "dailyScore") && e.uint32(16).uint32(t.dailyScore), null != t.round && Object.hasOwnProperty.call(t, "round") && e.uint32(24).uint32(t.round), null != t.awardIds && t.awardIds.length) {
                e.uint32(34).fork();
                for (var i = 0; i < t.awardIds.length; ++i) e.uint32(t.awardIds[i]);
                e.ldelim()
              }
              if (null != t.cell && Object.hasOwnProperty.call(t, "cell") && e.uint32(40).uint32(t.cell), null != t.exchangeIds && Object.hasOwnProperty.call(t, "exchangeIds")) {
                var s = Object.keys(t.exchangeIds);
                for (i = 0; i < s.length; ++i) e.uint32(50).fork().uint32(8).uint32(s[i]).uint32(16).uint32(t.exchangeIds[s[i]]).ldelim()
              }
              if (null != t.scoreInfo && Object.hasOwnProperty.call(t, "scoreInfo"))
                for (s = Object.keys(t.scoreInfo), i = 0; i < s.length; ++i) e.uint32(58).fork().uint32(8).uint32(s[i]).uint32(16).uint32(t.scoreInfo[s[i]]).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.DragonInfo; t.pos < o;) {
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
