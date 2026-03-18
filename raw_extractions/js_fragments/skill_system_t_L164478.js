// Fragment: skill_system_t_L164478.js
// Lines: 164478-164578 of bundle-beautified.js
// Categories: Skill System
// Keywords: skill_id
// Hit lines: 164478

                const t = CfgskillDecData.get(e.skill_id, !0);
                this.setTexture(this.skillIcon.imgIcon.imgIcon, null == t ? void 0 : t.icon, "ItemIcon"), this.skillIcon.txt_level.text = StringUtil.format("Lv.{0}", e.level)
              }
              break
            } this.refreshMosterModel(this.cfgPet.monster_id)
        }
        this.txtName.text = YiShouYCCtrl.inst.getPetName(this.pet, this.cfgPet), this.refresh();
        let e = ChatModel.inst.curZonelist;
        this.btnYiJie.visible = e && e.length > 0, this.bgPanel.setSize(202, this.btnYiJie.visible ? 302 : 230)
      }
      posInfoChange() {
        this._haveLevelUPAni = !0, this.updateView(), this.FX_star.play((() => {
          this._haveLevelUPAni = !1
        }))
      }
      petInfoChange() {
        this.updateView()
      }
      lockInfoChange() {
        this.pet = YiShouYCCtrl.inst.getPetByUid(this.pet.uid), this.unlock.visible = !this.pet.isLock, this.lock.visible = this.pet.isLock
      }
      onEntryClick(t) {
        var e;
        let i = 0;
        YiShouYCCtrl.inst.isOnBattle(this.pet.uid) && (i = null == (e = this.cfgPet) ? void 0 : e.element), this.showTips(this.btnSkill, ToolUtil.chinese(t.name), ToolUtil.chinese(t.desc), 1, i)
      }
      refresh() {
        this.pet = YiShouYCCtrl.inst.getPetByUid(this.pet.uid), this.unlock.visible = !this.pet.isLock, this.lock.visible = this.pet.isLock, YiShouYCCtrl.inst.SortEntry(this.pet), this.listEntry.numItems = this.pet.entry.length, this.nextLevel = null;
        const t = Cfgpet_data.get(this.pet.cfgid);
        if (t) {
          let e = YiShouYCCtrl.inst.getBaseDaiFactor(this.pet.generation),
            i = [];
          for (let s of t.base_attr) {
            let t = [];
            t.push(s[0]), t.push(s[1] * e), i.push(t)
          }
          this.attr = i, this.nextAttr = i, this.setImage(this.img_yuansu, "gf_img_yuansu" + t.element, "Common");
          let s = YiShouPeiYuModel.inst.getQualityCfg(t.quality);
          this.setImage(this.imgQuality, s.ratebg, "YiShouDaDangTips"), this.txtQuality.text = s.name, this.setImage(this.img_pinzhi_kuang, "ys_img_pz_kuang_" + t.quality, "Common")
        }
        if (this.txtHybridCount.text = YiShouPeiYuModel.inst.getHybridDesc(this.pet, LoginCtrl.inst.charid), this.posInfo = YiShouYCCtrl.inst.getPosInfoByUid(this.pet.uid), this.btnShangZhen.text = this.posInfo ? ToolUtil.chinese(2635) : ToolUtil.chinese(1688), this.posInfo) {
          this.txtAtt.text = this.posInfo.level.toString(), this.txtAttUp.text = (this.posInfo.level + 1).toString(), this.c1.selectedIndex = 0, t && this.updateAttrData(t, this.posInfo), this.btnUpgreat.visible = this.posInfo.level != this.maxLevel, this.posInfo.level == this.maxLevel && this.btnShangZhen.setXY(260, 1211);
          let e = YiShouYCCtrl.inst.checkPetCanUpgrade(this.pet, this.posInfo);
          this.redPoint.setDotVisible(e)
        } else this.txtAtt.text = "", this.txtAttUp.text = "", this.c1.selectedIndex = 2;
        this.attrList.numItems = this.attr.length, this.txtName.text = YiShouYCCtrl.inst.getPetName(this.pet, this.cfgPet), this.nextLevel ? this.updateUpgreateBtn() : (this.txtAtt.text = "", this.txtAttUp.text = ""), this.updateFollow()
      }
      updateAttrData(t, e) {
        let i = Cfgpet_pos_level.get();
        for (let s of i) s.level > this.maxLevel && (this.maxLevel = s.level), s.pet_id == t.id && s.level == e.level && (this.attr = this.processArr(this.attr, s.level_attr, this.pet.growthRate));
        for (let s of i) s.pet_id == t.id && s.level == e.level + 1 && (this.nextAttr = this.processArr(this.nextAttr, s.level_attr, this.pet.growthRate));
        for (let s of i)
          if (s.pet_id == t.id && s.level == e.level) {
            this.nextLevel = s;
            break
          }
      }
      updateFollow() {
        let t = 0,
          e = YiShouYCCtrl.inst.getPosInfoByUid(this.pet.uid);
        YiShouYCModel.inst.followPetUid == this.pet.uid ? t = 2 : e && (t = 1), this.btnFollow.c1.selectedIndex = t
      }
      updateUpgreateBtn() {
        var t, e;
        if ((null == (e = null == (t = this.nextLevel) ? void 0 : t.level_cost) ? void 0 : e.length) > 0) {
          let t = Number(this.nextLevel.level_cost[0][0]);
          var i = ItemCtrl.inst.getItemNum(t);
          let e = this.nextLevel.level_cost[0][1];
          this.btnUpgreat.txtConsume.text = e > i ? StringUtil.format(" [color=#ff0000]{0}[/color]/{1}", i, this.nextLevel.level_cost[0][1]) : StringUtil.format("{0}/{1}", i, this.nextLevel.level_cost[0][1]), this.btnUpgreat.grayed = e > i;
          const s = CfgitemBase.get(t);
          s && this.setTexture(this.btnUpgreat.imgIcon, s.icon, "ItemIcon")
        }
      }
      processArr(t, e, i) {
        let s = new Map;
        for (const e of t) {
          let t = e[0],
            i = e[1];
          s.set(t, i)
        }
        for (const t of e) {
          let e = t[0];
          const o = t[1] * i;
          s.has(e) ? s.set(e, o + s.get(e)) : s.set(e, o)
        }
        let o = [];
        for (let [t, e] of s) o.push([t, Math.floor(e)]);
        return o
      }
      _onEntryItemRender(t, e) {
        e.setData(this.pet.entry[t], this.pet)
      }
      _onAttrItemRender(t, e) {
        var i;
        let s = null != this.posInfo;
        this.posInfo && (null == (i = this.posInfo) ? void 0 : i.level) == this.maxLevel && (s = !1), e.setData(this.attr[t], this.nextAttr[t], s, this._haveLevelUPAni)
      }
      refreshMosterModel(t) {
        let e = CfgUnitConfig.get(t),
          i = StringUtil.format("resourcesLib/Character/{0}/{1}_UI.lh", e.Perfab, e.Perfab);
        this.modelPath != i && (this.modelPath = i, this.model && UIModelMgr.inst.recycle(this.model), this.model = this.LoadUIModel(this.modelLoader, i, (() => {
