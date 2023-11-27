
      var a = "10";
      var num = 10;
      //   if (a == num) {
      //     console.log("equal");
      //   } else {
      //     console.log("not equal");
      //   }

      //    if (a === num) {
      //     console.log("equal");
      //   } else {
      //     console.log("not equal");
      //   }

      //   var age = 18;
      //   if (age >= 18) {
      //     console.log("eligibal for vote");
      //   } else {
      //     console.log("not eligibal for vote");
      //   }

      //   age >= 18
      //     ? console.log("eligibal for vote")
      //     : console.log("not eligibal for vote");

      console.log("**************************************");

      var heigth = 1.2;
      var weight = 40;

      var bmi = weight / Math.pow(heigth, 2);
      console.log(bmi);

      bmi < 18.5
        ? console.log("underweight")
        : bmi >= 18.5 && bmi <= 24.9
        ? console.log("normal")
        : bmi >= 25 && bmi <= 29.9
        ? console.log("overwight")
        : bmi >= 30 && bmi <= 34.9
        ? console.log("obese"):
         console.log("extremely obese");
      

