import init, { helloworld } from "./pkg/helloworld.js"
import {stopRun} from "../../utils/utils.js"
(async function main() {
    await init()
    await helloworld()
    await stopRun({log: "*DONE*"})
})();
