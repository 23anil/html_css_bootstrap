console.log("1) what is deepcopy and shallowcopy with 2 example");
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

console.log("******--------*********-------*******");

console.log(
  "2) explain spread,rest operator and default parameter with 2 example each"
);

// Spread Operator
console.log("*) Array");

let friuts = ["Apple", "orange", "pappaya", "Kiwi"];
let friuts01 = ["Muskmelon", "banana", "Mango", "watermelon"];

// shallow copy

let friuts_Copy = [...friuts];
let friuts01_Copy = [...friuts01];

console.log("friuts_Copy", friuts_Copy);
console.log("friuts01_Copy", friuts01_Copy);

// merge array using Spread Operator

let friuts_merge = [...friuts, ...friuts01];

console.log("friuts_merge", friuts_merge);

// Destructuring array using Spread Operator

let [one, two, ...all] = friuts;

console.log(one);
console.log(two);
console.log(all);

console.log("********************************");

console.log("*) Objects");

let company = {
  name: "TCS",
  No_Employee: 20000,
};

let Address = {
  pincode: 577002,
  city: "Bangalore",
  state: "Karnataka",
};

let margeobjects = { ...company, ...Address };
console.log("margeobjects", margeobjects);

console.log("===================");
// Rest Operator
console.log("*) Rest Operator");

function rest(a, ...nums) {
  var add = 0;
  for (let i = 0; i < nums.length; i++) {
    add += nums[i];
  }
  console.log("a", a);
  console.log("add", add);
}

rest(10, 20, 30, 40, 10);

function restoperator(...nums) {
  var add = 0;
  for (let i = 0; i < nums.length; i++) {
    add += nums[i];
  }
  console.log("add", add);
}

restoperator(10, 20, 30, 40, 10);

console.log("===================");
// defult parameter
console.log("*) Defult Parameter");

function defult(name = "Wel Come !!!") {
  console.log(`Good Afternoon ${name}`);
}
defult();

function nums(name = 10) {
  console.log(`Good Afternoon ${name}`);
}
nums(10);

console.log("=============================");

console.log("3) crud operation in array");

//create
console.log("*) Create Array");

let employee = ["Anil", 101, "TCS", "Bangalore", "FulStack Developer"];



console.log("Read Array");

// console.log("employee",employee);

for (let values of employee) {
  console.log(values);
}

console.log("Update Array");

employee[employee.length] = 55000;

console.log("employee", employee);

console.log("Delete Array");

employee.splice(3,1)

console.log("employee", employee);

console.log("****************************");

console.log("4) crud operation in Object");

// create
console.log("Create Object");
let collage={
  C_name:"Oxford Collage",
  C_fees:105000,
  C_place:"Mangalore",
  C_Ratings:4.5
}

// Read
console.log("Read Object");
for(let keys in collage){
  console.log(`${keys} : ${collage[keys]}`);
}

// Update
console.log("Update Object");

collage.C_place="Davangere"
collage.C_Hostle=75000
console.log(collage);

// delete 
console.log("Delete Object");
// delete collage.C_fees;

console.log(collage);

