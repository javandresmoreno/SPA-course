!function(n){var e={};function r(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)r.d(t,a,function(e){return n[e]}.bind(null,a));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(n,e,r){"use strict";r.r(e);var t=()=>'\n  <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/">\n            100tifi.co\n          </a>\n        </h1>\n      </div>\n      <div class="Header-nav">\n        <a href="#/about/">\n          About\n        </a>\n      </div>\n    </div>\n  ';var a=()=>'\n    <div class="Error404">\n      <h2>Error 404. Hmm no encontramos lo que buscabas.</h2>\n    </div>\n  ';var i=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var o=n=>{if(n.lenght<=3){return"/"===n?n:"/:id"}return n};const c={"/":()=>'\n  <div class="Characters">\n    <article class="Character-item">\n      <a href="#/1/">\n        <img src="image" alt="name"/>\n        <h2>Name</h2>\n      </a>\n    </article>\n  </div>\n  ',"/:id":()=>'\n  <div class="Characters-inner">\n    <article class="Characters-card">\n      <img src="image" alt="name"/>\n      <h2>Name</h2>\n    </article>\n    <article class="Characters-card">\n      <h3>Episodios:</h3>\n      <h3>Estado:</h3>\n      <h3>Especie:</h3>\n      <h3>Género:</h3>\n      <h3>Origen:</h3>\n      <h3>Última ubicación:</h3>\n    </article>\n  </div>\n  ',"/contact":"Contact"};var s=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await t();let r=i(),s=await o(r),l=c[s]?c[s]:a;e.innerHTML=await l()};window.addEventListener("load",s),window.addEventListener("hashchange",s)}]);