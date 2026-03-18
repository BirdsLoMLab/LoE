// Fragment: spirits_pets_t_L45363.js
// Lines: 45363-45563 of bundle-beautified.js
// Categories: Spirits/Pets
// Keywords: pet
// Hit lines: 45363, 45372, 45390, 45403, 45409, 45422, 45428, 45437, 45441, 45443, 45447, 45460, 45466, 45477, 45492, 45505, 45511, 45529, 45546, 45564

          }(), Nt), Ke.pet = ((Ft = {}).PetPhotoData = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.petId = 0, t.prototype.isGetAward = !1, t.prototype.genration = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.petId && Object.hasOwnProperty.call(t, "petId") && e.uint32(8).uint32(t.petId), null != t.isGetAward && Object.hasOwnProperty.call(t, "isGetAward") && e.uint32(16).bool(t.isGetAward), null != t.genration && Object.hasOwnProperty.call(t, "genration") && e.uint32(24).uint32(t.genration), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.PetPhotoData; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.petId = t.uint32();
                    break;
                  case 2:
                    s.isGetAward = t.bool();
                    break;
                  case 3:
                    s.genration = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.PetPhotoData"
            }, t
          }(), Ft.PetList = function() {
            function t(t) {
              if (this.petList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.petList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.petList && t.petList.length)
                for (var i = 0; i < t.petList.length; ++i) Ke.db.PetData.encode(t.petList[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.PetList; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.petList && s.petList.length || (s.petList = []), s.petList.push(Ke.db.PetData.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.PetList"
            }, t
          }(), Ft.PetPosInfo = function() {
            function t(t) {
              if (this.posList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.posList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.posList && t.posList.length)
                for (var i = 0; i < t.posList.length; ++i) Ke.db.PetPosData.encode(t.posList[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.PetPosInfo; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.posList && s.posList.length || (s.posList = []), s.posList.push(Ke.db.PetPosData.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.PetPosInfo"
            }, t
          }(), Ft.PetPhotoInfo = function() {
            function t(t) {
              if (this.photoList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.photoList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.photoList && t.photoList.length)
                for (var i = 0; i < t.photoList.length; ++i) Ke.pet.PetPhotoData.encode(t.photoList[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.PetPhotoInfo; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.photoList && s.photoList.length || (s.photoList = []), s.photoList.push(Ke.pet.PetPhotoData.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.PetPhotoInfo"
            }, t
          }(), Ft.PetBaseInfo = function() {
            function t(t) {
              if (this.baseInfo = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.baseInfo = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.baseInfo && t.baseInfo.length)
                for (var i = 0; i < t.baseInfo.length; ++i) Ke.db.PetBaseInfo.encode(t.baseInfo[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.PetBaseInfo; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.baseInfo && s.baseInfo.length || (s.baseInfo = []), s.baseInfo.push(Ke.db.PetBaseInfo.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.PetBaseInfo"
            }, t
          }(), Ft.PetCommonInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.elementLevel = 0, t.prototype.followUid = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.elementLevel && Object.hasOwnProperty.call(t, "elementLevel") && e.uint32(8).uint32(t.elementLevel), null != t.followUid && Object.hasOwnProperty.call(t, "followUid") && e.uint32(16).uint32(t.followUid), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.PetCommonInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.elementLevel = t.uint32();
                    break;
                  case 2:
                    s.followUid = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.PetCommonInfo"
            }, t
          }(), Ft.UpdataPetData = function() {
            function t(t) {
              if (this.petList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.petList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.petList && t.petList.length)
                for (var i = 0; i < t.petList.length; ++i) Ke.db.PetData.encode(t.petList[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.UpdataPetData; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.petList && s.petList.length || (s.petList = []), s.petList.push(Ke.db.PetData.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.UpdataPetData"
            }, t
          }(), Ft.RefreshEgg = function() {
            function t(t) {
              if (this.sysEgg = [], this.hybridEgg = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.sysEgg = ze.emptyArray, t.prototype.hybridEgg = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.sysEgg && t.sysEgg.length) {
                e.uint32(10).fork();
                for (var i = 0; i < t.sysEgg.length; ++i) e.uint32(t.sysEgg[i]);
                e.ldelim()
              }
              if (null != t.hybridEgg && t.hybridEgg.length)
                for (i = 0; i < t.hybridEgg.length; ++i) Ke.db.PetHybridEgg.encode(t.hybridEgg[i], e.uint32(18).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.RefreshEgg; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (s.sysEgg && s.sysEgg.length || (s.sysEgg = []), 2 == (7 & o))
                      for (var n = t.uint32() + t.pos; t.pos < n;) s.sysEgg.push(t.uint32());
                    else s.sysEgg.push(t.uint32());
                    break;
                  case 2:
                    s.hybridEgg && s.hybridEgg.length || (s.hybridEgg = []), s.hybridEgg.push(Ke.db.PetHybridEgg.decode(t, t.uint32()));
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.RefreshEgg"
            }, t
          }(), Ft.AddPetEgg = function() {
            function t(t) {
              if (this.sysEgg = [], this.hybridEgg = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.sysEgg = ze.emptyArray, t.prototype.hybridEgg = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.sysEgg && t.sysEgg.length) {
                e.uint32(10).fork();
                for (var i = 0; i < t.sysEgg.length; ++i) e.uint32(t.sysEgg[i]);
                e.ldelim()
              }
              if (null != t.hybridEgg && t.hybridEgg.length)
                for (i = 0; i < t.hybridEgg.length; ++i) Ke.db.PetHybridEgg.encode(t.hybridEgg[i], e.uint32(18).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
