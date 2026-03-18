// Fragment: formula_i_L418374.js
// Lines: 418374-418474 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.round
// Hit lines: 418374

        let i = Math.round(255 * e).toString(16);
        return 1 === i.length && (i = "0" + i), t + i
      }
      static getMainUIBtnCfgByViewUID(t) {
        return CfgmainUIbtn.get().find((e => UIManager.inst.getUid(e.window) === t))
      }
      static getCareerName(t, e) {
        let i = this.getCareerConfig(t, e);
        return StringUtil.isNullOrEmpty(null == i ? void 0 : i.name) ? ToolUtil.chinese(1049) : ToolUtil.chinese(null == i ? void 0 : i.name)
      }
      static getCareerIcon(t, e) {
        let i = this.getCareerConfig(t, e);
        return null == i ? void 0 : i.icon
      }
      static getCareerConfig(t, e) {
        if (0 != CfgCareerConfig.get({
            career: t,
            sex: e
          }).length) return CfgCareerConfig.get({
          career: t,
          sex: e
        })[0];
        Debug.LogError(`找不到配置职业，career:${t},sex:${e}`)
      }
      static getSelfUnitConfig() {
        return 1 == CoreMapCtrl.inst.gender ? CfgUnitConfig.get(1) : CfgUnitConfig.get(4)
      }
      static getDungeonCfgLevelDesc(t) {
        const e = t;
        if (0 == e) return "1-1";
        let i, s = Cfgdungeon_data.get(e, !0);
        return i = s && e ? CopysTowerCtrl.inst.getStepPassDesc(parseInt(s.level_desc)) : "1-1", i
      }
      static get boss_show_num() {
        if (CoreMapCtrl.inst.isAbyssScene) return AbyssCtrl.inst.max_show_player;
        if (29 == CoreMapCtrl.inst.mapType) return QiuMoActivityModel.inst.model_show_num;
        if (38 == CoreMapCtrl.inst.mapType) return 100;
        if (6 == CoreMapCtrl.inst.mapType && (CopysBossModel.inst.isCrossBoss() || CopysBossModel.inst.isWorldBoss())) return CopysBossModel.inst.model_show_num;
        if (0 == t._bossShowNum) {
          const e = ConfigManager.inst.GetXmlConfig("boss_copy");
          e && (t._bossShowNum = parseInt(e.boss_show_num))
        }
        return 21 == CoreMapCtrl.inst.mapType && ToolUtil.number(51) || t._bossShowNum
      }
      static set boss_show_num(e) {
        t._bossShowNum = e
      }
      static get showHudNum() {
        if (CoreMapCtrl.inst.isAbyssScene) return AbyssCtrl.inst.max_show_player;
        if (0 == t._showHudNum) {
          const e = ConfigManager.inst.GetXmlConfig("boss_copy");
          e && (t._showHudNum = parseInt(e.boss_show_hud))
        }
        return 21 == CoreMapCtrl.inst.mapType && ToolUtil.number(51) || t._showHudNum
      }
      static getItemBaseByCareer(t) {
        if (!(t.career_item.length > 0)) return t;
        for (let e = 0; e < t.career_item.length; e++) {
          const i = t.career_item[e];
          if (i[0] == CoreMapCtrl.inst.career) return CfgitemBase.get(i[1])
        }
      }
      static setItemTag(t, e) {
        t.visible = !StringUtil.isNullOrEmpty(e.tag), t.visible && (t.getChild("txtEmpty").text = ToolUtil.chinese(e.tag), t.getController("c1").selectedIndex = e.tag_color)
      }
    };
  _CfgUtil.barStyles = ["zdfb_img_jdtlvse", "zdfb_img_jdtlanse", "zdfb_img_jdtzise", "zdfb_img_jdtchengse", "zdfb_img_jdthongse"], _CfgUtil.hud_distance = 0, _CfgUtil._bossShowNum = 0, _CfgUtil._showHudNum = 0;
  var CfgUtil = _CfgUtil,
    import_proto482 = __toESM(require_proto()),
    {
      regClass: regClass215,
      property: property213
    } = Laya,
    FashionCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.fazeTopStarDic = new MultiDictionary, this.fazeMaxStarMap = new Map, this.fashionHaveSkillStarMap = new Map, this.init()
      }
      static get inst() {
        return null == FashionCtrl._instance && (FashionCtrl._instance = new FashionCtrl), FashionCtrl._instance
      }
      init() {
        super.init(), ItemObserverUtil.addItemTypeObserver(10, this, (() => {
          this.checkRedPoint()
        })), this.addEvent(MsgName.Func_Open_Id_Change, this.checkRedPoint, this), this.addEvent(MsgName.Skill_Change_Career, this.onSkillChangeCareer, this)
      }
      registS2CHandler() {
        this.addS2CHandle("clothing.ClothingInfo", this.onClothingInfo), this.addS2CHandle("clothing.RetActClothing", this.onRetActClothing), this.addS2CHandle("clothing.RetWearClothing", this.onRetWearClothing), this.addS2CHandle("clothing.RetImageInfo", this.onRetImageInfo), this.addS2CHandle("clothing.RetClothingUpStar", this.onRetClothingUpStar), this.addS2CHandle("clothing.RetActiveSkillStar", this.onRetActiveSkillStar), this.addS2CHandle("clothing.FazeGrowCount", this.onFazeGrowCount)
      }
      onClothingInfo(t) {
        FashionModel.inst.currentWearId = t.wearId, FashionModel.inst.currentFazeId = t.wearFazeId, FashionModel.inst.FazeCount = t.fazeCount, FashionModel.inst.currentXianQiId = t.xianqiId, FashionModel.inst.currentXianQiEffectId = t.xianqiEffectId, FashionModel.inst.currentFazeEffectId = t.fazeEffectId, FashionModel.inst.clothingEffectId = t.clothingEffectId, FashionModel.inst.ClothingMap.clear();
        for (const e in t.info)
          if (t.info.hasOwnProperty(e)) {
            const i = t.info[e];
            FashionModel.inst.ClothingMap.set(parseInt(e), i)
          } this.checkRedPoint()
      }
      onRetActClothing(t) {
        if (t.ret) {
          if (!FashionModel.inst.ClothingMap.has(t.clothingId)) {
            FashionModel.inst.ClothingMap.set(t.clothingId, t.info);
            const e = CfgfashionName.get(t.clothingId, !0);
