// Fragment: server_api_i_L336252.js
// Lines: 336252-336368 of bundle-beautified.js
// Categories: Server/API
// Keywords: http
// Hit lines: 336253, 336268

            let i = {};
            i.pos = t + 1, i.icon = e.replace("http:", "https:").replace("f1.img4399.com", "f1img.qq933.com"), PlayerCtrl.inst.ReqSubmitIcon([i])
          }, void UIManager.inst.openDialog(ToolUtil.chinese(1994), (() => {
            SdkIconMgr.inst.pickImageFromCamera("zzss_headicon")
          }), (() => {
            SdkIconMgr.inst.pickImageFromLocal()
          }), ToolUtil.chinese(1021), ToolUtil.chinese(1995), ToolUtil.chinese(1996));
          1 != e.c1.selectedIndex ? (2 == e.c1.selectedIndex && e.dat && PlayerCtrl.inst.ReqPickIcon(e.dat.pos), this.selindex = e.dat, this.doShow()) : UIManager.inst.openMsg(ToolUtil.chinese(1997))
        }))
      }
      onEvent() {
        this.addEvent(MsgName.HeadIcon_Active, this.doShow)
      }
      testIcon() {
        for (let t = 0; t < this.len; t++) {
          let e = {};
          e.pos = t + 1, e.icon = "http://172.18.50.89//release/web-remote/resourcesLib/UIBigImg/HeadIcon/icon_qingtongtouxiang-6dd6e.png", e.state = e.pos, PlayerCtrl.inst.iconList[t] = e
        }
      }
      doShow() {
        this.ListCustom.numItems = this.len, this.selindex ? this.playerAvataryulan.setHead(this.selindex.icon) : this.playerAvataryulan.setData()
      }
      onShow() {
        ToolUtil.isRelease || this.testIcon(), this.doShow()
      }
      onClickAll(t) {
        t == this.btnClose ? this.close() : t == this.btnChange && (this.selindex ? PlayerCtrl.inst.ReqMiscChangeIcon("", this.selindex.pos) : UIManager.inst.openMsg(ToolUtil.chinese(1998)))
      }
    },
    _UIPlayerHeadStateView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "PlayerHeadGet", this.name = "PlayerHeadStateView"
      }
      onInit() {}
    };
  _UIPlayerHeadStateView.UID = "ui://mxz26nt6fwa2z", __decorateClass([UIController], _UIPlayerHeadStateView.prototype, "empty", 2), __decorateClass([UIProperty], _UIPlayerHeadStateView.prototype, "txtempty", 2), __decorateClass([UIProperty], _UIPlayerHeadStateView.prototype, "txtTitle", 2), __decorateClass([UIProperty], _UIPlayerHeadStateView.prototype, "itemlist", 2), __decorateClass([UIProperty], _UIPlayerHeadStateView.prototype, "txtTips", 2), __decorateClass([UIProperty], _UIPlayerHeadStateView.prototype, "fixHeight", 2);
  var UIPlayerHeadStateView = _UIPlayerHeadStateView,
    PlayerHeadStateView = class extends UIPlayerHeadStateView {
      constructor() {
        super(), this._attrs = [], this.layer = "Pop", this.maskType = 1
      }
      onInit() {
        super.onInit(), this.creatList(this.itemlist, this.onItemRender)
      }
      onShow() {
        this.refreshView()
      }
      onClickAll(t) {}
      refreshView() {
        const t = PlayerCtrl.inst.getTitleAttrs();
        for (const e in t) this._attrs.push({
          key: Number(e),
          value: t[e]
        });
        this.empty.selectedIndex = 0 == this._attrs.length ? 1 : 0, this.itemlist.numItems = this._attrs.length
      }
      onItemRender(t, e) {
        e.setData(this._attrs[t].key, this._attrs[t].value)
      }
    },
    PlayerHeadDecorationView = class extends UIPlayerHeadDecorationView {
      constructor() {
        super(), this._defaultId = 1, this.model = PlayerModel.inst, this.ctrl = PlayerCtrl.inst, this.layer = "Pop", this.maskType = 1
      }
      get selectedId() {
        return this._selectedId
      }
      set selectedId(t) {
        switch (this._selectedId = t, this.list.selectedIndex) {
          case 0:
            const e = this.cfgIcons[this.selectedId];
            if (ToolUtil.inApp && e.id == this._defaultId) {
              this.txtName.text = ToolUtil.chinese(1999), this.txtMiaoShu.text = "";
              break
            }
            this.txtName.text = ToolUtil.chinese(e.name), this.txtMiaoShu.text = ToolUtil.chinese(e.get_type);
            const i = e.icon;
            this.playerAvatar.setHeadIcon(i), this.list_icon.refreshVirtualList();
            break;
          case 1:
            const s = this.cfgFrames[this.selectedId];
            this.txtName.text = ToolUtil.chinese(s.name), this.txtMiaoShu.text = ToolUtil.chinese(s.get_type), this.playerAvatar.setHeadTXK(s.icon), this.list_frame.refreshVirtualList();
            break;
          case 2:
            this._selectedId = t || this.cfgTitlesSub[0].id;
            const o = Cfgpersonal_title.get(this.selectedId);
            this.txtMiaoShu2.text = ToolUtil.chinese(o.get_style), this.setTexture(this.img_title, o.icon, "Honor"), this.list_title.refreshVirtualList();
            const n = this.model.titleList[o.id];
            if (this.expireTime = null == n ? void 0 : n.expireTime, this.refreshTitleTime(), this.img_unUse.visible = !0, this.tianzi.visible = o && o.attr.length > 0, o && o.attr.length > 0) {
              let t = o.attr[0];
              if (t && 2 == t.length) {
                let e = StringUtil.attrNumber(t[0], t[1]);
                this.txt_num_tianzi.text = "+" + e, this.img_unUse.visible = !PlayerModel.inst.checkTitleAttrUse(this.selectedId)
              } else this.txt_num_tianzi.text = ""
            }
        }
        this.refreshBtn()
      }
      onInit() {
        super.onInit();
        let t = !1;
        (ToolUtil.inH5Web || ToolUtil.isAlipayMiniGame || ToolUtil.inAppHuawei || ToolUtil.inAppKr) && (t = !0), this.cfgIcons = Array.from(Cfgpersonal_head.get()).filter((e => {
          const i = this.model.hasIcon(e.id);
          return 0 != e.id && (i || !e.conceal) && (0 == e.unlock_realm || e.career == CoreMapCtrl.inst.career && e.gender == CoreMapCtrl.inst.gender) && (!t || e.id != this._defaultId)
        })), this.cfgFrames = Array.from(Cfgpersonal_headcircle.get()).filter((t => this.model.hasFrame(t.id) || !t.conceal)), this.cfgTitles = Array.from(Cfgpersonal_title.get()).filter((t => this.model.hasTitle(t.id) || !t.conceal)), this.setTexture(this.imgBg, "txk_img_beijing"), this.creatList(this.list_icon, this.onIconRender, null, this.onIconClicked), this.creatList(this.list_frame, this.onFrameRender, null, this.onFrameClicked), this.creatList(this.list_title, this.onTitleRender, null, this.onTitleClicked), this.list_icon.numItems = this.cfgIcons.length, this.list_frame.numItems = this.cfgFrames.length;
        const e = [{
          title: ToolUtil.chinese(2e3),
          redKey: 332
        }, {
          title: ToolUtil.chinese(2001),
          redKey: 333
        }];
        OpenFuncModel.inst.isFuncOpen(PlayerCtrl.openFuncId_title) && e.push({
          title: ToolUtil.chinese(2002),
          redKey: 334
        }), this.toolBar.setData(e, (t => this.onTab(t))), this.bindRedPoint(this.btnBiaoQian01.getChild("rp"), PlayerCtrl.inst.getTitleTypeRPkey(1)), this.bindRedPoint(this.btnBiaoQian02.getChild("rp"), PlayerCtrl.inst.getTitleTypeRPkey(2))
      }
