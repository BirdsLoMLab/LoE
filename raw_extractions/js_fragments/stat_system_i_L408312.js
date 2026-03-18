// Fragment: stat_system_i_L408312.js
// Lines: 408312-408412 of bundle-beautified.js
// Categories: Stat System
// Keywords: block
// Hit lines: 408312

      const i = e.invasived ? e : new Scope_default("block", e);
      let s;
      t.body = getBody(t, e);
      for (let o = 0, n = t.body.length; o < n; o++) switch (s = parser_default(t.body[o], i), null == s ? void 0 : s.constructor) {
        case BREAK:
        case CONTINUE:
          return s.referr = e, s;
        case RETURN:
          return s.referr = e, i.yields ? (i.yields.push(s), i.yields) : s;
        case YIELD_LIST:
          i.yields = i.yields || new YIELD_LIST, i.yields.push(...s.value);
          break;
        case CALL:
        case AWAIT:
          i.calls = i.calls || new CALL_LIST, i.calls.push(s)
      }
      return i.yields ? i.yields : i.calls ? i.calls : void 0
    },
    breakStatement_default = (t, e) => new BREAK(t.label ? parser_default(t.label, e, !0) : void 0, e),
    getArgs = (t, e) => {
      const i = [];
      for (let s = 0, o = t.arguments.length; s < o; s++) {
        const o = t.arguments[s],
          n = parser_default(o, e);
        hasInstance_default(n, SPREAD) ? i.push(...n.value) : i.push(n)
      }
      return i
    },
    getObj = (t, e) => {
      if ("MemberExpression" === t.callee.type) {
        return t.callee.object._value
      }
      return e.find("this").value || void 0
    },
    callExpression_default = (t, e) => {
      const i = parser_default(t.callee, e),
        s = getArgs(t, e),
        o = getObj(t, e);
      return i.apply(o, s)
    },
    catchClause_default = (t, e) => parser_default(t.body, e),
    chainExpression_default = (t, e) => {
      try {
        return parser_default(t.expression, e)
      } catch (t) {
        switch (null == t ? void 0 : t.constructor) {
          case TypeError:
            return;
          case Error:
            return t
        }
      }
    },
    conditionalExpression_default = (t, e) => {
      const i = t.test,
        s = t.consequent,
        o = t.alternate;
      return parser_default(i, e) ? parser_default(s, e) : o ? parser_default(o, e) : void 0
    },
    continueStatement_default = (t, e) => {
      const i = t.label;
      return new CONTINUE(i ? parser_default(i, e, !0) : void 0, e)
    },
    debuggerStatement_default = (t, e) => {},
    doWhileStatement_default = (t, e) => {
      let i;
      do {
        const s = new Scope_default("loop", e);
        if (s.invasived = !0, i = parser_default(t.body, s), hasInstance_default(i, BREAK) || hasInstance_default(i, RETURN)) break;
        if (hasInstance_default(i, CONTINUE)) {
          if (i.value && i.value !== e.label) break
        } else;
      } while (parser_default(t.test, e));
      if (i) return i.referr = e, i
    },
    emptyStatement_default = (t, e) => {},
    expressionStatement_default = (t, e) => parser_default(t.expression, e),
    forInStatement_default = (t, e) => {
      const i = t.left,
        s = i.kind,
        o = i.declarations[0],
        n = parser_default(o.id, e, !0);
      let r;
      for (const i in parser_default(t.right, e)) {
        const o = new Scope_default("loop", e);
        if (o.invasived = !0, o.declar(s, n, i), r = parser_default(t.body, o), hasInstance_default(r, BREAK) || hasInstance_default(r, RETURN)) break;
        if (hasInstance_default(r, CONTINUE)) {
          if (r.value && r.value !== e.label) break
        } else;
      }
      if (r) return r.referr = e, r
    },
    forOfStatement_default = (t, e) => {
      const i = t.left,
        s = i.kind,
        o = i.declarations[0],
        n = parser_default(o.id, e, !0);
      let r;
      const a = new Scope_default("loop", e);
      for (const i of parser_default(t.right, a)) {
        const o = new Scope_default("loop", a);
