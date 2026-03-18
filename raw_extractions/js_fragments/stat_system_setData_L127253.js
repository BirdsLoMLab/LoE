// Fragment: stat_system_setData_L127253.js
// Lines: 127253-127357 of bundle-beautified.js
// Categories: Stat System
// Keywords: speed
// Hit lines: 127254, 127257

    setData(t) {
      this.Speed = t, this.Enable = !0
    }
    recycle() {
      this.MoveCancelToken && (this.MoveCancelToken.cancel(), this.MoveCancelToken = null), this.Rotation.x = 0, this.Rotation.y = 0, this.Rotation.z = 0, this.Rotation.w = 1, this.Enable = !1, this.Speed = 0, this.BeginTime = 0, this.StartTime = 0, this.StartPos = null, this.EndPos = null, this.NeedTime = 0, this.CancelMove = !1, this.Operating = !1, this.InMoveSkill = !1, this.CancelMove = !1, this.entityId = 0
    }
  };
  MovableComponent = __decorateClass([ecsclass("MovableComponent")], MovableComponent);
  var CommandBuffer = Laya.CommandBuffer,
    CameraEventFlags = Laya.CameraEventFlags,
    CMDEffect = class {
      constructor() {
        this.cameraEvent = CameraEventFlags.BeforeTransparent, this.onShowEffect = !1, this.hasInit = !1
      }
      InitAll(t) {
        this.camera = t, this.setMaterial(), null == this.commandBuffer && (this.commandBuffer = new CommandBuffer), this.hasInit = null != this.camera
      }
      drawRenderer(t) {
        t && this.CheckData() && this.hasInit && (this.commandBuffer.clear(), this.commandBuffer.drawRender(t, this.material, 0))
      }
      drawRenderers(t) {
        if (!(null == t || t.length < 1) && this.CheckData() && this.hasInit) {
          this.commandBuffer.clear();
          for (let e in t) this.commandBuffer.drawRender(t[e], this.material, 0)
        }
      }
      setMaterial() {}
      CheckData() {
        let t = !0;
        return this.material || (t = !1), t
      }
      ShowEffect() {
        !this.onShowEffect && this.hasInit && (this.camera.addCommandBuffer(this.cameraEvent, this.commandBuffer), this.onShowEffect = !0)
      }
      HideEffect() {
        this.onShowEffect && this.hasInit && (this.camera.removeCommandBuffer(this.cameraEvent, this.commandBuffer), this.onShowEffect = !1)
      }
    },
    Material2 = Laya.Material,
    RenderState2 = Laya.RenderState,
    CameraEventFlags2 = Laya.CameraEventFlags,
    {
      regClass: regClass8,
      property: property8
    } = Laya,
    XRayEffect = class extends CMDEffect {
      constructor() {
        super(...arguments), this.cameraEvent = CameraEventFlags2.BeforeImageEffect
      }
      setRenderer(t) {
        t && this.setRendererMat(t.sharedMaterial)
      }
      setRenderers(t) {
        if (!(null == t || t.length < 1))
          for (let e in t) this.setRendererMat(t[e].sharedMaterial)
      }
      setRendererMat(t) {
        t && (t.stencilWrite = !0, t.stencilTest = Laya.CompareFunction.Always, t.stencilOp = new Laya.Vector3(0, 0, Laya.StencilOperation.Replace), t.stencilRef = GlobalShaderInit.XRayRef)
      }
      setMaterial() {
        this.material && (this.material.renderQueue = 3e3, this.material.blend = RenderState2.BLEND_ENABLE_ALL, this.material.blendSrc = RenderState2.BLENDPARAM_SRC_ALPHA, this.material.blendDst = RenderState2.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.material.depthWrite = !1, this.material.depthTest = RenderState2.DEPTHTEST_GEQUAL, this.material.stencilWrite = !0, this.material.stencilTest = Laya.CompareFunction.Greater, this.material.stencilOp = new Laya.Vector3(Laya.StencilOperation.Keep, Laya.StencilOperation.Keep, Laya.StencilOperation.Replace), this.material.stencilRef = GlobalShaderInit.XRayRef)
      }
    };
  __decorateClass([property8(Material2)], XRayEffect.prototype, "material", 2), __decorateClass([property8(CameraEventFlags2)], XRayEffect.prototype, "cameraEvent", 2), XRayEffect = __decorateClass([regClass8("ZOxwGoLxSV2hCkJAPSAzeA")], XRayEffect);
  var BaseRender = Laya.BaseRender,
    {
      regClass: regClass9,
      property: property9
    } = Laya,
    CMDEffectMixMgr = class extends Laya.Script {
      constructor() {
        super(...arguments), this.effectAllChild = !1, this.activeEff = !1, this.hasInit = !1
      }
      initAll() {
        var t, e, i, s, o;
        if (this.hasInit) return;
        const n = this.owner;
        if (this.activeEff && (null == (t = this.xRayEffect) || t.InitAll(GlobalShaderData.getInstance().camera)), this.effectAllChild) {
          const t = RenderHelper.GetComponentsInChild(n, BaseRender);
          null == (e = this.xRayEffect) || e.setRenderers(t), this.activeEff && (null == (i = this.xRayEffect) || i.drawRenderers(t))
        } else {
          const t = n.getComponent(BaseRender);
          null == (s = this.xRayEffect) || s.setRenderer(t), this.activeEff && (null == (o = this.xRayEffect) || o.drawRenderer(t))
        }
        this.hasInit = !0
      }
      ActiveEffect() {
        this.activeEff = !0
      }
      onEnable() {
        var t;
        this.initAll(), this.activeEff && (null == (t = this.xRayEffect) || t.ShowEffect())
      }
      onDisable() {
        var t;
        this.activeEff && (null == (t = this.xRayEffect) || t.HideEffect())
      }
    };
  __decorateClass([property9(XRayEffect)], CMDEffectMixMgr.prototype, "xRayEffect", 2), CMDEffectMixMgr = __decorateClass([regClass9("SyUoQUMQQd-Ku5Z-dC1x5Q")], CMDEffectMixMgr);
  var _CfgpopupsBase = class t extends ConfigBase {
    static get(e, i) {
      return ConfigManager.inst.GetConfig(t, e, i)
    }
  };
  _CfgpopupsBase.JsonName = "popupsBase.json";
