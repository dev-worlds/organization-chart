(function(){"use strict";var e={7495:function(e,t,n){var a=n(9242),r=n(3396);function o(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var i=n(89);const s={},l=(0,i.Z)(s,[["render",o]]);var c=l,d=n(5431);(0,d.z)("/organization-chart/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var v=n(2483),u=n(4870),h=n(7139),g=(n(7658),n(65));let _=[{name:"Руководство",children:[{name:"Отдел 1",children:[{name:"Отдел 2"},{name:"Отдел 3"},{name:"Отдел 4"}]},{name:"Отдел 5",children:[{name:"Отдел 6"}]},{name:"Отдел 7"}]}];n(3767),n(8585),n(8696);function p(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}function f(e,t="children"){e.forEach((e=>{e.id=p(),e[t]?.length&&f(e[t],t)}))}function m(e,t,n="children"){return!!e&&(!!t&&e.some((e=>e===t||(n in e?m(e[n],t,n):void 0))))}var x=(0,g.MT)({state:{treeStructure:[]},getters:{getOrgStructure(e){return e.treeStructure}},mutations:{addOrgStructure(e,t){e.treeStructure.push(...t)},changeTreeElms(e,{elm:t,to:n,parentDragElm:a}){if("children"in n){if(n.children.some((e=>e===t)))return}else n.children=[];a.children=a.children.filter((e=>e!==t)),n.children.push(t)}},actions:{loadTreeStructure({commit:e}){setTimeout((()=>{f(_),e("addOrgStructure",_)}),3e3)}},modules:{}});const y=["draggable","onDragstart","onDragend","onTouchend","onTouchmove"],w=["colspan"],b=["onDrop"],k={key:0,class:"chart-lines"},D=["colspan"],O=(0,r._)("div",{class:"chart-line-down"},null,-1),S=[O],T={key:1,class:"chart-lines",style:{visibility:"inherit"}},E={key:0},j=(0,r._)("div",{class:"chart-line-down"},null,-1),M=[j],H={key:2,class:"chart-nodes"},z={colspan:"2"};var A={__name:"TreeChart",props:{data:{type:Object,default:()=>({})},parent:{type:Object,default:null},deep:{type:Number,default:1}},emits:["dragStart","dragEnd","dragOver","dragEnter","dragLeave","dropEvent"],setup(e,{emit:t}){const n=e;(0,r.bv)((()=>{i.value.tree=n.data}));const o=(0,u.iH)(null),i=(0,u.iH)(null),s=(0,u.iH)(null),l=e=>{const n=e.changedTouches[0];o.value.style.zIndex="-1";const a=document.elementFromPoint(n.clientX,n.clientY);_(),m(),a.tree&&t("dropEvent",a.tree)},c=()=>{setTimeout((()=>{o.value.style.visibility="hidden"}),0),t("dragStart",{data:n.data,parent:n.parent})},d=()=>{_(),t("dropEvent",n.data)},v=()=>{o.value&&_()},g=e=>{const t=e.changedTouches[0];f(o.value),p(t)},_=()=>{o.value.style.position="",o.value.style.top="",o.value.style.left="",o.value.style.zIndex="",o.value.style.visibility=""},p=({clientY:e,clientX:t})=>{o.value.style.position="fixed",o.value.style.top=e-20+"px",o.value.style.left=t-Math.round(o.value.offsetWidth/2)+"px"},f=e=>{s.value.style.width=e.offsetWidth+"px",s.value.style.height=e.offsetHeight+"px",s.value.style.position="static"},m=()=>{s.value.style.position="absolute",s.value.style.width="",s.value.style.height=""};return(n,u)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("table",{class:"chart-table",draggable:e.deep>1,onDragstart:(0,a.iM)(c,["stop"]),onDragend:(0,a.iM)(v,["stop"]),onDragover:u[2]||(u[2]=(0,a.iM)((()=>{}),["stop","prevent"])),onDragenter:u[3]||(u[3]=(0,a.iM)((()=>{}),["stop","prevent"])),onTouchend:(0,a.iM)(l,["stop"]),onTouchstart:u[4]||(u[4]=(0,a.iM)((n=>t("dragStart",{data:e.data,parent:e.parent})),["stop"])),onTouchmove:(0,a.iM)(g,["stop"]),ref_key:"treeItem",ref:o},[(0,r._)("tbody",null,[(0,r._)("tr",null,[(0,r._)("td",{colspan:2*e.data.children?.length||""},[(0,r._)("div",{class:"chart-node-content",onDrop:(0,a.iM)(d,["stop"]),ref_key:"dropItem",ref:i},[(0,r.WI)(n.$slots,"name",{item:e.data})],40,b)],8,w)]),e.data.children?.length?((0,r.wg)(),(0,r.iD)("tr",k,[(0,r._)("td",{colspan:2*e.data.children?.length},S,8,D)])):(0,r.kq)("",!0),e.data.children?.length?((0,r.wg)(),(0,r.iD)("tr",T,[1===e.data.children.length?((0,r.wg)(),(0,r.iD)("td",E,M)):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(2*e.data.children.length,(t=>((0,r.wg)(),(0,r.iD)("td",{class:(0,h.C_)({"chart-line-left":t%2!==0,"chart-line-right":t%2===0,"chart-line-top":1!==t&&t!==2*e.data.children.length})},"  ",2)))),256))])):(0,r.kq)("",!0),e.data.children?.length?((0,r.wg)(),(0,r.iD)("tr",H,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.data.children,(n=>((0,r.wg)(),(0,r.iD)("td",z,[((0,r.wg)(),(0,r.j4)(I,{key:n.id,data:n,onDragStart:u[0]||(u[0]=e=>t("dragStart",e)),onDropEvent:u[1]||(u[1]=e=>t("dropEvent",e)),parent:e.data,deep:e.deep+1},{name:(0,r.w5)((({item:e})=>[(0,r.Uk)((0,h.zw)(e.name),1)])),_:2},1032,["data","parent","deep"]))])))),256))])):(0,r.kq)("",!0)])],40,y),(0,r._)("div",{class:"cloak",ref_key:"cloak",ref:s},null,512)],64))}};const C=A;var I=C;const U=(0,r.uE)('<div class="hexagon" aria-label="Animated hexagonal ripples"><div class="hexagon__group"><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div></div><div class="hexagon__group"><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div></div><div class="hexagon__group"><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div></div><div class="hexagon__group"><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div></div><div class="hexagon__group"><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div></div><div class="hexagon__group"><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div><div class="hexagon__sector"></div></div></div><p aria-label="Loading">Loading</p>',2);function Y(e,t){return U}const q={},F=(0,i.Z)(q,[["render",Y]]);var N=F,P={__name:"HomeView",setup(e){(0,r.bv)((()=>{x.dispatch("loadTreeStructure")}));const t=x.getters.getOrgStructure,n=(0,u.iH)(null),a=(0,u.iH)(null),o=({parent:e,data:t})=>{n.value=t,a.value=e},i=e=>{const t=!m(n.value.children,e,"children");t?n.value!==e&&x.commit("changeTreeElms",{elm:n.value,to:e,parentDragElm:a.value}):console.error("Нельзя вкладывать внутрь"),n.value=null,a.value=null};return(e,n)=>(0,u.SU)(t).length?((0,r.wg)(),(0,r.j4)(I,{key:0,data:(0,u.SU)(t)[0],onDragStart:o,onDropEvent:i,deep:1},{name:(0,r.w5)((({item:e})=>[(0,r.Uk)((0,h.zw)(e.name),1)])),_:1},8,["data"])):((0,r.wg)(),(0,r.j4)(N,{key:1}))}};const L=P;var W=L;const K=[{path:"/",name:"home",component:W}],V=(0,v.p7)({history:(0,v.PO)("/organization-chart/"),routes:K});var X=V;(0,a.ri)(c).use(x).use(X).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],o=e[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var d=l(n)}for(t&&t(a);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunkorganization_chart"]=self["webpackChunkorganization_chart"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7495)}));a=n.O(a)})();
//# sourceMappingURL=app.62fdefb2.js.map