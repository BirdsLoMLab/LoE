// Fragment: progression_setSeptMasterInfo_L244213.js
// Lines: 244213-244314 of bundle-beautified.js
// Categories: Progression
// Keywords: master
// Hit lines: 244214

      setSeptMasterInfo(t) {
        this.mainMaster = t.master, this.leftMaster = t.leftMaster, this.rightMaster = t.rightMaster
      }
      setSeptDetailInfo(t) {
        this.sectDetailInfo = t, this.sectInfo.honorVal = t.honorVal, this.sectInfo.honorNowval = t.honorNowval
      }
      changeSectName(t) {
        this.sectInfo.name = t
      }
      changeSectNotice(t) {
        this.sectDetailInfo && (this.sectDetailInfo.notice = t)
      }
      setJoinSect(t) {
        for (const e of this.sectList) String(e.septid) == String(t.septid) && (e.hadApply = !0)
      }
      setAuctionList(t) {
        this.auctionInfo = [];
        for (const e in t) this.auctionInfo.push(t[e]);
        this.checkAuctionRedP()
      }
      setAuctionInfo(t) {
        let e;
        for (let i = 0; i < this.auctionInfo.length; i++) {
          const s = this.auctionInfo[i];
          if (String(t.thisid) == String(s.thisid)) {
            e = i;
            break
          }
        }
        null == e ? this.auctionInfo.push(t) : this.auctionInfo[e] = t, this.checkAuctionRedP()
      }
      deleteAuctionInfo(t) {
        this.auctionInfo = this.auctionInfo.filter((e => String(e.thisid) != String(t.thisid)))
      }
      setAuctionRecordList(t) {
        this.auctionRecordList = t
      }
      setAuctionMyRecordList(t) {
        this.myAuctionRecordList = t
      }
      setSectHistory(t) {
        this.sectHistory = t
      }
      setSectNameList(t) {
        for (const e of t) this.sectNameList.push(e)
      }
      updateSectName(t) {
        for (const e of this.sectNameList)
          if (String(e.septid) == String(t.septid)) {
            e.name = t.name;
            break
          }
      }
      sectReNameRewardList(t) {
        this.reNameRewardList = t.ids, this.nextPrefixTime = t.nextPrefixTime, this.changeNameCnt = t.changeNameCnt, this.checkReNameRedP()
      }
      sectReNameData(t) {
        this.sectInfo.prefixNum = t.prefixNum, this.sectInfo.namePrefix = t.namePrefix, this.checkReNameRedP()
      }
      getSectName() {
        return null == this.sectInfo ? "" : t.inst.isInPlayerSect() ? this.sectInfo.name : ToolUtil.chinese(this.sectInfo.name)
      }
      getSectPreName() {
        return null == this.sectInfo ? "" : this.sectInfo.namePrefix
      }
      getSectReNameNum() {
        return null == this.sectInfo ? 0 : this.sectInfo.prefixNum
      }
      getMySectId() {
        return null == this.sectInfo ? 0 : this.sectInfo.septId
      }
      getMySectCfgId() {
        return null == this.sectInfo ? 0 : this.sectInfo.cfgid
      }
      getMyJob() {
        return null == this.sectInfo ? 0 : this.sectInfo.job
      }
      isMaxJob() {
        return null == Cfgsect_job.get(this.sectInfo.job + 1, !0)
      }
      getPrestige() {
        return null == this.sectInfo ? 0 : this.sectInfo.prestige
      }
      getPrestigeDesc() {
        let t = Cfgsect_job.get(this.getMyJob() + 1, !0);
        return null == t ? (t = Cfgsect_job.get(this.sectInfo.job), this.sectInfo.prestige.toString()) : StringUtil.format("{0}/{1}", this.sectInfo.prestige, t.prestige)
      }
      getDonateDesc() {
        let t = this.getResItemId();
        return ItemCtrl.inst.getItemNum(t).toString()
      }
      getHonor() {
        return null == this.sectInfo ? 0 : this.sectInfo.honorVal
      }
      getHonorUp() {
        return null == this.sectInfo ? 0 : this.sectInfo.honorNowval
      }
      getHonorRank() {
        return null == this.sectInfo ? 0 : this.sectInfo.honorRankRwd
      }
      checkAllRedP() {
        this.checkDonateRedP(), this.checkJobRedp(), this.checkSalaryRedP(), this.checkShopRedP(), this.checkCreateSectRedP(), this.checkTalkRedP(), this.checkAuctionRedP(), this.checkReNameRedP(), this.checkMemberSendMailRedP()
