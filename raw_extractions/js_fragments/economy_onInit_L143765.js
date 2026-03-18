// Fragment: economy_onInit_L143765.js
// Lines: 143765-143869 of bundle-beautified.js
// Categories: Economy
// Keywords: gold
// Hit lines: 143766, 143769

      onInit() {
        this.openSubCom(this.Gold), this.openSubCom(this.ChatItem), this.addOpenAni(this.openAni), this.addCloseAni(this.closeAni)
      }
    };
  _UIMainResView.UID = "ui://ru74ubcvlhro3l", __decorateClass([UIProperty], _UIMainResView.prototype, "Gold", 2), __decorateClass([UIProperty], _UIMainResView.prototype, "ChatItem", 2), __decorateClass([UITransition], _UIMainResView.prototype, "openAni", 2), __decorateClass([UITransition], _UIMainResView.prototype, "closeAni", 2);
  var UIMainResView = _UIMainResView,
    MainResView = class extends UIMainResView {
      constructor() {
        super()
      }
      onInit() {
        super.onInit()
      }
      onShow() {}
    },
    BakeMeshInstanceVS_default = '#define SHADER_NAME BakeMeshInstance\r\n#include "Camera.glsl";\r\n#include "Sprite3DVertex.glsl";\r\n\r\n//#include "VertexCommon.glsl";\r\n#include "Color.glsl";\r\n#include "CustomShaderFunctionSupport.glsl";\r\nvarying vec4 v_Texcoord0;\r\n\r\n#ifdef ZHFOG\r\nvarying vec2 v_fogParam;\r\n#endif\r\n\r\nvoid main() \r\n{\r\n\t//Vertex vertex;\r\n\t//getVertexParams(vertex);\r\n\tmat4 worldMat = getWorldMatrix();\r\n\tvec3 positionWS = (worldMat *vec4(a_Position.xyz, 1.0)).xyz; \r\n//#ifdef CURVE_WORLD\r\n    LittlePlanet_Y_Curve(positionWS);\r\n//#endif\r\n\r\n\tgl_Position = getPositionCS(positionWS);\r\n\r\n    vec4 customLightmapScaleOffset;\r\n    #ifdef GPU_INSTANCE\r\n        customLightmapScaleOffset = a_customLightmapScaleOffset;\r\n    #else\r\n        customLightmapScaleOffset = vec4(1,1,0,0);\r\n    #endif\r\n\t\r\n    v_Texcoord0.xy = a_Texcoord0.xy;\r\n    #ifdef UV1\r\n    v_Texcoord0.zw = a_Texcoord1.xy * customLightmapScaleOffset.xy + customLightmapScaleOffset.zw;\r\n    #endif\r\n\r\n#ifdef ZHFOG\r\n    GetFogParam(v_fogParam,positionWS.y,gl_Position,u_ProjectionParams);\r\n#endif\r\n\r\n\tgl_Position=remapPositionZ(gl_Position);\r\n}',
    BakeMeshInstanceFS_default = '#define SHADER_NAME BakeMeshInstance\r\n#include "Color.glsl";\r\n#include "CustomShaderFunctionSupport.glsl";\r\n\r\nvarying vec4 v_Texcoord0;\r\n\r\n#ifdef ZHFOG\r\nvarying vec2 v_fogParam;\r\n#endif\r\n//uniform sampler2D u_AtlasTexture;\r\n\r\nvoid main()\r\n{\r\n    vec2 mainUV = v_Texcoord0.xy;\r\n\tvec4 color = texture2D(u_AlbedoTexture,mainUV);\r\n    #ifdef Gamma_u_AlbedoTexture\r\n        color = gammaToLinear(color);\r\n    #endif // Gamma_u_AlbedoTexture\r\n\r\n#ifdef UV1\r\n    vec2 lightmapUV = v_Texcoord0.zw;\r\n    vec4 lightMapCol = texture2D(u_CustomLightMap,lightmapUV);\r\n    #ifdef Gamma_u_CustomLightMap\r\n        lightMapCol = gammaToLinear(lightMapCol);\r\n    #endif // Gamma_u_CustomLightMap\r\n    color.rgb *= pow(lightMapCol.rgb,vec3(u_LightMapContrast)) * u_LightMapHDRScale;\r\n#endif\r\n\r\n// #ifdef DITHER_CLIP\r\n// \tif(GetDitherClip(gl_FragCoord.xyz))\r\n// \t{\r\n// \t\tdiscard;\r\n// \t}\r\n// #endif\r\n\r\n#ifdef ZHFOG\r\n    ApplyFog(color.rgb,v_fogParam);\r\n#endif\r\n\r\n\tgl_FragColor = color;\r\n\r\n    gl_FragColor = outputTransform(gl_FragColor);\r\n}',
    Material3 = Laya.Material,
    VertexMesh2 = Laya.VertexMesh,
    ShaderDataType2 = Laya.ShaderDataType,
    Shader3D4 = Laya.Shader3D,
    SubShader2 = Laya.SubShader,
    RenderState3 = Laya.RenderState,
    _BakeMeshInstanceMaterial = class t extends CustomMaterial {
      LoadShader() {
        t.InitShader(), this.setShaderName(t.ShaderName)
      }
      static InitShader() {
        if (CustomMaterial.ShaderDic.get(this.ShaderName)) return;
        let t = {
            a_Position: [VertexMesh2.MESH_POSITION0, ShaderDataType2.Vector4],
            a_Texcoord0: [VertexMesh2.MESH_TEXTURECOORDINATE0, ShaderDataType2.Vector2],
            a_Texcoord1: [VertexMesh2.MESH_TEXTURECOORDINATE1, ShaderDataType2.Vector2],
            a_WorldMat: [VertexMesh2.MESH_WORLDMATRIX_ROW0, ShaderDataType2.Matrix4x4],
            a_customLightmapScaleOffset: [VertexMesh2.MESH_CUSTOME0, ShaderDataType2.Vector4]
          },
          e = {
            u_AlbedoTexture: ShaderDataType2.Texture2D,
            u_CustomLightMap: ShaderDataType2.Texture2D,
            u_LightMapContrast: ShaderDataType2.Float,
            u_LightMapHDRScale: ShaderDataType2.Float
          },
          i = Shader3D4.add(this.ShaderName, !1, !1),
          s = new SubShader2(t, e);
        i.addSubShader(s), s.addShaderPass(BakeMeshInstanceVS_default, BakeMeshInstanceFS_default), CustomMaterial.ShaderDic.set(this.ShaderName, !0)
      }
      constructor() {
        super(), this.renderModeSet()
      }
      renderModeSet() {
        this.alphaTest = !1, this.renderQueue = Material3.RENDERQUEUE_OPAQUE, this.depthWrite = !0, this.blend = RenderState3.BLEND_DISABLE, this.cull = RenderState3.CULL_BACK, this.depthTest = RenderState3.DEPTHTEST_LESS, this.addDefine(GlobalShaderInit.ZHFogDefine), RenderHelper.SetDefaultBlockMat(this)
      }
      SetBakeMainTex(e) {
        e && !e._getSource && console.error("SetBakeMainTex error url: " + e.url), this.setTexture(t.mainTexName, e)
      }
      SetBakeLightMap(e) {
        e && !e._getSource && console.error("SetBakeLightMap error url: " + e.url), this.setTexture(t.lightMapName, e)
      }
      SetBakeLightMapContrast(e) {
        this.setFloat(t.lightMapContrastName, e)
      }
      SetBakeLightMapHDRScale(e) {
        this.setFloat(t.lightMapHDRScale, e)
      }
    };
  _BakeMeshInstanceMaterial.ShaderName = "BakeMeshInstance", _BakeMeshInstanceMaterial.mainTexName = "u_AlbedoTexture", _BakeMeshInstanceMaterial.lightMapName = "u_CustomLightMap", _BakeMeshInstanceMaterial.lightMapContrastName = "u_LightMapContrast", _BakeMeshInstanceMaterial.lightMapHDRScale = "u_LightMapHDRScale";
  var BakeMeshInstanceMaterial = _BakeMeshInstanceMaterial,
    Vector4 = Laya.Vector4,
    Matrix4x42 = Laya.Matrix4x4,
    MaterialInstancePropertyBlock = Laya.MaterialInstancePropertyBlock,
    CommandBuffer2 = Laya.CommandBuffer,
    CameraEventFlags3 = Laya.CameraEventFlags,
    BoundBox = Laya.BoundBox,
    Vector36 = Laya.Vector3,
    BakeData = class {
      constructor() {
        this.lightmapScaleOffsets = [], this.l2mMatrix4X4s = [], this.boundBoxes = [], this.visibleCount = 0, this.materialBlock = new MaterialInstancePropertyBlock
      }
    },
    _BakeMeshInstanceMgr = class t {
      constructor() {
        this.bakeDataList = [], this.meshDic = new Map, this.textureDic = new Map, this.materialDic = new Map, this.cycleUrls = []
      }
      static get Instance() {
        return null == t._instance && (t._instance = new t), t._instance
      }
      mgrDestroy() {
        this.clearRenderData()
      }
      LoadBakeDataByJSON(t) {
        return Laya.LayaGL.renderEngine.getCapable(Laya.RenderCapable.DrawElement_Instance) ? new Promise(((e, i) => {
          this.hasInit = !1, this.loadDataCorrect = !0;
          const s = `resourcesLib/WorldMap/Terrain/${t}/`,
            o = s + "Bake/SceneBakeData.json";
          this.cycleUrls.push(o), ResManager.inst.loadMap([o]).then((t => {
            if (this.finishResolve = e, t) {
              let e = t[0];
              if (e) {
                const t = e.data.sceneDataList,
                  i = e.data.sceneMeshesName,
                  o = e.data.sceneTexturesName,
                  n = e.data.sceneMatDataList;
                this.LoadMeshDic(s, i), this.LoadTextureDic(s, o, n), this.LoadBakeDataList(t), this.InitAll()
              }
            } else this.loadFinish()
