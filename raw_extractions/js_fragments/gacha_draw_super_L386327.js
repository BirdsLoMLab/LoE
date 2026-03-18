// Fragment: gacha_draw_super_L386327.js
// Lines: 386327-386527 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: wish
// Hit lines: 386327, 386357, 386379, 386398, 386478, 386495, 386513

        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.openSubCom(this.redPoint), this.onInit(), this.onEvent()
      }
    };
  UIBtnWishBaoXiang.UID = "ui://i97akwpojowkg", __decorateClass([UIProperty], UIBtnWishBaoXiang.prototype, "baoXiangBg", 2), __decorateClass([UIProperty], UIBtnWishBaoXiang.prototype, "img_icon", 2), __decorateClass([UIProperty], UIBtnWishBaoXiang.prototype, "redPoint", 2), __decorateClass([UIProperty], UIBtnWishBaoXiang.prototype, "txt_num", 2);
  var BtnWishBaoXiang = class extends UIBtnWishBaoXiang {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.ctrl = WishCtrl.inst
      }
      onShow() {}
      setData() {
        let t = null,
          e = Cfgwish_times.get({
            times_id: this.model.cfg.times_id
          });
        for (let i = 0; i < e.length; i++)
          if (e[i].num >= this.model.info.costNum && e[i].id > this.model.info.awardId) {
            t = e[i];
            break
          } null == t && (t = e[e.length - 1]), this.txt_num.text = `${this.model.info.costNum}/${t.num}`, this.bindRedPoint(this.redPoint, 431), this.baoXiangBg.visible = this.model.hasGetBaoXiang()
      }
      onClickAll(t) {}
    },
    UIWishBaoXiangReward = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.openSubCom(this.reward_box), this.onInit(), this.onEvent()
      }
    };
  UIWishBaoXiangReward.UID = "ui://i97akwpojowk1k", __decorateClass([UIProperty], UIWishBaoXiangReward.prototype, "txt_title", 2), __decorateClass([UIProperty], UIWishBaoXiangReward.prototype, "reward_box", 2);
  var WishBaoXiangReward = class extends UIWishBaoXiangReward {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData() {
        this.reward_box.setData()
      }
      onClickAll(t) {}
    },
    UIWishBaoXiang_Eff = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIWishBaoXiang_Eff.UID = "ui://i97akwpoum5r1s", __decorateClass([UITransition], UIWishBaoXiang_Eff.prototype, "t0", 2);
  var WishBaoXiang_Eff = class extends UIWishBaoXiang_Eff {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIWishDaJiang = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.btnImgIcon.onClick(this, this.onClickAll, [this.btnImgIcon]), this.btnImgChange2.onClick(this, this.onClickAll, [this.btnImgChange2]), this.btnImgChange.onClick(this, this.onClickAll, [this.btnImgChange]), this.onInit(), this.onEvent()
      }
    };
  UIWishDaJiang.UID = "ui://i97akwpojowk15", __decorateClass([UIController], UIWishDaJiang.prototype, "c1", 2), __decorateClass([UIProperty], UIWishDaJiang.prototype, "imgKuang", 2), __decorateClass([UIProperty], UIWishDaJiang.prototype, "btnImgIcon", 2), __decorateClass([UIProperty], UIWishDaJiang.prototype, "img_gif", 2), __decorateClass([UIProperty], UIWishDaJiang.prototype, "btnImgChange2", 2), __decorateClass([UIProperty], UIWishDaJiang.prototype, "btnImgChange", 2);
  var _UIWishZhongJiDaJiangView = class t extends BaseView {
    constructor() {
      super(), this.uid = t.UID, this.pkgName = "WishZhongJiDaJiang", this.name = "WishZhongJiDaJiangView"
    }
    onInit() {
      this.openSubCom(this.bg), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.itemIcon), this.openSubCom(this.btn_shoutu), this.btn_shoutu.onClick(this, this.onClickAll, [this.btn_shoutu])
    }
  };
  _UIWishZhongJiDaJiangView.UID = "ui://irngbovgjowk0", __decorateClass([UIController], _UIWishZhongJiDaJiangView.prototype, "c1", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "bg", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "txt_tips", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "itemIcon", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "imgQuality", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "txtName", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "btn_shoutu", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "list", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "txt_tiaojian", 2), __decorateClass([UIProperty], _UIWishZhongJiDaJiangView.prototype, "fixHeight", 2);
  var UIWishZhongJiDaJiangView = _UIWishZhongJiDaJiangView,
    WishZhongJiDaJiangView = class extends UIWishZhongJiDaJiangView {
      constructor() {
        super(), this.layer = "WindowFull", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.ctrl = WishCtrl.inst, this.creatList(this.list, this.onItemRenderer, null, this.onItemClick)
      }
      onItemRenderer(t, e) {
        let i = this.rewards[t],
          s = i[0];
        e.setData(ItemUtil.createDataById(s, i[1]), !0, !0), e.setCustomClick((() => {})), e.loadEffect = !1, e.imgIcon.visible = !1;
        let o = Cfgspirit_weapon_image.get({
          item_id: s
        });
        if (o.length > 0) {
          let t = o[0];
          e.iconAni = t.item_frame
        }
      }
      onItemClick(t, e) {
        this.selItem && (this.selItem.selected = !1), e.selected = !0, this.selItem = e, this.selectItem(this.rewards[t])
      }
      selectItem(t) {
        if (this.selReward == t) return;
        this.selReward = t;
        let e = t[0],
          i = t[1],
          s = CfgitemBase.get(e);
        this.txtName.text = ToolUtil.chinese(s.name), this.setImage(this.imgQuality, `fb_img_btd_${s.quality}`, "Common"), this.itemIcon.setData(ItemUtil.createDataById(e, i)), this.itemIcon.loadEffect = !1, this.itemIcon.imgIcon.visible = !1;
        let o = Cfgspirit_weapon_image.get({
          item_id: e
        });
        if (o.length > 0) {
          let t = o[0];
          this.itemIcon.iconAni = t.item_frame
        }
      }
      onShow() {
        let t = Cfgwish_reward.get(Number(this.args[0]));
        this.c1.selectedIndex = this.args[1] ? 0 : 1, this.rewards = t.reward, this.list.numItems = this.rewards.length, this.list.selectedIndex = 0, this.selectItem(this.rewards[0])
      }
      onClickAll(t) {
        t == this.btnClose || t == this.btn_shoutu && (this.dispatchEvent(MsgName.Wish_Choice_Award, this.selReward), this.ctrl.ReqChoiceAward(this.selReward[0])), this.close()
      }
    },
    WishDaJiang = class extends UIWishDaJiang {
      constructor() {
        super(), this._hasSelect = !1
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst
      }
      onShow() {}
      onEvent() {
        this.addEvent(MsgName.Wish_Choice_Award, this.updateIcon, this)
      }
      onHide() {
        this.recyleGif()
      }
      recyleGif() {
        this._iconGif = null, this._iconFrameName = null
      }
      setData(t) {
        if (this._hasSelect = !1, this.cfg = t, this.img_gif.visible = !1, this.setTexture(this.btnImgIcon, "", "ItemIcon"), this.setImage(this.imgKuang, "", "Wish"), this.isSelfSelect = 1 == t.is_select, this.c1.selectedIndex = 0, !this.isSelfSelect) {
          let e = Cfgwish_reward.get(t.reward);
          this.setIcon(e.reward[0][0])
        }
        this.updateIcon(), this.updateBtnImgChange()
      }
      updateBtnImgChange() {
        let t = Cfgwish_reward.get(this.cfg.reward);
        this.btnImgChange.visible = t.reward.length > 1
      }
      updateIcon() {
        this.setIcon(this.model.info.choiceAward)
      }
      setIcon(t) {
        if (0 == t) return void(this.isSelfSelect && (this.c1.selectedIndex = 0, this._hasSelect = !1));
        this.c1.selectedIndex = 1;
        let e = CfgitemBase.get(t);
        this.setImage(this.imgKuang, `hdmb_img_pzd_${e.quality}`, "Wish"), this._hasSelect = !0, this.selItemId = t;
        let i = Cfgspirit_weapon_image.get({
          item_id: t
        });
        if (i.length > 0) {
          let t = i[0];
          this.img_gif.visible = !0, this._iconFrameName != t.item_frame && (this._iconFrameName = t.item_frame, this._iconGif = this.getGif(this.img_gif, t.item_frame))
        } else this.setTexture(this.btnImgIcon, e.icon, "ItemIcon")
      }
      get hasSelect() {
        return this._hasSelect
      }
      onClickAll(t) {
        t == this.btnImgChange2 || t == this.btnImgChange ? UIManager.inst.open(WishZhongJiDaJiangView.UID, null, this.cfg.reward, 1 == this.cfg.is_select) : t == this.btnImgIcon && this._hasSelect && ItemCtrl.inst.openItemTipsById(this.selItemId)
      }
    },
    UIWishGoldValue = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.btnIcon.onClick(this, this.onClickAll, [this.btnIcon]), this.onInit(), this.onEvent()
      }
    };
  UIWishGoldValue.UID = "ui://i97akwpojowk16", __decorateClass([UIProperty], UIWishGoldValue.prototype, "txtGold", 2), __decorateClass([UIProperty], UIWishGoldValue.prototype, "imgIcon2", 2), __decorateClass([UIProperty], UIWishGoldValue.prototype, "btnIcon", 2);
  var WishGoldValue = class extends UIWishGoldValue {
      constructor() {
        super(), this._showAllNum = !1, this._countLimit = 0
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
