// Fragment: stat_system_l_L409407.js
// Lines: 409407-409508 of bundle-beautified.js
// Categories: Stat System
// Keywords: block
// Hit lines: 409408

      var l = {
        type: i ? "Block" : "Line",
        value: s,
        start: o,
        end: n
      };
      t.locations && (l.loc = new SourceLocation(this, r, a)), t.ranges && (l.range = [o, n]), e.push(l)
    }
  }
  var SCOPE_TOP = 1,
    SCOPE_FUNCTION = 2,
    SCOPE_ASYNC = 4,
    SCOPE_GENERATOR = 8,
    SCOPE_ARROW = 16,
    SCOPE_SIMPLE_CATCH = 32,
    SCOPE_SUPER = 64,
    SCOPE_DIRECT_SUPER = 128,
    SCOPE_CLASS_STATIC_BLOCK = 256,
    SCOPE_CLASS_FIELD_INIT = 512,
    SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;

  function functionFlags(t, e) {
    return SCOPE_FUNCTION | (t ? SCOPE_ASYNC : 0) | (e ? SCOPE_GENERATOR : 0)
  }
  var BIND_NONE = 0,
    BIND_VAR = 1,
    BIND_LEXICAL = 2,
    BIND_FUNCTION = 3,
    BIND_SIMPLE_CATCH = 4,
    BIND_OUTSIDE = 5,
    Parser = function(t, e, i) {
      this.options = t = getOptions(t), this.sourceFile = t.sourceFile, this.keywords = wordsRegexp(keywords$1[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
      var s = "";
      !0 !== t.allowReserved && (s = reservedWords[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3], "module" === t.sourceType && (s += " await")), this.reservedWords = wordsRegexp(s);
      var o = (s ? s + " " : "") + reservedWords.strict;
      this.reservedWordsStrict = wordsRegexp(o), this.reservedWordsStrictBind = wordsRegexp(o + " " + reservedWords.strictBind), this.input = String(e), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = types$1.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(SCOPE_TOP), this.regexpState = null, this.privateNameStack = []
    },
    prototypeAccessors = {
      inFunction: {
        configurable: !0
      },
      inGenerator: {
        configurable: !0
      },
      inAsync: {
        configurable: !0
      },
      canAwait: {
        configurable: !0
      },
      allowSuper: {
        configurable: !0
      },
      allowDirectSuper: {
        configurable: !0
      },
      treatFunctionsAsVar: {
        configurable: !0
      },
      allowNewDotTarget: {
        configurable: !0
      },
      inClassStaticBlock: {
        configurable: !0
      }
    };
  Parser.prototype.parse = function() {
    var t = this.options.program || this.startNode();
    return this.nextToken(), this.parseTopLevel(t)
  }, prototypeAccessors.inFunction.get = function() {
    return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0
  }, prototypeAccessors.inGenerator.get = function() {
    return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0
  }, prototypeAccessors.inAsync.get = function() {
    return (this.currentVarScope().flags & SCOPE_ASYNC) > 0
  }, prototypeAccessors.canAwait.get = function() {
    for (var t = this.scopeStack.length - 1; t >= 0; t--) {
      var e = this.scopeStack[t].flags;
      if (e & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT)) return !1;
      if (e & SCOPE_FUNCTION) return (e & SCOPE_ASYNC) > 0
    }
    return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction
  }, prototypeAccessors.allowSuper.get = function() {
    return (this.currentThisScope().flags & SCOPE_SUPER) > 0 || this.options.allowSuperOutsideMethod
  }, prototypeAccessors.allowDirectSuper.get = function() {
    return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0
  }, prototypeAccessors.treatFunctionsAsVar.get = function() {
    return this.treatFunctionsAsVarInScope(this.currentScope())
  }, prototypeAccessors.allowNewDotTarget.get = function() {
    for (var t = this.scopeStack.length - 1; t >= 0; t--) {
      var e = this.scopeStack[t].flags;
      if (e & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT) || e & SCOPE_FUNCTION && !(e & SCOPE_ARROW)) return !0
    }
    return !1
  }, prototypeAccessors.inClassStaticBlock.get = function() {
    return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0
  }, Parser.extend = function() {
    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
    for (var i = this, s = 0; s < t.length; s++) i = t[s](i);
    return i
  }, Parser.parse = function(t, e) {
    return new this(e, t).parse()
