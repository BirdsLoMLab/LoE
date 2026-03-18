// Fragment: equipment_for_L86389.js
// Lines: 86389-86503 of bundle-beautified.js
// Categories: Equipment
// Keywords: quality
// Hit lines: 86389, 86390, 86403

            return t.prototype.xingzhuId = 0, t.prototype.star = 0, t.prototype.quality = 0, t.prototype.inheritQuality = 0, t.prototype.score = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.xingzhuId && Object.hasOwnProperty.call(t, "xingzhuId") && e.uint32(8).uint32(t.xingzhuId), null != t.star && Object.hasOwnProperty.call(t, "star") && e.uint32(16).uint32(t.star), null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(24).uint32(t.quality), null != t.inheritQuality && Object.hasOwnProperty.call(t, "inheritQuality") && e.uint32(32).uint32(t.inheritQuality), null != t.score && Object.hasOwnProperty.call(t, "score") && e.uint32(40).uint32(t.score), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.xingzhu.XingzhuInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.xingzhuId = t.uint32();
                    break;
                  case 2:
                    s.star = t.uint32();
                    break;
                  case 3:
                    s.quality = t.uint32();
                    break;
                  case 4:
                    s.inheritQuality = t.uint32();
                    break;
                  case 5:
                    s.score = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/xingzhu.XingzhuInfo"
            }, t
          }(), je.RetAllXingzhuInfo = function() {
            function t(t) {
              if (this.slotInfo = [], this.xingzhuInfo = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.slotInfo = ze.emptyArray, t.prototype.xingzhuInfo = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.slotInfo && t.slotInfo.length)
                for (var i = 0; i < t.slotInfo.length; ++i) Ke.xingzhu.XingzhuSlotInfo.encode(t.slotInfo[i], e.uint32(10).fork()).ldelim();
              if (null != t.xingzhuInfo && t.xingzhuInfo.length)
                for (i = 0; i < t.xingzhuInfo.length; ++i) Ke.xingzhu.XingzhuInfo.encode(t.xingzhuInfo[i], e.uint32(18).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.xingzhu.RetAllXingzhuInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.slotInfo && s.slotInfo.length || (s.slotInfo = []), s.slotInfo.push(Ke.xingzhu.XingzhuSlotInfo.decode(t, t.uint32()));
                    break;
                  case 2:
                    s.xingzhuInfo && s.xingzhuInfo.length || (s.xingzhuInfo = []), s.xingzhuInfo.push(Ke.xingzhu.XingzhuInfo.decode(t, t.uint32()));
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/xingzhu.RetAllXingzhuInfo"
            }, t
          }(), je.RetXingzhuSlotInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.info = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.info && Object.hasOwnProperty.call(t, "info") && Ke.xingzhu.XingzhuSlotInfo.encode(t.info, e.uint32(10).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.xingzhu.RetXingzhuSlotInfo; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.info = Ke.xingzhu.XingzhuSlotInfo.decode(t, t.uint32()) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/xingzhu.RetXingzhuSlotInfo"
            }, t
          }(), je.RetXingzhuInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.type = 0, t.prototype.info = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(8).uint32(t.type), null != t.info && Object.hasOwnProperty.call(t, "info") && Ke.xingzhu.XingzhuInfo.encode(t.info, e.uint32(18).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.xingzhu.RetXingzhuInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.type = t.uint32();
                    break;
                  case 2:
                    s.info = Ke.xingzhu.XingzhuInfo.decode(t, t.uint32());
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/xingzhu.RetXingzhuInfo"
            }, t
          }(), je.ReqXingzhuUpLevel = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.slotId = 0, t.prototype.addLev = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.slotId && Object.hasOwnProperty.call(t, "slotId") && e.uint32(8).uint32(t.slotId), null != t.addLev && Object.hasOwnProperty.call(t, "addLev") && e.uint32(16).uint32(t.addLev), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.xingzhu.ReqXingzhuUpLevel; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
