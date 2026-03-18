// Fragment: class_system_l_L401771.js
// Lines: 401771-401878 of bundle-beautified.js
// Categories: Class System, Skill System
// Keywords: element_type, skill_id
// Hit lines: 401771, 401776, 401777, 401778

            const l = CfgskillDecData.get(a[0].skill_id, !0);
            this.imgIcon_di.visible = !0, this.imgIcon.visible = !0, this.imgIcon.setData(1, null == l ? void 0 : l.icon), this.imgIcon_di.setData(2, null == l ? void 0 : l.icon), this.c2.selectedIndex = 4 == r.get(c[0]) ? 1 : 0, this.txtName.text = ToolUtil.chinese(null == (e = a[0]) ? void 0 : e.name);
            break;
          case 2:
            let h = YiShouYCCtrl.inst.getSkillArr(c, 2, YiShouYCModel.inst.followElementLevel);
            this.elementArr[0] != h[0].element_type && h.reverse();
            const u = CfgskillDecData.get(null == (i = h[0]) ? void 0 : i.skill_id, !0),
              p = CfgskillDecData.get(null == (s = h[1]) ? void 0 : s.skill_id, !0);
            this.imgIcon_di.visible = !0, this.imgIcon.visible = !0, this.line.visible = !0, this.imgIcon.setData(1, null == u ? void 0 : u.icon), this.imgIcon_di.setData(2, null == p ? void 0 : p.icon), this.c2.selectedIndex = 0, this.txtName.text = StringUtil.format("{0} {1}", ToolUtil.chinese(null == (o = h[0]) ? void 0 : o.name), ToolUtil.chinese(null == (n = h[1]) ? void 0 : n.name))
        }
        this.txtLv.text = YiShouYCModel.inst.followElementLevel.toString() + ToolUtil.chinese(1381), this.nameGroup.visible = this.showName, this.list_yuansu.visible = this.showName, t ? this.bindRedPoint(this.redPoint, 572) : this.bindRedPoint(this.redPoint, 573)
      }
      _onShowItemRender(t, e) {
        e.setData(this.elementArr[t])
      }
      onClickAll(t) {}
    },
    _Cfgpet_tupu_award = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgpet_tupu_award.JsonName = "pet_tupu_award.json";
  var Cfgpet_tupu_award = _Cfgpet_tupu_award,
    UIYiShouYCAtlasItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YiShouYCAtlas"
      }
      onConstruct() {
        this.openSubCom(this.maskItem), this.openSubCom(this.goAward), this.btnItem.onClick(this, this.onClickAll, [this.btnItem]), this.openSubCom(this.redPoint), this.openSubCom(this.daishu), this.onInit(), this.onEvent()
      }
    };
  UIYiShouYCAtlasItem.UID = "ui://heybpntrj07t3", __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "imgKaPai", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "maskItem", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "img_yuansu_di", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "img_yuansu", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "txtName", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "img_weiyongyou", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "goAward", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "btnItem", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "redPoint", 2), __decorateClass([UIProperty], UIYiShouYCAtlasItem.prototype, "daishu", 2);
  var YiShouYCAtlasItem = class extends UIYiShouYCAtlasItem {
      constructor() {
        super(), this.realGet = !1
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        this.petDaiInfo = t;
        let e = YiShouYCCtrl.inst.isHavePetPhoto(t.cfgPet.id, this.petDaiInfo.dai),
          i = YiShouYCCtrl.inst.isHavePetPhotoAward(t.cfgPet.id, this.petDaiInfo.dai);
        this.realGet = i;
        let s = e;
        this.goAward.visible = this.realGet, this.redPoint.setDotVisible(this.realGet), this.txtName.text = ToolUtil.chinese(t.cfgPet.name), this.setImage(this.maskItem.imgHero, "common_img_pinzhi0" + t.cfgPet.quality, "Common");
        let o = t.cfgPet.head.replace("ys_", "tp_");
        if (this.daishu.visible = !0, this.daishu.txtLv.text = this.petDaiInfo.dai.toString(), this.setTexture(this.maskItem.imgHeroQ, o, "HeadIcon"), this.maskItem.imgHeroQ.grayed = !s, this.setImage(this.imgKaPai, "ys_img_kapai_" + t.cfgPet.quality, "YiShouYCAtlas"), this.setImage(this.img_yuansu_di, "ys_img_kapai_d" + t.cfgPet.quality, "YiShouYCAtlas"), this.setImage(this.img_yuansu, "gf_img_yuansu" + t.cfgPet.element, "Common"), this.img_weiyongyou.visible = !s, this.realGet) {
          let e = Cfgpet_tupu_award.get();
          for (let i of e)
            if (i.generation == this.petDaiInfo.dai && i.quality == t.cfgPet.quality && i.award.length > 0) {
              this.goAward.txtNum.text = i.award[0][1].toString();
              const t = CfgitemBase.get(i.award[0][0]);
              t && this.setTexture(this.goAward.imgIcon, t.icon, "ItemIcon");
              break
            }
        }
      }
      onClickAll(t) {
        var e, i;
        if (t == this.btnItem)
          if (this.realGet) {
            let t = null == (e = this.petDaiInfo.cfgPet) ? void 0 : e.id;
            this.petDaiInfo.dai > 1 && (t = 100 * (null == (i = this.petDaiInfo.cfgPet) ? void 0 : i.id) + this.petDaiInfo.dai), YiShouYCCtrl.inst.ReqPetAwardPhoto([t])
          } else UIManager.inst.open(YiShouYCInforView.UID, null, this.petDaiInfo.cfgPet, this.petDaiInfo.dai)
      }
    },
    UIYiShouYCAtlasMask = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YiShouYCAtlas"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIYiShouYCAtlasMask.UID = "ui://heybpntrj07t7", __decorateClass([UIProperty], UIYiShouYCAtlasMask.prototype, "imgHero", 2), __decorateClass([UIProperty], UIYiShouYCAtlasMask.prototype, "imgHeroQ", 2);
  var YiShouYCAtlasMask = class extends UIYiShouYCAtlasMask {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIYiShouYCGoAward = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YiShouYCAtlas"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIYiShouYCGoAward.UID = "ui://heybpntrj07t8", __decorateClass([UIProperty], UIYiShouYCGoAward.prototype, "imgKaPai", 2), __decorateClass([UIProperty], UIYiShouYCGoAward.prototype, "imgIcon", 2), __decorateClass([UIProperty], UIYiShouYCGoAward.prototype, "txtNum", 2);
  var YiShouYCGoAward = class extends UIYiShouYCGoAward {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIBtnYiShouYCFollow = class extends BaseButton {
