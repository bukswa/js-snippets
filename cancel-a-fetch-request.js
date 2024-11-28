const controller = new AbortController();
const signal = controller.signal;

const fetchData = async () => {
  const response = await fetch("url", { signal: signal });

  const result = await response.json();
};

setTimeout(() => {
  controller.abort();
}, 1000);
