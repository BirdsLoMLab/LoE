// Fragment: formula_for_L252659.js
// Lines: 252659-252762 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.round
// Hit lines: 252662

          for (const t of o) {
            s += CfgUtil.getAttrScore(t.attrId, t.baseVal, LeadLevelModel.inst.getRoleRealm())
          }
        return Math.round(s)
      }
      _getEquipEntityScore(t) {
        let e = 0;
        if (t)
          for (const i in t)
            if (Object.prototype.hasOwnProperty.call(t, i)) {
              const s = t[i];
              for (const t of s.entry) {
                let i = t.id;
                e += Cfgequip_entry.get(i).entry_score
              }
            } return e
      }
      _resetQuality() {
        this._equipQualityCfgList = null, this._equipQualityIdList = null
      }
      getQualityXmfCfg(t) {
        let e = this.getQualityXmfCfgList();
        if (e)
          for (const i of e)
            if (i.id == t.toString()) return i
      }
      getAllQualityList() {
        if (this._equipQualityIdList) return this._equipQualityIdList;
        let t = this.getQualityXmfCfgList();
        this._equipQualityIdList = new Array;
        for (const e of t) {
          const t = parseInt(e.id);
          this._equipQualityIdList.push(t)
        }
        return this._equipQualityIdList.sort(), this._equipQualityIdList
      }
      getQualityXmfCfgList() {
        if (!this._equipQualityCfgList) {
          let t = ConfigManager.inst.GetXmlConfig("itemdefine").map;
          if (Array.isArray(t))
            for (const e of t)
              if ("equip_quality" == e.var) {
                this._equipQualityCfgList = e.equip_quality;
                break
              }
        }
        return this._equipQualityCfgList
      }
      getQualityNumForSlot(t) {
        const e = this.getAllEquipSlotList();
        let i = 0;
        for (const s of e)
          if (this.isWearForSlot(s)) {
            BagModel.inst.getItemByThisId(s.posData.uidStr).itemCfg.quality >= t && i++
          } return i
      }
      createEquipSlotList(t) {
        let e, i = new Array,
          s = ConfigManager.inst.GetXmlConfig("itemdefine").map;
        if (Array.isArray(s))
          for (const t of s) "equip_slot" == t.var && (e = t.equip_slot);
        if (e)
          for (const s of e) {
            let e = null;
            t && (e = t.get(s.pos));
            let o = {
              pos: parseInt(s.pos),
              posData: e,
              xmlCfg: s
            };
            i.push(o)
          }
        return i
      }
      createExtendSlotList() {
        let t, e = new Array,
          i = ConfigManager.inst.GetXmlConfig("itemdefine").map;
        for (const e of i) "extend_slot" == e.var && (t = e.extend_slot);
        for (const i of t) {
          let t = null,
            s = {
              pos: parseInt(i.pos),
              posData: t,
              xmlCfg: i
            };
          e.push(s)
        }
        return e
      }
      _resetSlotList() {
        this._equipSlotList = this.createEquipSlotList(), this._extendSlotList = this.createExtendSlotList()
      }
      getAllEquipSlotList() {
        return this._equipSlotList
      }
      getAllExtendSlotList() {
        return this._extendSlotList
      }
      getEquipSlotDataByPos(t) {
        return this._equipSlotList.filter((e => e.pos == t))[0]
      }
      getExtendSlotDataByPos(t) {
        return this._extendSlotList.filter((e => e.pos == t))[0]
      }
