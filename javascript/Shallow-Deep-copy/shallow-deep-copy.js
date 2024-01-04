// Shallow-copy
console.log("Shallow-Copy-Object");
let person = {
  name: "josef",
  age: 18,
  addres: {
    pincode: 577002,
    city: "Bangalore",
    state: "Karnataka",
  },
};
console.log("Before change person", person);

let person1 = Object.assign({}, person);

console.log("Before change person1", person1);

person.name = "Raghu";
person.addres.city = "Mangalore";

console.log("***********************");

console.log("After Change Person", person);
console.log("After Change Person1", person1);

console.log("***********************");

console.log("Shallow-Copy-Array");

let student = [
  "Anu",
  "Kumar",
  "Omkar",
  "Leela",
  ["Chitradurga", "Tumkur", "Haveri", "HUbballi"],
];

let student01 = student.slice(0);

console.log("Before change student", student);
console.log("Before change student01", student01);

console.log("***********************");

student01[0] = "Sheela";
student01[4][0] = "Davangere";

console.log("After change student", student);
console.log("After change student01", student01);

console.log("===================================");

// Deep-Copy
console.log("Deep-Copy-Object");

let person2 = JSON.parse(JSON.stringify(person));

console.log("Before change person", person);
console.log("Before change person2", person2);

person.addres.city = "pune";
person.addres.state = "Maharastra";

console.log("*******************************");

console.log("After change person", person);
console.log("After change person2", person2);

console.log("*******************************");
console.log("Deep-Copy-Array");

let student02 = JSON.parse(JSON.stringify(student));

console.log("Before change student", student);
console.log("Before change student02", student02);

console.log("*******************************");

student02[1] = "Naveen";
student02[4][0] = "Shivamoga";

console.log("After change student", student);
console.log("After change student02", student02);