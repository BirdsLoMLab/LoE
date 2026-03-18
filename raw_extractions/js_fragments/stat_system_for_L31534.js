// Fragment: stat_system_for_L31534.js
// Lines: 31534-31661 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 31534, 31535, 31561

            return t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.name = "", t.prototype.head = 0, t.prototype.pos = null, t.prototype.angle = 0, t.prototype.hp = "", t.prototype.shield = "", t.prototype.ustateList = ze.emptyArray, t.prototype.mapprop = null, t.prototype.showdata = null, t.prototype.isDie = !1, t.prototype.groupid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.level = 0, t.prototype.campid = 0, t.prototype.buffList = ze.emptyArray, t.prototype.targetid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.moveInfo = null, t.prototype.teamid = 0, t.prototype.septid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.septName = "", t.prototype.zoneid = 0, t.prototype.stoneNum = 0, t.prototype.playerScore = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.icon = "", t.prototype.status = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(8).uint64(t.charid), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(18).string(t.name), null != t.head && Object.hasOwnProperty.call(t, "head") && e.uint32(32).uint32(t.head), null != t.pos && Object.hasOwnProperty.call(t, "pos") && Ke.mapscreen.Pos.encode(t.pos, e.uint32(42).fork()).ldelim(), null != t.angle && Object.hasOwnProperty.call(t, "angle") && e.uint32(48).uint32(t.angle), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(58).string(t.hp), null != t.shield && Object.hasOwnProperty.call(t, "shield") && e.uint32(66).string(t.shield), null != t.ustateList && t.ustateList.length)
                for (var i = 0; i < t.ustateList.length; ++i) Ke.mapscreen.UState.encode(t.ustateList[i], e.uint32(74).fork()).ldelim();
              if (null != t.mapprop && Object.hasOwnProperty.call(t, "mapprop") && Ke.mapscreen.CharacterMapProp.encode(t.mapprop, e.uint32(90).fork()).ldelim(), null != t.showdata && Object.hasOwnProperty.call(t, "showdata") && Ke.mapscreen.CharacterMapShow.encode(t.showdata, e.uint32(98).fork()).ldelim(), null != t.isDie && Object.hasOwnProperty.call(t, "isDie") && e.uint32(104).bool(t.isDie), null != t.groupid && Object.hasOwnProperty.call(t, "groupid") && e.uint32(112).uint64(t.groupid), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(120).uint32(t.level), null != t.campid && Object.hasOwnProperty.call(t, "campid") && e.uint32(128).uint32(t.campid), null != t.buffList && t.buffList.length)
                for (i = 0; i < t.buffList.length; ++i) Ke.mapscreen.Buff.encode(t.buffList[i], e.uint32(138).fork()).ldelim();
              return null != t.targetid && Object.hasOwnProperty.call(t, "targetid") && e.uint32(144).uint64(t.targetid), null != t.moveInfo && Object.hasOwnProperty.call(t, "moveInfo") && Ke.mapscreen.MoveInfo.encode(t.moveInfo, e.uint32(154).fork()).ldelim(), null != t.teamid && Object.hasOwnProperty.call(t, "teamid") && e.uint32(160).uint32(t.teamid), null != t.septid && Object.hasOwnProperty.call(t, "septid") && e.uint32(168).uint64(t.septid), null != t.septName && Object.hasOwnProperty.call(t, "septName") && e.uint32(178).string(t.septName), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(184).uint32(t.zoneid), null != t.stoneNum && Object.hasOwnProperty.call(t, "stoneNum") && e.uint32(192).uint32(t.stoneNum), null != t.playerScore && Object.hasOwnProperty.call(t, "playerScore") && e.uint32(200).uint64(t.playerScore), null != t.icon && Object.hasOwnProperty.call(t, "icon") && e.uint32(210).string(t.icon), null != t.status && Object.hasOwnProperty.call(t, "status") && e.uint32(216).int32(t.status), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.CharacterMapData; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.charid = t.uint64();
                    break;
                  case 2:
                    s.name = t.string();
                    break;
                  case 4:
                    s.head = t.uint32();
                    break;
                  case 5:
                    s.pos = Ke.mapscreen.Pos.decode(t, t.uint32());
                    break;
                  case 6:
                    s.angle = t.uint32();
                    break;
                  case 7:
                    s.hp = t.string();
                    break;
                  case 8:
                    s.shield = t.string();
                    break;
                  case 9:
                    s.ustateList && s.ustateList.length || (s.ustateList = []), s.ustateList.push(Ke.mapscreen.UState.decode(t, t.uint32()));
                    break;
                  case 11:
                    s.mapprop = Ke.mapscreen.CharacterMapProp.decode(t, t.uint32());
                    break;
                  case 12:
                    s.showdata = Ke.mapscreen.CharacterMapShow.decode(t, t.uint32());
                    break;
                  case 13:
                    s.isDie = t.bool();
                    break;
                  case 14:
                    s.groupid = t.uint64();
                    break;
                  case 15:
                    s.level = t.uint32();
                    break;
                  case 16:
                    s.campid = t.uint32();
                    break;
                  case 17:
                    s.buffList && s.buffList.length || (s.buffList = []), s.buffList.push(Ke.mapscreen.Buff.decode(t, t.uint32()));
                    break;
                  case 18:
                    s.targetid = t.uint64();
                    break;
                  case 19:
                    s.moveInfo = Ke.mapscreen.MoveInfo.decode(t, t.uint32());
                    break;
                  case 20:
                    s.teamid = t.uint32();
                    break;
                  case 21:
                    s.septid = t.uint64();
                    break;
                  case 22:
                    s.septName = t.string();
                    break;
                  case 23:
                    s.zoneid = t.uint32();
                    break;
                  case 24:
                    s.stoneNum = t.uint32();
                    break;
                  case 25:
                    s.playerScore = t.uint64();
                    break;
                  case 26:
                    s.icon = t.string();
                    break;
                  case 27:
                    s.status = t.int32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.CharacterMapData"
            }, t
          }(), vt.CharacterInit = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.mapdata = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.mapdata && Object.hasOwnProperty.call(t, "mapdata") && Ke.mapscreen.CharacterMapData.encode(t.mapdata, e.uint32(10).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.CharacterInit; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.mapdata = Ke.mapscreen.CharacterMapData.decode(t, t.uint32()) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.CharacterInit"
            }, t
          }(), vt.CharacterPropData = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.CharacterPropData; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.CharacterPropData"
            }, t
