// Fragment: formula_o_L141144.js
// Lines: 141144-141287 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max
// Hit lines: 141144, 141156, 141187

        const o = Math.max(t.length, e.length);
        t = t.padStart(o, "0"), e = e.padStart(o, "0");
        for (let n = o - 1; n >= 0; n--) {
          let o = parseInt(t[n]),
            r = parseInt(e[n]) + s;
          o < r ? (o += 10, s = 1) : s = 0, i = (o - r).toString() + i
        }
        return i.replace(/^0+/, "") || "0"
      }
      addDigits(t, e) {
        const i = [];
        let s = 0;
        const o = Math.max(t.length, e.length);
        for (let n = 0; n < o || s > 0; n++) {
          const o = (n < t.length ? t[n] : 0) + (n < e.length ? e[n] : 0) + s;
          i.push(o % 10), s = Math.floor(o / 10)
        }
        return i
      }
      subtractDigits(t, e) {
        const i = [];
        let s = 0;
        for (let o = 0; o < t.length; o++) {
          let n = t[o] - (o < e.length ? e[o] : 0) - s;
          n < 0 ? (n += 10, s = 1) : s = 0, i.push(n)
        }
        for (; i.length > 1 && 0 === i[i.length - 1];) i.pop();
        return i
      }
      compare(t, e) {
        if (t.length > e.length) return 1;
        if (t.length < e.length) return -1;
        for (let i = t.length - 1; i >= 0; i--) {
          if (t[i] > e[i]) return 1;
          if (t[i] < e[i]) return -1
        }
        return 0
      }
      compareDigits(t, e) {
        const i = t.length - e.length;
        return 0 !== i ? i : t.localeCompare(e)
      }
      alignFractionalParts(t, e) {
        const i = Math.max(t.length, e.length);
        return [
          [...t, ...Array(i - t.length).fill(0)],
          [...e, ...Array(i - e.length).fill(0)]
        ]
      }
      digitsToString(t) {
        return t.reverse().join("")
      }
      isEqual(t) {
        return this.isNegative === t.isNegative && 0 === this.compare(this.integerPart, t.integerPart) && 0 === this.compare(this.fractionalPart, t.fractionalPart)
      }
      static isCompare(e, i) {
        const s = new t(e),
          o = new t(i);
        return s.isEqual(o) ? 0 : s.isGreaterThan(o) ? 1 : -1
      }
      isGreaterThan(t) {
        if (this.isNegative && !t.isNegative) return !1;
        if (!this.isNegative && t.isNegative) return !0;
        const e = this.compare(this.integerPart, t.integerPart);
        return 0 !== e ? this.isNegative ? e < 0 : e > 0 : this.isNegative ? this.compare(this.fractionalPart, t.fractionalPart) < 0 : this.compare(this.fractionalPart, t.fractionalPart) > 0
      }
      isGreaterThanOrEqual(t) {
        return this.isGreaterThan(t) || this.isEqual(t)
      }
      isLessThan(t) {
        return !this.isGreaterThanOrEqual(t)
      }
      isLessThanOrEqual(t) {
        return !this.isGreaterThan(t)
      }
      toString() {
        let t = this.isNegative ? "-" : "";
        const e = this.digitsToString(this.integerPart);
        if (t += e.length > 0 ? e : "0", this.fractionalPart.length > 0) {
          t += "." + this.fractionalPart.join("")
        }
        return t
      }
    },
    import_proto160 = __toESM(require_proto()),
    _Cfglandspirit_base = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfglandspirit_base.JsonName = "landspirit_base.json";
  var Cfglandspirit_base = _Cfglandspirit_base,
    _Cfgrecharge_en = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgrecharge_en.JsonName = "recharge_en.json";
  var Cfgrecharge_en = _Cfgrecharge_en,
    import_proto157 = __toESM(require_proto()),
    _Cfgintimacy_item = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgintimacy_item.JsonName = "intimacy_item.json";
  var Cfgintimacy_item = _Cfgintimacy_item,
    _Md5 = class t {
      constructor() {
        this._dataLength = 0, this._bufferLength = 0, this._state = new Int32Array(4), this._buffer = new ArrayBuffer(68), this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start()
      }
      static hashStr(t, e = !1) {
        return this.onePassHasher.start().appendStr(t).end(e)
      }
      static hashAsciiStr(t, e = !1) {
        return this.onePassHasher.start().appendAsciiStr(t).end(e)
      }
      static _hex(e) {
        const i = t.hexChars,
          s = t.hexOut;
        let o, n, r, a;
        for (a = 0; a < 4; a += 1)
          for (n = 8 * a, o = e[a], r = 0; r < 8; r += 2) s[n + 1 + r] = i.charAt(15 & o), o >>>= 4, s[n + 0 + r] = i.charAt(15 & o), o >>>= 4;
        return s.join("")
      }
      static _md5cycle(t, e) {
        let i = t[0],
          s = t[1],
          o = t[2],
          n = t[3];
        i += (s & o | ~s & n) + e[0] - 680876936 | 0, i = (i << 7 | i >>> 25) + s | 0, n += (i & s | ~i & o) + e[1] - 389564586 | 0, n = (n << 12 | n >>> 20) + i | 0, o += (n & i | ~n & s) + e[2] + 606105819 | 0, o = (o << 17 | o >>> 15) + n | 0, s += (o & n | ~o & i) + e[3] - 1044525330 | 0, s = (s << 22 | s >>> 10) + o | 0, i += (s & o | ~s & n) + e[4] - 176418897 | 0, i = (i << 7 | i >>> 25) + s | 0, n += (i & s | ~i & o) + e[5] + 1200080426 | 0, n = (n << 12 | n >>> 20) + i | 0, o += (n & i | ~n & s) + e[6] - 1473231341 | 0, o = (o << 17 | o >>> 15) + n | 0, s += (o & n | ~o & i) + e[7] - 45705983 | 0, s = (s << 22 | s >>> 10) + o | 0, i += (s & o | ~s & n) + e[8] + 1770035416 | 0, i = (i << 7 | i >>> 25) + s | 0, n += (i & s | ~i & o) + e[9] - 1958414417 | 0, n = (n << 12 | n >>> 20) + i | 0, o += (n & i | ~n & s) + e[10] - 42063 | 0, o = (o << 17 | o >>> 15) + n | 0, s += (o & n | ~o & i) + e[11] - 1990404162 | 0, s = (s << 22 | s >>> 10) + o | 0, i += (s & o | ~s & n) + e[12] + 1804603682 | 0, i = (i << 7 | i >>> 25) + s | 0, n += (i & s | ~i & o) + e[13] - 40341101 | 0, n = (n << 12 | n >>> 20) + i | 0, o += (n & i | ~n & s) + e[14] - 1502002290 | 0, o = (o << 17 | o >>> 15) + n | 0, s += (o & n | ~o & i) + e[15] + 1236535329 | 0, s = (s << 22 | s >>> 10) + o | 0, i += (s & n | o & ~n) + e[1] - 165796510 | 0, i = (i << 5 | i >>> 27) + s | 0, n += (i & o | s & ~o) + e[6] - 1069501632 | 0, n = (n << 9 | n >>> 23) + i | 0, o += (n & s | i & ~s) + e[11] + 643717713 | 0, o = (o << 14 | o >>> 18) + n | 0, s += (o & i | n & ~i) + e[0] - 373897302 | 0, s = (s << 20 | s >>> 12) + o | 0, i += (s & n | o & ~n) + e[5] - 701558691 | 0, i = (i << 5 | i >>> 27) + s | 0, n += (i & o | s & ~o) + e[10] + 38016083 | 0, n = (n << 9 | n >>> 23) + i | 0, o += (n & s | i & ~s) + e[15] - 660478335 | 0, o = (o << 14 | o >>> 18) + n | 0, s += (o & i | n & ~i) + e[4] - 405537848 | 0, s = (s << 20 | s >>> 12) + o | 0, i += (s & n | o & ~n) + e[9] + 568446438 | 0, i = (i << 5 | i >>> 27) + s | 0, n += (i & o | s & ~o) + e[14] - 1019803690 | 0, n = (n << 9 | n >>> 23) + i | 0, o += (n & s | i & ~s) + e[3] - 187363961 | 0, o = (o << 14 | o >>> 18) + n | 0, s += (o & i | n & ~i) + e[8] + 1163531501 | 0, s = (s << 20 | s >>> 12) + o | 0, i += (s & n | o & ~n) + e[13] - 1444681467 | 0, i = (i << 5 | i >>> 27) + s | 0, n += (i & o | s & ~o) + e[2] - 51403784 | 0, n = (n << 9 | n >>> 23) + i | 0, o += (n & s | i & ~s) + e[7] + 1735328473 | 0, o = (o << 14 | o >>> 18) + n | 0, s += (o & i | n & ~i) + e[12] - 1926607734 | 0, s = (s << 20 | s >>> 12) + o | 0, i += (s ^ o ^ n) + e[5] - 378558 | 0, i = (i << 4 | i >>> 28) + s | 0, n += (i ^ s ^ o) + e[8] - 2022574463 | 0, n = (n << 11 | n >>> 21) + i | 0, o += (n ^ i ^ s) + e[11] + 1839030562 | 0, o = (o << 16 | o >>> 16) + n | 0, s += (o ^ n ^ i) + e[14] - 35309556 | 0, s = (s << 23 | s >>> 9) + o | 0, i += (s ^ o ^ n) + e[1] - 1530992060 | 0, i = (i << 4 | i >>> 28) + s | 0, n += (i ^ s ^ o) + e[4] + 1272893353 | 0, n = (n << 11 | n >>> 21) + i | 0, o += (n ^ i ^ s) + e[7] - 155497632 | 0, o = (o << 16 | o >>> 16) + n | 0, s += (o ^ n ^ i) + e[10] - 1094730640 | 0, s = (s << 23 | s >>> 9) + o | 0, i += (s ^ o ^ n) + e[13] + 681279174 | 0, i = (i << 4 | i >>> 28) + s | 0, n += (i ^ s ^ o) + e[0] - 358537222 | 0, n = (n << 11 | n >>> 21) + i | 0, o += (n ^ i ^ s) + e[3] - 722521979 | 0, o = (o << 16 | o >>> 16) + n | 0, s += (o ^ n ^ i) + e[6] + 76029189 | 0, s = (s << 23 | s >>> 9) + o | 0, i += (s ^ o ^ n) + e[9] - 640364487 | 0, i = (i << 4 | i >>> 28) + s | 0, n += (i ^ s ^ o) + e[12] - 421815835 | 0, n = (n << 11 | n >>> 21) + i | 0, o += (n ^ i ^ s) + e[15] + 530742520 | 0, o = (o << 16 | o >>> 16) + n | 0, s += (o ^ n ^ i) + e[2] - 995338651 | 0, s = (s << 23 | s >>> 9) + o | 0, i += (o ^ (s | ~n)) + e[0] - 198630844 | 0, i = (i << 6 | i >>> 26) + s | 0, n += (s ^ (i | ~o)) + e[7] + 1126891415 | 0, n = (n << 10 | n >>> 22) + i | 0, o += (i ^ (n | ~s)) + e[14] - 1416354905 | 0, o = (o << 15 | o >>> 17) + n | 0, s += (n ^ (o | ~i)) + e[5] - 57434055 | 0, s = (s << 21 | s >>> 11) + o | 0, i += (o ^ (s | ~n)) + e[12] + 1700485571 | 0, i = (i << 6 | i >>> 26) + s | 0, n += (s ^ (i | ~o)) + e[3] - 1894986606 | 0, n = (n << 10 | n >>> 22) + i | 0, o += (i ^ (n | ~s)) + e[10] - 1051523 | 0, o = (o << 15 | o >>> 17) + n | 0, s += (n ^ (o | ~i)) + e[1] - 2054922799 | 0, s = (s << 21 | s >>> 11) + o | 0, i += (o ^ (s | ~n)) + e[8] + 1873313359 | 0, i = (i << 6 | i >>> 26) + s | 0, n += (s ^ (i | ~o)) + e[15] - 30611744 | 0, n = (n << 10 | n >>> 22) + i | 0, o += (i ^ (n | ~s)) + e[6] - 1560198380 | 0, o = (o << 15 | o >>> 17) + n | 0, s += (n ^ (o | ~i)) + e[13] + 1309151649 | 0, s = (s << 21 | s >>> 11) + o | 0, i += (o ^ (s | ~n)) + e[4] - 145523070 | 0, i = (i << 6 | i >>> 26) + s | 0, n += (s ^ (i | ~o)) + e[11] - 1120210379 | 0, n = (n << 10 | n >>> 22) + i | 0, o += (i ^ (n | ~s)) + e[2] + 718787259 | 0, o = (o << 15 | o >>> 17) + n | 0, s += (n ^ (o | ~i)) + e[9] - 343485551 | 0, s = (s << 21 | s >>> 11) + o | 0, t[0] = i + t[0] | 0, t[1] = s + t[1] | 0, t[2] = o + t[2] | 0, t[3] = n + t[3] | 0
      }
      start() {
        return this._dataLength = 0, this._bufferLength = 0, this._state.set(t.stateIdentity), this
      }
      appendStr(e) {
        const i = this._buffer8,
          s = this._buffer32;
        let o, n, r = this._bufferLength;
        for (n = 0; n < e.length; n += 1) {
          if (o = e.charCodeAt(n), o < 128) i[r++] = o;
          else if (o < 2048) i[r++] = 192 + (o >>> 6), i[r++] = 63 & o | 128;
          else if (o < 55296 || o > 56319) i[r++] = 224 + (o >>> 12), i[r++] = o >>> 6 & 63 | 128, i[r++] = 63 & o | 128;
          else {
