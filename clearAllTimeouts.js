(function () {
  globalThis.timeoutIds = [];

  const originalSetTimeoutFn = globalThis.setTimeout;

  globalThis.setTimeout = (fn, delay) => {
    const id = originalSetTimeoutFn(fn, delay);

    timeoutIds.push(id);

    return id;
  };

  globalThis.clearAllTimeouts = () => {
    while (timeoutIds.length) {
      clearTimeout(timeoutIds.pop());
    }
  };

  setTimeout(() => {
    console.log("1");
  }, 1000);

  setTimeout(() => {
    console.log("2");
    clearAllTimeouts();
  }, 2000);

  setTimeout(() => {
    console.log("3");
  }, 3000);
  setTimeout(() => {
    console.log("4");
  }, 4000);
})();
