// WAP to find prime number or not
console.log(" 01)WAP to find prime number or not");
var num = 19;
var count = 0;
for (var i = 2; i < num; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count === 0) {
  console.log("prime number");
} else {
  console.log("Not prime number");
}

// WAP to find reverse string
console.log("******************");
console.log(" 02)WAP to find reverse string");
var str = "goodMorning";
console.log(str);
var str1 = "";

for (var i = str.length - 1; i >= 0; i--) {
  str1 = str1 + str.charAt(i);
}
console.log(str1);

// WAP to find Second Largest
console.log("******************");
console.log(" 03)WAP to find Second Largest");
var array = [55, 10, 2, 3, 45, 16];
var firstLarge = 0;
var secondLarge = 0;
for (var i = 0; i < array.length; i++) {
  if (array[i] > firstLarge) {
    secondLarge = firstLarge;
    firstLarge = array[i];
  }
  if (array[i] < firstLarge && array[i] > secondLarge) {
    secondLarge = array[i];
  }
}
console.log(array);
console.log("secondLarge : " + secondLarge);

// WAP to find Bubble Sort
console.log("******************");
console.log(" 04)WAP to find Bubble Sort");

var array01 = [5, 4, 3, 2, 1, 1, 5, 3];

// Normal Sort

// for (var i = 0; i < array01.length; i++) {
//   var temp;
//   for (var j = 0; j < array01.length; j++) {
//     if (array01[j] > array01[j + 1]) {
//       temp = array01[j];
//       array01[j] = array01[j+1];
//       array01[j+1] = temp;
//     }
//   }
// }

// Bubble Sort

for (var i = 0; i < array01.length; i++) {
  for (var j = 0; j < array01.length - i; j++) {
    if (array01[j] > array01[j + 1]) {
      var temp = array01[j];
      array01[j] = array01[j + 1];
      array01[j + 1] = temp;
    }
  }
}
console.log(array01);

//create 5 array without using new keyword with all primitive types and object and loop for loop using
console.log("*******************");
console.log(
  " 05)create 5 array without using new keyword with all primitive types and object and loop for loop using"
);
console.log("*) Primitive Types");

var person = [
  "Ravi",
  23,
  false,
  undefined,
  null,
  BigInt(1235356144526),
  Symbol(123),
];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}
console.log("***************");
var employee = [
  "Raju",
  25,
  true,
  undefined,
  null,
  BigInt(10111213141516171819),
  Symbol(321),
];

for (let i = 0; i < employee.length; i++) {
  console.log(employee[i]);
}
console.log("***************");
var student = [
  "Raghu",
  21,
  false,
  undefined,
  null,
  BigInt(987654321),
  Symbol(741),
];

for (let i = 0; i < student.length; i++) {
  console.log(student[i]);
}
console.log("**************************");
console.log("*) object");

var person01 = [
  {
    name: "Paramesh",
    age: 25,
    married: undefined,
    place: null,
    Adharno: BigInt(987654321145),
  },
  {
    name: "Punith",
    age: 29,
    married: undefined,
    place: null,
    Adharno: BigInt(987654321),
  },
  {
    name: "Gowda",
    age: 28,
    married: undefined,
    place: null,
    Adharno: BigInt(9887894566254),
  },
];

for (var i = 0; i < person01.length; i++) {
  console.log(person01[i]);
}

console.log("**********************");
var employee01 = [
  {
    name: "Naveen",
    age: 25,
    married: undefined,
    place: null,
    Adharno: BigInt(987654321145),
  },
  {
    name: "Kumar",
    age: 23,
    married: undefined,
    place: null,
    Adharno: BigInt(987654321),
  },
  {
    name: "Hanuma",
    age: 29,
    married: undefined,
    place: null,
    Adharno: BigInt(9887894566254),
  },
];

for (var i = 0; i < employee01.length; i++) {
  console.log(employee01[i]);
}

console.log("**********************");
var student01 = [
  {
    name: "Ravi",
    age: 25,
    married: undefined,
    place: null,
    Adharno: BigInt(987654321145),
  },
  {
    name: "Varun",
    age: 29,
    married: undefined,
    place: null,
    Adharno: BigInt(987654321),
  },
  {
    name: "Manu",
    age: 23,
    married: undefined,
    place: null,
    Adharno: BigInt(9887894566254),
  },
];

for (var i = 0; i < student01.length; i++) {
  console.log(student01[i]);
}

//create 5 array with using new keyword with all primitive types and object and loop for loop using
console.log("*******************");
console.log(
  " 06)create 5 array with using new keyword with all primitive types and object and loop for loop using"
);
console.log("*) primitive types");
var mobile = new Array(
  "MI",
  17000,
  true,
  undefined,
  null,
  BigInt(11213141516171819),
  Symbol(321)
);

for (var i = 0; i < mobile.length; i++) {
  console.log(mobile[i]);
}

console.log("********************");
var Laptop = new Array(
  "Lenovo",
  25000,
  true,
  undefined,
  null,
  BigInt(10111213141516171819),
  Symbol(321)
);

for (var i = 0; i < Laptop.length; i++) {
  console.log(Laptop[i]);
}

console.log("********************");
var Fan = new Array(
  "Usha",
  2000,
  true,
  undefined,
  null,
  BigInt(10111213141516171819),
  Symbol(321)
);

for (var i = 0; i < Fan.length; i++) {
  console.log(Fan[i]);
}

console.log("**********************");
console.log("object");

var bike = new Array(
  {
    name: "Royal Enfiled",
    Price: 150000,
    Bicke_No: Symbol("KA - 17 - EF - 8998"),
    Model: undefined,
    Bicke_Series: BigInt(10111213141516171819),
  },
  {
    name: "Pulsar-150",
    Price: 100000,
    Bicke_No: Symbol("KA - 17 - EF - 1234"),
    Model: undefined,
    Bicke_Series: BigInt(10111213141516171819),
  },
  {
    name: "Hero-Honda-cd-100",
    Price: 95000,
    Bicke_No: Symbol("KA - 17 - EF - 4321"),
    Model: undefined,
    Bicke_Series: BigInt(10111213141516171819),
  }
);
for (var i = 0; i < bike.length; i++) {
  console.log(bike[i]);
}

console.log("******************");

var courses = new Array(
  {
    name: "BE",
    Price: 100000,
    Duration: Symbol("4year"),
    Model: undefined,
    Collages: BigInt(10111213141516171819),
  },
  {
    name: "MBBS",
    Price: 500000,
    Duration: Symbol("5year"),
    Model: undefined,
    Collages: BigInt(10111213141516171819),
  },
  {
    name: "LAW",
    Price: 150000,
    Duration: Symbol("4year"),
    Model: undefined,
    Collages: BigInt(10111213141516171819),
  }
);
for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

console.log("******************");

var City = new Array(
  {
    name: "Bangalore",
    Population: 1000000,
    Duration: Symbol("4year"),
    Development: undefined,
    Distance: null,
  },
  {
    name: "Mangalore",
    Population: 500000,
    Duration: Symbol("5year"),
    Development: undefined,
    Distance: null,
  },
  {
    name: "Davangere",
    Population: 150000,
    Duration: Symbol("4year"),
    Development: undefined,
    Distance: null,
  }
);
for (var i = 0; i < City.length; i++) {
  console.log(City[i]);
}

console.log("**************************************");
console.log(
  "07) calculate BMI result print using ternary operator and if else statement"
);
console.log("*) Ternary operator");
var heigth = 1.2;
var weight = 40;

var bmi = weight / Math.pow(heigth, 2);

bmi < 18.5
  ? console.log("underweight")
  : bmi >= 18.5 && bmi <= 24.9
  ? console.log("normal")
  : bmi >= 25 && bmi <= 29.9
  ? console.log("overwight")
  : bmi >= 30 && bmi <= 34.9
  ? console.log("obese")
  : console.log("extremely obese");

console.log("***************************");
console.log("*) if else statement");
var heigth = 1.2;
var weight = 40;

var bmi = weight / Math.pow(heigth, 2);

if (bmi < 18.5) {
  console.log("underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("overwight");
} else if (bmi >= 30 && bmi <= 34.9) {
  console.log("obese");
} else {
  console.log("extremely obese");
}
