// Fragment: gacha_draw_super_L386546.js
// Lines: 386546-386746 of bundle-beautified.js
// Categories: Gacha/Draw
// Keywords: wish
// Hit lines: 386546, 386576, 386606, 386625, 386644, 386658, 386673

        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.openSubCom(this.itemIcon), this.onInit(), this.onEvent()
      }
    };
  UIWishGoodsIcon.UID = "ui://i97akwpojowk1i", __decorateClass([UIController], UIWishGoodsIcon.prototype, "c1", 2), __decorateClass([UIProperty], UIWishGoodsIcon.prototype, "itemIcon", 2), __decorateClass([UIProperty], UIWishGoodsIcon.prototype, "imgFrame", 2), __decorateClass([UIProperty], UIWishGoodsIcon.prototype, "txt_num", 2);
  var WishGoodsIcon = class extends UIWishGoodsIcon {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.ctrl = WishCtrl.inst
      }
      onShow() {}
      setData(t) {
        this.cfg = t, this.txt_num.text = `${t.num}`, this.itemIcon.setData(ItemUtil.createDataById(t.reward[0], t.reward[1])), this.isGet = t.id <= this.model.info.awardId, this.c1.selectedIndex = this.isGet ? 1 : 0, this.itemIcon.loadEffect = this.canGet, this.canGet ? this.itemIcon.setCustomClick((() => {
          this.canGet && this.ctrl.ReqGetWeaponWishTask()
        })) : this.itemIcon.setCustomClick(null)
      }
      get canGet() {
        return !this.isGet && this.model.info.costNum >= this.cfg.num
      }
      get hasGet() {
        return this.isGet
      }
      onClickAll(t) {}
    },
    UIWishGoodsIconDaJiang = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.openSubCom(this.itemIcon), this.onInit(), this.onEvent()
      }
    };
  UIWishGoodsIconDaJiang.UID = "ui://i97akwpop9dt1z", __decorateClass([UIController], UIWishGoodsIconDaJiang.prototype, "c1", 2), __decorateClass([UIProperty], UIWishGoodsIconDaJiang.prototype, "itemIcon", 2), __decorateClass([UIProperty], UIWishGoodsIconDaJiang.prototype, "imgFrame", 2), __decorateClass([UIProperty], UIWishGoodsIconDaJiang.prototype, "txt_num", 2);
  var WishGoodsIconDaJiang = class extends UIWishGoodsIconDaJiang {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.ctrl = WishCtrl.inst
      }
      onShow() {}
      setData(t) {
        this.cfg = t, this.txt_num.text = `${t.num}`, this.itemIcon.setData(ItemUtil.createDataById(t.reward[0], t.reward[1])), this.isGet = t.id <= this.model.info.awardId, this.c1.selectedIndex = this.isGet ? 1 : 0, this.itemIcon.numText = `${t.reward[1]}`, this.itemIcon.loadEffect = this.canGet, this.canGet ? this.itemIcon.setCustomClick((() => {
          this.canGet && this.ctrl.ReqGetWeaponWishTask()
        })) : this.itemIcon.setCustomClick(null)
      }
      get canGet() {
        return !this.isGet && this.model.info.costNum >= this.cfg.num
      }
      get hasGet() {
        return this.isGet
      }
      onClickAll(t) {}
    },
    UIWishHengFu = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIWishHengFu.UID = "ui://i97akwpoo0xl20", __decorateClass([UIController], UIWishHengFu.prototype, "c1", 2), __decorateClass([UITransition], UIWishHengFu.prototype, "t0", 2);
  var WishHengFu = class extends UIWishHengFu {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      onClickAll(t) {}
    },
    UIWishPuTongJiang = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.btnImgKuang.onClick(this, this.onClickAll, [this.btnImgKuang]), this.openSubCom(this.goEff), this.onInit(), this.onEvent()
      }
    };
  UIWishPuTongJiang.UID = "ui://i97akwpojowk1d", __decorateClass([UIProperty], UIWishPuTongJiang.prototype, "btnImgKuang", 2), __decorateClass([UIProperty], UIWishPuTongJiang.prototype, "goSelect", 2), __decorateClass([UIProperty], UIWishPuTongJiang.prototype, "img_icon", 2), __decorateClass([UIProperty], UIWishPuTongJiang.prototype, "imgJingJi", 2), __decorateClass([UIProperty], UIWishPuTongJiang.prototype, "txt_num", 2), __decorateClass([UIProperty], UIWishPuTongJiang.prototype, "goEff", 2);
  var WishPuTongJiang = class extends UIWishPuTongJiang {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.ctrl = WishCtrl.inst
      }
      onShow() {}
      setData(t, e = !1) {
        this.rewards = t;
        let i = t[0],
          s = CfgitemBase.get(i);
        this.txt_num.text = `${t[1]}`, this.setTexture(this.img_icon, s.icon, "ItemIcon"), this.setImage(this.btnImgKuang, `hdmb_img_pzx_${s.quality}`, "Wish"), this.imgJingJi.visible = e
      }
      set selected(t) {
        this.goSelect.visible = t
      }
      get itemId() {
        return this.rewards[0]
      }
      onClickAll(t) {
        t == this.btnImgKuang && ItemCtrl.inst.openItemTipsByData(ItemUtil.createDataById(this.rewards[0], this.rewards[1]))
      }
    },
    UIWishRewardBox = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Wish"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIWishRewardBox.UID = "ui://i97akwpojowk1j", __decorateClass([UIProperty], UIWishRewardBox.prototype, "bar", 2), __decorateClass([UIProperty], UIWishRewardBox.prototype, "list", 2);
  var WishRewardBox = class extends UIWishRewardBox {
      constructor() {
        super(), this.sval = 0, this.getIdx = -1
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.ctrl = WishCtrl.inst, this.creatList(this.list, this.onItemRenderer, this.onItemProvider, null, !1)
      }
      onItemProvider(t) {
        return t == this.timesCfgs.length - 1 ? "ui://Wish/WishGoodsIconDaJiang" : this.list.defaultItem
      }
      onItemRenderer(t, e) {
        let i = this.timesCfgs[t];
        e.setData(i), i.id <= this.model.info.awardId && (this.sval += 1), -1 == this.getIdx && (!e.canGet && e.hasGet || (this.getIdx = t)), e.y = t == this.timesCfgs.length - 1 ? -26 : 0
      }
      onEvent() {
        this.addEvent(MsgName.Wish_Get_Progress, this.setData, this)
      }
      onShow() {}
      setData() {
        this.getIdx = -1, this.sval = 0, this.timesCfgs = Cfgwish_times.get({
          times_id: this.model.cfg.times_id
        });
        let t = this.timesCfgs.length;
        this.list.numItems = t, this.list.resizeToFit(), this.bar.value = 100 * this.sval / t, this.scrollPane.posX = 0 == this.getIdx ? 0 : 98 + 140 * this.getIdx
      }
      onClickAll(t) {}
    },
    UIWishJiangChiBox = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "WishJiangChiYuLan"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIWishJiangChiBox.UID = "ui://jg8wwq64kffc8", __decorateClass([UIProperty], UIWishJiangChiBox.prototype, "txt_title", 2), __decorateClass([UIProperty], UIWishJiangChiBox.prototype, "list", 2);
  var WishJiangChiBox = class extends UIWishJiangChiBox {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.model = WishModel.inst, this.creatList(this.list, this.onItemRenderer)
      }
      onItemRenderer(t, e) {
        e.setData(this.rewards[t])
      }
      onShow() {}
      setData(t, e) {
        this.txt_title.setVar("val", StringUtil.num2Chinese(t + 1));
        let i = e.reward;
        if (3 == t && 1 == e.is_select) {
          if (0 != this.model.info.choiceAward) return i = this.model.info.choiceAward, this.rewards = [
            [i, 1, 0, 1e4]
          ], this.list.numItems = this.rewards.length, void this.list.resizeToFit();
          i = Cfgwish_pool.get({
            pool_id: e.pool_id,
            level: 1,
            floor: 4
          })[0].reward
        }
        let s = Cfgwish_reward.get(i);
        this.rewards = s.reward, this.list.numItems = this.rewards.length, this.list.resizeToFit()
      }
      onClickAll(t) {}
    },
    UIWIshJiangChiGoodsItem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "WishJiangChiYuLan"
      }
      onConstruct() {
        this.openSubCom(this.itemicon), this.onInit(), this.onEvent()
      }
    };
  UIWIshJiangChiGoodsItem.UID = "ui://jg8wwq64kffc6", __decorateClass([UIProperty], UIWIshJiangChiGoodsItem.prototype, "itemicon", 2), __decorateClass([UIProperty], UIWIshJiangChiGoodsItem.prototype, "txt_number", 2);
  var WIshJiangChiGoodsItem = class extends UIWIshJiangChiGoodsItem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
