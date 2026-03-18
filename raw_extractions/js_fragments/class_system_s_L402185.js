// Fragment: class_system_s_L402185.js
// Lines: 402185-402290 of bundle-beautified.js
// Categories: Class System, Skill System
// Keywords: element_type, skill_id
// Hit lines: 402185, 402190

          let s = YiShouYCModel.inst.ElementMap.get(t.element_type);
          s || (s = 0), s > t.active_num && (s = t.active_num), this.line.visible = e;
          let o = ToolUtil.chinese(t.desc),
            n = StringUtil.format(o, t.value1, t.value2, t.value3, t.value4, t.value5);
          for (let e of i)
            if (e.skill_id == t.skill_id) {
              let i = t.value1;
              "" != e.value1 && (i = this.combineNewValue(t.value1, e.value1));
              let s = t.value2;
              "" != e.value2 && (s = this.combineNewValue(t.value2, e.value2));
              let o = t.value3;
              "" != e.value3 && (o = this.combineNewValue(t.value3, e.value3));
              let r = t.value4;
              "" != e.value4 && (r = this.combineNewValue(t.value4, e.value4));
              let a = t.value5;
              "" != e.value5 && (a = this.combineNewValue(t.value5, e.value5));
              let l = ToolUtil.chinese(t.desc);
              n = StringUtil.format(l, i, s, o, r, a);
              break
            } let r = ToolUtil.chinese(t.name);
          this.txtDesc.text = StringUtil.format("{0}({1}/{2})：{3}", r, s, t.active_num, n), this.titleGroup.visible = !1, this.itemGroup.visible = !0, this.height = this.txtDesc.actualHeight + 35;
          let a = s >= t.active_num ? 0 : 1;
          this.c1.selectedIndex = a
        }
      }
      combineNewValue(t, e) {
        const i = /^(\d+(\.\d+)?)%$/,
          s = t.match(i),
          o = e.match(i);
        if (s && o) {
          const e = parseFloat(s[1]),
            i = parseFloat(o[1]);
          if (!isNaN(e) && !isNaN(i)) {
            let s = parseFloat((i - e).toFixed(4));
            if (Math.abs(s) > 1e-4) {
              let e = this.formatPercentage(s, s.toString() + "%");
              return s > 0 ? t + StringUtil.format("[color=#30772E](+{0})[/color]", e) : t + StringUtil.format("[color=#30772E]({0})[/color]", e)
            }
          }
        } else {
          const i = parseFloat(t),
            s = parseFloat(e);
          if (!isNaN(i) && !isNaN(s)) {
            let e = parseFloat((s - i).toFixed(4));
            if (Math.abs(e) > 1e-4) return t + StringUtil.format("[color=#30772E](+{0})[/color]", e.toString())
          }
        }
        return t
      }
      formatPercentage(t, e) {
        const i = e.match(/^\d+%$/),
          s = e.match(/^(\d+\.0+)%$/);
        return i || s ? `${t.toFixed(1)}%` : `${t}%`
      }
      onClickAll(t) {}
    },
    UIYiShouYCJbTipsItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YiShouYCElement"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIYiShouYCJbTipsItem.UID = "ui://7utv1dhaf5klf", __decorateClass([UIProperty], UIYiShouYCJbTipsItem.prototype, "txtDesc", 2);
  var YiShouYCJbTipsItem = class extends UIYiShouYCJbTipsItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        let e = YiShouYCModel.inst.ElementMap.get(t.e);
        e || (e = 0);
        const i = t.skill;
        if (!i) return;
        e > i.active_num && (e = i.active_num);
        const s = StringUtil.format(ToolUtil.chinese(null == i ? void 0 : i.black_desc), i.value1, i.value2, i.value3, i.value4, i.value5),
          o = StringUtil.format("{0}({1}/{2})：{3}", ToolUtil.chinese(i.name), e, i.active_num, s);
        e >= i.active_num ? this.txtDesc.text = o : this.txtDesc.text = StringUtil.format("[color=#90989d]{0}[/color]", o), this.height = this.txtDesc.actualHeight + 30
      }
      onClickAll(t) {}
    },
    import_proto476 = __toESM(require_proto()),
    UIYiShouYCHatchEgg = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "YiShouYCHatch"
      }
      onConstruct() {
        this.openSubCom(this.yishou_level), this.btnEgg.onClick(this, this.onClickAll, [this.btnEgg]), this.openSubCom(this.rd), this.onInit(), this.onEvent()
      }
    };
  UIYiShouYCHatchEgg.UID = "ui://h4pjnvonj07t9", __decorateClass([UIController], UIYiShouYCHatchEgg.prototype, "c2", 2), __decorateClass([UIController], UIYiShouYCHatchEgg.prototype, "c1", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "imgFrame", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "imgIcon", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "yishou_level", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "imgMask", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "imgMask02", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "goLock", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "goSelect", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "btnEgg", 2), __decorateClass([UIProperty], UIYiShouYCHatchEgg.prototype, "rd", 2);
  var YiShouYCHatchEgg = class extends UIYiShouYCHatchEgg {
      constructor() {
        super(), this.isOpen = !1, this.open_fuc = 0
      }
      onInit() {
        super.onInit()
      }
      onEvent() {
        this.addEvent(MsgName.YiShou_HatchEggClick, this.onEffClick)
      }
      onShow() {}
