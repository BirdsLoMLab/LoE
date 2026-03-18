// Fragment: stat_system_for_L21831.js
// Lines: 21831-21960 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 21831, 21832, 21860

            return t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.name = "", t.prototype.profile = 0, t.prototype.level = 0, t.prototype.armyidx = 0, t.prototype.follow = !1, t.prototype.followMsec = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.hp = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.maxHp = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.hpPocket = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.maxHpPocket = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.joinTime = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.emergency = !1, t.prototype.armykey = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.curArmyidx = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(8).uint64(t.charid), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(18).string(t.name), null != t.profile && Object.hasOwnProperty.call(t, "profile") && e.uint32(24).uint32(t.profile), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(32).uint32(t.level), null != t.armyidx && Object.hasOwnProperty.call(t, "armyidx") && e.uint32(40).uint32(t.armyidx), null != t.follow && Object.hasOwnProperty.call(t, "follow") && e.uint32(48).bool(t.follow), null != t.followMsec && Object.hasOwnProperty.call(t, "followMsec") && e.uint32(56).uint64(t.followMsec), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(64).uint64(t.hp), null != t.maxHp && Object.hasOwnProperty.call(t, "maxHp") && e.uint32(72).uint64(t.maxHp), null != t.hpPocket && Object.hasOwnProperty.call(t, "hpPocket") && e.uint32(80).uint64(t.hpPocket), null != t.maxHpPocket && Object.hasOwnProperty.call(t, "maxHpPocket") && e.uint32(88).uint64(t.maxHpPocket), null != t.joinTime && Object.hasOwnProperty.call(t, "joinTime") && e.uint32(96).uint64(t.joinTime), null != t.emergency && Object.hasOwnProperty.call(t, "emergency") && e.uint32(104).bool(t.emergency), null != t.armykey && Object.hasOwnProperty.call(t, "armykey") && e.uint32(112).uint64(t.armykey), null != t.curArmyidx && Object.hasOwnProperty.call(t, "curArmyidx") && e.uint32(120).uint32(t.curArmyidx), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.groupcli.GroupMember; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.charid = t.uint64();
                    break;
                  case 2:
                    s.name = t.string();
                    break;
                  case 3:
                    s.profile = t.uint32();
                    break;
                  case 4:
                    s.level = t.uint32();
                    break;
                  case 5:
                    s.armyidx = t.uint32();
                    break;
                  case 6:
                    s.follow = t.bool();
                    break;
                  case 7:
                    s.followMsec = t.uint64();
                    break;
                  case 8:
                    s.hp = t.uint64();
                    break;
                  case 9:
                    s.maxHp = t.uint64();
                    break;
                  case 10:
                    s.hpPocket = t.uint64();
                    break;
                  case 11:
                    s.maxHpPocket = t.uint64();
                    break;
                  case 12:
                    s.joinTime = t.uint64();
                    break;
                  case 13:
                    s.emergency = t.bool();
                    break;
                  case 14:
                    s.armykey = t.uint64();
                    break;
                  case 15:
                    s.curArmyidx = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/groupcli.GroupMember"
            }, t
          }(), et.RetGroupInfo = function() {
            function t(t) {
              if (this.members = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.groupid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.leaderCharid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.members = ze.emptyArray, t.prototype.lastCallMsec = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.groupid && Object.hasOwnProperty.call(t, "groupid") && e.uint32(8).uint64(t.groupid), null != t.leaderCharid && Object.hasOwnProperty.call(t, "leaderCharid") && e.uint32(16).uint64(t.leaderCharid), null != t.members && t.members.length)
                for (var i = 0; i < t.members.length; ++i) Ke.groupcli.GroupMember.encode(t.members[i], e.uint32(26).fork()).ldelim();
              return null != t.lastCallMsec && Object.hasOwnProperty.call(t, "lastCallMsec") && e.uint32(32).uint64(t.lastCallMsec), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.groupcli.RetGroupInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.groupid = t.uint64();
                    break;
                  case 2:
                    s.leaderCharid = t.uint64();
                    break;
                  case 3:
                    s.members && s.members.length || (s.members = []), s.members.push(Ke.groupcli.GroupMember.decode(t, t.uint32()));
                    break;
                  case 4:
                    s.lastCallMsec = t.uint64();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/groupcli.RetGroupInfo"
            }, t
          }(), et.UpdateMemberInfo = function() {
            function t(t) {
              if (this.members = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.groupid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.members = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.groupid && Object.hasOwnProperty.call(t, "groupid") && e.uint32(8).uint64(t.groupid), null != t.members && t.members.length)
                for (var i = 0; i < t.members.length; ++i) Ke.groupcli.GroupMember.encode(t.members[i], e.uint32(18).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.groupcli.UpdateMemberInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.groupid = t.uint64();
                    break;
                  case 2:
                    s.members && s.members.length || (s.members = []), s.members.push(Ke.groupcli.GroupMember.decode(t, t.uint32()));
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/groupcli.UpdateMemberInfo"
            }, t
          }(), et.RemoveMember = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.groupid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.groupid && Object.hasOwnProperty.call(t, "groupid") && e.uint32(8).uint64(t.groupid), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(16).uint64(t.charid), e
            }, t.decode = function(t, e) {
