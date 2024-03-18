
      var fruits = ["apple", "orange", "mango", "banana", "kiwi", , , ,];

      var person = {
        fname: "Ravi",
        lname: "M K",
        age: 25,
        place: "",
      };

      console.log("for of loop");

      console.log("*) Array for of Loop");

      for (var [inx, val] of fruits.entries()) {
        console.log(inx, val);
      }

      console.log("*) object for of Loop");

      //   for (var key of person) {
      //     console.log(key);
      //   }

      //   for in loop
      console.log("******************************");
      console.log("for in loop");

      //   Array for in loop
      console.log("*) Array for in loop");

      for (var items in fruits) {
        console.log(items, fruits[items]);
      }

      //   object for in loop
      console.log("*) object for in loop");

      for (var key in person) {
        console.log(key, person[key]);
      }
   
