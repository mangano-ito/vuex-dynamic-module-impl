(function(t){function e(e){for(var i,o,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)o=c[p],r[o]&&f.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2142:function(t,e,n){"use strict";var i=n("9028"),r=n.n(i);r.a},"27a4":function(t,e,n){},"3bdb":function(t,e,n){"use strict";var i=n("27a4"),r=n.n(i);r.a},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(t,e,n){},9028:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i,r,a,o,c=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Implementation 1")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/impl2"}},[t._v("Implementation 2")])],1),n("router-view")],1)},s=[],l=(n("5c0b"),n("2877")),p={},f=Object(l["a"])(p,u,s,!1,null,null,null),d=f.exports,v=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items"},[n("h2",[t._v("Implementation 1 (Dynamic; Using Item Store)")]),t._l(t.ids,function(t){return n("Item",{key:t,attrs:{id:t}})})],2)},b=[],O=n("d225"),h=n("308d"),j=n("6bb5"),I=n("4e2b"),y=n("9ab4"),T=n("60a3"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("p",[t._v("ID: "+t._s(t.id))]),n("p",[t._v("Liked: "+t._s(t.likes))]),n("ul",[n("li",[n("input",{attrs:{type:"button",value:"upvote"},on:{click:function(e){return t.upvote()}}})]),n("li",[n("input",{attrs:{type:"button",value:"downvote"},on:{click:function(e){return t.downvote()}}})])])])},E=[],_=n("b0b4"),k=function(){function t(e,n,i){Object(O["a"])(this,t),this.instance=e,this.namespace=n,this.module=i,this.attach()}return Object(_["a"])(t,[{key:"attach",value:function(){this.instance.$store.registerModule(this.namespace,this.module)}},{key:"detach",value:function(){this.instance.$store.unregisterModule(this.namespace)}},{key:"action",value:function(t,e){return this.instance.$store.dispatch("".concat(this.namespace,"/").concat(t),e,{root:!0})}},{key:"getter",value:function(t){return this.instance.$store.getters["".concat(this.namespace,"/").concat(t)]}},{key:"state",get:function(){return this.instance.$store.state[this.namespace]}}]),t}(),w=(n("96cf"),n("3b8d")),g=n("bd86");(function(t){t["INIT"]="INIT",t["INCREMENT_BY"]="INCREMENT_BY"})(i||(i={})),function(t){t["INIT"]="INIT",t["UPVOTE"]="UPVOTE",t["DOWNVOTE"]="DOWNVOTE"}(r||(r={}));var P=function(){return{id:0,likes:0}},x=(a={},Object(g["a"])(a,i.INIT,function(t,e){t.id=e.id,t.likes=e.likes}),Object(g["a"])(a,i.INCREMENT_BY,function(t,e){t.likes+=e}),a),M=function(t){return new Promise(function(e,n){var i={id:t,likes:10*t};window.setTimeout(function(){return e(i)},1e3)})},V=(o={},Object(g["a"])(o,r.INIT,function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M(n);case 2:r=t.sent,e.commit(i.INIT,r);case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(g["a"])(o,r.UPVOTE,function(t){t.commit(i.INCREMENT_BY,1)}),Object(g["a"])(o,r.DOWNVOTE,function(t){t.commit(i.INCREMENT_BY,-1)}),o),C={state:P,mutations:x,actions:V,namespaced:!0},R=function(t){function e(){return Object(O["a"])(this,e),Object(h["a"])(this,Object(j["a"])(e).apply(this,arguments))}return Object(I["a"])(e,t),Object(_["a"])(e,[{key:"upvote",value:function(){return this.module.action(r.UPVOTE)}},{key:"downvote",value:function(){return this.module.action(r.DOWNVOTE)}},{key:"created",value:function(){var t="items/".concat(this.id);this.module=new k(this,t,C),this.module.action(r.INIT,this.id)}},{key:"destroyed",value:function(){this.module.detach()}},{key:"likes",get:function(){return this.module.state.likes}}]),e}(T["c"]);y["a"]([Object(T["b"])()],R.prototype,"id",void 0),R=y["a"]([T["a"]],R);var S=R,D=S,$=(n("3bdb"),Object(l["a"])(D,N,E,!1,null,"6485d7ce",null)),B=$.exports,U=function(t){function e(){var t;return Object(O["a"])(this,e),t=Object(h["a"])(this,Object(j["a"])(e).apply(this,arguments)),t.ids=[111,5555,3333,4649],t}return Object(I["a"])(e,t),e}(T["c"]);U=y["a"]([Object(T["a"])({components:{Item:B}})],U);var Y,W=U,L=W,A=Object(l["a"])(L,m,b,!1,null,null,null),J=A.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items"},[n("h2",[t._v("Implementation 2 (Static; Using List Store)")]),t._l(Object.values(t.items),function(t){return n("Item",{key:t.id,attrs:{id:t.id,likes:t.likes}})})],2)},z=[],F=n("4bb5"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("p",[t._v("ID: "+t._s(t.id))]),n("p",[t._v("Liked: "+t._s(t.likes))]),n("ul",[n("li",[n("input",{attrs:{type:"button",value:"upvote"},on:{click:function(e){return t.upvote(t.id)}}})]),n("li",[n("input",{attrs:{type:"button",value:"downvote"},on:{click:function(e){return t.downvote(t.id)}}})])])])},H=[];(function(t){t["INIT"]="INIT",t["UPVOTE"]="UPVOTE",t["DOWNVOTE"]="DOWNVOTE"})(Y||(Y={}));var K=Object(F["a"])("ListStore"),Q=function(t){function e(){return Object(O["a"])(this,e),Object(h["a"])(this,Object(j["a"])(e).apply(this,arguments))}return Object(I["a"])(e,t),e}(T["c"]);y["a"]([Object(T["b"])()],Q.prototype,"id",void 0),y["a"]([Object(T["b"])()],Q.prototype,"likes",void 0),y["a"]([K.Action(Y.UPVOTE)],Q.prototype,"upvote",void 0),y["a"]([K.Action(Y.DOWNVOTE)],Q.prototype,"downvote",void 0),Q=y["a"]([T["a"]],Q);var X=Q,Z=X,tt=(n("2142"),Object(l["a"])(Z,G,H,!1,null,"7c9c56ee",null)),et=tt.exports,nt=Object(F["a"])("ListStore"),it=function(t){function e(){var t;return Object(O["a"])(this,e),t=Object(h["a"])(this,Object(j["a"])(e).apply(this,arguments)),t.ids=[111,5555,3333,4649],t}return Object(I["a"])(e,t),Object(_["a"])(e,[{key:"created",value:function(){this.init(this.ids)}}]),e}(T["c"]);y["a"]([nt.State],it.prototype,"items",void 0),y["a"]([nt.Action(Y.INIT)],it.prototype,"init",void 0),it=y["a"]([Object(T["a"])({components:{Item:et}})],it);var rt=it,at=rt,ot=Object(l["a"])(at,q,z,!1,null,null,null),ct=ot.exports;c["a"].use(v["a"]);var ut,st,lt,pt=new v["a"]({routes:[{path:"/",name:"impl1",component:J},{path:"/impl2",name:"impl2",component:ct}]}),ft=n("2f62");n("5df3"),n("ac4d"),n("8a81"),n("ac6a");(function(t){t["INIT"]="INIT",t["INCREMENT_BY"]="INCREMENT_BY"})(ut||(ut={}));var dt={items:{}},vt=(st={},Object(g["a"])(st,ut.INIT,function(t,e){var n=!0,i=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value;c["a"].set(t.items,u.id,u)}}catch(s){i=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}}),Object(g["a"])(st,ut.INCREMENT_BY,function(t,e){var n=t.items[e.id];n&&(n.likes+=e.amount)}),st),mt=function(t){return new Promise(function(e,n){var i={id:t,likes:10*t};window.setTimeout(function(){return e(i)},1e3)})},bt=(lt={},Object(g["a"])(lt,Y.INIT,function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e,n){var i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=n.map(function(t){return mt(t)}),t.next=3,Promise.all(i);case 3:r=t.sent,e.commit(ut.INIT,r);case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(g["a"])(lt,Y.UPVOTE,function(t,e){t.commit(ut.INCREMENT_BY,{amount:1,id:e})}),Object(g["a"])(lt,Y.DOWNVOTE,function(t,e){t.commit(ut.INCREMENT_BY,{amount:-1,id:e})}),lt),Ot={state:dt,mutations:vt,actions:bt,namespaced:!0};c["a"].use(ft["a"]);var ht=new ft["a"].Store({state:{},mutations:{},actions:{},modules:{ListStore:Ot}});c["a"].config.productionTip=!1,new c["a"]({router:pt,store:ht,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.37097a1d.js.map