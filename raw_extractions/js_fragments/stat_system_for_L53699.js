// Fragment: stat_system_for_L53699.js
// Lines: 53699-53816 of bundle-beautified.js
// Categories: Stat System
// Keywords: speed
// Hit lines: 53699, 53700, 53716

            return t.prototype.id = 0, t.prototype.curPos = null, t.prototype.tarPos = null, t.prototype.speed = 0, t.prototype.state = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), null != t.curPos && Object.hasOwnProperty.call(t, "curPos") && Ke.rabbit_run.Pos.encode(t.curPos, e.uint32(18).fork()).ldelim(), null != t.tarPos && Object.hasOwnProperty.call(t, "tarPos") && Ke.rabbit_run.Pos.encode(t.tarPos, e.uint32(26).fork()).ldelim(), null != t.speed && Object.hasOwnProperty.call(t, "speed") && e.uint32(32).uint32(t.speed), null != t.state && Object.hasOwnProperty.call(t, "state") && e.uint32(40).uint32(t.state), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.rabbit_run.RetRabbitPos; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.id = t.uint32();
                    break;
                  case 2:
                    s.curPos = Ke.rabbit_run.Pos.decode(t, t.uint32());
                    break;
                  case 3:
                    s.tarPos = Ke.rabbit_run.Pos.decode(t, t.uint32());
                    break;
                  case 4:
                    s.speed = t.uint32();
                    break;
                  case 5:
                    s.state = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/rabbit_run.RetRabbitPos"
            }, t
          }(), Zt.RetWinRabbit = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.id = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.id && Object.hasOwnProperty.call(t, "id") && e.uint32(8).uint32(t.id), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.rabbit_run.RetWinRabbit; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? s.id = t.uint32() : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/rabbit_run.RetWinRabbit"
            }, t
          }(), Zt.RetRabbitStart = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.encode = function(t, e) {
              return e || (e = Je.create()), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.rabbit_run.RetRabbitStart; t.pos < i;) {
                var o = t.uint32();
                t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/rabbit_run.RetRabbitStart"
            }, t
          }(), Zt.RetRabbitSecondRound = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.startTime = 0, t.prototype.isFinish = !1, t.prototype.isDelRabbit = !1, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.startTime && Object.hasOwnProperty.call(t, "startTime") && e.uint32(8).uint32(t.startTime), null != t.isFinish && Object.hasOwnProperty.call(t, "isFinish") && e.uint32(16).bool(t.isFinish), null != t.isDelRabbit && Object.hasOwnProperty.call(t, "isDelRabbit") && e.uint32(24).bool(t.isDelRabbit), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.rabbit_run.RetRabbitSecondRound; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.startTime = t.uint32();
                    break;
                  case 2:
                    s.isFinish = t.bool();
                    break;
                  case 3:
                    s.isDelRabbit = t.bool();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/rabbit_run.RetRabbitSecondRound"
            }, t
          }(), Zt), Ke.rank = ((Qt = {}).RankType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "RankType_NONE"] = 0, e[t[1e6] = "NORMAL_RANK_VALID_TYPE_MIN"] = 1e6, e[t[1001e3] = "STAGE"] = 1001e3, e[t[1004e3] = "ARENA"] = 1004e3, e[t[1006e3] = "STAGE_DPS"] = 1006e3, e[t[1008e3] = "POWER"] = 1008e3, e[t[1009e3] = "TOWER"] = 1009e3, e[t[101e4] = "LEVEL"] = 101e4, e[t[1011e3] = "TOWER2"] = 1011e3, e[t[2001e3] = "SERVER_STAGE"] = 2001e3, e[t[2004e3] = "GIANT_HUNTING_MIN"] = 2004e3, e[t[2004010] = "GIANT_HUNTING_MAX"] = 2004010, e[t[2005e3] = "LOAD_USER"] = 2005e3, e[t[2006e3] = "LOAD_SEPT"] = 2006e3, e[t[2007e3] = "DRAGON"] = 2007e3, e[t[2008e3] = "FOUR_CHESS"] = 2008e3, e[t[2009e3] = "WONDERFUL_TREE"] = 2009e3, e[t[201e4] = "TALENT"] = 201e4, e[t[2011e3] = "PET_ENTRY_WEEK"] = 2011e3, e[t[2012e3] = "PET_LEND_WEEK"] = 2012e3, e[t[2013e3] = "HONOR_TOTAL"] = 2013e3, e[t[2014e3] = "HONOR_GROUP"] = 2014e3, e[t[2015e3] = "HONOR_GROUP_LAST"] = 2015e3, e[t[2016e3] = "STARRY_ROAD_USER"] = 2016e3, e[t[2017e3] = "STARRY_ROAD_SEPT"] = 2017e3, e[t[2018e3] = "HONOR_GROUP_ZONE"] = 2018e3, e[t[2019e3] = "INTIMACY"] = 2019e3, e[t[202e4] = "FIRE_DRAGON"] = 202e4, e[t[2021e3] = "YAOSHOU_USER"] = 2021e3, e[t[2022e3] = "YAOSHOU_TEAM"] = 2022e3, e[t[2035e3] = "DIAO_YU_POINT"] = 2035e3, e[t[2036e3] = "DIAO_YU_WEIGHT"] = 2036e3, e[t[3001e3] = "LIMIT_TEAM_COPY_MO"] = 3001e3, e[t[3002e3] = "LIMIT_TOWER"] = 3002e3, e[t[3003e3] = "LIMIT_ENHANCEMENT"] = 3003e3, e[t[3004e3] = "LIMIT_COST_STONE"] = 3004e3, e[t[3005e3] = "LIMIT_COST_LOTTERY_SUM"] = 3005e3, e[t[3006e3] = "LIMIT_COST_LOTTERY_LIMIT"] = 3006e3, e[t[3007e3] = "LIMIT_ARENA"] = 3007e3, e[t[3008e3] = "LIMIT_MARTIAL_CENT"] = 3008e3, e[t[3009e3] = "LIMIT_FLY_COST_LIMIT"] = 3009e3, e[t[301e4] = "LIMIT_FLY_COST_SUM"] = 301e4, e[t[3011e3] = "LIMIT_QILING_LEVEL"] = 3011e3, e[t[3012e3] = "LIMIT_QILING_COST"] = 3012e3, e[t[3013e3] = "LIMIT_MONSTER_INVADE"] = 3013e3, e[t[3014e3] = "LIMIT_SPIRIT_HUNTING_USER"] = 3014e3, e[t[3015e3] = "LIMIT_SPIRIT_HUNTING_SEPT"] = 3015e3, e[t[3016e3] = "LIMIT_WORSHIP"] = 3016e3, e[t[3017e3] = "LIMIT_EQM_REFINE_COST"] = 3017e3, e[t[3018e3] = "LIMIT_SKILL_DRAW"] = 3018e3, e[t[3019e3] = "LIMIT_SKILL_DRAW_SUM"] = 3019e3, e[t[302e4] = "LIMIT_TREASURE_DRAW"] = 302e4, e[t[3021e3] = "LIMIT_MONSTER_INVADE_ZONE"] = 3021e3, e[t[3022e3] = "LIMIT_DREAM_SCORE"] = 3022e3, e[t[3023e3] = "LIMIT_SEPT_BOSS"] = 3023e3, e[t[3024e3] = "LIMIT_SWORD_MASTER_USER"] = 3024e3, e[t[3025e3] = "LIMIT_SWORD_MASTER_SEPT"] = 3025e3, e[t[3026e3] = "LIMIT_SKILL_DRAW2"] = 3026e3, e[t[3027e3] = "LIMIT_BEAST_SIEGE_USER_SCORE"] = 3027e3, e[t[3028e3] = "LIMIT_BEAST_SIEGE_SEPT_SCORE"] = 3028e3, e[t[3029e3] = "LIMIT_ALCHEMY_STAGE"] = 3029e3, e[t[303e4] = "LIMIT_ALCHEMY_PILLS"] = 303e4, e[t[3031e3] = "LIMIT_PET_ENTRY_USER"] = 3031e3, e[t[3032e3] = "LIMIT_PET_BEST_ENTRY"] = 3032e3, e[t[3033e3] = "LIMIT_PET_BEST_GROWTH"] = 3033e3, e[t[3034e3] = "LIMIT_PET_WORST_ENTRY"] = 3034e3, e[t[3035e3] = "LIMIT_PET_WORST_GROWTH"] = 3035e3, e[t[3036e3] = "LIMIT_DADI_TURNTABLE"] = 3036e3, e[t[3037e3] = "LIMIT_STARRY_ROAD_USER"] = 3037e3, e[t[3038e3] = "LIMIT_STARRY_ROAD_SEPT"] = 3038e3, e[t[3039e3] = "LIMIT_PLANES_INVADE_USER_SCORE"] = 3039e3, e[t[304e4] = "LIMIT_PLANES_INVADE_KILL_USER"] = 304e4, e[t[3041e3] = "LIMIT_PLANES_INVADE_KILL_NPC"] = 3041e3, e[t[3042e3] = "LIMIT_MONSTER_INVADE_SEPT"] = 3042e3, e[t[3043e3] = "LIMIT_SKILL_DRAW3"] = 3043e3, e[t[3044e3] = "LIMIT_PLANES_INVADE_SEPT_SCORE"] = 3044e3, e[t[3045e3] = "LIMIT_SERVER_COMBINE_DONATE_SEPT"] = 3045e3, e[t[3046e3] = "LIMIT_DEMON_PALACE_SEPT"] = 3046e3, e[t[4001e3] = "FESTIVAL_VIRTUES"] = 4001e3, e[t[4002e3] = "FESTIVAL_SPRING"] = 4002e3, e[t[4003e3] = "HAPPY_PARTY_PRESENT"] = 4003e3, e[t[4004e3] = "HAPPY_PARTY_CHARM"] = 4004e3, e[t[4005e3] = "HAPPY_PARTY_POWER"] = 4005e3, e[t[20001e3] = "FESTIVAL_NAILONG"] = 20001e3, e[t[7e6] = "LIMIT_SKILL_DRAW4"] = 7e6, e[t[199999999] = "NORMAL_RANK_VALID_TYPE_MAX"] = 199999999, e
          }(), Qt.NormalRankMainType = function() {
            var t = {},
              e = Object.create(t);
            return e[t[0] = "RankMainType_NONE"] = 0, e[t[1001] = "STAGE_MAIN"] = 1001, e[t[1004] = "ARENA_MAIN"] = 1004, e[t[1005] = "STAGE_SEAL_MAIN"] = 1005, e[t[1006] = "STAGE_DPS_MAIN"] = 1006, e[t[1008] = "POWER_MAIN"] = 1008, e[t[1009] = "TOWER_MAIN"] = 1009, e[t[1010] = "LEVEL_MAIN"] = 1010, e[t[1011] = "TOWER_MAIN2"] = 1011, e[t[2001] = "SERVER_STAGE_MAIN"] = 2001, e[t[2002] = "POWER_SEPT_MAIN"] = 2002, e[t[2004] = "GIANT_HUNTING_MAIN"] = 2004, e[t[2005] = "LOAD_USER_MAIN"] = 2005, e[t[2006] = "LOAD_SEPT_MAIN"] = 2006, e[t[2007] = "DRAGON_MAIN"] = 2007, e[t[2008] = "FOUR_CHESS_MAIN"] = 2008, e[t[2009] = "WONDERFUL_TREE_MAIN"] = 2009, e[t[2010] = "TALENT_MAIN"] = 2010, e[t[2011] = "PET_ENTRY_WEEK_MAIN"] = 2011, e[t[2012] = "PET_LEND_WEEK_MAIN"] = 2012, e[t[2013] = "HONOR_TOTAL_MAIN"] = 2013, e[t[2014] = "HONOR_GROUP_MAIN"] = 2014, e[t[2015] = "HONOR_GROUP_LAST_MAIN"] = 2015, e[t[2016] = "STARRY_ROAD_USER_MAIN"] = 2016, e[t[2017] = "STARRY_ROAD_SEPT_MAIN"] = 2017, e[t[2018] = "HONOR_GROUP_ZONE_MAIN"] = 2018, e[t[2019] = "INTIMACY_MAIN"] = 2019, e[t[2020] = "FIRE_DRAGON_MAIN"] = 2020, e[t[2021] = "YAOSHEN_USER_MAIN"] = 2021, e[t[2022] = "YAOSHEN_TEAM_MAIN"] = 2022, e[t[2035] = "DIAO_YU_POINT_MAIN"] = 2035, e[t[2036] = "DIAO_YU_WEIGHT_MAIN"] = 2036, e[t[3e3] = "LIMIT_MAIN_MIN"] = 3e3, e[t[3001] = "LIMIT_TEAM_COPY_MO_MAIN"] = 3001, e[t[3002] = "LIMIT_TOWER_MAIN"] = 3002, e[t[3003] = "LIMIT_ENHANCEMENT_MAIN"] = 3003, e[t[3004] = "LIMIT_COST_STONE_MAIN"] = 3004, e[t[3005] = "LIMIT_COST_LOTTERY_SUM_MAIN"] = 3005, e[t[3006] = "LIMIT_COST_LOTTERY_LIMIT_MAIN"] = 3006, e[t[3007] = "LIMIT_ARENA_MAIN"] = 3007, e[t[3008] = "LIMIT_MARTIAL_CENT_MAIN"] = 3008, e[t[3009] = "LIMIT_FLY_COST_LIMIT_MAIN"] = 3009, e[t[3010] = "LIMIT_FLY_COST_SUM_MAIN"] = 3010, e[t[3011] = "LIMIT_QILING_LEVEL_MAIN"] = 3011, e[t[3012] = "LIMIT_QILING_COST_MAIN"] = 3012, e[t[3013] = "LIMIT_MONSTER_INVADE_MAIN"] = 3013, e[t[3014] = "LIMIT_SPIRIT_HUNTING_USER_MAIN"] = 3014, e[t[3015] = "LIMIT_SPIRIT_HUNTING_SEPT_MAIN"] = 3015, e[t[3016] = "LIMIT_WORSHIP_MAIN"] = 3016, e[t[3017] = "LIMIT_EQM_REFINE_COST_MAIN"] = 3017, e[t[3018] = "LIMIT_SKILL_DRAW_MAIN"] = 3018, e[t[3019] = "LIMIT_SKILL_DRAW_SUM_MAIN"] = 3019, e[t[3020] = "LIMIT_TREASURE_DRAW_MAIN"] = 3020, e[t[3021] = "LIMIT_MONSTER_INVADE_ZONE_MAIN"] = 3021, e[t[3022] = "LIMIT_DREAM_SCORE_MAIN"] = 3022, e[t[3023] = "LIMIT_TOWER2_MAIN"] = 3023, e[t[3024] = "LIMIT_SWORD_MASTER_USER_MAIN"] = 3024, e[t[3025] = "LIMIT_SWORD_MASTER_SEPT_MAIN"] = 3025, e[t[3026] = "LIMIT_SKILL_DRAW2_MAIN"] = 3026, e[t[3027] = "LIMIT_BEAST_SIEGE_USER_SCORE_MAIN"] = 3027, e[t[3028] = "LIMIT_BEAST_SIEGE_SEPT_SCORE_MAIN"] = 3028, e[t[3029] = "LIMIT_ALCHEMY_STAGE_MAIN"] = 3029, e[t[3030] = "LIMIT_ALCHEMY_PILLS_MAIN"] = 3030, e[t[3031] = "LIMIT_PET_ENTRY_USER_MAIN"] = 3031, e[t[3032] = "LIMIT_PET_BEST_ENTRY_MAIN"] = 3032, e[t[3033] = "LIMIT_PET_BEST_GROWTH_MAIN"] = 3033, e[t[3034] = "LIMIT_PET_WORST_ENTRY_MAIN"] = 3034, e[t[3035] = "LIMIT_PET_WORST_GROWTH_MAIN"] = 3035, e[t[3036] = "LIMIT_DADI_TURNTABLE_MAIN"] = 3036, e[t[3037] = "LIMIT_STARRY_ROAD_USER_MAIN"] = 3037, e[t[3038] = "LIMIT_STARRY_ROAD_SEPT_MAIN"] = 3038, e[t[3039] = "LIMIT_PLANES_INVADE_USER_SCORE_MAIN"] = 3039, e[t[3040] = "LIMIT_PLANES_INVADE_KILL_USER_MAIN"] = 3040, e[t[3041] = "LIMIT_PLANES_INVADE_KILL_NPC_MAIN"] = 3041, e[t[3042] = "LIMIT_MONSTER_INVADE_SEPT_MAIN"] = 3042, e[t[3043] = "LIMIT_SKILL_DRAW3_MAIN"] = 3043, e[t[3044] = "LIMIT_PLANES_INVADE_SEPT_SCORE_MAIN"] = 3044, e[t[3045] = "LIMIT_SERVER_COMBINE_DONATE_SEPT_MAIN"] = 3045, e[t[3046] = "LIMIT_DEMON_PALACE_SEPT_MAIN"] = 3046, e[t[3999] = "LIMIT_MAIN_MAX"] = 3999, e[t[4001] = "FESTIVAL_VIRTUES_MAIN"] = 4001, e[t[4002] = "FESTIVAL_SPRING_MAIN"] = 4002, e[t[4003] = "HAPPY_PARTY_PRESENT_MAIN"] = 4003, e[t[4004] = "HAPPY_PARTY_CHARM_MAIN"] = 4004, e[t[4005] = "HAPPY_PARTY_POWER_MAIN"] = 4005, e[t[20001] = "FESTIVAL_NAILONG_MAIN"] = 20001, e[t[7e3] = "LIMIT_SKILL_DRAW4_MAIN"] = 7e3, e
          }(), Qt.ReqRankInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.type = 0, t.prototype.rankMin = 0, t.prototype.rankMax = 0, t.prototype.version = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.rankKey = "", t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.type && Object.hasOwnProperty.call(t, "type") && e.uint32(8).int32(t.type), null != t.rankMin && Object.hasOwnProperty.call(t, "rankMin") && e.uint32(16).uint32(t.rankMin), null != t.rankMax && Object.hasOwnProperty.call(t, "rankMax") && e.uint32(24).uint32(t.rankMax), null != t.version && Object.hasOwnProperty.call(t, "version") && e.uint32(32).uint64(t.version), null != t.rankKey && Object.hasOwnProperty.call(t, "rankKey") && e.uint32(42).string(t.rankKey), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.rank.ReqRankInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.type = t.int32();
                    break;
                  case 2:
                    s.rankMin = t.uint32();
