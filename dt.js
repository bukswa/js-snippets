function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
}

const debouncedOnchange = debounce(onChange, 2000);

// function onChange(i) {
//   console.log(i);
// }

// function call() {
//   for (var i = 0; i < 5; i++) {
//     // debouncedOnchange(i);
//     onChange(i);
//   }
// }

// call();

function throttle(func, wait) {
  let isWaiting = false;

  return function (...args) {
    if (!isWaiting) {
      func.apply(this, args);
      isWaiting = true;

      setTimeout(() => {
        isWaiting = false;
      }, wait);
    }
  };
}

function onChange() {
  console.log("hello");
}

const throlledOnchange = throttle(onChange, 0.2);

window.addEventListener("scroll", throlledOnchange);
