// Find Duplicates Array

// console.log("1) Find Duplicates Array");

// function CDA(duplicateArray) {
//   let da = [];
//   for (let i=0;i<duplicateArray.length;i++) {
//     for (let j=0;j<duplicateArray.length;j++) {
//       if (i === j) {
//         continue;
//       } else {
//         if (duplicateArray[i] === duplicateArray[j]) {
//           da.push(duplicateArray[i]);
//         }
//       }
//     }
//   }
//   console.log(da);
//   console.log(...new Set(da));
// }
// let ty = [1, 2, 3, 4, 5, 1, 2, 3, 6];

// CDA(ty);

// Find Without Duplicates Array

// console.log("2) Find Without Duplicates Array");

// function CWDA(duplicateArray) {
//   let da = duplicateArray;
//   for (let i = 0; i < da.length; i++) {
//     for (let j = i + 1; j < da.length; j++) {
//       if (da[i] === da[j]) {
//         da[i] = 0;
//         da[j] = 0;
//       }
//     }
//   }
//   for (let k = 0; k < da.length; k++) {
//     if (da[k] != 0) {
//       console.log(da[k]);
//     }
//   }
// }
// let ty01 = [1, 2, 3, 4, 5, 1, 2, 3, 6];
// CWDA(ty01);

// --------------------------------------------------------

// <!-- Find Duplicates string-->

// console.log("3) Find Duplicates String");

// function CDS(duplicateString) {
//   let ds = duplicateString.toUpperCase();
//   let ds01 = "";
//   for (let i = 0; i < ds.length; i++) {
//     for (let j = i + 1; j < ds.length; j++) {
//       if (ds[i] === ds[j]) {
//         ds01 = ds01 + ds[i];
//       }
//     }
//   }
//   console.log(ds01);
// }
// CDS("abcdacbeda");

// function CDS(duplicateString) {
//   let ds = duplicateString.toUpperCase();
//   let ds01 = ds.split("");

//   let ds02 = [];
//   for (let i = 0; i < ds01.length; i++) {
//     let data=ds01[i]
//     console.log(data);
//     if (ds02[data] === -1) {
//       // ds01 = ds01 + ds[i];
//       ds02.push(ds01[i]);
//     }
//   }
//   let sortds=[...new Set(ds02)]
//   console.log(sortds);
// }
// CDS("abcdacbeda");

// Find Without Duplicates String

// console.log("4) Find Without Duplicates String");

function CWDS(duplicateString) {
  let ds = duplicateString.toUpperCase();
  let ds01 = ds.split("");

  for (let i = 0; i < ds01.length; i++) {
    for (let j = i + 1; j < ds01.length; j++) {
      if (ds01[i] === ds01[j]) {
        ds01[i] = 0;
        ds01[j] = 0;
      }
    }
  }
  for (let k = 0; k < ds01.length; k++) {
    if (ds01[k] != 0) {
      console.log(ds01[k]);
    }
  }
}
CWDS("abcdabce");

// merge and find without duplicates & with duplicates elements array

// let add = [1, 2, 3, 4, 5, 1,2];
// let nums01 = [2, 6, 4];

// let nums02 = [...add, ...nums01];

// console.log("orrginal merge array");
// console.log(nums02);
// let without_duplicates = [];
// let duplicates = [];

// for (let i of nums02) {
//   if (without_duplicates.indexOf(i) === -1) {
//     without_duplicates.push(i);
//   }
// }

// let p = 0;
// for (let k = 0; k < nums02.length; k++) {
//   for (let j = k + 1; j < nums02.length; j++) {
//     if (nums02[k] === nums02[j]) {
//       duplicates[p] = nums02[k];
//       p++;
//     }
//   }
// }
// console.log("without_duplicates");
// console.log(without_duplicates);
// console.log("duplicates");
// console.log(...new Set(duplicates));
// console.log(duplicates);

// palindrome
// reverse number

// function palindrome() {
//   // debugger;
//   let input = 23;
//   let input01 = input;
//   let reverseinput = 0;
//   while (input > 0) {
//     let rem = input % 10;
//     reverseinput = reverseinput * 10 + rem;
//     input = parseInt(input / 10);
//   }
// }
// palindrome();

 
// let input="hello word"

// let split=input.split(" ")

// console.log(split);
// for(let i=0;i<split.length;i++){
//   let str=""
// for(let j=split[i];j>=0;j--){
// str+=split[j]
// }
// console.log(str);
// }

// count vowels

// function findvowels(a) {
//   let vowels = a.toLowerCase();
//   let c = 0;
//   for (let i = 0; i < vowels.length; i++) {
//     if (
//       vowels[i] === "a" ||
//       vowels[i] === "e" ||
//       vowels[i] === "i" ||
//       vowels[i] === "o" ||
//       vowels[i] === "u"
//     ) {
//       c++;
//     }
//   }
//   console.log(c);
// }
// findvowels("ABICEpowuga");

// example02

// function findvowels01(a) {
//   let str = a.toLowerCase();
//   let c = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let value of str)
//     if (vowels.includes(value)) {
//       c++;
//     }
//   console.log(c);
// }
// findvowels01("ABICEpowugai");

// let a=1; b=1

//  let c=a++ + ++a+a-- + ++a+b+++a++

//  console.log(a);
//  console.log(b);
//  console.log(c);

// Amstrong
// let n = 153;
// let n1 = n;
// let copy = n;

// let length = 0;

// let arm = 0;
// while (n > 0) {
//   n = parseInt(n / 10);
//   length++;
// }
// while (n1 != 0) {
//   let rem = n1 % 10;
//   let mul = 1;
//   for (let i = 1; i <= length; i++) {
//     mul = mul * rem;
//   }
//   n1 = parseInt(n1 / 10);
//   arm = mul + arm;
// }
// if (copy === arm) {
//   console.log(`${arm} is Amstrong Number`);
// } else {
//   console.log(`${arm} is Not Amstrong Number`);
// }
