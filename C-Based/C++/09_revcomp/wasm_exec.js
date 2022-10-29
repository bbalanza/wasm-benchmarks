import {stopRun} from "../../../utils/utils.js"
import wasm from "./pkg/emscripten.js"
(async function main() {
    const wasm_module = await wasm();
    wasm_module.__Z3runv()
    await stopRun({})
})();
