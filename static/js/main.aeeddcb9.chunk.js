(this.webpackJsonpverkkokauppa=this.webpackJsonpverkkokauppa||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":0,"text":"Raktori 1","value":15000,"maara":0},{"id":1,"text":"Raktori 2","value":17500,"maara":0},{"id":2,"text":"Raktori 3","value":20000,"maara":0}]')},25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),i=(a(30),a(6)),c=(a(31),a(10));var u=function(e){var t=e.LisaaKoriin,a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],u=(l[1],function(e){o.push({id:c[e].id,text:c[e].text,value:c[e].value}),t(o)}),s=c.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"lisaa1",onClick:function(){return u(e.id)}},e.text),r.a.createElement("td",{className:"lisaa1",onClick:function(){return u(e.id)}},e.value),r.a.createElement("td",{className:"lisaa2",onClick:function(){return u(e.id)}}," ostoskoriin"))}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Hoikan maansiirto verkkokauppa"),r.a.createElement("table",{className:"Taulukko"},r.a.createElement("th",null,"Tuote"),r.a.createElement("th",null,"Hinta"),s))},s=a(53),m=a(20),k=a.n(m);var v=function(e){var t=e.ostoskori,a=e.JatkaOstoksia,l=e.TyhjennaKori,o=Object(n.useState)(0),c=Object(i.a)(o,2),u=c[0],m=c[1];Object(n.useEffect)((function(){d()}),[]);var v=t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.text),r.a.createElement("td",null,e.value),r.a.createElement("td",null,r.a.createElement(k.a,{fontSize:"small",name:t,onClick:function(){return E(t)}})))})),E=function(e){t.splice(e,1),d(),0===t.length&&l()},d=function(){for(var e=0,a=0;a<t.length;a++)e+=t[a].value;m(e)};return r.a.createElement("div",null,r.a.createElement("h3",null,"Ostoskorisi sis\xe4lt\xf6:"),r.a.createElement("table",{className:"Taulukko"},v),r.a.createElement("br",null),"Tilauksen kokonaisarvo: ",u," \u20ac",r.a.createElement("br",null),r.a.createElement(s.a,{variant:"outlined",color:"primary",onClick:function(){a(t)}},"Jatka ostoksia"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,{variant:"outlined",color:"primary",onClick:function(){m(0),l(0)}},"Tyhjenn\xe4 ostoskori"))};var E=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(0),c=Object(i.a)(o,2),s=c[0],m=c[1],k=Object(n.useState)(0),E=Object(i.a)(k,2),d=E[0],f=E[1],p=Object(n.useState)([]),b=Object(i.a)(p,2),O=b[0],h=b[1];return 0===d?r.a.createElement("div",null,r.a.createElement("div",{className:"Ostoskori"},"Ostoskori: ",s," tuotetta",r.a.createElement("div",{className:"Ostoskori2",onClick:function(){0!==a&&h(O.concat(a)),f(1)}},"N\xe4yt\xe4 ostoskori")),r.a.createElement(u,{LisaaKoriin:function(e){m(s+1),l(e)}})):r.a.createElement("div",null,r.a.createElement(v,{ostoskori:O,JatkaOstoksia:function(e){m(e.length),f(0)},TyhjennaKori:function(e){m(e),l(0),h([])}}))};var d=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1];return 0===a?r.a.createElement("div",{className:"Kauppaan"},"Astu sis\xe4\xe4n Hoikan maansiirto Oyn verkkokauppaan. ",r.a.createElement("br",null),r.a.createElement(s.a,{variant:"outlined",color:"primary",onClick:function(){l(1)}},"Kauppaan")):r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.aeeddcb9.chunk.js.map