import { stopRun } from "../../utils/utils.js"
import "./pkg/glue.js"
(async function main() {
    const go = new Go();
    const wasm = await WebAssembly.instantiateStreaming(fetch("../pkg/out.wasm"), go.importObject)
    await go.run(wasm.instance);
    await stopRun({})
})();
