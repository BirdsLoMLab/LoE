// Fragment: stat_system_for_L8874.js
// Lines: 8874-9074 of bundle-beautified.js
// Categories: Stat System
// Keywords: energy, hp
// Hit lines: 8874, 8875, 8885, 8921, 8926, 8966, 9004, 9007, 9026

              return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.hp = "", t.prototype.maxHp = "", t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(18).string(t.hp), null != t.maxHp && Object.hasOwnProperty.call(t, "maxHp") && e.uint32(26).string(t.maxHp), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.demon_palace.RefreshBossFightInfoList.RefreshBossFightInfo; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.thisid = t.uint64();
                      break;
                    case 2:
                      s.hp = t.string();
                      break;
                    case 3:
                      s.maxHp = t.string();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/demon_palace.RefreshBossFightInfoList.RefreshBossFightInfo"
              }, t
            }(), t
          }(), T), Ke.diaoyu = ((P = {}).ReqDiaoYuUseInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.diaoyu.ReqDiaoYuUseInfo; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/diaoyu.ReqDiaoYuUseInfo"
            }, t
          }(), P.RetDiaoYuUseInfo = function() {
            function t(t) {
              if (this.fishsBag = {}, this.cache = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.fishsBag = ze.emptyObject, t.prototype.fishBox = null, t.prototype.id = 0, t.prototype.lv = 0, t.prototype.exp = 0, t.prototype.cache = ze.emptyArray, t.prototype.energy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.nextRecoverTime = 0, t.prototype.totalEnergy = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.fishsBag && Object.hasOwnProperty.call(t, "fishsBag"))
                for (var i = Object.keys(t.fishsBag), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.fishsBag[i[s]]).ldelim();
              if (null != t.fishBox && Object.hasOwnProperty.call(t, "fishBox") && Ke.db.FishBox.encode(t.fishBox, e.uint32(18).fork()).ldelim(), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(24).uint32(t.id), null != t.lv && Object.hasOwnProperty.call(t, "lv") && e.uint32(32).uint32(t.lv), null != t.exp && Object.hasOwnProperty.call(t, "exp") && e.uint32(40).uint32(t.exp), null != t.cache && t.cache.length)
                for (s = 0; s < t.cache.length; ++s) Ke.db.DiaoYuFish.encode(t.cache[s], e.uint32(50).fork()).ldelim();
              return null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(56).uint64(t.energy), null != t.nextRecoverTime && Object.hasOwnProperty.call(t, "nextRecoverTime") && e.uint32(64).uint32(t.nextRecoverTime), null != t.totalEnergy && Object.hasOwnProperty.call(t, "totalEnergy") && e.uint32(72).uint32(t.totalEnergy), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.diaoyu.RetDiaoYuUseInfo; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.fishsBag === ze.emptyObject && (n.fishsBag = {});
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
                    n.fishsBag[i] = s;
                    break;
                  case 2:
                    n.fishBox = Ke.db.FishBox.decode(t, t.uint32());
                    break;
                  case 3:
                    n.id = t.uint32();
                    break;
                  case 4:
                    n.lv = t.uint32();
                    break;
                  case 5:
                    n.exp = t.uint32();
                    break;
                  case 6:
                    n.cache && n.cache.length || (n.cache = []), n.cache.push(Ke.db.DiaoYuFish.decode(t, t.uint32()));
                    break;
                  case 7:
                    n.energy = t.uint64();
                    break;
                  case 8:
                    n.nextRecoverTime = t.uint32();
                    break;
                  case 9:
                    n.totalEnergy = t.uint32();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/diaoyu.RetDiaoYuUseInfo"
            }, t
          }(), P.ReqDiaoYuInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.diaoyu.ReqDiaoYuInfo; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/diaoyu.ReqDiaoYuInfo"
            }, t
          }(), P.RetDiaoYuInfo = function() {
            function t(t) {
              if (this.cache = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = 0, t.prototype.lv = 0, t.prototype.exp = 0, t.prototype.cache = ze.emptyArray, t.prototype.energy = 0, t.prototype.nextRecoverTime = 0, t.prototype.totalEnergy = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), null != t.lv && Object.hasOwnProperty.call(t, "lv") && e.uint32(16).uint32(t.lv), null != t.exp && Object.hasOwnProperty.call(t, "exp") && e.uint32(24).uint32(t.exp), null != t.cache && t.cache.length)
                for (var i = 0; i < t.cache.length; ++i) Ke.db.DiaoYuFish.encode(t.cache[i], e.uint32(34).fork()).ldelim();
              return null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(40).uint32(t.energy), null != t.nextRecoverTime && Object.hasOwnProperty.call(t, "nextRecoverTime") && e.uint32(48).uint32(t.nextRecoverTime), null != t.totalEnergy && Object.hasOwnProperty.call(t, "totalEnergy") && e.uint32(56).uint32(t.totalEnergy), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.diaoyu.RetDiaoYuInfo; t.pos < i;) {
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
                    s.cache && s.cache.length || (s.cache = []), s.cache.push(Ke.db.DiaoYuFish.decode(t, t.uint32()));
                    break;
                  case 5:
                    s.energy = t.uint32();
                    break;
                  case 6:
                    s.nextRecoverTime = t.uint32();
                    break;
                  case 7:
                    s.totalEnergy = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/diaoyu.RetDiaoYuInfo"
            }, t
          }(), P.ReqDiaoYu = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.count = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.count && Object.hasOwnProperty.call(t, "count") && e.uint32(8).uint32(t.count), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.diaoyu.ReqDiaoYu; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.count = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/diaoyu.ReqDiaoYu"
            }, t
          }(), P.RetDiaoYu = function() {
            function t(t) {
              if (this.fishs = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.fishs = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.fishs && t.fishs.length)
                for (var i = 0; i < t.fishs.length; ++i) Ke.db.DiaoYuFish.encode(t.fishs[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.diaoyu.RetDiaoYu; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.fishs && s.fishs.length || (s.fishs = []), s.fishs.push(Ke.db.DiaoYuFish.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
