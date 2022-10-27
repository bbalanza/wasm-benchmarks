/*! For license information please see 16.wasm_exec.js.LICENSE.txt */
(()=>{var e={16:(e,t,r)=>{"use strict";var a={},o="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node;if(o){var n=r(787),i=n.parentPort;i.on("message",(e=>onmessage({data:e})));var s=r(679);Object.assign(r.g,{self:r.g,require:r(805),Module:a,location:{href:"/index.js"},Worker:n.Worker,importScripts:function(e){(0,eval)(s.readFileSync(e,"utf8"))},postMessage:function(e){i.postMessage(e)},performance:r.g.performance||{now:function(){return Date.now()}}})}var c=!1,d=[],l=function(){var e=Array.prototype.slice.call(arguments).join(" ");o?s.writeSync(2,e+"\n"):console.error(e)};self.alert=function(){var e=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:e,threadId:a._pthread_self()})},a.instantiateWasm=(e,t)=>{var r=new WebAssembly.Instance(a.wasmModule,e);return t(r),a.wasmModule=null,r.exports},self.onunhandledrejection=e=>{throw e.reason??e},self.onmessage=e=>{try{if("load"===e.data.cmd)a.wasmModule=e.data.wasmModule,a.wasmMemory=e.data.wasmMemory,a.buffer=a.wasmMemory.buffer,a.ENVIRONMENT_IS_PTHREAD=!0,(e.data.urlOrBlob?r(719)(e.data.urlOrBlob):Promise.all([r.e(520),r.e(566)]).then(r.bind(r,566))).then((function(e){return e.default(a)})).then((function(e){a=e}));else if("run"===e.data.cmd){a.__performance_now_clock_drift=performance.now()-e.data.time,a.__emscripten_thread_init(e.data.pthread_ptr,0,0,1),e.data.pthread_ptr||abort("Assertion failed: "+undefined),a.establishStackSpace(),a.PThread.receiveObjectTransfer(e.data),a.PThread.threadInitTLS(),c||(d.forEach((e=>{a.executeNotifiedProxyingQueue(e)})),d=[],c=!0);try{a.invokeEntryPoint(e.data.start_routine,e.data.arg)}catch(e){if("unwind"!=e){if(!(e instanceof a.ExitStatus))throw e;a.keepRuntimeAlive()?l("Pthread 0x"+a._pthread_self().toString(16)+" called exit(), staying alive due to noExitRuntime."):(l("Pthread 0x"+a._pthread_self().toString(16)+" called exit(), calling _emscripten_thread_exit."),a.__emscripten_thread_exit(e.status))}else l("Pthread 0x"+a._pthread_self().toString(16)+" completed its main entry point with an `unwind`, keeping the worker alive for asynchronous operation.")}}else"cancel"===e.data.cmd?a._pthread_self()&&a.__emscripten_thread_exit(-1):"setimmediate"===e.data.target||("processProxyingQueue"===e.data.cmd?c?a.executeNotifiedProxyingQueue(e.data.queue):d.push(e.data.queue):e.data.cmd&&(l("worker.js received unknown command "+e.data.cmd),l(e.data)))}catch(e){throw l("worker.js onmessage() captured an uncaught exception: "+e),e&&e.stack&&l(e.stack),a.__emscripten_thread_crashed&&a.__emscripten_thread_crashed(),e}}},719:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=719,e.exports=t},805:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=805,e.exports=t},679:()=>{},787:()=>{}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.m=e,r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[])),r.u=e=>e+".wasm_exec.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=self.location+"";var e={16:1};r.f.i=(t,a)=>{e[t]||importScripts(r.p+r.u(t))};var t=self.webpackChunk=self.webpackChunk||[],a=t.push.bind(t);t.push=t=>{var[o,n,i]=t;for(var s in n)r.o(n,s)&&(r.m[s]=n[s]);for(i&&i(r);o.length;)e[o.pop()]=1;a(t)}})(),r(16)})();