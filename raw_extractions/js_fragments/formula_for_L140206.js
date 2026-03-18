// Fragment: formula_for_L140206.js
// Lines: 140206-140306 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max
// Hit lines: 140206

        for (const e in this._StageWelfare) t = Math.max(t, Number(e));
        return t
      }
      get liveCard() {
        return this._liveCard
      }
      set liveCard(t) {
        this._liveCard = t
      }
      get sixCard() {
        return this._sixCard
      }
      set sixCard(t) {
        this._sixCard = t
      }
      get SevenTask() {
        return this._SevenTask
      }
      set SevenTask(t) {
        this._SevenTask = t
      }
      get Consume() {
        return null != this._Consume || (this._Consume = new import_proto22.default.db.Consume), this._Consume
      }
      set Consume(t) {
        this._Consume = t
      }
      get FundRole() {
        return this._FundRole
      }
      set FundRole(t) {
        this._FundRole = t
      }
      get FundEquip() {
        return this._FundEquip
      }
      set FundEquip(t) {
        this._FundEquip = t
      }
      get MoneyTree() {
        return this._MoneyTree
      }
      set MoneyTree(t) {
        this._MoneyTree = t
      }
      get LevelReward() {
        return this._levelReward
      }
      set LevelReward(t) {
        this._levelReward = t
      }
      get BattlePasses() {
        return this._battlePasses
      }
      set BattlePasses(t) {
        this._battlePasses = t
      }
      get curDayConsume() {
        var t, e;
        const i = TimeUtil.serverSecTime;
        if ((null == (t = this.Consume) ? void 0 : t.startTime) <= i && i < this.Consume.closeTime[2]) return {
          id: 101,
          startTime: this.Consume.startTime,
          getInfo: this.Consume.getInfo,
          days: this.Consume.days,
          closeTime: this.Consume.closeTime[2],
          cfgs: CfgTimelimit_consume.get({
            type: 2
          }),
          reqFunc: t => WelfareCtrl.inst.ReqGetConsumeRwd(t)
        };
        {
          const t = null == (e = this.dayList) ? void 0 : e[this.dayConsumeId];
          if ((null == t ? void 0 : t.startTime) <= i && i < t.closeTime) {
            const e = Cfgmoney_dai_data.get(this.dayConsumeId),
              i = e ? Cfgmoney_daily.get({
                stage: e.stage
              }) : null;
            return {
              id: this.dayConsumeId,
              startTime: t.startTime,
              getInfo: t.getInfo,
              days: t.days,
              closeTime: t.closeTime,
              cfgs: i,
              reqFunc: t => WelfareCtrl.inst.ReqGetDayConsumeRwd(t)
            }
          }
        }
        return null
      }
      get curAccConsume() {
        var t, e, i;
        const s = TimeUtil.serverSecTime;
        if ((null == (t = this.Consume) ? void 0 : t.startTime) <= s && s < this.Consume.closeTime[1]) return {
          id: 101,
          startTime: this.Consume.startTime,
          getInfo: this.Consume.getInfo,
          money: this.Consume.money,
          closeTime: this.Consume.closeTime[1],
          cfgs: CfgTimelimit_consume.get({
