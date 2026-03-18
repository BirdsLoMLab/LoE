// Fragment: formula_L442.js
// Lines: 442-543 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.floor
// Hit lines: 443

        e.asPromise = require_aspromise(), e.base64 = require_base64(), e.EventEmitter = require_eventemitter(), e.float = require_float(), e.inquire = require_inquire(), e.utf8 = require_utf8(), e.pool = require_pool(), e.LongBits = require_longbits(), e.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node), e.global = e.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || t, e.emptyArray = Object.freeze ? Object.freeze([]) : [], e.emptyObject = Object.freeze ? Object.freeze({}) : {}, e.isInteger = Number.isInteger || function(t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t
        }, e.isString = function(t) {
          return "string" == typeof t || t instanceof String
        }, e.isObject = function(t) {
          return t && "object" == typeof t
        }, e.isset = e.isSet = function(t, e) {
          var i = t[e];
          return !(null == i || !t.hasOwnProperty(e)) && ("object" != typeof i || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
        }, e.Buffer = function() {
          try {
            var t = e.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
          } catch (t) {
            return null
          }
        }(), e._Buffer_from = null, e._Buffer_allocUnsafe = null, e.newBuffer = function(t) {
          return "number" == typeof t ? e.Buffer ? e._Buffer_allocUnsafe(t) : new e.Array(t) : e.Buffer ? e._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
        }, e.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, e.Long = e.global.dcodeIO && e.global.dcodeIO.Long || e.global.Long || e.inquire("long"), e.key2Re = /^true|false|0|1$/, e.key32Re = /^-?(?:0|[1-9][0-9]*)$/, e.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, e.longToHash = function(t) {
          return t ? e.LongBits.from(t).toHash() : e.LongBits.zeroHash
        }, e.longFromHash = function(t, i) {
          var s = e.LongBits.fromHash(t);
          return e.Long ? e.Long.fromBits(s.lo, s.hi, i) : s.toNumber(Boolean(i))
        }, e.merge = i, e.lcFirst = function(t) {
          return t.charAt(0).toLowerCase() + t.substring(1)
        }, e.newError = s, e.ProtocolError = s("ProtocolError"), e.oneOfGetter = function(t) {
          for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
          return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i)
              if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
          }
        }, e.oneOfSetter = function(t) {
          return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
          }
        }, e.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: !0
        }, e._configure = function() {
          var t = e.Buffer;
          t ? (e._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
          }, e._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
          }) : e._Buffer_from = e._Buffer_allocUnsafe = null
        }
      }
    }),
    require_writer = __commonJS({
      "node_modules/protobufjs/src/writer.js"(t, e) {
        e.exports = h;
        var i, s = require_minimal(),
          o = s.LongBits,
          n = s.base64,
          r = s.utf8;

        function a(t, e, i) {
          this.fn = t, this.len = e, this.next = void 0, this.val = i
        }

        function l() {}

        function c(t) {
          this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
        }

        function h() {
          this.len = 0, this.head = new a(l, 0, 0), this.tail = this.head, this.states = null
        }
        var u = function() {
          return s.Buffer ? function() {
            return (h.create = function() {
              return new i
            })()
          } : function() {
            return new h
          }
        };

        function p(t, e, i) {
          e[i] = 255 & t
        }

        function d(t, e) {
          this.len = t, this.next = void 0, this.val = e
        }

        function g(t, e, i) {
          for (; t.hi;) e[i++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
          for (; t.lo > 127;) e[i++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
          e[i++] = t.lo
        }

        function m(t, e, i) {
          e[i] = 255 & t, e[i + 1] = t >>> 8 & 255, e[i + 2] = t >>> 16 & 255, e[i + 3] = t >>> 24
        }
        h.create = u(), h.alloc = function(t) {
          return new s.Array(t)
        }, s.Array !== Array && (h.alloc = s.pool(h.alloc, s.Array.prototype.subarray)), h.prototype._push = function(t, e, i) {
          return this.tail = this.tail.next = new a(t, e, i), this.len += e, this
