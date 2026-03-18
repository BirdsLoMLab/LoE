// Fragment: stat_system_for_L32416.js
// Lines: 32416-32527 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 32416, 32417, 32427

            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.hp = "", t.prototype.maxHp = "", t.prototype.shield = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(18).string(t.hp), null != t.maxHp && Object.hasOwnProperty.call(t, "maxHp") && e.uint32(26).string(t.maxHp), null != t.shield && Object.hasOwnProperty.call(t, "shield") && e.uint32(34).string(t.shield), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.EntryHp; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.thisid = t.uint64();
                    break;
                  case 2:
                    s.hp = t.string();
                    break;
                  case 3:
                    s.maxHp = t.string();
                    break;
                  case 4:
                    s.shield = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.EntryHp"
            }, t
          }(), vt.EntryDie = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.EntryDie; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.thisid = t.uint64() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.EntryDie"
            }, t
          }(), vt.EntryHpList = function() {
            function t(t) {
              if (this.data = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.data = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.data && t.data.length)
                for (var i = 0; i < t.data.length; ++i) Ke.mapscreen.EntryHp.encode(t.data[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.EntryHpList; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.data && s.data.length || (s.data = []), s.data.push(Ke.mapscreen.EntryHp.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.EntryHpList"
            }, t
          }(), vt.KillNpc = function() {
            function t(t) {
              if (this.list = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.list = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.list && t.list.length)
                for (var i = 0; i < t.list.length; ++i) Ke.mapscreen.KillNpc.NpcInfo.encode(t.list[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.KillNpc; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.list && s.list.length || (s.list = []), s.list.push(Ke.mapscreen.KillNpc.NpcInfo.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.KillNpc"
            }, t.NpcInfo = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.npcid = 0, t.prototype.level = 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.npcid && Object.hasOwnProperty.call(t, "npcid") && e.uint32(8).uint32(t.npcid), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(16).uint32(t.level), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.mapscreen.KillNpc.NpcInfo; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.npcid = t.uint32();
                      break;
                    case 2:
                      s.level = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/mapscreen.KillNpc.NpcInfo"
              }, t
            }(), t
          }(), vt.Buff = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
