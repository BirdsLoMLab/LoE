// Fragment: gacha_draw_e_L399637.js
// Lines: 399637-399738 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: probability
// Hit lines: 399638

        let e = ItemUtil.createDataById(t.item[0][0], t.item[0][1]);
        this.itemIcon.setData(e, !0, !1), this.txtGaiLv.text = t.probability + "%"
      }
    },
    UIYaoShenYiJiTuJianListItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YaoShenYiJiTuJian"
      }
      onConstruct() {
        this.openSubCom(this.TuJian), this.onInit(), this.onEvent()
      }
    };
  UIYaoShenYiJiTuJianListItem.UID = "ui://vv0sd2seo8v31", __decorateClass([UIProperty], UIYaoShenYiJiTuJianListItem.prototype, "TuJian", 2), __decorateClass([UIProperty], UIYaoShenYiJiTuJianListItem.prototype, "list_reward", 2), __decorateClass([UIProperty], UIYaoShenYiJiTuJianListItem.prototype, "img_di", 2), __decorateClass([UIProperty], UIYaoShenYiJiTuJianListItem.prototype, "txt_name", 2), __decorateClass([UIProperty], UIYaoShenYiJiTuJianListItem.prototype, "txt_desc", 2);
  var YaoShenYiJiTuJianListItem = class extends UIYaoShenYiJiTuJianListItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.creatList(this.list_reward, this._onItemRender)
      }
      onShow() {}
      onClickAll(t) {}
      setData(t) {
        this.txt_name.text = ToolUtil.chinese(t.name), this.txt_desc.text = ToolUtil.chinese(t.desc), this.setImage(this.TuJian.img_kuang, "jjhb_img_btd_" + t.quality, "YaoShenYiJiTuJian"), this.setImage(this.img_di, "fb_img_btd_" + t.quality, "Common"), this.setTexture(this.TuJian.img_icon.img_icon, t.picture, "HalfImg"), this.rewardData = YaoShenYiJiModel.inst.getTuJianRewardDataByType(t.award_group), this.list_reward.numItems = this.rewardData.length
      }
      _onItemRender(t, e) {
        const i = e;
        let s = this.rewardData[t];
        i.setData(s)
      }
    },
    UIYaoShenYiJiTuJianMask = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YaoShenYiJiTuJian"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIYaoShenYiJiTuJianMask.UID = "ui://vv0sd2sev5b0m", __decorateClass([UIProperty], UIYaoShenYiJiTuJianMask.prototype, "img_icon", 2), __decorateClass([UIProperty], UIYaoShenYiJiTuJianMask.prototype, "zhezhao", 2);
  var YaoShenYiJiTuJianMask = class extends UIYaoShenYiJiTuJianMask {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIYaoShenYiJiZuDuiApplyItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YaoShenYiJiZuDui"
      }
      onConstruct() {
        this.openSubCom(this.avatar), this.btnOK.onClick(this, this.onClickAll, [this.btnOK]), this.btnRefuse.onClick(this, this.onClickAll, [this.btnRefuse]), this.onInit(), this.onEvent()
      }
    };
  UIYaoShenYiJiZuDuiApplyItem.UID = "ui://7e2eehy8npzw1p", __decorateClass([UIProperty], UIYaoShenYiJiZuDuiApplyItem.prototype, "avatar", 2), __decorateClass([UIProperty], UIYaoShenYiJiZuDuiApplyItem.prototype, "txtName", 2), __decorateClass([UIProperty], UIYaoShenYiJiZuDuiApplyItem.prototype, "txtNote", 2), __decorateClass([UIProperty], UIYaoShenYiJiZuDuiApplyItem.prototype, "btnOK", 2), __decorateClass([UIProperty], UIYaoShenYiJiZuDuiApplyItem.prototype, "btnRefuse", 2);
  var YaoShenYiJiZuDuiApplyItem = class extends UIYaoShenYiJiZuDuiApplyItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {
        t == this.btnOK || this.btnRefuse
      }
    },
    UIYaoShenYiJiZuDuiHead = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "YaoShenYiJiZuDui"
      }
      onConstruct() {
        this.openSubCom(this.playerAvatar2), this.onInit(), this.onEvent()
      }
    };
  UIYaoShenYiJiZuDuiHead.UID = "ui://7e2eehy8f07o1c", __decorateClass([UIController], UIYaoShenYiJiZuDuiHead.prototype, "c1", 2), __decorateClass([UIProperty], UIYaoShenYiJiZuDuiHead.prototype, "playerAvatar2", 2), __decorateClass([UIProperty], UIYaoShenYiJiZuDuiHead.prototype, "txtServer", 2), __decorateClass([UIProperty], UIYaoShenYiJiZuDuiHead.prototype, "txtName", 2), __decorateClass([UIProperty], UIYaoShenYiJiZuDuiHead.prototype, "goLeader", 2);
  var YaoShenYiJiZuDuiHead = class extends UIYaoShenYiJiZuDuiHead {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
      setData(t) {
        if (null == t) return this.c1.selectedIndex = 0, void(this.goLeader.visible = !1);
        this.playerAvatar2.setData({
          charId: t.charid,
          icon: t.show.icon,
          career: t.show.career,
          gender: t.show.gender
        });
        let e = LoginCtrl.inst.getSeverNameById(t.zoneid);
        this.txtServer.text = t.zoneid > 0 ? "[" + e + "]" : "", this.txtName.text = t.name, this.goLeader.visible = t.isLeader, this.c1.selectedIndex = 1
      }
    },
    UIYaoShenYiJiZuDuiItem = class extends BaseCom {
