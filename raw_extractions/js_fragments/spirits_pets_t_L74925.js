// Fragment: spirits_pets_t_L74925.js
// Lines: 74925-75125 of bundle-beautified.js
// Categories: Spirits/Pets
// Keywords: spirit
// Hit lines: 74925, 74940, 74970, 74981, 74996, 75009, 75024, 75037, 75070, 75083, 75119, 75130, 75136

          }(), be), Ke.spirit = ((we = {}).SuccinctType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "Succinct_none"] = 0, e[t[1] = "Succinct_hand"] = 1, e[t[2] = "Succinct_auto"] = 2, e
          }(), we.NotifySpiritList = function() {
            function t(t) {
              if (this.list = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.list = ze.emptyObject, t.prototype.isAdd = !1, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.list && Object.hasOwnProperty.call(t, "list"))
                for (var i = Object.keys(t.list), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]), Ke.db.SpiritData.encode(t.list[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              return null != t.isAdd && Object.hasOwnProperty.call(t, "isAdd") && e.uint32(16).bool(t.isAdd), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.spirit.NotifySpiritList; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.list === ze.emptyObject && (n.list = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = null; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
                        case 1:
                          i = t.uint32();
                          break;
                        case 2:
                          s = Ke.db.SpiritData.decode(t, t.uint32());
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.list[i] = s;
                    break;
                  case 2:
                    n.isAdd = t.bool();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.NotifySpiritList"
            }, t
          }(), we.ReqStarUp = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.spiritId = 0, t.prototype.isComplete = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.spiritId && Object.hasOwnProperty.call(t, "spiritId") && e.uint32(8).uint32(t.spiritId), null != t.isComplete && Object.hasOwnProperty.call(t, "isComplete") && e.uint32(16).bool(t.isComplete), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.ReqStarUp; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.spiritId = t.uint32();
                    break;
                  case 2:
                    s.isComplete = t.bool();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.ReqStarUp"
            }, t
          }(), we.RetStarUp = function() {
            function t(t) {
              if (this.info = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.info = ze.emptyArray, t.prototype.skillId = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.info && t.info.length)
                for (var i = 0; i < t.info.length; ++i) Ke.db.SpiritData.encode(t.info[i], e.uint32(10).fork()).ldelim();
              return null != t.skillId && Object.hasOwnProperty.call(t, "skillId") && e.uint32(16).uint32(t.skillId), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.RetStarUp; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.info && s.info.length || (s.info = []), s.info.push(Ke.db.SpiritData.decode(t, t.uint32()));
                    break;
                  case 2:
                    s.skillId = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.RetStarUp"
            }, t
          }(), we.ReqSuccinct = function() {
            function t(t) {
              if (this.condList = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.spiritId = 0, t.prototype.type = 0, t.prototype.condList = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.spiritId && Object.hasOwnProperty.call(t, "spiritId") && e.uint32(8).uint32(t.spiritId), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(16).uint32(t.type), null != t.condList && Object.hasOwnProperty.call(t, "condList"))
                for (var i = Object.keys(t.condList), s = 0; s < i.length; ++s) e.uint32(26).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.condList[i[s]]).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.spirit.ReqSuccinct; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.spiritId = t.uint32();
                    break;
                  case 2:
                    n.type = t.uint32();
                    break;
                  case 3:
                    n.condList === ze.emptyObject && (n.condList = {});
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
                    n.condList[i] = s;
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.ReqSuccinct"
            }, t
          }(), we.RetSuccinct = function() {
            function t(t) {
              if (this.entrys = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.spiritId = 0, t.prototype.type = 0, t.prototype.entrys = ze.emptyObject, t.prototype.isStopAuto = !1, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.spiritId && Object.hasOwnProperty.call(t, "spiritId") && e.uint32(8).uint32(t.spiritId), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(16).uint32(t.type), null != t.entrys && Object.hasOwnProperty.call(t, "entrys"))
                for (var i = Object.keys(t.entrys), s = 0; s < i.length; ++s) e.uint32(26).fork().uint32(8).uint32(i[s]), Ke.db.EntryInfo.encode(t.entrys[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              return null != t.isStopAuto && Object.hasOwnProperty.call(t, "isStopAuto") && e.uint32(32).bool(t.isStopAuto), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.spirit.RetSuccinct; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.spiritId = t.uint32();
                    break;
                  case 2:
                    n.type = t.uint32();
                    break;
                  case 3:
                    n.entrys === ze.emptyObject && (n.entrys = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = null; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
                        case 1:
                          i = t.uint32();
                          break;
                        case 2:
                          s = Ke.db.EntryInfo.decode(t, t.uint32());
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.entrys[i] = s;
                    break;
                  case 4:
                    n.isStopAuto = t.bool();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.RetSuccinct"
            }, t
          }(), we.ReqCancelSuccinct = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
