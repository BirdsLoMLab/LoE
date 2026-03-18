// Fragment: stat_system_e_L409725.js
// Lines: 409725-409825 of bundle-beautified.js
// Categories: Stat System
// Keywords: block
// Hit lines: 409725

    if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === types$1._catch) {
      var e = this.startNode();
      this.next(), this.eat(types$1.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause")
    }
    return t.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
  }, pp$8.parseVarStatement = function(t, e, i) {
    return this.next(), this.parseVar(t, !1, e, i), this.semicolon(), this.finishNode(t, "VariableDeclaration")
  }, pp$8.parseWhileStatement = function(t) {
    return this.next(), t.test = this.parseParenExpression(), this.labels.push(loopLabel), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
  }, pp$8.parseWithStatement = function(t) {
    return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
  }, pp$8.parseEmptyStatement = function(t) {
    return this.next(), this.finishNode(t, "EmptyStatement")
  }, pp$8.parseLabeledStatement = function(t, e, i, s) {
    for (var o = 0, n = this.labels; o < n.length; o += 1) {
      n[o].name === e && this.raise(i.start, "Label '" + e + "' is already declared")
    }
    for (var r = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null, a = this.labels.length - 1; a >= 0; a--) {
      var l = this.labels[a];
      if (l.statementStart !== t.start) break;
      l.statementStart = this.start, l.kind = r
    }
    return this.labels.push({
      name: e,
      kind: r,
      statementStart: this.start
    }), t.body = this.parseStatement(s ? -1 === s.indexOf("label") ? s + "label" : s : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement")
  }, pp$8.parseExpressionStatement = function(t, e) {
    return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
  }, pp$8.parseBlock = function(t, e, i) {
    for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(types$1.braceL), t && this.enterScope(0); this.type !== types$1.braceR;) {
      var s = this.parseStatement(null);
      e.body.push(s)
    }
    return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
  }, pp$8.parseFor = function(t, e) {
    return t.init = e, this.expect(types$1.semi), t.test = this.type === types$1.semi ? null : this.parseExpression(), this.expect(types$1.semi), t.update = this.type === types$1.parenR ? null : this.parseExpression(), this.expect(types$1.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
  }, pp$8.parseForIn = function(t, e) {
    var i = this.type === types$1._in;
    return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!i || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) && this.raise(e.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(types$1.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement")
  }, pp$8.parseVar = function(t, e, i, s) {
    for (t.declarations = [], t.kind = i;;) {
      var o = this.startNode();
      if (this.parseVarId(o, i), this.eat(types$1.eq) ? o.init = this.parseMaybeAssign(e) : s || "const" !== i || this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? s || "Identifier" === o.id.type || e && (this.type === types$1._in || this.isContextual("of")) ? o.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(o, "VariableDeclarator")), !this.eat(types$1.comma)) break
    }
    return t
  }, pp$8.parseVarId = function(t, e) {
    t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, "var" === e ? BIND_VAR : BIND_LEXICAL, !1)
  };
  var FUNC_STATEMENT = 1,
    FUNC_HANGING_STATEMENT = 2,
    FUNC_NULLABLE_ID = 4;

  function isPrivateNameConflicted(t, e) {
    var i = e.key.name,
      s = t[i],
      o = "true";
    return "MethodDefinition" !== e.type || "get" !== e.kind && "set" !== e.kind || (o = (e.static ? "s" : "i") + e.kind), "iget" === s && "iset" === o || "iset" === s && "iget" === o || "sget" === s && "sset" === o || "sset" === s && "sget" === o ? (t[i] = "true", !1) : !!s || (t[i] = o, !1)
  }

  function checkKeyName(t, e) {
    var i = t.computed,
      s = t.key;
    return !i && ("Identifier" === s.type && s.name === e || "Literal" === s.type && s.value === e)
  }
  pp$8.parseFunction = function(t, e, i, s, o) {
    this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === types$1.star && e & FUNC_HANGING_STATEMENT && this.unexpected(), t.generator = this.eat(types$1.star)), this.options.ecmaVersion >= 8 && (t.async = !!s), e & FUNC_STATEMENT && (t.id = e & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent(), !t.id || e & FUNC_HANGING_STATEMENT || this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION));
    var n = this.yieldPos,
      r = this.awaitPos,
      a = this.awaitIdentPos;
    return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(functionFlags(t.async, t.generator)), e & FUNC_STATEMENT || (t.id = this.type === types$1.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1, o), this.yieldPos = n, this.awaitPos = r, this.awaitIdentPos = a, this.finishNode(t, e & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression")
  }, pp$8.parseFunctionParams = function(t) {
    this.expect(types$1.parenL), t.params = this.parseBindingList(types$1.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
  }, pp$8.parseClass = function(t, e) {
    this.next();
    var i = this.strict;
    this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
    var s = this.enterClassBody(),
      o = this.startNode(),
      n = !1;
    for (o.body = [], this.expect(types$1.braceL); this.type !== types$1.braceR;) {
      var r = this.parseClassElement(null !== t.superClass);
      r && (o.body.push(r), "MethodDefinition" === r.type && "constructor" === r.kind ? (n && this.raiseRecoverable(r.start, "Duplicate constructor in the same class"), n = !0) : r.key && "PrivateIdentifier" === r.key.type && isPrivateNameConflicted(s, r) && this.raiseRecoverable(r.key.start, "Identifier '#" + r.key.name + "' has already been declared"))
    }
    return this.strict = i, this.next(), t.body = this.finishNode(o, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
  }, pp$8.parseClassElement = function(t) {
    if (this.eat(types$1.semi)) return null;
    var e = this.options.ecmaVersion,
      i = this.startNode(),
      s = "",
      o = !1,
      n = !1,
      r = "method",
      a = !1;
    if (this.eatContextual("static")) {
      if (e >= 13 && this.eat(types$1.braceL)) return this.parseClassStaticBlock(i), i;
      this.isClassElementNameStart() || this.type === types$1.star ? a = !0 : s = "static"
    }
    if (i.static = a, !s && e >= 8 && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== types$1.star || this.canInsertSemicolon() ? s = "async" : n = !0), !s && (e >= 9 || !n) && this.eat(types$1.star) && (o = !0), !s && !n && !o) {
      var l = this.value;
      (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? r = l : s = l)
