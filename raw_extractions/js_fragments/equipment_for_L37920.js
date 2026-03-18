// Fragment: equipment_for_L37920.js
// Lines: 37920-38110 of bundle-beautified.js
// Categories: Equipment
// Keywords: quality
// Hit lines: 37920, 37923, 37941, 37997, 38000, 38010

            return t.prototype.tempBagData = ze.emptyArray, t.prototype.quality = 0, t.prototype.autoDecomposeQuality = ze.emptyArray, t.prototype.nextGetTime = 0, t.prototype.exchangeInfo = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.tempBagData && t.tempBagData.length)
                for (var i = 0; i < t.tempBagData.length; ++i) Ke.mingge_draw.TempBag.encode(t.tempBagData[i], e.uint32(10).fork()).ldelim();
              if (null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(16).uint32(t.quality), null != t.autoDecomposeQuality && t.autoDecomposeQuality.length) {
                for (e.uint32(26).fork(), i = 0; i < t.autoDecomposeQuality.length; ++i) e.uint32(t.autoDecomposeQuality[i]);
                e.ldelim()
              }
              if (null != t.nextGetTime && Object.hasOwnProperty.call(t, "nextGetTime") && e.uint32(32).uint32(t.nextGetTime), null != t.exchangeInfo && Object.hasOwnProperty.call(t, "exchangeInfo")) {
                var s = Object.keys(t.exchangeInfo);
                for (i = 0; i < s.length; ++i) e.uint32(42).fork().uint32(8).uint32(s[i]).uint32(16).uint32(t.exchangeInfo[s[i]]).ldelim()
              }
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.mingge_draw.RetAllInfo; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.tempBagData && n.tempBagData.length || (n.tempBagData = []), n.tempBagData.push(Ke.mingge_draw.TempBag.decode(t, t.uint32()));
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
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mingge_draw.RetAllInfo"
            }, t
          }(), Dt.ReqDrawMingge = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mingge_draw.ReqDrawMingge; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mingge_draw.ReqDrawMingge"
            }, t
          }(), Dt.RetDrawMingge = function() {
            function t(t) {
              if (this.tempBagData = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.tempBagData = ze.emptyArray, t.prototype.quality = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.tempBagData && t.tempBagData.length)
                for (var i = 0; i < t.tempBagData.length; ++i) Ke.mingge_draw.TempBag.encode(t.tempBagData[i], e.uint32(10).fork()).ldelim();
              return null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(16).uint32(t.quality), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mingge_draw.RetDrawMingge; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.tempBagData && s.tempBagData.length || (s.tempBagData = []), s.tempBagData.push(Ke.mingge_draw.TempBag.decode(t, t.uint32()));
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
              return void 0 === t && (t = "type.googleapis.com"), t + "/mingge_draw.RetDrawMingge"
            }, t
          }(), Dt.ReqGetDrawAward = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mingge_draw.ReqGetDrawAward; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mingge_draw.ReqGetDrawAward"
            }, t
          }(), Dt.RetGetDrawAward = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mingge_draw.RetGetDrawAward; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mingge_draw.RetGetDrawAward"
            }, t
          }(), Dt.ReqGetDailyAward = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mingge_draw.ReqGetDailyAward; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mingge_draw.ReqGetDailyAward"
            }, t
          }(), Dt.RetGetDailyAward = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.nextGetTime = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.nextGetTime && Object.hasOwnProperty.call(t, "nextGetTime") && e.uint32(8).uint32(t.nextGetTime), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mingge_draw.RetGetDailyAward; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.nextGetTime = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mingge_draw.RetGetDailyAward"
            }, t
          }(), Dt.ReqExchangeDrawVoucher = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.exchangeId = 0, t.prototype.exchangeNum = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.exchangeId && Object.hasOwnProperty.call(t, "exchangeId") && e.uint32(8).uint32(t.exchangeId), null != t.exchangeNum && Object.hasOwnProperty.call(t, "exchangeNum") && e.uint32(16).uint32(t.exchangeNum), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mingge_draw.ReqExchangeDrawVoucher; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.exchangeId = t.uint32();
                    break;
                  case 2:
                    s.exchangeNum = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
