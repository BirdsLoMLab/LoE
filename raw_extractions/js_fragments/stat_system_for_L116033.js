// Fragment: stat_system_for_L116033.js
// Lines: 116033-116147 of bundle-beautified.js
// Categories: Stat System
// Keywords: energy
// Hit lines: 116033, 116034, 116047

              return t.prototype.id = 0, t.prototype.maxEnergy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.energy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.state = 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), null != t.maxEnergy && Object.hasOwnProperty.call(t, "maxEnergy") && e.uint32(16).uint64(t.maxEnergy), null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(24).uint64(t.energy), null != t.state && Object.hasOwnProperty.call(t, "state") && e.uint32(32).uint32(t.state), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.starry_road.Monster; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.id = t.uint32();
                      break;
                    case 2:
                      s.maxEnergy = t.uint64();
                      break;
                    case 3:
                      s.energy = t.uint64();
                      break;
                    case 4:
                      s.state = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/db.starry_road.Monster"
              }, t
            }(), t.Building = function() {
              function t(t) {
                if (this.combatInfo = [], this.atkQueue = [], this.defQueue = [], this.monQueue = [], this.command = {}, t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.baseId = 0, t.prototype.type = 0, t.prototype.pos = 0, t.prototype.septId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.occupyTs = 0, t.prototype.combatInfo = ze.emptyArray, t.prototype.atkQueue = ze.emptyArray, t.prototype.defQueue = ze.emptyArray, t.prototype.monQueue = ze.emptyArray, t.prototype.command = ze.emptyObject, t.encode = function(t, e) {
                if (e || (e = Je.create()), null != t.baseId && Object.hasOwnProperty.call(t, "baseId") && e.uint32(8).uint32(t.baseId), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(16).uint32(t.type), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(24).uint32(t.pos), null != t.septId && Object.hasOwnProperty.call(t, "septId") && e.uint32(32).uint64(t.septId), null != t.occupyTs && Object.hasOwnProperty.call(t, "occupyTs") && e.uint32(40).uint32(t.occupyTs), null != t.combatInfo && t.combatInfo.length)
                  for (var i = 0; i < t.combatInfo.length; ++i) Ke.db.starry_road.Building.CombatInfo.encode(t.combatInfo[i], e.uint32(50).fork()).ldelim();
                if (null != t.atkQueue && t.atkQueue.length) {
                  for (e.uint32(58).fork(), i = 0; i < t.atkQueue.length; ++i) e.uint64(t.atkQueue[i]);
                  e.ldelim()
                }
                if (null != t.defQueue && t.defQueue.length) {
                  for (e.uint32(66).fork(), i = 0; i < t.defQueue.length; ++i) e.uint64(t.defQueue[i]);
                  e.ldelim()
                }
                if (null != t.monQueue && t.monQueue.length)
                  for (i = 0; i < t.monQueue.length; ++i) Ke.db.starry_road.Monster.encode(t.monQueue[i], e.uint32(74).fork()).ldelim();
                if (null != t.command && Object.hasOwnProperty.call(t, "command")) {
                  var s = Object.keys(t.command);
                  for (i = 0; i < s.length; ++i) e.uint32(138).fork().uint32(8).uint64(s[i]).uint32(18).string(t.command[s[i]]).ldelim()
                }
                return e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.starry_road.Building; t.pos < o;) {
                  var r = t.uint32();
                  switch (r >>> 3) {
                    case 1:
                      n.baseId = t.uint32();
                      break;
                    case 2:
                      n.type = t.uint32();
                      break;
                    case 3:
                      n.pos = t.uint32();
                      break;
                    case 4:
                      n.septId = t.uint64();
                      break;
                    case 5:
                      n.occupyTs = t.uint32();
                      break;
                    case 6:
                      n.combatInfo && n.combatInfo.length || (n.combatInfo = []), n.combatInfo.push(Ke.db.starry_road.Building.CombatInfo.decode(t, t.uint32()));
                      break;
                    case 7:
                      if (n.atkQueue && n.atkQueue.length || (n.atkQueue = []), 2 == (7 & r))
                        for (var a = t.uint32() + t.pos; t.pos < a;) n.atkQueue.push(t.uint64());
                      else n.atkQueue.push(t.uint64());
                      break;
                    case 8:
                      if (n.defQueue && n.defQueue.length || (n.defQueue = []), 2 == (7 & r))
                        for (a = t.uint32() + t.pos; t.pos < a;) n.defQueue.push(t.uint64());
                      else n.defQueue.push(t.uint64());
                      break;
                    case 9:
                      n.monQueue && n.monQueue.length || (n.monQueue = []), n.monQueue.push(Ke.db.starry_road.Monster.decode(t, t.uint32()));
                      break;
                    case 17:
                      for (n.command === ze.emptyObject && (n.command = {}), a = t.uint32() + t.pos, i = 0, s = ""; t.pos < a;) {
                        var l = t.uint32();
                        switch (l >>> 3) {
                          case 1:
                            i = t.uint64();
                            break;
                          case 2:
                            s = t.string();
                            break;
                          default:
                            t.skipType(7 & l)
                        }
                      }
                      n.command["object" == typeof i ? ze.longToHash(i) : i] = s;
                      break;
                    default:
                      t.skipType(7 & r)
                  }
                }
                return n
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/db.starry_road.Building"
              }, t.CombatInfo = function() {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
                }
                return t.prototype.id = 0, t.prototype.atkId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.defType = 0, t.prototype.defId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.startTs = 0, t.prototype.endTs = 0, t.encode = function(t, e) {
