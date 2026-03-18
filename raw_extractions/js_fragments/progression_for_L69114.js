// Fragment: progression_for_L69114.js
// Lines: 69114-69222 of bundle-beautified.js
// Categories: Progression
// Keywords: master
// Hit lines: 69114, 69115, 69122

            return t.prototype.master = null, t.prototype.leftMaster = null, t.prototype.rightMaster = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.master && Object.hasOwnProperty.call(t, "master") && Ke.sept.RetSeptMasterInfo.MasterInfo.encode(t.master, e.uint32(10).fork()).ldelim(), null != t.leftMaster && Object.hasOwnProperty.call(t, "leftMaster") && Ke.sept.RetSeptMasterInfo.MasterInfo.encode(t.leftMaster, e.uint32(18).fork()).ldelim(), null != t.rightMaster && Object.hasOwnProperty.call(t, "rightMaster") && Ke.sept.RetSeptMasterInfo.MasterInfo.encode(t.rightMaster, e.uint32(26).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept.RetSeptMasterInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.master = Ke.sept.RetSeptMasterInfo.MasterInfo.decode(t, t.uint32());
                    break;
                  case 2:
                    s.leftMaster = Ke.sept.RetSeptMasterInfo.MasterInfo.decode(t, t.uint32());
                    break;
                  case 3:
                    s.rightMaster = Ke.sept.RetSeptMasterInfo.MasterInfo.decode(t, t.uint32());
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept.RetSeptMasterInfo"
            }, t.MasterInfo = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.charId = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.name = "", t.prototype.gender = 0, t.prototype.career = 0, t.prototype.level = 0, t.prototype.clothingId = 0, t.prototype.icon = "", t.prototype.fazeId = 0, t.prototype.fazeStar = 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.charId && Object.hasOwnProperty.call(t, "charId") && e.uint32(8).uint64(t.charId), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(18).string(t.name), null != t.gender && Object.hasOwnProperty.call(t, "gender") && e.uint32(24).uint32(t.gender), null != t.career && Object.hasOwnProperty.call(t, "career") && e.uint32(32).uint32(t.career), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(40).uint32(t.level), null != t.clothingId && Object.hasOwnProperty.call(t, "clothingId") && e.uint32(48).uint32(t.clothingId), null != t.icon && Object.hasOwnProperty.call(t, "icon") && e.uint32(58).string(t.icon), null != t.fazeId && Object.hasOwnProperty.call(t, "fazeId") && e.uint32(64).uint32(t.fazeId), null != t.fazeStar && Object.hasOwnProperty.call(t, "fazeStar") && e.uint32(72).uint32(t.fazeStar), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept.RetSeptMasterInfo.MasterInfo; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.charId = t.uint64();
                      break;
                    case 2:
                      s.name = t.string();
                      break;
                    case 3:
                      s.gender = t.uint32();
                      break;
                    case 4:
                      s.career = t.uint32();
                      break;
                    case 5:
                      s.level = t.uint32();
                      break;
                    case 6:
                      s.clothingId = t.uint32();
                      break;
                    case 7:
                      s.icon = t.string();
                      break;
                    case 8:
                      s.fazeId = t.uint32();
                      break;
                    case 9:
                      s.fazeStar = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/sept.RetSeptMasterInfo.MasterInfo"
              }, t
            }(), t
          }(), me.ReqSeptDetailInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.septid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.memberlist = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.septid && Object.hasOwnProperty.call(t, "septid") && e.uint32(8).uint64(t.septid), null != t.memberlist && Object.hasOwnProperty.call(t, "memberlist") && e.uint32(16).bool(t.memberlist), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept.ReqSeptDetailInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.septid = t.uint64();
                    break;
                  case 2:
                    s.memberlist = t.bool();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept.ReqSeptDetailInfo"
            }, t
          }(), me.RetSeptDetailInfo = function() {
            function t(t) {
              if (this.memberlist = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.septid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.name = "", t.prototype.level = 0, t.prototype.memberCnt = 0, t.prototype.memberLimit = 0, t.prototype.notice = "", t.prototype.todayPrestige = 0, t.prototype.prestigeLimit = 0, t.prototype.prestigeMemberCnt = 0, t.prototype.memberlist = ze.emptyArray, t.prototype.isend = !1, t.prototype.exp = 0, t.prototype.totalPower = "", t.prototype.nextPrefixTime = 0, t.prototype.honorVal = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.honorNowval = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.honorGroup = 0, t.prototype.weekExpAdd = 0, t.prototype.flag = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.septid && Object.hasOwnProperty.call(t, "septid") && e.uint32(8).uint64(t.septid), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(18).string(t.name), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(24).uint32(t.level), null != t.memberCnt && Object.hasOwnProperty.call(t, "memberCnt") && e.uint32(32).uint32(t.memberCnt), null != t.memberLimit && Object.hasOwnProperty.call(t, "memberLimit") && e.uint32(40).uint32(t.memberLimit), null != t.notice && Object.hasOwnProperty.call(t, "notice") && e.uint32(50).string(t.notice), null != t.todayPrestige && Object.hasOwnProperty.call(t, "todayPrestige") && e.uint32(56).uint32(t.todayPrestige), null != t.prestigeLimit && Object.hasOwnProperty.call(t, "prestigeLimit") && e.uint32(64).uint32(t.prestigeLimit), null != t.prestigeMemberCnt && Object.hasOwnProperty.call(t, "prestigeMemberCnt") && e.uint32(72).uint32(t.prestigeMemberCnt), null != t.memberlist && t.memberlist.length)
                for (var i = 0; i < t.memberlist.length; ++i) Ke.sept.RetSeptDetailInfo.MemberInfo.encode(t.memberlist[i], e.uint32(82).fork()).ldelim();
              return null != t.isend && Object.hasOwnProperty.call(t, "isend") && e.uint32(88).bool(t.isend), null != t.exp && Object.hasOwnProperty.call(t, "exp") && e.uint32(96).uint32(t.exp), null != t.totalPower && Object.hasOwnProperty.call(t, "totalPower") && e.uint32(106).string(t.totalPower), null != t.nextPrefixTime && Object.hasOwnProperty.call(t, "nextPrefixTime") && e.uint32(112).uint32(t.nextPrefixTime), null != t.honorVal && Object.hasOwnProperty.call(t, "honorVal") && e.uint32(120).uint64(t.honorVal), null != t.honorNowval && Object.hasOwnProperty.call(t, "honorNowval") && e.uint32(128).uint64(t.honorNowval), null != t.honorGroup && Object.hasOwnProperty.call(t, "honorGroup") && e.uint32(136).uint32(t.honorGroup), null != t.weekExpAdd && Object.hasOwnProperty.call(t, "weekExpAdd") && e.uint32(144).uint32(t.weekExpAdd), null != t.flag && Object.hasOwnProperty.call(t, "flag") && e.uint32(152).uint32(t.flag), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept.RetSeptDetailInfo; t.pos < i;) {
