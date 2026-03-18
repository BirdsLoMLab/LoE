// Fragment: stat_system_t_L180657.js
// Lines: 180657-180817 of bundle-beautified.js
// Categories: Stat System
// Keywords: block
// Hit lines: 180659, 180681, 180707, 180717

              const t = r.home;
              return {
                icon: this._model.getGridShowCfgByPos(t).block,
                isHigh: !1
              }
            }
            return {
              icon: null == o ? void 0 : o.image,
              isHigh: !1
            }
          }
          if (7 == o.type) return {
            icon: null == o ? void 0 : o.image,
            isHigh: !1
          }
        }
        s = s || MathUtil.combineTo32Bit(e, i);
        const o = this._model.getBuildData(s) || this._model.getBelongBuildData(e, i);
        if (o) {
          let t = o.sData.septId;
          const e = this._model.septMap.get(t);
          if (e) {
            const t = e.home;
            return {
              icon: this._model.getGridShowCfgByPos(t).block,
              isHigh: !1
            }
          } {
            const t = this._model.getEmptyGridBaseCfg();
            return {
              icon: null == t ? void 0 : t.image,
              isHigh: !0
            }
          }
        }
      }
      getMiniGridShowInfo(t) {
        const e = t.serPos;
        if (!e) return;
        let i = {
          icon: "0",
          isBuild: !1
        };
        if (t.gridType && 6 == t.gridType) {
          const t = this._model.emptyMap.get(e);
          let s = null == t ? void 0 : t.septId;
          const o = this._model.septMap.get(s);
          if (o) {
            const t = o.home,
              e = this._model.getGridShowCfgByPos(t);
            i.icon = e.block
          }
        } else {
          let s = this._model.buildMap.get(e) || this._model.buildMap.get(t.mainSerPos);
          if (s) {
            i.isBuild = !0;
            const t = this._model.septMap.get(s.sData.septId);
            if (t) {
              const e = t.home,
                s = this._model.getGridShowCfgByPos(e);
              i.icon = s.block
            }
          }
        }
        return i
      }
      isMovePlayerInScreen(t) {
        const e = this.getMovePlayerCurUIPos(t);
        return this.isPosInScreen(e)
      }
      isPosInScreen(t, e = 80) {
        return !!t && XKLineUtils.isInside(t, this._scrollPane.posX - e, this._scrollPane.posY - e, this._scrollPane.viewWidth + 2 * e, this._scrollPane.viewHeight + 2 * e)
      }
      isLineInScreen(t, e = 80) {
        return !!t.end_ui_pos && XKLineUtils.isLineInBounds(t.start_ui_pos, t.end_ui_pos, this._scrollPane.posX - e, this._scrollPane.posY - e, this._scrollPane.viewWidth + 2 * e, this._scrollPane.viewHeight + 2 * e)
      }
      checkCanConnect(t, e, i) {
        const s = MathUtil.combineTo32Bit(t[0], t[1]);
        let o = this._model.buildMap.get(s);
        if (!o || o.sData.septId != i) return !1;
        const n = MathUtil.combineTo32Bit(e[0], e[1]);
        return o = this._model.buildMap.get(n), !(!o || o.sData.septId != i)
      }
      getMovePath(t, e, i) {
        let s, o = XingkongCtrl.inst.findPathInfo(t, e, ((s, o, n) => this.isMoveBlock(t, e, i, s, o, n)));
        if (o.path.length > 0) {
          s = [];
          for (const t of o.path) {
            const e = t.toArr();
            s.push(MathUtil.combineTo32Bit(e[0], e[1]))
          }
        }
        return s
      }
      isMoveBlock(t, e, i, s, o, n) {
        if (XKUtil.isSameGrid2(t, s, o)) return !1;
        if (XKUtil.isSameGrid2(e, s, o)) return !1;
        if (0 == n) {
          const n = XingkongMainModel.inst.getBelongBuildData(s, o);
          return !!n && (!XKUtil.isSameGrid(n.uv, e) && !XKUtil.isSameGrid(n.uv, t) && n.sData.septId != i)
        }
        const r = Cfgstarry_road_grid.get(n);
        if (!r) return !1;
        if (7 == r.type) return !0;
        if (6 == r.type) return !1;
        const a = MathUtil.combineTo32Bit(s, o),
          l = this._model.buildMap.get(a);
        return !l || l.sData.septId != i
      }
      geMyMoveTotalTime(t, e, i = !1) {
        const s = this._model.getBuildDataByUV(t[0], t[1]),
          o = this._model.getBuildDataByUV(e[0], e[1]);
        if (!s || !o) return {
          time: 0
        };
        if (2 != s.realtion && 2 != o.realtion) return {
          time: 0
        };
        const n = this._model.selfData.septId;
        let r, a = XingkongCtrl.inst.findPathInfo(t, e, ((i, s, o) => this.isMoveBlock(t, e, n, i, s, o))),
          l = 0;
        if (i && a.path.length > 0) {
          r = [];
          for (const i of a.path) {
            const s = i.toArr();
            r.push(MathUtil.combineTo32Bit(s[0], s[1])), this.isGridConnect(s, t) || this.isGridConnect(s, e) || l++
          }
        }
        return {
          time: l * this._model.getGridMoveTime(),
          path: r
        }
      }
      getMovePlayerCurUIPos(t) {
        if (!t) return;
        const e = t.sData.charId,
          i = this._mapMgr.getCurPlayer(e);
        if (i) return [i.x, i.y];
        const s = TimerMgr.inst.serverTimeSec - t.sData.startTs,
          o = t.start_ui_pos,
          n = t.end_ui_pos,
          r = Math.min(s / t.move_total_time, 1);
        return [o[0] + r * (n[0] - o[0]), o[1] + r * (n[1] - o[1])]
      }
      getLineItem(t) {
        return this._mapMgr.getCurLine(t)
      }
      removeMovePlayer(t) {
        this._mapMgr.removeLine(t), this._mapMgr.removePlayer(t), this._model.removeMoveData(t)
      }
      removeSeptMove(t) {
        if (t)
          for (const [e, i] of this._model.moveMap) i.sData.septId == t && this.removeMovePlayer(e)
      }
      isCanSpeedMove(t = 0) {
        return t > this._model.getMoveSpeedLimitTime()
      }
      checkCanMoveForSelf(t = !1) {
        const e = this._model.selfData.sData.enegy;
        if (this.isSelfInCamp()) {
          const i = this._model.selfData.sData.maxEnegy,
