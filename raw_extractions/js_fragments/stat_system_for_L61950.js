// Fragment: stat_system_for_L61950.js
// Lines: 61950-62056 of bundle-beautified.js
// Categories: Stat System
// Keywords: attack
// Hit lines: 61950, 61951, 61956

            return t.prototype.attack = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.attack && Object.hasOwnProperty.call(t, "attack") && Ke.db.RuinsAttack.encode(t.attack, e.uint32(10).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.NotifyRuinsAttack; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.attack = Ke.db.RuinsAttack.decode(t, t.uint32()) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.NotifyRuinsAttack"
            }, t
          }(), re.ReqRuinsClearBeAttack = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.ReqRuinsClearBeAttack; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.ReqRuinsClearBeAttack"
            }, t
          }(), re.ReqRuinsTeamStage = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.ReqRuinsTeamStage; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.ReqRuinsTeamStage"
            }, t
          }(), re.RetRuinsTeamStage = function() {
            function t(t) {
              if (this.members = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.members = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.members && t.members.length)
                for (var i = 0; i < t.members.length; ++i) Ke.ruins.RetRuinsTeamStage.TeamStage.encode(t.members[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.RetRuinsTeamStage; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.members && s.members.length || (s.members = []), s.members.push(Ke.ruins.RetRuinsTeamStage.TeamStage.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.RetRuinsTeamStage"
            }, t.TeamStage = function() {
              function t(t) {
                if (t)
                  for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
              }
              return t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.icon = "", t.prototype.name = "", t.prototype.stage = 0, t.encode = function(t, e) {
                return e || (e = Je.create()), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(8).uint64(t.charid), null != t.icon && Object.hasOwnProperty.call(t, "icon") && e.uint32(18).string(t.icon), null != t.name && Object.hasOwnProperty.call(t, "name") && e.uint32(26).string(t.name), null != t.stage && Object.hasOwnProperty.call(t, "stage") && e.uint32(32).uint32(t.stage), e
              }, t.decode = function(t, e) {
                t instanceof Qe || (t = Qe.create(t));
                for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.RetRuinsTeamStage.TeamStage; t.pos < i;) {
                  var o = t.uint32();
                  switch (o >>> 3) {
                    case 1:
                      s.charid = t.uint64();
                      break;
                    case 2:
                      s.icon = t.string();
                      break;
                    case 3:
                      s.name = t.string();
                      break;
                    case 4:
                      s.stage = t.uint32();
                      break;
                    default:
                      t.skipType(7 & o)
                  }
                }
                return s
              }, t.getTypeUrl = function(t) {
                return void 0 === t && (t = "type.googleapis.com"), t + "/ruins.RetRuinsTeamStage.TeamStage"
              }, t
            }(), t
          }(), re.ReqRuinsLog = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.version = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.version && Object.hasOwnProperty.call(t, "version") && e.uint32(8).uint32(t.version), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.ruins.ReqRuinsLog; t.pos < i;) {
