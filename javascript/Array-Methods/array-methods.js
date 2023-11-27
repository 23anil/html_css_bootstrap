var nums = [1, 3, 7, 5, 8, 4, 6];
var fruits = ["apple", "orange", "banana", "jackfruit", "kiwi"];

// Array Methods

// Unshift method
console.log("Before Unshift - 23, 25");
console.log(nums);
// unshift method is add elements in starting of original array
var unshift = nums.unshift(23, 25);
console.log("After Unshift");

console.log(nums);
// unshift returns array length
console.log(unshift);

console.log("********************");

//   push method

console.log("Before push() - 33, 55");
console.log(nums);
// push method is add elements in end of original array
var push = nums.push(33, 55);
console.log("After push()");

console.log(nums);
// unshift returns array length
console.log(push);

console.log("********************");

//   Shift method

console.log("Before Shift");
console.log(nums);
// Shift method is remove in first elements of original array
//   only first elements
var Shift = nums.shift();
console.log("After Shift");

console.log(nums);
// Shift returns remove element from the original array
console.log(Shift);

console.log("====================");

// pop method

console.log("Before push()");
console.log(nums);
// pop method is remove in last elements of original array
//   only last element
var pop = nums.pop();
console.log("After pop()");

console.log(nums);
// pop returns remove element from the original-array
console.log(pop);

console.log("=====***************=====");

//   slice method
console.log("Before slice()");
console.log(nums);

//   slice method is used extract the array in range / range is specified user
//   slice method parameters 1st value is start-index, 2nd value is end-index(end-index is ont incuded)
var slice = nums.slice(1, 8);
console.log("After slice(1,8)");
console.log(nums);
// slice method returns new array
console.log(slice);

console.log("******===========********");

//   splice method
console.log("Before splice()");
console.log(nums);

//   splice method is used to add new items to an array
//   (OR)
//   splice method is used to remove elementes in an array it is depend upon inputs
//   if in case not put 3rd value that can be remove elements from an array

//   The 1st parameter defines the position where new elements should be added (spliced in)

//   The 2nd parameter defines the  how many elements should be removed
//   The 3nd parameter (optional) if you specify any value that value add an original array

console.log("splice method value add");
var splice = nums.splice(1, 0, "Anil");
console.log("After splice(1,8)");
console.log(nums);
// splice method returns new array
console.log(splice);
console.log("-----------------------------");
console.log("splice method value removed");
var splice = nums.splice(3, 2);
console.log("After splice()");
console.log(nums);
console.log(splice);

console.log("******===========********");

console.log("indexOf(element)");
var indexOf = nums.indexOf("Anil");
//   returns index number
console.log(indexOf);

console.log("******===========********");

console.log("forEach()");
var forEach = nums.forEach((value, index) =>
  console.log("value =" + value + "  " + "index =" + index)
);
//   returns  undefined
console.log(forEach);

console.log("******===========********");

console.log("map()");
var map = fruits.map((value, index) =>
  console.log("value =" + value + "  " + "index =" + index)
);
//   returns new array
console.log(map);

console.log("******===========********");

console.log("filter");
// returns filtered new array
var filter = nums.filter((value) => value > 5);

console.log(filter);

console.log("******===========********");

var nums01 = [10, 30, 27, 15, 58, 44, 67];

console.log("sort");

var sort = nums01.sort((a, b) => b - a);

console.log(sort);

console.log("******===========********");
console.log("toString()");
var toString = fruits.toString();
console.log(toString);

console.log("******===========********");
console.log("delete");
console.log(delete fruits[0]);

console.log(fruits);

console.log("******===========********");
console.log("concat()");
var concat = nums01.concat(fruits);
console.log(concat);
console.log(nums01);

console.log("******===========********");
console.log("flat()");

var nums02 = [10, [30, 27], 15, [[[58, 44]]], 67];
var flat = nums02.flat(Infinity);
console.log(flat);

console.log("******===========********");
console.log("isArray");
var str = "anil";
console.log(Array.isArray(nums));
console.log(Array.isArray(str));

console.log("******===========********");
console.log("includes");
var includes = fruits.includes("kiwi");
var includes01 = fruits.includes("mango");
console.log(includes);
console.log(includes01);

console.log("******===========********");

fruits[fruits.length] = "mango";
console.log(fruits);
var nums = [1, 3, 7, 5, 8, 4, 6];
var nums05 = [1, 3, 7, 5, 8, 4, 6];
var fruits = ["apple", "orange", "banana", "jackfruit", "kiwi"];

// Array Methods

// Unshift method
console.log("Before Unshift - 23, 25");
console.log(nums);
// unshift method is add elements in starting of original array
var unshift = nums.unshift(23, 25);
console.log("After Unshift");

console.log(nums);
// unshift returns array length
console.log(unshift);

console.log("********************");

//   push method

console.log("Before push() - 33, 55");
console.log(nums);
// push method is add elements in end of original array
var push = nums.push(33, 55);
console.log("After push()");

console.log(nums);
// unshift returns array length
console.log(push);

console.log("********************");

//   Shift method

console.log("Before Shift");
console.log(nums);
// Shift method is remove in first elements of original array
//   only first elements
var Shift = nums.shift();
console.log("After Shift");

console.log(nums);
// Shift returns remove element from the original array
console.log(Shift);

console.log("====================");

// pop method

console.log("Before push()");
console.log(nums);
// pop method is remove in last elements of original array
//   only last element
var pop = nums.pop();
console.log("After pop()");

console.log(nums);
// pop returns remove element from the original-array
console.log(pop);

console.log("=====***************=====");

//   slice method
console.log("Before slice()");
console.log(nums);

//   slice method is used extract the array in range / range is specified user
//   slice method parameters 1st value is start-index, 2nd value is end-index(end-index is ont incuded)
var slice = nums05.slice(1, 8);
console.log("After slice(1,8)");
console.log(nums05);
// slice method returns new array
console.log(slice);
console.log(nums05.slice(2, 6));
console.log("******===========********");

//   splice method
console.log("Before splice()");
console.log(nums);

//   splice method is used to add new items to an array
//   (OR)
//   splice method is used to remove elementes in an array it is depend upon inputs
//   if in case not put 3rd value that can be remove elements from an array

//   The 1st parameter defines the position where new elements should be added (spliced in)

//   The 2nd parameter defines the  how many elements should be removed
//   The 3nd parameter (optional) if you specify any value that value add an original array

console.log("splice method value add");
var splice = nums.splice(1, 0, "Anil");
console.log("After splice(1,8)");
console.log(nums);
// splice method returns new array
console.log(splice);
console.log("-----------------------------");
console.log("splice method value removed");
var splice = nums.splice(3, 2);
console.log("After splice()");
console.log(nums);
console.log(splice);

console.log("******===========********");

console.log("indexOf(element)");
var indexOf = nums.indexOf("Anil");
//   returns index number
console.log(indexOf);

console.log("******===========********");

console.log("forEach()");
var forEach = nums.forEach((value, index) =>
  console.log("value =" + value + "  " + "index =" + index)
);
//   returns  undefined
console.log(forEach);

console.log("******===========********");

console.log("map()");
var map = fruits.map((value, index) =>
  console.log("value =" + value + "  " + "index =" + index)
);
//   returns new array
console.log(map);

console.log("******===========********");

console.log("filter");
// returns filtered new array
var filter = nums.filter((value) => value > 5);

console.log(filter);

console.log("******===========********");

var nums01 = [10, 30, 27, 15, 58, 44, 67];

console.log("sort");

var sort = nums01.sort((a, b) => b - a);

console.log(sort);

console.log("******===========********");
console.log("toString()");
var toString = fruits.toString();
console.log(toString);

console.log("******===========********");
console.log("delete");
console.log(delete fruits[0]);

console.log(fruits);

console.log("******===========********");
console.log("concat()");
var concat = nums01.concat(fruits);
console.log(concat);
console.log(nums01);

console.log("******===========********");
console.log("flat()");

var nums02 = [10, [30, 27], 15, [[[58, 44]]], 67];
var flat = nums02.flat(Infinity);
console.log(flat);

console.log("******===========********");
console.log("isArray");
var str = "anil";
console.log(Array.isArray(nums));
console.log(Array.isArray(str));

console.log("******===========********");
console.log("includes");
var includes = fruits.includes("kiwi");
var includes01 = fruits.includes("mango");
console.log(includes);
console.log(includes01);

console.log("******===========********");

fruits[fruits.length] = "mango";
console.log(fruits);
