console.log("1) what happens in below scnarios");

const n = [10, 20, 30];
const n1 = n;

console.log(n.slice(0));
console.log(n);
console.log("2) give 5 example for array methods");
var numbers = [10, 20, 30];
var fruits = ["apple", "kiwi", "mango"];
var vehicles = ["Bike", "Auto", "Car"];
var students = ["raju", "Anil", "Kumar"];
var companies = ["Tcs", "Wipro", "infosys"];

console.log("*********************");

console.log("push ()");
var push = numbers.push(70);
console.log(push);
console.log(numbers);
var push01 = fruits.push("graps");
console.log(push01);
console.log(fruits);
var push02 = vehicles.push("Ships");
console.log(push02);
console.log(vehicles);
var push03 = students.push("Ravi");
console.log(push03);
console.log(students);
var push04 = companies.push("Xyz");
console.log(push04);
console.log(companies);

console.log("*********************");

console.log("unshift ()");
var unshift = numbers.unshift(5);
console.log(numbers);
var unshift01 = fruits.unshift("orange");
console.log(fruits);
var unshift02 = vehicles.unshift("Bus");
console.log(vehicles);
var unshift03 = students.unshift("Ravi");
console.log(students);
var unshift04 = companies.unshift("TY");
console.log(companies);

console.log("*********************");
console.log("pop ()");
var pop = numbers.pop();
console.log(pop);
console.log(numbers);
var pop01 = fruits.pop();
console.log(pop01);
console.log(fruits);
var pop02 = vehicles.pop();
console.log(pop02);
console.log(vehicles);
var pop03 = students.pop();
console.log(pop03);
console.log(students);
var pop04 = companies.pop();
console.log(pop04);
console.log(companies);

console.log("*********************");
console.log("shift ()");
var shift = numbers.shift();
console.log(shift);
console.log(numbers);
var shift01 = fruits.shift();
console.log(shift01);
console.log(fruits);
var shift02 = vehicles.shift();
console.log(shift02);
console.log(vehicles);
var shift03 = students.shift();
console.log(shift03);
console.log(students);
var shift04 = companies.shift();
console.log(shift04);
console.log(companies);

console.log("*********************");
console.log("foreach ()");

var forEach = numbers.forEach((values, index) => {
  console.log(`index :- ${index}  values : ${values} `);
});
console.log(forEach);

console.log("-----------------");

fruits.forEach((values) => console.log(` values : ${values} `));

console.log("-----------------");

var forEach = vehicles.forEach((values, index) => {
  console.log(`index :- ${index}  values : ${values} `);
});
console.log(forEach);

console.log("-----------------");
students.forEach((values) => console.log(` values : ${values} `));

console.log("-----------------");

var forEach = companies.forEach((values, index) => {
  console.log(`index :- ${index}  values : ${values} `);
});
console.log(forEach);

console.log("*******************");
console.log("slice()");

var slice = numbers.slice(1);
console.log(slice);
var slice01 = fruits.slice();
console.log(slice01);
var slice02 = vehicles.slice(2);
console.log(slice02);
var slice03 = students.slice(3);
console.log(slice03);
var slice04 = companies.slice(-2, -1);
console.log(slice04);

console.log("*******************");
console.log("splice()");

var splice = numbers.splice(1, 1);
console.log(numbers);
console.log(splice);

var splice01 = fruits.splice(1, 0, "orange");
console.log(fruits);
console.log(splice01);

var splice02 = vehicles.splice(3, 0, "bus");
console.log(vehicles);
console.log(splice02);

//   var splice03=student.splice(0,0)
//   console.log(student);
//   console.log(splice03);

var splice04 = companies.splice(0, 1);
console.log(companies);
console.log(splice04);

console.log("*******************");
console.log("isArray()");

var str = "anil";

console.log(Array.isArray(numbers));
var isArray = Array.isArray(fruits);
console.log(isArray);
console.log(Array.isArray(str));
console.log(Array.isArray(vehicles));
console.log(Array.isArray(students));
console.log(Array.isArray(companies));

console.log("*******************");
console.log("includes()");

var includes = numbers.includes(20);
console.log(includes);

console.log(fruits.includes("kiwi"));
console.log(vehicles.includes("Car"));
console.log(students.includes("Anil"));
console.log(companies.includes("tcs"));

console.log("-----------************-------------");
console.log("3) explain 5example find(),findIndex(),flat(),sort(),reverse");

var number01 = [10, 50, 20, 80, 30];
var number_flat = [10, [[20, 30]], [[[40]]], 50];

console.log("find()");

var find = number01.find((value) => {
  return value >= 20;
});
console.log(find);

console.log("------------------------");

console.log("findIndex()");

var find = number01.findIndex(function (value) {
  return value > 50;
});
console.log(find);

console.log("------------------------");

console.log("flat()");

var flat = number_flat.flat(2);
console.log(flat);
console.log(number_flat);

console.log("------------------------");
console.log("sort()");

var sortAssending=number01.sort();
// var sortDessending=number01.sort((a,b)=>b-a)
console.log(sortAssending);
// console.log(sortDessending);

console.log("------------------------");

console.log("reverse()");

console.log(number01);
var reverse = number01.reverse();
console.log(reverse);

console.log("Filter()");

let data=number01.filter((v)=>{
return v>20;
})

console.log(data);

let datafill=number01.fill("Anil",2,3)
console.log(datafill);

