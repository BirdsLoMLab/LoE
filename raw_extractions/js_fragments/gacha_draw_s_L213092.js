// Fragment: gacha_draw_s_L213092.js
// Lines: 213092-213193 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 213093

        let s = this.plot.hprate / 100;
        this.barJinDu.value = s, this.barXueTiao.value = s, this.barJinDu.title = `${s.toFixed(2)}%`, this.barXueTiao.title = `${s.toFixed(2)}%`, this.txtSuiPian.text = StringUtil.format(ToolUtil.chinese(11822), this.model.curDataCfg.need_chip, this.model.info.game.chip), this.txtDiDian.text = `${ToolUtil.chinese(this.evtCfg.name)}  Lv.${this.evtCfg.level}`, this.setTexture(this.imgJieJiu, this.evtCfg.banner, "HelpBro"), this.setTexture(this.imgBanner, this.evtCfg.banner, "HelpBro"), this.btnShare.grayed = !(this.plot.hprate / 100 < 50), this.txtEventName.text = ToolUtil.chinese(this.evtCfg.name), this.btnGo.grayed = this.model.info.game.chip < this.model.curDataCfg.need_chip && 0 == this.c1.selectedIndex, this.txtCostBrawn.text = 0 == this.plot.isatk ? ToolUtil.chinese(11823) : StringUtil.format(ToolUtil.chinese(11824), this.model.curDataCfg.cost_brawn), this.listBro.touchable = !1, 1 == this.evtCfg.type && MusicCtrl.inst.PlaySound(1111)
      }
      onClickAll(t) {
        var e, i, s;
        if (t == this.btnShare) {
          if (this.btnShare.grayed) return void UIManager.inst.openMsg(ToolUtil.chinese(4228));
          let t = {
            msg: ToolUtil.chinese(4308),
            okFunc: () => {
              this.ctrl.ReqHelpBorCopyHelp(this.model.info.game.pos), this.close()
            }
          };
          UIManager.inst.openDialog(t)
        } else if (t == this.btnGo) {
          let t = null != (s = null == (i = null == (e = this.model.info) ? void 0 : e.game) ? void 0 : i.brawn) ? s : 0,
            o = this.plot.pos;
          if (t <= 0 && 0 == this.plot.isatk) {
            let t = this.model.info.game.ispass,
              e = {
                msg: ToolUtil.chinese(t ? 4293 : 4292),
                okFunc: () => {
                  this.ctrl.ReqHelpBorGiveUp()
                },
                yestitle: t ? ToolUtil.chinese(1028) : ToolUtil.chinese(11832),
                isRedOkButton: !t
              };
            return void UIManager.inst.openDialog(e)
          }
          if (this.btnGo.grayed) return void UIManager.inst.openMsg(StringUtil.format(ToolUtil.chinese(11822), this.model.curDataCfg.need_chip, this.model.info.game.chip));
          if (TeamModel.inst.RoomInfo) return void UIManager.inst.openMsg(ToolUtil.chinese(1395));
          let n = this.model.getPower(CfgHelpBro_copy.get(this.evtCfg.args[0]).show_power);
          if (0 == this.plot.isatk && 1 == this.evtCfg.is_kill && PowerModel.inst.curPower >= n * this.model.kill_power_rate / 100) {
            let t = {
              msg: ToolUtil.chinese(11817),
              okFunc: () => {
                this.ctrl.ReqHelpBorKillBoss(o), this.close()
              },
              cancelFunc: () => {
                this.ctrl.ReqHelpBorEvent(o), this.close()
              }
            };
            UIManager.inst.openDialog(t)
          } else this.ctrl.ReqHelpBorEvent(o), this.close()
        } else t == this.btnClose && this.close()
      }
    },
    _UIHelpBroXieZhuJiLuView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "HelpBroXieZhuJiLu", this.name = "HelpBroXieZhuJiLuView"
      }
      onInit() {
        this.openSubCom(this.bg), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UIHelpBroXieZhuJiLuView.UID = "ui://ofv96ceqoqfv0", __decorateClass([UIProperty], _UIHelpBroXieZhuJiLuView.prototype, "bg", 2), __decorateClass([UIProperty], _UIHelpBroXieZhuJiLuView.prototype, "list", 2), __decorateClass([UIProperty], _UIHelpBroXieZhuJiLuView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIHelpBroXieZhuJiLuView.prototype, "goEmpty", 2), __decorateClass([UIProperty], _UIHelpBroXieZhuJiLuView.prototype, "fixHeight", 2);
  var UIHelpBroXieZhuJiLuView = _UIHelpBroXieZhuJiLuView,
    HelpBroXieZhuJiLuView = class extends UIHelpBroXieZhuJiLuView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.model = HelpBroModel.inst, this.ctrl = HelpBroCtrl.inst, this.creatList(this.list, this.onItemRenderer)
      }
      onItemRenderer(t, e) {
        e.setData(this._recordList[t])
      }
      onShow() {
        this._recordList = this.model.info.game.recordlist, this.list.autoResizeItem = !1, this.list.numItems = this._recordList.length, this.list.autoResizeItem = !0, this.goEmpty.visible = 0 == this._recordList.length
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
    },
    {
      regClass: regClass111,
      property: property110
    } = Laya,
    HelpBroCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.isInit = !1, this.init()
      }
      static get inst() {
        return null == HelpBroCtrl._instance && (HelpBroCtrl._instance = new HelpBroCtrl), HelpBroCtrl._instance
      }
      init() {
        super.init(), this.model = HelpBroModel.inst
      }
      registS2CHandler() {
        this.addS2CHandle("helpbor.RetHelpBorInfo", this.RetHelpBorInfo), this.addS2CHandle("helpbor.RetHelpBorExplore", this.RetHelpBorExplore), this.addS2CHandle("helpbor.RetHelpBorMove", this.RetHelpBorMove), this.addS2CHandle("helpbor.RetHelpBorEvent", this.RetHelpBorEvent), this.addS2CHandle("helpbor.RetHelpBorGiveUp", this.RetHelpBorGiveUp), this.addS2CHandle("helpbor.RetHelpBorUpdatePlot", this.RetHelpBorUpdatePlot), this.addS2CHandle("helpbor.RetHelpBorUpdateChip", this.RetHelpBorUpdateChip), this.addS2CHandle("helpbor.RetHelpBorKillBoss", this.RetHelpBorKillBoss), this.addS2CHandle("helpbor.RetHelpBorRPG", this.RetHelpBorRPG), this.addS2CHandle("helpbor.RetHelpBorBag", this.RetHelpBorBag), this.addS2CHandle("helpbor.RetHelpBorBuff", this.RetHelpBorBuff), this.addS2CHandle("helpbor.RetHelpBorRecord", this.RetHelpBorRecord), this.addS2CHandle("helpbor.RetHelpBorCopyResult", this.RetHelpBorCopyResult), this.addS2CHandle("helpbor.RetHelpBorStageEnd", this.RetHelpBorStageEnd), this.addS2CHandle("helpbor.RetHelpBorCopyHelp", this.RetHelpBorCopyHelp), this.addS2CHandle("helpbor.RetHelpBorCopyHelpOther", this.RetHelpBorCopyHelpOther), this.addS2CHandle("helpbor.RetHelpBorGameInit", this.RetHelpBorGameInit), this.addS2CHandle("helpbor.RetHelpBorChat", this.RetHelpBorChat), this.addS2CHandle("helpbor.RetHelpCopyStart", this.RetHelpCopyStart), this.addS2CHandle("helpbor.RetHelpBorBase", this.RetHelpBorBase), this.addEvent(MsgName.Activity_Limit_Refresh, this.refreshLimitActivity)
      }
      refreshLimitActivity() {
        this.model.updateRedPoint(), this.isInit || (this.isInit = !0, ItemObserverUtil.addItemIdObserver(this.model.enter_item_id, this, (() => {
          this.model.updateRedPoint()
        }), !1)), this.model.isEnd && this.model.isOpen && (this.dispatchEvent(MsgName.HelpBro_ExitBattle), UIManager.inst.close(HelpBroMapView.UID), UIManager.inst.close(HelpBroGoView.UID), UIManager.inst.close(HelpBroView.UID), UIManager.inst.close(HelpBroShiJianView.UID))
      }
      RetHelpBorInfo(t) {
        this.model.info = t, t.game.poslist.forEach((t => {
          this.model.plotMap.set(t.pos, t)
        })), this.model.setCurDataCfg(t.game.stageid), this.dispatchEvent(MsgName.HelpBro_TiLi_PiaoZi), this.dispatchEvent(MsgName.HelpBro_Update_Data), this.model.updateRedPoint()
      }
      RetHelpBorExplore(t) {
