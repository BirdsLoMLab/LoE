// Fragment: class_system_for_L163929.js
// Lines: 163929-164068 of bundle-beautified.js
// Categories: Class System
// Keywords: element_type
// Hit lines: 163929, 163938, 163948, 163958, 163968

        for (let n of o) 2 == t.length ? n.element_type != t[0] && n.element_type != t[1] || n.active_num != e || n.element_level != i || s.push(n) : n.element_type == t[0] && n.active_num == e && n.element_level == i && s.push(n);
        return s
      }
      getSkillArr(t, e, i, s = !1) {
        let o = [],
          n = Cfgelement_level.get(i, !0);
        if (n)
          for (let i of n.unlock_skill) {
            let n = Cfgpet_skill.get(i, !0);
            n && (2 == t.length ? n.element_type != t[0] && n.element_type != t[1] || n.active_num != e || o.push(n) : s ? n.element_type != t[0] || 2 != n.active_num && 4 != n.active_num || o.push(n) : n.element_type == t[0] && n.active_num == e && o.push(n))
          }
        return o
      }
      getElementSkillArr(t, e) {
        let i = [],
          s = Cfgelement_level.get(e, !0);
        if (s)
          for (let e of s.unlock_skill) {
            let s = Cfgpet_skill.get(e, !0);
            s && (2 == t.length ? s.element_type != t[0] && s.element_type != t[1] || 2 != s.active_num && 4 != s.active_num || i.push(s) : s.element_type != t[0] || 2 != s.active_num && 4 != s.active_num || i.push(s))
          }
        return i
      }
      getElementActiveSkillArr(t, e) {
        let i = [],
          s = Cfgelement_level.get(e, !0);
        if (s)
          for (let e of s.unlock_skill) {
            let s = Cfgpet_skill.get(e, !0);
            s && (2 == t.length ? s.element_type != t[0] && s.element_type != t[1] || i.push(s) : s.element_type == t[0] && i.push(s))
          }
        return i
      }
      getSkillArrByElement(t, e) {
        let i = [],
          s = Cfgelement_level.get(e, !0);
        if (s)
          for (let e of s.unlock_skill) {
            let s = Cfgpet_skill.get(e, !0);
            s && (s.element_type != t || 2 != s.active_num && 4 != s.active_num || i.push(s))
          }
        return i
      }
      getElementAwakenLevel(t) {
        return YiShouYCModel.inst.ElementAwakenLvMap.get(t) || 0
      }
      getIncubateExtraReward(t) {
        let e = [],
          i = new Map;
        return t.forEach((t => {
          let e = Cfgpet_data.get(t.cfgid);
          if (e) {
            let s = 0;
            t.entry.forEach((t => {
              let e = Cfgpet_entry.get(t);
              e && 7 == e.quality && (s += 1)
            }));
            let o = Cfgpet_hybrid_extra.get({
              generation: t.generation,
              element: e.element,
              quality: e.quality,
              red_entry_num: s
            });
            if (o.length > 0) {
              o[0].drop_extra.forEach((t => {
                let [e, s] = t;
                i.has(e) ? i.set(e, i.get(e) + s) : i.set(e, s)
              }))
            }
          }
        })), i.forEach(((t, i) => {
          e.push([i, t])
        })), e
      }
      onRetPetChangeName(t) {
        for (let e of YiShouYCModel.inst.petList) e.uid == t.uid && (e.name = t.name);
        this.dispatchEvent(MsgName.YiShou_Info_Rename), this.dispatchEvent(MsgName.YiShou_PetInfoChange)
      }
      onRetPetUpLevel(t) {
        for (let e of YiShouYCModel.inst.posList)
          if (e.pos == t.pos) {
            e.level = t.level;
            break
          } this.dispatchEvent(MsgName.YiShou_Pos_Info_Change)
      }
      onRetPetAwardPhoto(t) {
        for (let e of t.photoList) {
          let t = !1;
          for (let i of YiShouYCModel.inst.photoList)
            if (e.petId == i.petId && i.genration == e.genration) {
              i.isGetAward = e.isGetAward, i.genration = e.genration, t = !0;
              break
            } t || YiShouYCModel.inst.photoList.push(e)
        }
        this.checkRedPoint(), this.dispatchEvent(MsgName.YiShou_Photo_Change)
      }
      onRetPetLock(t) {
        for (let e of YiShouYCModel.inst.petList) e.uid == t.uid && (e.isLock = t.isLock);
        this.dispatchEvent(MsgName.YiShou_Pet_Lock_Info_Change)
      }
      onRetPetDecompose(t) {
        if (t.ret) {
          var e = YiShouYCModel.inst.petList.filter((function(e) {
            for (let i of t.delUidList)
              if (i == e.uid) return !1;
            return !0
          }));
          YiShouYCModel.inst.petList = e
        }
        UIManager.inst.close(YiShouYCDetailsView.UID), this.dispatchEvent(MsgName.YiShou_PetInfoChange), YiShouPeiYuModel.inst.checkRedP(), this.checkRedPoint()
      }
      onRetUpPet(t) {
        for (let e of t.slot)
          for (let t of YiShouYCModel.inst.posList) t.pos == e.pos && (t.uid = e.uid);
        this.updateElementNum(), this.updateFollowData(), this.checkRedPoint(), this.dispatchEvent(MsgName.YiShou_PetInfoChange)
      }
      onRefreshEgg(t) {
        YiShouYCModel.inst.sysEgg = t.sysEgg, YiShouYCModel.inst.hybridEgg = t.hybridEgg, this.checkRedPoint(), this.dispatchEvent(MsgName.YiShou_RefreshEgg)
      }
      checkRedPoint() {
        if (!OpenFuncModel.inst.isFuncOpen(import_proto75.default.openfunc.OpenFuncID.PET_NURTURE, !1)) return;
        let t = !1;
        for (let e = 0; e < YiShouYCModel.inst.sysEgg.length; e++) {
          let i = Cfgpet_egg.get(YiShouYCModel.inst.sysEgg[e]);
          if (OpenFuncModel.inst.isFuncOpen(i.open_fuc, !1)) {
            t = !0;
            break
          }
        }
        if (!t)
          for (let e of YiShouYCModel.inst.hybridEgg) {
            let i = Cfgpet_data.get(e.cfgid);
            if (i) {
              if (OpenFuncModel.inst.isFuncOpen(i.open_fuc, !1) && !YiShouYCModel.inst.checkNeedEggTip(e)) {
                t = !0;
                break
              }
            }
          }
        let e = !1;
