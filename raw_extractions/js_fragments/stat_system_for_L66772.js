// Fragment: stat_system_for_L66772.js
// Lines: 66772-66906 of bundle-beautified.js
// Categories: Stat System
// Keywords: hp
// Hit lines: 66772, 66773, 66806

            return t.prototype.ret = 0, t.prototype.bossid = 0, t.prototype.level = 0, t.prototype.hp = "", t.prototype.num = 0, t.prototype.damage = "", t.prototype.damageRwdids = ze.emptyArray, t.prototype.usetime = 0, t.prototype.firstRwdids = ze.emptyArray, t.prototype.applyStatus = !1, t.prototype.buffStatus = !1, t.prototype.rankRwdStatus = !1, t.prototype.septRank = 0, t.prototype.totalDamage = "", t.prototype.taskRwdids = ze.emptyArray, t.prototype.applyList = ze.emptyArray, t.prototype.buffUserList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).uint32(t.ret), null != t.bossid && Object.hasOwnProperty.call(t, "bossid") && e.uint32(16).uint32(t.bossid), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(24).uint32(t.level), null != t.hp && Object.hasOwnProperty.call(t, "hp") && e.uint32(34).string(t.hp), null != t.num && Object.hasOwnProperty.call(t, "num") && e.uint32(40).uint32(t.num), null != t.damage && Object.hasOwnProperty.call(t, "damage") && e.uint32(50).string(t.damage), null != t.damageRwdids && t.damageRwdids.length) {
                e.uint32(58).fork();
                for (var i = 0; i < t.damageRwdids.length; ++i) e.uint32(t.damageRwdids[i]);
                e.ldelim()
              }
              if (null != t.usetime && Object.hasOwnProperty.call(t, "usetime") && e.uint32(64).uint32(t.usetime), null != t.firstRwdids && t.firstRwdids.length) {
                for (e.uint32(74).fork(), i = 0; i < t.firstRwdids.length; ++i) e.uint32(t.firstRwdids[i]);
                e.ldelim()
              }
              if (null != t.applyStatus && Object.hasOwnProperty.call(t, "applyStatus") && e.uint32(80).bool(t.applyStatus), null != t.buffStatus && Object.hasOwnProperty.call(t, "buffStatus") && e.uint32(88).bool(t.buffStatus), null != t.rankRwdStatus && Object.hasOwnProperty.call(t, "rankRwdStatus") && e.uint32(96).bool(t.rankRwdStatus), null != t.totalDamage && Object.hasOwnProperty.call(t, "totalDamage") && e.uint32(106).string(t.totalDamage), null != t.septRank && Object.hasOwnProperty.call(t, "septRank") && e.uint32(112).uint32(t.septRank), null != t.taskRwdids && t.taskRwdids.length) {
                for (e.uint32(122).fork(), i = 0; i < t.taskRwdids.length; ++i) e.uint32(t.taskRwdids[i]);
                e.ldelim()
              }
              if (null != t.applyList && t.applyList.length)
                for (i = 0; i < t.applyList.length; ++i) Ke.sept.RetMemberListInUI.SomeMember.encode(t.applyList[i], e.uint32(130).fork()).ldelim();
              if (null != t.buffUserList && t.buffUserList.length)
                for (i = 0; i < t.buffUserList.length; ++i) Ke.sept_boss.ActiveBuffUserInfo.encode(t.buffUserList[i], e.uint32(138).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept_boss.RetSeptBossInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.ret = t.uint32();
                    break;
                  case 2:
                    s.bossid = t.uint32();
                    break;
                  case 3:
                    s.level = t.uint32();
                    break;
                  case 4:
                    s.hp = t.string();
                    break;
                  case 5:
                    s.num = t.uint32();
                    break;
                  case 6:
                    s.damage = t.string();
                    break;
                  case 7:
                    if (s.damageRwdids && s.damageRwdids.length || (s.damageRwdids = []), 2 == (7 & o))
                      for (var n = t.uint32() + t.pos; t.pos < n;) s.damageRwdids.push(t.uint32());
                    else s.damageRwdids.push(t.uint32());
                    break;
                  case 8:
                    s.usetime = t.uint32();
                    break;
                  case 9:
                    if (s.firstRwdids && s.firstRwdids.length || (s.firstRwdids = []), 2 == (7 & o))
                      for (n = t.uint32() + t.pos; t.pos < n;) s.firstRwdids.push(t.uint32());
                    else s.firstRwdids.push(t.uint32());
                    break;
                  case 10:
                    s.applyStatus = t.bool();
                    break;
                  case 11:
                    s.buffStatus = t.bool();
                    break;
                  case 12:
                    s.rankRwdStatus = t.bool();
                    break;
                  case 14:
                    s.septRank = t.uint32();
                    break;
                  case 13:
                    s.totalDamage = t.string();
                    break;
                  case 15:
                    if (s.taskRwdids && s.taskRwdids.length || (s.taskRwdids = []), 2 == (7 & o))
                      for (n = t.uint32() + t.pos; t.pos < n;) s.taskRwdids.push(t.uint32());
                    else s.taskRwdids.push(t.uint32());
                    break;
                  case 16:
                    s.applyList && s.applyList.length || (s.applyList = []), s.applyList.push(Ke.sept.RetMemberListInUI.SomeMember.decode(t, t.uint32()));
                    break;
                  case 17:
                    s.buffUserList && s.buffUserList.length || (s.buffUserList = []), s.buffUserList.push(Ke.sept_boss.ActiveBuffUserInfo.decode(t, t.uint32()));
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept_boss.RetSeptBossInfo"
            }, t
          }(), de.ReqSeptBossRwdInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.sept_boss.ReqSeptBossRwdInfo; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/sept_boss.ReqSeptBossRwdInfo"
            }, t
          }(), de.RetSeptBossRwdInfo = function() {
            function t(t) {
              if (this.items = [], this.hpRwdlist = [], this.hpRwdlistMap = {}, t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.items = ze.emptyArray, t.prototype.hpRwdlist = ze.emptyArray, t.prototype.hpRwdlistMap = ze.emptyObject, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.items && t.items.length)
                for (var i = 0; i < t.items.length; ++i) Ke.sept_boss.RetSeptBossRwdInfo.item.encode(t.items[i], e.uint32(10).fork()).ldelim();
              if (null != t.hpRwdlist && t.hpRwdlist.length) {
                for (e.uint32(18).fork(), i = 0; i < t.hpRwdlist.length; ++i) e.uint32(t.hpRwdlist[i]);
                e.ldelim()
              }
              if (null != t.hpRwdlistMap && Object.hasOwnProperty.call(t, "hpRwdlistMap")) {
                var s = Object.keys(t.hpRwdlistMap);
                for (i = 0; i < s.length; ++i) e.uint32(26).fork().uint32(8).uint32(s[i]).uint32(16).uint32(t.hpRwdlistMap[s[i]]).ldelim()
              }
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i, s, o = void 0 === e ? t.len : t.pos + e, n = new Ke.sept_boss.RetSeptBossRwdInfo; t.pos < o;) {
                var r = t.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.items && n.items.length || (n.items = []), n.items.push(Ke.sept_boss.RetSeptBossRwdInfo.item.decode(t, t.uint32()));
                    break;
                  case 2:
                    if (n.hpRwdlist && n.hpRwdlist.length || (n.hpRwdlist = []), 2 == (7 & r))
                      for (var a = t.uint32() + t.pos; t.pos < a;) n.hpRwdlist.push(t.uint32());
                    else n.hpRwdlist.push(t.uint32());
