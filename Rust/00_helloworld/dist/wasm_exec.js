(()=>{"use strict";var t={890:(t,n,e)=>{t.exports=e.p+"e73af8c0d4c688ab4417.wasm"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,(()=>{let t;const n=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});n.decode();let o=new Uint8Array;function r(e,r){return n.decode((0===o.byteLength&&(o=new Uint8Array(t.memory.buffer)),o).subarray(e,e+r))}const i=new Array(32).fill(void 0);i.push(void 0,null,!0,!1);let a=i.length;function s(t){return i[t]}function c(){const t={wbg:{}};return t.wbg.__wbindgen_string_new=function(t,n){return function(t){a===i.length&&i.push(i.length+1);const n=a;return a=i[n],i[n]=t,n}(r(t,n))},t.wbg.__wbindgen_object_drop_ref=function(t){!function(t){const n=s(t);(function(t){t<36||(i[t]=a,a=t)})(t)}(t)},t.wbg.__wbg_log_4b5638ad60bdc54a=function(t){console.log(s(t))},t.wbg.__wbindgen_throw=function(t,n){throw new Error(r(t,n))},t}async function u(n){void 0===n&&(n=new URL(e(890),e.b));const r=c();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await async function(t,n){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(t,n)}catch(n){if("application/wasm"==t.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const e=await t.arrayBuffer();return await WebAssembly.instantiate(e,n)}{const e=await WebAssembly.instantiate(t,n);return e instanceof WebAssembly.Instance?{instance:e,module:t}:e}}(await n,r);return function(n,e){return t=n.exports,u.__wbindgen_wasm_module=e,o=new Uint8Array,t}(i,a)}const l=u;!async function(){await l(),t.helloworld(),await async function({uri:t="http://localhost:8000",log:n=""}){const e=new URL(t),o=new AbortController,r=setTimeout((()=>o.abort()),1e4),i={method:"POST",signal:o.signal,body:JSON.stringify(n)};try{const t=await fetch(e,i);clearTimeout(r),console.log("Status: "+t.status+"\nLog: "+n)}catch(t){console.log(t)}}({log:"*DONE*"})}()})()})();