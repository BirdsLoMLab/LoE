// Fragment: equipment_for_L102724.js
// Lines: 102724-102835 of bundle-beautified.js
// Categories: Equipment
// Keywords: quality
// Hit lines: 102724, 102725, 102735

            return t.prototype.level = 0, t.prototype.quality = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(8).uint32(t.level), null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(16).uint32(t.quality), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.LingPoData; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.level = t.uint32();
                    break;
                  case 2:
                    s.quality = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.LingPoData"
            }, t
          }(), Ze.NewQilingMgr = function() {
            function t(t) {
              if (this.lingpoMgr = {}, this.shape = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.qilingStep = 0, t.prototype.qilingQuality = 0, t.prototype.qilingExp = 0, t.prototype.lingpoMgr = ze.emptyObject, t.prototype.shape = ze.emptyObject, t.prototype.shapeId = 0, t.prototype.skillShapeId = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.qilingStep && Object.hasOwnProperty.call(t, "qilingStep") && e.uint32(8).uint32(t.qilingStep), null != t.qilingQuality && Object.hasOwnProperty.call(t, "qilingQuality") && e.uint32(16).uint32(t.qilingQuality), null != t.qilingExp && Object.hasOwnProperty.call(t, "qilingExp") && e.uint32(24).uint32(t.qilingExp), null != t.lingpoMgr && Object.hasOwnProperty.call(t, "lingpoMgr"))
                for (var i = Object.keys(t.lingpoMgr), s = 0; s < i.length; ++s) e.uint32(34).fork().uint32(8).uint32(i[s]), Ke.db.LingPoData.encode(t.lingpoMgr[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              if (null != t.shape && Object.hasOwnProperty.call(t, "shape"))
                for (i = Object.keys(t.shape), s = 0; s < i.length; ++s) e.uint32(42).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.shape[i[s]]).ldelim();
              return null != t.shapeId && Object.hasOwnProperty.call(t, "shapeId") && e.uint32(48).uint32(t.shapeId), null != t.skillShapeId && Object.hasOwnProperty.call(t, "skillShapeId") && e.uint32(56).uint32(t.skillShapeId), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.db.NewQilingMgr; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.qilingStep = t.uint32();
                    break;
                  case 2:
                    n.qilingQuality = t.uint32();
                    break;
                  case 3:
                    n.qilingExp = t.uint32();
                    break;
                  case 4:
                    n.lingpoMgr === ze.emptyObject && (n.lingpoMgr = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = null; t.pos < a;) switch ((l = t.uint32()) >>> 3) {
                      case 1:
                        i = t.uint32();
                        break;
                      case 2:
                        s = Ke.db.LingPoData.decode(t, t.uint32());
                        break;
                      default:
                        t.skipType(7 & l)
                    }
                    n.lingpoMgr[i] = s;
                    break;
                  case 5:
                    for (n.shape === ze.emptyObject && (n.shape = {}), a = t.uint32() + t.pos, i = 0, s = 0; t.pos < a;) {
                      var l;
                      switch ((l = t.uint32()) >>> 3) {
                        case 1:
                          i = t.uint32();
                          break;
                        case 2:
                          s = t.uint32();
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.shape[i] = s;
                    break;
                  case 6:
                    n.shapeId = t.uint32();
                    break;
                  case 7:
                    n.skillShapeId = t.uint32();
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.NewQilingMgr"
            }, t
          }(), Ze.OnlineBoxData = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.nextGetTime = 0, t.prototype.storeTime = 0, t.prototype.todayGetCount = 0, t.prototype.lastOnlineTime = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.nextGetTime && Object.hasOwnProperty.call(t, "nextGetTime") && e.uint32(8).uint32(t.nextGetTime), null != t.storeTime && Object.hasOwnProperty.call(t, "storeTime") && e.uint32(16).uint32(t.storeTime), null != t.todayGetCount && Object.hasOwnProperty.call(t, "todayGetCount") && e.uint32(24).uint32(t.todayGetCount), null != t.lastOnlineTime && Object.hasOwnProperty.call(t, "lastOnlineTime") && e.uint32(32).uint32(t.lastOnlineTime), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.OnlineBoxData; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.nextGetTime = t.uint32();
                    break;
                  case 2:
                    s.storeTime = t.uint32();
                    break;
                  case 3:
                    s.todayGetCount = t.uint32();
                    break;
