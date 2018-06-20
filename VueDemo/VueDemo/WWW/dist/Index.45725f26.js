parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"index",mounted:function(){},data:function(){return{showTip:!1}},methods:{showClick:function(){this.showTip=!0}}};
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("Icon",{attrs:{type:"ios-bolt-outline",size:"150"}}),t._v(" "),a("h1",[t._v("Parcel-VUE")]),t._v(" "),a("br"),t._v(" "),t._m(0),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("parcel-vue是全新的组件化构建开发模板，追求最零化的配置，支持vux/iview等组件框架，提供秒级开发与部署（已升级parcel至1.9.0版本!）")]),t._v(" "),a("br"),t._v(" "),a("Row",{attrs:{type:"flex",justify:"space-around"}},[a("Col",{attrs:{span:"5"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("Icon",{attrs:{type:"ios-trash-outline",size:"100"}}),t._v(" "),a("h2",[t._v("零配置")]),t._v(" "),a("h3",[t._v("完全没有单独的构建配置文件")])],1)])],1),t._v(" "),a("Col",{attrs:{span:"5"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("Icon",{attrs:{type:"hammer",size:"100"}}),t._v(" "),a("h2",[t._v("秒级构建")]),t._v(" "),a("h3",[t._v("iView工程初次构建时间5s左右")])],1)])],1),t._v(" "),a("Col",{attrs:{span:"5"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("Icon",{attrs:{type:"social-nodejs",size:"100"}}),t._v(" "),a("h2",[t._v("毫秒级热部署")]),t._v(" "),a("h3",[t._v("修改源码，响应时间通常1-10ms")])],1)])],1),t._v(" "),a("Col",{attrs:{span:"5"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"},on:{click:t.showClick}},[a("Icon",{attrs:{type:"play",size:"100"}}),t._v(" "),a("h2",[t._v("快速开始")]),t._v(" "),a("h3",[t._v("开始您的parcel-vue之旅")])],1)])],1)],1),t._v(" "),a("br"),t._v(" "),a("Row",{attrs:{type:"flex",justify:"space-around"}},[a("Col",{attrs:{span:"5"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("Icon",{attrs:{type:"ios-trash-outline",size:"100"}}),t._v(" "),a("h2",[t._v("零配置")]),t._v(" "),a("h3",[t._v("完全没有单独的构建配置文件")])],1)])],1),t._v(" "),a("Col",{attrs:{span:"5"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("Icon",{attrs:{type:"hammer",size:"100"}}),t._v(" "),a("h2",[t._v("秒级构建")]),t._v(" "),a("h3",[t._v("iView工程初次构建时间5s左右")])],1)])],1),t._v(" "),a("Col",{attrs:{span:"5"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("Icon",{attrs:{type:"social-nodejs",size:"100"}}),t._v(" "),a("h2",[t._v("毫秒级热部署")]),t._v(" "),a("h3",[t._v("修改源码，响应时间通常1-10ms")])],1)])],1),t._v(" "),a("Col",{attrs:{span:"5"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"},on:{click:t.showClick}},[a("Icon",{attrs:{type:"play",size:"100"}}),t._v(" "),a("h2",[t._v("快速开始")]),t._v(" "),a("h3",[t._v("开始您的parcel-vue之旅")])],1)])],1)],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v(" 前言：伴随着webpack越发复杂臃肿，前端"),e("b",[this._v("零配置")]),this._v("的需求越来越高，parcel为前端构建带来了革命性的变化 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cheneyweb",target:"_blank"}},[t._v("Thanks")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cheneyweb/parcel-vue",target:"_blank"}},[t._v("Github")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cheneyweb/parcel-vue",target:"_blank"}},[t._v("Support")])]),t._v(" "),a("li",[a("a",{attrs:{href:"mailto:457299596@qq.com",target:"_blank"}},[t._v("Email")])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.xserver.top",target:"_blank"}},[t._v("Powered by XServer")])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cheneyweb",target:"_blank"}},[t._v("Donate")])])])}],_compiled:!0,_scopeId:"data-v-319029",functional:void 0});})();
},{}]},{},[10], null)