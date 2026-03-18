// Fragment: server_api_DestructuringErrors_L409550.js
// Lines: 409550-409651 of bundle-beautified.js
// Categories: Server/API
// Keywords: token
// Hit lines: 409551

  }, pp$9.unexpected = function(t) {
    this.raise(null != t ? t : this.start, "Unexpected token")
  };
  var DestructuringErrors = function() {
    this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
  };
  pp$9.checkPatternErrors = function(t, e) {
    if (t) {
      t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
      var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
      i > -1 && this.raiseRecoverable(i, e ? "Assigning to rvalue" : "Parenthesized pattern")
    }
  }, pp$9.checkExpressionErrors = function(t, e) {
    if (!t) return !1;
    var i = t.shorthandAssign,
      s = t.doubleProto;
    if (!e) return i >= 0 || s >= 0;
    i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property")
  }, pp$9.checkYieldAwaitInDefaultParams = function() {
    this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
  }, pp$9.isSimpleAssignTarget = function(t) {
    return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
  };
  var pp$8 = Parser.prototype;
  pp$8.parseTopLevel = function(t) {
    var e = Object.create(null);
    for (t.body || (t.body = []); this.type !== types$1.eof;) {
      var i = this.parseStatement(null, !0, e);
      t.body.push(i)
    }
    if (this.inModule)
      for (var s = 0, o = Object.keys(this.undefinedExports); s < o.length; s += 1) {
        var n = o[s];
        this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined")
      }
    return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program")
  };
  var loopLabel = {
      kind: "loop"
    },
    switchLabel = {
      kind: "switch"
    };
  pp$8.isLet = function(t) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
    skipWhiteSpace.lastIndex = this.pos;
    var e = skipWhiteSpace.exec(this.input),
      i = this.pos + e[0].length,
      s = this.input.charCodeAt(i);
    if (91 === s || 92 === s) return !0;
    if (t) return !1;
    if (123 === s || s > 55295 && s < 56320) return !0;
    if (isIdentifierStart(s, !0)) {
      for (var o = i + 1; isIdentifierChar(s = this.input.charCodeAt(o), !0);) ++o;
      if (92 === s || s > 55295 && s < 56320) return !0;
      var n = this.input.slice(i, o);
      if (!keywordRelationalOperator.test(n)) return !0
    }
    return !1
  }, pp$8.isAsyncFunction = function() {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
    skipWhiteSpace.lastIndex = this.pos;
    var t, e = skipWhiteSpace.exec(this.input),
      i = this.pos + e[0].length;
    return !(lineBreak.test(this.input.slice(this.pos, i)) || "function" !== this.input.slice(i, i + 8) || i + 8 !== this.input.length && (isIdentifierChar(t = this.input.charCodeAt(i + 8)) || t > 55295 && t < 56320))
  }, pp$8.parseStatement = function(t, e, i) {
    var s, o = this.type,
      n = this.startNode();
    switch (this.isLet(t) && (o = types$1._var, s = "let"), o) {
      case types$1._break:
      case types$1._continue:
        return this.parseBreakContinueStatement(n, o.keyword);
      case types$1._debugger:
        return this.parseDebuggerStatement(n);
      case types$1._do:
        return this.parseDoStatement(n);
      case types$1._for:
        return this.parseForStatement(n);
      case types$1._function:
        return t && (this.strict || "if" !== t && "label" !== t) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(n, !1, !t);
      case types$1._class:
        return t && this.unexpected(), this.parseClass(n, !0);
      case types$1._if:
        return this.parseIfStatement(n);
      case types$1._return:
        return this.parseReturnStatement(n);
      case types$1._switch:
        return this.parseSwitchStatement(n);
      case types$1._throw:
        return this.parseThrowStatement(n);
      case types$1._try:
        return this.parseTryStatement(n);
      case types$1._const:
      case types$1._var:
        return s = s || this.value, t && "var" !== s && this.unexpected(), this.parseVarStatement(n, s);
      case types$1._while:
        return this.parseWhileStatement(n);
      case types$1._with:
        return this.parseWithStatement(n);
      case types$1.braceL:
        return this.parseBlock(!0, n);
      case types$1.semi:
