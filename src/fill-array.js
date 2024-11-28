console.log([
  ...Array(5)
    .fill(null)
    .map((item, i) => i + 1),
]);

// [1,2,3,4,5]

console.log([...Array(5).keys()]);

// [0,1,2,3,4]
