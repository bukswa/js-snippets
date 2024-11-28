// const obj1 = { name: "hello" };

// const obj2 = Object.create(obj1);
// obj2.age = 20;

// const obj3 = Object.create(obj2);
// obj3.id = 12345;

// console.log(obj3.__proto__.__proto__.__proto__.__proto__);

const closureExample = function () {
  var count = 0;

  var getCount = function () {
    return count;
  };

  var incrementCount = function () {
    count += 1;
  };

  return { getCount, incrementCount };
};

const { getCount, incrementCount } = closureExample();

console.log(getCount());
incrementCount();
console.log(getCount());
incrementCount();
console.log(getCount());

var sr = "hello";

console.log(sr.charAt(0).toUpperCase() + sr.slice(1));
