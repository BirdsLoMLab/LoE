// Fragment: formula_i_L135275.js
// Lines: 135275-135377 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.min
// Hit lines: 135277

            let i = e.redPointKey,
              s = RedPointMgr.inst.combineKey(349, e.cfg.id);
            RedPointMgr.inst.addDepend(i, s), s = RedPointMgr.inst.combineKey(351, e.cfg.id), RedPointMgr.inst.addDepend(i, s), s = RedPointMgr.inst.combineKey(350, e.cfg.id), RedPointMgr.inst.addDepend(i, s), this.mini_id = Math.min(this.mini_id, t.id)
          })), this.mini_id = Cfgtreasure_main.get(this.mini_id).item_id, !this._poolCfgMap) {
          this._poolCfgMap = new Map;
          let t = RedPointMgr.inst.combineKey(346, this.Poolid_all);
          this._dic.forEach((e => {
            let i = e.cfg.type;
            this._poolCfgMap.has(i) || this._poolCfgMap.set(i, new Map), this._poolCfgMap.get(i).set(e.id, e), RedPointMgr.inst.addDepend(t, e.redPointKey)
          })), this._poolCfgMap.set(this.Poolid_all, this._dic)
        }
        for (const [t, e] of this._poolCfgMap) {
          let i = RedPointMgr.inst.combineKey(346, t);
          RedPointMgr.inst.addDepend(347, i), e.forEach(((t, e) => {
            RedPointMgr.inst.addDepend(i, t.redPointKey)
          }))
        }
        if (!this._suitMap) {
          this._suitMap = new Map;
          let t = Cfgtreasure_suit.get();
          for (const e of t) {
            let t = new TreasureSuitData(e);
            this._suitMap.set(t.cfg.id, t);
            let i = RedPointMgr.inst.combineKey(353, t.cfg.id);
            RedPointMgr.inst.addDepend(352, i);
            let s = RedPointMgr.inst.combineKey(354, t.pid);
            RedPointMgr.inst.addDepend(s, i)
          }
        }
        ItemObserverUtil.addItemSubTypeObserver(2, ItemSubType.Material.Treasure, this, (t => {
          this.redpointUpdate()
        })), ItemObserverUtil.addItemSubTypeObserver(13, ItemSubType.Treasure.Piece, this, (t => {
          this.redpointUpdate()
        })), this.addEvent(MsgName.Treature_Event, this.redpointUpdate), this.addEvent(MsgName.Func_Open_Id_Change, ((t = 0) => {
          t == this.funId && this.redpointUpdate()
        })), RedPointMgr.inst.setOpenFun(341, 531), RedPointMgr.inst.setActive(357, !0)
      }
      isPiece(t = 0) {
        let e = CfgitemBase.get(t);
        return !(!e || 13 != e.type || 2 != e.subtype)
      }
      getShopChangeList(t = !1) {
        let e = new Map;
        if (this._pieceMap.forEach(((t, i) => {
            var s;
            let o = ItemCtrl.inst.getItemNum(i),
              n = null != (s = e.get(i)) ? s : 0;
            t.has || (n -= t.cfg.num), e.set(i, o + n)
          })), Cfgtreasure_star.get().forEach((t => {
            t.cost.forEach((i => {
              let s = i[0];
              if (this.isPiece(s)) {
                let o = e.get(s);
                if (o > 0) {
                  let n = this._dic.get(t.treasure_id);
                  n.data && n.data.star > t.star || (o -= i[1], e.set(s, o))
                }
              }
            }))
          })), t) {
          let t = !1;
          return e.forEach(((e, i) => {
            e > 0 && (t = !0)
          })), void RedPointMgr.inst.setActive(355, t)
        }
        let i = [];
        return e.forEach(((t, e) => {
          t > 0 && i.push(ItemUtil.createDataById(e, t))
        })), i.sort(((t, e) => t.itemCfg.quality - e.itemCfg.quality)), i
      }
      getItemByItemId(t = 0) {
        let e = this._dicitemid.get(t);
        return e
      }
      getItem(t = 0) {
        return this._dic.get(t)
      }
      getSData(t = 0) {
        return this._has.get(t)
      }
      getNewList() {
        return this._newList
      }
      deleteNew(t) {
        let e = this._newList.findIndex((e => e === t)); - 1 !== e && this._newList.splice(e, 1)
      }
      clearNewList() {
        this._newList = []
      }
      onUpdate(t) {
        this.redCdTime > 0 && (this.redCdTime -= t, this.redPointFlag && this.redCdTime <= 0 && this.redpointUpdate())
      }
      setOpenTreasureViewFlag(t) {
        this.openTreasureViewFlag || (this.openTreasureViewFlag = t, this.redpointUpdate())
      }
      redpointUpdate() {
        var t, e;
        if (!OpenFuncModel.inst.isFuncOpen(this.funId)) return;
        if (!this.info) return;
        if (this.redCdTime > 0) return void(this.redPointFlag = !0);
        this.redPointFlag = !1, this.redCdTime = 300;
        let i = !1;
        for (const [t, e] of this._dic) {
