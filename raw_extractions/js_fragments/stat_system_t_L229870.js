// Fragment: stat_system_t_L229870.js
// Lines: 229870-229970 of bundle-beautified.js
// Categories: Stat System
// Keywords: attack
// Hit lines: 229870

            if (i && i.attack) {
              const t = SceneManager.inst.ECS.entities.getByUid(e);
              if (null == (s = null == t ? void 0 : t.getComponent(UnitComponent2)) ? void 0 : s.hasUState(1)) this._serverNpcActionMap.set(e, 0);
              else {
                const i = null != (o = this._serverNpcActionMap.get(e)) ? o : 0;
                if (i) {
                  if (TimeUtil.serverSecTime > i) {
                    AnimatorSystem.play(null == t ? void 0 : t.getComponent(AnimatorComponent), 4, !0);
                    const i = TimeUtil.serverSecTime + MathUtil.randomInt(3, 6);
                    this._serverNpcActionMap.set(e, i)
                  }
                } else {
                  const t = TimeUtil.serverSecTime + MathUtil.randomInt(3, 6);
                  this._serverNpcActionMap.set(e, t)
                }
              }
            }
          }
        }))
      }
      _move() {
        if ((this.hasInteractNpc() || this.canAutoFindRoad) && this._moveTarget) {
          const t = UnitHelper.getMyEntity();
          if (t) {
            const e = null == t ? void 0 : t.getComponent(UnitComponent2);
            if (e) {
              if (ToolUtil.getDistance({
                  x: e.Position.x,
                  y: e.Position.z
                }, {
                  x: this._movePos.x,
                  y: this._movePos.z
                }) > this._moveDis) this._tempV3.x = this._movePos.x - e.Position.x, this._tempV3.y = this._movePos.z - e.Position.z, this._tempV3.normalize(), this.dispatchEvent(MsgName.Msg_ClickMove_Move, this._tempV3);
              else {
                this._moveTarget = !1, this._movePos.x = 0, this._movePos.z = 0;
                let t = this._moveFinFunc;
                this._moveFinFunc = null, null == t || t(), this.dispatchEvent(MsgName.Msg_ClickMove_Stop)
              }
            }
          }
        }
      }
      updateInteractTarget() {
        var t;
        switch (this._curTargetName) {
          case "Npc":
            if (null == (t = this._npcMap.get(this._curTarget)) ? void 0 : t.canInteract) return;
            break;
          case "sNpc":
            if (this.serverNpcMap.has(this._curTarget)) return
        }
        this._clickTarget = !0, this.clearClickTarget(), this._updateInteract(0)
      }
      enterMainCity(t = !0, e = !1) {
        if (OpenFuncModel.inst.isFuncOpen(import_proto231.default.openfunc.OpenFuncID.MAIN_CITY, !0)) {
          if (WeiMianRuQinModel.inst.isOpen) {
            if (null != TeamModel.inst.RoomInfo) return void UIManager.inst.openMsg(ToolUtil.chinese(1416));
            if (!e) return void UIManager.inst.openMsg(ToolUtil.chinese(3967));
            if (!WeiMianRuQinModel.inst.planeInfo) return
          }
          t && this.sendReqIntoMainCity(), this.isEntered || (UIManager.inst.openLoading(ToolUtil.chinese(1201), .45, 1e4), this.loadAllNpc(), this.addEvent(MsgName.Msg_JoyStick_Down, this.onMouseDown, this), this.addEvent(MsgName.Msg_JoyStick_Drag, this.onMouseDrag, this), this.addEvent(MsgName.Msg_JoyStick_End, this.onMouseUp, this), this.addEvent(MsgName.MainCity_Chat_Bubble, this.onChat, this), this.addEvent(MsgName.EntityUStateUpdate, this.onUStateUpdate, this), this.addEvent(MsgName.Sect_Scene_Change, this.checkFightView, this), this.addEvent(MsgName.IsMainView_Change, this.checkFightView, this), this.addEvent(MsgName.Rank_RefreshCloths, this.refreshModelCase), MainRunningHuFaCtrl.inst.sendReqEscortInfo(), this._isEntered = !0, this.loadSculpture(), this.checkFightView(), FaXiangJianShiCtrl.inst.refreshTaskNpcs(), MainRunningXunBaoCtrl.inst.ReqSeekInfo())
        }
      }
      refreshCityEffect() {
        if (21 == CoreMapCtrl.inst.mapType && AdventureCtrl.inst.isInBreak() && !ToolUtil.isSectPlayer) {
          if (this._eff) this._eff.active = !0;
          else if (!this._loadEff) {
            this._loadEff = !0;
            const t = "resourcesLib/effect/Prefab/UiFX/Maincity_camera_eff_mori.lh";
            ResManager.inst.load(t).then((t => {
              this._eff = null == t ? void 0 : t.create(), SceneManager.inst.camera.addChild(this._eff), this._eff.transform.localPosition = new Laya.Vector3(0, -.75, -1.2), this._eff.active = !0
            }))
          }
        } else this._eff && (this._eff.active = !1)
      }
      checkBubbleDialog() {
        let t = LocalCache.getItem("MainCity_BubbleDialog", "", !0);
        21 == CoreMapCtrl.inst.mapType && AdventureCtrl.inst.isInBreak() && "1" != t && (LocalCache.setItem("MainCity_BubbleDialog", "1", !0), UIManager.inst.open(BubbleDialogView.UID, null, 1025060))
      }
      onMouseDown() {
        for (let [t, e] of this._npcMap) e.updateRenderPos();
        for (let [t, e] of this._playerMap) e.updateRenderPos();
        for (let [t, e] of this.serverNpcMap) e.updateRenderPos();
        for (let [t, e] of this._sculptures) e.updateRenderPos();
        this._isMouseDown = !0
      }
      onMouseDrag() {
        MainRunningHuFaCtrl.inst.isWalking || MainRunningXunBaoCtrl.inst.isAutoXunBao() || (this._moveTarget = !1), this._nearbyPlayers.length > 0 && (this._nearbyPlayers.splice(0), this.dispatchEvent(MsgName.MainCity_Nearby_Player))
      }
      onMouseUp() {
        if (!this._isMouseDown) return;
        this._isMouseDown = !1;
        let t = SceneManager.inst.camera;
        if (null == t) return;
        for (let [t, e] of this._playerMap) e.updateRenderPosUp();
        let e = new Laya.Vector2;
        if (e.x = Laya.stage.mouseX, e.y = Laya.stage.mouseY, t.viewportPointToRay(e, this._ray), t.scene.physicsSimulation.rayCast(this._ray, this._hitResult, 1e4, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2)) {
          let t = this._hitResult.collider.owner;
          this.clickCollider(t.name)
        } else this.clearClickTarget(), this._nearbyPlayers.length > 0 && (this._nearbyPlayers.splice(0), this.dispatchEvent(MsgName.MainCity_Nearby_Player))
      }
