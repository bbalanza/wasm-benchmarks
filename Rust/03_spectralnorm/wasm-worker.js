import * as Comlink from 'comlink';
import { stopRun } from "../../utils/utils.js";

async function initHandler() {
  let multiThread = await Promise.all([
    (async () => {
      const multiThread = await import(
        './pkg-parallel/spectralnorm.js'
      );
      await multiThread.default();
      await multiThread.initThreadPool(navigator.hardwareConcurrency);
      await multiThread.spectralnorm();
      await stopRun({log: "*DONE*"})
      return multiThread;
    })()
  ]);

  return Comlink.proxy({
    multiThread
  });
}

Comlink.expose({
  handler: initHandler()
});