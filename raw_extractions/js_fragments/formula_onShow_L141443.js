// Fragment: formula_onShow_L141443.js
// Lines: 141443-141643 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max, Math.min
// Hit lines: 141444, 141470, 141569

      onShow() {
        this._data = this.args[0], this._cfgs = Array.from(Cfgintimacy_item.get()).reverse(), this._selId = Math.max(0, this._cfgs.findIndex((t => ItemCtrl.inst.getItemNum(t.id) > 0))), this._cfgs.forEach((t => {
          ItemObserverUtil.addItemIdObserver(t.id, this, (() => this.refreshView()), !1)
        })), this.txtInputNum.on(Laya.Event.INPUT, this, this.onInputEnd), this.txtInputNum.on(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange), this.refreshView()
      }
      onHide() {
        this.txtInputNum.off(Laya.Event.INPUT, this, this.onInputEnd), this.txtInputNum.off(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange), this._cfgs.forEach((t => {
          ItemObserverUtil.removeItemIdObserver(t.id, this)
        }))
      }
      onFocusChange() {
        "" != this.txtInputNum.text && "0" != this.txtInputNum.text || (this.txtInputNum.text = "1")
      }
      onInputEnd() {
        if ("" == this.txtInputNum.text) return;
        let t = parseInt(this.txtInputNum.text);
        isNaN(t) && (t = 1), this.num = MathUtil.clamp(t, 1, this._maxNum), this.txtInputNum.text = this.num.toString()
      }
      onClickAll(t) {
        t == this.btnAdd ? this.num++ : t == this.btnCut ? this.num-- : t == this.btn_num02 ? this.num += 10 : t == this.btn_num01 ? this.num -= 10 : t == this.btn_Use && (this.btn_Use.grayed ? ItemCtrl.inst.openSourceView(this._cfg.id) : FriendCtrl.inst.ReqIntimacyItem(this._data.charid, [
          [this._cfg.id, this.num]
        ]))
      }
      refreshView() {
        this._cfg = this._cfgs[this._selId], this._curExp = FriendModel.inst.getIntimacy(this._data).exp, this.txt_tips.setVar("val", this._curExp), this.listItems.numItems = this._cfgs.length, this.refreshNum()
      }
      refreshNum() {
        this._maxNum = Math.max(1, ItemCtrl.inst.getItemNum(this._cfg.id)), this.txtInputNum.text = this.num.toString(), this.btn_Use.setItem(this._cfg.id, this.num, !0), this.btn_Use.grayed = this.num > ItemCtrl.inst.getItemNum(this._cfg.id), this.txt_tips_num.text = (this._curExp + this.num * this._cfg.exp).toString()
      }
    },
    _Cfgintimacy_task = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgintimacy_task.JsonName = "intimacy_task.json";
  var Cfgintimacy_task = _Cfgintimacy_task,
    FriendIntimacyGetView = class extends UIFriendIntimacyGetView {
      constructor() {
        super(), this.layer = "Pop", this.maskType = 1
      }
      onEvent() {
        this.addEvent(MsgName.Intimacy_Refresh, this.refreshView)
      }
      onInit() {
        super.onInit(), this._cfgs = Cfgintimacy_task.get().filter((t => TimerMgr.inst.getOpenDay() >= t.open_day)), this.bar_intimacy.min = 0, this.bar_intimacy.max = FriendModel.inst.intimacy_day_max, this.creatList(this.list_go, ((t, e) => {
          e.setData(this._cfgs[t], this._data)
        }))
      }
      onShow() {
        this._data = this.args[0], this.refreshView()
      }
      onClickAll(t) {
        t == this.btnClose ? this.close() : t == this.btnSendGift && UIManager.inst.open(FriendPresentView.UID, null, this._data)
      }
      refreshView() {
        this.intimacy = FriendModel.inst.getIntimacy(this._data), this.bar_intimacy.value = this.intimacy.dayExp, this.txt_bar_tips.setVar("cur", this.intimacy.dayExp), this.txt_bar_tips.setVar("max", FriendModel.inst.intimacy_day_max), this.list_go.numItems = this._cfgs.length
      }
    },
    _UIFriendRewardTipsView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "FriendRewardTips", this.name = "FriendRewardTipsView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UIFriendRewardTipsView.UID = "ui://ggqa98h0kkl40", __decorateClass([UIProperty], _UIFriendRewardTipsView.prototype, "bg", 2), __decorateClass([UIProperty], _UIFriendRewardTipsView.prototype, "title", 2), __decorateClass([UIProperty], _UIFriendRewardTipsView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIFriendRewardTipsView.prototype, "txtDesc", 2), __decorateClass([UIProperty], _UIFriendRewardTipsView.prototype, "itemList", 2), __decorateClass([UIProperty], _UIFriendRewardTipsView.prototype, "fixHeight", 2);
  var UIFriendRewardTipsView = _UIFriendRewardTipsView,
    FriendRewardTipsView = class extends UIFriendRewardTipsView {
      constructor() {
        super(), this.layer = "Pop", this.maskType = 1
      }
      onInit() {
        super.onInit()
      }
      onShow() {
        const t = this.args[0];
        this.creatList(this.itemList, ((e, i) => {
          i.setDataByArr(t.reward[e])
        })), this.txtDesc.setVar("val", t.level), this.itemList.numItems = t.reward.length
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
    },
    FriendIntimacyView = class extends UIFriendIntimacyView {
      constructor() {
        super(), this.m_page = 0, this.layer = "Pop", this.maskType = 1
      }
      get page() {
        return this.m_page
      }
      set page(t) {
        this.m_page = MathUtil.clamp(t, 0, this._privCfgs.length - 1), this.refreshPage()
      }
      onEvent() {
        this.addEvent(MsgName.Intimacy_Refresh, this.refreshView), this.addEvent(MsgName.Intimacy_Reward_Refresh, this.refreshView)
      }
      onInit() {
        super.onInit(), this._privCfgs = Cfgintimacy_level.get().filter((t => t.desc.length > 0)), this._rewardCfgs = Cfgintimacy_level.get().filter((t => t.reward.length > 0)), this.intimacyLevel.bar_Intimacy.min = 0, this.intimacyLevel.bar_Intimacy.max = this._rewardCfgs.length, this.creatList(this.list_intimacy, ((t, e) => {
          e.txt_stats.text = ToolUtil.chinese(this._descs[t])
        }), null, null, !1), this.creatList(this.intimacyLevel.list_baoxiang, ((t, e) => {
          e.setData(this._rewardCfgs[t], this._data)
        }), null, ((t, e) => {
          1 == e.c1.selectedIndex ? FriendCtrl.inst.ReqIntimacyRwd(this._data.charid, this._rewardCfgs[t].id) : (3 == e.c1.selectedIndex && UIManager.inst.openMsg(ToolUtil.chinese(1301)), UIManager.inst.open(FriendRewardTipsView.UID, null, this._rewardCfgs[t]))
        }), !1)
      }
      onShow() {
        this._data = this.args[0], this.refreshView(), this.page = ArrayUtil.findLastIndex(this._privCfgs, (t => this.intimacy.level >= t.level)), this.intimacyLevel.list_baoxiang.scrollToView(this.getDefaultId())
      }
      onClickAll(t) {
        t == this.btnClose ? this.close() : t == this.btn_left ? this.page-- : t == this.btn_right ? this.page++ : t == this.btn_get ? UIManager.inst.open(FriendIntimacyGetView.UID, null, this._data) : t == this.btnHelp && UIManager.inst.openHelp(99)
      }
      refreshView() {
        this.intimacy = FriendModel.inst.getIntimacy(this._data), this.txt_num.text = this.intimacy.level.toString(), this.refreshPage(), this.refreshBar()
      }
      refreshPage() {
        this.btn_left.visible = 0 != this.m_page, this.btn_right.visible = this.m_page != this._privCfgs.length - 1;
        const t = this._privCfgs[this.page];
        this.txt_level.setVar("val", t.level), this._descs = ToolUtil.chinese(t.desc).split(";"), this.list_intimacy.numItems = this._descs.length
      }
      refreshBar() {
        const t = ArrayUtil.findLastIndex(this._rewardCfgs, (t => this.intimacy.level >= t.level));
        this.intimacyLevel.bar_Intimacy.value = t + 1.2;
        const e = ArrayUtil.findLastIndex(this._privCfgs, (t => this.intimacy.level >= t.level)),
          i = Math.min(this._privCfgs.length - 1, e + 1);
        this.txt_num02.text = `${this.intimacy.exp}/${this._privCfgs[i].exp}`, this.intimacyLevel.list_baoxiang.numItems = this._rewardCfgs.length, this.intimacyLevel.list_baoxiang.resizeToFit()
      }
      getDefaultId() {
        return ArrayUtil.sortIndex(this._rewardCfgs, ((t, e) => {
          const i = FriendCtrl.inst.getIntimacyRewardInfo(this._data, t.id),
            s = FriendCtrl.inst.getIntimacyRewardInfo(this._data, e.id);
          return i.canGet != s.canGet ? i.canGet ? -1 : 1 : i.isReach != s.isReach ? i.isReach ? 1 : -1 : i.isGet ? e.id - t.id : t.id - e.id
        }))[0]
      }
    },
    _UIMonsterWeiMianView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "MonsterWeiMian", this.name = "MonsterWeiMianView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UIMonsterWeiMianView.UID = "ui://bgi64snbhid60", __decorateClass([UIProperty], _UIMonsterWeiMianView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIMonsterWeiMianView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIMonsterWeiMianView.prototype, "list", 2), __decorateClass([UIProperty], _UIMonsterWeiMianView.prototype, "fixHeight", 2);
  var UIMonsterWeiMianView = _UIMonsterWeiMianView,
    MonsterWeiMianView = class extends UIMonsterWeiMianView {
      constructor() {
        super(), this.layer = "Pop", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.list, this.onItemRenderer)
      }
      onItemRenderer(t, e) {
        e.setData(this.zonelist[t])
      }
      onShow() {
        this.zonelist = this.args[0], this.zonelist.sort(((t, e) => t - e)), this.list.numItems = this.zonelist.length
      }
      onClickAll(t) {
        t == this.btnClose && this.close()
      }
    },
    _UIRedpackOpenView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Redpack", this.name = "RedpackOpenView"
      }
      onInit() {
        this.btnBg.onClick(this, this.onClickAll, [this.btnBg]), this.openSubCom(this.playerAvatar), this.openSubCom(this.btnSend), this.btnSend.onClick(this, this.onClickAll, [this.btnSend])
      }
    };
  _UIRedpackOpenView.UID = "ui://ohignkjc67zd0", __decorateClass([UIController], _UIRedpackOpenView.prototype, "c1", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "bgmask", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "btnBg", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "playerAvatar", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtMessage", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtState", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtMessage2", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "imgIcon", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtNumber", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "Message", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "imgBg2", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "imgTitleBg", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtScore", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtScoreNumber", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "imgIcon1", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtGold", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "listScore", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "list", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "txtHongbaoGeShu", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "btnSend", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "sder", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "t1", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "t2", 2), __decorateClass([UIProperty], _UIRedpackOpenView.prototype, "fixHeight", 2);
  var UIRedpackOpenView = _UIRedpackOpenView,
    import_proto26 = __toESM(require_proto()),
    RedpackOpenView = class extends UIRedpackOpenView {
      constructor() {
        super(), this.isRedInfoFlag = !1, this.cnt = 20, this.maskType = 0, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit(), this._initIconList(), this.setTexture(this.imgIcon, RedpackCtrl.icon, "ItemIcon"), this.setTexture(this.imgIcon1, RedpackCtrl.icon, "ItemIcon")
      }
      onShow() {
        var t, e;
        let i = this.args[0];
        2 == i ? (this.c1.selectedIndex = i, this.data = this.args[1], this.cfg = Cfgred_packet.get(this.data.cfgid), this.sder.min = this.cfg.min_num, this.sder.max = this.cfg.max_num, this.t1.text = `${this.cfg.min_num}`, this.t2.text = `${this.cfg.max_num}`, this.txtNumber.text = `${this.cfg.money_num}`, this.sder.value = Math.floor(this.cfg.min_num), this.txtTitle.text = `${ToolUtil.chinese(this.cfg.name)}`) : this.args[0] instanceof import_proto26.default.sept.RedpacketFullInfo && (this.isRedInfoFlag = !0, this.udpateRedInfo(this.args[0])), this.txtMessage.text = `${ToolUtil.chinese(null==(t=this.cfg)?void 0:t.desc)}`, this.txtMessage2.text = `${ToolUtil.chinese(null==(e=this.cfg)?void 0:e.desc)}`
      }
      onClickAll(t) {
        if (t == this.btnSend) RedpackCtrl.inst.ReqDistributeRedpacket(this.data.thisid, this.sder.value), this.dispatchEvent(MsgName.Red_Packet_send), this.close();
        else if (t == this.btnBg) {
          if (RedpackCtrl.inst.listRedInfos.length > 0 && this.isRedInfoFlag) return void this.udpateRedInfo(RedpackCtrl.inst.listRedInfos.pop());
          this.close()
        }
      }
      udpateRedInfo(t) {
        var e, i;
        this.cfg = Cfgred_packet.get(t.cfgid), this.c1.selectedIndex = t.historyList.length == t.num ? 0 : 1, this.txtName.text = t.ownername, this.txtNumber.text = `${t.mymoney}`, this.txtScoreNumber.text = `${t.historyList.length}/${t.num}`, this.txtGold.text = `${t.usedmoney}/${this.cfg.money_num}`, this.info = t, this.listScore.numItems = t.historyList.length, this.playerAvatar.setData({
          charId: t.charid,
          gender: t.gender,
          icon: t.icon
        }), this.txtMessage.text = `${ToolUtil.chinese(null==(e=this.cfg)?void 0:e.desc)}`, this.txtMessage2.text = `${ToolUtil.chinese(null==(i=this.cfg)?void 0:i.desc)}`
