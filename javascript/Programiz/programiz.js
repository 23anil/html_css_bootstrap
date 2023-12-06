// Find Duplicates Array

// console.log("1) Find Duplicates Array");

// function CDA(duplicateArray) {
//   let da = [];
//   for (let num in duplicateArray) {
//     for (let num1 in duplicateArray) {
//       if (num === num1) {
//         continue;
//       } else {
//         if (duplicateArray[num] === duplicateArray[num1]) {
//           da.push(duplicateArray[num]);
//         }
//       }
//     }
//   }
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
// CDS("abcdacbed");

// Find Without Duplicates String

// console.log("4) Find Without Duplicates String");

// function CWDS(duplicateString) {
//   let ds = duplicateString.toUpperCase();
//   let ds01 = ds.split("");

//   for (let i = 0; i < ds01.length; i++) {
//     for (let j = i + 1; j < ds01.length; j++) {
//       if (ds01[i] === ds01[j]) {
//         ds01[i] = 0;
//         ds01[j] = 0;
//       }
//     }
//   }
//   for (let k = 0; k < ds01.length; k++) {
//     if (ds01[k] != 0) {
//       console.log(ds01[k]);
//     }
//   }
// }
// CWDS("abcdabce");

// Change only second character to uppercase String

// console.log("5) Change only second character to uppercase String");

// function csc(nums) {
//   let copy = [];

//   for (let i = 0; i < nums.length; i++) {
//     let str = "";
//     for (let j = 0; j < nums[i].length; j++) {
//       if (j == 1) {
//         str += nums[i][j].toLocaleUpperCase();
//       }
//       str += nums[i][j];
//     }
//     copy[i] = str;
//   }

//   console.log(copy);
// }

// let fruits = ["apple", "mango", "orange"];
// csc(fruits);

// merge and find without duplicates & with duplicates elements array

// let add = [1, 2, 3, 4, 5, 1];
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
// console.log(duplicates);

// palindrome
//reverse number
// function palindrome(){
//   let input=123;
// // let input01=input;
// let reverseinput=0;
// while(input!=0)
// {
// let rem=input%10;
// reverseinput=reverseinput*10+rem;
// input=input/10;
// }
// console.log(reverseinput);
// }
// palindrome();

////
function reverseNumber(num) {
  let reversed = '';
  const numStr = num.toString();

  for (let i = numStr.length - 1; i >= 0; i--) {
    reversed += numStr[i];
  }

  return parseInt(reversed, 10); // Convert the reversed string back to a number
}


const reversedNumber = reverseNumber(1234);
console.log(  reversedNumber ); // Output: 54321




///

let input="hello word"

let split=input.split(" ")


console.log(split);

for(let i=split.length-1;i>=0;i++){
  console.log(split[i]);
}



