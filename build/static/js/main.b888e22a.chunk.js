(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,t,e){n.exports=e(32)},22:function(n,t,e){},24:function(n,t,e){},32:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),a=e(3),o=e.n(a),c=(e(22),e(8)),s=e(9),l=e(13),u=e(10),h=e(14),f=(e(24),e(1)),g=e(2);function v(){var n=Object(f.a)(["\n      width: ","vmin;\n      height: ","vmin;\n  "]);return v=function(){return n},n}function d(){var n=Object(f.a)(["\n  background-image: url(/base.svg);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n\n  ","\n  \n  img {\n    width:100%;\n    height:100%;\n  }\n"]);return d=function(){return n},n}var p=g.b.div(d(),function(n){var t=n.size;return Object(g.a)(v(),t,t)}),m=function(n){var t=n.src,e=n.alt;return i.a.createElement(p,{size:18},i.a.createElement("img",{src:"/icons/".concat(t),alt:e}))};function w(){var n=Object(f.a)(["\n    left: 50%;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    text-align: right;\n    top: 50%;\n    transform-origin: 0 50%;\n    transform: translate(0, -50%);\n"]);return w=function(){return n},n}var b=g.b.div(w());function k(){var n=Object(f.a)(["\n            transform: rotate(","deg) scale(1.1);\n        "]);return k=function(){return n},n}function y(){var n=Object(f.a)(["\n        transform: rotate(","deg) scale(1);\n    "]);return y=function(){return n},n}function O(){var n=Object(f.a)(["\n    opacity: .5;\n    display: inline-block;\n    border-radius: 50%;\n    overflow: hidden;\n    ","\n    will-change: opacity, transform;\n    transition: opacity .2s ease-in-out, transform .2s ease-in-out;\n\n    &:hover, &:focus {\n        outline: 0;\n        opacity: .75;\n        ","\n    }\n"]);return O=function(){return n},n}var j=g.b.a(O(),function(n){return Object(g.a)(y(),n.angle)},function(n){return Object(g.a)(k(),n.angle)}),E=function(n){var t=n.distance,e=n.href,r=n.title,a=n.src,o=n.angle;return i.a.createElement(b,{style:{transform:"translate(0, -50%) rotate(".concat(o,"deg)"),width:"".concat(t,"vmin")}},i.a.createElement(j,{href:e,title:r,angle:-o},i.a.createElement(m,{src:a,alt:r})))},z=function(n){return(n<12?30:60)*n},C=function(n){return n<12?n%2===0?46:42:27.5},S=function(n){return n.links.map(function(n,t){return i.a.createElement(E,Object.assign({key:t},n,{angle:z(t),distance:C(t)}))})},T=[{href:"http://fb.me/rightonhana",src:"facebook.svg",title:"Facebook"},{href:"http://twitter.com/rightonhana",src:"twitter.svg",title:"Twitter"},{href:"http://github.com/rightonhana",src:"github.svg",title:"GitHub"},{href:"https://www.linkedin.com/in/rightonhana/",src:"linkedin.svg",title:"LinkedIn"},{href:"https://www.youtube.com/channel/UCN0IR9fhWQrp9gpBLwe4G0w?view_as=subscriber",src:"youtube.svg",title:"YouTube"},{href:"https://www.twitch.tv/rightonhana",src:"twitch.svg",title:"Twitch"},{href:"https://www.snapchat.com/add/rightonhana",src:"snapchat.svg",title:"Snapchat"},{href:"https://bitbucket.org/rightonhana/",src:"bitbucket.svg",title:"BitBucket"},{href:"https://www.instagram.com/rightonhana/",src:"instagram.svg",title:"Instagram"},{href:"https://playoverwatch.com/es-es/career/pc/hana-11360",src:"overwatch.svg",title:"Overwatch"},{href:"https://t.me/rightonhana",src:"telegram.svg",title:"Telegram"},{href:"https://discordapp.com/users/133673024640647168",src:"discord.svg",title:"Discord"},{href:"https://gitlab.com/rightonhana",src:"gitlab.svg",title:"Gitlab"},{href:"skype:live:rightonhana",src:"skype.svg",title:"Skype"},{href:"https://line.me/R/rightonhana",src:"line.svg",title:"Line"},{href:"https://stackoverflow.com/users/6272220/mar%C3%ADa-florencia-gonz%C3%A1lez?tab=profile",src:"stackoverflow.svg",title:"StackOverflow"},{href:"https://soundcloud.com/rightonhana",src:"soundcloud.svg",title:"SoundCloud"},{href:"mailto:rightonhana@gmail.com",src:"gmail.svg",title:"Gmail"}];function W(){var n=Object(f.a)(["\n        width: ","vmin;\n        height: ","vmin;\n    "]);return W=function(){return n},n}function G(){var n=Object(f.a)(["\n    left:50%;\n    opacity: .75;\n    position: absolute;\n    top:50%;\n    transform: translate(-50%, -50%);\n\n    ","\n"]);return G=function(){return n},n}var L=g.b.img(G(),function(n){var t=n.size;return Object(g.a)(W(),t,t)}),A=function(){return i.a.createElement(L,{src:"/roh.svg",size:18,alt:"Florencia Gonzalez"})},B=function(n){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(A,null),i.a.createElement(S,{links:T}))}}]),t}(r.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}o.a.render(i.a.createElement(B,null),document.querySelector("main")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");N?(function(n){fetch(n).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):x(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):x(n)})}}()}},[[16,2,1]]]);
//# sourceMappingURL=main.b888e22a.chunk.js.map