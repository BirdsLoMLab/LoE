// Fragment: stat_system_s_L410482.js
// Lines: 410482-410682 of bundle-beautified.js
// Categories: Stat System
// Keywords: block
// Hit lines: 410482, 410592

      return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty")
    }
    var s = this.start,
      o = this.startLoc;
    return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), s, o, !0, !1), this.eat(types$1.parenL) ? t.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = empty, this.finishNode(t, "NewExpression")
  }, pp$5.parseTemplateElement = function(t) {
    var e = t.isTagged,
      i = this.startNode();
    return this.type === types$1.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
      raw: this.value.replace(/\r\n?/g, "\n"),
      cooked: null
    }) : i.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    }, this.next(), i.tail = this.type === types$1.backQuote, this.finishNode(i, "TemplateElement")
  }, pp$5.parseTemplate = function(t) {
    void 0 === t && (t = {});
    var e = t.isTagged;
    void 0 === e && (e = !1);
    var i = this.startNode();
    this.next(), i.expressions = [];
    var s = this.parseTemplateElement({
      isTagged: e
    });
    for (i.quasis = [s]; !s.tail;) this.type === types$1.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(types$1.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(types$1.braceR), i.quasis.push(s = this.parseTemplateElement({
      isTagged: e
    }));
    return this.next(), this.finishNode(i, "TemplateLiteral")
  }, pp$5.isAsyncProp = function(t) {
    return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  }, pp$5.parseObj = function(t, e) {
    var i = this.startNode(),
      s = !0,
      o = {};
    for (i.properties = [], this.next(); !this.eat(types$1.braceR);) {
      if (s) s = !1;
      else if (this.expect(types$1.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) break;
      var n = this.parseProperty(t, e);
      t || this.checkPropClash(n, o, e), i.properties.push(n)
    }
    return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression")
  }, pp$5.parseProperty = function(t, e) {
    var i, s, o, n, r = this.startNode();
    if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) return t ? (r.argument = this.parseIdent(!1), this.type === types$1.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(r, "RestElement")) : (r.argument = this.parseMaybeAssign(!1, e), this.type === types$1.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(r, "SpreadElement"));
    this.options.ecmaVersion >= 6 && (r.method = !1, r.shorthand = !1, (t || e) && (o = this.start, n = this.startLoc), t || (i = this.eat(types$1.star)));
    var a = this.containsEsc;
    return this.parsePropertyName(r), !t && !a && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(r) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(types$1.star), this.parsePropertyName(r)) : s = !1, this.parsePropertyValue(r, t, i, s, o, n, e, a), this.finishNode(r, "Property")
  }, pp$5.parseGetterSetter = function(t) {
    var e = t.key.name;
    this.parsePropertyName(t), t.value = this.parseMethod(!1), t.kind = e;
    var i = "get" === t.kind ? 0 : 1;
    if (t.value.params.length !== i) {
      var s = t.value.start;
      "get" === t.kind ? this.raiseRecoverable(s, "getter should have no params") : this.raiseRecoverable(s, "setter should have exactly one param")
    } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
  }, pp$5.parsePropertyValue = function(t, e, i, s, o, n, r, a) {
    (i || s) && this.type === types$1.colon && this.unexpected(), this.eat(types$1.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, r), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === types$1.parenL ? (e && this.unexpected(), t.method = !0, t.value = this.parseMethod(i, s), t.kind = "init") : e || a || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === types$1.comma || this.type === types$1.braceR || this.type === types$1.eq ? this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((i || s) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = o), e ? t.value = this.parseMaybeDefault(o, n, this.copyNode(t.key)) : this.type === types$1.eq && r ? (r.shorthandAssign < 0 && (r.shorthandAssign = this.start), t.value = this.parseMaybeDefault(o, n, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.kind = "init", t.shorthand = !0) : this.unexpected() : ((i || s) && this.unexpected(), this.parseGetterSetter(t))
  }, pp$5.parsePropertyName = function(t) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(types$1.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(types$1.bracketR), t.key;
      t.computed = !1
    }
    return t.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
  }, pp$5.initFunction = function(t) {
    t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
  }, pp$5.parseMethod = function(t, e, i) {
    var s = this.startNode(),
      o = this.yieldPos,
      n = this.awaitPos,
      r = this.awaitIdentPos;
    return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = t), this.options.ecmaVersion >= 8 && (s.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(functionFlags(e, s.generator) | SCOPE_SUPER | (i ? SCOPE_DIRECT_SUPER : 0)), this.expect(types$1.parenL), s.params = this.parseBindingList(types$1.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0, !1), this.yieldPos = o, this.awaitPos = n, this.awaitIdentPos = r, this.finishNode(s, "FunctionExpression")
  }, pp$5.parseArrowExpression = function(t, e, i, s) {
    var o = this.yieldPos,
      n = this.awaitPos,
      r = this.awaitIdentPos;
    return this.enterScope(functionFlags(i, !1) | SCOPE_ARROW), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, s), this.yieldPos = o, this.awaitPos = n, this.awaitIdentPos = r, this.finishNode(t, "ArrowFunctionExpression")
  }, pp$5.parseFunctionBody = function(t, e, i, s) {
    var o = e && this.type !== types$1.braceL,
      n = this.strict,
      r = !1;
    if (o) t.body = this.parseMaybeAssign(s), t.expression = !0, this.checkParams(t, !1);
    else {
      var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
      n && !a || (r = this.strictDirective(this.end)) && a && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      var l = this.labels;
      this.labels = [], r && (this.strict = !0), this.checkParams(t, !n && !r && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, BIND_OUTSIDE), t.body = this.parseBlock(!1, void 0, r && !n), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = l
    }
    this.exitScope()
  }, pp$5.isSimpleParamList = function(t) {
    for (var e = 0, i = t; e < i.length; e += 1) {
      if ("Identifier" !== i[e].type) return !1
    }
    return !0
  }, pp$5.checkParams = function(t, e) {
    for (var i = Object.create(null), s = 0, o = t.params; s < o.length; s += 1) {
      var n = o[s];
      this.checkLValInnerPattern(n, BIND_VAR, e ? null : i)
    }
  }, pp$5.parseExprList = function(t, e, i, s) {
    for (var o = [], n = !0; !this.eat(t);) {
      if (n) n = !1;
      else if (this.expect(types$1.comma), e && this.afterTrailingComma(t)) break;
      var r = void 0;
      i && this.type === types$1.comma ? r = null : this.type === types$1.ellipsis ? (r = this.parseSpread(s), s && this.type === types$1.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : r = this.parseMaybeAssign(!1, s), o.push(r)
    }
    return o
  }, pp$5.checkUnreserved = function(t) {
    var e = t.start,
      i = t.end,
      s = t.name;
    (this.inGenerator && "yield" === s && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === s && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().flags & SCOPE_VAR || "arguments" !== s || this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || "arguments" !== s && "await" !== s || this.raise(e, "Cannot use " + s + " in class static initialization block"), this.keywords.test(s) && this.raise(e, "Unexpected keyword '" + s + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, i).indexOf("\\")) || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s) && (this.inAsync || "await" !== s || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"))
  }, pp$5.parseIdent = function(t) {
    var e = this.parseIdentNode();
    return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), "await" !== e.name || this.awaitIdentPos || (this.awaitIdentPos = e.start)), e
  }, pp$5.parseIdentNode = function() {
    var t = this.startNode();
    return this.type === types$1.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, "class" !== t.name && "function" !== t.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop(), this.type = types$1.name) : this.unexpected(), t
  }, pp$5.parsePrivateIdent = function() {
    var t = this.startNode();
    return this.type === types$1.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (0 === this.privateNameStack.length ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t
  }, pp$5.parseYield = function(t) {
    this.yieldPos || (this.yieldPos = this.start);
    var e = this.startNode();
    return this.next(), this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(types$1.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
  }, pp$5.parseAwait = function(t) {
    this.awaitPos || (this.awaitPos = this.start);
    var e = this.startNode();
    return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression")
  };
  var pp$4 = Parser.prototype;
  pp$4.raise = function(t, e) {
    var i = getLineInfo(this.input, t);
    e += " (" + i.line + ":" + i.column + ")", this.sourceFile && (e += " in " + this.sourceFile);
    var s = new SyntaxError(e);
    throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s
  }, pp$4.raiseRecoverable = pp$4.raise, pp$4.curPosition = function() {
    if (this.options.locations) return new Position(this.curLine, this.pos - this.lineStart)
  };
  var pp$3 = Parser.prototype,
    Scope2 = function(t) {
      this.flags = t, this.var = [], this.lexical = [], this.functions = []
    };
  pp$3.enterScope = function(t) {
    this.scopeStack.push(new Scope2(t))
  }, pp$3.exitScope = function() {
    this.scopeStack.pop()
  }, pp$3.treatFunctionsAsVarInScope = function(t) {
    return t.flags & SCOPE_FUNCTION || !this.inModule && t.flags & SCOPE_TOP
  }, pp$3.declareName = function(t, e, i) {
    var s = !1;
    if (e === BIND_LEXICAL) {
      var o = this.currentScope();
      s = o.lexical.indexOf(t) > -1 || o.functions.indexOf(t) > -1 || o.var.indexOf(t) > -1, o.lexical.push(t), this.inModule && o.flags & SCOPE_TOP && delete this.undefinedExports[t]
    } else if (e === BIND_SIMPLE_CATCH) {
      this.currentScope().lexical.push(t)
    } else if (e === BIND_FUNCTION) {
      var n = this.currentScope();
      s = this.treatFunctionsAsVar ? n.lexical.indexOf(t) > -1 : n.lexical.indexOf(t) > -1 || n.var.indexOf(t) > -1, n.functions.push(t)
    } else
      for (var r = this.scopeStack.length - 1; r >= 0; --r) {
        var a = this.scopeStack[r];
        if (a.lexical.indexOf(t) > -1 && !(a.flags & SCOPE_SIMPLE_CATCH && a.lexical[0] === t) || !this.treatFunctionsAsVarInScope(a) && a.functions.indexOf(t) > -1) {
          s = !0;
          break
        }
        if (a.var.push(t), this.inModule && a.flags & SCOPE_TOP && delete this.undefinedExports[t], a.flags & SCOPE_VAR) break
      }
    s && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared")
  }, pp$3.checkLocalExport = function(t) {
    -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && (this.undefinedExports[t.name] = t)
  }, pp$3.currentScope = function() {
    return this.scopeStack[this.scopeStack.length - 1]
  }, pp$3.currentVarScope = function() {
    for (var t = this.scopeStack.length - 1;; t--) {
      var e = this.scopeStack[t];
      if (e.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK)) return e
    }
  }, pp$3.currentThisScope = function() {
    for (var t = this.scopeStack.length - 1;; t--) {
      var e = this.scopeStack[t];
      if (e.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK) && !(e.flags & SCOPE_ARROW)) return e
    }
  };
  var Node = function(t, e, i) {
      this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new SourceLocation(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
    },
    pp$2 = Parser.prototype;

  function finishNodeAt(t, e, i, s) {
    return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t
  }
  pp$2.startNode = function() {
    return new Node(this, this.start, this.startLoc)
  }, pp$2.startNodeAt = function(t, e) {
    return new Node(this, t, e)
  }, pp$2.finishNode = function(t, e) {
    return finishNodeAt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
  }, pp$2.finishNodeAt = function(t, e, i, s) {
    return finishNodeAt.call(this, t, e, i, s)
  }, pp$2.copyNode = function(t) {
    var e = new Node(this, t.start, this.startLoc);
