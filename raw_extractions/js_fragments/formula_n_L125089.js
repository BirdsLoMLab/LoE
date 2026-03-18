// Fragment: formula_n_L125089.js
// Lines: 125089-125195 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil
// Hit lines: 125095

                let n = e + 1;
                s += t.substring(o, n), o = n - 1, i += 4
              }
            } else s += n, i += this.strLengthUTF(n)
          } else s += n, i += this.strLengthUTF(n)
        }
        return Math.ceil(i)
      }
      static split(t, e, i = !1) {
        let s = t.split(e);
        if (0 == s.length) return [t];
        let o = [];
        for (let t = 0; t < s.length; t++) {
          let e = s[t];
          "" != e && (i ? o.push(Number(e)) : o.push(e))
        }
        return o
      }
      static isAllCharZeroToNine(e) {
        return !!t._regZeroToNine.test(e)
      }
      static getFileExtension(t) {
        const e = t.lastIndexOf(".");
        return -1 === e || e === t.length - 1 ? "" : t.substring(e)
      }
      static encode(t) {
        return encodeURIComponent(t)
      }
      static filterChatMark(e, i, s) {
        if (null == s || null == s || 0 == s) return e;
        for (let s = 0; s < i.length; s++) e = t.filterMark(e, i[s]);
        return e
      }
      static filterMark(t, e) {
        return t = t.replace(new RegExp(`${e}\\.*`, "gi"), "")
      }
      static replaceMark(t) {
        return null == t || null == t ? "" : t = (t = t.replace("[", "【")).replace("]", "】")
      }
      static setBreakLine(t) {
        let e = ToolUtil.currentLang.ext;
        if ("cn" == e || "" == e) return;
        let i = (t.italic ? "italic " : "") + (t.bold ? "bold " : "") + t.fontSize + "px " + t.font;
        Laya.Browser.context.font = i;
        const s = Laya.Browser.context.measureText(" ").width,
          o = t.text.split(" "),
          n = t.width;
        let r = "",
          a = 0,
          l = "";
        for (let t = 0; t < o.length; t++) {
          let e = o[t],
            i = Laya.Browser.context.measureText(e).width;
          a + s + i > n && (r += l + "\n", l = "", a = 0), l += e + " ", a += i + s
        }
        l.length > 0 && (r += l), t.text = r
      }
    };
  _StringUtil._regZeroToNine = new RegExp("^[0-9]*$");
  var StringUtil = _StringUtil;

  function KVO(t, e) {
    const i = `_$${e}`;
    Object.defineProperty(t, e, {
      get: function() {
        return this[i]
      },
      set: function(t) {
        const s = this[i];
        s !== t && (this[i] = t, this.notifyObservers(e, t, s))
      },
      enumerable: !0,
      configurable: !0
    })
  }
  var Observable = class {
      constructor() {
        this.observers = new Set
      }
      addObserver(t) {
        this.observers.has(t) || this.observers.add(t)
      }
      removeObserver(t) {
        return this.observers.delete(t)
      }
      removeAllObserver() {
        this.observers.clear()
      }
      notifyObservers(t, e, i) {
        this.observers.forEach((s => {
          s.onObservableValueChange(t, e, i, this)
        }))
      }
    },
    {
      regClass: regClass6,
      property: property6
    } = Laya,
    GLoaderMgr = class {
      reset() {
        return !0
      }
      static get inst() {
        if (null == GLoaderMgr._ins) {
          let t = new GLoaderMgr;
          t.init(), GLoaderMgr._ins = t, SingletonMgr.register(GLoaderMgr._ins)
        }
