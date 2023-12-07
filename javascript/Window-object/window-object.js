// window objects

var name = "anil";
var age = 23;

// console.log(this.name);

console.log(this.window);

// console.log(this.location);

// console.log(this.location);

// console.log(this.geolocation);
console.log(this.navigator);
// console.log(this.history);
// console.log("innerHeight", this.innerHeight);
// console.log("innerWidth", this.innerWidth);
// console.log("outerHeight", this.outerHeight);
// console.log("outerWidth", this.outerWidth);

// console.log(history);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 3));

navigator.geolocation.getCurrentPosition((loc) => {
  console.log("loc", loc.coords);
});

// let userage = prompt("enter the your age");

// if (userage > 18) {
//   open("https://www.flipkart.com/");
// } else {
//   open("https://www.firstcry.com/");
//   close();
// }
