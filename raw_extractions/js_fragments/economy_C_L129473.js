// Fragment: economy_C_L129473.js
// Lines: 129473-129600 of bundle-beautified.js
// Categories: Economy, Equipment
// Keywords: gold, mount
// Hit lines: 129474, 129497, 129500

    var C;
    (i = e = t.Money || (t.Money = {}))[i.Limit = 1] = "Limit", (o = s = t.Material || (t.Material = {}))[o.SkillItem = 1] = "SkillItem", o[o.SKillPiece = 2] = "SKillPiece", o[o.MethodExercises = 3] = "MethodExercises", o[o.Treasure = 4] = "Treasure", o[o.Mount = 5] = "Mount", o[o.Dragon = 6] = "Dragon", o[o.DragonSorce = 7] = "DragonSorce", o[o.WeaponStar = 8] = "WeaponStar", o[o.ShentongLv = 9] = "ShentongLv", o[o.YiShow = 10] = "YiShow", o[o.XKElixirExp = 11] = "XKElixirExp", o[o.Mount_TianCi_Skin = 12] = "Mount_TianCi_Skin", (r = n = t.GiftBag || (t.GiftBag = {}))[r.Get = 1] = "Get", r[r.SelectGet = 2] = "SelectGet", r[r.RandTreasure = 3] = "RandTreasure", (l = a = t.Avater || (t.Avater = {}))[l.Icon = 1] = "Icon", l[l.Frame = 2] = "Frame", (h = c = t.Fashion || (t.Fashion = {}))[h.Faze = 1] = "Faze", h[h.XianQi = 2] = "XianQi", h[h.TianCi = 3] = "TianCi", (p = u = t.HolidayAct || (t.HolidayAct = {}))[p.Card = 1] = "Card", p[p.Rank = 2] = "Rank", (g = d = t.Skin || (t.Skin = {}))[g.Realm = 1] = "Realm", (I = m = t.Treasure || (t.Treasure = {}))[I.Item = 1] = "Item", I[I.Piece = 2] = "Piece", (_ = y = t.Qiling || (t.Qiling = {}))[_.Item = 1] = "Item", _[_.QiWen = 2] = "QiWen", _[_.Piece = 3] = "Piece", _[_.Wake = 4] = "Wake", _[_.Skin = 5] = "Skin", _[_.Level = 6] = "Level", (C = f = t.GodFriend || (t.GodFriend = {}))[C.Item = 1] = "Item", C[C.Skin = 2] = "Skin"
  })(ItemSubType || (ItemSubType = {}));
  var IMG_FOLDER_ARR = ["ItemIcon", "EquipIcon", "HeadIcon"];

  function getIconFolder(t) {
    let e = IMG_FOLDER_ARR[0];
    if (isNaN(t) || !isFinite(t)) return e;
    switch (t) {
      case 4:
        e = IMG_FOLDER_ARR[1];
        break;
      case 5:
      case 6:
      case 12:
        e = IMG_FOLDER_ARR[2]
    }
    return e
  }
  var _UICopysView = class t extends BaseView {
    constructor() {
      super(), this.uid = t.UID, this.pkgName = "Copys", this.name = "CopysView"
    }
    onInit() {
      this.openSubCom(this.Gold), this.openSubCom(this.toolBar), this.addOpenAni(this.openAni)
    }
  };
  _UICopysView.UID = "ui://svi193z5k5k60", __decorateClass([UIController], _UICopysView.prototype, "tab", 2), __decorateClass([UIProperty], _UICopysView.prototype, "ldbg", 2), __decorateClass([UIProperty], _UICopysView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UICopysView.prototype, "tabContainer", 2), __decorateClass([UIProperty], _UICopysView.prototype, "Gold", 2), __decorateClass([UIProperty], _UICopysView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UICopysView.prototype, "fixHeight", 2), __decorateClass([UITransition], _UICopysView.prototype, "openAni", 2);
  var UICopysView = _UICopysView,
    _UICopysLimitTimeView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "CopysLimitTime", this.name = "CopysLimitTimeView"
      }
      onInit() {}
    };
  _UICopysLimitTimeView.UID = "ui://se0tmzm5k5k60", __decorateClass([UIProperty], _UICopysLimitTimeView.prototype, "list", 2);
  var UICopysLimitTimeView = _UICopysLimitTimeView,
    CopysLimitTimeView = class extends UICopysLimitTimeView {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
    },
    import_proto286 = __toESM(require_proto()),
    _UICopysPlayView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "CopysPlay", this.name = "CopysPlayView"
      }
      onInit() {
        this.openSubCom(this.toolBar), this.btn_chongci.onClick(this, this.onClickAll, [this.btn_chongci])
      }
    };
  _UICopysPlayView.UID = "ui://sthnncm8k5k60", __decorateClass([UIProperty], _UICopysPlayView.prototype, "calenderNode", 2), __decorateClass([UIProperty], _UICopysPlayView.prototype, "list", 2), __decorateClass([UIProperty], _UICopysPlayView.prototype, "toolBar", 2), __decorateClass([UIProperty], _UICopysPlayView.prototype, "btn_chongci", 2);
  var UICopysPlayView = _UICopysPlayView,
    _UIActivityCalenderView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Activity", this.name = "ActivityCalenderView"
      }
      onInit() {
        this.btnBox.addClick(this, this.onClickAll, [this.btnBox]), this.openSubCom(this.btnBox)
      }
    };
  _UIActivityCalenderView.UID = "ui://wl85w1j4tkyo8", __decorateClass([UIController], _UIActivityCalenderView.prototype, "c1", 2), __decorateClass([UIProperty], _UIActivityCalenderView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIActivityCalenderView.prototype, "bg", 2), __decorateClass([UIProperty], _UIActivityCalenderView.prototype, "listWeek", 2), __decorateClass([UIProperty], _UIActivityCalenderView.prototype, "listActivity", 2), __decorateClass([UIProperty], _UIActivityCalenderView.prototype, "listPage", 2), __decorateClass([UIProperty], _UIActivityCalenderView.prototype, "listTab", 2), __decorateClass([UIProperty], _UIActivityCalenderView.prototype, "btnBox", 2);
  var UIActivityCalenderView = _UIActivityCalenderView,
    import_proto285 = __toESM(require_proto()),
    _CfgMusic = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _CfgMusic.JsonName = "Music.json";
  var CfgMusic = _CfgMusic,
    import_proto284 = __toESM(require_proto()),
    import_proto283 = __toESM(require_proto()),
    _Cfgdungeons_data = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgdungeons_data.JsonName = "dungeons_data.json";
  var Cfgdungeons_data = _Cfgdungeons_data,
    _Cfgteam = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgteam.JsonName = "team.json";
  var Cfgteam = _Cfgteam,
    _UIAbyssFightView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "AbyssFight", this.name = "AbyssFightView"
      }
      onInit() {
        this.btn_arrow.onClick(this, this.onClickAll, [this.btn_arrow]), this.btnDetailInfo.onClick(this, this.onClickAll, [this.btnDetailInfo]), this.btnTab1.onClick(this, this.onClickAll, [this.btnTab1]), this.btnTab2.onClick(this, this.onClickAll, [this.btnTab2]), this.btn_arrow2.onClick(this, this.onClickAll, [this.btn_arrow2]), this.btnExit.onClick(this, this.onClickAll, [this.btnExit]), this.openSubCom(this.ChatItem), this.openSubCom(this.abyss_hp), this.openSubCom(this.btnAddHit), this.btnAddHit.onClick(this, this.onClickAll, [this.btnAddHit]), this.openSubCom(this.talkcon)
      }
    };
  _UIAbyssFightView.UID = "ui://q1noyz2qbl0yr", __decorateClass([UIController], _UIAbyssFightView.prototype, "c1", 2), __decorateClass([UIController], _UIAbyssFightView.prototype, "c2", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "txtStage", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "title", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "btn_arrow", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "txt_my_rank", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "txt_Damage", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "btnDetailInfo", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "Tab1", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "btnTab1", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "Tab2", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "btnTab2", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "listRank", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "btn_arrow2", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "shang_hai", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "btnExit", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "ChatItem", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "abyss_hp", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "btnAddHit", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "talkcon", 2), __decorateClass([UIProperty], _UIAbyssFightView.prototype, "fixHeighte", 2);
  var UIAbyssFightView = _UIAbyssFightView,
    _UITeamCopyHurtTotalView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "TeamCopyHurtTotal", this.name = "TeamCopyHurtTotalView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
      }
    };
  _UITeamCopyHurtTotalView.UID = "ui://tg7apjpmd4im0", __decorateClass([UIProperty], _UITeamCopyHurtTotalView.prototype, "bg", 2), __decorateClass([UIProperty], _UITeamCopyHurtTotalView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UITeamCopyHurtTotalView.prototype, "list", 2), __decorateClass([UIProperty], _UITeamCopyHurtTotalView.prototype, "fixHeight", 2);
  var UITeamCopyHurtTotalView = _UITeamCopyHurtTotalView,
    XmlUtil = class {
      static getMap(t, e, i, s) {
        var o, n, r;
        if (!Array.isArray(t.map)) {
          let i = null == (r = null == t ? void 0 : t.map) ? void 0 : r.info;
          return i = null == i ? null == t ? void 0 : t.map[e] : i, Array.isArray(i) ? i : [i]
        }
        for (let r = 0; r < t.map.length; r++)
          if (t.map[r].var == e && t.map[r].key == i) {
            let i = null == (o = null == t ? void 0 : t.map[r]) ? void 0 : o.info;
            return null != s && (i = null == (n = null == t ? void 0 : t.map[r]) ? void 0 : n[s]), i = null == i ? null == t ? void 0 : t.map[r][e] : i, Array.isArray(i) ? i : [i]
          } return null
      }
      static get(t, e, i, s) {
        let o = t[e];
        if (!Array.isArray(o)) {
          let t = o[s];
