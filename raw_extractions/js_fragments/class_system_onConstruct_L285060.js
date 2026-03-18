// Fragment: class_system_onConstruct_L285060.js
// Lines: 285060-285248 of bundle-beautified.js
// Categories: Class System
// Keywords: thunder
// Hit lines: 285064, 285133, 285148

      onConstruct() {
        this.openSubCom(this.iconInfo), this.btnKangXinAttr.onClick(this, this.onClickAll, [this.btnKangXinAttr]), this.onInit(), this.onEvent()
      }
    };
  UICopysTowerPassInfo.UID = "ui://ygho6j41n727v", __decorateClass([UIController], UICopysTowerPassInfo.prototype, "c1", 2), __decorateClass([UIProperty], UICopysTowerPassInfo.prototype, "iconInfo", 2), __decorateClass([UIProperty], UICopysTowerPassInfo.prototype, "txtPass", 2), __decorateClass([UIProperty], UICopysTowerPassInfo.prototype, "txtPower4", 2), __decorateClass([UIProperty], UICopysTowerPassInfo.prototype, "txt_tips", 2), __decorateClass([UIProperty], UICopysTowerPassInfo.prototype, "goEff", 2), __decorateClass([UIProperty], UICopysTowerPassInfo.prototype, "btnKangXinAttr", 2), __decorateClass([UIProperty], UICopysTowerPassInfo.prototype, "goEff3", 2), __decorateClass([UITransition], UICopysTowerPassInfo.prototype, "NewLayerAni", 2), __decorateClass([UITransition], UICopysTowerPassInfo.prototype, "thunder", 2);
  var CopysTowerPassInfo = class extends UICopysTowerPassInfo {
      constructor() {
        super(), this._isPlayAni = !1
      }
      onInit() {
        super.onInit(), this.model = CopysTowerModel.inst
      }
      onShow() {}
      onClickAll(t) {
        if (t == this.btnKangXinAttr) {
          if (null == this._passCfg) return;
          let t = this._passCfg.over_boss,
            e = this._passCfg.level;
          TipsMgr.inst.openKangXinAttr(t, e)
        }
      }
      setData(t) {
        if (!t) return;
        this._passCfg = t;
        let e = parseInt(t.level_desc);
        this.txtPass.text = StringUtil.format(ToolUtil.chinese(1408), CopysTowerCtrl.inst.getStepPassDesc(e)), this.iconInfo.visible = !0;
        let i = CfgUnitConfig.get(t.over_boss);
        if (this.iconInfo.boosIcon = i.half_spine, this.refreshPower(), this._passCfg) {
          let t = this._passCfg.over_boss,
            e = this._passCfg.level,
            i = TipsMgr.inst.getKangXinAttr(t, e);
          this.btnKangXinAttr.visible = !(null == i || 0 == i.length)
        }
      }
      refreshKillState(t, e = 5) {
        switch (this.c1.selectedIndex = t, t) {
          case 1: {
            const t = ConfigManager.inst.GetXmlConfig("tower");
            this.txt_tips.text = 5 == e ? ToolUtil.chinese(t.unlock_before_title) : ToolUtil.chinese(t.unlock_before_title2)
          }
          break;
          case 2: {
            const t = ConfigManager.inst.GetXmlConfig("tower");
            this.txt_tips.text = 5 == e ? ToolUtil.chinese(t.unlock_after_title) : ToolUtil.chinese(t.unlock_after_title2)
          }
          break;
          case 3:
            this.txt_tips.text = `${5==e?this.model.pass_need_time:StringUtil.format(ToolUtil.chinese(1409),this.model.pass_need_time2)}`
        }
      }
      refreshPower() {
        if (!this._passCfg) return;
        let t, e = TimerMgr.inst.getOpenDay(),
          i = Number(this._passCfg.rec_fightscore) || 0,
          s = this._passCfg.monster_buff;
        for (let i = 0; i < s.length; i++) {
          let o = s[i][0];
          if (e >= o) t = s[i];
          else if (e < o) break
        }
        if (t) {
          let e = CfgBuffLevelAttr.get(1e3 * t[1] + 1);
          i *= 1 + (e.value[0] + (t[2] - 1) * e.grow[0]) / 1e4
        }
        this.txtPower4.text = StringUtil.numberFormat(i), this.txtPower4.color = PowerModel.inst.curPower >= Number(this._passCfg.rec_fightscore) ? "#FFFBB5" : "#F76060"
      }
      clearData() {
        this.txtPass.text = "", this.iconInfo.visible = !1
      }
      isPlayThunder() {
        return this._isPlayAni
      }
      playThunderAni(t) {
        this._thunderEff || (this._thunderEff = this.addSubChild("copystower_thunder3", this.goEff3, null, !0)), this.goEff3.visible = !0, this._isPlayAni = !0, this.thunder.stop(), this._thunderEff.t0.stop(), this._thunderEff.t0.play(null, 1), this.thunder.play(null, 1), this.addTimerTask(1, 800, (() => {
          this.goEff3.visible = !1, this._isPlayAni = !1
        })), this.addTimerTask(1, 300, (() => {
          t && t()
        }))
      }
    },
    UICopysTowerPassTongTianInfo = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "CopysTower"
      }
      onConstruct() {
        this.openSubCom(this.iconInfo), this.onInit(), this.onEvent()
      }
    };
  UICopysTowerPassTongTianInfo.UID = "ui://ygho6j41rbrc8130", __decorateClass([UIController], UICopysTowerPassTongTianInfo.prototype, "c1", 2), __decorateClass([UIProperty], UICopysTowerPassTongTianInfo.prototype, "iconInfo", 2), __decorateClass([UIProperty], UICopysTowerPassTongTianInfo.prototype, "txtPass", 2), __decorateClass([UIProperty], UICopysTowerPassTongTianInfo.prototype, "txtPower4", 2), __decorateClass([UIProperty], UICopysTowerPassTongTianInfo.prototype, "txt_tips", 2), __decorateClass([UIProperty], UICopysTowerPassTongTianInfo.prototype, "goEff", 2), __decorateClass([UITransition], UICopysTowerPassTongTianInfo.prototype, "NewLayerAni", 2), __decorateClass([UITransition], UICopysTowerPassTongTianInfo.prototype, "thunder", 2);
  var CopysTowerPassTongTianInfo = class extends UICopysTowerPassTongTianInfo {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIcopystower_thunder3 = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "CopysTower"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIcopystower_thunder3.UID = "ui://ygho6j41vgjfb8135", __decorateClass([UITransition], UIcopystower_thunder3.prototype, "t0", 2);
  var copystower_thunder3 = class extends UIcopystower_thunder3 {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIcopytower_thunder = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "CopysTower"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIcopytower_thunder.UID = "ui://ygho6j419ngx812i", __decorateClass([UITransition], UIcopytower_thunder.prototype, "t0", 2);
  var copytower_thunder = class extends UIcopytower_thunder {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UItower_button_eff = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "CopysTower"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UItower_button_eff.UID = "ui://ygho6j41w66h812l", __decorateClass([UITransition], UItower_button_eff.prototype, "t0", 2);
  var tower_button_eff = class extends UItower_button_eff {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
      play() {
        this.stop(), this.t0.play(null, -1)
      }
      stop() {
        this.t0.stop()
      }
    },
    UIBtnDaDiGet = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "DaDi"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIBtnDaDiGet.UID = "ui://xom70xdnog4m1", __decorateClass([UIProperty], UIBtnDaDiGet.prototype, "txt_title", 2);
  var BtnDaDiGet = class extends UIBtnDaDiGet {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIDaDiFaXiangIcon = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "DaDiFaXiang"
      }
      onConstruct() {
        this.btnImgIcon.onClick(this, this.onClickAll, [this.btnImgIcon]), this.onInit(), this.onEvent()
      }
    };
