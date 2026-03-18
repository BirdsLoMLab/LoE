// Fragment: server_api_t_L358813.js
// Lines: 358813-358914 of bundle-beautified.js
// Categories: Server/API
// Keywords: http, joynetgame
// Hit lines: 358814

        let t = `sydh_${BaseConfig.gamePlat}_announcement.txt`;
        return ToolUtil.isRelease ? "https://sydh-us-cdnres.joynetgame.com/cdnconfig_" + Math.floor(TimerMgr.inst.serverTime / 1e3) + "/serverlists/announcement/" + t : "http://172.16.12.193/" + t + "?v=" + Math.floor(TimerMgr.inst.serverTime / 1e3)
      }
      onInit() {
        super.onInit(), this.contentC.selectedIndex = 0, this.creatList(this.noticeList, this.onItemRender, null, null, !1), Laya.loader.load(this.noticeUrl, Laya.Handler.create(this, this._loadNoticeDataComplete), null, Laya.Loader.TEXT);
        let t = LoginCtrl.inst.zoneid;
        LoginCtrl.inst.zonestate > 0 ? this.txtSer.text = `${ToolUtil.chinese(1816)}${t}-${LoginCtrl.inst.zonestate}` : this.txtSer.text = `${ToolUtil.chinese(1816)}${t}`
      }
      onClickAll(t) {
        if (t == this.btnFacebook) {
          let t = "https://www.facebook.com/legendofelement/";
          "ru" == fgui.UIPackage.branch && (t = "https://vk.com/legendofelements"), SdkMgr.navigateTo(t)
        } else if (t == this.btnClose) 0 == ToolUtil.notice ? FnsdkMgr.inst.exitAllGame() : this.close();
        else if (t == this.btnLine) SdkMgr.navigateTo("https://discord.gg/SfCyzJ3pkr");
        else if (t == this.btnArrowLeft) this.swicthGroup(Math.max(0, this.groupIdx - 1));
        else if (t == this.btnArrowRight) this.swicthGroup(Math.min(this.groupArr.length - 1, this.groupIdx + 1));
        else if (t == this.btnGoto) {
          const t = this.groupArr[this.groupIdx];
          let e;
          if (t && (e = t[0]), !e) return;
          SdkMgr.navigateTo(e.content)
        } else t == this.btn_select && (localStorage.setItem(ToolUtil.login_zongid_key, "0"), localStorage.setItem(ToolUtil.login_country_key, "0"), localStorage.setItem(ToolUtil.select_country_key, "0"), localStorage.setItem(ToolUtil.select_zongid_key, "0"), UIManager.inst.openMsg("clear ok"))
      }
      onShow() {
        LoginCtrl.inst.hasnotice && (LoginCtrl.inst.hasnotice = !1, RedPointMgr.inst.setActive(339, !1)), LoginCtrl.inst.hasNewNotice && (LoginCtrl.inst.hasNewNotice = !1, RedPointMgr.inst.setActive(340, !1)), this.btnClose.visible = 0 != ToolUtil.notice, this.btn_select.visible = ToolUtil.isW;
        let t = fgui.UIPackage.branch;
        this.btnFacebook.c1.selectedIndex = "ru" == t ? 1 : 0
      }
      onHide() {
        this._exitGame()
      }
      _exitGame() {
        ToolUtil.miniGame && 0 == ToolUtil.notice && wx.exitMiniProgram(), ToolUtil.notice = 0, LoginCtrl.inst.noticing = !1
      }
      _loadNoticeDataComplete(t) {
        if (null == t || null == t.data) return void this.close();
        const e = JSON.parse(t.data).data;
        0 === e.length ? this.close() : this._updateNotice(e)
      }
      _updateNotice(t) {
        this.groupArr.splice(0), this.groupIdx = 0;
        const e = ToolUtil.notice,
          i = [];
        for (const s of t)
          if (s.language == ToolUtil.currentLang.ext) {
            const t = s.key;
            switch (e) {
              case 2:
                "2" == t ? i.push(s) : "5" == t && this.groupArr.push([s]);
                break;
              case 1:
                "1" == t && i.push(s);
                break;
              case 0:
                t || i.push(s)
            }
          } i.length > 0 && (i.sort(((t, e) => {
          const i = StringUtil.split(t.key1, ","),
            s = StringUtil.split(e.key1, ",");
          return i[0] - s[0]
        })), this.groupArr.push(i)), 0 != this.groupArr.length ? (this.groupArr.sort(((t, e) => {
          const i = StringUtil.split(t[0].key1, ","),
            s = StringUtil.split(e[0].key1, ",");
          return null != i[1] && null != s[1] ? i[1] - s[1] : 0
        })), this.swicthGroup(0, !0)) : this.close()
      }
      swicthGroup(t, e = !1) {
        if (e || this.groupIdx != t) {
          this.groupIdx = t;
          const e = this.groupArr[t],
            i = e[0];
          if (!i) return;
          "5" == i.key ? (this.contentC.selectedIndex = 1, i.imgUrl && i.imgUrl.length > 0 && (this.imgContent.url = i.imgUrl), this.noticeList.numItems = 0) : (this.contentC.selectedIndex = 2, this.noticeList.numItems = e.length), this.btnArrowLeft.visible = t > 0, this.btnArrowRight.visible = t < this.groupArr.length - 1
        }
      }
      onItemRender(t, e) {
        let i;
        const s = this.groupArr[this.groupIdx];
        s && (i = s[t]), i && e.setData(i)
      }
    },
    PlayerInfoTab = class extends UIPlayerInfoTab {
      constructor() {
        super()
      }
      onInit() {
        super.onInit(), this.func_list.scrollPane.touchEffect = !1, this.creatList(this.func_list, this._onItemRender, null, this._onItemClick, !1)
      }
      onClickAll(t) {}
      _onItemRender(t, e) {
        e.setData(this._dataSource[t])
      }
      onShow() {
        const t = ToolUtil.inAppHwForbid,
          e = ToolUtil.iosAppForbid,
          i = ToolUtil.inAppHuawei,
          s = ToolUtil.isKSMiniGame,
          o = ToolUtil.isAlipayMiniGame,
          n = (ToolUtil.isVVMiniGame, ToolUtil.isQGMiniGame, ToolUtil.inAppHw);
        this._dataSource = [], this._dataSource.push({
          type: 0,
          title_chinese_id: 12230,
