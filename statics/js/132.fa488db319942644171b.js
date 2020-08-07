(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{I1Lu:function(s,t,a){s.exports=a("t9M4")},t9M4:function(s,t,a){"use strict";a.r(t);var r=a("eVuF"),e=a.n(r),n={data:function(){return{description:"Hello Vue Cesium",rotation:0,rectangle1:{},coordinates1:{west:-110,south:20,east:-80,north:25},material1:{},rectangle2:{},coordinates2:{west:-110,south:30,east:-100,north:40},material2:{},rotation2:{},outlineColor2:{},rectangle3:{},coordinates3:{west:-92,south:30,east:-82,north:40},material3:{},rotation3:{},stRotation3:{},classificationType3:0}},mounted:function(){e.a.all([this.$refs.rectangle1.createPromise,this.$refs.rectangle2.createPromise,this.$refs.rectangle3.createPromise]).then((function(s){s[0].viewer.zoomTo(s[0].viewer.entities)}))},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.rotation=t.Math.toRadians(30),this.material1=t.Color.RED.withAlpha(.5),this.material2=t.Color.GREEN.withAlpha(.5),this.rotation2=t.Math.toRadians(45),this.outlineColor2=t.Color.BLACK,this.material3="https://zouyaoji.top/vue-cesium/favicon.png",this.outlineColor3="BLACK",this.rotation3=new t.CallbackProperty(this.getRotationValue,!1),this.stRotation3=new t.CallbackProperty(this.getRotationValue,!1),this.classificationType3=t.ClassificationType.TERRAIN},getRotationValue:function(){return this.rotation+=.005,this.rotation}}},v=a("JFUb"),_=Object(v.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("RectangleGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载矩形")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-entity",{attrs:{description:s.description,rectangle:s.rectangle1},on:{"update:rectangle":function(t){s.rectangle1=t}}},[a("vc-graphics-rectangle",{ref:"rectangle1",attrs:{coordinates:s.coordinates1,material:s.material1}})],1),s._v(" "),a("vc-entity",{attrs:{description:s.description,rectangle:s.rectangle2},on:{"update:rectangle":function(t){s.rectangle2=t}}},[a("vc-graphics-rectangle",{ref:"rectangle2",attrs:{coordinates:s.coordinates2,material:s.material2,rotation:s.rotation2,extrudedHeight:3e5,height:1e5,outline:!0,outlineColor:s.outlineColor2}})],1),s._v(" "),a("vc-entity",{attrs:{description:s.description,rectangle:s.rectangle3},on:{"update:rectangle":function(t){s.rectangle3=t}}},[a("vc-graphics-rectangle",{ref:"rectangle3",attrs:{coordinates:s.coordinates3,material:s.material3,rotation:s.rotation3,stRotation:s.stRotation3,classificationType:s.classificationType3}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-graphics-rectangle")]),this._v(" 组件用于加载矩形，可以拉伸成体。需要作为 "),t("code",{pre:!0},[this._v("vc-entity")]),this._v(" 的子组件使用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rectangle.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle1"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":coordinates")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"coordinates1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rectangle.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle2"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":coordinates")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"coordinates2"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rotation")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rotation2"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100000.0"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"outlineColor2"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle2"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rectangle.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle3"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":coordinates")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"coordinates3"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rotation")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rotation3"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":stRotation")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stRotation3"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":classificationType")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"classificationType3"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle3"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rotation")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("coordinates1")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-110")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-80")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle2")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("coordinates2")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-110")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-100")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rotation2")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor2")]),s._v(": {},\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle3")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("coordinates3")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-92.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-82.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rotation3")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stRotation3")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("classificationType3")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all([\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.rectangle1.createPromise,\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.rectangle2.createPromise,\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.rectangle3.createPromise\n      ]).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.zoomTo(instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.entities)\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation = Cesium.Math.toRadians("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.RED.withAlpha("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.GREEN.withAlpha("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation2 = Cesium.Math.toRadians("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor2 = Cesium.Color.BLACK\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material3 = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor3 = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`BLACK`")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation3 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.CallbackProperty("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getRotationValue, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".stRotation3 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.CallbackProperty("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getRotationValue, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".classificationType3 = Cesium.ClassificationType.TERRAIN\n      },\n      getRotationValue() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation += "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.005")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 是否显示。")])]),s._v(" "),a("tr",[a("td",[s._v("coordinates")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 的 Rectangle 属性。"),a("strong",[s._v("结构：{ west: number, south: number, east: number, north: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("height")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 高度。")])]),s._v(" "),a("tr",[a("td",[s._v("heightReference")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 高度模式。"),a("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("extrudedHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 拉伸高度。")])]),s._v(" "),a("tr",[a("td",[s._v("extrudedHeightReference")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 拉伸高度模式。 "),a("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("rotation")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 按正北顺时针的旋转角。")])]),s._v(" "),a("tr",[a("td",[s._v("stRotation")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 按正北逆时针旋转纹理。")])]),s._v(" "),a("tr",[a("td",[s._v("granularity")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。")])]),s._v(" "),a("tr",[a("td",[s._v("fill")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 是否填充材质。")])]),s._v(" "),a("tr",[a("td",[s._v("material")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'WHITE'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 材质。")])]),s._v(" "),a("tr",[a("td",[s._v("outline")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 是否绘制轮廓线。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineColor")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'BALCK'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 轮廓线颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 轮廓线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("shadows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 是否投射或接收阴影。 "),a("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 随相机距离改变是否显示参数。 "),a("strong",[s._v("结构：{ near: number, far: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("classificationType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 贴对象模式 。 "),a("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("zIndex")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 rectangle 顺序，没设置高度和拉伸高度时有效。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档： "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html"}},[this._v("RectangleGraphics")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}],!1,null,null,null);t.default=_.exports}}]);
//# sourceMappingURL=132.fa488db319942644171b.js.map