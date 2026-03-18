// Fragment: equipment_for_L102258.js
// Lines: 102258-102432 of bundle-beautified.js
// Categories: Equipment
// Keywords: quality
// Hit lines: 102258, 102261, 102279, 102321, 102322, 102332

            return t.prototype.tempBagData = ze.emptyArray, t.prototype.quality = 0, t.prototype.autoDecomposeQuality = ze.emptyArray, t.prototype.nextGetTime = 0, t.prototype.exchangeInfo = ze.emptyObject, t.prototype.drawCount = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.tempBagData && t.tempBagData.length)
                for (var i = 0; i < t.tempBagData.length; ++i) Ke.db.MinggeDrawTempBag.encode(t.tempBagData[i], e.uint32(10).fork()).ldelim();
              if (null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(16).uint32(t.quality), null != t.autoDecomposeQuality && t.autoDecomposeQuality.length) {
                for (e.uint32(26).fork(), i = 0; i < t.autoDecomposeQuality.length; ++i) e.uint32(t.autoDecomposeQuality[i]);
                e.ldelim()
              }
              if (null != t.nextGetTime && Object.hasOwnProperty.call(t, "nextGetTime") && e.uint32(32).uint32(t.nextGetTime), null != t.exchangeInfo && Object.hasOwnProperty.call(t, "exchangeInfo")) {
                var s = Object.keys(t.exchangeInfo);
                for (i = 0; i < s.length; ++i) e.uint32(42).fork().uint32(8).uint32(s[i]).uint32(16).uint32(t.exchangeInfo[s[i]]).ldelim()
              }
              return null != t.drawCount && Object.hasOwnProperty.call(t, "drawCount") && e.uint32(48).uint32(t.drawCount), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.MinggeDrawData; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.tempBagData && n.tempBagData.length || (n.tempBagData = []), n.tempBagData.push(Ke.db.MinggeDrawTempBag.decode(t, t.uint32()));
                    break;
                  case 2:
                    n.quality = t.uint32();
                    break;
                  case 3:
                    if (n.autoDecomposeQuality && n.autoDecomposeQuality.length || (n.autoDecomposeQuality = []), 2 == (7 & r))
                      for (var a = t.uint32() + t.pos; t.pos < a;) n.autoDecomposeQuality.push(t.uint32());
                    else n.autoDecomposeQuality.push(t.uint32());
                    break;
                  case 4:
                    n.nextGetTime = t.uint32();
                    break;
                  case 5:
                    for (n.exchangeInfo === ze.emptyObject && (n.exchangeInfo = {}), a = t.uint32() + t.pos, i = 0, s = 0; t.pos < a;) {
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
                    n.exchangeInfo[i] = s;
                    break;
                  case 6:
                    n.drawCount = t.uint32();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.MinggeDrawData"
            }, t
          }(), Ze.MinggeEffect = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = 0, t.prototype.quality = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(16).uint32(t.quality), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.MinggeEffect; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.id = t.uint32();
                    break;
                  case 2:
                    s.quality = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.MinggeEffect"
            }, t
          }(), Ze.MinggeRonghe = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.cfgid1 = 0, t.prototype.cfgid2 = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.cfgid1 && Object.hasOwnProperty.call(t, "cfgid1") && e.uint32(8).uint32(t.cfgid1), null != t.cfgid2 && Object.hasOwnProperty.call(t, "cfgid2") && e.uint32(16).uint32(t.cfgid2), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.MinggeRonghe; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.cfgid1 = t.uint32();
                    break;
                  case 2:
                    s.cfgid2 = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.MinggeRonghe"
            }, t
          }(), Ze.MinggeData = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.uid = "", t.prototype.cfgid = 0, t.prototype.level = 0, t.prototype.effect = null, t.prototype.newEffect = null, t.prototype.rongheInfo = null, t.prototype.refineLv = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.uid && Object.hasOwnProperty.call(t, "uid") && e.uint32(10).string(t.uid), null != t.cfgid && Object.hasOwnProperty.call(t, "cfgid") && e.uint32(16).uint32(t.cfgid), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(24).uint32(t.level), null != t.effect && Object.hasOwnProperty.call(t, "effect") && Ke.db.MinggeEffect.encode(t.effect, e.uint32(34).fork()).ldelim(), null != t.newEffect && Object.hasOwnProperty.call(t, "newEffect") && Ke.db.MinggeEffect.encode(t.newEffect, e.uint32(42).fork()).ldelim(), null != t.rongheInfo && Object.hasOwnProperty.call(t, "rongheInfo") && Ke.db.MinggeRonghe.encode(t.rongheInfo, e.uint32(50).fork()).ldelim(), null != t.refineLv && Object.hasOwnProperty.call(t, "refineLv") && e.uint32(56).uint32(t.refineLv), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.MinggeData; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.uid = t.string();
                    break;
                  case 2:
                    s.cfgid = t.uint32();
                    break;
                  case 3:
                    s.level = t.uint32();
                    break;
                  case 4:
                    s.effect = Ke.db.MinggeEffect.decode(t, t.uint32());
                    break;
                  case 5:
                    s.newEffect = Ke.db.MinggeEffect.decode(t, t.uint32());
                    break;
                  case 6:
                    s.rongheInfo = Ke.db.MinggeRonghe.decode(t, t.uint32());
                    break;
                  case 7:
                    s.refineLv = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.MinggeData"
            }, t
          }(), Ze.MinggeMgr = function() {
            function t(t) {
              if (this.datas = {}, this.slot = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.datas = ze.emptyObject, t.prototype.slot = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.datas && Object.hasOwnProperty.call(t, "datas"))
                for (var i = Object.keys(t.datas), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint64(i[s]), Ke.db.MinggeData.encode(t.datas[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              if (null != t.slot && Object.hasOwnProperty.call(t, "slot"))
                for (i = Object.keys(t.slot), s = 0; s < i.length; ++s) e.uint32(18).fork().uint32(8).uint32(i[s]).uint32(16).uint64(t.slot[i[s]]).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.MinggeMgr; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.datas === ze.emptyObject && (n.datas = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = null; t.pos < a;) switch ((l = t.uint32()) >>> 3) {
                      case 1:
                        i = t.uint64();
                        break;
                      case 2:
