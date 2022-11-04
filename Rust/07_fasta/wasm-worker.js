import * as Comlink from 'comlink';
import { stopRun } from "../../utils/utils.js";
import init, {fasta} from "./pkg/fasta.js";

async function initHandler() {
  let multiThread = await Promise.all([
    (async () => { 
      await init();
      await fasta();
      await stopRun({log: "*DONE*"})
      return multiThread
    })()
  ]);

  return Comlink.proxy({
    multiThread
  });
}

Comlink.expose({
  handler: initHandler()
});