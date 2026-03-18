// Fragment: server_api_s_L276069.js
// Lines: 276069-276225 of bundle-beautified.js
// Categories: Server/API
// Keywords: http
// Hit lines: 276070, 276125

        let s = t.content;
        s = this.model.severToubb(s), s.startsWith("http://") || s.startsWith("https://") ? s = ToolUtil.chinese(1354) : s.startsWith("[img]ui://") ? s = this.model.getEmojiBigName(s) : (s = StringUtil.toEllipsis(s, this.model.mainshowLimit), s = this.model.emojiParser.parse(s)), this.intimacyData = null == (e = FriendModel.inst.getRelation(import_proto315.default.relation.RelationType.Friend, t.role.charId)) ? void 0 : e.info, this.intimacyData && (this.txtMate.text = FriendModel.inst.getIntimacy(this.intimacyData).level.toString(), this.redPoint.setDotVisible(FriendCtrl.inst.haveIntimacyReward(this.intimacyData))), this.QingMiDu.visible = null != this.intimacyData, s = s.trim(), this.txtContent.text = "" == s ? "无" : s, this.txtTime.text = TimeUtil.formatDHM2(t.timestamp), this.setImage(this.imgGender, "" + (1 == i.gender ? "lt_img_nan" : "lt_img_nv"), "Chat"), this.playerAvatar.setData({
          charId: i.charId,
          gender: i.gender,
          head: i.head,
          headframe: i.headframe,
          icon: i.icon
        }), this.unbindAllRedPoint(), this.bindRedPoint(this.rp, 178, String(i.charId))
      }
      onShow() {}
      onClickAll(t) {
        t == this.btnMate && this.intimacyData && UIManager.inst.open(FriendIntimacyView.UID, null, this.intimacyData)
      }
    },
    UIChatPrivateItemAI = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.openSubCom(this.rp), this.openSubCom(this.playerAvatar), this.openSubCom(this.honorIcon), this.onInit(), this.onEvent()
      }
    };
  UIChatPrivateItemAI.UID = "ui://hqqfn7tal3ryv0y", __decorateClass([UIProperty], UIChatPrivateItemAI.prototype, "txtTime", 2), __decorateClass([UIProperty], UIChatPrivateItemAI.prototype, "txtname", 2), __decorateClass([UIProperty], UIChatPrivateItemAI.prototype, "txtContent", 2), __decorateClass([UIProperty], UIChatPrivateItemAI.prototype, "rp", 2), __decorateClass([UIProperty], UIChatPrivateItemAI.prototype, "playerAvatar", 2), __decorateClass([UIProperty], UIChatPrivateItemAI.prototype, "honorIcon", 2), __decorateClass([UIProperty], UIChatPrivateItemAI.prototype, "player_title", 2);
  var ChatPrivateItemAI = class extends UIChatPrivateItemAI {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData() {
        this.playerAvatar.setHeadIcon(ChatAICtrl.inst.headIcon)
      }
      onClickAll(t) {}
    },
    UIChatPrivateItemVIP = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.openSubCom(this.rp), this.openSubCom(this.playerAvatar), this.openSubCom(this.honorIcon), this.onInit(), this.onEvent()
      }
    };
  UIChatPrivateItemVIP.UID = "ui://hqqfn7taf5ucuyu", __decorateClass([UIProperty], UIChatPrivateItemVIP.prototype, "txtTime", 2), __decorateClass([UIProperty], UIChatPrivateItemVIP.prototype, "txtname", 2), __decorateClass([UIProperty], UIChatPrivateItemVIP.prototype, "txtContent", 2), __decorateClass([UIProperty], UIChatPrivateItemVIP.prototype, "rp", 2), __decorateClass([UIProperty], UIChatPrivateItemVIP.prototype, "playerAvatar", 2), __decorateClass([UIProperty], UIChatPrivateItemVIP.prototype, "honorIcon", 2), __decorateClass([UIProperty], UIChatPrivateItemVIP.prototype, "player_title", 2), __decorateClass([UIProperty], UIChatPrivateItemVIP.prototype, "txtGM", 2);
  var ChatPrivateItemVIP = class extends UIChatPrivateItemVIP {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.model = ChatModel.inst, this.playerAvatar.touchable = !1
      }
      onShow() {}
      onClickAll(t) {}
      setData(t) {
        let e = t.content;
        e = this.model.severToubb(e), e.startsWith("http://") || e.startsWith("https://") ? e = ToolUtil.chinese(1354) : e.startsWith("[img]ui://") ? e = this.model.getEmojiBigName(e) : (e = StringUtil.toEllipsis(e, this.model.mainshowLimit - 10), e = this.model.emojiParser.parse(e)), this.txtContent.text = e, this.txtTime.text = TimeUtil.formatDHM2(t.timestamp);
        let i = VIPCtrl.inst.getCanChatVipService();
        this.txtname.text = null != i ? ToolUtil.chinese(i.name) : "";
        let s = null != i && i.isOnline;
        this.playerAvatar.setHeadIcon("yx2_kefu"), this.playerAvatar.setHeadGray(!s);
        let o = null != i && this.model.getVipServiceChatInfoUnread(i.uuid);
        this.rp.setDotVisible(o)
      }
    },
    UIChatSystem = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIChatSystem.UID = "ui://hqqfn7taw88j46", __decorateClass([UIProperty], UIChatSystem.prototype, "msg", 2);
  var ChatSystem = class extends UIChatSystem {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      set msgText(t) {
        this.msg.text = t
      }
    },
    UIChatSystemTime = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIChatSystemTime.UID = "ui://hqqfn7taw88j49", __decorateClass([UIProperty], UIChatSystemTime.prototype, "txtTime", 2);
  var ChatSystemTime = class extends UIChatSystemTime {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        this.txtTime.text = t
      }
    },
    UIChatTxt = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIChatTxt.UID = "ui://hqqfn7tabacxuyk", __decorateClass([UIProperty], UIChatTxt.prototype, "msg", 2);
  var ChatTxt = class extends UIChatTxt {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
      setData(t) {
        this.msg.text = t.content
      }
    },
    UIChatVoiceTip = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.onInit(), this.onEvent()
      }
    };
  UIChatVoiceTip.UID = "ui://hqqfn7tan72o3u", __decorateClass([UIController], UIChatVoiceTip.prototype, "c1", 2), __decorateClass([UIProperty], UIChatVoiceTip.prototype, "pgrVoice", 2), __decorateClass([UIProperty], UIChatVoiceTip.prototype, "txtTime", 2);
  var ChatVoiceTip = class extends UIChatVoiceTip {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
    },
    UIChatWangLingJie = class extends BaseCom {
      constructor() {
        super(), this.pkgName = "Chat"
      }
      onConstruct() {
        this.openSubCom(this.goods_icon), this.btnGet.onClick(this, this.onClickAll, [this.btnGet]), this.onInit(), this.onEvent()
      }
    };
  UIChatWangLingJie.UID = "ui://hqqfn7tak9s1uz3", __decorateClass([UIController], UIChatWangLingJie.prototype, "c1", 2), __decorateClass([UIProperty], UIChatWangLingJie.prototype, "goods_icon", 2), __decorateClass([UIProperty], UIChatWangLingJie.prototype, "txt_desc", 2), __decorateClass([UIProperty], UIChatWangLingJie.prototype, "txt_tips", 2), __decorateClass([UIProperty], UIChatWangLingJie.prototype, "btnGet", 2);
  var import_proto316 = __toESM(require_proto()),
    _DengTaZheCtrl = class t extends BaseCtrl {
