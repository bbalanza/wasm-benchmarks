"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[567],{567:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h,initSync:()=>p,initThreadPool:()=>_,spectralnorm:()=>b,wbg_rayon_PoolBuilder:()=>f,wbg_rayon_start_worker:()=>w});var r=t(363);let o;const i=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let s=new Uint8Array;const a=new Array(32).fill(void 0);a.push(void 0,null,!0,!1);let c=a.length;function u(e){c===a.length&&a.push(a.length+1);const n=c;return c=a[n],a[n]=e,n}function b(){o.spectralnorm()}function l(e){const n=function(e){return a[e]}(e);return function(e){e<36||(a[e]=c,c=e)}(e),n}function _(e){return l(o.initThreadPool(e))}function w(e){o.wbg_rayon_start_worker(e)}class f{static __wrap(e){const n=Object.create(f.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}function y(){const e={wbg:{}};return e.wbg.__wbindgen_throw=function(e,n){throw new Error((t=e,r=n,i.decode((s.buffer!==o.memory.buffer&&(s=new Uint8Array(o.memory.buffer)),s).slice(t,t+r))));var t,r},e.wbg.__wbindgen_module=function(){return u(g.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return u(o.memory)},e.wbg.__wbg_startWorkers_6fd3af285ea11136=function(e,n,t){return u((0,r.Q)(l(e),l(n),f.__wrap(t)))},e}function m(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function d(e,n){return o=e.exports,g.__wbindgen_wasm_module=n,s=new Uint8Array,o.__wbindgen_start(),o}function p(e,n){const t=y();return m(t,n),e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),d(new WebAssembly.Instance(e,t),e)}async function g(e,n){void 0===e&&(e=new URL(t(686),t.b));const r=y();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),m(r,n);const{instance:o,module:i}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,r);return d(o,i)}const h=g},686:(e,n,t)=>{e.exports=t.p+"7c64107fc51249e2afdb.wasm"}}]);