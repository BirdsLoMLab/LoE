// Fragment: skill_system_t_L414575.js
// Lines: 414575-414685 of bundle-beautified.js
// Categories: Skill System
// Keywords: skill_id
// Hit lines: 414585

          let t = RoleModel.inst.getCharacterMainData(),
            e = Number(t.attr[8]),
            i = Number(t.attr[NumericType.PAtk]),
            s = Number(t.attr[59]);
          0 != e && (n = (i - s) / e)
        }
        return "" + Math.ceil(s * n)
      }
      get DesList() {
        return this._desList || (this._desList = Cfgskill_desData.get({
          skill_id: this.cfg.id
        })), this._desList
      }
      get cfgStar() {
        return CfgskillStarData.get(100 * this.cfg.id + (this.data ? this.data.star : 1))
      }
      get nextStar() {
        return CfgskillStarData.get(100 * this.cfg.id + this.data.star + 1, !0)
      }
      isFullLv() {
        let t = this.getSlot();
        return t && t.isLvFull()
      }
      isFullStar() {
        return null == this.nextStar
      }
      canUpStar() {
        return !!this.data && t.canUpStar(this.cfg.id, this.data.star)
      }
      UpStarInfo() {
        return t.UpStarInfo(this.cfg.id, this.data.star)
      }
      UpStarLevelInfo() {
        return t.UpStarLevelInfo(this.cfg.id, this.data.star)
      }
      getMaxUpStar() {
        let e = !0,
          i = 0;
        for (; e;) e = t.canUpStar(this.cfg.id, this.data.star + i), e && (i += 1);
        return i
      }
      static canUpStar(e, i) {
        let s = t.UpStarInfo(e, i)[0],
          o = LeadLevelModel.inst.getRoleLevel(),
          n = this.UpStarLevelInfo(e, i);
        return s && (-1 != n && n <= o)
      }
      static UpStarInfo(t, e) {
        let i = [],
          s = CfgskillStarData.get(100 * t + e, !0);
        if (!CfgskillStarData.get(100 * t + e + 1, !0) || !s) return [!1, i];
        let o = !0;
        return s.consume.forEach((t => {
          let e = new CostItemData(t[0], t[1]);
          e.enough || (o = !1), i.push(e)
        })), [o, i]
      }
      static UpStarLevelInfo(t, e) {
        let i = CfgskillStarData.get(100 * t + e + 1, !0);
        return i ? i.level_lock : -1
      }
      canInherit() {
        return null != this.getInherit()
      }
      getInherit() {
        let t, e = !1;
        return SkillCtrl.Quality.forEach((i => {
          if (e) {
            let e = CfgskillCareerData.get(10 * this.cfg.id + i);
            ItemCtrl.inst.getItemNum(e.need_item) > 0 && (t = e)
          }
          i == this.quality && (e = !0)
        })), t
      }
      get quality() {
        return this.data ? this.data.quality : this._quality ? this._quality : 4
      }
      set quality(t) {
        this._quality = t
      }
      get DesStarList() {
        let t = this.cfgStar.quality;
        this.cfgStar.star2 >= SkillStarData2.MaxStar && !this.isFullStar() && (t += 1), this._desStarList = CfgskillStarData.get({
          skillid: this.cfg.id,
          quality: t
        });
        let e = [];
        return this._desStarList.forEach((t => {
          t.star > 0 && e.push(new SkillStarData2(this, t))
        })), e
      }
    },
    _SkillStarData = class t {
      constructor(e, i, s = !1) {
        this.result = !1, this.init(), this.result = s, this.star = i.star2, this.quality = i.quality, this.data = e, s ? (this.cfg2 = i, this.cfg1 = t._cacheMap.get(e.cfg.id, i.quality - 1, i.star2), this.curCfg = CfgskillStarData.get(100 * e.cfg.id + i.star - 1, !0)) : (this.cfg1 = i, e.data.star < i.star && (this.cfg1 = t._cacheMap.get(e.cfg.id, i.quality - 1, i.star2), this.cfg2 = i, this.curCfg = CfgskillStarData.get(100 * e.cfg.id + i.star - 1, !0)));
        let o = i.attr[0];
        this.attr = CfgUtil.getAttributeName(o[0]);
        let n = e.data.star + 1;
        n < i.star ? this.state = 2 : n == i.star ? this.state = 1 : this.state = 0
      }
      init() {
        if (t._cacheMap) return;
        t._cacheMap = new TripleKeyMap, CfgskillStarData.get().forEach((e => {
          t._cacheMap.set(e.skillid, e.quality, e.star2, e)
        }))
      }
      getAttr1(t = 1) {
        let e = 1 == t ? this.cfg1 : this.cfg2;
        if (!e) return "0";
        let i = e.attr[0];
        return CfgUtil.getAttributeValDesc(i[0], i[1], !0)
