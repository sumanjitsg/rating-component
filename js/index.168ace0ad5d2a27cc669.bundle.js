(()=>{"use strict";var e,t={836:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},578:(e,t,r)=>{var n=r(836),o=r.n(n),a=new URL(r(163),r.b),i=new URL(r(875),r.b),s=new URL(r(503),r.b);function c(e,t,r){const n=e.querySelector(t);if(!(n instanceof r))throw new Error(`Element ${n} matched with ${t} is not an ${r}.`);return n}o()(a),o()(i),o()(s),c(document,"[data-rating-form]",HTMLFormElement).addEventListener("submit",(function(e){if(!(e.currentTarget instanceof HTMLFormElement))throw new Error("current target not form element!");e.preventDefault();const t=new FormData(e.currentTarget).get("rating"),r=c(document,"[data-content-container]",HTMLElement),n=c(document,"[data-thankyou-template]",HTMLTemplateElement),o=c(n.content,"[data-selected-rating-text]",HTMLElement);o.append(`You selected ${t} out of 5`),o.classList.remove("hidden"),r.replaceChildren(n.content.firstElementChild.cloneNode(!0))}))},163:(e,t,r)=>{e.exports=r.p+"assets/favicon-32x32.736eae1ff09acfe04c50.png"},875:(e,t,r)=>{e.exports=r.p+"assets/icon-star.12766a8d207af861a70f.svg"},503:(e,t,r)=>{e.exports=r.p+"assets/illustration-thank-you.d74a66b551b99ae110b5.svg"}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{n.b=document.baseURI||self.location.href;var e={826:0,532:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,c]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[532],(()=>n(578)));o=n.O(o)})();