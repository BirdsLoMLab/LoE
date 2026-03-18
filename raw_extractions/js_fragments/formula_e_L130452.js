// Fragment: formula_e_L130452.js
// Lines: 130452-130553 of bundle-beautified.js
// Categories: Formula
// Keywords: Math.max
// Hit lines: 130453

        let e = Laya.timer.delta / 1e3,
          i = Math.max(e * e, 1e-6),
          s = new Vector33,
          o = new Vector33,
          n = new Vector33;
        Vector33.scale(this.boneAxis, this.stiffnessForce / i, n), Vector33.transformQuat(n, this.trs.rotation, n), Vector33.subtract(this.prevTipPos, this.currTipPos, s), Vector33.scale(s, this.dragForce / i, s), Vector33.add(n, s, n), Vector33.scale(this.springForce, 1 / i, s), Vector33.add(n, s, n);
        let r = this.currTipPos.clone();
        Vector33.subtract(this.currTipPos, this.prevTipPos, s), Vector33.add(s, this.currTipPos, s), Vector33.scale(n, i, o), Vector33.add(s, o, this.currTipPos), Vector33.subtract(this.currTipPos, this.trs.position, s), Vector33.normalize(s, s), Vector33.scale(s, this.springLength, s), Vector33.add(s, this.trs.position, this.currTipPos);
        for (let t = 0; t < this.colliders.length; t++) {
          if (null == this.colliders[t]) continue;
          let e = new Vector33;
          if (this.colliders[t].CheckCollision(this.currTipPos, this.radius, e)) {
            let i = new Vector33;
            Vector33.subtract(this.currTipPos, e, i), Vector33.normalize(i, i), Vector33.scale(i, this.radius + this.colliders[t].radius, s), Vector33.add(e, s, this.currTipPos), Vector33.subtract(this.currTipPos, this.trs.position, s), Vector33.normalize(s, s), Vector33.scale(s, this.springLength, s), Vector33.add(s, this.trs.position, this.currTipPos)
          }
        }
        this.prevTipPos = r;
        let a = RenderHelper.TransformDirection(this.trs, this.boneAxis);
        Vector33.subtract(this.currTipPos, this.trs.position, s);
        let l = RenderHelper.FromToRotation(a, s),
          c = new Quaternion3;
        Quaternion3.multiply(l, this.trs.rotation, c), null == this.managerRef && (this.managerRef = this.GetParentSpringManager(this.trs.owner));
        let h = new Quaternion3;
        Quaternion3.lerp(this.trs.rotation, c, this.managerRef.dynamicRatio, h), this.trs.rotation = h
      }
    };
  __decorateClass([property14(Transform3D)], SpringBone.prototype, "child", 2), __decorateClass([property14(Vector33)], SpringBone.prototype, "boneAxis", 2), __decorateClass([property14(Number)], SpringBone.prototype, "radius", 2), __decorateClass([property14(Boolean)], SpringBone.prototype, "isUseEachBoneForceSettings", 2), __decorateClass([property14(Number)], SpringBone.prototype, "stiffnessForce", 2), __decorateClass([property14(Number)], SpringBone.prototype, "dragForce", 2), __decorateClass([property14(Vector33)], SpringBone.prototype, "springForce", 2), __decorateClass([property14([SpringCollider])], SpringBone.prototype, "colliders", 2), __decorateClass([property14(Number)], SpringBone.prototype, "threshold", 2), SpringBone = __decorateClass([regClass14("_O_tRBjfTJiLkjQVKslFQA")], SpringBone);
  var Vector34 = Laya.Vector3,
    {
      regClass: regClass15,
      property: property15
    } = Laya,
    SpringManager = class extends Laya.Script {
      constructor() {
        super(...arguments), this.dynamicRatio = 1, this.stiffnessForce = .01, this.dragForce = .4, this.boneAxis = new Vector34(1, 0, 0), this.springBones = [], this.isType = !0, this.currentEnabled = !0
      }
      onStart() {
        this.springBones = RenderHelper.GetComponentsInChild(this.owner, SpringBone);
        for (let t = 0; t < this.springBones.length; t++) this.springBones[t]
      }
      onLateUpdate() {
        if (this.currentEnabled && SpringManager.UseSpring && 0 != this.dynamicRatio)
          for (let t = 0; t < this.springBones.length; t++) null != this.springBones[t] && this.dynamicRatio > this.springBones[t].threshold && this.springBones[t].UpdateSpring()
      }
      Reset() {
        if (null != this.springBones)
          for (let t = 0; t < this.springBones.length; t++) null != this.springBones[t] && this.springBones[t].Reset()
      }
    };
  SpringManager.UseSpring = !0, __decorateClass([property15(Number)], SpringManager.prototype, "dynamicRatio", 2), __decorateClass([property15(Number)], SpringManager.prototype, "stiffnessForce", 2), __decorateClass([property15(Number)], SpringManager.prototype, "dragForce", 2), __decorateClass([property15(Vector34)], SpringManager.prototype, "boneAxis", 2), SpringManager = __decorateClass([regClass15("O-avhnsuS7qucsUWTsltfw")], SpringManager);
  var Vector35 = Laya.Vector3,
    {
      regClass: regClass16,
      property: property16
    } = Laya,
    TransformAnim = class extends Laya.Script {
      constructor() {
        super(...arguments), this.noAnimControl = !1, this.chasingSpeed = 5, this.lastFramePosition = new Vector35, this.realPosition = new Vector35, this.startLP = new Vector35, this.canCalculate = !1, this.calTemp = new Vector35
      }
      onEnable() {
        this.transform = this.owner.transform, this.noAnimControl && (this.startLP = this.transform.localPosition.clone(), this.parentTransform = this.owner.parent.transform), this.lastFramePosition = this.transform.position.clone(), this.canCalculate = !this.noAnimControl || null != this.parentTransform
      }
      onUpdate() {
        ToolUtil.isOpenSect || this.canCalculate && (this.noAnimControl && (Vector35.add(this.parentTransform.position, this.startLP, this.realPosition), this.transform.position = this.realPosition.clone()), this.realPosition.setValue(this.transform.position.x, this.transform.position.y, this.transform.position.z))
      }
      onLateUpdate() {
        ToolUtil.isOpenSect || this.canCalculate && (Vector35.subtract(this.realPosition, this.lastFramePosition, this.calTemp), this.calTemp.lengthSquared() < 1e-4 || (Vector35.lerp(this.lastFramePosition, this.realPosition, .001 * Laya.timer.delta * this.chasingSpeed, this.lastFramePosition), this.transform.position = this.lastFramePosition.clone()))
      }
    };
  __decorateClass([property16({
    type: Boolean,
    tips: "无动画或烘焙动画"
  })], TransformAnim.prototype, "noAnimControl", 2), __decorateClass([property16({
    type: Number,
    tips: "追击速度",
    min: .1
  })], TransformAnim.prototype, "chasingSpeed", 2), TransformAnim = __decorateClass([regClass16("fxNLeIaXShOhpiHVeFs-hw")], TransformAnim);
  var import_proto267 = __toESM(require_proto()),
    _Cfgpet_data = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgpet_data.JsonName = "pet_data.json";
  var Cfgpet_data = _Cfgpet_data,
    import_proto232 = __toESM(require_proto()),
    _UIAbyssBangView = class t extends BaseView {
      constructor() {
        super(), this.uid = t.UID, this.pkgName = "AbyssBang", this.name = "AbyssBangView"
      }
      onInit() {
        this.openSubCom(this.bgTitle)
      }
    };
  _UIAbyssBangView.UID = "ui://li31x8aqtvq41", __decorateClass([UIProperty], _UIAbyssBangView.prototype, "tabContainer", 2), __decorateClass([UIProperty], _UIAbyssBangView.prototype, "bgTitle", 2), __decorateClass([UIProperty], _UIAbyssBangView.prototype, "fixHeight", 2);
  var UIAbyssBangView = _UIAbyssBangView,
    _Cfgabyss_player_pos = class t extends ConfigBase {
      static get(e, i) {
        return ConfigManager.inst.GetConfig(t, e, i)
      }
    };
  _Cfgabyss_player_pos.JsonName = "abyss_player_pos.json";
