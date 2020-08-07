(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{D9he:function(s,t,a){"use strict";a.r(t);var r=30.598026044,e=114.302312702,v={data:function(){return{positions:[{lng:e-.5,lat:r-.5,height:5e4},{lng:e-3,lat:r,height:0},{lng:e-3,lat:r-1,height:5e4},{lng:e-1,lat:r-3,height:5e4},{lng:e-.5,lat:r-.5,height:5e4}],minimumHeights:[0,0,0,0,0]}},mounted:function(){this.$refs.wall.createPromise.then((function(s){s.Cesium;var t=s.viewer;s.cesiumObject;t.zoomTo(t.entities)}))},methods:{ready:function(s){this.cesiumInstance=s;var t=this.cesiumInstance;t.Cesium;t.viewer.scene.globe.depthTestAgainstTerrain=!0}}},l=a("JFUb"),_=Object(l.a)(v,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("流动墙")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载流动墙效果")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-trail-wall",{ref:"wall",attrs:{positions:s.positions,color:"yellow",minimumHeights:s.minimumHeights,imageUrl:"./statics/SampleData/images/colors1.png",interval:1e3}}),s._v(" "),a("vc-layer-imagery",[a("vc-provider-imagery-tianditu",{attrs:{mapStyle:"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("vc-trail-wall")]),s._v(" 组件用于加载流动墙效果。实质是通过"),a("code",{pre:!0},[s._v("vc-entity")]),s._v(" 和 "),a("code",{pre:!0},[s._v("vc-graphics-wall")]),s._v(" 加载墙，并赋予自定义材质 "),a("code",{pre:!0},[s._v("PolylineTrailMaterialProperty")]),s._v("实现。参考 "),a("a",{attrs:{href:"https://www.wellyyss.cn/ysCesium/main/app.html"}},[s._v("ysCesium|跃焱邵隼")]),s._v("。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-trail-wall")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yellow"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":minimumHeights")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"minimumHeights"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("imageUrl")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./statics/SampleData/images/colors1.png"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"wall"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1000"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-trail-wall")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" lat = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.598026044")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" lng = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("114.302312702")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": lng - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": lat - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50000")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": lng - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": lat, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": lng - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": lat - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50000")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": lng - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": lat - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50000")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": lng - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": lat - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50000")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimumHeights")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.wall.createPromise.then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer, cesiumObject }")]),s._v(") =>")]),s._v(" {\n        viewer.zoomTo(viewer.entities)\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("positions")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定墙的位置数组。 "),a("strong",[s._v("结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]")])])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定流动墙是否可见。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumHeights")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 wall 底部的高度数组。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumHeights")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 wall 顶部的高度数组。")])]),s._v(" "),a("tr",[a("td",[s._v("outline")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 wall 是否绘制轮廓线。")])]),s._v(" "),a("tr",[a("td",[s._v("color")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'yellow'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定墙的颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("interval")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("3000")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定墙材质流动一个周期的时间，单位毫秒。")])]),s._v(" "),a("tr",[a("td",[s._v("imageUrl")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("''")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定墙的图片材质。")])]),s._v(" "),a("tr",[a("td",[s._v("loop")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定墙的流动效果是否循环。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及线实体实例。")])])])])}],!1,null,null,null);t.default=_.exports},UF4i:function(s,t,a){s.exports=a("D9he")}}]);
//# sourceMappingURL=145.657f46f7d3b20e22ccd5.js.map