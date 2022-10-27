(()=>{"use strict";var __webpack_modules__={151:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,h_:()=>fasta});var _snippets_wasm_thread_c298f0aa2b1e5b23_src_module_workers_polyfill_min_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(247);let wasm;const cachedTextDecoder=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});cachedTextDecoder.decode();let cachedUint8Memory0=new Uint8Array;function getUint8Memory0(){return cachedUint8Memory0.buffer!==wasm.memory.buffer&&(cachedUint8Memory0=new Uint8Array(wasm.memory.buffer)),cachedUint8Memory0}function getStringFromWasm0(e,t){return cachedTextDecoder.decode(getUint8Memory0().slice(e,e+t))}const heap=new Array(32).fill(void 0);heap.push(void 0,null,!0,!1);let heap_next=heap.length;function addHeapObject(e){heap_next===heap.length&&heap.push(heap.length+1);const t=heap_next;return heap_next=heap[t],heap[t]=e,t}function getObject(e){return heap[e]}function dropObject(e){e<36||(heap[e]=heap_next,heap_next=e)}function takeObject(e){const t=getObject(e);return dropObject(e),t}let WASM_VECTOR_LEN=0;const cachedTextEncoder=new TextEncoder("utf-8"),encodeString=function(e,t){const n=cachedTextEncoder.encode(e);return t.set(n),{read:e.length,written:n.length}};function passStringToWasm0(e,t,n){if(void 0===n){const n=cachedTextEncoder.encode(e),r=t(n.length);return getUint8Memory0().subarray(r,r+n.length).set(n),WASM_VECTOR_LEN=n.length,r}let r=e.length,a=t(r);const o=getUint8Memory0();let s=0;for(;s<r;s++){const t=e.charCodeAt(s);if(t>127)break;o[a+s]=t}if(s!==r){0!==s&&(e=e.slice(s)),a=n(a,r,r=s+3*e.length);const t=getUint8Memory0().subarray(a+s,a+r);s+=encodeString(e,t).written}return WASM_VECTOR_LEN=s,a}function isLikeNone(e){return null==e}let cachedInt32Memory0=new Int32Array;function getInt32Memory0(){return cachedInt32Memory0.buffer!==wasm.memory.buffer&&(cachedInt32Memory0=new Int32Array(wasm.memory.buffer)),cachedInt32Memory0}let cachedFloat64Memory0=new Float64Array;function getFloat64Memory0(){return cachedFloat64Memory0.buffer!==wasm.memory.buffer&&(cachedFloat64Memory0=new Float64Array(wasm.memory.buffer)),cachedFloat64Memory0}function debugString(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=debugString(e[0]));for(let r=1;r<t;r++)n+=", "+debugString(e[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}function makeMutClosure(e,t,n,r){const a={a:e,b:t,cnt:1,dtor:n},o=(...e)=>{a.cnt++;const t=a.a;a.a=0;try{return r(t,a.b,...e)}finally{0==--a.cnt?wasm.__wbindgen_export_3.get(a.dtor)(t,a.b):a.a=t}};return o.original=a,o}let stack_pointer=32;function addBorrowedObject(e){if(1==stack_pointer)throw new Error("out of js stack");return heap[--stack_pointer]=e,stack_pointer}function __wbg_adapter_20(e,t,n){try{wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha7e32a73fee1a96b(e,t,addBorrowedObject(n))}finally{heap[stack_pointer++]=void 0}}function fasta(){wasm.fasta()}function wasm_thread_entry_point(e){wasm.wasm_thread_entry_point(e)}function handleError(e,t){try{return e.apply(this,t)}catch(e){wasm.__wbindgen_exn_store(addHeapObject(e))}}async function load(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function getImports(){const imports={wbg:{}};return imports.wbg.__wbindgen_string_new=function(e,t){return addHeapObject(getStringFromWasm0(e,t))},imports.wbg.__wbindgen_object_drop_ref=function(e){takeObject(e)},imports.wbg.__wbindgen_string_get=function(e,t){const n=getObject(t),r="string"==typeof n?n:void 0;var a=isLikeNone(r)?0:passStringToWasm0(r,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),o=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=o,getInt32Memory0()[e/4+0]=a},imports.wbg.__wbindgen_number_new=function(e){return addHeapObject(e)},imports.wbg.__wbindgen_number_get=function(e,t){const n=getObject(t),r="number"==typeof n?n:void 0;getFloat64Memory0()[e/8+1]=isLikeNone(r)?0:r,getInt32Memory0()[e/4+0]=!isLikeNone(r)},imports.wbg.__wbg_log_4b5638ad60bdc54a=function(e){console.log(getObject(e))},imports.wbg.__wbg_size_ae40c61308e3b3f4=function(e){return getObject(e).size},imports.wbg.__wbg_newwithstrsequence_804bd552112d9f6b=function(){return handleError((function(e){return addHeapObject(new Blob(getObject(e)))}),arguments)},imports.wbg.__wbg_slice_ebf4d46271bae896=function(){return handleError((function(e,t,n,r,a){return addHeapObject(getObject(e).slice(t,n,getStringFromWasm0(r,a)))}),arguments)},imports.wbg.__wbg_createObjectURL_8e3f999d8bc1855f=function(){return handleError((function(e,t){const n=passStringToWasm0(URL.createObjectURL(getObject(t)),wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},imports.wbg.__wbg_data_7b1f01f4e6a64fbe=function(e){return addHeapObject(getObject(e).data)},imports.wbg.__wbg_setonmessage_a31c8547d106bb01=function(e,t){getObject(e).onmessage=getObject(t)},imports.wbg.__wbg_newwithoptions_d88e7f9faffd1800=function(){return handleError((function(e,t,n){return addHeapObject(new Worker(getStringFromWasm0(e,t),getObject(n)))}),arguments)},imports.wbg.__wbg_postMessage_8a8f33d997e17e7b=function(){return handleError((function(e,t){getObject(e).postMessage(getObject(t))}),arguments)},imports.wbg.__wbg_instanceof_DedicatedWorkerGlobalScope_841b8cce4e66dc7c=function(e){let t;try{t=getObject(e)instanceof DedicatedWorkerGlobalScope}catch{t=!1}return t},imports.wbg.__wbg_postMessage_ef1cef7e229c46d7=function(){return handleError((function(e,t){getObject(e).postMessage(getObject(t))}),arguments)},imports.wbg.__wbg_new_1d9a920c6bfc44a8=function(){return addHeapObject(new Array)},imports.wbg.__wbg_new_0b9bfdd97583284e=function(){return addHeapObject(new Object)},imports.wbg.__wbg_eval_6dc8993472839847=function(){return handleError((function(arg0,arg1){const ret=eval(getStringFromWasm0(arg0,arg1));return addHeapObject(ret)}),arguments)},imports.wbg.__wbg_set_a68214f35c417fa9=function(e,t,n){getObject(e)[t>>>0]=takeObject(n)},imports.wbg.__wbg_push_740e4b286702d964=function(e,t){return getObject(e).push(getObject(t))},imports.wbg.__wbg_set_bf3f89b92d5a34bf=function(){return handleError((function(e,t,n){return Reflect.set(getObject(e),getObject(t),getObject(n))}),arguments)},imports.wbg.__wbindgen_debug_string=function(e,t){const n=passStringToWasm0(debugString(getObject(t)),wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n},imports.wbg.__wbindgen_throw=function(e,t){throw new Error(getStringFromWasm0(e,t))},imports.wbg.__wbindgen_module=function(){return addHeapObject(init.__wbindgen_wasm_module)},imports.wbg.__wbindgen_memory=function(){return addHeapObject(wasm.memory)},imports.wbg.__wbindgen_closure_wrapper113=function(e,t,n){return addHeapObject(makeMutClosure(e,t,45,__wbg_adapter_20))},imports["./snippets/wasm_thread-c298f0aa2b1e5b23/src/module_workers_polyfill.min.js"]=_snippets_wasm_thread_c298f0aa2b1e5b23_src_module_workers_polyfill_min_js__WEBPACK_IMPORTED_MODULE_0__,imports}function initMemory(e,t){e.wbg.memory=t||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function finalizeInit(e,t){return wasm=e.exports,init.__wbindgen_wasm_module=t,cachedFloat64Memory0=new Float64Array,cachedInt32Memory0=new Int32Array,cachedUint8Memory0=new Uint8Array,wasm.__wbindgen_start(),wasm}function initSync(e,t){const n=getImports();return initMemory(n,t),e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),finalizeInit(new WebAssembly.Instance(e,n),e)}async function init(e,t){void 0===e&&(e=new URL(__webpack_require__(503),__webpack_require__.b));const n=getImports();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),initMemory(n,t);const{instance:r,module:a}=await load(await e,n);return finalizeInit(r,a)}const __WEBPACK_DEFAULT_EXPORT__=init},247:(e,t,n)=>{function r(){if(!0!==Worker._$P){let e=new Blob(['!function(e){if(!e||!0!==e._$P){if(e){var n,r=Object.defineProperty({},"type",{get:function(){n=!0}});try{var t=URL.createObjectURL(new Blob([""],{type:"text/javascript"}));new e(t,r).terminate(),URL.revokeObjectURL(t)}catch(e){}if(!n)try{new e("data:text/javascript,",r).terminate()}catch(e){}if(n)return;(self.Worker=function(n,r){return r&&"module"==r.type&&(r={name:n+"\\n"+(r.name||"")},n="undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||(new Error).stack.match(/[(@]((file|https?):\\/\\/[^)]+?):\\d+(:\\d+)?(?:\\)|$)/m)[1]),new e(n,r)})._$P=!0}"undefined"==typeof document&&function(){var e={},n={};function r(e,n){for(n=n.replace(/^(\\.\\.\\/|\\.\\/)/,e.replace(/[^/]+$/g,"")+"$1");n!==(n=n.replace(/[^/]+\\/\\.\\.\\//g,"")););return n.replace(/\\.\\//g,"")}var t=[],s=t.push.bind(t);addEventListener("message",s);var a=self.name.match(/^[^\\n]+/)[0];self.name=self.name.replace(/^[^\\n]*\\n/g,""),function t(s,a){var u,o=s;return a&&(s=r(a,s)),e[s]||(e[s]=fetch(s).then((function(a){if((o=a.url)!==s){if(null!=e[o])return e[o];e[o]=e[s]}return a.text().then((function(e){if(!a.ok)throw e;var c={exports:{}};u=n[o]||(n[o]=c.exports);var i=function(e){return t(e,o)},f=[];return e=function(e,n){n=n||[];var r,t=[],a=0;function u(e,n){for(var s,a=/(?:^|,)\\s*([\\w$]+)(?:\\s+as\\s+([\\w$]+))?\\s*/g,u=[];s=a.exec(e);)n?t.push((s[2]||s[1])+":"+s[1]):u.push((s[2]||s[1])+"="+r+"."+s[1]);return u}return(e=e.replace(/(^\\s*|[;}\\s\\n]\\s*)import\\s*(?:(?:([\\w$]+)(?:\\s*\\,\\s*\\{([^}]+)\\})?|(?:\\*\\s*as\\s+([\\w$]+))|\\{([^}]*)\\})\\s*from)?\\s*([\'"])(.+?)\\6/g,(function(e,t,s,o,c,i,f,p){return n.push(p),t+="var "+(r="$im$"+ ++a)+"=$require("+f+p+f+")",s&&(t+=";var "+s+" = \'default\' in "+r+" ? "+r+".default : "+r),c&&(t+=";var "+c+" = "+r),(o=o||i)&&(t+=";var "+u(o,!1)),t})).replace(/((?:^|[;}\\s\\n])\\s*)export\\s*(?:\\s+(default)\\s+|((?:async\\s+)?function\\s*\\*?|class|const\\s|let\\s|var\\s)\\s*([a-zA-Z0-9$_{[]+))/g,(function(e,n,r,s,u){if(r){var o="$im$"+ ++a;return t.push("default:"+o),n+"var "+o+"="}return t.push(u+":"+u),n+s+" "+u})).replace(/((?:^|[;}\\s\\n])\\s*)export\\s*\\{([^}]+)\\}\\s*;?/g,(function(e,n,r){return u(r,!0),n})).replace(/((?:^|[^a-zA-Z0-9$_@`\'".])\\s*)(import\\s*\\([\\s\\S]+?\\))/g,"$1$$$2")).replace(/((?:^|[^a-zA-Z0-9$_@`\'".])\\s*)import\\.meta\\.url/g,"$1"+JSON.stringify(s))+"\\n$module.exports={"+t.join(",")+"}"}(e,f),Promise.all(f.map((function(e){var s=r(o,e);return s in n?n[s]:t(s)}))).then((function(n){e+="\\n//# sourceURL="+s;try{var r=new Function("$import","$require","$module","$exports",e)}catch(n){var t=n.line-1,a=n.column,o=e.split("\\n"),p=(o[t-2]||"")+"\\n"+o[t-1]+"\\n"+(null==a?"":new Array(a).join("-")+"^\\n")+(o[t]||""),l=new Error(n.message+"\\n\\n"+p,s,t);throw l.sourceURL=l.fileName=s,l.line=t,l.column=a,l}var m=r(i,(function(e){return n[f.indexOf(e)]}),c,c.exports);return null!=m&&(c.exports=m),Object.assign(u,c.exports),c.exports}))}))})))}(a).then((function(){removeEventListener("message",s),t.map(dispatchEvent)})).catch((function(e){setTimeout((function(){throw e}))}))}()}}(self.Worker);'],{type:"text/javascript"}),t=URL.createObjectURL(e);!function(e){if(!e||!0!==e._$P){if(e){var n,r=Object.defineProperty({},"type",{get:function(){n=!0}});try{var a=URL.createObjectURL(new Blob([""],{type:"text/javascript"}));new e(a,r).terminate(),URL.revokeObjectURL(a)}catch(e){}if(!n)try{new e("data:text/javascript,",r).terminate()}catch(e){}if(n)return;(self.Worker=function(n,r){return r&&"module"==r.type&&(r={name:n+"\n"+(r.name||"")},n=t),new e(n,r)})._$P=!0}"undefined"==typeof document&&function(){var e={},t={};function n(e,t){for(t=t.replace(/^(\.\.\/|\.\/)/,e.replace(/[^/]+$/g,"")+"$1");t!==(t=t.replace(/[^/]+\/\.\.\//g,"")););return t.replace(/\.\//g,"")}var r=[],a=r.push.bind(r);addEventListener("message",a);var o=self.name.match(/^[^\n]+/)[0];self.name=self.name.replace(/^[^\n]*\n/g,""),function r(a,o){var s,c=a;return o&&(a=n(o,a)),e[a]||(e[a]=fetch(a).then((function(o){if((c=o.url)!==a){if(null!=e[c])return e[c];e[c]=e[a]}return o.text().then((function(e){if(!o.ok)throw e;var i={exports:{}};s=t[c]||(t[c]=i.exports);var u=function(e){return r(e,c)},_=[];return e=function(e,t){t=t||[];var n,r=[],o=0;function s(e,t){for(var a,o=/(?:^|,)\s*([\w$]+)(?:\s+as\s+([\w$]+))?\s*/g,s=[];a=o.exec(e);)t?r.push((a[2]||a[1])+":"+a[1]):s.push((a[2]||a[1])+"="+n+"."+a[1]);return s}return(e=e.replace(/(^\s*|[;}\s\n]\s*)import\s*(?:(?:([\w$]+)(?:\s*\,\s*\{([^}]+)\})?|(?:\*\s*as\s+([\w$]+))|\{([^}]*)\})\s*from)?\s*(['"])(.+?)\6/g,(function(e,r,a,c,i,u,_,l){return t.push(l),r+="var "+(n="$im$"+ ++o)+"=$require("+_+l+_+")",a&&(r+=";var "+a+" = 'default' in "+n+" ? "+n+".default : "+n),i&&(r+=";var "+i+" = "+n),(c=c||u)&&(r+=";var "+s(c,!1)),r})).replace(/((?:^|[;}\s\n])\s*)export\s*(?:\s+(default)\s+|((?:async\s+)?function\s*\*?|class|const\s|let\s|var\s)\s*([a-zA-Z0-9$_{[]+))/g,(function(e,t,n,a,s){if(n){var c="$im$"+ ++o;return r.push("default:"+c),t+"var "+c+"="}return r.push(s+":"+s),t+a+" "+s})).replace(/((?:^|[;}\s\n])\s*)export\s*\{([^}]+)\}\s*;?/g,(function(e,t,n){return s(n,!0),t})).replace(/((?:^|[^a-zA-Z0-9$_@`'".])\s*)(import\s*\([\s\S]+?\))/g,"$1$$$2")).replace(/((?:^|[^a-zA-Z0-9$_@`'".])\s*)import\.meta\.url/g,"$1"+JSON.stringify(a))+"\n$module.exports={"+r.join(",")+"}"}(e,_),Promise.all(_.map((function(e){var a=n(c,e);return a in t?t[a]:r(a)}))).then((function(t){e+="\n//# sourceURL="+a;try{var n=new Function("$import","$require","$module","$exports",e)}catch(t){var r=t.line-1,o=t.column,c=e.split("\n"),l=(c[r-2]||"")+"\n"+c[r-1]+"\n"+(null==o?"":new Array(o).join("-")+"^\n")+(c[r]||""),f=new Error(t.message+"\n\n"+l,a,r);throw f.sourceURL=f.fileName=a,f.line=r,f.column=o,f}var p=n(u,(function(e){return t[_.indexOf(e)]}),i,i.exports);return null!=p&&(i.exports=p),Object.assign(s,i.exports),i.exports}))}))})))}(o).then((function(){removeEventListener("message",a),r.map(dispatchEvent)})).catch((function(e){setTimeout((function(){throw e}))}))}()}}(self.Worker)}}n.r(t),n.d(t,{load_module_workers_polyfill:()=>r})},503:(e,t,n)=>{e.exports=n.p+"ba5e13cc8fe0ccf5df41.wasm"}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),__webpack_require__.b=self.location+"";var __webpack_exports__={};(()=>{const e=Symbol("Comlink.proxy"),t=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,o=new Map([["proxy",{canHandle:t=>a(t)&&t[e],serialize(e){const{port1:t,port2:n}=new MessageChannel;return s(e,t),[n,[n]]},deserialize:e=>(e.start(),u(e,[],undefined))}],["throw",{canHandle:e=>a(e)&&r in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function s(e,t=self){t.addEventListener("message",(function n(a){if(!a||!a.data)return;const{id:o,type:i,path:u}=Object.assign({path:[]},a.data),_=(a.data.argumentList||[]).map(m);let b;try{const t=u.slice(0,-1).reduce(((e,t)=>e[t]),e),n=u.reduce(((e,t)=>e[t]),e);switch(i){case"GET":b=n;break;case"SET":t[u.slice(-1)[0]]=m(a.data.value),b=!0;break;case"APPLY":b=n.apply(t,_);break;case"CONSTRUCT":b=f(new n(..._));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;s(e,n),b=function(e,t){return l.set(e,t),e}(t,[t])}break;case"RELEASE":b=void 0;break;default:return}}catch(e){b={value:e,[r]:0}}Promise.resolve(b).catch((e=>({value:e,[r]:0}))).then((e=>{const[r,a]=p(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),a),"RELEASE"===i&&(t.removeEventListener("message",n),c(t))}))})),t.start&&t.start()}function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function i(e){if(e)throw new Error("Proxy has been released and is not useable")}function u(e,r=[],a=function(){}){let o=!1;const s=new Proxy(a,{get(t,a){if(i(o),a===n)return()=>b(e,{type:"RELEASE",path:r.map((e=>e.toString()))}).then((()=>{c(e),o=!0}));if("then"===a){if(0===r.length)return{then:()=>s};const t=b(e,{type:"GET",path:r.map((e=>e.toString()))}).then(m);return t.then.bind(t)}return u(e,[...r,a])},set(t,n,a){i(o);const[s,c]=p(a);return b(e,{type:"SET",path:[...r,n].map((e=>e.toString())),value:s},c).then(m)},apply(n,a,s){i(o);const c=r[r.length-1];if(c===t)return b(e,{type:"ENDPOINT"}).then(m);if("bind"===c)return u(e,r.slice(0,-1));const[l,f]=_(s);return b(e,{type:"APPLY",path:r.map((e=>e.toString())),argumentList:l},f).then(m)},construct(t,n){i(o);const[a,s]=_(n);return b(e,{type:"CONSTRUCT",path:r.map((e=>e.toString())),argumentList:a},s).then(m)}});return s}function _(e){const t=e.map(p);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const l=new WeakMap;function f(t){return Object.assign(t,{[e]:!0})}function p(e){for(const[t,n]of o)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},l.get(e)||[]]}function m(e){switch(e.type){case"HANDLER":return o.get(e.name).deserialize(e.value);case"RAW":return e.value}}function b(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}var d=__webpack_require__(151);s({handler:async function(){let e=await Promise.all([(async()=>(await(0,d.ZP)(),(0,d.h_)(),await async function({uri:e="http://localhost:8000",log:t=""}){const n=new URL(e),r=new AbortController,a=setTimeout((()=>r.abort()),1e4),o={method:"POST",signal:r.signal,body:JSON.stringify(t)};try{const e=await fetch(n,o);clearTimeout(a),console.log("Status: "+e.status+"\nLog: "+t)}catch(e){console.log(e)}}({log:"*DONE*"}),e))()]);return f({multiThread:e})}()})})()})();