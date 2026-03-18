// Fragment: formula_r_L124890.js
// Lines: 124890-124991 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.floor
// Hit lines: 124891

          const r = Math.pow(10, i.length - 1 - n),
            a = Math.floor(t / r) % 10;
          0 !== a ? (o && (s += ToolUtil.chinese(1085), o = !1), s += e[a] + i[i.length - 1 - n]) : o = !0
        }
        let n = ToolUtil.chinese(1085);
        return s.startsWith(n) && (s = s.substring(1)), t > 10 && t < 20 && (s = s.substring(1)), s || ToolUtil.chinese(1085)
      }
      static arabicToEnglish(t) {
        switch (t) {
          case 1:
            return ToolUtil.chinese(130004);
          case 2:
            return ToolUtil.chinese(130005);
          case 3:
            return ToolUtil.chinese(130006);
          case 4:
            return ToolUtil.chinese(130007);
          case 5:
            return ToolUtil.chinese(130008);
          case 6:
            return ToolUtil.chinese(130009);
          case 7:
            return ToolUtil.chinese(130010);
          case 8:
            return ToolUtil.chinese(130011);
          case 9:
            return ToolUtil.chinese(130012);
          case 10:
            return ToolUtil.chinese(130013);
          default:
            return ToolUtil.chinese(130014)
        }
      }
      static num2Chinese2(t) {
        const e = [ToolUtil.chinese(1085), ToolUtil.chinese(1098), ToolUtil.chinese(1099), ToolUtil.chinese(1100), ToolUtil.chinese(1101), ToolUtil.chinese(1102), ToolUtil.chinese(1103), ToolUtil.chinese(1104), ToolUtil.chinese(1105), ToolUtil.chinese(1106)],
          i = ["", ToolUtil.chinese(1107), ToolUtil.chinese(1108), ToolUtil.chinese(1109), ToolUtil.chinese(1074), ToolUtil.chinese(1075)];
        let s = "";
        const o = t.toString(),
          n = o.length;
        for (let t = 0; t < n; t++) {
          const r = parseInt(o[t]);
          0 !== r ? s += e[r] + i[n - t - 1] : s.slice(-1) !== ToolUtil.chinese(1085) && (s += e[r])
        }
        return s
      }
      static isSame(t, e) {
        return !(!t || !e) && t.toString() == e.toString()
      }
      static numberFormatLong(e) {
        return t.formatLongValue(e.toString())
      }
      static battleNumberFormat(t) {
        return this.numberFormat(t)
      }
      static formatLongValue(e) {
        return t.formatNumberToChineseUnits(e)
      }
      static formatNumberToChineseUnits(e, i = 0) {
        if (!e) return console.error("StringUtil.formatNumberToChineseUnits numStr:null"), "";
        t.units || (t.units = ["K", "M", "B", "T", "Q", "C", "D", "E"]);
        e.includes("e") ? e = this.scientificToStr(e) : e.includes(".") && (e = e.split(".")[0]);
        const s = e.length,
          o = Math.floor((s - 1) / 3) - 1;
        if (o < 0) return e;
        if (o >= t.units.length) return ToolUtil.chinese(1118);
        const n = s - 3 * (o + 1),
          r = e.slice(0, n),
          a = e.slice(n, n + i);
        let l = r;
        return a && parseInt(a) > 0 && (l += `.${a}`, l = l.replace(/\.?0+$/, "")), `${l}${t.units[o]}`
      }
      static numberFormat(e) {
        if (isNaN(e) || !isFinite(e)) return;
        let i = (e = Math.floor(e)) < 0;
        i && (e *= -1);
        let s = e.toString();
        const o = s.length;
        if (i && (s = `-${s}`), o <= 4) return s;
        let n = 0;
        switch (o % 3) {
          case 2:
            n = 4;
            break;
          case 0:
            n = 5;
            break;
          default:
            n = 3
        }
        t.units || t.formatLongValue("0");
        let r = 0,
          a = 1e3,
          l = e;
        for (; l >= a;)
          if (l /= a, r++, r > t.units.length) return s;
        if (r < 1) return s;
        const c = t.units[r - 1],
          h = Math.pow(a, r),
          u = Math.pow(10, o - n),
          p = h / u;
        return i ? "-" + Math.floor(e / u) / p + c : Math.floor(e / u) / p + c
      }
