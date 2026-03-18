// Fragment: stat_system_for_L72747.js
// Lines: 72747-72855 of bundle-beautified.js
// Categories: Stat System
// Keywords: energy
// Hit lines: 72747, 72748, 72755

            return t.prototype.energy = 0, t.prototype.maxEnergy = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.energy && Object.hasOwnProperty.call(t, "energy") && e.uint32(8).uint32(t.energy), null != t.maxEnergy && Object.hasOwnProperty.call(t, "maxEnergy") && e.uint32(16).uint32(t.maxEnergy), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.RefreshMainSkillEnergy; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.energy = t.uint32();
                    break;
                  case 2:
                    s.maxEnergy = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/skill.RefreshMainSkillEnergy"
            }, t
          }(), Ce.SkillInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.skillid = 0, t.prototype.level = 0, t.prototype.star = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.skillid && Object.hasOwnProperty.call(t, "skillid") && e.uint32(8).uint32(t.skillid), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(16).uint32(t.level), null != t.star && Object.hasOwnProperty.call(t, "star") && e.uint32(24).uint32(t.star), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.SkillInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.skillid = t.uint32();
                    break;
                  case 2:
                    s.level = t.uint32();
                    break;
                  case 3:
                    s.star = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/skill.SkillInfo"
            }, t
          }(), Ce.SkillOperation = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "Activate"] = 0, e[t[1] = "LevelUp"] = 1, e[t[2] = "StarUp"] = 2, e
          }(), Ce.ReqSkillOperation = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.skillid = 0, t.prototype.op = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.skillid && Object.hasOwnProperty.call(t, "skillid") && e.uint32(8).uint32(t.skillid), null != t.op && Object.hasOwnProperty.call(t, "op") && e.uint32(16).int32(t.op), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.ReqSkillOperation; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.skillid = t.uint32();
                    break;
                  case 2:
                    s.op = t.int32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/skill.ReqSkillOperation"
            }, t
          }(), Ce.RetSkillOperation = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.ret = !1, t.prototype.skill = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.ret && Object.hasOwnProperty.call(t, "ret") && e.uint32(8).bool(t.ret), null != t.skill && Object.hasOwnProperty.call(t, "skill") && Ke.skill.SkillInfo.encode(t.skill, e.uint32(18).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.RetSkillOperation; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.ret = t.bool();
                    break;
                  case 2:
                    s.skill = Ke.skill.SkillInfo.decode(t, t.uint32());
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/skill.RetSkillOperation"
            }, t
          }(), Ce.ReqWearSkill = function() {
            function t(t) {
              if (t)
