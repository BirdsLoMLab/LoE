// Fragment: gacha_draw_s_L334132.js
// Lines: 334132-334289 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 334135, 334189

          let s = t.point;
          1 != (null == (i = this.msg) ? void 0 : i.isFinished) && s++, this.c2.selectedIndex = s <= e.length ? 0 : 1, this.txtXiuLian.setVar("val1", `${StringUtil.arabicToEnglish(s)}/${StringUtil.arabicToEnglish(e.length)}`)
        }
        this.setTexture(this.modelLoader, this.cfg.banner, "LianTi")
      }
      onHide() {
        this.effectList.off(fgui.Events.SCROLL, this, this.onScrollEndHandle)
      }
      onScrollEndHandle() {
        this.effectList.refreshVirtualList()
      }
      udpateLingwuBtnState() {
        this.activeConditionOk = !0, this.activeCfgs.forEach(((t, e, i) => {
          this.model.taskFinish(t.id) || (this.activeConditionOk = !1)
        }));
        let t = this.cfg.activitate_cost[0],
          e = t[0],
          i = t[1],
          s = CfgitemBase.get(e),
          o = ItemCtrl.inst.getItemNum(e);
        this.setTexture(this.btn_lingwu.imgIcon, s.icon, "ItemIcon"), this.costEnoughOk = o >= i, this.btn_lingwu.txtConsume.text = `[color=#${this.costEnoughOk?"FFFFFF":"FF0000"}]${StringUtil.numberFormat(o)}[/color]/${StringUtil.numberFormat(i)}`, this.btn_lingwu.grayed = !(this.costEnoughOk && this.activeConditionOk)
      }
      onClickAll(t) {
        if (t == this.btnClose) this.close();
        else if (t == this.btnXiuLian) UIManager.inst.open(LianTiGongFaView.UID, null, this.cfg, this.msg);
        else if (t == this.btn_view2) UIManager.inst.open(LianTiJiaChengView.UID, null, this.cfg.id);
        else if (t == this.btn_view1) UIManager.inst.open(LianTiJiaChengView.UID, null, this.cfg.id);
        else if (t == this.btn_lingwu) {
          if (!this.activeConditionOk) return void UIManager.inst.openMsg(ToolUtil.chinese(11355));
          if (!this.costEnoughOk) return void ItemCtrl.inst.openSourceView(this.cfg.activitate_cost[0][0], !0);
          this.ctrl.ReqUnlockBodyTraining(this.cfg.id)
        }
      }
    },
    LianTiGongFa = class extends UILianTiGongFa {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.model = LianTiModel.inst
      }
      onShow() {}
      setData(t) {
        var e, i;
        if (this.cfg = t, this.txt_title.text = ToolUtil.chinese(t.name), this.xianfaC.selectedIndex = t.tag, this.msg = this.model.getTrainingInfo(t.id), this.msg) 1 == (null == (e = this.msg) ? void 0 : e.isFinished) ? this.c1.selectedIndex = 3 : this.c1.selectedIndex = 2;
        else {
          let [e, i] = this.model.lingWuCanGetInfo(t);
          this.c1.selectedIndex = e && i ? 1 : 0
        }
        if (2 == this.c1.selectedIndex) {
          let e = this.model.getLevelInfo(Number(null == (i = this.msg) ? void 0 : i.levelId)),
            s = Cfglianti_level.get({
              training_id: t.id
            }),
            o = s[s.length - 1].level;
          this.txt_num.setVar("val", `${e.level}/${o}`), this.bar_goods.value = 100 * e.level / o
        }
        this.setTexture(this.img_icon, t.banner, "LianTi");
        let s = null;
        switch (t.type) {
          case 1:
            s = RedPointMgr.inst.combineKey(604, t.id);
            break;
          case 2:
            s = RedPointMgr.inst.combineKey(605, t.id)
        }
        this.bindRedPoint(this.redpoint, s)
      }
      onClickAll(t) {
        t == this.btnClick && UIManager.inst.open(LianTiGongFaDetailView.UID, null, this.cfg, this.msg)
      }
    },
    UILianTiGongFaItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "LianTi"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UILianTiGongFaItem.UID = "ui://th4t2z4hslldj", __decorateClass([UIProperty], UILianTiGongFaItem.prototype, "list_gongfa", 2), __decorateClass([UIProperty], UILianTiGongFaItem.prototype, "txt_title", 2);
  var LianTiGongFaItem = class extends UILianTiGongFaItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        this.cfg = t
      }
      onClickAll(t) {}
    },
    UILianTiNormalItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "LianTi"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UILianTiNormalItem.UID = "ui://th4t2z4hozu63", __decorateClass([UIProperty], UILianTiNormalItem.prototype, "list", 2), __decorateClass([UIProperty], UILianTiNormalItem.prototype, "txt_title", 2);
  var LianTiNormalItem = class extends UILianTiNormalItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.creatList(this.list, this.onItemRenderer)
      }
      onItemRenderer(t, e) {
        e.setData(this.cfgs[t])
      }
      onShow() {}
      setData(t, e) {
        this.cfgs = e;
        let i = t + 1;
        ToolUtil.isChinese ? this.txt_title.text = StringUtil.format(ToolUtil.chinese(130002), StringUtil.arabicToChinese(i)) : this.txt_title.text = StringUtil.format(ToolUtil.chinese(130002), i);
        let s = e.length;
        this.list.numItems = s, this.list.align = s < 3 ? fgui.AlignTypeStr.Center : fgui.AlignTypeStr.Left, this.list.resizeToFit()
      }
      onClickAll(t) {}
    },
    UILianTiCiTiao = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "LianTiActive"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UILianTiCiTiao.UID = "ui://edgdyn6oozu6e", __decorateClass([UIProperty], UILianTiCiTiao.prototype, "txtdesc", 2);
  var LianTiCiTiao = class extends UILianTiCiTiao {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        this.txtdesc.text = LianTiModel.inst.getAttrDesc(t)
      }
      onClickAll(t) {}
    },
    UILianTiDaShisifyAttr = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "LianTiDaShi"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UILianTiDaShisifyAttr.UID = "ui://e685qhtru9uze", __decorateClass([UIController], UILianTiDaShisifyAttr.prototype, "c1", 2), __decorateClass([UIProperty], UILianTiDaShisifyAttr.prototype, "txtAttrName", 2), __decorateClass([UIProperty], UILianTiDaShisifyAttr.prototype, "txtCurVal", 2), __decorateClass([UIProperty], UILianTiDaShisifyAttr.prototype, "goArrow", 2), __decorateClass([UIProperty], UILianTiDaShisifyAttr.prototype, "txtNextVal", 2);
  var LianTiDaShisifyAttr = class extends UILianTiDaShisifyAttr {
      constructor() {
        super()
      }
