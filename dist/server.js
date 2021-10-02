!function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=16)}([function(e,r){e.exports=require("react/jsx-runtime")},function(e,r,t){e.exports=t(15)},function(e,r){e.exports=require("react-router-dom")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("@babel/runtime/helpers/esm/defineProperty")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r,t){"use strict";t.r(r);var n=t(1),c=t.n(n);function o(e,r,t,n,c,o,s){try{var u=e[o](s),i=u.value}catch(e){return void t(e)}u.done?r(i):Promise.resolve(i).then(n,c)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,c){var s=e.apply(r,t);function u(e){o(s,n,c,u,i,"next",e)}function i(e){o(s,n,c,u,i,"throw",e)}u(void 0)}))}}var u=t(8),i=t.n(u),a=t(9),l=t.n(a),p=t(2),d=t(0),f=function(){return Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(p.Link,{to:"/red",children:"Red"})}),Object(d.jsx)("li",{children:Object(d.jsx)(p.Link,{to:"/blue",children:"Blue"})}),Object(d.jsx)("li",{children:Object(d.jsx)(p.Link,{to:"/users",children:"Users"})})]})},j=function(){return Object(d.jsx)("div",{className:"Red",children:"Red"})},b=function(){return Object(d.jsx)(j,{})},x=function(){return Object(d.jsx)("div",{className:"Blue",children:"Blue"})},O=function(){return Object(d.jsx)(x,{})},h=t.p+"static/media/UsersContainer.41503a19.bin",v=t(4),m=t(5),y=function(e){var r=e.user,t=r.email,n=r.name,c=r.username;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:[c," (",n,")"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"e-mail:"})," ",t]})]})},g=Object(v.createContext)(null),S=g,E=function(e){var r=e.resolve,t=Object(v.useContext)(g);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},P=t(12),w=t.n(P);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){w()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var k=t(10),q=t.n(k),T=t(3),U=c.a.mark(L),D=c.a.mark(M),C="users/GET_USER",G=function(e){return{type:C,payload:e}},N=function(e){return q.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function L(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(T.call)(N,e.payload);case 3:return r=t.sent,t.next=6,Object(T.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(T.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),U,null,[[0,8]])}function M(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.takeEvery)(C,L);case 2:case"end":return e.stop()}}),D)}var A={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return R(R({},e),{},{loading:R(R({},e.loading),{},{users:!0})});case C:return R(R({},e),{},{loading:R(R({},e.loading),{},{user:!0}),error:R(R({},e.error),{},{user:null})});case"users/GET_USERS_SUCCESS":return R(R({},e),{},{loading:R(R({},e.loading),{},{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return R(R({},e),{},{loading:R(R({},e.loading),{},{users:!1}),error:R(R({},e.error),{},{users:r.payload})});default:return e}},I=function(e){var r=e.id,t=Object(m.useSelector)((function(e){return e.users.user})),n=Object(m.useDispatch)();return Object(v.useEffect)((function(){t&&t.id===parseInt(r,10)||n(G(r))}),[n,r,t]),t?Object(d.jsx)(y,{user:t}):Object(d.jsx)(E,{resolve:function(){return n(G(r))}})},B=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(p.Route,{path:"/users/:id",render:function(e){var r=e.match;return Object(d.jsx)(I,{id:r.params.id})}})]})},J=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(p.Route,{path:"/red",component:b}),Object(d.jsx)(p.Route,{path:"/blue",component:O}),Object(d.jsx)(p.Route,{path:"/users",component:B})]})},Y=t(11),$=t.n(Y),z=t(13),H=t.n(z),K=t(6),Q=t(14),V=t.n(Q),W=t(7),X=t.n(W),Z=c.a.mark(ee);function ee(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.all)([M()]);case 2:case"end":return e.stop()}}),Z)}var re=Object(K.combineReducers)({users:F}),te=JSON.parse(H.a.readFileSync($.a.resolve("./build/asset-manifest.json"),"utf8")),ne=Object.keys(te.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(te.files[e],'"><\/script>')})).join("");function ce(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat(te["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,"\n      </div>\n      ").concat(r,'\n      <script src="').concat(te["runtime~main.js"],'"><\/script>\n      ').concat(ne,'\n      <script src="').concat(te["main.js"],'"><\/script>\n    </body>\n    </html>\n      ')}var oe=l()(),se=function(){var e=s(c.a.mark((function e(r,t,n){var o,s,u,a,l,f,j,b,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s=X()(),u=Object(K.createStore)(re,Object(K.applyMiddleware)(V.a,s)),a=s.run(ee).toPromise(),l={done:!1,promises:[]},f=Object(d.jsx)(S.Provider,{value:l,children:Object(d.jsx)(m.Provider,{store:u,children:Object(d.jsx)(p.StaticRouter,{location:r.url,context:o,children:Object(d.jsx)(J,{})})})}),i.a.renderToStaticMarkup(f),u.dispatch(W.END),e.prev=8,e.next=11,a;case 11:return e.next=13,Promise.all(l.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",t.status(500));case 18:l.done=!0,j=i.a.renderToString(f),b=JSON.stringify(u.getState()).replace(/</g,"\\u003c"),x="<script>__PRELOADED_STATE__ = ".concat(b,"<\/script>"),t.send(ce(j,x));case 23:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(r,t,n){return e.apply(this,arguments)}}(),ue=l.a.static($.a.resolve("./build"),{index:!1});oe.use(ue),oe.use(se),oe.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);