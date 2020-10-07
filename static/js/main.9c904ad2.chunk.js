(this.webpackJsonpmath120calc_binomial=this.webpackJsonpmath120calc_binomial||[]).push([[0],{26:function(e,a,t){e.exports=t(46)},31:function(e,a,t){},41:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),i=(t(31),t(13)),o=t(17),m=t(32);function s(e){for(var a=1,t=2;t<=e;t++)a*=t;return a}function u(e,a){return s(e)/(s(a)*s(e-a))}function d(e,a,t,n){var l,r=new m.BigDecimal(a),c=new m.BigDecimal(1),i=new m.BigDecimal(0),s=function(e,a){for(var t=[],n=e;n<=a;n++)t.push(n);return t}(Math.min(t,n),Math.max(t,n)),d=Object(o.a)(s);try{for(d.s();!(l=d.n()).done;){var v=l.value,p=new m.BigDecimal(u(e,v));i=i.add(p.multiply(r.pow(v)).multiply(c.subtract(r).pow(e-v)))}}catch(f){d.e(f)}finally{d.f()}var E=m.BigDecimal.ROUND_HALF_UP;return i.setScale(18,E).stripTrailingZeros().toPlainString()}var v=t(18),p=t(14),E=t(20),f=t(5),b=t(19),y=t(48),g=t(50),h=t(49),x=t(6),w=t.n(x);var _=[{name:"binomialProbability",displayText:"Binomial Probability",prefix:"P(x) = "}];t(41);function S(e){return isNaN(e)&&""!==e||""===e}var N=function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),m=o[0],s=o[1],u=function(e){s(e)};return l.a.createElement(x.MathJaxProvider,null,l.a.createElement(v.a,{className:"p-3"},l.a.createElement("div",{className:"calc-title"},l.a.createElement("h3",{className:"header"},"Math-120 Binomial Distribution Calculator")),l.a.createElement(f.a,{style:{fontSize:"14px"}},l.a.createElement(f.a.Row,null,l.a.createElement(b.a,{md:3},l.a.createElement(f.a.Group,{controlId:"calcvar_p"},l.a.createElement(f.a.Label,null,"Probability of success (",l.a.createElement(w.a,{display:"inline",latex:"p"}),")"),l.a.createElement(f.a.Control,{tabIndex:1}))),l.a.createElement(b.a,{md:3},l.a.createElement(f.a.Group,{controlId:"calcvar_n"},l.a.createElement(f.a.Label,null,"Total number of trials (",l.a.createElement(w.a,{display:"inline",latex:"n"}),")"),l.a.createElement(f.a.Control,{tabIndex:2}))),l.a.createElement(b.a,{md:3},l.a.createElement(f.a.Group,{controlId:"calcvar_x1"},l.a.createElement(f.a.Label,null,"Lower fence (",l.a.createElement(w.a,{display:"inline",latex:"x_1"}),")"),l.a.createElement(f.a.Control,{tabIndex:3}))),l.a.createElement(b.a,{md:3},l.a.createElement(f.a.Group,{controlId:"calcvar_x2"},l.a.createElement(f.a.Label,null,"Upper fence (",l.a.createElement(w.a,{display:"inline",latex:"x_2"}),")"),l.a.createElement(f.a.Control,{tabIndex:4})))),l.a.createElement(y.a,null,l.a.createElement(b.a,{sm:4},l.a.createElement(E.a,{style:{width:"100%"}},l.a.createElement(p.a,{variant:"secondary",onClick:function(e){r({}),s(""),document.querySelector("#calcvar_p").value="",document.querySelector("#calcvar_n").value="",document.querySelector("#calcvar_x1").value="",document.querySelector("#calcvar_x2").value=""},tabIndex:6},"Clear"),l.a.createElement(p.a,{variant:"primary",block:!0,onClick:function(e){e&&e.preventDefault();var a=document.querySelector("#calcvar_p").value.trim(),t=document.querySelector("#calcvar_n").value.trim(),n=document.querySelector("#calcvar_x1").value.trim(),c=document.querySelector("#calcvar_x2").value.trim();if(S(a)||a>1||a<0)u(l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{display:"inline",latex:"p"})," must be a valid number between 0 and 1 inclusive."));else if(a=Number(a),S(t))u(l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{display:"inline",latex:"n"})," must be a valid integer."));else if((t=parseInt(t))>300)u(l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{display:"inline",latex:"n"})," must be less than 300"));else if(S(n)||n>t||n<0)u(l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{display:"inline",latex:"x_1"})," must be a valid integer less than or equal to n."));else if(n=parseInt(n),S(c)||c>t||c<0)u(l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{display:"inline",latex:"x_2"})," must be a valid integer less than or equal to n."));else{c=parseInt(c),s("");var i={binomialProbability:d(t,a,n,c)};r(i)}},tabIndex:5},l.a.createElement("strong",null,"Calculate"))))),l.a.createElement(y.a,{style:{color:"red",display:""!==m?"block":"none"}},l.a.createElement(b.a,null,l.a.createElement("p",{className:"mb-0 card-subtext"},m)))),l.a.createElement(y.a,{className:"justify-content-md-center",style:{marginTop:"1rem"}},l.a.createElement(b.a,{md:8,lg:6},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,{className:"text-center"},"Answer"),l.a.createElement(h.a,{variant:"flush",style:{display:"table"}},_.map((function(e,a){return l.a.createElement(h.a.Item,{key:a},l.a.createElement("div",{className:"lg-cell"},e.displayText),l.a.createElement("div",{className:"lg-cell lg-right"},l.a.createElement(w.a,{display:"inline",latex:e.prefix})),l.a.createElement("div",{className:"lg-cell",id:"ans-minimum"},t[e.name]))})))))),l.a.createElement(y.a,{className:"mt-4 text-center"},l.a.createElement(b.a,null,l.a.createElement("span",{className:"bottom-credit"},"Created by Adam Angle")))))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(45);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/math120calc_binomial",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/math120calc_binomial","/service-worker.js");k?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(a,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.9c904ad2.chunk.js.map