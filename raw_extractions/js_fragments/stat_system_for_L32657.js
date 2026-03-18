// Fragment: stat_system_for_L32657.js
// Lines: 32657-32846 of bundle-beautified.js
// Categories: Stat System
// Keywords: block, dodge, speed
// Hit lines: 32657, 32663, 32687, 32746

            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.skilllevelid = 0, t.prototype.targets = ze.emptyArray, t.prototype.cdEndTime = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.doubleHit = !1, t.prototype.speed = 0, t.prototype.chargeTime = 0, t.prototype.replaceSkilllevelid = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), null != t.skilllevelid && Object.hasOwnProperty.call(t, "skilllevelid") && e.uint32(16).uint32(t.skilllevelid), null != t.targets && t.targets.length) {
                e.uint32(26).fork();
                for (var i = 0; i < t.targets.length; ++i) e.uint64(t.targets[i]);
                e.ldelim()
              }
              return null != t.cdEndTime && Object.hasOwnProperty.call(t, "cdEndTime") && e.uint32(32).uint64(t.cdEndTime), null != t.doubleHit && Object.hasOwnProperty.call(t, "doubleHit") && e.uint32(40).bool(t.doubleHit), null != t.speed && Object.hasOwnProperty.call(t, "speed") && e.uint32(48).int32(t.speed), null != t.chargeTime && Object.hasOwnProperty.call(t, "chargeTime") && e.uint32(56).uint32(t.chargeTime), null != t.replaceSkilllevelid && Object.hasOwnProperty.call(t, "replaceSkilllevelid") && e.uint32(64).uint32(t.replaceSkilllevelid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.UseSkill; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.thisid = t.uint64();
                    break;
                  case 2:
                    s.skilllevelid = t.uint32();
                    break;
                  case 3:
                    if (s.targets && s.targets.length || (s.targets = []), 2 == (7 & o))
                      for (var n = t.uint32() + t.pos; t.pos < n;) s.targets.push(t.uint64());
                    else s.targets.push(t.uint64());
                    break;
                  case 4:
                    s.cdEndTime = t.uint64();
                    break;
                  case 5:
                    s.doubleHit = t.bool();
                    break;
                  case 6:
                    s.speed = t.int32();
                    break;
                  case 7:
                    s.chargeTime = t.uint32();
                    break;
                  case 8:
                    s.replaceSkilllevelid = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.UseSkill"
            }, t
          }(), vt.UseSkillSelf = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.data = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.data && Object.hasOwnProperty.call(t, "data") && Ke.mapscreen.UseSkill.encode(t.data, e.uint32(10).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.UseSkillSelf; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.data = Ke.mapscreen.UseSkill.decode(t, t.uint32()) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.UseSkillSelf"
            }, t
          }(), vt.UseSkillList = function() {
            function t(t) {
              if (this.data = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.data = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.data && t.data.length)
                for (var i = 0; i < t.data.length; ++i) Ke.mapscreen.UseSkill.encode(t.data[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.UseSkillList; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.data && s.data.length || (s.data = []), s.data.push(Ke.mapscreen.UseSkill.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.UseSkillList"
            }, t
          }(), vt.DamHealType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "Zero"] = 0, e[t[1] = "Damage"] = 1, e[t[2] = "Heal"] = 2, e[t[3] = "LingLi_Heal"] = 3, e
          }(), vt.DamageChangeType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "Normal"] = 0, e[t[1] = "Crit"] = 1, e[t[2] = "Block"] = 2, e[t[4] = "Dodge"] = 4, e[t[8] = "NotPass"] = 8, e[t[32] = "Crit2"] = 32, e[t[256] = "Hypoxia"] = 256, e[t[512] = "PoLing"] = 512, e
          }(), vt.DamageHealInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.hpChange = "", t.prototype.type = 0, t.prototype.ctype = 0, t.prototype.dead = !1, t.prototype.lingliChange = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), null != t.hpChange && Object.hasOwnProperty.call(t, "hpChange") && e.uint32(18).string(t.hpChange), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(24).int32(t.type), null != t.ctype && Object.hasOwnProperty.call(t, "ctype") && e.uint32(32).uint32(t.ctype), null != t.dead && Object.hasOwnProperty.call(t, "dead") && e.uint32(48).bool(t.dead), null != t.lingliChange && Object.hasOwnProperty.call(t, "lingliChange") && e.uint32(58).string(t.lingliChange), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.DamageHealInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.thisid = t.uint64();
                    break;
                  case 2:
                    s.hpChange = t.string();
                    break;
                  case 3:
                    s.type = t.int32();
                    break;
                  case 4:
                    s.ctype = t.uint32();
                    break;
                  case 6:
                    s.dead = t.bool();
                    break;
                  case 7:
                    s.lingliChange = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.DamageHealInfo"
            }, t
          }(), vt.BuffInfo = function() {
            function t(t) {
              if (this.buffids = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.buffids = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), null != t.buffids && t.buffids.length) {
                e.uint32(18).fork();
                for (var i = 0; i < t.buffids.length; ++i) e.uint32(t.buffids[i]);
                e.ldelim()
              }
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.BuffInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.thisid = t.uint64();
                    break;
                  case 2:
                    if (s.buffids && s.buffids.length || (s.buffids = []), 2 == (7 & o))
                      for (var n = t.uint32() + t.pos; t.pos < n;) s.buffids.push(t.uint32());
                    else s.buffids.push(t.uint32());
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.BuffInfo"
            }, t
          }(), vt.MoveType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "Charge"] = 0, e[t[1] = "Repel"] = 1, e
          }(), vt.SkillMove = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.dest = null, t.prototype.endMsec = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.type = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), null != t.dest && Object.hasOwnProperty.call(t, "dest") && Ke.mapscreen.Pos.encode(t.dest, e.uint32(18).fork()).ldelim(), null != t.endMsec && Object.hasOwnProperty.call(t, "endMsec") && e.uint32(24).uint64(t.endMsec), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(32).int32(t.type), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.SkillMove; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.thisid = t.uint64();
                    break;
                  case 2:
                    s.dest = Ke.mapscreen.Pos.decode(t, t.uint32());
                    break;
                  case 3:
                    s.endMsec = t.uint64();
                    break;
                  case 4:
                    s.type = t.int32();
                    break;
                  default:
