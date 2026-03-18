// Fragment: server_api_BaseConfig_L123445.js
// Lines: 123445-123546 of bundle-beautified.js
// Categories: Server/API
// Keywords: joynetgame
// Hit lines: 123446

    BaseConfig = class {};
  BaseConfig.isSDK = !0, BaseConfig.isWeb = !0, BaseConfig.basePath = "https://sydh-us-cdnres.joynetgame.com/US/stable/mix_wx_pangu/20240724_web/", BaseConfig.gamePlat = "", BaseConfig.appVersion = 101, BaseConfig.appType = 8;
  var {
    regClass: regClass,
    property: property
  } = Laya, Shader3D = Laya.Shader3D, PostShaderIDs = class {};
  PostShaderIDs._Vignette_Params1 = "_Vignette_Params1", PostShaderIDs._Vignette_Params2 = "_Vignette_Params2", PostShaderIDs._DepthOutlineOffset = "u_DepthOffset", PostShaderIDs._DepthThreshold = "u_DepthThreshold", PostShaderIDs._DepthEdgeMultiplier = "u_depthEdgeMultiplier", PostShaderIDs._DepthOutlineColor = "u_DepthOutlineCol", PostShaderIDs._DepthOutline_Define = Shader3D.getDefineByName("_DEPTH_OUTLINE");
  var Color = Laya.Color,
    {
      regClass: regClass2,
      property: property2
    } = Laya,
    DepthOutlineSetting = class {
      constructor() {
        this.Enable = !1, this.DepthOffset = 1, this.DepthThreshold = .1, this.DepthEdgeMultiplier = .5, this.OutlineCol = Color.BLACK
      }
      SetParams(t) {
        t && (t.setDefine(PostShaderIDs._DepthOutline_Define, this.Enable), this.Enable && (t.setFloat(PostShaderIDs._DepthOutlineOffset, this.DepthOffset), t.setFloat(PostShaderIDs._DepthThreshold, this.DepthThreshold), t.setFloat(PostShaderIDs._DepthEdgeMultiplier, this.DepthEdgeMultiplier), t.setColor(PostShaderIDs._DepthOutlineColor, this.OutlineCol)))
      }
    };
  __decorateClass([property2(Boolean)], DepthOutlineSetting.prototype, "Enable", 2), __decorateClass([property2(Number)], DepthOutlineSetting.prototype, "DepthOffset", 2), __decorateClass([property2(Number)], DepthOutlineSetting.prototype, "DepthThreshold", 2), __decorateClass([property2(Number)], DepthOutlineSetting.prototype, "DepthEdgeMultiplier", 2), __decorateClass([property2(Color)], DepthOutlineSetting.prototype, "OutlineCol", 2), DepthOutlineSetting = __decorateClass([regClass2("jtmhbxNHTYq8CIHyHFLcwg")], DepthOutlineSetting);
  var PostProcessOutlineVS_default = '#define SHADER_NAME PostProcessOutline\r\n#include "Camera.glsl";\r\n#include "DepthNormalUtil.glsl";\r\nvarying vec2 v_Texcoord0;\r\nvarying vec4 depthUV01;\r\nvarying vec4 depthUV23;\r\n\r\nuniform mediump float u_DepthOffset;\r\n\r\nvoid main() \r\n{\r\n\r\n    //float halfScaleFloor = floor(u_DepthOffset * 0.5);\r\n    //float halfScaleCeil = ceil(u_DepthOffset * 0.5);\r\n\r\n    gl_Position = vec4(u_OffsetScale.x * 2.0 - 1.0 + (a_PositionTexcoord.x + 1.0) * u_OffsetScale.z, (1.0 - ((u_OffsetScale.y * 2.0 - 1.0 + (-a_PositionTexcoord.y + 1.0) * u_OffsetScale.w) + 1.0) / 2.0) * 2.0 - 1.0, 0.0, 1.0);\t\r\n    v_Texcoord0 = a_PositionTexcoord.zw;\r\n    \r\n    float depth = SAMPLE_DEPTH_TEXTURE(u_CameraDepthTexture, v_Texcoord0);\r\n    depth =  Linear01Depth(depth, u_DepthBufferParams);\r\n    //float logDepth = 1.0 / (depth+15.0);\r\n    float logDepth = smoothstep(0.01,0.99,depth) / 10.0;\r\n    logDepth = logDepth * u_DepthOffset;\r\n    // depthUV01.xy =  v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(-1.0,-1.0) * u_DepthOffset * 10.0 / depth;\r\n    // depthUV01.zw =  v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(1.0,1.0) * u_DepthOffset * 10.0 / depth;\r\n    // depthUV23.xy =  v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(1.0,-1.0) * u_DepthOffset * 10.0 / depth;\r\n    // depthUV23.zw =  v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(-1.0,1.0) * u_DepthOffset * 10.0 / depth;\r\n\r\n    depthUV01.xy =  v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(-1.0,-1.0) * logDepth;\r\n    depthUV01.zw =  v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(1.0,1.0) * logDepth;\r\n    depthUV23.xy =  v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(1.0,-1.0) * logDepth;\r\n    depthUV23.zw =  v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(-1.0,1.0) * logDepth;\r\n\r\n    //depthUV01.xy = v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(-halfScaleFloor, -halfScaleFloor);\r\n    //depthUV01.zw = v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(halfScaleCeil, halfScaleCeil);\r\n    //depthUV23.xy = v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(halfScaleCeil, -halfScaleFloor);\r\n    //depthUV23.zw = v_Texcoord0.xy + u_MainTex_TexelSize.xy * vec2(-halfScaleFloor, halfScaleCeil);\r\n}',
    PostProcessOutlineFS_default = '#define SHADER_NAME PostProcessOutline\r\n\r\n#include "Color.glsl";\r\n#include "Camera.glsl";\r\n#include "DepthNormalUtil.glsl";\r\n#include "PostProcessSupport.glsl";\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\nvarying vec4 depthUV01;\r\nvarying vec4 depthUV23;\r\n\r\nuniform highp float u_DepthThreshold;\r\nuniform vec4 u_DepthOutlineCol;\r\nuniform float u_depthEdgeMultiplier;\r\n\r\n\r\nvoid main(){\r\n    vec2 uv = v_Texcoord0;\r\n    vec4 col = texture2D(u_MainTex, uv);\r\n\r\n#ifdef _DEPTH_OUTLINE\r\n    float depth0 = texture2D(u_CameraDepthTexture,depthUV01.xy).r;\r\n    float depth1 = texture2D(u_CameraDepthTexture,depthUV01.zw).r;\r\n    float depth2 = texture2D(u_CameraDepthTexture,depthUV23.xy).r;\r\n    float depth3 = texture2D(u_CameraDepthTexture,depthUV23.zw).r;\r\n\r\n    // float depth = texture2D(u_CameraDepthTexture,uv).r;\r\n    // depth = 1.0 - LinearEyeDepth(depth, u_DepthBufferParams);\r\n    // float logDepth = log(depth);\r\n\r\n    float depthEdge = sqrt(pow(depth1 - depth0,2.0) + pow(depth3 - depth2,2.0)) * 100.0;\r\n\r\n    depthEdge = step(u_DepthThreshold, depthEdge) * u_depthEdgeMultiplier;\r\n    col.rgb = mix(col.rgb,u_DepthOutlineCol.rgb, depthEdge * u_DepthOutlineCol.a);\r\n#endif\r\n    //col = vec4(depth,depth,depth,1.0);\r\n    gl_FragColor = outputTransform(col);\r\n}',
    Material = Laya.Material,
    CustomMaterial = class extends Material {
      LoadShader() {}
      constructor() {
        super(), GlobalShaderInit.Init(), this.LoadShader()
      }
    };
  CustomMaterial.ShaderDic = new Map;
  var VertexMesh = Laya.VertexMesh,
    ShaderDataType = Laya.ShaderDataType,
    Shader3D2 = Laya.Shader3D,
    SubShader = Laya.SubShader,
    RenderState = Laya.RenderState,
    _PostProcessOutlineMaterial = class t extends CustomMaterial {
      LoadShader() {
        t.InitShader(), this.setShaderName(t.ShaderName)
      }
      static InitShader() {
        if (CustomMaterial.ShaderDic.get(this.ShaderName)) return;
        let t = {
            a_PositionTexcoord: [VertexMesh.MESH_POSITION0, ShaderDataType.Vector4]
          },
          e = {
            u_OffsetScale: ShaderDataType.Vector4,
            u_MainTex: ShaderDataType.Texture2D,
            u_MainTex_TexelSize: ShaderDataType.Vector4,
            u_DepthBufferParams: ShaderDataType.Vector4
          },
          i = Shader3D2.add(this.ShaderName, !1, !1),
          s = new SubShader(t, e);
        i.addSubShader(s), s.addShaderPass(PostProcessOutlineVS_default, PostProcessOutlineFS_default), CustomMaterial.ShaderDic.set(this.ShaderName, !0)
      }
      constructor() {
        super(), this.renderModeSet()
      }
      renderModeSet() {
        this.alphaTest = !1, this.depthWrite = !1, this.cull = RenderState.CULL_NONE, this.blend = RenderState.BLEND_DISABLE, this.depthTest = RenderState.DEPTHTEST_OFF, this.stencilTest = Laya.CompareFunction.Equal, this.stencilOp = new Laya.Vector3(Laya.StencilOperation.Keep, Laya.StencilOperation.Keep, Laya.StencilOperation.Replace), this.stencilRef = GlobalShaderInit.CharacterRef
      }
    };
  _PostProcessOutlineMaterial.ShaderName = "PostProcessOutline";
  var PostProcessOutlineMaterial = _PostProcessOutlineMaterial,
    PostProcessEffect = Laya.PostProcessEffect,
    {
      regClass: regClass3,
      property: property3
    } = Laya,
    PostProcessOutlineMgr = class extends PostProcessEffect {
      constructor() {
        super(...arguments), this.depthOutlineSetting = new DepthOutlineSetting, this._depthParam = new Laya.Vector4
      }
      init() {
        this.hasInit || (this.hasInit = !0, this._postMat = new PostProcessOutlineMaterial)
      }
      effectInit(t) {
        super.effectInit(t), this.init()
      }
      release(t) {
        super.release(t)
      }
      render(t) {
        var e;
        if (!this._postMat) return;
        let i = t.command,
          s = t.camera,
          o = s.farPlane / 10,
          n = s.nearPlane;
        null == (e = this.depthOutlineSetting) || e.SetParams(this._postMat), this._depthParam.setValue(1 - o / n, o / n, (n - o) / (n * o), 1 / n), this._postMat.setVector4("u_DepthBufferParams", this._depthParam);
        let r = t.indirectTarget,
          a = t.destination;
        i.blitScreenQuadByMaterial(r, a, null, this._postMat)
      }
    };
  __decorateClass([property3(DepthOutlineSetting)], PostProcessOutlineMgr.prototype, "depthOutlineSetting", 2), PostProcessOutlineMgr = __decorateClass([regClass3("KH0O1bNCQAO7B0NH_6nGeQ")], PostProcessOutlineMgr);
  var MetadataRegistry = class {
      constructor() {
        this._collectEventsHandlers = [], this._onMetadatas = []
      }
      set container(t) {
        this._container = t
