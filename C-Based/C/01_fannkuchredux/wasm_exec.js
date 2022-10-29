import {stopRun} from "../../../utils/utils.js"
import wasm from "./pkg/emscripten.js"
(async function main() {
    const wasm_module = await wasm();
    await wasm_module._run()
    await stopRun({log: "*DONE*"})
})();
