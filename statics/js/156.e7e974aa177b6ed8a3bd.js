(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{F7KL:function(s,t,a){s.exports=a("bnLz")},bnLz:function(s,t,a){"use strict";a.r(t);var r=a("eVuF"),e=a.n(r),n={data:function(){return{appearance:null,geometry:null,vertexFormat:null,polygonHierarchy:[{lng:102.1,lat:29.5},{lng:106.2,lat:29.5},{lng:106.2,lat:33.5},{lng:108.2,lat:35.5},{lng:102.1,lat:33.5}],height:1e5,polygonHierarchyOutline:[{lng:107.1,lat:29.5},{lng:111.2,lat:29.5},{lng:111.2,lat:33.5},{lng:113.2,lat:35.5},{lng:107.1,lat:33.5}],appearanceOutline:null,attributes:null}},mounted:function(){e.a.all([this.$refs.polygon.createPromise,this.$refs.polygonOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var a=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(a.boundingSphere,t.vm.$parent.modelMatrix):a.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.viewer=a;var r=t.PerInstanceColorAppearance,e=t.ColorGeometryInstanceAttribute,n=t.EllipsoidSurfaceAppearance,v=t.Material;this.appearanceOutline=new r({flat:!0}),this.attributes={color:new e(Math.random(),Math.random(),Math.random(),.5)},this.vertexFormat=n.VERTEX_FORMAT,this.appearance=new n({material:new v({fabric:{type:"Water",uniforms:{normalMap:"./statics/SampleData/images/waterNormals.jpg",frequency:1e3,animationSpeed:.05,amplitude:10}}})})}}},v=a("JFUb"),l=Object(v.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("PolygonGeometry、PolygonOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载多边形几何体")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-primitive",{attrs:{appearance:s.appearance}},[a("vc-instance-geometry",[a("vc-geometry-polygon",{ref:"polygon",attrs:{vertexFormat:s.vertexFormat,polygonHierarchy:s.polygonHierarchy,height:s.height,extrudedHeight:30}})],1)],1),s._v(" "),a("vc-primitive",{attrs:{appearance:s.appearanceOutline}},[a("vc-instance-geometry",{attrs:{attributes:s.attributes}},[a("vc-geometry-outline-polygon",{ref:"polygonOutline",attrs:{polygonHierarchy:s.polygonHierarchyOutline}})],1)],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),a("hr"),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(9),s._v(" "),a("hr")],1)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("code",{pre:!0},[s._v("vc-geometry-polygon")]),s._v(" 组件用于加载多边形几何体。")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("vc-geometry-outline-polygon")]),s._v(" 组件用于加载多边形几何体轮廓。")]),s._v(" "),a("li",[s._v("需要作为 "),a("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(" 的子组件使用，可以挂载到 "),a("code",{pre:!0},[s._v("vc-primitive")]),s._v(" 或 "),a("code",{pre:!0},[s._v("vc-primitive-ground")]),s._v("。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygon"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":vertexFormat")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertexFormat"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":polygonHierarchy")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonHierarchy"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"height"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"30"')]),s._v("\n          >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearanceOutline"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-polygon")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonOutline"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":polygonHierarchy")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonHierarchyOutline"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-polygon")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchy")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100000")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchyOutline")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("111.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("111.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("113.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearanceOutline")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.polygon.createPromise, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.polygonOutline.createPromise]).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances.reduce("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur.vm.$parent.modelMatrix\n            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n            : geometry.boundingSphere\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n        }, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready({ Cesium, viewer }) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer = viewer\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { PerInstanceColorAppearance, ColorGeometryInstanceAttribute, EllipsoidSurfaceAppearance, Material } = Cesium\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearanceOutline = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PerInstanceColorAppearance({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".vertexFormat = EllipsoidSurfaceAppearance.VERTEX_FORMAT\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" EllipsoidSurfaceAppearance({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Material({\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fabric")]),s._v(": {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Water'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("uniforms")]),s._v(": {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalMap")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/images/waterNormals.jpg'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("frequency")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000.0")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("animationSpeed")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.05")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("amplitude")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10.0")]),s._v("\n              }\n            }\n          })\n        })\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-polygon")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("polygonHierarchy")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 的 PolygonHierarchy 属性。")])]),s._v(" "),a("tr",[a("td",[s._v("height")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 的高度。")])]),s._v(" "),a("tr",[a("td",[s._v("extrudedHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 拉伸高度。")])]),s._v(" "),a("tr",[a("td",[s._v("vertexFormat")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 要缓存的顶点属性。")])]),s._v(" "),a("tr",[a("td",[s._v("stRotation")]),s._v(" "),a("td",[s._v("Number|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 纹理按正北方向逆时针旋转角度。")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 参考椭球体。")])]),s._v(" "),a("tr",[a("td",[s._v("granularity")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。")])]),s._v(" "),a("tr",[a("td",[s._v("perPositionHeight")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 是否使用每个位置的高度。")])]),s._v(" "),a("tr",[a("td",[s._v("closeTop")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 拉伸出来的顶部是否闭合。")])]),s._v(" "),a("tr",[a("td",[s._v("closeBottom")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 拉伸出来的底部是否闭合。")])]),s._v(" "),a("tr",[a("td",[s._v("arcType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 线条类型。"),a("strong",[s._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-polygon")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("polygonHierarchy")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 的 PolygonHierarchy 属性。")])]),s._v(" "),a("tr",[a("td",[s._v("height")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 的高度。")])]),s._v(" "),a("tr",[a("td",[s._v("extrudedHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 拉伸高度。")])]),s._v(" "),a("tr",[a("td",[s._v("vertexFormat")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 要缓存的顶点属性。")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 参考椭球体。")])]),s._v(" "),a("tr",[a("td",[s._v("granularity")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。")])]),s._v(" "),a("tr",[a("td",[s._v("perPositionHeight")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 是否使用每个位置的高度。")])]),s._v(" "),a("tr",[a("td",[s._v("arcType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 线条类型。"),a("strong",[s._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("polygonHierarchy 结构")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Array")]),s._v("\n[{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Object")]),s._v("\n{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n        positions: [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      ]\n    }\n  ]\n}\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html"}},[this._v("PolygonGeometry")])]),this._v("、"),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html"}},[this._v("PolygonOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=156.e7e974aa177b6ed8a3bd.js.map