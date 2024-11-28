const grandParent = Object.create({});
grandParent.hello = function () {
  console.log("I am from GrandParent");
};

const parent = Object.create(grandParent);
parent.sayHello = function () {
  console.log("I am from Parent");
};

const child = Object.create(parent);
child.tellHello = function () {
  console.log("I am from Child");
};

child.tellHello();
child.sayHello();
child.hello();

console.log(child.__proto__.__proto__.__proto__);

// __proto__ for object and function

const obj1 = {
  prop1: "first property",
};

const obj2 = Object.create(obj1);

obj2.prop2 = "second property";
console.log(obj2.__proto__ === obj1); // true
console.log(obj2.__proto__ === obj1.prototype); // false

function myFunction() {
  this.value = "hello world!";
}

const instance = new myFunction();

console.log(instance.__proto__ === myFunction); // false
console.log(instance.__proto__ === myFunction.prototype); // true

// New way of setting the Prototype instead of proto (getPrototypeOf, setPrototypeOf)

//person object is the prototype for the musician object
Object.setPrototypeOf(musician, person);

console.log(Object.getPrototypeOf(musician)); // {alive:true}
console.log(musician.__proto__); // {alive:true}
console.log(Object.getPrototypeOf(musician) === musician.__proto__); // true
