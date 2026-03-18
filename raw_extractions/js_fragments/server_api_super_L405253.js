// Fragment: server_api_super_L405253.js
// Lines: 405253-405353 of bundle-beautified.js
// Categories: Server/API
// Keywords: joynetgame
// Hit lines: 405253

      super(), this.cdnHeadPath = "https://in-sydh-us-cdnres.joynetgame.com", this.cdnDirPaht = "CN/dev/mix_wx_pangu/LocalBuild/lth/video/", this.video = null, this.init()
    }
    static get inst() {
      return null == t._instance && (t._instance = new t), t._instance
    }
    onInit() {}
    registS2CHandler() {}
    PlayVideo(t) {
      StringUtil.isNullOrEmpty(t) || (null != this.video && this.destroyVideo(), this.creatWxVideo(t))
    }
    creatWxVideo(t) {
      if (!ToolUtil.miniGame) return;
      let e = Laya.Browser.clientWidth,
        i = Laya.Browser.clientHeight,
        s = (new Date).valueOf(),
        o = {
          x: 0,
          y: 0,
          width: e,
          height: i,
          src: `${this.cdnHeadPath}/cdnconfig_${s}/${this.cdnDirPaht}${t}.mp4`,
          poster: "",
          initialTime: 0,
          playbackRate: 1,
          live: !1,
          objectFit: "cover",
          controls: !1,
          showProgress: !1,
          showProgressInControlMode: !1,
          backgroundColor: "#000000",
          autoplay: !0,
          loop: !0,
          muted: !1,
          enableProgressGesture: !1,
          underGameView: !0
        };
      this.video = wx.createVideo(o)
    }
    RePlay() {
      null != this.video && this.video.play()
    }
    Pause() {
      null != this.video && this.video.pause()
    }
    Stop() {
      this.destroyVideo()
    }
    destroyVideo() {
      null != this.video && (this.video.destroy(), this.video = null)
    }
    onExitMap() {
      this.destroyVideo()
    }
  };
  _VideoCtrl._instance = null;
  var VideoCtrl = _VideoCtrl,
    {
      regClass: regClass206,
      property: property204
    } = Laya,
    WeiMianWorldMapCtrl = class extends BaseCtrl {
      constructor() {
        super(), this.init()
      }
      static get inst() {
        return null == WeiMianWorldMapCtrl._instance && (WeiMianWorldMapCtrl._instance = new WeiMianWorldMapCtrl), WeiMianWorldMapCtrl._instance
      }
      init() {
        super.init()
      }
      registS2CHandler() {}
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
    };
  WeiMianWorldMapCtrl._instance = null, WeiMianWorldMapCtrl = __decorateClass([regClass206("9ab56gpLTOWqQkgGCN81Zg")], WeiMianWorldMapCtrl);
  var _CopysPlayModel = class t extends BaseModel {
    constructor() {
      super()
    }
    static get inst() {
      return null == t._instance && (t._instance = new t), t._instance
    }
    init() {
      super.init()
    }
    reset() {
      super.reset()
    }
    resetData() {
      super.resetData()
    }
  };
  _CopysPlayModel._instance = null;
  var CopysPlayModel = _CopysPlayModel,
    _DFBattleModel = class t extends BaseModel {
      constructor() {
        super()
