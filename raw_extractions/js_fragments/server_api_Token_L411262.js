// Fragment: server_api_Token_L411262.js
// Lines: 411262-411375 of bundle-beautified.js
// Categories: Server/API
// Keywords: token
// Hit lines: 411262, 411275

  var Token = function(t) {
      this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new SourceLocation(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
    },
    pp = Parser.prototype;

  function stringToNumber(t, e) {
    return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""))
  }

  function stringToBigInt(t) {
    return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
  }
  pp.next = function(t) {
    !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Token(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
  }, pp.getToken = function() {
    return this.next(), new Token(this)
  }, "undefined" != typeof Symbol && (pp[Symbol.iterator] = function() {
    var t = this;
    return {
      next: function() {
        var e = t.getToken();
        return {
          done: e.type === types$1.eof,
          value: e
        }
      }
    }
  }), pp.nextToken = function() {
    var t = this.curContext();
    return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(types$1.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
  }, pp.readToken = function(t) {
    return isIdentifierStart(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
  }, pp.fullCharCodeAtPos = function() {
    var t = this.input.charCodeAt(this.pos);
    if (t <= 55295 || t >= 56320) return t;
    var e = this.input.charCodeAt(this.pos + 1);
    return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888
  }, pp.skipBlockComment = function() {
    var t = this.options.onComment && this.curPosition(),
      e = this.pos,
      i = this.input.indexOf("*/", this.pos += 2);
    if (-1 === i && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
      for (var s = void 0, o = e;
        (s = nextLineBreak(this.input, o, this.pos)) > -1;) ++this.curLine, o = this.lineStart = s;
    this.options.onComment && this.options.onComment(!0, this.input.slice(e + 2, i), e, this.pos, t, this.curPosition())
  }, pp.skipLineComment = function(t) {
    for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !isNewLine(s);) s = this.input.charCodeAt(++this.pos);
    this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, i, this.curPosition())
  }, pp.skipSpace = function() {
    t: for (; this.pos < this.input.length;) {
      var t = this.input.charCodeAt(this.pos);
      switch (t) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break t
          }
          break;
        default:
          if (!(t > 8 && t < 14 || t >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(t)))) break t;
          ++this.pos
      }
    }
  }, pp.finishToken = function(t, e) {
    this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
    var i = this.type;
    this.type = t, this.value = e, this.updateContext(i)
  }, pp.readToken_dot = function() {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t >= 48 && t <= 57) return this.readNumber(!0);
    var e = this.input.charCodeAt(this.pos + 2);
    return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(types$1.ellipsis)) : (++this.pos, this.finishToken(types$1.dot))
  }, pp.readToken_slash = function() {
    var t = this.input.charCodeAt(this.pos + 1);
    return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(types$1.assign, 2) : this.finishOp(types$1.slash, 1)
  }, pp.readToken_mult_modulo_exp = function(t) {
    var e = this.input.charCodeAt(this.pos + 1),
      i = 1,
      s = 42 === t ? types$1.star : types$1.modulo;
    return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++i, s = types$1.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(types$1.assign, i + 1) : this.finishOp(s, i)
  }, pp.readToken_pipe_amp = function(t) {
    var e = this.input.charCodeAt(this.pos + 1);
    if (e === t) {
      if (this.options.ecmaVersion >= 12)
        if (61 === this.input.charCodeAt(this.pos + 2)) return this.finishOp(types$1.assign, 3);
      return this.finishOp(124 === t ? types$1.logicalOR : types$1.logicalAND, 2)
    }
    return 61 === e ? this.finishOp(types$1.assign, 2) : this.finishOp(124 === t ? types$1.bitwiseOR : types$1.bitwiseAND, 1)
  }, pp.readToken_caret = function() {
    return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(types$1.assign, 2) : this.finishOp(types$1.bitwiseXOR, 1)
  }, pp.readToken_plus_min = function(t) {
    var e = this.input.charCodeAt(this.pos + 1);
    return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(types$1.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(types$1.assign, 2) : this.finishOp(types$1.plusMin, 1)
  }, pp.readToken_lt_gt = function(t) {
    var e = this.input.charCodeAt(this.pos + 1),
      i = 1;
    return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i) ? this.finishOp(types$1.assign, i + 1) : this.finishOp(types$1.bitShift, i)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(types$1.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
