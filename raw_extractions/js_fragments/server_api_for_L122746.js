// Fragment: server_api_for_L122746.js
// Lines: 122746-122899 of bundle-beautified.js
// Categories: Server/API
// Keywords: token
// Hit lines: 122746, 122747, 122799

              return t.prototype.tId = "", t.prototype.pId = "", t.prototype.rId = "", t.prototype.type = 0, t.prototype.sourceType = 0, t.prototype.riskLabel = 0, t.prototype.reason = "", t.prototype.platform = "", t.prototype.serverId = "", t.prototype.uid = "", t.prototype.roleId = "", t.prototype.roleName = "", t.prototype.clientId = "", t.prototype.callbackInfo = "", t.prototype.time = 0, t.prototype.token = "", t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.tId && Object.hasOwnProperty.call(t, "tId") && e.uint32(10).string(t.tId), null != t.pId && Object.hasOwnProperty.call(t, "pId") && e.uint32(18).string(t.pId), null != t.rId && Object.hasOwnProperty.call(t, "rId") && e.uint32(26).string(t.rId), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(32).uint32(t.type), null != t.sourceType && Object.hasOwnProperty.call(t, "sourceType") && e.uint32(40).int32(t.sourceType), null != t.riskLabel && Object.hasOwnProperty.call(t, "riskLabel") && e.uint32(48).int32(t.riskLabel), null != t.reason && Object.hasOwnProperty.call(t, "reason") && e.uint32(58).string(t.reason), null != t.platform && Object.hasOwnProperty.call(t, "platform") && e.uint32(66).string(t.platform), null != t.serverId && Object.hasOwnProperty.call(t, "serverId") && e.uint32(74).string(t.serverId), null != t.uid && Object.hasOwnProperty.call(t, "uid") && e.uint32(82).string(t.uid), null != t.roleId && Object.hasOwnProperty.call(t, "roleId") && e.uint32(90).string(t.roleId), null != t.roleName && Object.hasOwnProperty.call(t, "roleName") && e.uint32(98).string(t.roleName), null != t.clientId && Object.hasOwnProperty.call(t, "clientId") && e.uint32(106).string(t.clientId), null != t.callbackInfo && Object.hasOwnProperty.call(t, "callbackInfo") && e.uint32(114).string(t.callbackInfo), null != t.time && Object.hasOwnProperty.call(t, "time") && e.uint32(120).uint32(t.time), null != t.token && Object.hasOwnProperty.call(t, "token") && e.uint32(130).string(t.token), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.moments.HandleContentReview; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.tId = t.string();
                      break;
                    case 2:
                      s.pId = t.string();
                      break;
                    case 3:
                      s.rId = t.string();
                      break;
                    case 4:
                      s.type = t.uint32();
                      break;
                    case 5:
                      s.sourceType = t.int32();
                      break;
                    case 6:
                      s.riskLabel = t.int32();
                      break;
                    case 7:
                      s.reason = t.string();
                      break;
                    case 8:
                      s.platform = t.string();
                      break;
                    case 9:
                      s.serverId = t.string();
                      break;
                    case 10:
                      s.uid = t.string();
                      break;
                    case 11:
                      s.roleId = t.string();
                      break;
                    case 12:
                      s.roleName = t.string();
                      break;
                    case 13:
                      s.clientId = t.string();
                      break;
                    case 14:
                      s.callbackInfo = t.string();
                      break;
                    case 15:
                      s.time = t.uint32();
                      break;
                    case 16:
                      s.token = t.string();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/moments.HandleContentReview"
              }, t
            }(), t.HandleDelDiscuss = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.discussId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.discussId && Object.hasOwnProperty.call(t, "discussId") && e.uint32(8).uint64(t.discussId), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.moments.HandleDelDiscuss; t.pos < i;) {
                  var o = t.uint32();
                  o >>> 3 == 1 ? s.discussId = t.uint64() : t.skipType(7 & o)
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/moments.HandleDelDiscuss"
              }, t
            }(), t.HandleEraseMomentDiscuss = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.momentId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.discussId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.momentId && Object.hasOwnProperty.call(t, "momentId") && e.uint32(8).uint64(t.momentId), null != t.discussId && Object.hasOwnProperty.call(t, "discussId") && e.uint32(16).uint64(t.discussId), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.moments.HandleEraseMomentDiscuss; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.momentId = t.uint64();
                      break;
                    case 2:
                      s.discussId = t.uint64();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/moments.HandleEraseMomentDiscuss"
              }, t
            }(), t.HandleEraseDiscussDiscuss = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.parentId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.discussId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.parentId && Object.hasOwnProperty.call(t, "parentId") && e.uint32(8).uint64(t.parentId), null != t.discussId && Object.hasOwnProperty.call(t, "discussId") && e.uint32(16).uint64(t.discussId), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.moments.HandleEraseDiscussDiscuss; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.parentId = t.uint64();
                      break;
                    case 2:
                      s.discussId = t.uint64();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/moments.HandleEraseDiscussDiscuss"
              }, t
            }(), t.HandleLikeMoment = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.charId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.momentId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.charId && Object.hasOwnProperty.call(t, "charId") && e.uint32(8).uint64(t.charId), null != t.momentId && Object.hasOwnProperty.call(t, "momentId") && e.uint32(16).uint64(t.momentId), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.moments.HandleLikeMoment; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.charId = t.uint64();
                      break;
                    case 2:
                      s.momentId = t.uint64();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
