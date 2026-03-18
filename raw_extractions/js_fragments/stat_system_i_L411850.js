// Fragment: stat_system_i_L411850.js
// Lines: 411850-411951 of bundle-beautified.js
// Categories: Stat System
// Keywords: block
// Hit lines: 411851

        const i = Object.assign(defaultApi, this.apis),
          s = new Scope_default("block");
        s.const("this", _global);
        for (const t in i) s.const(t, i[t]);
        switch ((0, import_typeof23.default)(t).type) {
          case "object":
            return parser_default(t, s);
          case "uint8array":
            return parser_default(decode(t, e), s);
          default:
            throw new Error("Unsupported data")
        }
      }
    },
    index_default = {
      Fly: Fly,
      Buffer: import_buffer4.Buffer,
      decode: decode,
      encode: encode,
      createAst: createAst_default,
      createDic: dic_default
    },
    {
      Fly: Fly2,
      Buffer: Buffer2,
      createAst: createAst2,
      createDic: createDic2,
      encode: encode2
    } = index_default,
    LuaStart = class {
      static run(t) {
        LuaMon.overrideLog();
        const e = __spreadValues({
            Laya: Laya,
            fgui: fgui,
            UILayer: UILayer,
            JSON: JSON,
            BaseConfig: BaseConfig,
            RegExp: RegExp,
            UIManager: UIManager,
            FnsdkMgr: FnsdkMgr,
            HwFnsdkMgr: HwFnsdkMgr,
            FNSDK: FNSDK,
            StringUtil: StringUtil,
            CfgUtil: CfgUtil,
            ToolUtil: ToolUtil,
            MsgName: MsgName,
            RedPointConfig: RedPointConfig2,
            RedPointMgr: RedPointMgr,
            MathUtil: MathUtil,
            XmlUtil: XmlUtil,
            TimeUtil: TimeUtil,
            RpgEventCtrl: RpgEventCtrl,
            ResManager: ResManager,
            NetManager: NetManager,
            NetMgr: NetMgr,
            TimerMgr: TimerMgr,
            EventDispatcher: EventDispatcher,
            ConfigManager: ConfigManager,
            Date: Date,
            LocalCache: LocalCache,
            UnitHelper: UnitHelper,
            AIHelper: AIHelper,
            SceneManager: SceneManager,
            WndPopManager: WndPopManager,
            Uint8Array: Uint8Array,
            ArrayBuffer: ArrayBuffer,
            ObjectUtil: ObjectUtil,
            Debug: Debug,
            log: (...t) => {
              (null == t ? void 0 : t.length) > 0 && ("function" != typeof t[0] ? LuaMon.LuaMonLogFunc("--@", t.map((t => Util_default.inspect(t))).join("\n")) : LuaMon.LuaMonLogFunc("--@", t.join(",")))
            },
            luamonShowCacheLog: t => {
              LuaMon.showCacheLog(t)
            },
            RedPointKey: RedPointKey,
            window: window,
            document: document,
            console: console
          }, GlobalModule),
          i = new Fly2(e);
        let s;
        LuaMon.LuaMonPorfilerSetting = t => {
          if (clearInterval(s), t > 0) {
            const e = performance.memory;
            let i = 0,
              o = performance.now();
            s = setInterval((() => {
              let t = "";
              const s = e.usedJSHeapSize / 1024,
                n = performance.now();
              t += "fun=file@funB:0", t += "&caller=file@funA:0", t += `&beforeMem=${i}`, t += `&afterMem=${s}`, t += `&beforeTime=${o}`, t += `&afterTime=${n}`, t += "&stack=->stack traceback:->file:0: in function 'funA'->file:0: in function 'funB'\n", i = s, o = n, LuaMon.echoProfiler(t)
            }), 1e3 * t)
          }
        }, LuaMon.LuaMonRunFun = (t, e, s, o) => __async(this, null, (function*() {
          try {
            s = "luamonShowCacheLog()" === s ? `luamonShowCacheLog(${o.id})` : s;
            const t = createAst2(s),
              e = createDic2("123456789"),
              n = encode2(t, e.enc),
              r = i.go(n, e.dec);
            return `${LuaMon.msgTypes.get(3)}${r||""}`
