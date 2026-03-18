// Fragment: equipment_t_L38791.js
// Lines: 38791-38893 of bundle-beautified.js
// Categories: Equipment, Spirits/Pets
// Keywords: pet, relic
// Hit lines: 38793

            var t = {},
              e = Object.create(t);
            return e[t[0] = "MIN_TYPE"] = 0, e[t[1] = "BASE_TYPE"] = 1, e[t[2] = "LEVEL_TYPE"] = 2, e[t[3] = "EQUIP_TYPE"] = 3, e[t[4] = "SPIRIT_TYPE"] = 4, e[t[5] = "SKILL_TYPE"] = 5, e[t[6] = "SEPT_TYPE"] = 6, e[t[7] = "ALL_TYPE"] = 7, e[t[8] = "MARTIAL"] = 8, e[t[9] = "PUPPET"] = 9, e[t[10] = "RELIC"] = 10, e[t[11] = "FLYING_SWORD"] = 11, e[t[12] = "QILING"] = 12, e[t[13] = "TREASURE"] = 13, e[t[14] = "KOBOLD"] = 14, e[t[15] = "PET"] = 15, e[t[16] = "CLOTHING"] = 16, e[t[17] = "GOD_FRIEND"] = 17, e[t[18] = "BODY_TRAINING"] = 18, e[t[19] = "FAXIANG"] = 19, e[t[20] = "SHENQI"] = 20, e[t[21] = "MINGGE"] = 21, e[t[22] = "MARRY"] = 22, e[t[25] = "DIAOYU"] = 25, e
          }(), Rt.ReqSystemAttr = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.type = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(8).int32(t.type), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.ReqSystemAttr; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.type = t.int32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.ReqSystemAttr"
            }, t
          }(), Rt.RetSystemAttr = function() {
            function t(t) {
              if (this.attr = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.type = 0, t.prototype.attr = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(8).int32(t.type), null != t.attr && Object.hasOwnProperty.call(t, "attr"))
                for (var i = Object.keys(t.attr), s = 0; s < i.length; ++s) e.uint32(18).fork().uint32(8).uint32(i[s]).uint32(18).string(t.attr[i[s]]).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.misc.RetSystemAttr; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.type = t.int32();
                    break;
                  case 2:
                    n.attr === ze.emptyObject && (n.attr = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = ""; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
                        case 1:
                          i = t.uint32();
                          break;
                        case 2:
                          s = t.string();
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.attr[i] = s;
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.RetSystemAttr"
            }, t
          }(), Rt.ReqCharacterAttr = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.charId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.zoneid = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.charId && Object.hasOwnProperty.call(t, "charId") && e.uint32(8).uint64(t.charId), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(16).uint32(t.zoneid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.ReqCharacterAttr; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.charId = t.uint64();
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
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.ReqCharacterAttr"
            }, t
          }(), Rt.RetCharacterAttr = function() {
            function t(t) {
              if (this.attr = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.charId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.attr = ze.emptyObject, t.prototype.moduleAttr = null, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.charId && Object.hasOwnProperty.call(t, "charId") && e.uint32(8).uint64(t.charId), null != t.attr && Object.hasOwnProperty.call(t, "attr"))
                for (var i = Object.keys(t.attr), s = 0; s < i.length; ++s) e.uint32(18).fork().uint32(8).uint32(i[s]).uint32(18).string(t.attr[i[s]]).ldelim();
              return null != t.moduleAttr && Object.hasOwnProperty.call(t, "moduleAttr") && Ke.db.AttrModuleMgr.encode(t.moduleAttr, e.uint32(26).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.misc.RetCharacterAttr; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
