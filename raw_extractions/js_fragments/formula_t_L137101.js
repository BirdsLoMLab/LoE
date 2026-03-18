// Fragment: formula_t_L137101.js
// Lines: 137101-137301 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max, Math.min
// Hit lines: 137102, 137110, 137111, 137206

            let t = CfgSupremeHall_data.get(e.id);
            o = Math.max(o, t.type)
          }
          for (let n = o; n > 0; n--) {
            if (i && 1 == n) continue;
            let o = this.getPlayerValidZhiZunArr(n, t, e);
            s = s.concat(o)
          }
        }
        let o = Math.min(this.getLeftPopCount(), s.length);
        o = Math.min(o, this.pop_zhizun_count);
        for (let t = 0; t < o; t++) WndPopManager.inst.pushWndToQueue("SupremeHallCiFuView", !1, null, s[t])
      }
      getPlayerValidZhiZunArr(t, e, i) {
        let s = [];
        for (let o of e.infos) {
          let e = CfgSupremeHall_data.get(o.id);
          if (t == e.type && o.charid) {
            let t = !1;
            if (this.isValidZhiZunQiu(e.id) && 0 == e.show) t = !0;
            else if (0 != e.show) {
              let i = CfgSupremeHall_data.get(e.show, !0);
              if (i) {
                !this.isValidZhiZunQiu(i.id) && this.isValidZhiZunQiu(o.id) && (t = !0)
              }
            }
            let n = !this.isOwnerOutTime(o.id);
            if (i) {
              24 * this.pop_zhizun_time * 60 * 60 * 1e3 > this.getInfoCdTime(o, e) - TimerMgr.inst.serverTime && (n = !1)
            }
            t && n && (this.hashSetId.has(o.charid) || s.push(e), this.hashSetId.add(o.charid))
          }
        }
        return s
      }
      getAllTitleByCharId(t) {
        let e = [],
          i = [];
        for (let e of this.retSupremeHall.infos)
          if (Number(e.charid) == Number(t)) {
            let t = CfgSupremeHall_data.get(e.id),
              s = !1;
            if (this.isValidZhiZunQiu(t.id) && 0 == t.show) s = !0;
            else {
              let i = CfgSupremeHall_data.get(t.show, !0);
              if (i) {
                !this.isValidZhiZunQiu(i.id) && this.isValidZhiZunQiu(e.id) && (s = !0)
              }
            }
            let o = !this.isOwnerOutTime(e.id);
            s && o && i.push(t)
          } i.sort(((t, e) => t.type - e.type));
        for (let t of i) e.push(t.title_img);
        return e
      }
      getInfoCdTime(t, e) {
        let i = t.ctime;
        return (null == e ? void 0 : e.vanish_time) > 0 ? i = 1e3 * t.ctime + 1e3 * e.vanish_time : (null == e ? void 0 : e.duration_time) > 0 && (i = 1e3 * t.ctime + 1e3 * e.duration_time), i
      }
      getLeftAwardCount() {
        return OpenFuncModel.inst.isFuncOpen(import_proto14.default.openfunc.OpenFuncID.SUPREME_HALL, !1) ? this.xml_get_award_count - this.awardCount : 0
      }
      get xml_pop_count() {
        var t;
        return Number(null == (t = this.xml) ? void 0 : t.pop_count)
      }
      get xml_get_award_count() {
        var t;
        return Number(null == (t = this.xml) ? void 0 : t.get_award_count)
      }
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
      setTouch(t, e, i = 1) {
        this.touchGraph = e, this.mapHall = t, this.angleOffset = 0, this.zhizunServerId = i, e && this.addEvent(), this.initBtn(i), this.rootHuan.active = !0
      }
      sortBtn() {
        let t = [],
          e = [],
          i = [],
          s = [];
        for (let o of this.useValidArr) {
          const n = SupremeHallCtrl.inst.checkCanBai(o.id),
            r = SupremeHallCtrl.inst.getInfoById(o.id);
          n ? this.checkIsMy(o.id) ? s.push(o) : t.push(o) : r ? e.push(o) : i.push(o)
        }
        s.sort(((t, e) => t.id - e.id)), t.sort(((t, e) => t.id - e.id)), e.sort(((t, e) => t.id - e.id)), i.sort(((t, e) => t.id - e.id));
        let o = [];
        o = o.concat(s), o = o.concat(t), o = o.concat(e), o = o.concat(i), this.useValidArr = o
      }
      checkIsMy(t) {
        let e = !1;
        if (this.retSupremeHall)
          for (let i of this.retSupremeHall.infos)
            if (i.id == t && i.charid == LoginCtrl.inst.charid) {
              e = !0;
              break
            } return e
      }
      initBtn(t) {
        this.useValidArr = this.getValidData(t), this.sortBtn();
        let e = this.useValidArr.length;
        e = Math.min(this.maxBtnLen, e);
        for (let t = 0; t < e; t++) {
          let i = fgui.UIPackage.createObject("SupremeHallServer", "btnSupreme");
          this.mapHall.addChild(i), this.btnArr.push(i), i.setData(this.quanRoot, this.quanPosRoot, this.useValidArr[t], t, e, this.zhizunServerId)
        }
        if (this.useValidArr.length - e > 0) {
          let t = [];
          for (let e = this.maxBtnLen; e < this.useValidArr.length; e++) t.push(this.useValidArr[e]);
          t.reverse();
          for (let i = 0; i < t.length; i++) {
            let s = fgui.UIPackage.createObject("SupremeHallServer", "btnSupreme");
            this.mapHall.addChild(s), this.btnHideArr.push(s);
            let o = s;
            o.setData(this.quanRoot, this.quanPosRoot, t[i], i + this.maxBtnLen, e, this.zhizunServerId), o.hideBtn()
          }
        }
      }
      updateItemPos() {
        if (!(this.btnArr.length < 0)) {
          for (let t = 0; t < this.btnArr.length; t++) {
            let e = this.btnArr[t];
            e && e.updatePos(this.angleOffset)
          }
          if (this.useValidArr.length > this.maxBtnLen) {
            for (let t = this.btnArr.length - 1; t >= 0; t--) {
              let e = this.btnArr[t];
              e.curDegrees > this.minHideDegress && e.curDegrees < this.maxHideDegress && (this.btnInputHideArr.includes(e) || (this.btnInputHideArr.push(e), this.btnArr.splice(t, 1)))
            }
            this.btnInputHideArr.reverse();
            for (let t = this.btnInputHideArr.length - 1; t >= 0; t--) {
              let e = this.btnInputHideArr[t];
              e.updatePos(this.angleOffset);
              if (!(e.curDegrees > this.minHideDegress && e.curDegrees < this.maxHideDegress)) {
                this.btnInputHideArr.splice(t, 1);
                let i = 0;
                this.dragDir || (i = this.btnHideArr.length - 1);
                let s = this.btnHideArr[i];
                s.resetIndexAndAngle(e.index, e.angleOffset), this.btnHideArr.splice(i, 1), this.btnHideArr.push(e), this.btnArr.push(s), e.hideBtn()
              }
            }
          }
        }
      }
      updateBtnPos() {
        if (!(this.btnArr.length < 0))
          for (let t = 0; t < this.btnArr.length; t++) {
            let e = this.btnArr[t];
            e && e.updatBtnPos()
          }
      }
      onMouseDown(t) {
        this.isDown = !0, this.point.x = t.stageX, this.point.y = t.stageY
      }
      onMouseDrag(t) {
        if (!this.isDown) return;
        let e = 0 == this.point.x && 0 == this.point.y ? 1 : t.stageX - this.point.x,
          i = 0 == this.point.x && 0 == this.point.y ? 1 : t.stageY - this.point.y;
        if (this.dragDir = e <= 0, this.point.x = t.stageX, this.point.y = t.stageY, this.touchGraph) {
          const i = this.touchGraph.globalToLocal(t.stageX, t.stageY);
          if (this.isPointInGraph(i.x, i.y)) {
            this.isDrag = !0;
            let t = e * this._dragTouchSensitive;
            this.dragDir || (t *= .5), this.angleOffset -= t, this.updateItemPos()
          }
        }
        if (this.serverListRoot) {
          let t = this.serverListRoot.transform.localPositionY - .002 * i;
          t = MathUtil.clamp(t, this.touchPosy[this.crossNum - 1], 0), this.serverListRoot.transform.localPositionY = t
        }
        this.dispatchEvent(MsgName.SupremeHall_Server_list_drag)
      }
      autoMove(t) {
        !this.isDrag && this.touchGraph && (this.angleOffset -= t * this._dragTouchSensitive, this.updateItemPos())
      }
      isPointInGraph(t, e) {
        const i = this.touchGraph.width,
          s = this.touchGraph.height;
        return t >= 0 && t <= i && e >= 0 && e <= s
      }
      onMouseUp(t) {
        this.isDown = !1, this.isDrag = !1, this.point.x = this.point.y = 0
      }
      initScene() {
        this.bgTweener && (this.bgTweener.kill(), this.bgTweener = null), LoadingSceneCtrl.inst.playCloud(50003, Laya.Handler.create(this, (() => {
          this.enter3DHandle()
        })), "Window", [SupremeHallServerView.UID])
      }
      exitScene(t = "") {
        LoadingSceneCtrl.inst.bgSprite3D && (LoadingSceneCtrl.inst.bgSprite3D.transform.localScale = this.srcLocalScale, LoadingSceneCtrl.inst.bgSprite3D.transform.localPosition = this.srcBgLocalPosition), LoadingSceneCtrl.inst.closeCloud(50003, Laya.Handler.create(this, (() => {
          this.clearItemModels(), this.removeEvent(), this.clear3dSprite(), this.destroyBtnSupreme(), this.mapHall = null, this.touchGraph = null, t && "" != t && UIManager.inst.open(t)
        })))
      }
      destroyBtnSupreme() {
        for (let t = 0; t < this.btnArr.length; t++) {
          const e = this.btnArr[t];
          e && e.displayObject && e.__beginClose()
