// ES6 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an object using the class
let person2 = new Person('Bob', 25);
console.log(person2.greet()); // Output: Hello, my name is Bob and I am 25 years old.
