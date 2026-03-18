// Fragment: spirits_pets_t_L45580.js
// Lines: 45580-45780 of bundle-beautified.js
// Categories: Spirits/Pets
// Keywords: pet
// Hit lines: 45581, 45601, 45620, 45633, 45639, 45650, 45665, 45676, 45691

            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.AddPetEgg"
            }, t
          }(), Ft.ReqPetIncubate = function() {
            function t(t) {
              if (this.sysList = [], this.hybridList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.sysList = ze.emptyArray, t.prototype.hybridList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.sysList && t.sysList.length) {
                e.uint32(10).fork();
                for (var i = 0; i < t.sysList.length; ++i) e.uint32(t.sysList[i]);
                e.ldelim()
              }
              if (null != t.hybridList && t.hybridList.length) {
                for (e.uint32(18).fork(), i = 0; i < t.hybridList.length; ++i) e.uint32(t.hybridList[i]);
                e.ldelim()
              }
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.ReqPetIncubate; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (s.sysList && s.sysList.length || (s.sysList = []), 2 == (7 & o))
                      for (var n = t.uint32() + t.pos; t.pos < n;) s.sysList.push(t.uint32());
                    else s.sysList.push(t.uint32());
                    break;
                  case 2:
                    if (s.hybridList && s.hybridList.length || (s.hybridList = []), 2 == (7 & o))
                      for (n = t.uint32() + t.pos; t.pos < n;) s.hybridList.push(t.uint32());
                    else s.hybridList.push(t.uint32());
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.ReqPetIncubate"
            }, t
          }(), Ft.RetPetIncubate = function() {
            function t(t) {
              if (this.newPet = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.newPet = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.newPet && t.newPet.length)
                for (var i = 0; i < t.newPet.length; ++i) Ke.db.PetData.encode(t.newPet[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.RetPetIncubate; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.newPet && s.newPet.length || (s.newPet = []), s.newPet.push(Ke.db.PetData.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.RetPetIncubate"
            }, t
          }(), Ft.ReqPetChangeName = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.uid = 0, t.prototype.name = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.uid && Object.hasOwnProperty.call(t, "uid") && e.uint32(8).uint32(t.uid), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(18).string(t.name), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.ReqPetChangeName; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.uid = t.uint32();
                    break;
                  case 2:
                    s.name = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.ReqPetChangeName"
            }, t
          }(), Ft.RetPetChangeName = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.uid = 0, t.prototype.name = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.uid && Object.hasOwnProperty.call(t, "uid") && e.uint32(8).uint32(t.uid), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(18).string(t.name), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.RetPetChangeName; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.uid = t.uint32();
                    break;
                  case 2:
                    s.name = t.string();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.RetPetChangeName"
            }, t
          }(), Ft.ReqPetUpLevel = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.pos = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(8).uint32(t.pos), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.ReqPetUpLevel; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.pos = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.ReqPetUpLevel"
            }, t
          }(), Ft.RetPetUpLevel = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.pos = 0, t.prototype.level = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.pos && Object.hasOwnProperty.call(t, "pos") && e.uint32(8).uint32(t.pos), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(16).uint32(t.level), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.RetPetUpLevel; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.pos = t.uint32();
                    break;
                  case 2:
                    s.level = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.RetPetUpLevel"
            }, t
          }(), Ft.ReqPetAwardPhoto = function() {
            function t(t) {
              if (this.list = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.list = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.list && t.list.length) {
                e.uint32(10).fork();
                for (var i = 0; i < t.list.length; ++i) e.uint32(t.list[i]);
                e.ldelim()
              }
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.ReqPetAwardPhoto; t.pos < i;) {
                var o = t.uint32();
                if (o >>> 3 == 1)
                  if (s.list && s.list.length || (s.list = []), 2 == (7 & o))
                    for (var n = t.uint32() + t.pos; t.pos < n;) s.list.push(t.uint32());
                  else s.list.push(t.uint32());
                else t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.ReqPetAwardPhoto"
            }, t
          }(), Ft.RetPetAwardPhoto = function() {
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
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.pet.RetPetAwardPhoto; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.photoList && s.photoList.length || (s.photoList = []), s.photoList.push(Ke.pet.PetPhotoData.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/pet.RetPetAwardPhoto"
            }, t
