(function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],f=0,d=[];f<a.length;f++)i=a[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function i(e){return a.p+"js/"+({"not-found":"not-found"}[e]||e)+"."+{"chunk-1fbfa7b4":"f6962706","chunk-2d0db4e1":"6421192b","not-found":"9b684301"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=i(e),u=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");i.type=r,i.request=u,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var s=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"3f92":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("5c96"),u=n.n(o),i=(n("0fae"),n("8c4f")),a=new i["a"]({mode:"hash",routes:[{path:"/",name:"default",redirect:{name:"relation.circle-packing"}},{path:"/relation",name:"relation",component:function(){return n.e("chunk-2d0db4e1").then(n.bind(null,"6efb"))},children:[{path:"circle-packing",name:"relation.circle-packing",component:function(){return n.e("chunk-1fbfa7b4").then(n.bind(null,"f8ea"))}}]},{path:"*",component:function(){return n.e("not-found").then(n.bind(null,"f4b7"))}}]}),c=a,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav-menu"),n("section",{staticClass:"content"},[n("router-view")],1)],1)},f=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"nav-menu"},[n("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":e.menuActive,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""}},e._l(e.menuData,function(t,r){return n("el-submenu",{key:t.title,attrs:{index:r+""}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._l(t.children,function(t){return n("el-menu-item",{key:t.title,attrs:{index:t.path}},[e._v(e._s(t.title))])})],2)}),1)],1)},d=[],p=[{title:"关系图",children:[{title:"Circle Packing",path:"/relation/circle-packing"}]}],h={name:"nav-menu",data:function(){return{menuActive:void 0,menuData:p}},mounted:function(){this.menuActive=this.$route.path,console.log(this.menuActive)},methods:{},watch:{$route:function(e){this.menuActive=e.path}}},m=h,v=(n("a2bf"),n("2877")),b=Object(v["a"])(m,s,d,!1,null,null,null),g=b.exports,y={name:"g2-demos",components:{NavMenu:g}},k=y,w=(n("034f"),Object(v["a"])(k,l,f,!1,null,null,null)),_=w.exports;r["default"].config.productionTip=!1,r["default"].use(u.a),r["default"].use(i["a"]),new r["default"]({router:c,render:function(e){return e(_)}}).$mount("#app")},"64a9":function(e,t,n){},a2bf:function(e,t,n){"use strict";var r=n("3f92"),o=n.n(r);o.a}});
//# sourceMappingURL=app.09ce76a9.js.map