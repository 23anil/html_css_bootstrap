console.log("explain desturing with 3 examples array and objects");

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
  no_emp:10000,
  address: ["pincode:577002", "satate:karnataka", "city:Bangalore"],
};

console.log("*) Objects desturing");

let {fname,lname,age}=person;

console.log("fname :",fname);
console.log("lname :",lname);
console.log("age :",age);

console.log("**********************");

let {name,bikeNO,details:{model,weight}}=vehicale

console.log("name",name);
console.log("bikeNO",bikeNO);
console.log("model",model);
console.log("weight",weight);

console.log("**********************");

let {namecompany,no_emp,address:[pincode,satate,city]}=company

console.log("namecompany :",namecompany);
console.log("no_emp :",no_emp);
console.log(pincode);
console.log(satate);
console.log(city);

console.log("**********************");
console.log("*) Array desturing");

let student=["king",23,"ty101"]
let friuts=["ogange","banana","apple",[["Kiwi"]]]
let Police_dept=["PC","PSI","INspector","DYSP","SP"]

let [namestudent,,ID]=student

console.log("namestudent",namestudent);
console.log("ID",ID);

console.log("=====================================");

let [index0,index1,index2]=friuts

console.log("index0 :",index0);
console.log("index1 :",index1);
console.log("index2 :",index2);
// console.log("index3 :",index3);

console.log("=====================================");

let [idx0,idx1,idx2,idx3,idx4]=Police_dept

console.log("idx0 :",idx0);
console.log("idx1 :",idx1);
console.log("idx2 :",idx2);
console.log("idx3 :",idx3);
console.log("idx4 :",idx4);





