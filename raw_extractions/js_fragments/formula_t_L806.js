// Fragment: formula_t_L806.js
// Lines: 806-974 of bundle-beautified.js
// Categories: Formula, Server/API
// Keywords: Math.min, proto
// Hit lines: 807, 874

          var t = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len))
        }, o._configure()
      }
    }),
    require_service = __commonJS({
      "node_modules/protobufjs/src/rpc/service.js"(t, e) {
        e.exports = s;
        var i = require_minimal();

        function s(t, e, s) {
          if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
          i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(s)
        }(s.prototype = Object.create(i.EventEmitter.prototype)).constructor = s, s.prototype.rpcCall = function t(e, s, o, n, r) {
          if (!n) throw TypeError("request must be specified");
          var a = this;
          if (!r) return i.asPromise(t, a, e, s, o, n);
          if (a.rpcImpl) try {
            return a.rpcImpl(e, s[a.requestDelimited ? "encodeDelimited" : "encode"](n).finish(), (function(t, i) {
              if (t) return a.emit("error", t, e), r(t);
              if (null !== i) {
                if (!(i instanceof o)) try {
                  i = o[a.responseDelimited ? "decodeDelimited" : "decode"](i)
                } catch (t) {
                  return a.emit("error", t, e), r(t)
                }
                return a.emit("data", i, e), r(null, i)
              }
              a.end(!0)
            }))
          } catch (t) {
            return a.emit("error", t, e), void setTimeout((function() {
              r(t)
            }), 0)
          } else setTimeout((function() {
            r(Error("already ended"))
          }), 0)
        }, s.prototype.end = function(t) {
          return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
        }
      }
    }),
    require_rpc = __commonJS({
      "node_modules/protobufjs/src/rpc.js"(t) {
        t.Service = require_service()
      }
    }),
    require_roots = __commonJS({
      "node_modules/protobufjs/src/roots.js"(t, e) {
        e.exports = {}
      }
    }),
    require_index_minimal = __commonJS({
      "node_modules/protobufjs/src/index-minimal.js"(t) {
        var e = t;

        function i() {
          e.util._configure(), e.Writer._configure(e.BufferWriter), e.Reader._configure(e.BufferReader)
        }
        e.build = "minimal", e.Writer = require_writer(), e.BufferWriter = require_writer_buffer(), e.Reader = require_reader(), e.BufferReader = require_reader_buffer(), e.util = require_minimal(), e.rpc = require_rpc(), e.roots = require_roots(), e.configure = i, i()
      }
    }),
    require_minimal2 = __commonJS({
      "node_modules/protobufjs/minimal.js"(t, e) {
        e.exports = require_index_minimal()
      }
    }),
    require_proto = __commonJS({
      "src/Game/Net/Proto/proto.js"(t, e) {
        var i;
        i = function(t) {
          var e, i, s, o, n, r, a, l, c, h, u, p, d, g, m, I, y, _, f, C, U, b, w, S, k, v, T, P, M, D, x, R, L, A, B, O, V, E, N, F, H, G, Y, j, q, X, W, Z, Q, J, z, K, $, tt, et, it, st, ot, nt, rt, at, lt, ct, ht, ut, pt, dt, gt, mt, It, yt, _t, ft, Ct, Ut, bt, wt, St, kt, vt, Tt, Pt, Mt, Dt, xt, Rt, Lt, At, Bt, Ot, Vt, Et, Nt, Ft, Ht, Gt, Yt, jt, qt, Xt, Wt, Zt, Qt, Jt, zt, Kt, $t, te, ee, ie, se, oe, ne, re, ae, le, ce, he, ue, pe, de, ge, me, Ie, ye, _e, fe, Ce, Ue, be, we, Se, ke, ve, Te, Pe, Me, De, xe, Re, Le, Ae, Be, Oe, Ve, Ee, Ne, Fe, He, Ge, Ye, je, qe, Xe, We, Ze, Qe = t.Reader,
            Je = t.Writer,
            ze = t.util,
            Ke = t.roots.default || (t.roots.default = {});
          return Ke.advertisement = ((e = {}).ReqAdvInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.advertisement.ReqAdvInfo; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/advertisement.ReqAdvInfo"
            }, t
          }(), e.RetAdvInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.times = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.times && Object.hasOwnProperty.call(t, "times") && e.uint32(8).uint32(t.times), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.advertisement.RetAdvInfo; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.times = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/advertisement.RetAdvInfo"
            }, t
          }(), e.ReqGenerateAward = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.advertisement.ReqGenerateAward; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/advertisement.ReqGenerateAward"
            }, t
          }(), e.RetGenerateAward = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.result = !1, t.prototype.awardId = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.result && Object.hasOwnProperty.call(t, "result") && e.uint32(8).bool(t.result), null != t.awardId && Object.hasOwnProperty.call(t, "awardId") && e.uint32(16).uint32(t.awardId), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.advertisement.RetGenerateAward; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.result = t.bool();
                    break;
                  case 2:
                    s.awardId = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/advertisement.RetGenerateAward"
            }, t
          }(), e.ReqAwardAdv = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.advertisement.ReqAwardAdv; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/advertisement.ReqAwardAdv"
            }, t
