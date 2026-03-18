// Fragment: stat_system_for_L32079.js
// Lines: 32079-32211 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 32079, 32080, 32111

            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.baseid = 0, t.prototype.pos = null, t.prototype.angle = 0, t.prototype.hp = "", t.prototype.maxhp = "", t.prototype.movespeed = 0, t.prototype.ustateList = ze.emptyArray, t.prototype.buffList = ze.emptyArray, t.prototype.isDie = !1, t.prototype.masterid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.ownerUnion = 0, t.prototype.countryid = 0, t.prototype.level = 0, t.prototype.targetid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.moveInfo = null, t.prototype.skilllevelids = ze.emptyArray, t.prototype.funcType = 0, t.prototype.funcCfgId = 0, t.prototype.userMasterid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.star = 0, t.prototype.items = ze.emptyObject, t.prototype.shield = "", t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), null != t.baseid && Object.hasOwnProperty.call(t, "baseid") && e.uint32(16).uint32(t.baseid), null != t.pos && Object.hasOwnProperty.call(t, "pos") && Ke.mapscreen.Pos.encode(t.pos, e.uint32(26).fork()).ldelim(), null != t.angle && Object.hasOwnProperty.call(t, "angle") && e.uint32(32).uint32(t.angle), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(42).string(t.hp), null != t.maxhp && Object.hasOwnProperty.call(t, "maxhp") && e.uint32(50).string(t.maxhp), null != t.movespeed && Object.hasOwnProperty.call(t, "movespeed") && e.uint32(56).uint32(t.movespeed), null != t.ustateList && t.ustateList.length)
                for (var i = 0; i < t.ustateList.length; ++i) Ke.mapscreen.UState.encode(t.ustateList[i], e.uint32(66).fork()).ldelim();
              if (null != t.buffList && t.buffList.length)
                for (i = 0; i < t.buffList.length; ++i) Ke.mapscreen.Buff.encode(t.buffList[i], e.uint32(74).fork()).ldelim();
              if (null != t.isDie && Object.hasOwnProperty.call(t, "isDie") && e.uint32(80).bool(t.isDie), null != t.masterid && Object.hasOwnProperty.call(t, "masterid") && e.uint32(88).uint64(t.masterid), null != t.ownerUnion && Object.hasOwnProperty.call(t, "ownerUnion") && e.uint32(104).uint32(t.ownerUnion), null != t.countryid && Object.hasOwnProperty.call(t, "countryid") && e.uint32(112).uint32(t.countryid), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(120).uint32(t.level), null != t.targetid && Object.hasOwnProperty.call(t, "targetid") && e.uint32(128).uint64(t.targetid), null != t.moveInfo && Object.hasOwnProperty.call(t, "moveInfo") && Ke.mapscreen.MoveInfo.encode(t.moveInfo, e.uint32(138).fork()).ldelim(), null != t.skilllevelids && t.skilllevelids.length) {
                for (e.uint32(146).fork(), i = 0; i < t.skilllevelids.length; ++i) e.uint32(t.skilllevelids[i]);
                e.ldelim()
              }
              if (null != t.funcType && Object.hasOwnProperty.call(t, "funcType") && e.uint32(152).uint32(t.funcType), null != t.funcCfgId && Object.hasOwnProperty.call(t, "funcCfgId") && e.uint32(160).uint32(t.funcCfgId), null != t.userMasterid && Object.hasOwnProperty.call(t, "userMasterid") && e.uint32(168).uint64(t.userMasterid), null != t.star && Object.hasOwnProperty.call(t, "star") && e.uint32(176).uint32(t.star), null != t.items && Object.hasOwnProperty.call(t, "items")) {
                var s = Object.keys(t.items);
                for (i = 0; i < s.length; ++i) e.uint32(186).fork().uint32(8).uint64(s[i]).uint32(16).uint32(t.items[s[i]]).ldelim()
              }
              return null != t.shield && Object.hasOwnProperty.call(t, "shield") && e.uint32(194).string(t.shield), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.mapscreen.NpcMapData; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.thisid = t.uint64();
                    break;
                  case 2:
                    n.baseid = t.uint32();
                    break;
                  case 3:
                    n.pos = Ke.mapscreen.Pos.decode(t, t.uint32());
                    break;
                  case 4:
                    n.angle = t.uint32();
                    break;
                  case 5:
                    n.hp = t.string();
                    break;
                  case 6:
                    n.maxhp = t.string();
                    break;
                  case 7:
                    n.movespeed = t.uint32();
                    break;
                  case 8:
                    n.ustateList && n.ustateList.length || (n.ustateList = []), n.ustateList.push(Ke.mapscreen.UState.decode(t, t.uint32()));
                    break;
                  case 9:
                    n.buffList && n.buffList.length || (n.buffList = []), n.buffList.push(Ke.mapscreen.Buff.decode(t, t.uint32()));
                    break;
                  case 10:
                    n.isDie = t.bool();
                    break;
                  case 11:
                    n.masterid = t.uint64();
                    break;
                  case 13:
                    n.ownerUnion = t.uint32();
                    break;
                  case 14:
                    n.countryid = t.uint32();
                    break;
                  case 15:
                    n.level = t.uint32();
                    break;
                  case 16:
                    n.targetid = t.uint64();
                    break;
                  case 17:
                    n.moveInfo = Ke.mapscreen.MoveInfo.decode(t, t.uint32());
                    break;
                  case 18:
                    if (n.skilllevelids && n.skilllevelids.length || (n.skilllevelids = []), 2 == (7 & r))
                      for (var a = t.uint32() + t.pos; t.pos < a;) n.skilllevelids.push(t.uint32());
                    else n.skilllevelids.push(t.uint32());
                    break;
                  case 19:
                    n.funcType = t.uint32();
                    break;
                  case 20:
                    n.funcCfgId = t.uint32();
                    break;
                  case 21:
                    n.userMasterid = t.uint64();
                    break;
                  case 22:
                    n.star = t.uint32();
                    break;
                  case 23:
                    for (n.items === ze.emptyObject && (n.items = {}), a = t.uint32() + t.pos, i = 0, s = 0; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
                        case 1:
                          i = t.uint64();
                          break;
                        case 2:
                          s = t.uint32();
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.items["object" == typeof i ? ze.longToHash(i) : i] = s;
                    break;
                  case 24:
                    n.shield = t.string();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.NpcMapData"
            }, t
          }(), vt.RefreshNpc = function() {
            function t(t) {
              if (this.data = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.data = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.data && t.data.length)
                for (var i = 0; i < t.data.length; ++i) Ke.mapscreen.NpcMapData.encode(t.data[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.RefreshNpc; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.data && s.data.length || (s.data = []), s.data.push(Ke.mapscreen.NpcMapData.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.RefreshNpc"
            }, t
          }(), vt.CreateNpc = function() {
            function t(t) {
              if (t)
