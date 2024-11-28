// (() => {
//   function hello(name) {
//     console.log(this.firstName + " " + name);
//   }

//   //   const fn = hello.bind({ firstName: "something" });

//   //   fn("something2");
//   //   fn("------------------------");

//   Function.prototype.myApply = function (context, args) {
//     this.call(context, ...args);
//   };

//   hello.myApply({ firstName: "something" }, ["something2"]);
// })();

// const arr = [1, 2, 3, 4];

// const sum = arr.reduce((acc, item, index, original) => {
//   acc += item * 2;
//   return acc;
// }, 0);

// console.log(sum);
// console.log("-----------------");

// Array.prototype.MyReduce = function (fn, initialValue) {
//   let acc = initialValue;
//   for (var i = 0; i < this.length; i++) {
//     if (!acc) {
//       acc = this[0];
//       continue;
//     }
//     acc = fn(acc, this[i], i, this);
//   }
//   return acc;
// };
// const sum2 = arr.reduce((acc, item, index, original) => {
//   acc += item * 2;
//   return acc;
// }, 0);

// console.log(sum2);

function hello(age) {
  console.log(`your name is ${this.name} and age is:${age}`);
}

const bindMethod = hello.bind({ name: "john" }, 20);

bindMethod();
console.log("_______________");

Function.prototype.myBind = function (context, ...args1) {
  context.fn = this;
  return function (...arg2) {
    context.fn(...args1);
    console.log("called", context.fn);
  };
};

const bindMethod2 = hello.myBind({ name: "john" }, [20]);

bindMethod2();
