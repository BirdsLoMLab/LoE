// Fragment: skill_system_onConstruct_L358477.js
// Lines: 358477-358594 of bundle-beautified.js
// Categories: Skill System
// Keywords: skill_level
// Hit lines: 358478, 358481, 358494

      onConstruct() {
        this.openSubCom(this.skill_level), this.onInit(), this.onEvent()
      }
    };
  UIPlayerHero.UID = "ui://2qwwi3rvt4xw41", __decorateClass([UIController], UIPlayerHero.prototype, "haveHero", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "imgIcon", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "anima", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "anima2", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "anima3", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "imgHero", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "goHero", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "imgQuality", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "imgXd", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "imgXiyou", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "skill_level", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "imgNameBg", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "txtHeroName", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "starList", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "txtLv", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "txtBarrier", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "goLock", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "imgFollow_txt", 2), __decorateClass([UIProperty], UIPlayerHero.prototype, "imgFollow", 2);
  var PlayerHero = class extends UIPlayerHero {
      constructor() {
        super(), this.animaMap = new Map
      }
      onInit() {
        super.onInit(), this._spiritData = null, this._curStar = 0
      }
      onShow() {
        this.creatList(this.starList, this._onStarRender, null, null, !1)
      }
      setData(t, e) {
        if (this.imgXiyou.visible = !1, this.imgFollow.visible = !1, null == t) return;
        switch (this.imgFollow.visible = e <= 3, this._spiritData = t, this.skill_level.star = t.shentongLevel, this._curStar = HeroModel.inst.getHeroStar(t), this.haveHero.selectedIndex = 1, this.setTexture(this.imgHero, HeroModel.inst.getHeroQSpineName(t.spiritId, t), "HeroQ"), this.setImage(this.imgQuality, HeroModel.inst.getFlairIconName(t.spiritId), "Hero"), this.txtHeroName.text = HeroModel.inst.getHeroName(t.spiritId), this.starList.numItems = (this._curStar - 1) % 5 + 1, this.imgXiyou.visible = 2 == HeroModel.inst.getHeroRare(t.spiritId), this.imgXd.visible = 3 == HeroModel.inst.getHeroRare(t.spiritId), HeroModel.inst.getHeroFlair(t.spiritId)) {
          case 4:
            this.animaMap.has(this.anima) || this.animaMap.set(this.anima, this.getGif(this.anima, "Hero_anima")), this.anima.visible = !0;
            break;
          case 5:
            this.animaMap.has(this.anima2) || this.animaMap.set(this.anima2, this.getGif(this.anima2, "Hero_anima2")), this.anima2.visible = !0;
            break;
          case 6:
            this.animaMap.has(this.anima3) || this.animaMap.set(this.anima3, this.getGif(this.anima3, "Hero_anima3")), this.anima3.visible = !0
        }
        this.txtLv.text = `${ToolUtil.chinese(2082)}${t.level}`
      }
      _onStarRender(t, e) {
        e.setImage(e.starIcon, HeroModel.inst.getStarImgName(t, this._curStar), "Common")
      }
    },
    import_proto428 = __toESM(require_proto()),
    UIPlayerInfoColumn = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Player"
      }
      onConstruct() {
        this.openSubCom(this.playerAvatar), this.openSubCom(this.rp), this.btn_id_copy.onClick(this, this.onClickAll, [this.btn_id_copy]), this.btnRename.onClick(this, this.onClickAll, [this.btnRename]), this.btn_help.onClick(this, this.onClickAll, [this.btn_help]), this.btnDetails.onClick(this, this.onClickAll, [this.btnDetails]), this.openSubCom(this.serverItem), this.onInit(), this.onEvent()
      }
    };
  UIPlayerInfoColumn.UID = "ui://2qwwi3rvj9wb4e", __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "playerAvatar", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "rp", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtUID", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "btn_id_copy", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtName", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "btnRename", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtGender", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtCareer", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtLeadLevel", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtFamily", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtServer", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "btn_help", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "goServer", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtXianYuan", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "txtPower", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "btnDetails", 2), __decorateClass([UIProperty], UIPlayerInfoColumn.prototype, "serverItem", 2);
  var PlayerInfoColumn = class extends UIPlayerInfoColumn {
      constructor() {
        super(), this._playerInfo = null
      }
      onInit() {
        super.onInit(), this.bindRedPoint(this.rp, 331)
      }
      onShow() {
        this.setImage(this.playerAvatar.empty_change, "xl_img_shuaxin", "Common")
      }
      onEvent() {
        this.addEvent(MsgName.Player_Info_Rename, this._updateName)
      }
      onClickAll(t) {
        var e;
        if (t == this.btnRename) {
          let t = import_proto428.default.openfunc.OpenFuncID.CHANGE_NAME;
          OpenFuncModel.inst.isFuncOpen(t, !0) && UIManager.inst.open(PlayerRenameView.UID)
        } else if (t == this.btnDetails) {
          if (!LoginCtrl.inst.isSamServer(this._playerInfo.zoneid, !0)) return;
          UIManager.inst.open(CharacterAttrDetailView.UID, null, {
            isLocal: !0
          })
        } else t == this.btn_id_copy ? (SdkMgr.copytxt(null == (e = this._playerInfo.basicInfo) ? void 0 : e.uid), UIManager.inst.openMsg(ToolUtil.chinese(11531))) : t == this.btn_help && (this.serverItem.visible = !0, fgui.GRoot.inst.showPopup(this.serverItem, this.goServer, fgui.PopupDirection.Up, !0))
      }
      _updateName() {
        this._playerInfo.basicInfo.name = CoreMapCtrl.inst.getCharacterName(), this.txtName.text = this._playerInfo.basicInfo.name
      }
      _updateInfo() {
        var t;
        let e = LoginCtrl.inst.getSeverNameById(this._playerInfo.zoneid),
          i = "";
        TimerMgr.inst.showCountry && (i = LoginCtrl.inst.getCountry(this._playerInfo.zoneid, this._playerInfo.countryId)), this.txtServer.text = StringUtil.format(ToolUtil.chinese(1978), e, i), this.txtCareer.setVar("career", null != (t = CfgUtil.getCareerName(this._playerInfo.basicInfo.career, this._playerInfo.basicInfo.gender)) ? t : ToolUtil.chinese(1049)), this.txtUID.setVar("uid", this._playerInfo.basicInfo.uid), this.txtGender.setVar("gender", 1 == this._playerInfo.basicInfo.gender ? ToolUtil.chinese(1979) : ToolUtil.chinese(1980));
        let s = LeadLevelModel.inst.getCurRealmName();
        this.txtLeadLevel.text = StringUtil.format(ToolUtil.chinese(130045), s);
        let o = ChatModel.inst.getSeptName(this._playerInfo.basicInfo.charId, this._playerInfo.familyName);
        this.txtFamily.setVar("family", null != o ? o : ToolUtil.chinese(1049)), this.txtPower.text = this._playerInfo.CombatEffective ? StringUtil.numberFormat(this._playerInfo.CombatEffective) : ToolUtil.chinese(1981), this.txtXianYuan.setVar("val", StringUtil.isNullOrEmpty(this._playerInfo.partnerName) ? ToolUtil.chinese(3988) : this._playerInfo.partnerName), this._updateName();
        const n = LoginCtrl.inst.zoneid,
          r = LoginCtrl.inst.loginZoneid;
        if (this.btn_help.visible = n > 0 && r > 0 && r != n, this.btn_help.visible) {
          let t = "",
            e = "";
          TimerMgr.inst.showCountry && (t = LoginCtrl.inst.getCountry(r, this._playerInfo.countryId), e = LoginCtrl.inst.getCountry(n, this._playerInfo.countryId));
          const i = StringUtil.format("{0}{1}", LoginCtrl.inst.getSeverNameById(r), t),
            s = StringUtil.format("{0}{1}", LoginCtrl.inst.getSeverNameById(n), e);
          this.serverItem.setServerName(i, s)
        }
      }
      setPlayerInfo(t) {
        this._playerInfo = t, this.playerAvatar.setData(t.basicInfo), this.playerAvatar.setClickFunction(this, (() => {
          UIManager.inst.open(PlayerHeadDecorationView.UID)
        }), null), this._updateInfo()
      }
    },
    import_proto429 = __toESM(require_proto()),
    UIPlayerInfoTab = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Player"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIPlayerInfoTab.UID = "ui://2qwwi3rvo4xwmh", __decorateClass([UIProperty], UIPlayerInfoTab.prototype, "func_list", 2);
  var _UIPlayerQieHuanYuYanView = class t extends BaseView {
    constructor() {
      super(), this.uid = t.UID, this.pkgName = "PlayerQieHuan", this.name = "PlayerQieHuanYuYanView"
    }
    onInit() {
      this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose])
    }
  };
  _UIPlayerQieHuanYuYanView.UID = "ui://4nmnkgyotmdknk", __decorateClass([UIProperty], _UIPlayerQieHuanYuYanView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIPlayerQieHuanYuYanView.prototype, "list", 2), __decorateClass([UIProperty], _UIPlayerQieHuanYuYanView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIPlayerQieHuanYuYanView.prototype, "fixHeight", 2);
  var UIPlayerQieHuanYuYanView = _UIPlayerQieHuanYuYanView,
    PlayerQieHuanYuYanView = class extends UIPlayerQieHuanYuYanView {
