import * as Comlink from 'comlink';

async function initHandler() {
  let multiThread = await Promise.all([
    (async () => {
      const multiThread = await import(
        './pkg-parallel/mandelbrot.js'
      );
      await multiThread.default();
      await multiThread.initThreadPool(navigator.hardwareConcurrency);
      await multiThread.mandelbrot();
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