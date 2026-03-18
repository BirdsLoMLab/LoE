// Fragment: stat_system_for_L14328.js
// Lines: 14328-14441 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 14328, 14329, 14341

              return t.prototype.bossid = 0, t.prototype.hp = 0, t.prototype.killerName = "", t.prototype.killerSeptName = "", t.prototype.damageList = ze.emptyArray, t.prototype.maxHp = "", t.prototype.killerZoneid = 0, t.encode = function(t, e) {
                if (e || (e = Je.create()), null != t.bossid && Object.hasOwnProperty.call(t, "bossid") && e.uint32(8).uint32(t.bossid), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(16).uint32(t.hp), null != t.killerName && Object.hasOwnProperty.call(t, "killerName") && e.uint32(34).string(t.killerName), null != t.killerSeptName && Object.hasOwnProperty.call(t, "killerSeptName") && e.uint32(42).string(t.killerSeptName), null != t.damageList && t.damageList.length)
                  for (var i = 0; i < t.damageList.length; ++i) Ke.famous_boss.RetFBMapInfo.BossInfo.DamageInfo.encode(t.damageList[i], e.uint32(50).fork()).ldelim();
                return null != t.maxHp && Object.hasOwnProperty.call(t, "maxHp") && e.uint32(58).string(t.maxHp), null != t.killerZoneid && Object.hasOwnProperty.call(t, "killerZoneid") && e.uint32(64).uint32(t.killerZoneid), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.famous_boss.RetFBMapInfo.BossInfo; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.bossid = t.uint32();
                      break;
                    case 2:
                      s.hp = t.uint32();
                      break;
                    case 4:
                      s.killerName = t.string();
                      break;
                    case 5:
                      s.killerSeptName = t.string();
                      break;
                    case 6:
                      s.damageList && s.damageList.length || (s.damageList = []), s.damageList.push(Ke.famous_boss.RetFBMapInfo.BossInfo.DamageInfo.decode(t, t.uint32()));
                      break;
                    case 7:
                      s.maxHp = t.string();
                      break;
                    case 8:
                      s.killerZoneid = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/famous_boss.RetFBMapInfo.BossInfo"
              }, t.DamageInfo = function() {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
                }
                return t.prototype.septid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.dam = "", t.prototype.septName = "", t.prototype.zoneid = 0, t.encode = function(t, e) {
                  return e || (e = Je.create()), null != t.septid && Object.hasOwnProperty.call(t, "septid") && e.uint32(8).uint64(t.septid), null != t.dam && Object.hasOwnProperty.call(t, "dam") && e.uint32(18).string(t.dam), null != t.septName && Object.hasOwnProperty.call(t, "septName") && e.uint32(26).string(t.septName), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(32).uint32(t.zoneid), e
                }, t.decode = function(t, e) {
                  t instanceof Qe || (t = Qe.create(t));
                  for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.famous_boss.RetFBMapInfo.BossInfo.DamageInfo; t.pos < i;) {
                    var o = t.uint32();
                    switch (o >>> 3) {
                      case 1:
                        s.septid = t.uint64();
                        break;
                      case 2:
                        s.dam = t.string();
                        break;
                      case 3:
                        s.septName = t.string();
                        break;
                      case 4:
                        s.zoneid = t.uint32();
                        break;
                      default:
                        t.skipType(7 & o)
                    }
                  }
                  return s
                }, t.getTypeUrl = function(t) {
                  return void 0 === t && (t = "type.googleapis.com"), t + "/famous_boss.RetFBMapInfo.BossInfo.DamageInfo"
                }, t
              }(), t
            }(), t
          }(), E.ReqFamousBossInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.famous_boss.ReqFamousBossInfo; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/famous_boss.ReqFamousBossInfo"
            }, t
          }(), E.RetFamousBossInfo = function() {
            function t(t) {
              if (this.mapList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.cfdid = 0, t.prototype.mapList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.cfdid && Object.hasOwnProperty.call(t, "cfdid") && e.uint32(8).uint32(t.cfdid), null != t.mapList && t.mapList.length)
                for (var i = 0; i < t.mapList.length; ++i) Ke.famous_boss.RetFBMapInfo.encode(t.mapList[i], e.uint32(18).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.famous_boss.RetFamousBossInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.cfdid = t.uint32();
                    break;
                  case 2:
                    s.mapList && s.mapList.length || (s.mapList = []), s.mapList.push(Ke.famous_boss.RetFBMapInfo.decode(t, t.uint32()));
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
