// Fragment: equipment_t_L41492.js
// Lines: 41492-41594 of bundle-beautified.js
// Categories: Equipment
// Keywords: relic
// Hit lines: 41494

            var t = {},
              e = Object.create(t);
            return e[t[0] = "NONE_PACK"] = 0, e[t[1] = "ITEM"] = 1, e[t[2] = "EQUIPMENT"] = 2, e[t[3] = "MATERIALS"] = 3, e[t[4] = "EQUIP_PACK"] = 4, e[t[5] = "MARTIAL"] = 5, e[t[7] = "EQUIP_CRAFTING_PACK"] = 7, e[t[8] = "PUPPET"] = 8, e[t[9] = "RELIC"] = 9, e[t[10] = "PRE_COST"] = 10, e[t[11] = "FAXIANG_EQUIP_BAG"] = 11, e[t[12] = "FAXIANG_EQUIP_WEAR"] = 12, e[t[13] = "FAXIANG_GEM"] = 13, e[t[101] = "LIANQILU_HUANHUA"] = 101, e
          }(), Vt.UseType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "NONE_TYPE"] = 0, e[t[1] = "NORMAL_TYPE"] = 1, e[t[2] = "SPLIT_TYPE"] = 2, e[t[3] = "SELL_TYPE"] = 3, e
          }(), Vt.AwardType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "NONE_AWARD"] = 0, e[t[1] = "ITEM_AWARD"] = 1, e[t[2] = "EQUIP_AWARD"] = 2, e[t[3] = "CARD_AWARD"] = 3, e[t[4] = "SKILL_AWARD"] = 4, e
          }(), Vt.DropAwardType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "DropAwardType_Normal"] = 0, e[t[1] = "DropAwardType_Rare"] = 1, e
          }(), Vt.UiType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "NORMAL_UITYEP"] = 0, e[t[1] = "BARRIER_UITYPE"] = 1, e[t[2] = "LOTTERY_UITYPE"] = 2, e[t[3] = "LOTTERY_BOX_UITYPE"] = 3, e[t[4] = "LOTTERY_SENIOR_UITYPE"] = 4, e[t[5] = "STAGE_CHAPTER_UITYPE"] = 5, e[t[6] = "STAGE_CHAPTER_BOX_UITYPE"] = 6, e[t[7] = "STAGE_CHAPTER_STAR_UITYPE"] = 7, e[t[8] = "STAGE_CHAPTER_UITYPE_SUB"] = 8, e[t[9] = "PVE_MOP_UP_UITYPE"] = 9, e[t[10] = "LOTTERY_HERO"] = 10, e[t[11] = "EQUIP_DECOMPOSE"] = 11, e[t[12] = "TURNTABLE"] = 12, e[t[13] = "FESTIVAL_TURNTABLE"] = 13, e[t[14] = "ESCORT_REWARD"] = 14, e[t[15] = "LIMIT_LOTTERY"] = 15, e[t[16] = "XINGKONG_LOTTERY"] = 16, e[t[17] = "DADI_TURNTABLE"] = 17, e[t[18] = "FAXIANG_EQUIP_DECOMPOSE"] = 18, e[t[19] = "SPRING_FESTIVAL_TIGER"] = 19, e[t[20] = "SPRING_FESTIVAL_TURNTABLE"] = 20, e[t[21] = "TOWER_COPY_LEIZHU"] = 21, e[t[22] = "SERVER_COMBINE_TURNTABLE"] = 22, e[t[23] = "SERVER_COMBINE_JACKPOT"] = 23, e[t[24] = "COMMON_LOTTERY"] = 24, e[t[25] = "CUT_TREE_LOTTERY"] = 25, e[t[1001] = "NAILONG_LOTTERY"] = 1001, e
          }(), Vt.PackInfo = function() {
            function t(t) {
              if (this.items = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.type = 0, t.prototype.size = 0, t.prototype.maxsize = 0, t.prototype.items = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(8).int32(t.type), null != t.size && Object.hasOwnProperty.call(t, "size") && e.uint32(16).uint32(t.size), null != t.maxsize && Object.hasOwnProperty.call(t, "maxsize") && e.uint32(24).uint32(t.maxsize), null != t.items && Object.hasOwnProperty.call(t, "items"))
                for (var i = Object.keys(t.items), s = 0; s < i.length; ++s) e.uint32(34).fork().uint32(8).uint64(i[s]), Ke.db.Item.encode(t.items[i[s]], e.uint32(18).fork()).ldelim().ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.packs.PackInfo; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.type = t.int32();
                    break;
                  case 2:
                    n.size = t.uint32();
                    break;
                  case 3:
                    n.maxsize = t.uint32();
                    break;
                  case 4:
                    n.items === ze.emptyObject && (n.items = {});
                    var a = t.uint32() + t.pos;
                    for (i = 0, s = null; t.pos < a;) {
                      var l = t.uint32();
                      switch (l >>> 3) {
                        case 1:
                          i = t.uint64();
                          break;
                        case 2:
                          s = Ke.db.Item.decode(t, t.uint32());
                          break;
                        default:
                          t.skipType(7 & l)
                      }
                    }
                    n.items["object" == typeof i ? ze.longToHash(i) : i] = s;
                    break;
                  default:
                    t.skipType(7 & r)
                }
              }
              return n
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/packs.PackInfo"
            }, t
          }(), Vt.PacksInfo = function() {
            function t(t) {
              if (this.packList = [], this.oweItems = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.copyId = 0, t.prototype.mainpack = null, t.prototype.storepack = null, t.prototype.spiritpack = null, t.prototype.equippack = null, t.prototype.packList = ze.emptyArray, t.prototype.oweItems = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.copyId && Object.hasOwnProperty.call(t, "copyId") && e.uint32(8).uint32(t.copyId), null != t.mainpack && Object.hasOwnProperty.call(t, "mainpack") && Ke.packs.PackInfo.encode(t.mainpack, e.uint32(18).fork()).ldelim(), null != t.storepack && Object.hasOwnProperty.call(t, "storepack") && Ke.packs.PackInfo.encode(t.storepack, e.uint32(26).fork()).ldelim(), null != t.spiritpack && Object.hasOwnProperty.call(t, "spiritpack") && Ke.packs.PackInfo.encode(t.spiritpack, e.uint32(34).fork()).ldelim(), null != t.equippack && Object.hasOwnProperty.call(t, "equippack") && Ke.packs.PackInfo.encode(t.equippack, e.uint32(42).fork()).ldelim(), null != t.packList && t.packList.length)
                for (var i = 0; i < t.packList.length; ++i) Ke.packs.PackInfo.encode(t.packList[i], e.uint32(50).fork()).ldelim();
              if (null != t.oweItems && Object.hasOwnProperty.call(t, "oweItems")) {
                var s = Object.keys(t.oweItems);
                for (i = 0; i < s.length; ++i) e.uint32(58).fork().uint32(8).uint32(s[i]).uint32(16).uint32(t.oweItems[s[i]]).ldelim()
              }
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.packs.PacksInfo; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.copyId = t.uint32();
                    break;
                  case 2:
                    n.mainpack = Ke.packs.PackInfo.decode(t, t.uint32());
                    break;
                  case 3:
                    n.storepack = Ke.packs.PackInfo.decode(t, t.uint32());
                    break;
                  case 4:
                    n.spiritpack = Ke.packs.PackInfo.decode(t, t.uint32());
                    break;
                  case 5:
                    n.equippack = Ke.packs.PackInfo.decode(t, t.uint32());
                    break;
                  case 6:
                    n.packList && n.packList.length || (n.packList = []), n.packList.push(Ke.packs.PackInfo.decode(t, t.uint32()));
