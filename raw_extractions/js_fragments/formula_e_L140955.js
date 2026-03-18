// Fragment: formula_e_L140955.js
// Lines: 140955-141056 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max
// Hit lines: 140956

            let e = 0;
            return Object.prototype.hasOwnProperty.call(this.drawData.typeHits, t) && (e = this.drawData.typeHits[t]), Math.max(i - (e - o.lastHit), 0)
          }
        }
        return 0
      }
      getRewardPreviewList(t) {
        const e = Cfgholiday_lil_turntable_box.get(t);
        if (!e) return [];
        const i = [];
        for (const t of e.lottery_type_show) {
          const e = {};
          i.push(e);
          const s = Number(t[2]) / 1e4,
            o = parseInt(t[0]);
          e.title = ToolUtil.chinese(t[1]), e.rateStr = StringUtil.format("{0}%", parseFloat((100 * s).toFixed(2))), e.itemArr = [];
          const n = Cfgholiday_lil_turntable_pool.get({
            reward_type: o
          });
          for (const t of n) {
            const i = s * Number(t.rate_appear) / 1e4;
            for (const s of t.reward) {
              const t = parseFloat((100 * i).toFixed(2));
              e.itemArr.push({
                itemData: ItemUtil.createDataById(s[0], s[1]),
                rateStr: StringUtil.format("{0}%", t)
              })
            }
          }
        }
        return i
      }
      refreshAllRed() {
        this.refreshFirstFreeRed(), this.refreshFreeRed(), this.refreshCostRed(), this.refreshRewardRed()
      }
      set openModuleView(t) {
        this._isOpenView = t, this.refreshFreeRed(), this.refreshCostRed()
      }
      refreshFirstFreeRed() {
        const t = this.boxData;
        t ? HolidayCtrl.inst.setRedActive(457, t.refreshCount <= 0, 456) : HolidayCtrl.inst.setRedActive(457, !1)
      }
      refreshRewardRed() {
        const t = this.drawData;
        if (!t) return void HolidayCtrl.inst.setRedActive(460, !1);
        const e = t.lotteryCount,
          i = t.specialRewards,
          s = Cfgholiday_lil_turntable_count.get({
            sub_funcid: HolidayCtrl.inst.actSubFuncId
          });
        for (const t of s)
          if (!(t.lottery_cnt > e || i.includes(t.id))) return void HolidayCtrl.inst.setRedActive(460, !0, 456);
        HolidayCtrl.inst.setRedActive(460, !1, 456)
      }
      refreshFreeRed() {
        const t = this.boxData;
        !this._isOpenView && t ? HolidayCtrl.inst.setRedActive(458, t.freeRefresh > 0, 456) : HolidayCtrl.inst.setRedActive(458, !1)
      }
      refreshCostRed() {
        const t = HolidayCtrl.inst.actSubFuncId,
          e = this.getDataCfg(t);
        if (!e || !e.open_cost || 0 == e.open_cost.length) return void HolidayCtrl.inst.setRedActive(459, !1);
        const i = e.open_cost,
          s = i[0][0],
          o = i[0][1];
        ItemObserverUtil.removeItemIdObserver(s, this), ItemObserverUtil.addItemIdObserver(s, this, (() => {
          this._isOpenView ? HolidayCtrl.inst.setRedActive(459, !1) : HolidayCtrl.inst.setRedActive(459, ItemCtrl.inst.checkItemIsEnough(s, o), 456)
        }))
      }
    };
  HolidayDaZuoZhanCtrl._instance = null, HolidayDaZuoZhanCtrl = __decorateClass([regClass24("a1L-XuZxRAO7Fp_tjd0vcg")], HolidayDaZuoZhanCtrl);
  var import_proto161 = __toESM(require_proto()),
    BigNumber = class t {
      constructor(t) {
        this.srcValue = "", this.srcintPartStr = "", this.srcintfracPartStr = "", this.isNegative = !1, this.integerPart = [], this.fractionalPart = [], "number" == typeof t ? (this.isNegative = t < 0, t = Math.abs(t).toString()) : (this.isNegative = "-" === t[0], t = this.isNegative ? t.slice(1) : t), this.srcValue = t;
        const [e, i] = t.split(".");
        this.srcintPartStr = e, this.integerPart = Array.from(e, (t => parseInt(t))).reverse(), i && (this.srcintfracPartStr = i, this.fractionalPart = Array.from(i, (t => parseInt(t))))
      }
      add(e) {
        if (this.integerPart.length <= 15 && e.integerPart.length <= 15) {
          const i = parseFloat(this.srcValue) + parseFloat(e.srcValue);
          return new t(i.toFixed(5).replace(/\.?0+$/, ""))
        }
        const [i, s] = this.alignFractionalParts(this.fractionalPart, e.fractionalPart), o = this.addDigits(this.integerPart, e.integerPart), n = this.addDigits(i, s), r = n.length > i.length ? 1 : 0, a = this.addDigits(o, [r]), l = r > 0 ? n.slice(0, -1) : n;
        let c = (this.isNegative ? "-" : "") + this.digitsToString(a);
        return l.length, new t(c.replace(/\.?0+$/, ""))
      }
      subtract(e) {
        if (this.integerPart.length <= 15 && e.integerPart.length <= 15) {
          const i = parseFloat(this.srcValue) - parseFloat(e.srcValue);
          return new t(i.toFixed(5).replace(/\.?0+$/, ""))
        }
        const i = this.compare(this.integerPart, e.integerPart);
        if (0 === i && 0 === this.compare(this.fractionalPart, e.fractionalPart)) return new t(0);
        const [s, o] = i > 0 ? [this.integerPart, e.integerPart] : [e.integerPart, this.integerPart], [n, r] = i > 0 ? [this.fractionalPart, e.fractionalPart] : [e.fractionalPart, this.fractionalPart], [a, l] = this.alignFractionalParts(n, r);
        let c = this.subtractDigits(a, l),
          h = 0;
        c.length < a.length && (h = 1, c = this.addDigits(c, [10]));
        const u = h > 0 ? this.subtractDigits(s, [1]) : s,
          p = this.subtractDigits(u, o);
        let d = (this.isNegative !== i > 0 ? "-" : "") + this.digitsToString(p);
        return this.digitsToString(c).length, new t(d.replace(/\.?0+$/, ""))
