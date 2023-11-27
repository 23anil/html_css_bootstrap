console.log("1) explain desturing with 3 examples array and objects");

let person = {
  fname: "krishna",
  lname: "N H",
  age: 24,
};

let vehicale = {
  name: "Bike",
  bikeNO: 9889,
  details: {
    model: "EA6",
    weight: "150kg",
  },
};

let company = {
  name: "TCS",
  no_emp: 10000,
  address: ["pincode:577002", "satate:karnataka", "city:Bangalore"],
};

console.log("*) Objects desturing");

let { fname, lname, age } = person;

console.log("fname :", fname);
console.log("lname :", lname);
console.log("age :", age);

console.log("**********************");

let {
  name,
  bikeNO,
  details: { model, weight },
} = vehicale;

console.log("name", name);
console.log("bikeNO", bikeNO);
console.log("model", model);
console.log("weight", weight);

console.log("**********************");

let {
  namecompany,
  no_emp,
  address: [pincode, satate, city],
} = company;

console.log("namecompany :", namecompany);
console.log("no_emp :", no_emp);
console.log(pincode);
console.log(satate);
console.log(city);

console.log("**********************");
console.log("*) Array desturing");

let student = ["king", 23, "ty101"];
let friuts = ["ogange", "banana", "apple", [["Kiwi"]]];
let Police_dept = ["PC", "PSI", "INspector", "DYSP", "SP"];

let [namestudent, , ID] = student;

console.log("namestudent", namestudent);
console.log("ID", ID);

console.log("=====================================");

let [index0, index1, index2] = friuts;

console.log("index0 :", index0);
console.log("index1 :", index1);
console.log("index2 :", index2);
// console.log("index3 :",index3);

console.log("=====================================");

let [idx0, idx1, idx2, idx3, idx4] = Police_dept;

console.log("idx0 :", idx0);
console.log("idx1 :", idx1);
console.log("idx2 :", idx2);
console.log("idx3 :", idx3);
console.log("idx4 :", idx4);

console.log("2) explain all object methods");
person = {
  fname: "kaju",
  age: 23,
};

vehicale = {
  v_name: "Bike",
  price: 150000,
  vehicale: {
    model: "EA6",
    weight: 150,
  },
};

company = {
  c_name: "TCS",
  E_NO: 50000,
  adress: ["pincode:577002", "city:Bangalogre"],
};

let friutes = ["apple","orange" , "banana", "Kiwi"];

let string = "GoodMorning";

console.log("***********************");
console.log("hasownproperty");
console.log(company.hasOwnProperty("adress"));
console.log(person.hasOwnProperty("fname"));
console.log(vehicale.hasOwnProperty("price"));

console.log("***********************");
console.log("Object.keys");
console.log(Object.keys(person));
console.log(Object.keys(vehicale));
console.log(Object.keys(company));
console.log(Object.keys(friutes));
console.log(Object.keys(string));

console.log("***********************");
console.log("Object.values");
console.log(Object.values(person));
console.log(Object.values(vehicale));
console.log(Object.values(company));
console.log(Object.values(friutes));
console.log(Object.values(string));

console.log("***********************");
console.log("Object.entries");
console.log(Object.entries(person));
console.log(Object.entries(vehicale));
console.log(Object.entries(company));
console.log(Object.entries(friutes));
// console.log(Object.entries(string));

console.log("***********************");
console.log("Object.creates");

let person01 = {
  fname: "kaju",
  age: 23
};


let properties = {
  name: {
    value: "raju",
  },
  age:{
    value:23
  }
};


let newobj = Object.create(person01, properties);

console.log("name", newobj.name);

console.log("***********************");
console.log("Object.assign");

let person02 = Object.assign({}, person01);

console.log(person02);
console.log(person01);

let newcopy={...person01}

console.log("***********************");
console.log("Object.freeze");


let person03=Object.freeze(person01);

person01.state="Mangalore";

console.log(person02);
console.log(person01);
console.log(person03);


