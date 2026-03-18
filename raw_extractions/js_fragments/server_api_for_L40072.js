// Fragment: server_api_for_L40072.js
// Lines: 40072-40195 of bundle-beautified.js
// Categories: Server/API
// Keywords: token
// Hit lines: 40072, 40073, 40078, 40089, 40090, 40095

            return t.prototype.token = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.token && Object.hasOwnProperty.call(t, "token") && e.uint32(10).string(t.token), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.ReqPushToken; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.token = t.string() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.ReqPushToken"
            }, t
          }(), Rt.RetPushToken = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.token = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.token && Object.hasOwnProperty.call(t, "token") && e.uint32(10).string(t.token), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.RetPushToken; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.token = t.string() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.RetPushToken"
            }, t
          }(), Rt.ReqGetOnlineReward = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.ReqGetOnlineReward; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.ReqGetOnlineReward"
            }, t
          }(), Rt.RetOnlineRewardInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.nextGetTime = 0, t.prototype.todayGetCount = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.nextGetTime && Object.hasOwnProperty.call(t, "nextGetTime") && e.uint32(8).uint32(t.nextGetTime), null != t.todayGetCount && Object.hasOwnProperty.call(t, "todayGetCount") && e.uint32(16).uint32(t.todayGetCount), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.RetOnlineRewardInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.nextGetTime = t.uint32();
                    break;
                  case 2:
                    s.todayGetCount = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.RetOnlineRewardInfo"
            }, t
          }(), Rt.ReqHidePet = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.isHide = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.isHide && Object.hasOwnProperty.call(t, "isHide") && e.uint32(8).bool(t.isHide), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.ReqHidePet; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.isHide = t.bool() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.ReqHidePet"
            }, t
          }(), Rt.RetHidePet = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.isHide = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.isHide && Object.hasOwnProperty.call(t, "isHide") && e.uint32(8).bool(t.isHide), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.RetHidePet; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.isHide = t.bool() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.RetHidePet"
            }, t
          }(), Rt.ReqHideExtSkill = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.isHide = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.isHide && Object.hasOwnProperty.call(t, "isHide") && e.uint32(8).bool(t.isHide), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.misc.ReqHideExtSkill; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.isHide = t.bool() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/misc.ReqHideExtSkill"
            }, t
          }(), Rt.RetHideExtSkill = function() {
