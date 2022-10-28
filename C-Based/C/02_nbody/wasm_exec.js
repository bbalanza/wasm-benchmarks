import {stopRun} from "../../../utils/utils.js"
// import wasm from "./pkg/emscripten.js"
(async function main() {
    // const wasm_module = await wasm();
    // wasm_module._run()
    await new Promise(resolve => setTimeout(resolve, 5000));
    await stopRun({})
})();
