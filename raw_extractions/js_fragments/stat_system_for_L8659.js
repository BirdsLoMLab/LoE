// Fragment: stat_system_for_L8659.js
// Lines: 8659-8773 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 8659, 8660, 8673

              return t.prototype.cfgid = 0, t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.hp = "", t.prototype.maxHp = "", t.prototype.killName = "", t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.cfgid && Object.hasOwnProperty.call(t, "cfgid") && e.uint32(8).uint32(t.cfgid), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(16).uint64(t.thisid), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(26).string(t.hp), null != t.maxHp && Object.hasOwnProperty.call(t, "maxHp") && e.uint32(34).string(t.maxHp), null != t.killName && Object.hasOwnProperty.call(t, "killName") && e.uint32(42).string(t.killName), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.demon_palace.RefreshDemonBossList.CopyBossInfo; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.cfgid = t.uint32();
                      break;
                    case 2:
                      s.thisid = t.uint64();
                      break;
                    case 3:
                      s.hp = t.string();
                      break;
                    case 4:
                      s.maxHp = t.string();
                      break;
                    case 5:
                      s.killName = t.string();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/demon_palace.RefreshDemonBossList.CopyBossInfo"
              }, t
            }(), t
          }(), T.RetDemonModeTime = function() {
            function t(t) {
              if (this.modeList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.modeList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.modeList && t.modeList.length)
                for (var i = 0; i < t.modeList.length; ++i) Ke.demon_palace.RetDemonModeTime.ModeTime.encode(t.modeList[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.demon_palace.RetDemonModeTime; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.modeList && s.modeList.length || (s.modeList = []), s.modeList.push(Ke.demon_palace.RetDemonModeTime.ModeTime.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/demon_palace.RetDemonModeTime"
            }, t.ModeTime = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.mode = 0, t.prototype.time = 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.mode && Object.hasOwnProperty.call(t, "mode") && e.uint32(8).uint32(t.mode), null != t.time && Object.hasOwnProperty.call(t, "time") && e.uint32(16).uint32(t.time), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.demon_palace.RetDemonModeTime.ModeTime; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.mode = t.uint32();
                      break;
                    case 2:
                      s.time = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/demon_palace.RetDemonModeTime.ModeTime"
              }, t
            }(), t
          }(), T.ReqDemonMove = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.x = 0, t.prototype.y = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), null != t.x && Object.hasOwnProperty.call(t, "x") && e.uint32(16).uint32(t.x), null != t.y && Object.hasOwnProperty.call(t, "y") && e.uint32(24).uint32(t.y), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.demon_palace.ReqDemonMove; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.thisid = t.uint64();
                    break;
                  case 2:
                    s.x = t.uint32();
                    break;
                  case 3:
                    s.y = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/demon_palace.ReqDemonMove"
            }, t
          }(), T.ReqDemonIntoCopy = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.index = 0, t.prototype.topIndex = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.index && Object.hasOwnProperty.call(t, "index") && e.uint32(8).uint32(t.index), null != t.topIndex && Object.hasOwnProperty.call(t, "topIndex") && e.uint32(16).uint32(t.topIndex), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.demon_palace.ReqDemonIntoCopy; t.pos < i;) {
