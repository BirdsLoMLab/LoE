// Fragment: equipment_for_L50987.js
// Lines: 50987-51093 of bundle-beautified.js
// Categories: Equipment
// Keywords: quality
// Hit lines: 50987, 50988, 50993

            return t.prototype.quality = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(8).uint32(t.quality), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.puppet.ReqPuppetMake; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.quality = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/puppet.ReqPuppetMake"
            }, t
          }(), jt.ReqPuppetRecycle = function() {
            function t(t) {
              if (this.itemMap = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.itemMap = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.itemMap && Object.hasOwnProperty.call(t, "itemMap"))
                for (var i = Object.keys(t.itemMap), s = 0; s < i.length; ++s) e.uint32(10).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.itemMap[i[s]]).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.puppet.ReqPuppetRecycle; t.pos < o;) {
                var r = t.uint32();
                if (r >>> 3 == 1) {
                  n.itemMap === ze.emptyObject && (n.itemMap = {});
                  var a = t.uint32() + t.pos;
                  for (i = 0, s = 0; t.pos < a;) {
                    var l = t.uint32();
                    switch (l >>> 3) {
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
                  n.itemMap[i] = s
                } else t.skipType(7 & r)
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/puppet.ReqPuppetRecycle"
            }, t
          }(), jt.RetPuppetRecycle = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.errCode = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.errCode && Object.hasOwnProperty.call(t, "errCode") && e.uint32(8).uint32(t.errCode), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.puppet.RetPuppetRecycle; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.errCode = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/puppet.RetPuppetRecycle"
            }, t
          }(), jt.ReqPuppetSuccinct = function() {
            function t(t) {
              if (this.condList = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = 0, t.prototype.type = 0, t.prototype.condList = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(16).uint32(t.type), null != t.condList && Object.hasOwnProperty.call(t, "condList"))
                for (var i = Object.keys(t.condList), s = 0; s < i.length; ++s) e.uint32(26).fork().uint32(8).uint32(i[s]).uint32(16).uint32(t.condList[i[s]]).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.puppet.ReqPuppetSuccinct; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.id = t.uint32();
                    break;
                  case 2:
                    n.type = t.uint32();
                    break;
                  case 3:
                    n.condList === ze.emptyObject && (n.condList = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = 0; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
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
                    n.condList[i] = s;
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
