// Fragment: formula_for_L141301.js
// Lines: 141301-141413 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.min
// Hit lines: 141301, 141313

          for (o = Math.min(e.length - r, 64 - n); o--;) i[n++] = e.charCodeAt(r++);
          if (n < 64) break;
          this._dataLength += 64, t._md5cycle(this._state, s), n = 0
        }
        return this._bufferLength = n, this
      }
      appendByteArray(e) {
        const i = this._buffer8,
          s = this._buffer32;
        let o, n = this._bufferLength,
          r = 0;
        for (;;) {
          for (o = Math.min(e.length - r, 64 - n); o--;) i[n++] = e[r++];
          if (n < 64) break;
          this._dataLength += 64, t._md5cycle(this._state, s), n = 0
        }
        return this._bufferLength = n, this
      }
      getState() {
        const t = this._state;
        return {
          buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
          buflen: this._bufferLength,
          length: this._dataLength,
          state: [t[0], t[1], t[2], t[3]]
        }
      }
      setState(t) {
        const e = t.buffer,
          i = t.state,
          s = this._state;
        let o;
        for (this._dataLength = t.length, this._bufferLength = t.buflen, s[0] = i[0], s[1] = i[1], s[2] = i[2], s[3] = i[3], o = 0; o < e.length; o += 1) this._buffer8[o] = e.charCodeAt(o)
      }
      end(e = !1) {
        const i = this._bufferLength,
          s = this._buffer8,
          o = this._buffer32,
          n = 1 + (i >> 2);
        this._dataLength += i;
        const r = 8 * this._dataLength;
        if (s[i] = 128, s[i + 1] = s[i + 2] = s[i + 3] = 0, o.set(t.buffer32Identity.subarray(n), n), i > 55 && (t._md5cycle(this._state, o), o.set(t.buffer32Identity)), r <= 4294967295) o[14] = r;
        else {
          const t = r.toString(16).match(/(.*?)(.{0,8})$/);
          if (null === t) return;
          const e = parseInt(t[2], 16),
            i = parseInt(t[1], 16) || 0;
          o[14] = e, o[15] = i
        }
        return t._md5cycle(this._state, o), e ? this._state : t._hex(this._state)
      }
    };
  _Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]), _Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), _Md5.hexChars = "0123456789abcdef", _Md5.hexOut = [], _Md5.onePassHasher = new _Md5;
  var Md5 = _Md5;
  if ("5d41402abc4b2a76b9719d911017c592" !== Md5.hashStr("hello")) throw new Error("Md5 self test failed.");
  var import_proto29 = __toESM(require_proto()),
    _InputMgr = class t {
      static setInputTxt(t) {
        this._inputTxt = t
      }
      static addLister() {
        if (FnsdkMgr.isTTMiniGame && !t.init) {
          t.init = !0;
          FNSDK.invoke("dyOnKeyboardComplete", {}, (function(e, i, s) {
            if (e == FNCode.SUCC) {
              var o = s.value;
              t._inputTxt && (t._inputTxt.text = o, t._inputTxt = null, console.log("InputMgr._inputObj.text:" + o)), console.log("dyOnKeyboardComplete:", e, i, s)
            }
          }))
        }
      }
    };
  _InputMgr.init = !1;
  var InputMgr = _InputMgr,
    import_proto28 = __toESM(require_proto()),
    _Cfgred_packet = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgred_packet.JsonName = "red_packet.json";
  var Cfgred_packet = _Cfgred_packet,
    _UIChatView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "Chat", this.name = "ChatView"
      }
      onInit() {
        this.btnMessageHint.onClick(this, this.onClickAll, [this.btnMessageHint]), this.btnSend.onClick(this, this.onClickAll, [this.btnSend]), this.btnPrivateReturn.onClick(this, this.onClickAll, [this.btnPrivateReturn]), this.openSubCom(this.redPoint), this.btnMate.onClick(this, this.onClickAll, [this.btnMate]), this.btnFace.onClick(this, this.onClickAll, [this.btnFace]), this.btnVoice.onClick(this, this.onClickAll, [this.btnVoice]), this.btnShowText.onClick(this, this.onClickAll, [this.btnShowText]), this.btnShowVoice.onClick(this, this.onClickAll, [this.btnShowVoice]), this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.openSubCom(this.emoji), this.btnChatArrow.onClick(this, this.onClickAll, [this.btnChatArrow]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.openSubCom(this.btnReturn), this.btnReturn.onClick(this, this.onClickAll, [this.btnReturn]), this.openSubCom(this.goChatVoiceTips), this.btnRedPickBig.addClick(this, this.onClickAll, [this.btnRedPickBig]), this.openSubCom(this.btnRedPickBig), this.btnRedPick.onClick(this, this.onClickAll, [this.btnRedPick]), this.openSubCom(this.redRp), this.btn_more.onClick(this, this.onClickAll, [this.btn_more]), this.btnCopy.onClick(this, this.onClickAll, [this.btnCopy])
      }
    };
  _UIChatView.UID = "ui://hqqfn7tavwm91s", __decorateClass([UIController], _UIChatView.prototype, "ctrlEmpty", 2), __decorateClass([UIProperty], _UIChatView.prototype, "list", 2), __decorateClass([UIProperty], _UIChatView.prototype, "goContent", 2), __decorateClass([UIProperty], _UIChatView.prototype, "privateList", 2), __decorateClass([UIProperty], _UIChatView.prototype, "goEmpty", 2), __decorateClass([UIProperty], _UIChatView.prototype, "txtMsgHint", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnMessageHint", 2), __decorateClass([UIProperty], _UIChatView.prototype, "goMeesageHint", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnSend", 2), __decorateClass([UIProperty], _UIChatView.prototype, "aiChatPart", 2), __decorateClass([UIProperty], _UIChatView.prototype, "txtPrivateName", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnPrivateReturn", 2), __decorateClass([UIProperty], _UIChatView.prototype, "imgMate", 2), __decorateClass([UIProperty], _UIChatView.prototype, "txtMate", 2), __decorateClass([UIProperty], _UIChatView.prototype, "redPoint", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnMate", 2), __decorateClass([UIProperty], _UIChatView.prototype, "QingMiDu", 2), __decorateClass([UIProperty], _UIChatView.prototype, "goPrivate", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnFace", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnVoice", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnShowText", 2), __decorateClass([UIProperty], _UIChatView.prototype, "chatGroup", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnShowVoice", 2), __decorateClass([UIProperty], _UIChatView.prototype, "imgInputBg", 2), __decorateClass([UIProperty], _UIChatView.prototype, "input", 2), __decorateClass([UIProperty], _UIChatView.prototype, "txtWordNum", 2), __decorateClass([UIProperty], _UIChatView.prototype, "inputTextGroup", 2), __decorateClass([UIProperty], _UIChatView.prototype, "goOperate", 2), __decorateClass([UIProperty], _UIChatView.prototype, "tabList", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UIChatView.prototype, "emoji", 2), __decorateClass([UIProperty], _UIChatView.prototype, "title", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnChatArrow", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnReturn", 2), __decorateClass([UIProperty], _UIChatView.prototype, "goTitle", 2), __decorateClass([UIProperty], _UIChatView.prototype, "goChatVoiceTips", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnRedPickBig", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnRedPick", 2), __decorateClass([UIProperty], _UIChatView.prototype, "redRp", 2), __decorateClass([UIProperty], _UIChatView.prototype, "redPickCon", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btn_more", 2), __decorateClass([UIProperty], _UIChatView.prototype, "fixHeight", 2), __decorateClass([UIProperty], _UIChatView.prototype, "btnCopy", 2), __decorateClass([UIProperty], _UIChatView.prototype, "tip", 2);
  var UIChatView = _UIChatView,
    _UIFriendIntimacyView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "FriendIntimacy", this.name = "FriendIntimacyView"
      }
      onInit() {
        this.btnHelp.onClick(this, this.onClickAll, [this.btnHelp]), this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btn_left.onClick(this, this.onClickAll, [this.btn_left]), this.btn_right.onClick(this, this.onClickAll, [this.btn_right]), this.openSubCom(this.btn_get), this.btn_get.onClick(this, this.onClickAll, [this.btn_get]), this.openSubCom(this.intimacyLevel)
      }
    };
  _UIFriendIntimacyView.UID = "ui://0s0m3840pxkx0", __decorateClass([UIController], _UIFriendIntimacyView.prototype, "c1", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "img_kuang", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "btnHelp", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "txt_level", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "btn_left", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "btn_right", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "btn_get", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "list_intimacy", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "intimacyLevel", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "txt_num", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "txt_num02", 2), __decorateClass([UIProperty], _UIFriendIntimacyView.prototype, "fixHeight", 2);
  var UIFriendIntimacyView = _UIFriendIntimacyView,
    _UIFriendIntimacyGetView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "FriendIntimacyGet", this.name = "FriendIntimacyGetView"
      }
      onInit() {
        this.openSubCom(this.btnClose), this.btnClose.onClick(this, this.onClickAll, [this.btnClose]), this.btnSendGift.onClick(this, this.onClickAll, [this.btnSendGift])
      }
    };
  _UIFriendIntimacyGetView.UID = "ui://glpvk3kvkkl40", __decorateClass([UIProperty], _UIFriendIntimacyGetView.prototype, "imgBg", 2), __decorateClass([UIProperty], _UIFriendIntimacyGetView.prototype, "btnClose", 2), __decorateClass([UIProperty], _UIFriendIntimacyGetView.prototype, "txt_bar_tips", 2), __decorateClass([UIProperty], _UIFriendIntimacyGetView.prototype, "bar_intimacy", 2), __decorateClass([UIProperty], _UIFriendIntimacyGetView.prototype, "btnSendGift", 2), __decorateClass([UIProperty], _UIFriendIntimacyGetView.prototype, "list_go", 2), __decorateClass([UIProperty], _UIFriendIntimacyGetView.prototype, "fixHeight", 2);
  var UIFriendIntimacyGetView = _UIFriendIntimacyGetView,
    _UIFriendPresentView = class t extends BaseView {
