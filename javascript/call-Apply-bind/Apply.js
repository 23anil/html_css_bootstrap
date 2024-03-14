//  without parameter
// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// document.getElementById("root").innerHTML = person.fullName.apply(person1);

//  with parameter
const person = {
    fullName: function (age, place) {
      return this.firstName + " " + this.lastName + " " + age + "" + place;
    },
  };
  const person2 = {
    firstName: "Mary",
    lastName: "Doe",
  };
  
  document.getElementById("root").innerHTML = person.fullName.apply(
    person2,
    [23,
    "bangalore"]
  );
  