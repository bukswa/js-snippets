(() => {
  const timers = [];

  const timeoutOriginalFunction = globalThis.setTimeout;

  globalThis.setTimeout = (func, timer) => {
    const id = timeoutOriginalFunction(func, timer);

    timers.push(id);

    return id;
  };

  function clearAllTimeouts() {
    while (timers.length) {
      clearTimeout(timers.pop());
    }
  }

  setTimeout(() => {
    console.log("1");
  }, 1000);

  setTimeout(() => {
    console.log("2");
  }, 2000);

  setTimeout(() => {
    clearAllTimeouts();

    console.log("3");
  }, 3000);
  setTimeout(() => {
    console.log("4");
  }, 4000);
})();
