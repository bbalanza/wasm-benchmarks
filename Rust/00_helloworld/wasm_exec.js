import init, { helloworld } from "./pkg/helloworld.js"
import {stopRun} from "../../utils/utils.js"
(async function main() {
    await init()
    helloworld()
    await stopRun({log: "*DONE*"})
})();
