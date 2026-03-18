// Fragment: stat_system_t_L116438.js
// Lines: 116438-116538 of bundle-beautified.js
// Categories: Stat System
// Keywords: energy
// Hit lines: 116438

              }(), t.Energy = function() {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
                }
                return t.prototype.maxEnergy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.energy = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.score = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.totalScore = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.initEnergy = !1, t.prototype.energyNum = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.lastCalcEnergy = 0, t.encode = function(t, e) {
                  return e || (e = Je.create()), null != t.maxEnergy && Object.hasOwnProperty.call(t, "maxEnergy") && e.uint32(8).uint64(t.maxEnergy), null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(16).uint64(t.energy), null != t.score && Object.hasOwnProperty.call(t, "score") && e.uint32(24).uint64(t.score), null != t.totalScore && Object.hasOwnProperty.call(t, "totalScore") && e.uint32(32).uint64(t.totalScore), null != t.initEnergy && Object.hasOwnProperty.call(t, "initEnergy") && e.uint32(40).bool(t.initEnergy), null != t.energyNum && Object.hasOwnProperty.call(t, "energyNum") && e.uint32(48).uint64(t.energyNum), null != t.lastCalcEnergy && Object.hasOwnProperty.call(t, "lastCalcEnergy") && e.uint32(56).uint32(t.lastCalcEnergy), e
                }, t.decode = function(t, e) {
                  t instanceof Qe || (t = Qe.create(t));
                  for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.starry_road.UserData.Energy; t.pos < i;) {
                    var o = t.uint32();
                    switch (o >>> 3) {
                      case 1:
                        s.maxEnergy = t.uint64();
                        break;
                      case 2:
                        s.energy = t.uint64();
                        break;
                      case 3:
                        s.score = t.uint64();
                        break;
                      case 4:
                        s.totalScore = t.uint64();
                        break;
                      case 5:
                        s.initEnergy = t.bool();
                        break;
                      case 6:
                        s.energyNum = t.uint64();
                        break;
                      case 7:
                        s.lastCalcEnergy = t.uint32();
                        break;
                      default:
                        t.skipType(7 & o)
                    }
                  }
                  return s
                }, t.getTypeUrl = function(t) {
                  return void 0 === t && (t = "type.googleapis.com"), t + "/db.starry_road.UserData.Energy"
                }, t
              }(), t.SpringWater = function() {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
                }
                return t.prototype.maxSpringWater = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.springWater = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.swTs = 0, t.encode = function(t, e) {
                  return e || (e = Je.create()), null != t.maxSpringWater && Object.hasOwnProperty.call(t, "maxSpringWater") && e.uint32(8).uint64(t.maxSpringWater), null != t.springWater && Object.hasOwnProperty.call(t, "springWater") && e.uint32(16).uint64(t.springWater), null != t.swTs && Object.hasOwnProperty.call(t, "swTs") && e.uint32(24).uint32(t.swTs), e
                }, t.decode = function(t, e) {
                  t instanceof Qe || (t = Qe.create(t));
                  for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.starry_road.UserData.SpringWater; t.pos < i;) {
                    var o = t.uint32();
                    switch (o >>> 3) {
                      case 1:
                        s.maxSpringWater = t.uint64();
                        break;
                      case 2:
                        s.springWater = t.uint64();
                        break;
                      case 3:
                        s.swTs = t.uint32();
                        break;
                      default:
                        t.skipType(7 & o)
                    }
                  }
                  return s
                }, t.getTypeUrl = function(t) {
                  return void 0 === t && (t = "type.googleapis.com"), t + "/db.starry_road.UserData.SpringWater"
                }, t
              }(), t.Move = function() {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
                }
                return t.prototype.canMove = !1, t.prototype.startPos = 0, t.prototype.endPos = 0, t.prototype.startTs = 0, t.prototype.endTs = 0, t.prototype.speedupTimes = 0, t.prototype.autoMove = 0, t.prototype.autoSpeedupMove = !1, t.encode = function(t, e) {
                  return e || (e = Je.create()), null != t.canMove && Object.hasOwnProperty.call(t, "canMove") && e.uint32(8).bool(t.canMove), null != t.startPos && Object.hasOwnProperty.call(t, "startPos") && e.uint32(16).uint32(t.startPos), null != t.endPos && Object.hasOwnProperty.call(t, "endPos") && e.uint32(24).uint32(t.endPos), null != t.startTs && Object.hasOwnProperty.call(t, "startTs") && e.uint32(32).uint32(t.startTs), null != t.endTs && Object.hasOwnProperty.call(t, "endTs") && e.uint32(40).uint32(t.endTs), null != t.speedupTimes && Object.hasOwnProperty.call(t, "speedupTimes") && e.uint32(48).uint32(t.speedupTimes), null != t.autoMove && Object.hasOwnProperty.call(t, "autoMove") && e.uint32(56).uint32(t.autoMove), null != t.autoSpeedupMove && Object.hasOwnProperty.call(t, "autoSpeedupMove") && e.uint32(64).bool(t.autoSpeedupMove), e
                }, t.decode = function(t, e) {
                  t instanceof Qe || (t = Qe.create(t));
                  for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.starry_road.UserData.Move; t.pos < i;) {
                    var o = t.uint32();
                    switch (o >>> 3) {
                      case 1:
                        s.canMove = t.bool();
                        break;
                      case 2:
                        s.startPos = t.uint32();
                        break;
                      case 3:
                        s.endPos = t.uint32();
                        break;
                      case 4:
                        s.startTs = t.uint32();
                        break;
                      case 5:
                        s.endTs = t.uint32();
                        break;
                      case 6:
                        s.speedupTimes = t.uint32();
                        break;
                      case 7:
