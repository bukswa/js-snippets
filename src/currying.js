// Snippet - Currying

function f(a, b) {
  return a * b;
}

const bindMethod = f.bind(null, 5);

console.log(bindMethod(6)); // output: 30
