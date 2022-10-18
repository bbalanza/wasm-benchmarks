import * as Comlink from 'comlink';

async function initHandler() {
  let multiThread = await Promise.all([
    (async () => {
      const multiThread = await import(
        './pkg-parallel/spectralnorm.js'
      );
      await multiThread.default();
      await multiThread.initThreadPool(navigator.hardwareConcurrency);
      await multiThread.spectralnorm();
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