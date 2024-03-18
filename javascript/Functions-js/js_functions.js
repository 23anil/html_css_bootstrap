
      // named function
      function add(a, b) {
        return a + b;
      }
      console.log(add(10, 30));

      //anonymous function
      var subs = function (a, b) {
        console.log(a - b);
      };
      subs(30, 10);

      //******** arrow function

      var milti = (a, b) => {
        return a * b;
      };
      console.log(milti(10, 4));
      // * if one line of code return will be added by js engine
      var milti = (a, b) => a * b;

      console.log(milti(10, 4));

      //if one parameter, paranthesis is optional
      // if more than one parameter (or) no parameter ,paranthesis is required
      var milti = (name) => console.log(`goodmorning,${name}`);

      milti("anil");

      //IIFE => Immediately invoked function expression
      (function (a, b) {
        console.log(a / b);
      })(10, 2);

      (function (a, b) {
        console.log(a / b);
      })(100, 2);

      (function (a, b) {
        console.log(a / b);
      })(150, 2);

      console.log("***************************");

      //Nested Function
      function square(num) {
        console.log("num", num);
        return function () {
          console.log("square", num * num);
          return function (name) {
            console.log(`Name is: ${name}`);
          };
        };
      }
      //the way of calling the above function is called as =>function curring
      square(5)()("King");

      console.log("============================");
      function square01(num) {
        console.log("num", num);
        function multi() {
          console.log("square", num * num);
          function raju(name) {
            console.log(`Name is: ${name}`);
          }
          raju("king");
        }
        multi();
      }
      square01(5);

      //call back function
      // example-01
      function test(callback) {
        console.log("Test Executed");
        callback();
      }
      function Sample() {
        console.log("Sample Executed");
      }
      function Sample01() {
        console.log("Sample01 Executed");
      }
      test(Sample);
      test(Sample01);

      // example-02
      function login(name) {
        alert(`GoodMorning,    ${name}`);
      }
      function logout(name) {
        alert(`GoodEvening,  ${name}`);
      }

      function entry(callback) {
        var name = prompt(`please enter your name`);
        callback(name);
      }
      entry(login);
      entry(logout);
    