// Fragment: server_api_i_L423034.js
// Lines: 423034-423139 of bundle-beautified.js
// Categories: Server/API
// Keywords: ws://
// Hit lines: 423039

        const i = [0, 0, 0, 0, parseInt(e.substring(0, 2), 16), 0, 0, 0, 0, parseInt(e.substring(2, 4), 16), 0, 0, 0, 0, parseInt(e.substring(4, 6), 16), 0, 0, 0, 1, 0],
          s = new Laya.ColorFilter(i);
        t.displayObject.filters = [s]
      }
    };
  _ToolUtil.isForTest = !1, _ToolUtil._miniGame = null, _ToolUtil._miniIOS = null, _ToolUtil._inWechatPC = null, _ToolUtil._urlServer = "", _ToolUtil._isForbid = !0, _ToolUtil.pcRole = !1, _ToolUtil.bifrost = "ws://172.16.12.193:24000", _ToolUtil.bifrost_us1 = "ws://172.16.12.193:24000", _ToolUtil.bifrost_us2 = "ws://172.16.12.193:24000", _ToolUtil.width = 720, _ToolUtil.height = 1584, _ToolUtil.login_zongid_key = "fixed_login_zongid_key", _ToolUtil.select_zongid_key = "fixed_select_zongid_key", _ToolUtil.login_country_key = "fixed_login_country_key", _ToolUtil.select_country_key = "fixed_select_country_key", _ToolUtil.login_select_server_key = "fixed_login_select_server_key", _ToolUtil.map_camera_key = "map_camera_key", _ToolUtil.copy_camera_key = "copy_camera_key", _ToolUtil.font_key = "font_key", _ToolUtil.isGM = !1, _ToolUtil.isW = !1, _ToolUtil.review = 0, _ToolUtil.version = 0, _ToolUtil.isOpenSect = !1, _ToolUtil.isOpenSectScene = !1, _ToolUtil.isSectPlayer = !1, _ToolUtil.cfgNum = 10, _ToolUtil.delTime = 20, _ToolUtil.needPass = !1, _ToolUtil.serverID = 0, _ToolUtil.loginTime = 0, _ToolUtil.startTime = 0, _ToolUtil.loadEffectFrame = 0, _ToolUtil.frameCreateEffectNum = 10, _ToolUtil.shader_var = 20, _ToolUtil.ios_pay = "https://mmocgame.qpic.cn/wechatgame/QhsydJic75GJIwbwd6Br2WicaRSTJeZgcQIFOdrE8Nt5PYUsHWgmnVDVVw5190ZQSY/0", _ToolUtil.effLit = !1, _ToolUtil.effPath = "resourcesLib/effect/Prefab/", _ToolUtil.charPath = "resourcesLib/Character/", _ToolUtil.MusPath = "resourcesLib/Music/", _ToolUtil.VoicePath = "resourcesLib/Voice/", _ToolUtil.iosGC = 1e4, _ToolUtil.andGC = 6e4, _ToolUtil.spZone = 9e5, _ToolUtil.notice = 0, _ToolUtil.fpsStage = 0, _ToolUtil.hurtNum = 2, _ToolUtil.perPassTime = 0, _ToolUtil.oneFrame = 30, _ToolUtil.passFrame = 4, _ToolUtil.spCreate = !1, _ToolUtil.zfb_gameCenterBackflow = !0, _ToolUtil._lanChoose = !1, _ToolUtil.yuming = [], _ToolUtil.isStop = !1, _ToolUtil.filter_yuming = [], _ToolUtil.tmpString = "", _ToolUtil.selectZone_key = "selectZone_key", _ToolUtil.appHwForbidFlag = !1, _ToolUtil.tlogInited = !1, _ToolUtil.sdkInited = !1, _ToolUtil.logEventArr = [], _ToolUtil.logEvent = new Map, _ToolUtil._uid = 0, _ToolUtil._currentLang = `${import_proto486.default.game.LangType.Lang_EN}`, _ToolUtil.langs = [{
    id: import_proto486.default.game.LangType.Lang_ZH,
    name: "简体中文",
    ext: "cn",
    cost: "CNY",
    area: "mix_us"
  }, {
    id: import_proto486.default.game.LangType.Lang_EN,
    name: "English",
    ext: "en",
    cost: "USD",
    area: "mix_us"
  }, {
    id: import_proto486.default.game.LangType.Lang_TH,
    name: "ภาษาไทย",
    ext: "th",
    cost: "THB",
    area: "mix_us2"
  }, {
    id: import_proto486.default.game.LangType.Lang_VN,
    name: "Tiếng Việt",
    ext: "vn",
    cost: "VND",
    area: "mix_us2"
  }, {
    id: import_proto486.default.game.LangType.Lang_ID,
    name: "Bahasa Indonesia",
    ext: "id",
    cost: "IDR",
    area: "mix_us2"
  }, {
    id: import_proto486.default.game.LangType.Lang_OS,
    name: "简体中文",
    ext: "cn",
    cost: "CNY",
    area: "mix_us2"
  }, {
    id: import_proto486.default.game.LangType.Lang_DE,
    name: "Deutsch",
    ext: "de",
    cost: "USD",
    area: "mix_us2"
  }, {
    id: import_proto486.default.game.LangType.Lang_FR,
    name: "Français",
    ext: "fr",
    cost: "USD",
    area: "mix_us2"
  }, {
    id: import_proto486.default.game.LangType.Lang_ES,
    name: "Español",
    ext: "es",
    cost: "USD",
    area: "mix_us"
  }, {
    id: import_proto486.default.game.LangType.Lang_PT,
    name: "Português",
    ext: "pt",
    cost: "USD",
    area: "mix_us"
  }, {
    id: import_proto486.default.game.LangType.Lang_TK,
    name: "Türkçe",
    ext: "tk",
    cost: "USD",
    area: "mix_us2"
  }, {
    id: import_proto486.default.game.LangType.Lang_RU,
    name: "Русский",
    ext: "ru",
    cost: "RUB",
    area: "mix_us2"
  }], _ToolUtil.moneyType = {
    USD: "USD",
    IDR: "IDR",
    SGD: "SGD",
    THB: "THB",
    PHP: "PHP",
    VND: "VND",
    MYR: "MYR",
    RUB: "RUB"
  }, _ToolUtil.moneyLang = _ToolUtil.moneyType.USD, _ToolUtil.filePaths = null;
  var ToolUtil = _ToolUtil,
    _ConfigManager = class t {
      constructor() {
        this._configDatas = {}, this._configCls = {}, this._cfgStr = {}, this._cfgTotalNum = 0, this._xmlCfgStr = {}, this._xmlCfgTotalNum = 0, this._xmlConfigDatas = {}, this._xml2JsonName = {}, this.cfgZipNum = 2, this._LoadedZipNum = 0, this._useEncode = !0, this.keywords = ["充值", "购买", "支付", "付费", "首充", "商城", "累充", "消费", "商店", "购买", "日消"], this.regexPattern = new RegExp(this.keywords.join("|"), "g"), this.emptyArr = []
      }
      static get inst() {
        return null == t._instance && (t._instance = new t, SingletonMgr.register(t._instance)), ResManager.inst, t._instance
      }
      reset() {}
      LoadZipCfg() {
        this._useEncode && (t.excelZipPath = t.excelZipPath.replace(".zip", ".dat"), t.excelDiffZipPath = t.excelDiffZipPath.replace(".zip", ".dat"), t.xmlZipPath = t.xmlZipPath.replace(".zip", ".dat")), this.loadExcel(), this.loadXml()
      }
      loadJson(t, e) {
        const i = "Config/";
        ResManager.inst.load(i + e + ".txt", Laya.Loader.TEXT).then((s => {
          let o = s.data.split(",").map((t => i + e + "/" + t + ".json"));
          ResManager.inst.load(o, Laya.Loader.JSON).then((s => {
            for (let o = 0; o < s.length; o++) s[o] && (t[s[o].url.replace(i + e + "/", "")] = JSON.stringify(s[o].data));
            this.onUnzipFinish()
