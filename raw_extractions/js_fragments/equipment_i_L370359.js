// Fragment: equipment_i_L370359.js
// Lines: 370359-370459 of bundle-beautified.js
// Categories: Equipment
// Keywords: relic
// Hit lines: 370359

        let i = ConfigManager.inst.GetXmlConfig("relic"),
          s = parseInt(i.relic_sell_item),
          o = CfgitemBase.get(s);
        this.setTexture(this.imgIcon, o.icon, "ItemIcon");
        let n = ItemCtrl.inst.getItemNum(this.itemId);
        this.txtGold.text = StringUtil.numberFormat(parseInt(i.relic_sell_num) * n)
      }
      refreshAttr() {
        let t = Cfgrelic_level.get({
          itemid: this.itemId,
          level: this.level + 1
        });
        this.isMaxLv = null == t || 0 == t.length;
        let e = Cfgrelic_level.get({
            itemid: this.itemId,
            level: this.level
          })[0],
          i = e.attr[0][0],
          s = e.attr[0][1],
          o = Cfgattribute.get(i);
        this.txtStats.text = StringUtil.format("{0} [color=#e6a32f]+{1}[/color]", ToolUtil.chinese(o.c_attribute), CfgUtil.getAttributeValDesc(i, s)), this.txtStats2.text = this.isMaxLv ? "" : StringUtil.format(ToolUtil.chinese(2179), ToolUtil.chinese(o.c_attribute), CfgUtil.getAttributeValDesc(t[0].attr[0][0], t[0].attr[0][1]))
      }
      refreshCondition() {
        this.openData = RemainsCtrl.inst.getOpenDataByQuality(this.itemCfg.quality), this.txtOpenfuncDesc.text = this.openData.openTips
      }
      refreshLvUp() {
        let t = Cfgrelic_level.get({
            itemid: this.itemId,
            level: this.level
          })[0],
          e = t.cost_num;
        this.enough = this.curNum >= e, this.txtChengGongLv.text = this.hasItem ? StringUtil.format(ToolUtil.chinese(2180), t.show_rate / 100) : "", this.btnUpgrade.txtConsume.text = StringUtil.format("{0}/{1}", this.enough ? this.curNum : StringUtil.format("[color=#ff0000]{0}[/color]", this.curNum), e)
      }
      setRedPoint() {
        this.btnUpgrade.redPoint.setDotVisible(this.enough && this.openData.isOpen)
      }
      setState() {
        this.openData.isOpen ? this.hasItem ? this.isMaxLv ? this.btn.selectedIndex = this.curNum > 0 ? 0 : 2 : this.btn.selectedIndex = 1 : this.btn.selectedIndex = 3 : this.btn.selectedIndex = 4
      }
      showEffect(t) {
        t ? (this.success.visible = !0, this.success.t0.play()) : (this.lose.visible = !0, this.lose.t0.play())
      }
      onClickBtn() {
        this.isMaxLv || (this.enough ? (RemainsCtrl.inst.clickIndex = this.index, RemainsCtrl.inst.clickItem = this, RemainsCtrl.inst.quest_sendRelicUpLevel(this.itemId)) : (UIManager.inst.openMsg(ToolUtil.chinese(1428)), this._longPress = !1, this.dispatchEvent(MsgName.Sect_Refresh_Scroll, !0)))
      }
      onClickBtnSell() {
        RemainsCtrl.inst.clickIndex = this.index, RemainsCtrl.inst.clickItem = this, RemainsCtrl.inst.quest_sendRelicSell(this.itemId, this.curNum)
      }
    },
    UISectPetLose_eff = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "SectPet"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UISectPetLose_eff.UID = "ui://4xwmh5qh9ijylk", __decorateClass([UITransition], UISectPetLose_eff.prototype, "t0", 2);
  var SectPetLose_eff = class extends UISectPetLose_eff {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
    },
    UISectPetSuc_eff = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "SectPet"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UISectPetSuc_eff.UID = "ui://4xwmh5qh9ijylj", __decorateClass([UITransition], UISectPetSuc_eff.prototype, "t0", 2);
  var SectPetSuc_eff = class extends UISectPetSuc_eff {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
    },
    UISectPetTipList = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "SectPet"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UISectPetTipList.UID = "ui://4xwmh5qhji8ili", __decorateClass([UIProperty], UISectPetTipList.prototype, "imgQuality", 2), __decorateClass([UIProperty], UISectPetTipList.prototype, "txtName", 2), __decorateClass([UIProperty], UISectPetTipList.prototype, "txtPercent", 2);
  var SectPetTipList = class extends UISectPetTipList {
      constructor() {
        super(), this.nameArr = [ToolUtil.chinese(2181), ToolUtil.chinese(2182), ToolUtil.chinese(2183), ToolUtil.chinese(2184), ToolUtil.chinese(2185), ToolUtil.chinese(2186)], this.spriteArr = ["common_img_zb_hui", "common_img_zblv", "common_img_zblan", "common_img_zbzi", "common_img_zbcheng", "common_img_zbhong"]
      }
      onInit() {
        super.onInit()
      }
