// Fragment: server_api_TokContext_L410123.js
// Lines: 410123-410310 of bundle-beautified.js
// Categories: Server/API
// Keywords: proto, token
// Hit lines: 410124, 410151, 410162, 410174, 410210

  var TokContext = function(t, e, i, s, o) {
      this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = s, this.generator = !!o
    },
    types = {
      b_stat: new TokContext("{", !1),
      b_expr: new TokContext("{", !0),
      b_tmpl: new TokContext("${", !1),
      p_stat: new TokContext("(", !1),
      p_expr: new TokContext("(", !0),
      q_tmpl: new TokContext("`", !0, !0, (function(t) {
        return t.tryReadTemplateToken()
      })),
      f_stat: new TokContext("function", !1),
      f_expr: new TokContext("function", !0),
      f_expr_gen: new TokContext("function", !0, !1, null, !0),
      f_gen: new TokContext("function", !1, !1, null, !0)
    },
    pp$6 = Parser.prototype;
  pp$6.initialContext = function() {
    return [types.b_stat]
  }, pp$6.curContext = function() {
    return this.context[this.context.length - 1]
  }, pp$6.braceIsBlock = function(t) {
    var e = this.curContext();
    return e === types.f_expr || e === types.f_stat || (t !== types$1.colon || e !== types.b_stat && e !== types.b_expr ? t === types$1._return || t === types$1.name && this.exprAllowed ? lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) : t === types$1._else || t === types$1.semi || t === types$1.eof || t === types$1.parenR || t === types$1.arrow || (t === types$1.braceL ? e === types.b_stat : t !== types$1._var && t !== types$1._const && t !== types$1.name && !this.exprAllowed) : !e.isExpr)
  }, pp$6.inGeneratorContext = function() {
    for (var t = this.context.length - 1; t >= 1; t--) {
      var e = this.context[t];
      if ("function" === e.token) return e.generator
    }
    return !1
  }, pp$6.updateContext = function(t) {
    var e, i = this.type;
    i.keyword && t === types$1.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr
  }, pp$6.overrideContext = function(t) {
    this.curContext() !== t && (this.context[this.context.length - 1] = t)
  }, types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
    if (1 !== this.context.length) {
      var t = this.context.pop();
      t === types.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
    } else this.exprAllowed = !0
  }, types$1.braceL.updateContext = function(t) {
    this.context.push(this.braceIsBlock(t) ? types.b_stat : types.b_expr), this.exprAllowed = !0
  }, types$1.dollarBraceL.updateContext = function() {
    this.context.push(types.b_tmpl), this.exprAllowed = !0
  }, types$1.parenL.updateContext = function(t) {
    var e = t === types$1._if || t === types$1._for || t === types$1._with || t === types$1._while;
    this.context.push(e ? types.p_stat : types.p_expr), this.exprAllowed = !0
  }, types$1.incDec.updateContext = function() {}, types$1._function.updateContext = types$1._class.updateContext = function(t) {
    !t.beforeExpr || t === types$1._else || t === types$1.semi && this.curContext() !== types.p_stat || t === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) || (t === types$1.colon || t === types$1.braceL) && this.curContext() === types.b_stat ? this.context.push(types.f_stat) : this.context.push(types.f_expr), this.exprAllowed = !1
  }, types$1.colon.updateContext = function() {
    "function" === this.curContext().token && this.context.pop(), this.exprAllowed = !0
  }, types$1.backQuote.updateContext = function() {
    this.curContext() === types.q_tmpl ? this.context.pop() : this.context.push(types.q_tmpl), this.exprAllowed = !1
  }, types$1.star.updateContext = function(t) {
    if (t === types$1._function) {
      var e = this.context.length - 1;
      this.context[e] === types.f_expr ? this.context[e] = types.f_expr_gen : this.context[e] = types.f_gen
    }
    this.exprAllowed = !0
  }, types$1.name.updateContext = function(t) {
    var e = !1;
    this.options.ecmaVersion >= 6 && t !== types$1.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
  };
  var pp$5 = Parser.prototype;

  function isLocalVariableAccess(t) {
    return "Identifier" === t.type || "ParenthesizedExpression" === t.type && isLocalVariableAccess(t.expression)
  }

  function isPrivateFieldAccess(t) {
    return "MemberExpression" === t.type && "PrivateIdentifier" === t.property.type || "ChainExpression" === t.type && isPrivateFieldAccess(t.expression) || "ParenthesizedExpression" === t.type && isPrivateFieldAccess(t.expression)
  }
  pp$5.checkPropClash = function(t, e, i) {
    if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
      var s, o = t.key;
      switch (o.type) {
        case "Identifier":
          s = o.name;
          break;
        case "Literal":
          s = String(o.value);
          break;
        default:
          return
      }
      var n = t.kind;
      if (this.options.ecmaVersion >= 6) "__proto__" === s && "init" === n && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = o.start) : this.raiseRecoverable(o.start, "Redefinition of __proto__ property")), e.proto = !0);
      else {
        var r = e[s = "$" + s];
        if (r)("init" === n ? this.strict && r.init || r.get || r.set : r.init || r[n]) && this.raiseRecoverable(o.start, "Redefinition of property");
        else r = e[s] = {
          init: !1,
          get: !1,
          set: !1
        };
        r[n] = !0
      }
    }
  }, pp$5.parseExpression = function(t, e) {
    var i = this.start,
      s = this.startLoc,
      o = this.parseMaybeAssign(t, e);
    if (this.type === types$1.comma) {
      var n = this.startNodeAt(i, s);
      for (n.expressions = [o]; this.eat(types$1.comma);) n.expressions.push(this.parseMaybeAssign(t, e));
      return this.finishNode(n, "SequenceExpression")
    }
    return o
  }, pp$5.parseMaybeAssign = function(t, e, i) {
    if (this.isContextual("yield")) {
      if (this.inGenerator) return this.parseYield(t);
      this.exprAllowed = !1
    }
    var s = !1,
      o = -1,
      n = -1,
      r = -1;
    e ? (o = e.parenthesizedAssign, n = e.trailingComma, r = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new DestructuringErrors, s = !0);
    var a = this.start,
      l = this.startLoc;
    this.type !== types$1.parenL && this.type !== types$1.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = "await" === t);
    var c = this.parseMaybeConditional(t, e);
    if (i && (c = i.call(this, c, a, l)), this.type.isAssign) {
      var h = this.startNodeAt(a, l);
      return h.operator = this.value, this.type === types$1.eq && (c = this.toAssignable(c, !1, e)), s || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= c.start && (e.shorthandAssign = -1), this.type === types$1.eq ? this.checkLValPattern(c) : this.checkLValSimple(c), h.left = c, this.next(), h.right = this.parseMaybeAssign(t), r > -1 && (e.doubleProto = r), this.finishNode(h, "AssignmentExpression")
    }
    return s && this.checkExpressionErrors(e, !0), o > -1 && (e.parenthesizedAssign = o), n > -1 && (e.trailingComma = n), c
  }, pp$5.parseMaybeConditional = function(t, e) {
    var i = this.start,
      s = this.startLoc,
      o = this.parseExprOps(t, e);
    if (this.checkExpressionErrors(e)) return o;
    if (this.eat(types$1.question)) {
      var n = this.startNodeAt(i, s);
      return n.test = o, n.consequent = this.parseMaybeAssign(), this.expect(types$1.colon), n.alternate = this.parseMaybeAssign(t), this.finishNode(n, "ConditionalExpression")
    }
    return o
  }, pp$5.parseExprOps = function(t, e) {
    var i = this.start,
      s = this.startLoc,
      o = this.parseMaybeUnary(e, !1, !1, t);
    return this.checkExpressionErrors(e) || o.start === i && "ArrowFunctionExpression" === o.type ? o : this.parseExprOp(o, i, s, -1, t)
  }, pp$5.parseExprOp = function(t, e, i, s, o) {
    var n = this.type.binop;
    if (null != n && (!o || this.type !== types$1._in) && n > s) {
      var r = this.type === types$1.logicalOR || this.type === types$1.logicalAND,
        a = this.type === types$1.coalesce;
      a && (n = types$1.logicalAND.binop);
      var l = this.value;
      this.next();
      var c = this.start,
        h = this.startLoc,
        u = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, o), c, h, n, o),
        p = this.buildBinary(e, i, t, u, l, r || a);
      return (r && this.type === types$1.coalesce || a && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(p, e, i, s, o)
    }
    return t
  }, pp$5.buildBinary = function(t, e, i, s, o, n) {
    "PrivateIdentifier" === s.type && this.raise(s.start, "Private identifier can only be left side of binary expression");
    var r = this.startNodeAt(t, e);
    return r.left = i, r.operator = o, r.right = s, this.finishNode(r, n ? "LogicalExpression" : "BinaryExpression")
  }, pp$5.parseMaybeUnary = function(t, e, i, s) {
    var o, n = this.start,
      r = this.startLoc;
    if (this.isContextual("await") && this.canAwait) o = this.parseAwait(s), e = !0;
    else if (this.type.prefix) {
      var a = this.startNode(),
        l = this.type === types$1.incDec;
      a.operator = this.value, a.prefix = !0, this.next(), a.argument = this.parseMaybeUnary(null, !0, l, s), this.checkExpressionErrors(t, !0), l ? this.checkLValSimple(a.argument) : this.strict && "delete" === a.operator && isLocalVariableAccess(a.argument) ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : "delete" === a.operator && isPrivateFieldAccess(a.argument) ? this.raiseRecoverable(a.start, "Private fields can not be deleted") : e = !0, o = this.finishNode(a, l ? "UpdateExpression" : "UnaryExpression")
    } else if (e || this.type !== types$1.privateId) {
      if (o = this.parseExprSubscripts(t, s), this.checkExpressionErrors(t)) return o;
      for (; this.type.postfix && !this.canInsertSemicolon();) {
        var c = this.startNodeAt(n, r);
        c.operator = this.value, c.prefix = !1, c.argument = o, this.checkLValSimple(o), this.next(), o = this.finishNode(c, "UpdateExpression")
      }
    } else(s || 0 === this.privateNameStack.length) && this.options.checkPrivateFields && this.unexpected(), o = this.parsePrivateIdent(), this.type !== types$1._in && this.unexpected();
    return i || !this.eat(types$1.starstar) ? o : e ? void this.unexpected(this.lastTokStart) : this.buildBinary(n, r, o, this.parseMaybeUnary(null, !1, !1, s), "**", !1)
  }, pp$5.parseExprSubscripts = function(t, e) {
    var i = this.start,
      s = this.startLoc,
      o = this.parseExprAtom(t, e);
    if ("ArrowFunctionExpression" === o.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return o;
    var n = this.parseSubscripts(o, i, s, !1, e);
    return t && "MemberExpression" === n.type && (t.parenthesizedAssign >= n.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= n.start && (t.parenthesizedBind = -1), t.trailingComma >= n.start && (t.trailingComma = -1)), n
  }, pp$5.parseSubscripts = function(t, e, i, s, o) {
    for (var n = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, r = !1;;) {
      var a = this.parseSubscript(t, e, i, s, n, r, o);
