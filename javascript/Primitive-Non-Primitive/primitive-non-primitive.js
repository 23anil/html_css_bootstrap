
      // primitive data types

      var god = "rama";
      console.log("god", god);
      console.log("god", typeof god);
      console.log("********************");

      var age;
      console.log("age", age);
      console.log("age", typeof age);
      console.log("----------------------");

      let names = 10;
      console.log("names", names);
      console.log();
      console.log("*********----------*******");

      var married = true;
      console.log("married", married);
      console.log();
      console.log("----------------------");

      var fans = null;
      console.log(fans);
      console.log("fans", typeof fans);
      console.log("********************");

      // non primitive data types
      // array
      var array = [
        "guna",
        23,
        null,
        undefined,
        false,
        ["ramu", 28, married, true],
      ];
      console.log(array);

      console.log("----------------------");

      // without use new keyword object created

      var person_Details = {
        pname: "hanuma",
        page: 25,
        address: function () {
          console.log(person_Details.pname, this.page);
        },
      };
      person_Details.address();
      console.log("address", person_Details);
      console.log("///////////////////////////////");
      // with use new keyword object created

      var person_Details01 = new Object();
      person_Details01.fname = "krishna";

      console.log(person_Details01.fname);