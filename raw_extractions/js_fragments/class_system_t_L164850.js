// Fragment: class_system_t_L164850.js
// Lines: 164850-164972 of bundle-beautified.js
// Categories: Class System
// Keywords: element_type
// Hit lines: 164850, 164872

            if (this.yiShouSkill.setData(!1), this.skillArr1 = YiShouYCCtrl.inst.getSkillArr(n, 2, YiShouYCModel.inst.followElementLevel), n[0] != this.skillArr1[0].element_type && this.skillArr1.reverse(), c && (this.skillArr2 = YiShouYCCtrl.inst.getSkillArr(n, 2, YiShouYCModel.inst.followElementLevel + 1), n[0] != this.skillArr2[0].element_type && this.skillArr2.reverse()), a) {
              let t = this.getNextAllSkillName(n, 2);
              "" != t && (this.levelTips.visible = !0, this.levelTips.text = t)
            }
            this.txtName.text = StringUtil.format("{0} {1}", ToolUtil.chinese(null == (e = this.skillArr1[0]) ? void 0 : e.name), ToolUtil.chinese(null == (i = this.skillArr1[1]) ? void 0 : i.name)), this.updateArr(n, YiShouYCModel.inst.followElementLevel, 2)
        }
        YiShouYCModel.inst.followElementLevel == YiShouYCModel.inst.elementMaxLevel ? this.list_stats03.numItems != this.topSkillArr.length ? this.list_stats03.numItems = this.topSkillArr.length : this.list_stats03.refreshVirtualList() : this.listStats.numItems != this.twoSkillArr.length ? this.listStats.numItems = this.twoSkillArr.length : this.listStats.refreshVirtualList()
      }
      getNextAllSkillName(t, e) {
        let i = "",
          s = Cfgelement_level.get(YiShouYCModel.inst.followElementLevel, !0),
          o = Cfgelement_level.get(YiShouYCModel.inst.followElementLevel + 1, !0),
          n = [];
        if (o && s) {
          let t = Math.min(s.unlock_skill.length, o.unlock_skill.length);
          for (let e = 0; e < t; e++) s.unlock_skill[e] != o.unlock_skill[e] && n.push(o.unlock_skill[e])
        }
        let r = [];
        for (let t of n) {
          let e = Cfgpet_skill.get(t, !0);
          e && r.push(e)
        }
        t.length > 0 && r.length > 0 && t[0] != r[0].element_type && r.reverse();
        for (let t = 0; t < r.length; t++) i += ToolUtil.chinese(r[t].name), r.length - 1 != t && (i += "/");
        return "" != i && (i = StringUtil.format(ToolUtil.chinese(2639), i)), i
      }
      updateArr(t, e, i) {
        this.twoSkillArr.push({
          index: 1,
          level: e
        });
        let s = YiShouYCCtrl.inst.getSkillArr(t, 2, e);
        if (this.twoSkillArr = this.twoSkillArr.concat(s), 4 == i) {
          let i = YiShouYCCtrl.inst.getSkillArr(t, 4, e);
          this.twoSkillArr = this.twoSkillArr.concat(i)
        }
        this.end1Index = this.twoSkillArr.length - 1
      }
      canUpgrade(t) {
        if (t) {
          for (let e of t.condition) {
            const t = e[0],
              i = e[1];
            if (1 == t)
              for (let t of YiShouYCModel.inst.posList)
                if (t.level < i || !t.uid) return !1
          }
          return !0
        }
        return !1
      }
      updateTipSkill() {
        this.elementTipArr = [];
        let t = ConfigManager.inst.GetXmlConfig("pet"),
          e = XmlUtil.getMap(t, "element", "num");
        if (e)
          for (let t of e) {
            let e = parseInt(t.num),
              i = {
                isTitle: !0,
                e: e
              };
            this.elementTipArr.push(i);
            let s = YiShouYCCtrl.inst.getElementSkillArr([e], YiShouYCModel.inst.followElementLevel);
            for (let t of s) {
              let i = {
                isTitle: !1,
                e: e,
                skill: t
              };
              this.elementTipArr.push(i)
            }
          }
      }
      onClickAll(t) {
        if (t == this.btn_upgread)
          if (this.btn_upgread.grayed) {
            let t = ToolUtil.chinese(1428),
              i = Cfgelement_level.get(YiShouYCModel.inst.followElementLevel, !0),
              s = this.canUpgrade(i);
            if (i)
              for (let e of i.condition) {
                const i = e[0],
                  o = e[1];
                if (1 == i && !s) return t = StringUtil.format(ToolUtil.chinese(2640), o), void UIManager.inst.openMsg(t)
              }
            let o = Number(i.consume[0][0]);
            var e = ItemCtrl.inst.getItemNum(o);
            if (i.consume[0][1] > e) return UIManager.inst.openMsg(ToolUtil.chinese(1428)), void ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(o))
          } else YiShouYCCtrl.inst.ReqPetElementUp();
        else t == this.btnElementTip ? (this.updateTipSkill(), this.lastSelectedIndex = this.c1.selectedIndex, this.c1.selectedIndex = 3, this.listTip.numItems == this.elementTipArr.length ? this.listTip.refreshVirtualList() : this.listTip.numItems = this.elementTipArr.length, this.listTip.scrollPane.scrollTop()) : t == this.btnTipTouch && (this.c1.selectedIndex = this.lastSelectedIndex)
      }
    },
    YiShouYCElementComView = class extends UIYiShouYCElementComView {
      constructor() {
        super(), this.selIndex = -1, this.maskType = 1, this.layer = "Pop"
      }
      onInit() {
        super.onInit(), this.subViewUID = [YiShouYCElementView.UID, YiShouYCElementJXView.UID], this.toolBar.setData([{
          title: ToolUtil.chinese(4456),
          redKey: 573
        }, {
          title: ToolUtil.chinese(4457),
          redKey: 574
        }], (t => {
          this.setClickTab(t)
        }))
      }
      setClickTab(t) {
        let e = this.subViewUID[this.selIndex];
        e && this.closeSubView(e), this.selIndex = t;
        let i = this.subViewUID[t];
        this.openSubView(i, this.tabContainer)
      }
      onShow() {}
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
    },
    _UIYiShouYCSalvageView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "YiShouYCSalvage", this.name = "YiShouYCSalvageView"
      }
