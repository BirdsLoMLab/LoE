// Fragment: server_api_t_L26890.js
// Lines: 26890-27090 of bundle-beautified.js
// Categories: Server/API
// Keywords: login
// Hit lines: 26891, 26906, 26921, 26932, 26938, 26949, 26964, 26973, 26977, 26987, 26998, 27008, 27056, 27068, 27098

            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.LoginFailed"
            }, t
          }(), It.KickType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "KICK_DOUBLE_CHECKIN"] = 0, e[t[1] = "KICK_CHANGE_ZONE"] = 1, e[t[2] = "KICK_LOGOFF"] = 2, e[t[3] = "KICK_STOP_SERVER"] = 3, e
          }(), It.BeKick = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.type = 0, t.prototype.destZoneid = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(8).int32(t.type), null != t.destZoneid && Object.hasOwnProperty.call(t, "destZoneid") && e.uint32(16).uint32(t.destZoneid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.BeKick; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.type = t.int32();
                    break;
                  case 2:
                    s.destZoneid = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.BeKick"
            }, t
          }(), It.Handshake = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.Handshake; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.Handshake"
            }, t
          }(), It.LoginSucc = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.isnewer = !1, t.prototype.mainPlatform = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.isnewer && Object.hasOwnProperty.call(t, "isnewer") && e.uint32(8).bool(t.isnewer), null != t.mainPlatform && Object.hasOwnProperty.call(t, "mainPlatform") && e.uint32(4010).string(t.mainPlatform), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.LoginSucc; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.isnewer = t.bool();
                    break;
                  case 501:
                    s.mainPlatform = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.LoginSucc"
            }, t
          }(), It.CharInfoList = function() {
            function t(t) {
              if (this.infolist = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.first = !1, t.prototype.zoneStartTime = 0, t.prototype.infolist = ze.emptyArray, t.prototype.ip = "", t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.first && Object.hasOwnProperty.call(t, "first") && e.uint32(8).bool(t.first), null != t.zoneStartTime && Object.hasOwnProperty.call(t, "zoneStartTime") && e.uint32(16).uint32(t.zoneStartTime), null != t.infolist && t.infolist.length)
                for (var i = 0; i < t.infolist.length; ++i) Ke.login.CharInfoList.CharInfo.encode(t.infolist[i], e.uint32(26).fork()).ldelim();
              return null != t.ip && Object.hasOwnProperty.call(t, "ip") && e.uint32(34).string(t.ip), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.CharInfoList; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.first = t.bool();
                    break;
                  case 2:
                    s.zoneStartTime = t.uint32();
                    break;
                  case 3:
                    s.infolist && s.infolist.length || (s.infolist = []), s.infolist.push(Ke.login.CharInfoList.CharInfo.decode(t, t.uint32()));
                    break;
                  case 4:
                    s.ip = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/login.CharInfoList"
            }, t.CharInfo = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.name = "", t.prototype.level = 0, t.prototype.mapid = 0, t.prototype.onlinetime = 0, t.prototype.offlinetime = 0, t.prototype.createtime = 0, t.prototype.bitmask = 0, t.prototype.zoneid = 0, t.prototype.loginZoneid = 0, t.prototype.forbidtalk = 0, t.prototype.forbidtalkdesc = "", t.prototype.country = 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(8).uint64(t.charid), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(18).string(t.name), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(24).uint32(t.level), null != t.mapid && Object.hasOwnProperty.call(t, "mapid") && e.uint32(32).uint32(t.mapid), null != t.onlinetime && Object.hasOwnProperty.call(t, "onlinetime") && e.uint32(40).uint32(t.onlinetime), null != t.offlinetime && Object.hasOwnProperty.call(t, "offlinetime") && e.uint32(48).uint32(t.offlinetime), null != t.createtime && Object.hasOwnProperty.call(t, "createtime") && e.uint32(56).uint32(t.createtime), null != t.bitmask && Object.hasOwnProperty.call(t, "bitmask") && e.uint32(64).uint32(t.bitmask), null != t.zoneid && Object.hasOwnProperty.call(t, "zoneid") && e.uint32(72).uint32(t.zoneid), null != t.loginZoneid && Object.hasOwnProperty.call(t, "loginZoneid") && e.uint32(80).uint32(t.loginZoneid), null != t.forbidtalk && Object.hasOwnProperty.call(t, "forbidtalk") && e.uint32(88).uint32(t.forbidtalk), null != t.forbidtalkdesc && Object.hasOwnProperty.call(t, "forbidtalkdesc") && e.uint32(98).string(t.forbidtalkdesc), null != t.country && Object.hasOwnProperty.call(t, "country") && e.uint32(104).uint32(t.country), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.CharInfoList.CharInfo; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.charid = t.uint64();
                      break;
                    case 2:
                      s.name = t.string();
                      break;
                    case 3:
                      s.level = t.uint32();
                      break;
                    case 4:
                      s.mapid = t.uint32();
                      break;
                    case 5:
                      s.onlinetime = t.uint32();
                      break;
                    case 6:
                      s.offlinetime = t.uint32();
                      break;
                    case 7:
                      s.createtime = t.uint32();
                      break;
                    case 8:
                      s.bitmask = t.uint32();
                      break;
                    case 9:
                      s.zoneid = t.uint32();
                      break;
                    case 10:
                      s.loginZoneid = t.uint32();
                      break;
                    case 11:
                      s.forbidtalk = t.uint32();
                      break;
                    case 12:
                      s.forbidtalkdesc = t.string();
                      break;
                    case 13:
                      s.country = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/login.CharInfoList.CharInfo"
              }, t
            }(), t
          }(), It.CreateChar = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.name = "", t.prototype.gender = 0, t.prototype.face = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.hair = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.career = 0, t.prototype.profileId = 0, t.prototype.country = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(10).string(t.name), null != t.gender && Object.hasOwnProperty.call(t, "gender") && e.uint32(16).uint32(t.gender), null != t.face && Object.hasOwnProperty.call(t, "face") && e.uint32(24).uint64(t.face), null != t.hair && Object.hasOwnProperty.call(t, "hair") && e.uint32(32).uint64(t.hair), null != t.career && Object.hasOwnProperty.call(t, "career") && e.uint32(40).uint32(t.career), null != t.profileId && Object.hasOwnProperty.call(t, "profileId") && e.uint32(48).uint32(t.profileId), null != t.country && Object.hasOwnProperty.call(t, "country") && e.uint32(56).uint32(t.country), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.login.CreateChar; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.name = t.string();
                    break;
                  case 2:
                    s.gender = t.uint32();
                    break;
                  case 3:
                    s.face = t.uint64();
                    break;
                  case 4:
                    s.hair = t.uint64();
                    break;
                  case 5:
                    s.career = t.uint32();
                    break;
                  case 6:
                    s.profileId = t.uint32();
                    break;
                  case 7:
                    s.country = t.uint32();
