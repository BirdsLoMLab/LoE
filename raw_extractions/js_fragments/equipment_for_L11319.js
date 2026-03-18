// Fragment: equipment_for_L11319.js
// Lines: 11319-11519 of bundle-beautified.js
// Categories: Equipment
// Keywords: equip
// Hit lines: 11319, 11325, 11336, 11351, 11362, 11368, 11379, 11394, 11405, 11411, 11422, 11437, 11453

              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.ReqEquipSkillActive; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.id = t.string() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.ReqEquipSkillActive"
            }, t
          }(), A.RetEquipSkillActive = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = "", t.prototype.ret = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(10).string(t.id), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(16).bool(t.ret), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.RetEquipSkillActive; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.id = t.string();
                    break;
                  case 2:
                    s.ret = t.bool();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.RetEquipSkillActive"
            }, t
          }(), A.ReqEquipSkillUp = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.ReqEquipSkillUp; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.ReqEquipSkillUp"
            }, t
          }(), A.RetEquipSkillUp = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.level = 0, t.prototype.ret = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(8).uint32(t.level), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(16).bool(t.ret), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.RetEquipSkillUp; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.level = t.uint32();
                    break;
                  case 2:
                    s.ret = t.bool();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.RetEquipSkillUp"
            }, t
          }(), A.ReqEquipUnlockEntry = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.itemUid = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.itemUid && Object.hasOwnProperty.call(t, "itemUid") && e.uint32(10).string(t.itemUid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.ReqEquipUnlockEntry; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.itemUid = t.string() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.ReqEquipUnlockEntry"
            }, t
          }(), A.RetEquipUnlockEntry = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.itemUid = "", t.prototype.ret = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.itemUid && Object.hasOwnProperty.call(t, "itemUid") && e.uint32(10).string(t.itemUid), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(16).bool(t.ret), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.RetEquipUnlockEntry; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.itemUid = t.string();
                    break;
                  case 2:
                    s.ret = t.bool();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.RetEquipUnlockEntry"
            }, t
          }(), A.EquipCraftingInfo = function() {
            function t(t) {
              if (this.levelRewardList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.waitCount = 0, t.prototype.startTime = 0, t.prototype.exp = 0, t.prototype.bestEquipId = 0, t.prototype.count = 0, t.prototype.levelRewardList = ze.emptyArray, t.prototype.levelUpStartTime = 0, t.prototype.level = 0, t.prototype.autoCount = 0, t.prototype.autoAdCount = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.waitCount && Object.hasOwnProperty.call(t, "waitCount") && e.uint32(8).uint32(t.waitCount), null != t.startTime && Object.hasOwnProperty.call(t, "startTime") && e.uint32(16).uint32(t.startTime), null != t.exp && Object.hasOwnProperty.call(t, "exp") && e.uint32(24).uint32(t.exp), null != t.bestEquipId && Object.hasOwnProperty.call(t, "bestEquipId") && e.uint32(32).uint32(t.bestEquipId), null != t.count && Object.hasOwnProperty.call(t, "count") && e.uint32(40).uint32(t.count), null != t.levelRewardList && t.levelRewardList.length) {
                e.uint32(50).fork();
                for (var i = 0; i < t.levelRewardList.length; ++i) e.uint32(t.levelRewardList[i]);
                e.ldelim()
              }
              return null != t.levelUpStartTime && Object.hasOwnProperty.call(t, "levelUpStartTime") && e.uint32(56).uint32(t.levelUpStartTime), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(64).uint32(t.level), null != t.autoCount && Object.hasOwnProperty.call(t, "autoCount") && e.uint32(72).uint32(t.autoCount), null != t.autoAdCount && Object.hasOwnProperty.call(t, "autoAdCount") && e.uint32(80).uint32(t.autoAdCount), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.EquipCraftingInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.waitCount = t.uint32();
                    break;
                  case 2:
                    s.startTime = t.uint32();
                    break;
                  case 3:
                    s.exp = t.uint32();
                    break;
                  case 4:
                    s.bestEquipId = t.uint32();
                    break;
                  case 5:
                    s.count = t.uint32();
                    break;
                  case 6:
                    if (s.levelRewardList && s.levelRewardList.length || (s.levelRewardList = []), 2 == (7 & o))
                      for (var n = t.uint32() + t.pos; t.pos < n;) s.levelRewardList.push(t.uint32());
                    else s.levelRewardList.push(t.uint32());
                    break;
                  case 7:
                    s.levelUpStartTime = t.uint32();
                    break;
                  case 8:
                    s.level = t.uint32();
                    break;
                  case 9:
                    s.autoCount = t.uint32();
                    break;
                  case 10:
                    s.autoAdCount = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.EquipCraftingInfo"
            }, t
          }(), A.ReqEquipCrafting = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.count = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.count && Object.hasOwnProperty.call(t, "count") && e.uint32(8).uint32(t.count), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.equip.ReqEquipCrafting; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.count = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/equip.ReqEquipCrafting"
            }, t
          }(), A.RetEquipCrafting = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.ret = !1, t.prototype.waitCount = 0, t.prototype.startTime = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).bool(t.ret), null != t.waitCount && Object.hasOwnProperty.call(t, "waitCount") && e.uint32(16).uint32(t.waitCount), null != t.startTime && Object.hasOwnProperty.call(t, "startTime") && e.uint32(32).uint32(t.startTime), e
