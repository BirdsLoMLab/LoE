// Fragment: stat_system_L411718.js
// Lines: 411718-411818 of bundle-beautified.js
// Categories: Stat System
// Keywords: block
// Hit lines: 411718

    i(t.block, e, "Statement"), t.handler && i(t.handler, e), t.finalizer && i(t.finalizer, e, "Statement")
  }, base.CatchClause = function(t, e, i) {
    t.param && i(t.param, e, "Pattern"), i(t.body, e, "Statement")
  }, base.WhileStatement = base.DoWhileStatement = function(t, e, i) {
    i(t.test, e, "Expression"), i(t.body, e, "Statement")
  }, base.ForStatement = function(t, e, i) {
    t.init && i(t.init, e, "ForInit"), t.test && i(t.test, e, "Expression"), t.update && i(t.update, e, "Expression"), i(t.body, e, "Statement")
  }, base.ForInStatement = base.ForOfStatement = function(t, e, i) {
    i(t.left, e, "ForInit"), i(t.right, e, "Expression"), i(t.body, e, "Statement")
  }, base.ForInit = function(t, e, i) {
    "VariableDeclaration" === t.type ? i(t, e) : i(t, e, "Expression")
  }, base.DebuggerStatement = ignore, base.FunctionDeclaration = function(t, e, i) {
    return i(t, e, "Function")
  }, base.VariableDeclaration = function(t, e, i) {
    for (var s = 0, o = t.declarations; s < o.length; s += 1) {
      i(o[s], e)
    }
  }, base.VariableDeclarator = function(t, e, i) {
    i(t.id, e, "Pattern"), t.init && i(t.init, e, "Expression")
  }, base.Function = function(t, e, i) {
    t.id && i(t.id, e, "Pattern");
    for (var s = 0, o = t.params; s < o.length; s += 1) {
      i(o[s], e, "Pattern")
    }
    i(t.body, e, t.expression ? "Expression" : "Statement")
  }, base.Pattern = function(t, e, i) {
    "Identifier" === t.type ? i(t, e, "VariablePattern") : "MemberExpression" === t.type ? i(t, e, "MemberPattern") : i(t, e)
  }, base.VariablePattern = ignore, base.MemberPattern = skipThrough, base.RestElement = function(t, e, i) {
    return i(t.argument, e, "Pattern")
  }, base.ArrayPattern = function(t, e, i) {
    for (var s = 0, o = t.elements; s < o.length; s += 1) {
      var n = o[s];
      n && i(n, e, "Pattern")
    }
  }, base.ObjectPattern = function(t, e, i) {
    for (var s = 0, o = t.properties; s < o.length; s += 1) {
      var n = o[s];
      "Property" === n.type ? (n.computed && i(n.key, e, "Expression"), i(n.value, e, "Pattern")) : "RestElement" === n.type && i(n.argument, e, "Pattern")
    }
  }, base.Expression = skipThrough, base.ThisExpression = base.Super = base.MetaProperty = ignore, base.ArrayExpression = function(t, e, i) {
    for (var s = 0, o = t.elements; s < o.length; s += 1) {
      var n = o[s];
      n && i(n, e, "Expression")
    }
  }, base.ObjectExpression = function(t, e, i) {
    for (var s = 0, o = t.properties; s < o.length; s += 1) {
      i(o[s], e)
    }
  }, base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration, base.SequenceExpression = function(t, e, i) {
    for (var s = 0, o = t.expressions; s < o.length; s += 1) {
      i(o[s], e, "Expression")
    }
  }, base.TemplateLiteral = function(t, e, i) {
    for (var s = 0, o = t.quasis; s < o.length; s += 1) {
      i(o[s], e)
    }
    for (var n = 0, r = t.expressions; n < r.length; n += 1) {
      i(r[n], e, "Expression")
    }
  }, base.TemplateElement = ignore, base.UnaryExpression = base.UpdateExpression = function(t, e, i) {
    i(t.argument, e, "Expression")
  }, base.BinaryExpression = base.LogicalExpression = function(t, e, i) {
    i(t.left, e, "Expression"), i(t.right, e, "Expression")
  }, base.AssignmentExpression = base.AssignmentPattern = function(t, e, i) {
    i(t.left, e, "Pattern"), i(t.right, e, "Expression")
  }, base.ConditionalExpression = function(t, e, i) {
    i(t.test, e, "Expression"), i(t.consequent, e, "Expression"), i(t.alternate, e, "Expression")
  }, base.NewExpression = base.CallExpression = function(t, e, i) {
    if (i(t.callee, e, "Expression"), t.arguments)
      for (var s = 0, o = t.arguments; s < o.length; s += 1) {
        i(o[s], e, "Expression")
      }
  }, base.MemberExpression = function(t, e, i) {
    i(t.object, e, "Expression"), t.computed && i(t.property, e, "Expression")
  }, base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function(t, e, i) {
    t.declaration && i(t.declaration, e, "ExportNamedDeclaration" === t.type || t.declaration.id ? "Statement" : "Expression"), t.source && i(t.source, e, "Expression")
  }, base.ExportAllDeclaration = function(t, e, i) {
    t.exported && i(t.exported, e), i(t.source, e, "Expression")
  }, base.ImportDeclaration = function(t, e, i) {
    for (var s = 0, o = t.specifiers; s < o.length; s += 1) {
      i(o[s], e)
    }
    i(t.source, e, "Expression")
  }, base.ImportExpression = function(t, e, i) {
    i(t.source, e, "Expression")
  }, base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.PrivateIdentifier = base.Literal = ignore, base.TaggedTemplateExpression = function(t, e, i) {
    i(t.tag, e, "Expression"), i(t.quasi, e, "Expression")
  }, base.ClassDeclaration = base.ClassExpression = function(t, e, i) {
    return i(t, e, "Class")
  }, base.Class = function(t, e, i) {
    t.id && i(t.id, e, "Pattern"), t.superClass && i(t.superClass, e, "Expression"), i(t.body, e)
  }, base.ClassBody = function(t, e, i) {
    for (var s = 0, o = t.body; s < o.length; s += 1) {
      i(o[s], e)
    }
  }, base.MethodDefinition = base.PropertyDefinition = base.Property = function(t, e, i) {
    t.computed && i(t.key, e, "Expression"), t.value && i(t.value, e, "Expression")
  };
  var createAst = t => parse3(t, {
      ecmaVersion: 2024
    }),
