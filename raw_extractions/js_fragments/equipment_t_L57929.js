// Fragment: equipment_t_L57929.js
// Lines: 57929-58129 of bundle-beautified.js
// Categories: Equipment
// Keywords: relic
// Hit lines: 57929, 57938, 57944, 57957, 57980, 57991, 57997, 58008, 58029, 58040, 58055, 58066, 58084

          }(), $t), Ke.relic = ((te = {}).ReqRelicInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.relic.ReqRelicInfo; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/relic.ReqRelicInfo"
            }, t
          }(), te.RetRelicInfo = function() {
            function t(t) {
              if (this.list = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.list = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.list && Object.hasOwnProperty.call(t, "list"))
                for (var i = Object.keys(t.list), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]), Ke.db.RelicOne.encode(t.list[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.relic.RetRelicInfo; t.pos < o;) {
                var r = t.uint32();
                if (r >>> 3 == 1) {
                  n.list === ze.emptyObject && (n.list = {});
                  var a = t.uint32() + t.pos;
                  for (i = 0, s = null; t.pos < a;) {
                    var l = t.uint32();
                    switch (l >>> 3) {
                      case 1:
                        i = t.uint32();
                        break;
                      case 2:
                        s = Ke.db.RelicOne.decode(t, t.uint32());
                        break;
                      default:
                        t.skipType(7 & l)
                    }
                  }
                  n.list[i] = s
                } else t.skipType(7 & r)
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/relic.RetRelicInfo"
            }, t
          }(), te.ReqRelicUpLevel = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.relic.ReqRelicUpLevel; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.id = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/relic.ReqRelicUpLevel"
            }, t
          }(), te.RetRelicUpLevel = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.ret = !1, t.prototype.isSucc = !1, t.prototype.one = null, t.prototype.id = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).bool(t.ret), null != t.isSucc && Object.hasOwnProperty.call(t, "isSucc") && e.uint32(16).bool(t.isSucc), null != t.one && Object.hasOwnProperty.call(t, "one") && Ke.db.RelicOne.encode(t.one, e.uint32(26).fork()).ldelim(), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(32).uint32(t.id), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.relic.RetRelicUpLevel; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.ret = t.bool();
                    break;
                  case 2:
                    s.isSucc = t.bool();
                    break;
                  case 3:
                    s.one = Ke.db.RelicOne.decode(t, t.uint32());
                    break;
                  case 4:
                    s.id = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/relic.RetRelicUpLevel"
            }, t
          }(), te.ReqRelicSell = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = 0, t.prototype.num = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), null != t.num && Object.hasOwnProperty.call(t, "num") && e.uint32(16).uint32(t.num), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.relic.ReqRelicSell; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.id = t.uint32();
                    break;
                  case 2:
                    s.num = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/relic.ReqRelicSell"
            }, t
          }(), te.RetRelicSell = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.ret = !1, t.prototype.id = 0, t.prototype.num = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).bool(t.ret), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(16).uint32(t.id), null != t.num && Object.hasOwnProperty.call(t, "num") && e.uint32(24).uint32(t.num), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.relic.RetRelicSell; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.ret = t.bool();
                    break;
                  case 2:
                    s.id = t.uint32();
                    break;
                  case 3:
                    s.num = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/relic.RetRelicSell"
            }, t
          }(), te), Ke.resource = ((ee = {}).RetAllResource = function() {
            function t(t) {
              if (this.resources = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.copyId = 0, t.prototype.resources = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.copyId && Object.hasOwnProperty.call(t, "copyId") && e.uint32(8).uint32(t.copyId), null != t.resources && t.resources.length)
                for (var i = 0; i < t.resources.length; ++i) Ke.db.Resource.encode(t.resources[i], e.uint32(18).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.resource.RetAllResource; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.copyId = t.uint32();
                    break;
                  case 2:
                    s.resources && s.resources.length || (s.resources = []), s.resources.push(Ke.db.Resource.decode(t, t.uint32()));
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/resource.RetAllResource"
            }, t
          }(), ee.RetOneResource = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.copyId = 0, t.prototype.resId = 0, t.prototype.resValue = ze.Long ? ze.Long.fromBits(0, 0, !1) : 0, t.prototype.srcType = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.copyId && Object.hasOwnProperty.call(t, "copyId") && e.uint32(8).uint32(t.copyId), null != t.resId && Object.hasOwnProperty.call(t, "resId") && e.uint32(16).uint32(t.resId), null != t.resValue && Object.hasOwnProperty.call(t, "resValue") && e.uint32(24).int64(t.resValue), null != t.srcType && Object.hasOwnProperty.call(t, "srcType") && e.uint32(32).uint32(t.srcType), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.resource.RetOneResource; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.copyId = t.uint32();
                    break;
                  case 2:
