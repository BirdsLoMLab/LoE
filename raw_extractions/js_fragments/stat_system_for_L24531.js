// Fragment: stat_system_for_L24531.js
// Lines: 24531-24731 of bundle-beautified.js
// Categories: Stat System
// Keywords: speed
// Hit lines: 24531, 24534, 24544, 24635, 24636, 24652, 24671, 24672, 24685

            return t.prototype.infos = ze.emptyArray, t.prototype.speed = 0, t.prototype.cube = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.infos && t.infos.length)
                for (var i = 0; i < t.infos.length; ++i) Ke.hook_fat.ReqStarHook.StarHook.encode(t.infos[i], e.uint32(10).fork()).ldelim();
              return null != t.speed && Object.hasOwnProperty.call(t, "speed") && e.uint32(16).uint32(t.speed), null != t.cube && Object.hasOwnProperty.call(t, "cube") && e.uint32(24).uint32(t.cube), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.hook_fat.ReqStarHook; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.infos && s.infos.length || (s.infos = []), s.infos.push(Ke.hook_fat.ReqStarHook.StarHook.decode(t, t.uint32()));
                    break;
                  case 2:
                    s.speed = t.uint32();
                    break;
                  case 3:
                    s.cube = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/hook_fat.ReqStarHook"
            }, t.StarHook = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.index = 0, t.prototype.desPosX = 0, t.prototype.desPosY = 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.index && Object.hasOwnProperty.call(t, "index") && e.uint32(8).uint32(t.index), null != t.desPosX && Object.hasOwnProperty.call(t, "desPosX") && e.uint32(16).uint32(t.desPosX), null != t.desPosY && Object.hasOwnProperty.call(t, "desPosY") && e.uint32(24).uint32(t.desPosY), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.hook_fat.ReqStarHook.StarHook; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.index = t.uint32();
                      break;
                    case 2:
                      s.desPosX = t.uint32();
                      break;
                    case 3:
                      s.desPosY = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/hook_fat.ReqStarHook.StarHook"
              }, t
            }(), t
          }(), lt.ReqFinishHook = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.tarThisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.index = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.tarThisid && Object.hasOwnProperty.call(t, "tarThisid") && e.uint32(8).uint64(t.tarThisid), null != t.index && Object.hasOwnProperty.call(t, "index") && e.uint32(16).uint32(t.index), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.hook_fat.ReqFinishHook; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.tarThisid = t.uint64();
                    break;
                  case 2:
                    s.index = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/hook_fat.ReqFinishHook"
            }, t
          }(), lt.HookInfoMsg = function() {
            function t(t) {
              if (this.infos = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.infos = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.infos && t.infos.length)
                for (var i = 0; i < t.infos.length; ++i) Ke.hook_fat.HookInfoMsg.HookInfo.encode(t.infos[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.hook_fat.HookInfoMsg; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.infos && s.infos.length || (s.infos = []), s.infos.push(Ke.hook_fat.HookInfoMsg.HookInfo.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/hook_fat.HookInfoMsg"
            }, t.HookInfo = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.srcThisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.index = 0, t.prototype.pos = null, t.prototype.speed = 0, t.prototype.cube = 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.srcThisid && Object.hasOwnProperty.call(t, "srcThisid") && e.uint32(8).uint64(t.srcThisid), null != t.index && Object.hasOwnProperty.call(t, "index") && e.uint32(16).uint32(t.index), null != t.pos && Object.hasOwnProperty.call(t, "pos") && Ke.mapscreen.Pos.encode(t.pos, e.uint32(26).fork()).ldelim(), null != t.speed && Object.hasOwnProperty.call(t, "speed") && e.uint32(32).uint32(t.speed), null != t.cube && Object.hasOwnProperty.call(t, "cube") && e.uint32(40).uint32(t.cube), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.hook_fat.HookInfoMsg.HookInfo; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.srcThisid = t.uint64();
                      break;
                    case 2:
                      s.index = t.uint32();
                      break;
                    case 3:
                      s.pos = Ke.mapscreen.Pos.decode(t, t.uint32());
                      break;
                    case 4:
                      s.speed = t.uint32();
                      break;
                    case 5:
                      s.cube = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/hook_fat.HookInfoMsg.HookInfo"
              }, t
            }(), t
          }(), lt.HookHitMsg = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.srcThisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.index = 0, t.prototype.speed = 0, t.prototype.targetThisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.srcThisid && Object.hasOwnProperty.call(t, "srcThisid") && e.uint32(8).uint64(t.srcThisid), null != t.index && Object.hasOwnProperty.call(t, "index") && e.uint32(16).uint32(t.index), null != t.speed && Object.hasOwnProperty.call(t, "speed") && e.uint32(24).uint32(t.speed), null != t.targetThisid && Object.hasOwnProperty.call(t, "targetThisid") && e.uint32(32).uint64(t.targetThisid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.hook_fat.HookHitMsg; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.srcThisid = t.uint64();
                    break;
                  case 2:
                    s.index = t.uint32();
                    break;
                  case 3:
                    s.speed = t.uint32();
                    break;
                  case 4:
                    s.targetThisid = t.uint64();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/hook_fat.HookHitMsg"
            }, t
          }(), lt.RetHookUseTime = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.useTime = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.useTime && Object.hasOwnProperty.call(t, "useTime") && e.uint32(8).uint64(t.useTime), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.hook_fat.RetHookUseTime; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.useTime = t.uint64() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/hook_fat.RetHookUseTime"
            }, t
          }(), lt.ReqGetBuff = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.thisid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint64(t.thisid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.hook_fat.ReqGetBuff; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.thisid = t.uint64() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/hook_fat.ReqGetBuff"
            }, t
