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
  var add =0;
  for (let i = 0; i < nums.length; i++) {
    add += nums[i];
  }
  console.log("a", a);
  console.log("add", add);
}

rest(10, 20, 30, 40, 10);

console.log("===================");
// defult parameter
console.log("*) Defult Parameter");

function defult(name = "Wel Come !!!") {
  console.log(`Good Afternoon ${name}`);
}
defult();
