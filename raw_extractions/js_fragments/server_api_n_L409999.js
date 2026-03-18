// Fragment: server_api_n_L409999.js
// Lines: 409999-410100 of bundle-beautified.js
// Categories: Server/API
// Keywords: token
// Hit lines: 410000

          var n = o[s];
          this.toAssignable(n, e), "RestElement" !== n.type || "ArrayPattern" !== n.argument.type && "ObjectPattern" !== n.argument.type || this.raise(n.argument.start, "Unexpected token")
        }
        break;
      case "Property":
        "init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
        break;
      case "ArrayExpression":
        t.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(t.elements, e);
        break;
      case "SpreadElement":
        t.type = "RestElement", this.toAssignable(t.argument, e), "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        "=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(t.expression, e, i);
        break;
      case "ChainExpression":
        this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!e) break;
      default:
        this.raise(t.start, "Assigning to rvalue")
    } else i && this.checkPatternErrors(i, !0);
    return t
  }, pp$7.toAssignableList = function(t, e) {
    for (var i = t.length, s = 0; s < i; s++) {
      var o = t[s];
      o && this.toAssignable(o, e)
    }
    if (i) {
      var n = t[i - 1];
      6 === this.options.ecmaVersion && e && n && "RestElement" === n.type && "Identifier" !== n.argument.type && this.unexpected(n.argument.start)
    }
    return t
  }, pp$7.parseSpread = function(t) {
    var e = this.startNode();
    return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement")
  }, pp$7.parseRestBinding = function() {
    var t = this.startNode();
    return this.next(), 6 === this.options.ecmaVersion && this.type !== types$1.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
  }, pp$7.parseBindingAtom = function() {
    if (this.options.ecmaVersion >= 6) switch (this.type) {
      case types$1.bracketL:
        var t = this.startNode();
        return this.next(), t.elements = this.parseBindingList(types$1.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
      case types$1.braceL:
        return this.parseObj(!0)
    }
    return this.parseIdent()
  }, pp$7.parseBindingList = function(t, e, i, s) {
    for (var o = [], n = !0; !this.eat(t);)
      if (n ? n = !1 : this.expect(types$1.comma), e && this.type === types$1.comma) o.push(null);
      else {
        if (i && this.afterTrailingComma(t)) break;
        if (this.type === types$1.ellipsis) {
          var r = this.parseRestBinding();
          this.parseBindingListItem(r), o.push(r), this.type === types$1.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
          break
        }
        o.push(this.parseAssignableListItem(s))
      } return o
  }, pp$7.parseAssignableListItem = function(t) {
    var e = this.parseMaybeDefault(this.start, this.startLoc);
    return this.parseBindingListItem(e), e
  }, pp$7.parseBindingListItem = function(t) {
    return t
  }, pp$7.parseMaybeDefault = function(t, e, i) {
    if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) return i;
    var s = this.startNodeAt(t, e);
    return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern")
  }, pp$7.checkLValSimple = function(t, e, i) {
    void 0 === e && (e = BIND_NONE);
    var s = e !== BIND_NONE;
    switch (t.type) {
      case "Identifier":
        this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (s ? "Binding " : "Assigning to ") + t.name + " in strict mode"), s && (e === BIND_LEXICAL && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (hasOwn(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), e !== BIND_OUTSIDE && this.declareName(t.name, e, t.start));
        break;
      case "ChainExpression":
        this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        s && this.raiseRecoverable(t.start, "Binding member expression");
        break;
      case "ParenthesizedExpression":
        return s && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, i);
      default:
        this.raise(t.start, (s ? "Binding" : "Assigning to") + " rvalue")
    }
  }, pp$7.checkLValPattern = function(t, e, i) {
    switch (void 0 === e && (e = BIND_NONE), t.type) {
      case "ObjectPattern":
        for (var s = 0, o = t.properties; s < o.length; s += 1) {
          var n = o[s];
          this.checkLValInnerPattern(n, e, i)
        }
        break;
      case "ArrayPattern":
        for (var r = 0, a = t.elements; r < a.length; r += 1) {
