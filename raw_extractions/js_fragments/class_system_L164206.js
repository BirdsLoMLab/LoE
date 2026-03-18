// Fragment: class_system_L164206.js
// Lines: 164206-164307 of bundle-beautified.js
// Categories: Class System, Skill System
// Keywords: element_type, skill_id
// Hit lines: 164206, 164207

                if (t && t.element_type == e.element && 4 == t.active_num) {
                  YiShouYCModel.inst.followPetActiveSkill = 1e4 * t.skill_id + 1e3 * SkillCtrl.inst.initQuality + t.level;
                  break
                }
              }
          }
        }
        SummonModSystem.updatePetSkill()
      }
      ReqPetIncubate(t, e) {
        let i = {};
        i.sysList = t, i.hybridList = e, NetManager.inst.send("pet.ReqPetIncubate", i)
      }
      ReqPetChangeName(t, e) {
        let i = {};
        i.uid = t, i.name = e, NetManager.inst.send("pet.ReqPetChangeName", i)
      }
      ReqPetUpLevel(t) {
        let e = {};
        e.pos = t, NetManager.inst.send("pet.ReqPetUpLevel", e)
      }
      ReqPetAwardPhoto(t) {
        let e = {};
        e.list = t, NetManager.inst.send("pet.ReqPetAwardPhoto", e)
      }
      ReqPetLock(t, e) {
        let i = {};
        i.uid = t, i.lock = e, NetManager.inst.send("pet.ReqPetLock", i)
      }
      ReqPetDecompose(t) {
        let e = {};
        e.uidList = t, NetManager.inst.send("pet.ReqPetDecompose", e)
      }
      ReqUpPet(t) {
        let e = {};
        e.slot = t, NetManager.inst.send("pet.ReqUpPet", e)
      }
      ReqUsePetPlan(t) {
        let e = {};
        e.id = t, NetManager.inst.send("pet.ReqUsePetPlan", e)
      }
      ReqPetElementUp() {
        NetManager.inst.send("pet.ReqPetElementUp", {})
      }
      ReqPetFollow(t) {
        let e = {};
        e.uid = t, NetManager.inst.send("pet.ReqPetFollow", e)
      }
      ReqPetElementAwakeInfo() {
        NetManager.inst.send("pet.ReqPetElementAwakeInfo", {})
      }
      ReqPetElementAwakeUp(t) {
        let e = {};
        e.element = t, NetManager.inst.send("pet.ReqPetElementAwakeUp", e)
      }
      ReqEditorPosPet() {
        let t = [];
        for (let [e, i] of YiShouYCModel.inst.PetSlotMap) {
          let s = {};
          s.pos = e, s.uid = i, t.push(s)
        }
        this.ReqUpPet(t), this.ResetPosData()
      }
      reqFriendShare(t) {
        let e = {};
        e.type = import_proto75.default.db.ChatType.PRIVATE, e.childType = 15, e.toCharid = t.charid, e.content = ToolUtil.chinese(2630), e.icon = t.head, e.extraDatas = [];
        let i = {};
        i.petData = YiShouYCModel.inst.shareFriendPet, e.extraDatas.push(i);
        let s = {};
        s.chat = e, this._netManager.send("chat.ChatMsg", s), UIManager.inst.open(ChatView.UID, null, import_proto75.default.db.ChatType.PRIVATE, {
          charId: t.charid,
          name: t.name,
          icon: t.head
        })
      }
      reqPartnerPass(t, e) {
        let i = YiShouPeiYuModel.inst.getLendCount(t, LoginCtrl.inst.charid);
        i > 0 && (t.lendCnt = i);
        let s = YiShouPeiYuModel.inst.getHybridCount(t, LoginCtrl.inst.charid);
        s > 0 && (t.hybridCnt = s);
        let o = {};
        o.type = import_proto75.default.db.ChatType.PRIVATE, o.childType = 14, o.toCharid = e.charId, o.content = ToolUtil.chinese(2621), o.icon = e.icon, o.extraDatas = [];
        let n = {};
        n.petData = t, o.extraDatas.push(n);
        let r = {};
        r.chat = o, this._netManager.send("chat.ChatMsg", r), UIManager.inst.open(ChatView.UID, null, import_proto75.default.db.ChatType.PRIVATE, {
          charId: e.charId,
          name: e.name,
          icon: e.icon
        })
      }
      reqShareSept(t) {
        let e = YiShouPeiYuModel.inst.getLendCount(t, LoginCtrl.inst.charid);
        e > 0 && (t.lendCnt = e);
        let i = YiShouPeiYuModel.inst.getHybridCount(t, LoginCtrl.inst.charid);
        i > 0 && (t.hybridCnt = i);
        let s = StringUtil.format(ToolUtil.chinese(2631), ""),
          o = {};
        o.type = import_proto75.default.db.ChatType.TO_SEPT, o.childType = 15, o.toCharid = LoginCtrl.inst.charid, o.content = ChatModel.inst.ubbToSever(s), o.extraDatas = [];
        let n = {};
        n.petData = t, o.extraDatas.push(n);
        let r = {};
