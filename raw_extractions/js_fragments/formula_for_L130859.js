// Fragment: formula_for_L130859.js
// Lines: 130859-130970 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max, Math.min
// Hit lines: 130860, 130870

        if (Math.abs(i - t) > Math.abs(s - e)) {
          r = this.getLineFunc(o, n, 0), Laya.Pool.recoverByClass(o), Laya.Pool.recoverByClass(n), a = Math.min(t, i), l = Math.max(t, i);
          for (let t = a; t <= l; t++) {
            t === a && (t += .5);
            let e = r(t);
            h = this.getNodesUnderPoint(t, e);
            for (let t = 0; t < h.length; t++)
              if (c = h[t], !1 === c.walkable) return !0;
            t === a + .5 && (t -= .5)
          }
        } else {
          r = this.getLineFunc(o, n, 1), Laya.Pool.recoverByClass(o), Laya.Pool.recoverByClass(n), a = Math.min(e, s), l = Math.max(e, s);
          for (let t = a; t <= l; t++) {
            t === a && (t += .5);
            let e = r(t);
            h = this.getNodesUnderPoint(e, t);
            for (let t = 0; t < h.length; t++)
              if (c = h[t], !1 === c.walkable) return !0;
            t === a + .5 && (t -= .5)
          }
        }
        return !1
      }
      getNodesUnderPoint(t, e, i) {
        let s = new Array,
          o = t % 1 == 0,
          n = e % 1 == 0;
        if (o && n ? (s[0] = this.getNode(t - 1, e - 1), s[1] = this.getNode(t, e - 1), s[2] = this.getNode(t - 1, e), s[3] = this.getNode(t, e)) : o && !n ? (s[0] = this.getNode(t - 1, Math.floor(e)), s[1] = this.getNode(t, Math.floor(e))) : !o && n ? (s[0] = this.getNode(Math.floor(t), e - 1), s[1] = this.getNode(Math.floor(t), e)) : s[0] = this.getNode(Math.floor(t), Math.floor(e)), i && i.length > 0)
          for (let t = 0; t < s.length; t++) - 1 !== i.indexOf(s[t]) && (s.splice(t, 1), t--);
        return s
      }
      getLineFunc(t, e, i = 0) {
        let s, o, n;
        if (t.x === e.x) {
          if (0 === i) throw new Error(ToolUtil.chinese(1201));
          return 1 === i && (s = function(e) {
            return t.x
          }), s
        }
        if (t.y === e.y) {
          if (0 === i) s = function(e) {
            return t.y
          };
          else if (1 === i) throw new Error(ToolUtil.chinese(1201));
          return s
        }
        return o = (t.y - e.y) / (t.x - e.x), n = t.y - o * t.x, 0 === i ? s = function(t) {
          return o * t + n
        } : 1 === i && (s = function(t) {
          return (t - n) / o
        }), s
      }
      getNeighbors(t, e, i = 1) {
        let s = new Array,
          o = t,
          n = e;
        return o - i >= 0 && s.push(this.getNode(o - i, n)), o < this._colNum - i && s.push(this.getNode(o + i, n)), n - i >= 0 && s.push(this.getNode(o, n - i)), n < this._rowNum - i && s.push(this.getNode(o, n + i)), s.filter((t => t.walkable))
      }
    },
    _PathFindMgr = class t {
      constructor() {
        this._astar = new Astar, this._nodeGrid = new NodeGrid, this._binaryHeaps = new BinaryHeaps, this._gridMap = new Map, this._isInitGrid = !1, window[this.__proto__.constructor.name] = this
      }
      reset() {
        return this._binaryHeaps.reset(), this._nodeGrid.recover(), !0
      }
      static get inst() {
        return null == t._instance && (t._instance = new t, SingletonMgr.register(t._instance)), t._instance
      }
      get isInitGrid() {
        return this._isInitGrid
      }
      updateMapData(t, e) {
        if (null != this._mapName && this._mapName === t.name) return;
        this._mapName = t.name, this._isInitGrid = !1, this._tileWidth = e, this._width = t.width / 100, this._height = t.height / 100, this._maxRow = this._height / e, this._maxCol = this._width / e, this._binaryHeaps.reset();
        let i = [-this._maxCol - 1, -this._maxCol, 1 - this._maxCol, -1, 1, this._maxCol - 1, this._maxCol, this._maxCol + 1],
          s = this._gridMap.get(t.name);
        if (null == s) {
          s = new Map;
          for (let e = 0; e < t.cells.length; e++) {
            if (0 != t.cells[e].type) {
              s.set(e, AStarNode.StaticUnWalk);
              for (let o of i)
                if (!s.has(e + o)) {
                  let i = t.cells[e + o];
                  i && 0 == i.type && s.set(e + o, AStarNode.UnWalkableTag)
                }
            }
          }
          this._gridMap.set(this._mapName, s)
        }
        this._nodeGrid.updateGridSize(this._maxCol, this._maxRow, s), this._astar.updateAstarGrid(this._nodeGrid, this._binaryHeaps), this._isInitGrid = !0
      }
      findPath(t, e, i, s) {
        if (!this._isInitGrid) return console.error("findPath A* data havn't update"), null;
        let o = new Array;
        if (null != this._astar && null != this._nodeGrid) {
          let n = this.isGridWalkable(t, e),
            r = this.isGridWalkable(i, s);
          if (!n && r) {
            let n = this.gridToSceneCenterPos(t, e);
            o.push(n);
            let r = this.gridToSceneCenterPos(i, s);
            o.push(r)
          } else {
            if (!r) {
              let t = this._nodeGrid.getNode(i, s),
                e = this.findNearestWalkableNode(t, 2);
              null != e && (i = e.x, s = e.y)
            }
            let n, a = this._astar.findFloydPath(t, e, i, s),
              l = this._nodeGrid.nodeList;
