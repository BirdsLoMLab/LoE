// Fragment: equipment_for_L73114.js
// Lines: 73114-73228 of bundle-beautified.js
// Categories: Equipment
// Keywords: quality
// Hit lines: 73114, 73115, 73128

            return t.prototype.skillId = 0, t.prototype.star = 0, t.prototype.quality = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.skillId && Object.hasOwnProperty.call(t, "skillId") && e.uint32(8).uint32(t.skillId), null != t.star && Object.hasOwnProperty.call(t, "star") && e.uint32(16).uint32(t.star), null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(24).uint32(t.quality), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.NewSkillInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.skillId = t.uint32();
                    break;
                  case 2:
                    s.star = t.uint32();
                    break;
                  case 3:
                    s.quality = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/skill.NewSkillInfo"
            }, t
          }(), Ce.SkillSlotInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.slotId = 0, t.prototype.level = 0, t.prototype.skill = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.slotId && Object.hasOwnProperty.call(t, "slotId") && e.uint32(8).uint32(t.slotId), null != t.level && Object.hasOwnProperty.call(t, "level") && e.uint32(16).uint32(t.level), null != t.skill && Object.hasOwnProperty.call(t, "skill") && e.uint32(24).uint32(t.skill), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.SkillSlotInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.slotId = t.uint32();
                    break;
                  case 2:
                    s.level = t.uint32();
                    break;
                  case 3:
                    s.skill = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/skill.SkillSlotInfo"
            }, t
          }(), Ce.RetAllSkillInfo = function() {
            function t(t) {
              if (this.skills = [], this.slotInfo = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.skills = ze.emptyArray, t.prototype.slotInfo = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.skills && t.skills.length)
                for (var i = 0; i < t.skills.length; ++i) Ke.skill.NewSkillInfo.encode(t.skills[i], e.uint32(10).fork()).ldelim();
              if (null != t.slotInfo && t.slotInfo.length)
                for (i = 0; i < t.slotInfo.length; ++i) Ke.skill.SkillSlotInfo.encode(t.slotInfo[i], e.uint32(18).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.RetAllSkillInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.skills && s.skills.length || (s.skills = []), s.skills.push(Ke.skill.NewSkillInfo.decode(t, t.uint32()));
                    break;
                  case 2:
                    s.slotInfo && s.slotInfo.length || (s.slotInfo = []), s.slotInfo.push(Ke.skill.SkillSlotInfo.decode(t, t.uint32()));
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/skill.RetAllSkillInfo"
            }, t
          }(), Ce.RetOneSkillInfo = function() {
            function t(t) {
              if (this.skills = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.skills = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.skills && t.skills.length)
                for (var i = 0; i < t.skills.length; ++i) Ke.skill.NewSkillInfo.encode(t.skills[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.RetOneSkillInfo; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.skills && s.skills.length || (s.skills = []), s.skills.push(Ke.skill.NewSkillInfo.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/skill.RetOneSkillInfo"
            }, t
          }(), Ce.RetOneSkillSlotInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.info = null, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.info && Object.hasOwnProperty.call(t, "info") && Ke.skill.SkillSlotInfo.encode(t.info, e.uint32(10).fork()).ldelim(), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.skill.RetOneSkillSlotInfo; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.info = Ke.skill.SkillSlotInfo.decode(t, t.uint32()) : t.skipType(7 & o)
              }
