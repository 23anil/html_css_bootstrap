// Destructuring nested objects and arrays

// let person={
//     fname:"Anil",
//     lname:"K R",
//     age:23,
//     address:{
//         pincode:"577002",
//         city:"Bangalore",
//     },
//     bikes:["R15","Splender","RE","KTM"]
// }
// console.log(person.fname);
// console.log(person.address.location);
// console.log(person.bikes[1]);

// let{fname,lname,age,address:{city,pincode},bikes:[b01,b02,b03,b04]}=person;

// console.log(fname);
// console.log(lname);
// console.log(age);
// console.log(city);
// console.log(b01,b02,b03,b04);

// Destructuring aliasing  the names

// let person01={
//     fname:"Anil",
//     lname:"K R",
//     age:23,
//     address:{
//         pincode:"577002",
//         city:"Bangalore",
//     }
// }

// let {fname:fNamepreson,fname,address:{city:gopal,city}}=person01

// console.log(fNamepreson); // Anil
// console.log(fname);       // Anil
// console.log(city);    // Bangalore
// console.log(gopal);   // Bangalore

// let hobbies=["Chess","Reading","cooking","cricket","coding"];

// let [game01,game02,game03]=hobbies;

// console.log(game01); // Chess
// console.log(game02); // Reading
// console.log(game03); // cooking