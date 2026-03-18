// Fragment: equipment_for_L112335.js
// Lines: 112335-112455 of bundle-beautified.js
// Categories: Equipment
// Keywords: quality
// Hit lines: 112335, 112336, 112355

            return t.prototype.flagId = 0, t.prototype.startTime = 0, t.prototype.endTime = 0, t.prototype.redPoint = !1, t.prototype.quality = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.flagId && Object.hasOwnProperty.call(t, "flagId") && e.uint32(8).uint32(t.flagId), null != t.startTime && Object.hasOwnProperty.call(t, "startTime") && e.uint32(16).uint32(t.startTime), null != t.endTime && Object.hasOwnProperty.call(t, "endTime") && e.uint32(24).uint32(t.endTime), null != t.redPoint && Object.hasOwnProperty.call(t, "redPoint") && e.uint32(32).bool(t.redPoint), null != t.quality && Object.hasOwnProperty.call(t, "quality") && e.uint32(40).uint32(t.quality), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.SeptFlag; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.flagId = t.uint32();
                    break;
                  case 2:
                    s.startTime = t.uint32();
                    break;
                  case 3:
                    s.endTime = t.uint32();
                    break;
                  case 4:
                    s.redPoint = t.bool();
                    break;
                  case 5:
                    s.quality = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.SeptFlag"
            }, t
          }(), Ze.SeptDataSet = function() {
            function t(t) {
              if (this.dataset = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.dataset = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.dataset && t.dataset.length)
                for (var i = 0; i < t.dataset.length; ++i) Ke.db.SeptBase.encode(t.dataset[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.SeptDataSet; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.dataset && s.dataset.length || (s.dataset = []), s.dataset.push(Ke.db.SeptBase.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.SeptDataSet"
            }, t
          }(), Ze.BaseRedPacketInfo = function() {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.thisid = 0, t.prototype.cfgid = 0, t.prototype.createTime = 0, t.encode = function(t, e) {
              return e || (e = Je.create()), null != t.thisid && Object.hasOwnProperty.call(t, "thisid") && e.uint32(8).uint32(t.thisid), null != t.cfgid && Object.hasOwnProperty.call(t, "cfgid") && e.uint32(16).uint32(t.cfgid), null != t.createTime && Object.hasOwnProperty.call(t, "createTime") && e.uint32(24).uint32(t.createTime), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.BaseRedPacketInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.thisid = t.uint32();
                    break;
                  case 2:
                    s.cfgid = t.uint32();
                    break;
                  case 3:
                    s.createTime = t.uint32();
                    break;
                  default:
                    t.skipType(7 & o)
                }
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.BaseRedPacketInfo"
            }, t
          }(), Ze.RedPacketList = function() {
            function t(t) {
              if (this.redpacketList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.redpacketList = ze.emptyArray, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.redpacketList && t.redpacketList.length)
                for (var i = 0; i < t.redpacketList.length; ++i) Ke.db.BaseRedPacketInfo.encode(t.redpacketList[i], e.uint32(10).fork()).ldelim();
              return e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.RedPacketList; t.pos < i;) {
                var o = t.uint32();
                o >>> 3 == 1 ? (s.redpacketList && s.redpacketList.length || (s.redpacketList = []), s.redpacketList.push(Ke.db.BaseRedPacketInfo.decode(t, t.uint32()))) : t.skipType(7 & o)
              }
              return s
            }, t.getTypeUrl = function(t) {
              return void 0 === t && (t = "type.googleapis.com"), t + "/db.RedPacketList"
            }, t
          }(), Ze.DistributeRedPacketInfo = function() {
            function t(t) {
              if (this.historyList = [], t)
                for (var e = Object.keys(t), i = 0; i < e.length; ++i) null != t[e[i]] && (this[e[i]] = t[e[i]])
            }
            return t.prototype.baseinfo = null, t.prototype.moneyid = 0, t.prototype.moneynum = 0, t.prototype.num = 0, t.prototype.usedMoney = 0, t.prototype.charid = ze.Long ? ze.Long.fromBits(0, 0, !0) : 0, t.prototype.historyList = ze.emptyArray, t.prototype.endTime = 0, t.encode = function(t, e) {
              if (e || (e = Je.create()), null != t.baseinfo && Object.hasOwnProperty.call(t, "baseinfo") && Ke.db.BaseRedPacketInfo.encode(t.baseinfo, e.uint32(10).fork()).ldelim(), null != t.moneyid && Object.hasOwnProperty.call(t, "moneyid") && e.uint32(16).uint32(t.moneyid), null != t.moneynum && Object.hasOwnProperty.call(t, "moneynum") && e.uint32(24).uint32(t.moneynum), null != t.num && Object.hasOwnProperty.call(t, "num") && e.uint32(32).uint32(t.num), null != t.usedMoney && Object.hasOwnProperty.call(t, "usedMoney") && e.uint32(40).uint32(t.usedMoney), null != t.charid && Object.hasOwnProperty.call(t, "charid") && e.uint32(48).uint64(t.charid), null != t.historyList && t.historyList.length)
                for (var i = 0; i < t.historyList.length; ++i) Ke.db.DistributeRedPacketInfo.HistoryInfo.encode(t.historyList[i], e.uint32(58).fork()).ldelim();
              return null != t.endTime && Object.hasOwnProperty.call(t, "endTime") && e.uint32(64).uint32(t.endTime), e
            }, t.decode = function(t, e) {
              t instanceof Qe || (t = Qe.create(t));
              for (var i = void 0 === e ? t.len : t.pos + e, s = new Ke.db.DistributeRedPacketInfo; t.pos < i;) {
                var o = t.uint32();
                switch (o >>> 3) {
                  case 1:
                    s.baseinfo = Ke.db.BaseRedPacketInfo.decode(t, t.uint32());
                    break;
                  case 2:
                    s.moneyid = t.uint32();
                    break;
                  case 3:
                    s.moneynum = t.uint32();
                    break;
                  case 4:
