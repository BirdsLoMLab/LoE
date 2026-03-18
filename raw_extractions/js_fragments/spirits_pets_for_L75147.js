// Fragment: spirits_pets_for_L75147.js
// Lines: 75147-75347 of bundle-beautified.js
// Categories: Spirits/Pets
// Keywords: spirit
// Hit lines: 75147, 75162, 75173, 75188, 75201, 75231, 75244, 75274, 75285, 75291, 75306, 75321, 75332, 75353

              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.ReqLockSlot; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.spiritId = t.uint32();
                    break;
                  case 2:
                    s.slotId = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.ReqLockSlot"
            }, t
          }(), we.ReqCancelLockSlot = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.spiritId = 0, t.prototype.slotId = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.spiritId && Object.hasOwnProperty.call(t, "spiritId") && e.uint32(8).uint32(t.spiritId), null != t.slotId && Object.hasOwnProperty.call(t, "slotId") && e.uint32(16).uint32(t.slotId), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.ReqCancelLockSlot; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.spiritId = t.uint32();
                    break;
                  case 2:
                    s.slotId = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.ReqCancelLockSlot"
            }, t
          }(), we.ReqUpSpirit = function() {
            function t(t) {
              if (this.spirits = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.spirits = ze.emptyObject, t.prototype.isReset = !1, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.spirits && Object.hasOwnProperty.call(t, "spirits"))
                for (var i = Object.keys(t.spirits), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.spirits[i[s]]).ldelim();
              return null != t.isReset && Object.hasOwnProperty.call(t, "isReset") && e.uint32(16).bool(t.isReset), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.spirit.ReqUpSpirit; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.spirits === ze.emptyObject && (n.spirits = {});
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
                    n.spirits[i] = s;
                    break;
                  case 2:
                    n.isReset = t.bool();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.ReqUpSpirit"
            }, t
          }(), we.RefreshUpSpirits = function() {
            function t(t) {
              if (this.spirits = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.spirits = ze.emptyObject, t.prototype.change = !1, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.spirits && Object.hasOwnProperty.call(t, "spirits"))
                for (var i = Object.keys(t.spirits), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.spirits[i[s]]).ldelim();
              return null != t.change && Object.hasOwnProperty.call(t, "change") && e.uint32(16).bool(t.change), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.spirit.RefreshUpSpirits; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.spirits === ze.emptyObject && (n.spirits = {});
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
                    n.spirits[i] = s;
                    break;
                  case 2:
                    n.change = t.bool();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.RefreshUpSpirits"
            }, t
          }(), we.ReqAwardSpiritPhoto = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.spiritId = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.spiritId && Object.hasOwnProperty.call(t, "spiritId") && e.uint32(8).uint32(t.spiritId), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.ReqAwardSpiritPhoto; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.spiritId = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.ReqAwardSpiritPhoto"
            }, t
          }(), we.RetAwardSpiritPhoto = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            var e;
            return t.prototype.spiritId = 0, t.prototype.lastRewardStar = null, Object.defineProperty(t.prototype, "_lastRewardStar", {
              get: ze.oneOfGetter(e = ["lastRewardStar"]),
              set: ze.oneOfSetter(e)
            }), t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.spiritId && Object.hasOwnProperty.call(t, "spiritId") && e.uint32(8).uint32(t.spiritId), null != t.lastRewardStar && Object.hasOwnProperty.call(t, "lastRewardStar") && e.uint32(16).int32(t.lastRewardStar), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.RetAwardSpiritPhoto; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.spiritId = t.uint32();
                    break;
                  case 2:
                    s.lastRewardStar = t.int32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.RetAwardSpiritPhoto"
            }, t
          }(), we.ReqLevelUp = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.spiritId = 0, t.prototype.type = 0, t.prototype.isOneKey = !1, t.prototype.addLevel = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.spiritId && Object.hasOwnProperty.call(t, "spiritId") && e.uint32(8).uint32(t.spiritId), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(16).uint32(t.type), null != t.isOneKey && Object.hasOwnProperty.call(t, "isOneKey") && e.uint32(24).bool(t.isOneKey), null != t.addLevel && Object.hasOwnProperty.call(t, "addLevel") && e.uint32(32).uint32(t.addLevel), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.ReqLevelUp; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.spiritId = t.uint32();
                    break;
                  case 2:
                    s.type = t.uint32();
                    break;
                  case 3:
                    s.isOneKey = t.bool();
                    break;
                  case 4:
                    s.addLevel = t.uint32();
                    break;
                  default:
