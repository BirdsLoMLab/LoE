// Fragment: spirits_pets_for_L75364.js
// Lines: 75364-75470 of bundle-beautified.js
// Categories: Spirits/Pets
// Keywords: spirit
// Hit lines: 75364, 75370

              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.RetLevelUp; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.info = Ke.db.SpiritData.decode(t, t.uint32()) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.RetLevelUp"
            }, t
          }(), we.ReqBoxAwardSpiritPhoto = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.ReqBoxAwardSpiritPhoto; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.ReqBoxAwardSpiritPhoto"
            }, t
          }(), we.RetBoxAwardSpiritPhoto = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.photoExp = 0, t.prototype.photoLevel = 0, t.prototype.getAwardLevel = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.photoExp && Object.hasOwnProperty.call(t, "photoExp") && e.uint32(8).uint32(t.photoExp), null != t.photoLevel && Object.hasOwnProperty.call(t, "photoLevel") && e.uint32(16).uint32(t.photoLevel), null != t.getAwardLevel && Object.hasOwnProperty.call(t, "getAwardLevel") && e.uint32(24).uint32(t.getAwardLevel), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.RetBoxAwardSpiritPhoto; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.photoExp = t.uint32();
                    break;
                  case 2:
                    s.photoLevel = t.uint32();
                    break;
                  case 3:
                    s.getAwardLevel = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.RetBoxAwardSpiritPhoto"
            }, t
          }(), we.ReqGetSuitAward = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = 0, t.prototype.type = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(16).uint32(t.type), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.ReqGetSuitAward; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.id = t.uint32();
                    break;
                  case 2:
                    s.type = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.ReqGetSuitAward"
            }, t
          }(), we.RetGetSuitAward = function() {
            function t(t) {
              if (this.id = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.id && t.id.length) {
                e.uint32(10).fork();
                for (var i = 0; i < t.id.length; ++i) e.uint32(t.id[i]);
                e.ldelim()
              }
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.spirit.RetGetSuitAward; t.pos < i;) {
                var o = t.uint32();
                if (o >>> 3 == 1)
                  if (s.id && s.id.length || (s.id = []), 2 == (7 & o))
                    for (var n = t.uint32() + t.pos; t.pos < n;) s.id.push(t.uint32());
                  else s.id.push(t.uint32());
                else t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/spirit.RetGetSuitAward"
            }, t
          }(), we.RetAllGetSuitAward = function() {
