(this["webpackJsonpservice-worker-test"]=this["webpackJsonpservice-worker-test"]||[]).push([[0],{11:function(e,t,n){"use strict";(function(e){var o=n(12),a=n(13),r=n(23),c=n(14),i=n(24),s=n(0),l=n.n(s),u=n(4),f=n(2),h=n(22),d=n(15),m=n(16),v=n(17),p=n(20),w=n(21),b=(n(40),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null),l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0,component:v.a}),l.a.createElement(f.a,{path:"/about",component:p.a}),l.a.createElement(f.a,{component:w.a})),l.a.createElement(m.a,null)))}}]),t}(s.Component));t.a=Object(h.hot)(e)(b)}).call(this,n(31)(e))},15:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(){return a.a.createElement("header",null,"Header")}},16:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(){return a.a.createElement("footer",null,"Footer")}},17:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(4);t.a=function(){return a.a.createElement("div",{className:"home"},a.a.createElement("div",null,"/home"),a.a.createElement("h1",null,"This is the [Typescript] Home page"),a.a.createElement(r.b,{to:"/about"},"Go to About"))}},20:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(4);t.a=function(){return a.a.createElement("div",{className:"about"},a.a.createElement("div",null,"/about"),a.a.createElement("h1",null,"This is the About page"),a.a.createElement(r.b,{to:"/"},"Go to Home"))}},21:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(){return a.a.createElement("div",null,"404 page")}},25:function(e,t,n){e.exports=n(42)},30:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(10),c=n.n(r),i=(n(30),n(11)),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(i.a,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/service-worker-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/service-worker-test","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.56391010.chunk.js.map