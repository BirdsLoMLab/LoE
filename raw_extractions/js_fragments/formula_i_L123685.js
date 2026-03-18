// Fragment: formula_i_L123685.js
// Lines: 123685-123885 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil, Math.floor
// Hit lines: 123686, 123711, 123747, 123771, 123799, 123822, 123829, 123840, 123848, 123851, 123855, 123856, 123857, 123867

        const i = new Date(1e3 * e - 1e3 * TimerMgr.inst.timeZone);
        return i.setUTCHours(0, 0, 0, 0), Math.ceil((t.serverTime - i.getTime() - 1e3 * TimerMgr.inst.timeZone) / 1e3 / 24 / 3600)
      }
      static getTimeUntilNextDay(t) {
        return this.getTimestampUntilDay(t, 1) - t
      }
      static getNextMondayTime(t) {
        const e = new Date(t - 1e3 * TimerMgr.inst.timeZone),
          i = e.getUTCDay(),
          s = 1 === i ? 7 : (1 - i + 7) % 7,
          o = e.getUTCDate() + s;
        return e.setUTCDate(o), e.setUTCHours(0, 0, 0, 0), e.getTime() + 1e3 * TimerMgr.inst.timeZone
      }
      static getTimestampUntilDay(t, e) {
        const i = new Date(t - 1e3 * TimerMgr.inst.timeZone);
        return i.setUTCDate(i.getUTCDate() + e), i.setUTCHours(0, 0, 0, 0), i.getTime() + 1e3 * TimerMgr.inst.timeZone
      }
      static getTimestampUntilHour(t, e, i = 0, s = 0) {
        const o = TimerMgr.inst.timeZone,
          n = new Date(t - 1e3 * o);
        return n.setUTCHours(e, i, s, 0), n.getTime() + 1e3 * o
      }
      static getDaySecond() {
        const e = new Date(t.serverTime),
          i = new Date(t.serverTime);
        i.setHours(0, 0, 0, 0);
        return Math.floor((e.getTime() - i.getTime()) / 1e3)
      }
      static formatDate(t, e = 0) {
        const i = new Date(t - 1e3 * TimerMgr.inst.timeZone),
          s = i.getUTCFullYear(),
          o = String(i.getUTCMonth() + 1).padStart(2, "0"),
          n = String(i.getUTCDate()).padStart(2, "0"),
          r = String(i.getUTCHours()).padStart(2, "0"),
          a = i.getUTCMinutes(),
          l = String(a).padStart(2, "0"),
          c = String(i.getUTCSeconds()).padStart(2, "0");
        return 1 == e ? `${s}${ToolUtil.chinese(1213)}${o}${ToolUtil.chinese(1214)}${n}${ToolUtil.chinese(1215)}` : 2 == e ? `${r}:${l}:${c}` : 3 == e ? `${r}:${l}` : 4 == e ? `${s}/${o}/${n} ${r}:${l}:${c}` : 5 == e ? `${o}/${n}` : 6 == e ? `${s}.${i.getUTCMonth()+1}.${i.getUTCDate()}` : 7 == e ? `${o}/${n} ${r}:${l}:${c}` : 8 == e ? `${s}.${o}.${n} ${r}:${l}` : 9 == e ? `${o}/${n} ${r}:${l}` : `${s}${ToolUtil.chinese(1213)}${o}${ToolUtil.chinese(1214)}${n}${ToolUtil.chinese(1215)} ${r}:${l}:${c}`
      }
      static formatChatDate(e) {
        const i = new Date(e - 1e3 * TimerMgr.inst.timeZone),
          s = (i.getUTCFullYear(), String(i.getUTCMonth() + 1).padStart(2, "0")),
          o = String(i.getUTCDate()).padStart(2, "0"),
          n = String(i.getUTCHours()).padStart(2, "0"),
          r = i.getUTCMinutes(),
          a = String(r).padStart(2, "0"),
          l = (String(i.getUTCSeconds()).padStart(2, "0"), new Date(t.serverTime - 1e3 * TimerMgr.inst.timeZone).setUTCHours(0, 0, 0, 0) + 1e3 * TimerMgr.inst.timeZone);
        return e >= l && e < l + 864e5 ? t.formatDate(e, 3) : e >= l - 864e5 && e < l ? `${ToolUtil.chinese(1224)} ${t.formatDate(e,3)}` : `${s}月${o}日 ${n}:${a}`
      }
      static getTimeDetail(t) {
        const e = TimerMgr.inst.timeZone,
          i = new Date(t - 1e3 * e);
        return {
          year: i.getUTCFullYear(),
          month: i.getUTCMonth() + 1,
          day: i.getUTCDate(),
          hours: i.getUTCHours(),
          minute: i.getUTCMinutes(),
          seconds: i.getUTCSeconds()
        }
      }
      static toSecond(t) {
        return Math.floor(Number(t) / 1e3)
      }
      static formatDHMS(e, i = 0) {
        "number" != typeof e && (e = Number(e));
        const [s, o, n, r] = t.toDHMS(e);
        let a = String(r).padStart(2, "0"),
          l = String(n).padStart(2, "0"),
          c = String(o).padStart(2, "0"),
          h = String(s).padStart(2, "0");
        return 1 == i ? `${a}` : 2 == i ? `${l}:${a}` : 3 == i ? `${c}:${l}:${a}` : 5 == i ? s > 0 ? (s < 10 && (h = String(s).padStart(1, "0")), `${h}${ToolUtil.chinese(1216)}`) : `${c}:${l}` : 6 == i ? `${String(o+24*s)}:${l}:${a}` : 7 == i || 4 == i ? 0 == o && 0 == s ? `${l}:${a}` : 0 == s ? `${c}:${l}:${a}` : `${s}d ${o}h` : 8 == i ? s >= 1 ? `${parseInt(h,10)}d ${c}:${l}:${a}` : `${c}:${l}:${a}` : 9 == i ? 0 == n ? "1m" : 0 == o ? `${n}m` : 0 == s ? `${o}h` : `${s}d` : "00" == h ? `${c}:${l}:${a}` : `${h}${ToolUtil.chinese(1216)} ${c}:${l}:${a}`
      }
      static formatDHMSMS(e, i = 0) {
        const [s, o, n, r, a] = t.toDHMSMS(e);
        let l = String(a).padStart(3, "0"),
          c = String(r).padStart(2, "0"),
          h = String(n).padStart(2, "0"),
          u = String(o).padStart(2, "0"),
          p = String(s).padStart(2, "0");
        return 2 == i ? `${h}:${c}.${l}` : "00" == p ? `${u}:${h}:${c}` : `${p}${ToolUtil.chinese(1216)} ${u}:${h}:${c}`
      }
      static formatDHM(e) {
        "number" != typeof e && (e = Number(e));
        const [i, s, o, n] = t.toDHMS(e);
        if (i > 0) {
          const t = Math.floor(i / 365);
          return t > 0 ? `${t}${ToolUtil.chinese(4678)}` : `${i}${ToolUtil.chinese(1220)}`
        }
        return s > 0 ? `${s}${ToolUtil.chinese(1221)}` : o > 0 ? `${o}${ToolUtil.chinese(1222)}` : ToolUtil.chinese(1223)
      }
      static formatDHM2(e) {
        null == e && (e = t.serverTime), "number" != typeof e && (e = Number(e)), (Number.isNaN(e) || null == e) && (e = t.serverTime);
        let i = this.formatDateTimestamp(e),
          s = i.split(" ")[1];
        return this.isToday(e) ? s : this.isYesterday(e) ? `${ToolUtil.chinese(1224)} ${s}` : i
      }
      static padStart(t, e = 2) {
        return t.toString().padStart(e, "0")
      }
      static formatDateTimestamp(t) {
        t = Number(t);
        const e = TimerMgr.inst.timeZone,
          i = new Date(t - 1e3 * e);
        return `${i.getUTCFullYear()}-${("0"+(i.getUTCMonth()+1)).slice(-2)}-${("0"+i.getUTCDate()).slice(-2)} ${("0"+i.getUTCHours()).slice(-2)}:${("0"+i.getUTCMinutes()).slice(-2)}`
      }
      static formatTimestamp(t) {
        t = Number(t);
        const e = new Date(t - 1e3 * TimerMgr.inst.timeZone);
        e.getUTCFullYear(), ("0" + (e.getUTCMonth() + 1)).slice(-2), ("0" + e.getUTCDate()).slice(-2);
        return `${("0"+e.getUTCHours()).slice(-2)}:${("0"+e.getUTCMinutes()).slice(-2)}`
      }
      static toDHMS(t) {
        if (t <= 0) return [0, 0, 0, 0];
        return [Math.floor(t / 86400), Math.floor(t % 86400 / 3600), Math.floor(t % 3600 / 60), Math.floor(t % 60)]
      }
      static toDHMSMS(e) {
        if (e <= 0) return [0, 0, 0, 0, 0];
        return [...t.toDHMS(e / 1e3), e % 1e3]
      }
      static isToday(e) {
        const i = new Date(e - 1e3 * TimerMgr.inst.timeZone),
          s = new Date(t.serverTime - 1e3 * TimerMgr.inst.timeZone);
        return i.getUTCDate() === s.getUTCDate() && i.getUTCMonth() === s.getUTCMonth() && i.getUTCFullYear() === s.getUTCFullYear()
      }
      static isYesterday(e) {
        const i = new Date(e - 1e3 * TimerMgr.inst.timeZone),
          s = new Date(t.serverTime - 1e3 * TimerMgr.inst.timeZone);
        return i.getUTCDate() === s.getUTCDate() - 1 && i.getUTCMonth() === s.getUTCMonth() && i.getUTCFullYear() === s.getUTCFullYear()
      }
      static get serverZoneTime() {
        return t.serverTime - 0
      }
      static get serverTime() {
        return TimerMgr.inst.serverTime
      }
      static get serverSecTime() {
        return Math.floor(t.serverTime / 1e3)
      }
      static isOverTime(e) {
        return e < t.serverSecTime
      }
      static formatSeconds(t, e = 0) {
        var i;
        let s = Math.floor(t / 60),
          o = t % 60,
          n = s < 10 ? "0" + s : s.toString(),
          r = o < 10 ? "0" + o : o.toString();
        if (0 == e) return `${n}:${r}`;
        if (1 == e) {
          let t = ToolUtil.isChinese || "th" == (null == (i = ToolUtil.currentLang) ? void 0 : i.ext) ? "" : " ";
          return `${n}${ToolUtil.chinese(1218)}${t}${r}${ToolUtil.chinese(1219)}`
        }
      }
      static formatSeconds2(e) {
        let i = Math.floor(e / 3600),
          s = i < 10 ? "0" + i : i.toString(),
          o = e - 3600 * i;
        return `${s}:${t.formatSeconds(o)}`
      }
      static formatSeconds3(t) {
        let e = "00";
        if (t <= 5) {
          const i = Math.floor(t % 1 * 100);
          e = i < 10 ? `0${i}` : i.toString()
        }
        const i = Math.floor(t);
        return `${i<10?`0${i}`:i.toString()}:${e}`
      }
      static sencondsToMH(t, e = !0) {
        const i = Math.floor(t / 86400),
          s = Math.floor(t % 86400 / 3600),
          o = Math.floor(t % 3600 / 60),
          n = t % 60;
        let r = "";
        return i > 0 && (r += `${i}${ToolUtil.chinese(1216)}`), s > 0 && (r += `${s}${ToolUtil.chinese(1217)}`), o > 0 && (r += `${o}${ToolUtil.chinese(1225)}`), (n > 0 && e || "" === r) && (r += `${n}${ToolUtil.chinese(1219)}`), r.trim()
      }
      static calculateDaysPassed(t, e) {
        const i = new Date(t - 1e3 * TimerMgr.inst.timeZone),
          s = new Date(e - 1e3 * TimerMgr.inst.timeZone),
          o = new Date(Date.UTC(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())).getTime() + 1e3 * TimerMgr.inst.timeZone,
          n = new Date(Date.UTC(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate())).getTime() + 1e3 * TimerMgr.inst.timeZone;
        return Math.floor((n - o) / 864e5)
      }
      static getDateZero(t) {
        return new Date(t - 1e3 * TimerMgr.inst.timeZone).setUTCHours(0, 0, 0, 0) + 1e3 * TimerMgr.inst.timeZone
      }
      static getUTCTimeByFormat(t) {
        return new Date(Number(t) - 1e3 * TimerMgr.inst.timeZone).getTime() + 1e3 * TimerMgr.inst.timeZone
      }
      static getTimeByFormat(t) {
        return new Date(Date.UTC(t[0], t[1], t[2], t[3], t[4], t[5])).getTime() + 1e3 * TimerMgr.inst.timeZone
      }
    },
    _TimerMgr = class t {
      constructor() {
        this._serverTime = 0, this._serverOffTime = 0, this._timeZone = 0, this._serverTodayStartTime = 0, this._openTime = 0, this._taskId = 1, this._taskList = new Array, this._historyFrameList = new Array, this._frameTimeCost = 1 / 24, this._schTaskId = 1, this._schTaskList = new Array, this._nextFrameSchTime = 2 / Laya.Config.FPS, this.createTime = 0, this._onlineTime = 0, this._setSerTime = !1
      }
      get timeZone() {
        return this._timeZone
      }
