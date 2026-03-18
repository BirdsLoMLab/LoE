// Fragment: formula__addNum_L139390.js
// Lines: 139390-139494 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max, Math.min
// Hit lines: 139391, 139394

      _addNum() {
        this._curNum = Math.min(this._curNum + 1, this._maxNum), this._refreshNum()
      }
      _reduceNum() {
        this._curNum = Math.max(this._curNum - 1, 1), this._refreshNum()
      }
      _refreshNum() {
        this.txtNumber.text = this._curNum.toString()
      }
      onClickAll(t) {
        if (t == this.btnAdd) this._addNum();
        else if (t == this.btnCut) this._reduceNum();
        else if (t == this.btnMax) this._curNum = this._maxNum, this._refreshNum();
        else if (t == this.btnUse) {
          let t = parseInt(this.txtNumber.text);
          t *= this.addNum, this.fun(this.eventType, t), this.close()
        }
      }
      onHide() {
        this.txtNumber.off(Laya.Event.INPUT, this, this._onNumInputChangeHandle), this.txtNumber.off(Laya.Event.BLUR, this, this._onNumInputBlurHandle)
      }
    },
    _UIMonsterMapAutoView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "MonsterMapAutoView", this.name = "MonsterMapAutoView"
      }
      onInit() {
        this.btnMask.onClick(this, this.onClickAll, [this.btnMask]), this.openSubCom(this.btn_auto), this.btn_auto.onClick(this, this.onClickAll, [this.btn_auto])
      }
    };
  _UIMonsterMapAutoView.UID = "ui://8zcteioaykml0", __decorateClass([UIProperty], _UIMonsterMapAutoView.prototype, "btnMask", 2), __decorateClass([UIProperty], _UIMonsterMapAutoView.prototype, "btn_auto", 2), __decorateClass([UIProperty], _UIMonsterMapAutoView.prototype, "txt_completed_times", 2), __decorateClass([UIProperty], _UIMonsterMapAutoView.prototype, "txt_fight_times", 2), __decorateClass([UIProperty], _UIMonsterMapAutoView.prototype, "txt_residue", 2), __decorateClass([UIProperty], _UIMonsterMapAutoView.prototype, "imgLd", 2), __decorateClass([UIProperty], _UIMonsterMapAutoView.prototype, "txt_times", 2), __decorateClass([UIProperty], _UIMonsterMapAutoView.prototype, "fixHeight", 2);
  var UIMonsterMapAutoView = _UIMonsterMapAutoView,
    import_proto208 = __toESM(require_proto()),
    _Cfgmonster_invade_data = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgmonster_invade_data.JsonName = "monster_invade_data.json";
  var Cfgmonster_invade_data = _Cfgmonster_invade_data,
    import_proto21 = __toESM(require_proto()),
    _UIMonsterExploreView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "MonsterExplore", this.name = "MonsterExploreView"
      }
      onInit() {
        this.openSubCom(this.bgContent), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnYes), this.btnYes.onClick(this, this.onClickAll, [this.btnYes])
      }
    };
  _UIMonsterExploreView.UID = "ui://mseai66ikjxd0", __decorateClass([UIProperty], _UIMonsterExploreView.prototype, "bgContent", 2), __decorateClass([UIProperty], _UIMonsterExploreView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIMonsterExploreView.prototype, "bgDesc", 2), __decorateClass([UIProperty], _UIMonsterExploreView.prototype, "btnYes", 2), __decorateClass([UIProperty], _UIMonsterExploreView.prototype, "txtCnt", 2), __decorateClass([UIProperty], _UIMonsterExploreView.prototype, "list", 2), __decorateClass([UIProperty], _UIMonsterExploreView.prototype, "fixHeight", 2);
  var UIMonsterExploreView = _UIMonsterExploreView,
    MonsterExploreView = class extends UIMonsterExploreView {
      constructor() {
        super(), this.ids = [], this.maskType = 1, this.layer = "WindowFull"
      }
      onInit() {
        super.onInit(), this.model = MonsterInvadeModel.inst, this.ctrl = MonsterInvadeCtrl.inst, this.creatList(this.list, this._onItemRenderer)
      }
      _onItemRenderer(t, e) {
        let i = e,
          s = this.monsterEventIds[t];
        i.setData(s, this.mosterEventNums.get(s))
      }
      onShow() {
        fgui.GRoot.inst.touchable = !0, this.ids.length = 0;
        let t = 0,
          e = this.args[0];
        this.monsterEventIds = [], this.mosterEventNums = new Map;
        for (let i in e) {
          let s = e[i]; - 1 == this.monsterEventIds.indexOf(s.id) ? (this.monsterEventIds.push(s.id), this.mosterEventNums.set(s.id, 1)) : this.mosterEventNums.set(s.id, this.mosterEventNums.get(s.id) + 1), Cfgmonster_invade_event.get(s.id).event_type == import_proto21.default.db.MonsterEventType.MONSTER_TYPE_REWARD && this.ids.push(Number(i)), t++
        }
        this.monsterEventIds.sort(((t, e) => {
          let i = Cfgmonster_invade_event.get(t),
            s = Cfgmonster_invade_event.get(e);
          return i.quality != s.quality ? i.quality > s.quality ? -1 : 0 : i.event_type != s.event_type ? i.event_type > s.event_type ? -1 : 0 : i.id > s.id ? -1 : 0
        })), this.list.numItems = this.monsterEventIds.length, this.txtCnt.setVar("val", t)
      }
      onClickAll(t) {
        (t == this.btnClose || t == this.btnYes) && this.close()
      }
      onHide() {
        this.ids.length > 0 && this.ctrl.ReqMonsterReward(this.ids), this.dispatchEvent(MsgName.MonsterInvade_Event_Effect)
      }
    },
    import_proto206 = __toESM(require_proto()),
    _UIMonsterFightIncidentView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "MonsterFightIncident", this.name = "MonsterFightIncidentView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.txtDesc), this.openSubCom(this.btnFight), this.btnFight.onClick(this, this.onClickAll, [this.btnFight]), this.btnTeam.onClick(this, this.onClickAll, [this.btnTeam]), this.openSubCom(this.btnSelect), this.btnSelect.onClick(this, this.onClickAll, [this.btnSelect]), this.btn4Rate.onClick(this, this.onClickAll, [this.btn4Rate]), this.btnimg_icon.onClick(this, this.onClickAll, [this.btnimg_icon]), this.btnAddCnt.onClick(this, this.onClickAll, [this.btnAddCnt])
      }
    };
  _UIMonsterFightIncidentView.UID = "ui://z0184duvnlk20", __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "img_Banner", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "imgTitleDi", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "txtDesc", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "btnFight", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "btnTeam", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "txtItemName", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "img_icon2", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "txtItemNum", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "btnSelect", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "btn4Rate", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "txtNumber2", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "btnimg_icon", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "btnAddCnt", 2), __decorateClass([UIProperty], _UIMonsterFightIncidentView.prototype, "fixHeight", 2);
  var UIMonsterFightIncidentView = _UIMonsterFightIncidentView,
    _Cfgcity_escort_event = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgcity_escort_event.JsonName = "city_escort_event.json";
  var Cfgcity_escort_event = _Cfgcity_escort_event,
    _UIMainRunningHuSongWinView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Fight", this.name = "MainRunningHuSongWinView"
