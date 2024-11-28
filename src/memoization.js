function memoize() {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      console.log("returning from cache");
      return cache[n];
    } else {
      console.log("fetching data from outside");

      cache[n] = n + 10;
      return cache[n];
    }
  };
}

const memoized = memoize();

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
