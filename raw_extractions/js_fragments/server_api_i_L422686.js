// Fragment: server_api_i_L422686.js
// Lines: 422686-422794 of bundle-beautified.js
// Categories: Server/API
// Keywords: http, joynetgame
// Hit lines: 422687, 422691, 422694

            let i = `sydh_${e||BaseConfig.gamePlat}.json`;
            return t.get_urlBak("https://sydh-us-cdnres.joynetgame.com/cdnconfig_" + Laya.timer.currTimer + "/serverlists/" + i)
          }
          return t._urlServer
        }
        return "http://172.16.12.193/monica_zonelist.json"
      }
      static setPreServer(e, i, s) {
        t.isRelease && (t.bifrost_us1 = i, t.bifrost_us2 = s, 0 == t.review ? (t.bifrost = "mix_us2" == BaseConfig.gamePlat ? s : i, t._urlServer = "") : (t.bifrost = e, BaseConfig.gamePlat = `${BaseConfig.gamePlat}test`, t._urlServer = t.get_urlBak(`https://sydh-us-cdnres.joynetgame.com/US/stable/serverlists/serverlist_${t.review}.json`)))
      }
      static HudPos(t, e) {
        var i = MathUtil.vector4;
        t.viewport.project(e, t.projectionViewMatrix, i);
        let s = Laya.Config3D.pixelRatio;
        s || (s = 1);
        const o = i.x / s,
          n = i.y / s;
        return fgui.GRoot.inst.globalToLocal(o / Laya.stage.clientScaleX, n / Laya.stage.clientScaleY)
      }
      static WorldToLocalPos(t, e) {
        var i = MathUtil.vector4;
        t.viewport.project(e, t.projectionViewMatrix, i);
        let s = Laya.Config3D.pixelRatio;
        s || (s = 1);
        const o = i.x / s,
          n = i.y / s;
        return fgui.GRoot.inst.globalToLocal(o / Laya.stage.clientScaleX, n / Laya.stage.clientScaleY)
      }
      static ScreenToWorld(t, e) {
        var i = .5 * t.fieldOfView * Math.PI / 180;
        let s = e.z * Math.tan(i),
          o = s * t.aspectRatio,
          n = this.GetLowerLeft(t.transform, e.z, o, s),
          r = this.GetScreenScale(o, s);
        var a = new Laya.Vector3,
          l = this.InverseTransformPoint(t.transform, n);
        return a = new Laya.Vector3(-e.x / r.x, e.y / r.y, 0), Laya.Vector3.add(l, a, a), a = this.TransformPoint(t.transform, a)
      }
      static getCurvedPos(t) {
        const e = GlobalShaderData.getInstance();
        return e.curveWorldSetting ? e.curveWorldSetting.getCurvedPos(t) : t
      }
      static GetScreenScale(t, e) {
        var i = new Laya.Vector3;
        return i.x = Laya.stage.width / t / 2, i.y = Laya.stage.height / e / 2, i
      }
      static GetLowerLeft(t, e, i, s) {
        var o = new Laya.Vector3,
          n = new Laya.Vector3;
        t.getRight(n), Laya.Vector3.normalize(n, n);
        var r = new Laya.Vector3(n.x * i, n.y * i, n.z * i);
        Laya.Vector3.add(t.position, r, o);
        var a = new Laya.Vector3;
        t.getUp(a), Laya.Vector3.normalize(a, a);
        var l = new Laya.Vector3(a.x * s, a.y * s, a.z * s);
        Laya.Vector3.subtract(o, l, o);
        var c = new Laya.Vector3;
        t.getForward(c), Laya.Vector3.normalize(c, c);
        var h = new Laya.Vector3(c.x * e, c.y * e, c.z * e);
        return Laya.Vector3.subtract(o, h, o), o
      }
      static InverseTransformPoint(t, e) {
        var i = new Laya.Vector3;
        t.getRight(i);
        var s = new Laya.Vector3;
        t.getUp(s);
        var o = new Laya.Vector3;
        t.getForward(o);
        var n = new Laya.Vector3(-o.x, -o.y, -o.z),
          r = this.ProjectDistance(e, t.position, i),
          a = this.ProjectDistance(e, t.position, s),
          l = this.ProjectDistance(e, t.position, n);
        return new Laya.Vector3(r, a, l)
      }
      static TransformPoint(t, e) {
        var i = new Laya.Vector3;
        return Laya.Vector3.transformQuat(e, t.rotation, i), Laya.Vector3.add(i, t.position, i), i
      }
      static ProjectDistance(t, e, i) {
        var s = new Laya.Vector3;
        Laya.Vector3.subtract(t, e, s);
        var o = this.Angle2(s, i) * Math.PI / 180,
          n = Laya.Vector3.distance(t, e);
        return n *= Math.cos(o)
      }
      static getDistance(t, e, i = !1) {
        let s = Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2);
        return i ? Math.sqrt(s) : s
      }
      static Angle2(t, e) {
        var i = (t.x * e.x + t.y * e.y + t.z * e.z) / (Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z) * Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z));
        return i < -1 && (i = -1), i > 1 && (i = 1), 180 * Math.acos(i) / Math.PI
      }
      static toRichText(e, i, s = !1) {
        return i = i.replace(/{((\w+):(\w+))}/g, ((e, i) => {
          let o = i.split(":"),
            n = Number(o[0]),
            r = Number(o[1]) > 0 ? Number(o[1]) : "",
            a = CfgitemBase.get(n);
          if (a) {
            let e = a.mini_icon;
            return StringUtil.isNullOrEmpty(e) && (e = "icon_item_baoxiang_40"), `[img]${Laya.URL.formatURL(`resourcesLib/UIBigImg/${getIconFolder(a.type)}/${e}.png`,Laya.URL.basePath)}[/img]${s?t.chinese(a.name):""}${s?"X":""}${r}`
          }
          return `item id：${n} none!`
        })), e && (e.text = i), i
      }
      static tLogEvent(e, i) {
        if (t.miniGame || t.inApp) {
          if (!t.tlogInited) return void t.logEventArr.push(e);
