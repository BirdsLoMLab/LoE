// Fragment: server_api_o_L206093.js
// Lines: 206093-206194 of bundle-beautified.js
// Categories: Server/API
// Keywords: http
// Hit lines: 206094

            if (i.startsWith("[img]ui://") ? i = this.getEmojiBigName(i) : (i = StringUtil.toEllipsis(i, this.mainshowLimit), i = this.emojiParser.parse(i)), Number(e.type) == import_proto160.default.db.ChatType.TO_SEPT && !OpenFuncModel.inst.isFuncOpen(import_proto160.default.openfunc.OpenFuncID.SEPT)) continue;
            (i.startsWith("http://") || i.startsWith("https://")) && (i = ToolUtil.chinese(1354));
            let o = StringUtil.replaceMark(this.getName(e.charid, e.name));
            null == o || 0 == o.length ? o = "" : o += "：", i = this.addAtColor(i), s.push({
              text: `[color=#77d1f7]【${ToolUtil.chinese(t)}】${o}[/color]${i}`,
              type: e.type
            }), this.setMainCache(e);
            break
          }
        }
        if (s.length > 0)
          for (let t = 0; t < s.length; t++) {
            let e = s[t];
            e.text = e.text.split("\n")[0], e.text = e.text.split("<br>")[0]
          }
        return 0 == s.length && this.setMainCache(), s
      }
      get emojiNameBigs() {
        return this.xmlCfg.emoji_name
      }
      get chatDefault() {
        return ToolUtil.chinese(this.xmlCfg.world_chat_default)
      }
      get privateChatNum() {
        return this._privateChatNum <= 0 ? Number(this.xmlCfg.chat_private_num) : this._privateChatNum
      }
      getEmojiBigName(t) {
        if (t.startsWith("[img]ui://")) {
          let e = t.replace(/\[img\]ui:\/\/Chat\/(.*)\[\/img\]/g, ((t, e) => e));
          for (let t = 0; t < this.emojiNameBigs.length; t++)
            if (this.emojiNameBigs[t].id == e) return ToolUtil.chinese(Number(this.emojiNameBigs[t].name))
        }
        return ""
      }
      get mainshowLimit() {
        return Number(this.xmlCfg.mainshow_limit)
      }
      get mainshowGM_limit() {
        return Number(this.xmlCfg.mainshowGM_limit)
      }
      get messageLimit() {
        return Number(this.xmlCfg.message_limit)
      }
      get timeInterval() {
        return Number(this.xmlCfg.chat_time_interval)
      }
      getPrivateMsgs(t) {
        if (this.curPrivateMsgs.length = 0, !this.msgMap.has(import_proto160.default.db.ChatType.PRIVATE)) return this.curPrivateMsgs;
        return this.msgMap.get(import_proto160.default.db.ChatType.PRIVATE).forEach(((e, i, s) => {
          e.charid != t && e.toCharid != t || s.push(e)
        })), this.curPrivateMsgs.sort(((t, e) => t.time - e.time)), this.curPrivateMsgs
      }
      setUnreadMsg(t, e) {
        this.unreadMsgMap.set(t, e)
      }
      delPrivateChatInfoList(t) {
        for (let e = 0; e < this.privateChatInfoList.length; e++) {
          let i = this.privateChatInfoList[e];
          if (String(i.role.charId) == String(t)) {
            this.privateChatInfoList.splice(e, 1);
            break
          }
        }
        this.setPrivateListCache()
      }
      setPrivateChatInfoListUnread(t, e) {
        for (let i = 0; i < this.privateChatInfoList.length; i++) {
          let s = this.privateChatInfoList[i];
          if (String(s.role.charId) == String(t)) {
            s.unread = e;
            break
          }
        }
        this.setPrivateListCache()
      }
      setVipServiceChatInfoListUnread(t, e) {
        for (let i = 0; i < this.vipServiceChatInfoList.length; i++) {
          let s = this.vipServiceChatInfoList[i];
          if (String(s.kfUuid) == t) {
            s.unread = e;
            break
          }
        }
        this.setVipServiceListCache()
      }
      getVipServiceChatInfoUnread(t) {
        for (let e = 0; e < this.vipServiceChatInfoList.length; e++) {
          let i = this.vipServiceChatInfoList[e];
          if (String(i.kfUuid) == t) return i.unread > 0
        }
        return !1
      }
      refreshPrivateUneradTotalRedPoint() {
        let t = 0;
        this.privateChatInfoList.forEach(((e, i, s) => {
          let o = Number(e.unread);
          FriendCtrl.inst.isBlack(e.role.charId) && (o = 0), Number(e.unread) > 0 && (t += o);
          let n = RedPointMgr.inst.combineKey(175, import_proto160.default.db.ChatType.PRIVATE),
            r = RedPointMgr.inst.combineKey(178, String(e.role.charId));
          RedPointMgr.inst.addDepend(n, r), RedPointMgr.inst.create(178, String(e.role.charId), 2), RedPointMgr.inst.setNum(178, o, String(e.role.charId))
        })), RedPointMgr.inst.setNum(178, t), EventDispatcher.inst.dispatchEvent(MsgName.Chat_Refresh_Private_RedP)
      }
