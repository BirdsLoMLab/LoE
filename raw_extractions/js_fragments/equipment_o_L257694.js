// Fragment: equipment_o_L257694.js
// Lines: 257694-257797 of bundle-beautified.js
// Categories: Equipment
// Keywords: mount
// Hit lines: 257697

                let o = new SkillCdData2(i);
                UIManager.inst.open(SkillCdKeyPreviewView.UID, null, o, !0, s);
                break;
              case ItemSubType.Material.Mount:
                UIManager.inst.open(MountInforView.UID, null, t);
                break;
              case ItemSubType.Material.WeaponStar:
                UIManager.inst.open(HeroImmortalsInforView.UID, null, t);
                break;
              case ItemSubType.Material.MethodExercises:
                UIManager.inst.open(MethodExercisesInforView.UID, null, t);
                break;
              case ItemSubType.Material.Mount_TianCi_Skin:
                UIManager.inst.open(DaoJuTeShuTipsView.UID, null, t);
                break;
              default:
                this.openItemTipView(t, e, s)
            }
            break;
          case 14:
            a == ItemSubType.Qiling.Item || a == ItemSubType.Qiling.Skin || a == ItemSubType.Qiling.Wake ? UIManager.inst.open(QiLingInforView.UID, null, t) : this.openItemTipView(t, e, s);
            break;
          case 10:
            switch (a) {
              case ItemSubType.Fashion.Faze:
                UIManager.inst.open(FashionFaZeInforView.UID, null, t);
                break;
              case ItemSubType.Fashion.XianQi:
                UIManager.inst.open(FashionXianQiInforView.UID, null, t);
                break;
              case ItemSubType.Fashion.TianCi:
                UIManager.inst.open(FashionTianCiInforView.UID, null, t);
                break;
              default:
                UIManager.inst.open(FashionInforView.UID, null, t)
            }
            break;
          case 5:
            UIManager.inst.open(HeroDetailInforView.UID, null, t);
            break;
          case 13:
            UIManager.inst.open(TreasureInforView.UID, null, t);
            break;
          case 25:
            a == ItemSubType.GodFriend.Item ? UIManager.inst.open(XianYouTipsView.UID, null, t) : a == ItemSubType.GodFriend.Skin ? UIManager.inst.open(XianYouSkinTipView.UID, null, t) : this.openItemTipView(t, e, s);
            break;
          case 28:
            UIManager.inst.open(FaXiangInforView.UID, null, t);
            break;
          case 16:
            a == ItemSubType.Skin.Realm && UIManager.inst.open(LeadLevelSkinTipsView.UID, null, t);
            break;
          case 11:
            UIManager.inst.open(HonorInforView.UID, null, t);
            break;
          default:
            this.openItemTipView(t, e, s)
        } else UIManager.inst.open(TianJiaoDaoTuInforView.UID, null, t, e)
      }
      openItemTipView(t, e = !1, i) {
        UIManager.inst.open(ItemTipView.UID, null, t, e, i)
      }
      checkItemShowUseOrSell(t) {
        let e;
        return 0 != t.mainpack_type && (e = CfgbagBase.get(t.mainpack_type)), e && 1 == e.use_item_button ? [t.button.includes(2), t.button.includes(1)] : [!1, !1]
      }
      checkItemExistAward(t) {
        if (!t) return !1;
        const e = t.itemCfg;
        return 3 == e.type && (e.subtype == ItemSubType.GiftBag.SelectGet || e.subtype == ItemSubType.GiftBag.RandTreasure)
      }
      checkItemCanSendUse(t, e = !1, i = 0) {
        if (!t) return !1;
        if (null == t.itemId) return !1;
        let s = t.itemCfg;
        return !(s.skip && s.skip > 0) || (e && UIManager.inst.goto(s.skip), !1)
      }
      onBtnUseClick(e, i = 1) {
        if (!this.checkItemCanSendUse(e, !0, i)) return !1;
        let s = e.itemCfg;
        if (XingkongMainCtrl.inst.usePowerItem(s.id, i)) return !0;
        if (e.itemId == DiaoYuCtrl.inst.fishExchangeItem) {
          if (!(DiaoYuCtrl.inst.isActOpen() && !DiaoYuCtrl.inst.isActEnd())) return UIManager.inst.openMsg(ToolUtil.chinese(10396)), !1
        }
        return t.inst.getItemNum(e.itemId) > 0 ? this.sendUseItemProto(s, i) : UIManager.inst.openMsg(this.getItemNoEnoughMsg(e.itemId)), !0
      }
      sendUseItemProto(t, e) {
        const i = this.getItemOfPackType(t),
          s = import_proto296.default.packs.UseType;
        BagCtrl.inst.send_useItems(i, s.NORMAL_TYPE, t.id, e)
      }
      onBtnSellClick(t, e) {
        if (!t) return !1;
        if (null == t.itemId) return !1;
        let i = t.itemCfg;
        const s = this.getItemOfPackType(i),
          o = import_proto296.default.packs.UseType,
          n = new import_proto296.default.packs.UseItemsExtraData;
        n.thisidMap = {}, n.thisidMap[t.thisid.toString()] = e, BagCtrl.inst.send_useItems(s, o.SELL_TYPE, t.itemId, e, n)
      }
      onGiftBagUseClick(t, e, i) {
        const s = this.getItemOfPackType(t.itemId),
          o = import_proto296.default.packs.UseType,
          n = new import_proto296.default.packs.UseItemsExtraData;
