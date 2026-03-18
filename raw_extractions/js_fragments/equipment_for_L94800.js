// Fragment: equipment_for_L94800.js
// Lines: 94800-94925 of bundle-beautified.js
// Categories: Equipment
// Keywords: quality
// Hit lines: 94800, 94801, 94825

            return t.prototype.pos = 0, t.prototype.equipUid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.equipConfig = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.lev = 0, t.prototype.equipUidStr = "", t.prototype.quality = 0, t.prototype.gemList = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(8).uint32(t.pos), null != t.equipUid && Object.hasOwnProperty.call(t, "equipUid") && e.uint32(16).uint64(t.equipUid), null != t.equipConfig && Object.hasOwnProperty.call(t, "equipConfig") && e.uint32(24).uint64(t.equipConfig), null != t.lev && Object.hasOwnProperty.call(t, "lev") && e.uint32(32).uint32(t.lev), null != t.equipUidStr && Object.hasOwnProperty.call(t, "equipUidStr") && e.uint32(42).string(t.equipUidStr), null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(48).uint32(t.quality), null != t.gemList && Object.hasOwnProperty.call(t, "gemList"))
                for (var i = Object.keys(t.gemList), s = 0; s < i.length; ++s) e.uint32(58).fork().uint32(8).uint32(i[s]), Ke.db.GemPos.encode(t.gemList[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.LingTiPos; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.pos = t.uint32();
                    break;
                  case 2:
                    n.equipUid = t.uint64();
                    break;
                  case 3:
                    n.equipConfig = t.uint64();
                    break;
                  case 4:
                    n.lev = t.uint32();
                    break;
                  case 5:
                    n.equipUidStr = t.string();
                    break;
                  case 6:
                    n.quality = t.uint32();
                    break;
                  case 7:
                    n.gemList === ze.emptyObject && (n.gemList = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = null; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
                        case 1:
                          i = t.uint32();
                          break;
                        case 2:
                          s = Ke.db.GemPos.decode(t, t.uint32());
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.gemList[i] = s;
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.LingTiPos"
            }, t
          }(), Ze.GemPos = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.pos = 0, t.prototype.gemConfig = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(8).uint32(t.pos), null != t.gemConfig && Object.hasOwnProperty.call(t, "gemConfig") && e.uint32(16).uint64(t.gemConfig), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.GemPos; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.pos = t.uint32();
                    break;
                  case 2:
                    s.gemConfig = t.uint64();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.GemPos"
            }, t
          }(), Ze.FESTIVAL_ACT_SUB_FUNCID = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "NONE"] = 0, e[t[1] = "TOTAL"] = 1, e[t[2] = "SHOP"] = 2, e[t[3] = "CARD"] = 3, e[t[4] = "TURNTABLE"] = 4, e[t[5] = "BATTLE_PASS"] = 5, e[t[6] = "RANK"] = 6, e[t[7] = "FESTIVAL_BOSS"] = 7, e[t[8] = "GIFT"] = 8, e[t[9] = "QUEST"] = 9, e[t[10] = "NINE_GRID"] = 10, e[t[11] = "LIL_TURNTABLE"] = 11, e[t[12] = "COMMON_LOTTERY"] = 12, e[t[13] = "XIAOXIAOLE"] = 13, e[t[14] = "CUT_TREE_LOTTERY"] = 14, e
          }(), Ze.FestivalActInfo = function() {
            function t(t) {
              if (this.festivalBoss = {}, this.festivalPass = {}, this.festivalMonster = {}, this.festivalFuncOpen = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.festivalBoss = ze.emptyObject, t.prototype.festivalPass = ze.emptyObject, t.prototype.festivalMonster = ze.emptyObject, t.prototype.festivalFuncOpen = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.festivalBoss && Object.hasOwnProperty.call(t, "festivalBoss"))
                for (var i = Object.keys(t.festivalBoss), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]), Ke.db.FestivalBoss.encode(t.festivalBoss[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              if (null != t.festivalPass && Object.hasOwnProperty.call(t, "festivalPass"))
                for (i = Object.keys(t.festivalPass), s = 0; s < i.length; ++s) e.uint32(18).fork().uint32(8).uint32(i[s]), Ke.db.FestivalPass.encode(t.festivalPass[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              if (null != t.festivalMonster && Object.hasOwnProperty.call(t, "festivalMonster"))
                for (i = Object.keys(t.festivalMonster), s = 0; s < i.length; ++s) e.uint32(26).fork().uint32(8).uint32(i[s]), Ke.db.FestivalMonster.encode(t.festivalMonster[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              if (null != t.festivalFuncOpen && Object.hasOwnProperty.call(t, "festivalFuncOpen"))
                for (i = Object.keys(t.festivalFuncOpen), s = 0; s < i.length; ++s) e.uint32(34).fork().uint32(8).uint32(i[s]), Ke.db.FestivalFuncOpen.encode(t.festivalFuncOpen[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.FestivalActInfo; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.festivalBoss === ze.emptyObject && (n.festivalBoss = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = null; t.pos < a;) switch ((l = t.uint32()) >>> 3) {
                      case 1:
                        i = t.uint32();
                        break;
                      case 2:
                        s = Ke.db.FestivalBoss.decode(t, t.uint32());
                        break;
                      default:
                        t.skipType(7 & l)
                    }
                    n.festivalBoss[i] = s;
                    break;
                  case 2:
                    for (n.festivalPass === ze.emptyObject && (n.festivalPass = {}), a = t.uint32() + t.pos, i = 0, s = null; t.pos < a;) switch ((l = t.uint32()) >>> 3) {
                      case 1:
                        i = t.uint32();
                        break;
                      case 2:
                        s = Ke.db.FestivalPass.decode(t, t.uint32());
                        break;
