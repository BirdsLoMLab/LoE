// Fragment: gacha_draw_e_L336793.js
// Lines: 336793-336895 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: banner
// Hit lines: 336795

        let e = Cfglundao_data.get(Number(t.id)),
          i = Cfglundao_inventory.get(Number(t.topic));
        this.setTexture(this.img_banner, e.banner, "LunDao"), this.txt.selectedIndex = MathUtil.clamp(0, 4, e.inventory - 1), this.c2.selectedIndex = e.special_privileges > 0 ? 1 : 0, this.txtDesc.text = ToolUtil.chinese(i.dec);
        let s = Number(e.output[0][0]),
          o = Number(e.output[0][1]);
        const n = CfgitemBase.get(s);
        n && this.setTexture(this.img_icon, n.icon, "ItemIcon"), this.txtNum.text = o.toString(), e.seat_num ? t.occupySeat >= e.seat_num ? this.Cstate.selectedIndex = 2 : (this.Cstate.selectedIndex = 1, this.txt_shengyu.text = StringUtil.format(ToolUtil.chinese(3539), e.seat_num - t.occupySeat, e.seat_num)) : this.Cstate.selectedIndex = 0;
        let r = LunDaoModel.inst.myInfo;
        r.startTime > 0 && r.lundaoId == t.id ? (this.eff.visible = !0, this.eff.t0.setAutoPlay(!0), this.c1.selectedIndex = 1) : t.isHaveAward ? (this.eff.visible = !1, this.c1.selectedIndex = 2) : (this.eff.visible = !1, this.c1.selectedIndex = 0)
      }
      onClickAll(t) {
        if (t == this.btnMask)
          if (LunDaoModel.inst.isInLunDaoTime()) UIManager.inst.open(LunDaoChangView.UID, null, this._data);
          else {
            let t = StringUtil.format(ToolUtil.chinese(3556), LunDaoModel.inst.start_hour, LunDaoModel.inst.finish_hour);
            UIManager.inst.openMsg(t)
          }
        else t == this.btnReward && LunDaoCtrl.inst.ReqGetAward(this._data.id)
      }
    },
    UILunDaoRewardItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "LunDao"
      }
      onConstruct() {
        this.openSubCom(this.redPoint), this.btnClick.onClick(this, this.onClickAll, [this.btnClick]), this.onInit(), this.onEvent()
      }
    };
  UILunDaoRewardItem.UID = "ui://x32dah6bsv2rq", __decorateClass([UIProperty], UILunDaoRewardItem.prototype, "bar_jifen", 2), __decorateClass([UIProperty], UILunDaoRewardItem.prototype, "txtName", 2), __decorateClass([UIProperty], UILunDaoRewardItem.prototype, "list", 2), __decorateClass([UIProperty], UILunDaoRewardItem.prototype, "redPoint", 2), __decorateClass([UIProperty], UILunDaoRewardItem.prototype, "btnClick", 2);
  var LunDaoRewardItem = class extends UILunDaoRewardItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t, e) {
        if (this.cfg = t, this.task = e, !t || !e) return;
        let i = TaskCtrl.inst.isCompleteState(parseInt(e.vars.state)),
          s = TaskCtrl.inst.isGetRewardState(parseInt(e.vars.state));
        if (this.redPoint.setDotVisible(s && !i), this.txtName.text = ToolUtil.chinese(t.desc), t.sum > 1) {
          let s = i ? t.sum : parseInt(e.vars.tmp_val);
          this.bar_jifen.max = t.sum, this.bar_jifen.value = s
        }
        this.creatList(this.list, this.itemRender, null, null, !1);
        let o = Cfgdropdata.get(t.reward).show;
        this.awards = o, this.list.numItems = this.awards.length, this.setChildIndex(this.btnClick, this.getChildIndex(this.list) + (s ? 1 : -1))
      }
      itemRender(t, e) {
        let i = TaskCtrl.inst.isCompleteState(parseInt(this.task.vars.state));
        TaskCtrl.inst.isGetRewardState(parseInt(this.task.vars.state)) && !i ? e.setData(this.awards[t], 1) : i ? e.setData(this.awards[t], 2) : e.setData(this.awards[t], 3)
      }
      onClickAll(t) {
        t == this.btnClick && TaskCtrl.inst.isGetRewardState(parseInt(this.task.vars.state)) && TaskCtrl.inst.quest_sendGetReward(this.task.questid)
      }
    },
    UILunDao_jishi_eff = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "LunDao"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UILunDao_jishi_eff.UID = "ui://x32dah6bsyuh29", __decorateClass([UITransition], UILunDao_jishi_eff.prototype, "t0", 2);
  var LunDao_jishi_eff = class extends UILunDao_jishi_eff {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UILunDaoChangKinds = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "LunDaoDaoChang"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UILunDaoChangKinds.UID = "ui://zot4f66rsv2r15", __decorateClass([UIController], UILunDaoChangKinds.prototype, "c1", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "imgbanner", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "imgNpc", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "img_npc", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "no", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "imgKuang", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "img_title", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "Txt6", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "TxtInfo", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "NeiRong", 2), __decorateClass([UIProperty], UILunDaoChangKinds.prototype, "txtTitle", 2);
  var LunDaoChangKinds = class extends UILunDaoChangKinds {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        this._data = t;
        let e = Cfglundao_data.get(Number(t.id)),
          i = Cfglundao_inventory.get(Number(t.topic));
        this.TxtInfo.text = ToolUtil.chinese(i.dec), this.txtTitle.text = ToolUtil.chinese(e.name), this.setTexture(this.imgNpc, e.mentor, "LunDao")
      }
      onClickAll(t) {}
    },
    UILunDaoChangMySeat = class extends BaseCom {
      constructor() {
