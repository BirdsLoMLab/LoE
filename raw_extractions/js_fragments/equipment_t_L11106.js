// Fragment: equipment_t_L11106.js
// Lines: 11106-11306 of bundle-beautified.js
// Categories: Equipment
// Keywords: equip
// Hit lines: 11106, 11117, 11147, 11160, 11166, 11179, 11185, 11201, 11218, 11227, 11231, 11241, 11249, 11259, 11274, 11291, 11308

          }(), L), Ke.equip = ((A = {}).EquipPosInfo = function() {
            function t(t) {
              if (this.posData = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.posData = ze.emptyObject, t.prototype.refineLevel = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.posData && Object.hasOwnProperty.call(t, "posData"))
                for (var i = Object.keys(t.posData), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]), Ke.db.EquipPosData.encode(t.posData[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              return null != t.refineLevel && Object.hasOwnProperty.call(t, "refineLevel") && e.uint32(16).uint32(t.refineLevel), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.equip.EquipPosInfo; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.posData === ze.emptyObject && (n.posData = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = null; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
                        case 1:
                          i = t.uint32();
                          break;
                        case 2:
                          s = Ke.db.EquipPosData.decode(t, t.uint32());
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.posData[i] = s;
                    break;
                  case 2:
                    n.refineLevel = t.uint32();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.EquipPosInfo"
            }, t
          }(), A.ReqEquipTakeOn = function() {
            function t(t) {
              if (this.itemList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.itemList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.itemList && t.itemList.length)
                for (var i = 0; i < t.itemList.length; ++i) e.uint32(10).string(t.itemList[i]);
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.ReqEquipTakeOn; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.itemList && s.itemList.length || (s.itemList = []), s.itemList.push(t.string())) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.ReqEquipTakeOn"
            }, t
          }(), A.RetEquipTakeOn = function() {
            function t(t) {
              if (this.itemList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.itemList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.itemList && t.itemList.length)
                for (var i = 0; i < t.itemList.length; ++i) e.uint32(10).string(t.itemList[i]);
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.RetEquipTakeOn; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.itemList && s.itemList.length || (s.itemList = []), s.itemList.push(t.string())) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.RetEquipTakeOn"
            }, t
          }(), A.ReqEquipEnhancement = function() {
            function t(t) {
              if (this.posList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.posList = ze.emptyArray, t.prototype.isAuto = !1, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.posList && t.posList.length) {
                e.uint32(10).fork();
                for (var i = 0; i < t.posList.length; ++i) e.uint32(t.posList[i]);
                e.ldelim()
              }
              return null != t.isAuto && Object.hasOwnProperty.call(t, "isAuto") && e.uint32(16).bool(t.isAuto), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.ReqEquipEnhancement; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (s.posList && s.posList.length || (s.posList = []), 2 == (7 & o))
                      for (var n = t.uint32() + t.pos; t.pos < n;) s.posList.push(t.uint32());
                    else s.posList.push(t.uint32());
                    break;
                  case 2:
                    s.isAuto = t.bool();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.ReqEquipEnhancement"
            }, t
          }(), A.RetEquipEnhancement = function() {
            function t(t) {
              if (this.result = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.ret = !1, t.prototype.isAuto = !1, t.prototype.result = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).bool(t.ret), null != t.isAuto && Object.hasOwnProperty.call(t, "isAuto") && e.uint32(16).bool(t.isAuto), null != t.result && t.result.length)
                for (var i = 0; i < t.result.length; ++i) Ke.equip.RetEquipEnhancement.PosRes.encode(t.result[i], e.uint32(26).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.RetEquipEnhancement; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.ret = t.bool();
                    break;
                  case 2:
                    s.isAuto = t.bool();
                    break;
                  case 3:
                    s.result && s.result.length || (s.result = []), s.result.push(Ke.equip.RetEquipEnhancement.PosRes.decode(t, t.uint32()));
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.RetEquipEnhancement"
            }, t.PosRes = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.pos = 0, t.prototype.isSuccess = !1, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(8).uint32(t.pos), null != t.isSuccess && Object.hasOwnProperty.call(t, "isSuccess") && e.uint32(16).bool(t.isSuccess), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.RetEquipEnhancement.PosRes; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.pos = t.uint32();
                      break;
                    case 2:
                      s.isSuccess = t.bool();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/equip.RetEquipEnhancement.PosRes"
              }, t
            }(), t
          }(), A.EquipSkillInfo = function() {
            function t(t) {
              if (this.skills = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.skills = ze.emptyArray, t.prototype.level = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.skills && t.skills.length) {
                e.uint32(10).fork();
                for (var i = 0; i < t.skills.length; ++i) e.uint32(t.skills[i]);
                e.ldelim()
              }
              return null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(16).uint32(t.level), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.EquipSkillInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (s.skills && s.skills.length || (s.skills = []), 2 == (7 & o))
                      for (var n = t.uint32() + t.pos; t.pos < n;) s.skills.push(t.uint32());
                    else s.skills.push(t.uint32());
                    break;
                  case 2:
                    s.level = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
