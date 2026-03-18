// Fragment: skill_system_t_L362214.js
// Lines: 362214-362314 of bundle-beautified.js
// Categories: Skill System
// Keywords: skill_id
// Hit lines: 362214

            const t = o.skill_id,
              e = (SkillHelper.getSkillConfig(t), CfgskillDecData.get(BattleHelper.getSkillId(t)));
            if (e) {
              this.txtSkillName.text = ToolUtil.chinese(e.name);
              const i = SkillHelper.getSkillLevel(t);
              this.txtSkillDesc.txtSkillDesc.text = SkillData.getSkillDesByCfg(t, e), this.curSkillInfo.setData(i, e.icon)
            }
          }
          const n = e.posId == this._ctrl.getMainPosId();
          this.c1.selectedIndex = n ? 1 : 0
        }
        this.refreshQiWenList(s), this.btnUp.goRed.setDotVisible(QiLingCtrl.inst.isShowQiLingRed(s))
      }
      initQiWenList() {
        this.creatList(this.qiWenList, this._onItemRender, null, this._onItemClick)
      }
      refreshQiWenList(t) {
        this._qiWenArr = this._ctrl.getQiWenListForQiLing(t), this.qiWenList.numItems = this._qiWenArr.length, this.qiWenList.scrollPane.touchEffect = this.qiWenList.numItems > 4
      }
      _onItemRender(t, e) {
        const i = e,
          s = QiLingModel.inst.getQiLingData(this._curSlotData.qilingId);
        i.setData(this._qiWenArr[t], s)
      }
      _onItemClick(t, e) {
        const i = e;
        if (this._qiWenArr[t].isLock) UIManager.inst.openMsg(`${ToolUtil.chinese(2043)}${i.getLockTips()}`);
        else {
          const e = QiLingModel.inst.getQiLingData(this._curSlotData.qilingId);
          if (!e) return;
          UIManager.inst.open(QiLingWenInfoView.UID, null, t, this._qiWenArr, e)
        }
      }
      playEff(t, e, i = 1) {
        if (!t) return;
        if (this._wakeEff || (this._wakeEff = this.addSubChild("QiLing_effect_orange", this.ui)), !this._wakeEff) return;
        this._wakeEff.removeFromParent(), t.addChild(this._wakeEff), this._wakeEff.setPivot(.5, .5), this._wakeEff.x = (t.width - this._wakeEff.width) / 2, this._wakeEff.y = (t.height - this._wakeEff.height) / 2 - 15, this._wakeEff.visible = !0, this._wakeEff.setScale(i, i);
        let s = this._wakeEff.getTransition("t0");
        s && (s.stop(), s.play(null, 1), this.addTimerTask(1, 1500, e))
      }
    },
    UIBtnHuHua = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "QiLing"
      }
      onConstruct() {
        this.openSubCom(this.goRed), this.onInit(), this.onEvent()
      }
    };
  UIBtnHuHua.UID = "ui://sehl2fx0ee6f83o", __decorateClass([UIController], UIBtnHuHua.prototype, "c1", 2), __decorateClass([UIProperty], UIBtnHuHua.prototype, "imgBg", 2), __decorateClass([UIProperty], UIBtnHuHua.prototype, "imgIcon", 2), __decorateClass([UIProperty], UIBtnHuHua.prototype, "txtTitle", 2), __decorateClass([UIProperty], UIBtnHuHua.prototype, "goRed", 2);
  var BtnHuHua = class extends UIBtnHuHua {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.bindRedPoint(this.goRed, 262)
      }
      onShow() {}
      onClickAll(t) {}
      setData(t) {
        const e = null != t;
        this.c1.selectedIndex = e ? 1 : 0;
        const i = Cfgqiling_skin.get(t, !0);
        if (e && i) {
          const t = CfgitemBase.get(i.show_item);
          t && (this.setImage(this.imgBg, `qlx_img_hhdi_${t.quality}`), this.setTexture(this.imgIcon, t.icon, ItemCtrl.inst.getItemIconFolder(t.type)))
        } else this.setImage(this.imgBg, "qlx_btn_hh")
      }
    },
    UIBtnQieHuan = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "QiLing"
      }
      onConstruct() {
        this.openSubCom(this.goRed), this.onInit(), this.onEvent()
      }
    };
  UIBtnQieHuan.UID = "ui://sehl2fx0ee6f843", __decorateClass([UIProperty], UIBtnQieHuan.prototype, "goRed", 2);
  var BtnQieHuan = class extends UIBtnQieHuan {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIbtnQiLingArrow = class extends BaseButton {
      constructor() {
        super(), this.pkgName = "QiLing"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIbtnQiLingArrow.UID = "ui://sehl2fx0m2co853", __decorateClass([UIProperty], UIbtnQiLingArrow.prototype, "img", 2);
  var btnQiLingArrow = class extends UIbtnQiLingArrow {
      constructor() {
        super()
      }
