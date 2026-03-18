// Fragment: stat_system_for_L116223.js
// Lines: 116223-116415 of bundle-beautified.js
// Categories: Stat System
// Keywords: energy
// Hit lines: 116223, 116224, 116255, 116275, 116315

                return t.prototype.type = 0, t.prototype.state = 0, t.prototype.zoneId = 0, t.prototype.id = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.name = "", t.prototype.icon = "", t.prototype.septId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.septName = "", t.prototype.energy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.cost = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
                  return e || (e = Je.create()), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(8).uint32(t.type), null != t.state && Object.hasOwnProperty.call(t, "state") && e.uint32(16).uint32(t.state), null != t.zoneId && Object.hasOwnProperty.call(t, "zoneId") && e.uint32(24).uint32(t.zoneId), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(32).uint64(t.id), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(42).string(t.name), null != t.icon && Object.hasOwnProperty.call(t, "icon") && e.uint32(50).string(t.icon), null != t.septId && Object.hasOwnProperty.call(t, "septId") && e.uint32(56).uint64(t.septId), null != t.septName && Object.hasOwnProperty.call(t, "septName") && e.uint32(66).string(t.septName), null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(72).uint64(t.energy), null != t.cost && Object.hasOwnProperty.call(t, "cost") && e.uint32(80).uint64(t.cost), e
                }, t.decode = function(t, e) {
                  t instanceof Qe || (t = Qe.create(t));
                  for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.starry_road.CombatRecord.User; t.pos < i;) {
                    var o = t.uint32();
                    switch (o >>> 3) {
                      case 1:
                        s.type = t.uint32();
                        break;
                      case 2:
                        s.state = t.uint32();
                        break;
                      case 3:
                        s.zoneId = t.uint32();
                        break;
                      case 4:
                        s.id = t.uint64();
                        break;
                      case 5:
                        s.name = t.string();
                        break;
                      case 6:
                        s.icon = t.string();
                        break;
                      case 7:
                        s.septId = t.uint64();
                        break;
                      case 8:
                        s.septName = t.string();
                        break;
                      case 9:
                        s.energy = t.uint64();
                        break;
                      case 10:
                        s.cost = t.uint64();
                        break;
                      default:
                        t.skipType(7 & o)
                    }
                  }
                  return s
                }, t.getTypeUrl = function(t) {
                  return void 0 === t && (t = "type.googleapis.com"), t + "/db.starry_road.CombatRecord.User"
                }, t
              }(), t
            }(), t.UserData = function() {
              function t(t) {
                if (this.collectTs = {}, this.questIds = [], t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.charId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.name = "", t.prototype.icon = "", t.prototype.level = 0, t.prototype.power = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.zoneId = 0, t.prototype.septId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.sceneData = null, t.prototype.stateInfo = null, t.prototype.energyInfo = null, t.prototype.pos = 0, t.prototype.springWaterInfo = null, t.prototype.moveInfo = null, t.prototype.collectTs = ze.emptyObject, t.prototype.questIds = ze.emptyArray, t.prototype.kill = 0, t.prototype.atkPer = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.recoverSpeed = 0, t.prototype.coinNum = 0, t.prototype.coinCostNum = 0, t.prototype.autoMoveCosts = null, t.encode = function(t, e) {
                if (e || (e = Je.create()), null != t.charId && Object.hasOwnProperty.call(t, "charId") && e.uint32(8).uint64(t.charId), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(18).string(t.name), null != t.icon && Object.hasOwnProperty.call(t, "icon") && e.uint32(26).string(t.icon), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(32).uint32(t.level), null != t.power && Object.hasOwnProperty.call(t, "power") && e.uint32(40).uint64(t.power), null != t.zoneId && Object.hasOwnProperty.call(t, "zoneId") && e.uint32(48).uint32(t.zoneId), null != t.septId && Object.hasOwnProperty.call(t, "septId") && e.uint32(56).uint64(t.septId), null != t.sceneData && Object.hasOwnProperty.call(t, "sceneData") && Ke.db.starry_road.UserData.Scene.encode(t.sceneData, e.uint32(66).fork()).ldelim(), null != t.stateInfo && Object.hasOwnProperty.call(t, "stateInfo") && Ke.db.starry_road.UserData.State.encode(t.stateInfo, e.uint32(74).fork()).ldelim(), null != t.energyInfo && Object.hasOwnProperty.call(t, "energyInfo") && Ke.db.starry_road.UserData.Energy.encode(t.energyInfo, e.uint32(82).fork()).ldelim(), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(88).uint32(t.pos), null != t.springWaterInfo && Object.hasOwnProperty.call(t, "springWaterInfo") && Ke.db.starry_road.UserData.SpringWater.encode(t.springWaterInfo, e.uint32(98).fork()).ldelim(), null != t.moveInfo && Object.hasOwnProperty.call(t, "moveInfo") && Ke.db.starry_road.UserData.Move.encode(t.moveInfo, e.uint32(106).fork()).ldelim(), null != t.collectTs && Object.hasOwnProperty.call(t, "collectTs"))
                  for (var i = Object.keys(t.collectTs), s = 0; s < i.length; ++s) e.uint32(114).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.collectTs[i[s]]).ldelim();
                if (null != t.questIds && t.questIds.length) {
                  for (e.uint32(122).fork(), s = 0; s < t.questIds.length; ++s) e.uint32(t.questIds[s]);
                  e.ldelim()
                }
                return null != t.kill && Object.hasOwnProperty.call(t, "kill") && e.uint32(128).uint32(t.kill), null != t.atkPer && Object.hasOwnProperty.call(t, "atkPer") && e.uint32(136).uint64(t.atkPer), null != t.recoverSpeed && Object.hasOwnProperty.call(t, "recoverSpeed") && e.uint32(144).uint32(t.recoverSpeed), null != t.coinNum && Object.hasOwnProperty.call(t, "coinNum") && e.uint32(152).uint32(t.coinNum), null != t.coinCostNum && Object.hasOwnProperty.call(t, "coinCostNum") && e.uint32(160).uint32(t.coinCostNum), null != t.autoMoveCosts && Object.hasOwnProperty.call(t, "autoMoveCosts") && Ke.db.starry_road.UserData.AutoMoveCost.encode(t.autoMoveCosts, e.uint32(170).fork()).ldelim(), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.starry_road.UserData; t.pos < o;) {
                  var r = t.uint32();
                  switch (r >>> 3) {
                    case 1:
                      n.charId = t.uint64();
                      break;
                    case 2:
                      n.name = t.string();
                      break;
                    case 3:
                      n.icon = t.string();
                      break;
                    case 4:
                      n.level = t.uint32();
                      break;
                    case 5:
                      n.power = t.uint64();
                      break;
                    case 6:
                      n.zoneId = t.uint32();
                      break;
                    case 7:
                      n.septId = t.uint64();
                      break;
                    case 8:
                      n.sceneData = Ke.db.starry_road.UserData.Scene.decode(t, t.uint32());
                      break;
                    case 9:
                      n.stateInfo = Ke.db.starry_road.UserData.State.decode(t, t.uint32());
                      break;
                    case 10:
                      n.energyInfo = Ke.db.starry_road.UserData.Energy.decode(t, t.uint32());
                      break;
                    case 11:
                      n.pos = t.uint32();
                      break;
                    case 12:
                      n.springWaterInfo = Ke.db.starry_road.UserData.SpringWater.decode(t, t.uint32());
                      break;
                    case 13:
                      n.moveInfo = Ke.db.starry_road.UserData.Move.decode(t, t.uint32());
                      break;
                    case 14:
                      n.collectTs === ze.emptyObject && (n.collectTs = {});
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
                      n.collectTs[i] = s;
                      break;
                    case 15:
                      if (n.questIds && n.questIds.length || (n.questIds = []), 2 == (7 & r))
                        for (a = t.uint32() + t.pos; t.pos < a;) n.questIds.push(t.uint32());
                      else n.questIds.push(t.uint32());
                      break;
                    case 16:
                      n.kill = t.uint32();
                      break;
                    case 17:
                      n.atkPer = t.uint64();
                      break;
                    case 18:
                      n.recoverSpeed = t.uint32();
                      break;
                    case 19:
                      n.coinNum = t.uint32();
                      break;
                    case 20:
                      n.coinCostNum = t.uint32();
                      break;
                    case 21:
                      n.autoMoveCosts = Ke.db.starry_road.UserData.AutoMoveCost.decode(t, t.uint32());
                      break;
                    default:
                      t.skipType(7 & r)
                  }
                }
                return n
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/db.starry_road.UserData"
              }, t.Scene = function() {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
                }
                return t.prototype.sceneId = 0, t.prototype.homePos = 0, t.encode = function(t, e) {
                  return e || (e = Je.create()), null != t.sceneId && Object.hasOwnProperty.call(t, "sceneId") && e.uint32(8).uint32(t.sceneId), null != t.homePos && Object.hasOwnProperty.call(t, "homePos") && e.uint32(16).uint32(t.homePos), e
                }, t.decode = function(t, e) {
                  t instanceof Qe || (t = Qe.create(t));
                  for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.starry_road.UserData.Scene; t.pos < i;) {
                    var o = t.uint32();
                    switch (o >>> 3) {
                      case 1:
                        s.sceneId = t.uint32();
                        break;
                      case 2:
                        s.homePos = t.uint32();
                        break;
                      default:
                        t.skipType(7 & o)
                    }
                  }
                  return s
                }, t.getTypeUrl = function(t) {
                  return void 0 === t && (t = "type.googleapis.com"), t + "/db.starry_road.UserData.Scene"
                }, t
              }(), t.State = function() {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
                }
                return t.prototype.state = 0, t.prototype.firstFight = !1, t.prototype.autoFight = !1, t.prototype.weakness = 0, t.prototype.weaknessTs = 0, t.prototype.beOccupy = !1, t.encode = function(t, e) {
                  return e || (e = Je.create()), null != t.state && Object.hasOwnProperty.call(t, "state") && e.uint32(8).uint32(t.state), null != t.firstFight && Object.hasOwnProperty.call(t, "firstFight") && e.uint32(16).bool(t.firstFight), null != t.autoFight && Object.hasOwnProperty.call(t, "autoFight") && e.uint32(24).bool(t.autoFight), null != t.weakness && Object.hasOwnProperty.call(t, "weakness") && e.uint32(32).uint32(t.weakness), null != t.weaknessTs && Object.hasOwnProperty.call(t, "weaknessTs") && e.uint32(40).uint32(t.weaknessTs), null != t.beOccupy && Object.hasOwnProperty.call(t, "beOccupy") && e.uint32(48).bool(t.beOccupy), e
                }, t.decode = function(t, e) {
                  t instanceof Qe || (t = Qe.create(t));
                  for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.starry_road.UserData.State; t.pos < i;) {
                    var o = t.uint32();
                    switch (o >>> 3) {
                      case 1:
                        s.state = t.uint32();
                        break;
                      case 2:
