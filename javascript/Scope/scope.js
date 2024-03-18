console.log("var   ********************");
// global
var a = 10;
console.log("a", a);
a = 20;
console.log("a", a);

// local
function scope() {
  var a = 50;
  console.log("a local", a);
}
scope();

// block scope
for (var i = 1; i <= 5; i++) {
  console.log("i", i);
}

console.log("block scope var", i);

console.log("let   ********************");

// global
let b = 10;
console.log("b", b);
b = 20;
console.log("b", b);

// local
function scope() {
  let b = 50;
  console.log("b local", b);
}
scope();

// block scope
for (let i = 1; i <= 5; i++) {
  console.log("i", i);
}

console.log("block scope let", i);

console.log("const   ********************");

const c = 10;
// const c=20;
// c=30;
console.log("c", c);

function const_scpoe() {
  const c = 30;
  console.log("c", c);
}

const_scpoe();

// block scope
// for (const i = 1; i <= 5; i++) {
//   console.log("i", i);
// }

// console.log("block scope const", i);


{
var first=10;
let second=10;
const third=10;
}

console.log("first var",first);
console.log("second",second);
console.log("third",third);


function run(){
  let h="hello"
  let hi="hi Anil"
  console.log(h);
}

run();
console.log(hi);
