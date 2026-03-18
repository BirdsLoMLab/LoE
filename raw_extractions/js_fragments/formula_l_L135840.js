// Fragment: formula_l_L135840.js
// Lines: 135840-135960 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.min, Math.round
// Hit lines: 135841, 135860

        let l = `${a}/${this.xMax}${r}`;
        a = Math.min(a, this.xMax);
        let c = Math.floor(a / this.x) * this.z;
        c = this.getStarAdd(c);
        let h = TreasureCtrl.getAttr(this.y, c);
        return `${s}${ToolUtil.chinese(2505)}${l}${ToolUtil.chinese(2506)}${h}`
      }
      getDes4(t = !1, e = !0) {
        if (11 !== this.eff && 12 !== this.eff) return "";
        const i = this.getStarAdd(this.z),
          s = (t ? this.getStarAdd(this.z, this.starNext) : this.getStarAdd(this.zNext)) - i,
          o = this.formatValue(i, this.eff),
          n = e && s > 0 ? `${o}[color=#30772E](+${this.formatValue(s,this.eff)})[/color]` : o;
        if (11 === this.eff) {
          const t = CfgUtil.getAttributeName(this.y);
          return StringUtil.format(this.des, this.xMax, t, n)
        }
        return StringUtil.format(this.des, this.xMax, n)
      }
      formatValue(t, e) {
        return t = Math.round(100 * t) / 100, 12 === e ? StringUtil.format("{0}%", t / 100) : TreasureCtrl.getValShow(this.y, t)
      }
      getDesShow() {
        return 1 == this.type ? `${this.t1}: +${this.t2}` : 2 == this.type ? this.getDes2(!1, !1) : 3 == this.type ? this.getDes(!1, !1) : 4 == this.type ? this.getDes4(!1, !1) : ""
      }
      get cnt() {
        switch (this.eff) {
          case 5:
          case 6:
          case 8:
            let t = TreasureCtrl.inst.EffConter.get(this.eff);
            return t || 0 == t ? t : (TreasureCtrl.inst.ReqEffCounter(this.eff), 0);
          case 1:
            return StageCtrl.inst.stageCompleted;
          case 2:
            return EquipCtrl.inst.getSlotTotalLv();
          case 3:
            return LeadLevelModel.inst.getRoleLevel();
          case 4:
            return SkillCtrl.inst.getTotalSlotLv();
          case 9:
            return CopysTowerCtrl.inst.getCurLevel() - 1;
          case 10:
            return DungeonModel.inst.getCurDif() - 1
        }
        return 0
      }
      setDat(t, e, i = 0) {
        this.k = Number(t), this.v = Number(e), this.lvValNext = i
      }
    },
    TreasureData2 = class {
      constructor(t) {
        this.cfg = t, this.id = t.id, this.cfgitem = CfgitemBase.get(t.item_id), this.cfgpiece = CfgitemBase.get(t.piece_id)
      }
      get redPointKey() {
        return this._rpKey || (this._rpKey = RedPointMgr.inst.combineKey(348, this.cfg.id)), this._rpKey
      }
      getEffect() {
        var t;
        let e = [],
          i = this.cfglevel().effect.split(";"),
          s = null == (t = this.cfglevel(1)) ? void 0 : t.effect.split(";"),
          o = this.cfgstar(),
          n = this.cfgstar(1);
        for (let t = 0; t < i.length; t++) {
          let r = new TreasureEffect(i[t], ToolUtil.chinese(this.cfg.des));
          if (s) {
            let e = new TreasureEffect(s[t]);
            r.lvValNext = e.v, 1 != r.type && (r.zNext = e.z, r.xMaxNext = e.xMax)
          }
          r.starEffect = o.effect, n && (r.starNext = n.effect), e.push(r)
        }
        return e
      }
      exists(t) {
        let e = this.cfglevel().effect.split(";"),
          i = !1;
        for (let s = 0; s < e.length; s++) {
          let o = e[s].split("-");
          if (o.length > 3) {
            if (Number(o[3]) == t) {
              i = !0;
              break
            }
          } else if (Number(o[0]) == t) {
            i = !0;
            break
          }
        }
        return i
      }
      cfglevel(t = 0) {
        return Cfgtreasure_level.get(100 * this.id + this.level + t, 0 != t)
      }
      get level() {
        return this.data ? this.data.level : 0
      }
      cfgstar(t = 0) {
        return Cfgtreasure_star.get(100 * this.id + this.star + t, 0 != t)
      }
      get isLvFull() {
        return null == this.cfglevel(1)
      }
      get isStarFull() {
        return null == this.cfgstar(1)
      }
      get star() {
        return this.data ? this.data.star : 0
      }
      get canMake() {
        if (this.has) return !1;
        return ItemCtrl.inst.getItemNum(this.cfg.piece_id) >= this.cfg.num
      }
      get UpStarCost() {
        let t = [],
          e = this.cfgstar().cost;
        for (const i of e) {
          let e = new CostItemData(i[0], i[1]);
          t.push(e)
        }
