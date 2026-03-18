// Fragment: formula_e_L135598.js
// Lines: 135598-135793 of bundle-beautified.js
// Categories: Formula, Gacha/Draw
// Keywords: Math.round, draw
// Hit lines: 135599, 135693

            let e = this._dicitemid.get(s.item_id);
            (null == (o = null == e ? void 0 : e.cfg) ? void 0 : o.quality) == t && (e.draw = s, i.push(e))
          }
        })), i.sort(((t, e) => t.cfg.sort - e.cfg.sort)), i
      }
      getListByPool(t, e = 0, i = -1, s = !1, o = !1, n) {
        let r = new Map,
          a = [];
        if (e == this.Poolid_all)
          for (const [e, s] of this._poolMap) e != this.Poolid_all && (r = this._getPoolShowItem(t, e, i, n, r));
        else r = this._getPoolShowItem(t, e, i, n);
        for (const [t, e] of r) {
          let t = !1;
          s || o || (t = !0), s && (e.canUpStar() || e.canMake) && (t = !0), o && (e.has || e.canMake) && (t = !0), t && a.push(e)
        }
        return a.sort(((t, e) => t.cfg.sort - e.cfg.sort)), a
      }
      _getPoolShowItem(t, e = 0, i = -1, s = -1, o) {
        o = null != o ? o : new Map;
        let n = this.getPool(e),
          r = this._poolCfgMap.get(e);
        if (r)
          for (const [e, a] of r) this.ifShowItem(n, a) && (s > 0 ? a.exists(s) && o.set(a.id, a) : -1 != i ? a.level == i && o.set(a.id, a) : a.cfg.quality != t && 0 != t || o.set(a.id, a));
        return o
      }
      ifShowItem(t, e) {
        return t.id == TreasureCtrl.inst.Poolid_other || t.id == TreasureCtrl.inst.Poolid_zhetian || t.id == TreasureCtrl.inst.Poolid_xianyou ? e.pieceOrDataHas : t.id != TreasureCtrl.inst.Poolid_all && (!!t.open() || e.pieceOrDataHas)
      }
      getSuitList(t) {
        let e = [];
        if (t == this.Poolid_all) {
          let t = this.getPoolList(1);
          for (const i of t) this._getSuitShowByPool(i.id, e)
        } else this._getSuitShowByPool(t, e);
        return e.sort(((t, e) => {
          let i = t.sortId,
            s = e.sortId;
          return i != s ? s - i : t.cfg.sort - e.cfg.sort
        })), e
      }
      _getSuitShowByPool(t, e) {
        return e = null != e ? e : [], this._suitMap.forEach((i => {
          let s = this.getPool(t),
            o = !1;
          i.pid == t && (s.open() || this.getPoolSuitHasItem(i.cfg.id)) && (o = !0), o && e.push(i)
        })), e
      }
      getAllListByLv(t = 0, e = !1, i = !1) {
        let s = [];
        for (let o = this.lvMax; o >= 0; o--) {
          let n = this.getListByPool(0, t, o, e, i);
          n.length > 0 && s.push(n)
        }
        return s
      }
      get allBeEffectIds() {
        if (null == this._allBeEffectIds) {
          this._allBeEffectIds = [];
          let t = Cfgtreasure_level.get();
          for (let e = 0; e < t.length; e++) {
            let i = t[e].effect.split(";");
            for (let t = 0; t < i.length; t++) {
              let e = i[t].split("-"),
                s = 0;
              s = e.length > 3 ? Number(e[3]) : Number(e[0]), -1 == this._allBeEffectIds.indexOf(s) && this._allBeEffectIds.push(s)
            }
          }
          this._allBeEffectIds.sort(((t, e) => t - e))
        }
        return this._allBeEffectIds
      }
      getAllListByAttr(t = 0, e = !1, i = !1, s) {
        let o = [];
        for (const n of this.allBeEffectIds) {
          let r = this.getListByPool(0, t, -1, e, i, n);
          r.length > 0 && (s && s.push(n), o.push(r))
        }
        return o
      }
      getAllListByQuality(t = 0, e = !1, i = !1) {
        let s = [],
          o = TreasureCtrl.inst.colArr;
        for (const n of o) {
          let o = this.getListByPool(n, t, -1, e, i);
          o.length > 0 && s.push(o)
        }
        return s
      }
      isTreasure(t) {
        return 13 == t.type && 1 == t.subtype
      }
      static getAttr(t = 0, e = 0) {
        return `${CfgUtil.getAttributeName(t)}+${TreasureCtrl.getValShow(t,e)}`
      }
      static getValShow(t = 0, e = 0) {
        return e = Math.round(100 * e) / 100, CfgUtil.getAttributeValDesc(t, e, !0)
      }
      canCompose(t, e, i = !1) {
        let s = this.xmlCfg.vector.compose;
        for (let o = 0; o < s.length; o++) {
          const n = s[o];
          if (t == Number(n.id)) {
            let r = e - ItemCtrl.inst.getItemNum(t);
            if (r <= 0) return !i;
            {
              let t = ++o;
              if (t > s.length - 1) return !1;
              let e = s[t];
              return this.canCompose(Number(e.id), r * Number(n.num))
            }
          }
        }
        return !1
      }
      getBestOne() {
        var t, e;
        let i = TreasureCtrl.inst.getAllListByQuality(this.Poolid_all, !1, !0);
        if (0 == this._has.size) return this.mini_id;
        for (const s of i)
          if (s.length > 0) return null == (e = null == (t = s[0]) ? void 0 : t.cfg) ? void 0 : e.item_id;
        return this.mini_id
      }
      isGift(t) {
        if (!this._allPoolItemId) {
          this._allPoolItemId = new Map, Cfgtreasure_draw.get().forEach((t => {
            this._allPoolItemId.set(t.item_id, !0)
          }))
        }
        return !this._allPoolItemId.get(t)
      }
      isZhetian(t) {
        return (null == t ? void 0 : t.type) == this.Poolid_zhetian
      }
      showTag(t, e) {
        t.visible = !StringUtil.isNullOrEmpty(e.tag), t.visible && (t.getChild("txt").text = ToolUtil.chinese(e.tag))
      }
      getSuitData(t) {
        return this._suitMap.get(t)
      }
    };
  TreasureCtrl._instance = null, TreasureCtrl.jumpFlag = !1, TreasureCtrl.composeFlag = !1, TreasureCtrl = __decorateClass([regClass20("xfWb59gcRBmjqNkQl7WrQA")], TreasureCtrl);
  var TreasureSuitData = class {
      get pid() {
        return this.cfg.pool
      }
      constructor(t) {
        this.cfg = t, this.attrList = [this.cfg.eff1, this.cfg.eff2, this.cfg.eff3, this.cfg.eff4]
      }
      getDes(t = 0) {
        let e = "";
        for (const i of this.attrList[t]) {
          let t = TreasureCtrl.getAttr(i[0], i[1]);
          e = e ? `${e},${t}` : t
        }
        return `${ToolUtil.chinese(2503)}${this.cfg.condition[t]}：${e}`
      }
      isLock(t = 0) {
        let e = this.cfg.condition[t],
          i = this.getList();
        for (const t of i) {
          if (!t.has) return !0;
          if (e > t.level) return !0
        }
        return !1
      }
      get des() {
        let t;
        for (const e of this.cfg.effect) {
          let i = TreasureCtrl.getAttr(e[0], e[1]);
          t = t ? `${t},${i}` : i
        }
        return `${ToolUtil.chinese(2504)}${t}`
      }
      get canget() {
        return !this.got && this.activate
      }
      get sortId() {
        return this.got ? 1 : this.activate ? 2 : 0
      }
      get activate() {
        let t = this.getList();
        for (const e of t)
          if (!e.has) return !1;
        return !0
      }
      get got() {
        return TreasureCtrl.inst.info.suitIds.includes(this.cfg.id)
      }
      getList() {
        let t = [];
        for (const e of this.cfg.treasure) t.push(TreasureCtrl.inst.getItem(e));
        return t
      }
    },
    TreasureEffect = class {
      constructor(t, e = ToolUtil.chinese(2507)) {
