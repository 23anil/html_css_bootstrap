// mutable immutable
// primitive data types are immutable
let a = 10;
console.log("a=>", a);
let b = a;
console.log("b=>", b);
a = 20;
console.log("after change a=>", a);
console.log("after change b=>", b);
console.log("**********************");
let name = "raju";
console.log("name", name);

let name1 = name;
console.log("name1", name1);
name = "Manju";
console.log("name", name);
console.log("name1", name1);

console.log("**********************");

// immutable object

let person = {
  name: "king",
  age: 18,
};

console.log(person);

let person1 = person;

console.log(person1);

person.name = "veda";

console.log(person);
console.log(person1);

console.log("************");

let person2 = Object.assign({}, person);

console.log(person2);

person.age = 23;

console.log(person);
console.log(person2);

console.log("*********************");
console.log("array immutable");

let friuts = ["apple", "banana", "kiwi", "orange"];

console.log(friuts);

let friuts01 = friuts.slice(0);

console.log(friuts01);

friuts[1] = "mango";

console.log(friuts);
console.log(friuts01);
