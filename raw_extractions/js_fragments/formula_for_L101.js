// Fragment: formula_for_L101.js
// Lines: 101-301 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil, Math.floor, Math.round
// Hit lines: 102, 207, 209, 210, 253

          for (var i = 0; --e % 4 > 1 && "=" === t.charAt(e);) ++i;
          return Math.ceil(3 * t.length) / 4 - i
        };
        var i, s = new Array(64),
          o = new Array(123);
        for (i = 0; i < 64;) o[s[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
        e.encode = function(t, e, i) {
          for (var o, n = null, r = [], a = 0, l = 0; e < i;) {
            var c = t[e++];
            switch (l) {
              case 0:
                r[a++] = s[c >> 2], o = (3 & c) << 4, l = 1;
                break;
              case 1:
                r[a++] = s[o | c >> 4], o = (15 & c) << 2, l = 2;
                break;
              case 2:
                r[a++] = s[o | c >> 6], r[a++] = s[63 & c], l = 0
            }
            a > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, r)), a = 0)
          }
          return l && (r[a++] = s[o], r[a++] = 61, 1 === l && (r[a++] = 61)), n ? (a && n.push(String.fromCharCode.apply(String, r.slice(0, a))), n.join("")) : String.fromCharCode.apply(String, r.slice(0, a))
        };
        var n = "invalid encoding";
        e.decode = function(t, e, i) {
          for (var s, r = i, a = 0, l = 0; l < t.length;) {
            var c = t.charCodeAt(l++);
            if (61 === c && a > 1) break;
            if (void 0 === (c = o[c])) throw Error(n);
            switch (a) {
              case 0:
                s = c, a = 1;
                break;
              case 1:
                e[i++] = s << 2 | (48 & c) >> 4, s = c, a = 2;
                break;
              case 2:
                e[i++] = (15 & s) << 4 | (60 & c) >> 2, s = c, a = 3;
                break;
              case 3:
                e[i++] = (3 & s) << 6 | c, a = 0
            }
          }
          if (1 === a) throw Error(n);
          return i - r
        }, e.test = function(t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
        }
      }
    }),
    require_eventemitter = __commonJS({
      "node_modules/@protobufjs/eventemitter/index.js"(t, e) {
        function i() {
          this._listeners = {}
        }
        e.exports = i, i.prototype.on = function(t, e, i) {
          return (this._listeners[t] || (this._listeners[t] = [])).push({
            fn: e,
            ctx: i || this
          }), this
        }, i.prototype.off = function(t, e) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === e) this._listeners[t] = [];
          else
            for (var i = this._listeners[t], s = 0; s < i.length;) i[s].fn === e ? i.splice(s, 1) : ++s;
          return this
        }, i.prototype.emit = function(t) {
          var e = this._listeners[t];
          if (e) {
            for (var i = [], s = 1; s < arguments.length;) i.push(arguments[s++]);
            for (s = 0; s < e.length;) e[s].fn.apply(e[s++].ctx, i)
          }
          return this
        }
      }
    }),
    require_float = __commonJS({
      "node_modules/@protobufjs/float/index.js"(t, e) {
        function i(t) {
          return "undefined" != typeof Float32Array ? function() {
            var e = new Float32Array([-0]),
              i = new Uint8Array(e.buffer),
              s = 128 === i[3];

            function o(t, s, o) {
              e[0] = t, s[o] = i[0], s[o + 1] = i[1], s[o + 2] = i[2], s[o + 3] = i[3]
            }

            function n(t, s, o) {
              e[0] = t, s[o] = i[3], s[o + 1] = i[2], s[o + 2] = i[1], s[o + 3] = i[0]
            }

            function r(t, s) {
              return i[0] = t[s], i[1] = t[s + 1], i[2] = t[s + 2], i[3] = t[s + 3], e[0]
            }

            function a(t, s) {
              return i[3] = t[s], i[2] = t[s + 1], i[1] = t[s + 2], i[0] = t[s + 3], e[0]
            }
            t.writeFloatLE = s ? o : n, t.writeFloatBE = s ? n : o, t.readFloatLE = s ? r : a, t.readFloatBE = s ? a : r
          }() : function() {
            function e(t, e, i, s) {
              var o = e < 0 ? 1 : 0;
              if (o && (e = -e), 0 === e) t(1 / e > 0 ? 0 : 2147483648, i, s);
              else if (isNaN(e)) t(2143289344, i, s);
              else if (e > 34028234663852886e22) t((o << 31 | 2139095040) >>> 0, i, s);
              else if (e < 11754943508222875e-54) t((o << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, i, s);
              else {
                var n = Math.floor(Math.log(e) / Math.LN2);
                t((o << 31 | n + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -n) * 8388608)) >>> 0, i, s)
              }
            }

            function i(t, e, i) {
              var s = t(e, i),
                o = 2 * (s >> 31) + 1,
                n = s >>> 23 & 255,
                r = 8388607 & s;
              return 255 === n ? r ? NaN : o * (1 / 0) : 0 === n ? 1401298464324817e-60 * o * r : o * Math.pow(2, n - 150) * (r + 8388608)
            }
            t.writeFloatLE = e.bind(null, s), t.writeFloatBE = e.bind(null, o), t.readFloatLE = i.bind(null, n), t.readFloatBE = i.bind(null, r)
          }(), "undefined" != typeof Float64Array ? function() {
            var e = new Float64Array([-0]),
              i = new Uint8Array(e.buffer),
              s = 128 === i[7];

            function o(t, s, o) {
              e[0] = t, s[o] = i[0], s[o + 1] = i[1], s[o + 2] = i[2], s[o + 3] = i[3], s[o + 4] = i[4], s[o + 5] = i[5], s[o + 6] = i[6], s[o + 7] = i[7]
            }

            function n(t, s, o) {
              e[0] = t, s[o] = i[7], s[o + 1] = i[6], s[o + 2] = i[5], s[o + 3] = i[4], s[o + 4] = i[3], s[o + 5] = i[2], s[o + 6] = i[1], s[o + 7] = i[0]
            }

            function r(t, s) {
              return i[0] = t[s], i[1] = t[s + 1], i[2] = t[s + 2], i[3] = t[s + 3], i[4] = t[s + 4], i[5] = t[s + 5], i[6] = t[s + 6], i[7] = t[s + 7], e[0]
            }

            function a(t, s) {
              return i[7] = t[s], i[6] = t[s + 1], i[5] = t[s + 2], i[4] = t[s + 3], i[3] = t[s + 4], i[2] = t[s + 5], i[1] = t[s + 6], i[0] = t[s + 7], e[0]
            }
            t.writeDoubleLE = s ? o : n, t.writeDoubleBE = s ? n : o, t.readDoubleLE = s ? r : a, t.readDoubleBE = s ? a : r
          }() : function() {
            function e(t, e, i, s, o, n) {
              var r = s < 0 ? 1 : 0;
              if (r && (s = -s), 0 === s) t(0, o, n + e), t(1 / s > 0 ? 0 : 2147483648, o, n + i);
              else if (isNaN(s)) t(0, o, n + e), t(2146959360, o, n + i);
              else if (s > 17976931348623157e292) t(0, o, n + e), t((r << 31 | 2146435072) >>> 0, o, n + i);
              else {
                var a;
                if (s < 22250738585072014e-324) t((a = s / 5e-324) >>> 0, o, n + e), t((r << 31 | a / 4294967296) >>> 0, o, n + i);
                else {
                  var l = Math.floor(Math.log(s) / Math.LN2);
                  1024 === l && (l = 1023), t(4503599627370496 * (a = s * Math.pow(2, -l)) >>> 0, o, n + e), t((r << 31 | l + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, n + i)
                }
              }
            }

            function i(t, e, i, s, o) {
              var n = t(s, o + e),
                r = t(s, o + i),
                a = 2 * (r >> 31) + 1,
                l = r >>> 20 & 2047,
                c = 4294967296 * (1048575 & r) + n;
              return 2047 === l ? c ? NaN : a * (1 / 0) : 0 === l ? 5e-324 * a * c : a * Math.pow(2, l - 1075) * (c + 4503599627370496)
            }
            t.writeDoubleLE = e.bind(null, s, 0, 4), t.writeDoubleBE = e.bind(null, o, 4, 0), t.readDoubleLE = i.bind(null, n, 0, 4), t.readDoubleBE = i.bind(null, r, 4, 0)
          }(), t
        }

        function s(t, e, i) {
          e[i] = 255 & t, e[i + 1] = t >>> 8 & 255, e[i + 2] = t >>> 16 & 255, e[i + 3] = t >>> 24
        }

        function o(t, e, i) {
          e[i] = t >>> 24, e[i + 1] = t >>> 16 & 255, e[i + 2] = t >>> 8 & 255, e[i + 3] = 255 & t
        }

        function n(t, e) {
          return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
        }

        function r(t, e) {
          return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
        }
        e.exports = i(i)
      }
    }),
    require_inquire = __commonJS({
      "node_modules/@protobufjs/inquire/index.js"(exports, module) {
        function inquire(moduleName) {
          try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod
          } catch (t) {}
          return null
        }
        module.exports = inquire
      }
    }),
    require_utf8 = __commonJS({
