// Fragment: stat_system_i_L408618.js
// Lines: 408618-408725 of bundle-beautified.js
// Categories: Stat System
// Keywords: block
// Hit lines: 408618, 408625

        const i = parser_default(t.block, e);
        if (hasInstance_default(i, RETURN)) return i
      } catch (i) {
        const s = t.handler;
        if (!s) throw i;
        {
          const t = parser_default(s.param, e, !0),
            o = new Scope_default("block", e);
          o.invasived = !0, o.const(t, i);
          const n = parser_default(s, o);
          if (hasInstance_default(n, RETURN)) return n
        }
      } finally {
        const i = t.finalizer;
        if (i) {
          const t = parser_default(i, e);
          if (hasInstance_default(t, RETURN)) return t
        }
      }
    },
    unaryExpression_default = (t, e) => {
      const i = t.argument,
        s = parser_default(i, e);
      switch (t.operator) {
        case "+":
          return +s;
        case "-":
          return -s;
        case "!":
          return !s;
        case "~":
          return ~s;
        case "void":
          return;
        case "typeof":
          if ("Identifier" === i.type) {
            const t = e.find(i.name);
            return t ? typeof t.value : "undefined"
          }
          return typeof parser_default(i, e);
        case "delete":
          switch (i.type) {
            case "MemberExpression":
              const t = i.object,
                s = i.property,
                o = i.computed ? parser_default(s, e) : s.name;
              return delete parser_default(t, e)[o];
            case "Identifier":
              return !1
          }
      }
    },
    getItem = (t, e) => {
      switch (t.type) {
        case "Identifier":
          const i = parser_default(t, e, !0),
            s = e.find(i);
          if (s) return s;
          throw `${i} 未定义`;
        case "MemberExpression":
          const o = parser_default(t.object, e),
            n = parser_default(t.property, e, !t.computed);
          return {
            set value(t) {
              return o[n] = t, !0
            }, get value() {
              return o[n]
            }
          }
      }
    },
    updateExpression_default = (t, e) => {
      const i = t.prefix,
        s = t.argument,
        o = t.operator,
        n = getItem(s, e);
      switch (o) {
        case "++":
          return i ? ++n.value : n.value++;
        case "--":
          return i ? --n.value : n.value--
      }
    },
    variableDeclaration_default = (t, e) => {
      const i = t.kind,
        s = t.declarations;
      for (let t = 0, o = s.length; t < o; t++) {
        const o = s[t],
          n = parser_default(o.id, e, !0),
          r = o.init ? parser_default(o.init, e) : void 0;
        switch (n.constructor) {
          case String:
            if (!e.declar(i, n, r)) throw new Error(`${n} 重复定义`);
            break;
          case Array:
            for (let t = 0, s = n.length; t < s; t++) {
              const s = n[t],
                o = r[t];
              if (!e.declar(i, s, o)) throw new Error(`${s} 重复定义`)
            }
            break;
          case Object:
            const t = Object.values(n);
            for (let s = 0, o = t.length; s < o; s++) {
              const o = t[s],
                n = r[o];
              if (!e.declar(i, o, n)) throw new Error(`${o} 重复定义`)
            }
