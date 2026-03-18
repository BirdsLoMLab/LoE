// Fragment: formula_o_L131161.js
// Lines: 131161-131262 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.ceil, Math.min
// Hit lines: 131161, 131162

        const o = Math.min(i, Math.ceil(e / s)),
          n = Math.min(s, e),
          r = t.virtualItemSize.x,
          a = t.virtualItemSize.y,
          l = t.lineGap,
          c = t.columnGap;
        t.width = r * n + (n - 1) * c, t.height = o * a + (o - 1) * l
      }
      static checkChildIdxOk(t, e) {
        return null != e && e >= 0 && t.numChildren > e
      }
      static calculateProgress(t, e) {
        const i = t.length;
        if (i < 2) return 0;
        if (e <= t[0]) return 0;
        if (e >= t[i - 1]) return 100;
        let s = 0;
        for (let o = 0; o < i - 1; o++)
          if (e >= t[o] && e < t[o + 1]) {
            s = o;
            break
          } const o = t[s],
          n = t[s + 1];
        return Number(((s + (e - o) / (n - o)) / (i - 1) * 100).toFixed(2))
      }
      static calculateSegmentProgress(t, e) {
        const i = [];
        for (let s = 0; s < t.length - 1; s++) {
          const o = t[s],
            n = t[s + 1];
          if (e >= n) i.push(1);
          else if (e > o) {
            const t = (e - o) / (n - o);
            i.push(t)
          } else i.push(0)
        }
        return i
      }
      static calculateRowCol(t, e, i) {
        if (i <= 0 || e <= 0) return {
          row: 0,
          col: 0
        };
        if (t < 0 || t >= e * i) return {
          row: 0,
          col: 0
        };
        return {
          row: Math.floor(t / i),
          col: t % i
        }
      }
      static convertCompToNodeLocal(t, e) {
        const i = t.localToGlobal(0, 0);
        let s = e;
        if (e instanceof fgui.GGroup) {
          if (!e.parent) return console.error("GGroup 没有父容器，无法计算坐标"), {
            x: 0,
            y: 0
          };
          s = e.parent
        }
        return s.globalToLocal(i.x, i.y)
      }
    },
    _Cfgcloud_treasure_data = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgcloud_treasure_data.JsonName = "cloud_treasure_data.json";
  var Cfgcloud_treasure_data = _Cfgcloud_treasure_data,
    _Cfgcloud_treasure_skin = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgcloud_treasure_skin.JsonName = "cloud_treasure_skin.json";
  var Cfgcloud_treasure_skin = _Cfgcloud_treasure_skin,
    _Cfgcloud_treasure_pool = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgcloud_treasure_pool.JsonName = "cloud_treasure_pool.json";
  var Cfgcloud_treasure_pool = _Cfgcloud_treasure_pool,
    _Cfgcloud_treasure_must_reward = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgcloud_treasure_must_reward.JsonName = "cloud_treasure_must_reward.json";
  var Cfgcloud_treasure_must_reward = _Cfgcloud_treasure_must_reward,
    _UIActTplCardDaJiangView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "ActTplCard", this.name = "ActTplCardDaJiangView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.goEmpty)
      }
    };
  _UIActTplCardDaJiangView.UID = "ui://cmwk8c94qus10", __decorateClass([UIProperty], _UIActTplCardDaJiangView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIActTplCardDaJiangView.prototype, "list_log", 2), __decorateClass([UIProperty], _UIActTplCardDaJiangView.prototype, "goEmpty", 2), __decorateClass([UIProperty], _UIActTplCardDaJiangView.prototype, "fixHeight", 2);
