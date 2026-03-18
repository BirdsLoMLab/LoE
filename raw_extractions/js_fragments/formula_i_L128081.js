// Fragment: formula_i_L128081.js
// Lines: 128081-128214 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max
// Hit lines: 128082, 128114

                let i = s.eff[t];
                2 == i[0] && (e = Math.max(e, i[1]))
              }
          }
          t = e / 100 * this.skillSpeed
        }
        return Math.floor(t)
      }
      checkHaveThreeGouBuff() {
        if (this.BuffInfos)
          for (let t = 0; t < this.BuffInfos.hookBuffId.length; t++) {
            let e = this.BuffInfos.hookBuffId[t];
            const i = Cfghook_fat_hook_buff.get(e.hookBuffId);
            if (i)
              for (let t = 0; t < i.eff.length; t++) {
                if (6 == i.eff[t][0]) return !0
              }
          }
        return !1
      }
      get gouSpeed() {
        return this.skillSpeed + this.getBuffAddSpeed()
      }
      getBuffAddCollisionRadius() {
        let t = 0;
        if (this.BuffInfos) {
          let e = 0;
          for (let t = 0; t < this.BuffInfos.hookBuffId.length; t++) {
            let i = this.BuffInfos.hookBuffId[t];
            const s = Cfghook_fat_hook_buff.get(i.hookBuffId);
            if (s)
              for (let t = 0; t < s.eff.length; t++) {
                let i = s.eff[t];
                3 == i[0] && (e = Math.max(e, i[1]))
              }
          }
          t = e / 100
        }
        return t
      }
      get skilllong() {
        return this._skill_long || (this._skill_long = Number(this.xml.skill_long) / 100), this._skill_long
      }
      get skillCollisionRadius() {
        return this._skillCollisionRadius || (this._skillCollisionRadius = Number(this.xml.skill_cube)), this._skillCollisionRadius
      }
      get CollisionRadius() {
        return Math.floor(this.skillCollisionRadius * (this.getBuffAddCollisionRadius() + 1))
      }
      get skillCD() {
        return this._skillCD || (this._skillCD = Number(this.xml.skill_cd)), this._skillCD
      }
      get deathTime() {
        return this._deathTime || (this._deathTime = Number(this.xml.death_time)), this._deathTime
      }
      get matchWaitTime() {
        return this._matchWaitTime || (this._matchWaitTime = Number(this.xml.match_wait_time)), this._matchWaitTime
      }
      get matchMaxTime() {
        return this._matchMaxTime || (this._matchMaxTime = Number(this.xml.match_max_time)), this._matchMaxTime
      }
      get winKill() {
        return this._winKill || (this._winKill = Number(this.xml.win_kill)), this._winKill
      }
      get dizzBuff() {
        return this._dizzBuff || (this._dizzBuff = Number(this.xml.dizz_buff)), this._dizzBuff
      }
      get mvpKill() {
        return this._mvpKill || (this._mvpKill = Number(this.xml.mvp_kill)), this._mvpKill
      }
      get mvpHelp() {
        return this._mvpHelp || (this._mvpHelp = Number(this.xml.mvp_help)), this._mvpHelp
      }
      get mvpDeath() {
        return this._mvpDeath || (this._mvpDeath = Number(this.xml.mvp_death)), this._mvpDeath
      }
      get superHookAngle() {
        return this._superHookAngle || (this._superHookAngle = Number(this.xml.super_hook_angle)), this._superHookAngle
      }
      get hookSwingRate() {
        return this._hookSwingRate || (this._hookSwingRate = Number(this.xml.hook_swing_rate)), this._hookSwingRate
      }
      get angleLimit() {
        return this._angleLimit || (this._angleLimit = Number(this.xml.angle_limit)), this._angleLimit
      }
      get playerSize() {
        return this._playerSize || (this._playerSize = Number(this.xml.player_size)), this._playerSize
      }
      get superBuffCube() {
        return this._superBuffCube || (this._superBuffCube = Number(this.xml.super_buff_cube) / 100), this._superBuffCube
      }
      get superBuffRadius() {
        return this.superBuffCube * (this.getBuffAddCollisionRadius() + 1)
      }
      getNPCRadius(t) {
        return this.getHookNpcCube(t) * (this.getBuffAddCollisionRadius() + 1)
      }
      get bigBuffZoom() {
        return this._bigBuffZoom || (this._bigBuffZoom = Number(this.xml.big_buff_zoom) || 1), this._bigBuffZoom
      }
      get hookingBuffId() {
        return this._hookingBuffId || (this._hookingBuffId = Number(this.xml.hooking_buff)), this._hookingBuffId
      }
      get npcAttacked() {
        return this._npcAttacked || (this._npcAttacked = Number(this.xml.npc_attacked)), this._npcAttacked
      }
      isSameGroup(t) {
        return !!this.GroupThisIdInfo && (1 == this.MyGroupId ? this.GroupThisIdInfo.groupRedThisids.includes(t) : this.GroupThisIdInfo.groupBlueThisids.includes(t))
      }
      isSameGroupByConfigId(t) {
        let e = Cfghook_fat_npc.get();
        if (e)
          for (let i = 0; i < e.length; i++) {
            let s = e[i];
            if (s.npc_id == t && s.camp == this.MyGroupId) return !0
          }
        return !1
      }
      get curAngle() {
        return this._curAngle
      }
      set curAngle(e) {
        const i = t.inst.angleLimit;
        e = this.MyGroupId == t.inst.MirrorGroupType ? MathUtil.clamp(e, 10 - i, 10 + i) : MathUtil.clamp(e, 180 - i, 180 + i), this._curAngle = e
      }
      reset() {
        super.reset()
      }
      resetData() {
        super.resetData()
      }
    };
  _GouZiDaZhanModel._instance = null;
  var GouZiDaZhanModel = _GouZiDaZhanModel,
