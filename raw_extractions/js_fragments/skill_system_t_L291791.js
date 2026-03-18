// Fragment: skill_system_t_L291791.js
// Lines: 291791-291891 of bundle-beautified.js
// Categories: Skill System
// Keywords: skill_id
// Hit lines: 291791

            const t = o.skill_id,
              e = (SkillHelper.getSkillConfig(t), CfgskillDecData.get(BattleHelper.getSkillId(t)));
            if (e) {
              SkillHelper.getSkillLevel(t);
              this.txtXingJi1.txtXingJi1.text = SkillData.getSkillDesByCfg(t, e)
            }
          }
        }
      }
      onClickAll(t) {
        if (t == this.btnClose) this.close();
        else if (t == this.btn_use) {
          if (1 == this.c4.selectedIndex) return void UIManager.inst.openMsg(ToolUtil.chinese(11507));
          let t = HeroModel.inst.otherPlanDic.get(this._pid),
            e = {
              planId: Number(t.pid),
              planName: t.getName()
            },
            i = Array.from(t.getPlan());
          for (let t = 0; t < i.length; t++) {
            t + 1 == this._type && (i[t] = this._selectId)
          }
          e.slotValue = {};
          for (let t = 0; t < i.length; t++) e.slotValue[t + 1] = i[t];
          HeroCtrl.inst.ReqSetGeneralPlan(e, !0), this.close()
        }
      }
    },
    UIBtnDaPeiQieHuanStage = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "DaPeiQieHuan"
      }
      onConstruct() {
        this.btn_toggle.onClick(this, this.onClickAll, [this.btn_toggle]), this.btnSelect.onClick(this, this.onClickAll, [this.btnSelect]), this.onInit(), this.onEvent()
      }
    };
  UIBtnDaPeiQieHuanStage.UID = "ui://bhj0ez5de42b18", __decorateClass([UIController], UIBtnDaPeiQieHuanStage.prototype, "c1", 2), __decorateClass([UIProperty], UIBtnDaPeiQieHuanStage.prototype, "titleTxt", 2), __decorateClass([UIProperty], UIBtnDaPeiQieHuanStage.prototype, "btn_toggle", 2), __decorateClass([UIProperty], UIBtnDaPeiQieHuanStage.prototype, "btnSelect", 2);
  var BtnDaPeiQieHuanStage = class extends UIBtnDaPeiQieHuanStage {
      constructor() {
        super(), this.pid = 0
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t, e) {
        this.pid = t + 1, this.dpView = e, this.titleTxt.text = HeroModel.inst.otherPlanDic.get(this.pid).getName(), this.c1.selectedIndex = this.pid == this.dpView.pid ? 1 : 0
      }
      onClickAll(t) {
        t == this.btn_toggle || t == this.btnSelect && (this.dpView.qiehuan_item.visible = !1, this.dpView.btnMask.visible = !1, this.dpView.refreshView(this.pid), this.dpView.usePlan())
      }
    },
    UIBtnDaPeiSkillAdd = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "DaPeiQieHuan"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIBtnDaPeiSkillAdd.UID = "ui://bhj0ez5dddyrk", __decorateClass([UIProperty], UIBtnDaPeiSkillAdd.prototype, "goEmpty", 2), __decorateClass([UIProperty], UIBtnDaPeiSkillAdd.prototype, "txtLock", 2), __decorateClass([UIProperty], UIBtnDaPeiSkillAdd.prototype, "goLoc", 2);
  var BtnDaPeiSkillAdd = class extends UIBtnDaPeiSkillAdd {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIBtnTuiJianDaPei = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "DaPeiQieHuan"
      }
      onConstruct() {
        this.openSubCom(this.goRed), this.onInit(), this.onEvent()
      }
    };
  UIBtnTuiJianDaPei.UID = "ui://bhj0ez5dlfbp2b", __decorateClass([UIProperty], UIBtnTuiJianDaPei.prototype, "txt_title", 2), __decorateClass([UIProperty], UIBtnTuiJianDaPei.prototype, "goRed", 2);
  var BtnTuiJianDaPei = class extends UIBtnTuiJianDaPei {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIDaPeiAllList = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "DaPeiQieHuan"
      }
      onConstruct() {
        this.openSubCom(this.skill_item), this.openSubCom(this.SkillItemActive1), this.openSubCom(this.SkillItemActive2), this.openSubCom(this.SkillItemActive3), this.openSubCom(this.SkillItemPassive1), this.openSubCom(this.SkillItemPassive2), this.openSubCom(this.SkillItemPassive3), this.openSubCom(this.SkillItemPassive4), this.openSubCom(this.SkillItemPassive5), this.btn_TuiJianDaPei.addClick(this, this.onClickAll, [this.btn_TuiJianDaPei]), this.openSubCom(this.btn_TuiJianDaPei), this.btn_TuiJianDaPei02.addClick(this, this.onClickAll, [this.btn_TuiJianDaPei02]), this.openSubCom(this.btn_TuiJianDaPei02), this.onInit(), this.onEvent()
      }
    };
  UIDaPeiAllList.UID = "ui://bhj0ez5de42b1c", __decorateClass([UIProperty], UIDaPeiAllList.prototype, "txt_title", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "skill_item", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "SkillItemActive1", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "SkillItemActive2", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "SkillItemActive3", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "SkillItemPassive1", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "SkillItemPassive2", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "SkillItemPassive3", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "SkillItemPassive4", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "SkillItemPassive5", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "btn_TuiJianDaPei", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "skill", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "img_di02", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "txt_title02", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "list_yishou", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "img_di03", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "txt_title03", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "list_hero", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "btn_TuiJianDaPei02", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "hero", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "img_di04", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "txt_title04", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "more_item", 2), __decorateClass([UIProperty], UIDaPeiAllList.prototype, "More", 2);
  var _UIHeroYuSheView = class t extends BaseView {
    constructor() {
