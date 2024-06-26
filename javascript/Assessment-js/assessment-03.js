
 
    //  1) Five examples using for of loop,for in loop - Array And objects
    console.log(
      "1) Five examples using for of loop,for in loop - Array And objects"
    );

    var person = [
      "Raghu",
      23,
      null,
      undefined,
      BigInt(857741484514752),
      Symbol("hello"),
    ];
    var student = [
      "Ramu",
      25,
      null,
      undefined,
      BigInt(857741484514752),
      Symbol("hii"),
    ];
    var employee = [
      "Raju",
      28,
      null,
      undefined,
      BigInt(857741484514752),
      Symbol("bye"),
    ];
    var Hrs = [
      "Kumar",
      35,
      null,
      undefined,
      BigInt(857741484514752),
      Symbol("welcome"),
    ];
    var Staff = [
      "Ravi",
      21,
      null,
      undefined,
      BigInt(857741484514752),
      Symbol("goodmorning"),
    ];

    var person01 = {
      name: "Krishna",
      age: 25,
      married: undefined,
    };

    var student01 = {
      name: "Usha",
      age: 23,
      married: undefined,
    };

    var employee01 = {
      name: "Beema",
      age: 28,
      married: undefined,
    };

    var Hrs01 = {
      name: "lohith",
      age: 35,
      married: undefined,
    };

    var Staff01 = {
      name: "manju",
      age: 31,
      married: undefined,
    };

    console.log("*) for of loop array");

    for (var p1 of person) {
      console.log(p1);
    }
    for (var s1 of student) {
      console.log(s1);
    }
    for (var e1 of employee) {
      console.log(e1);
    }
    for (var h1 of Hrs) {
      console.log(h1);
    }
    for (var s1 of Staff) {
      console.log(s1);
    }

    console.log("*) for of loop objects");

    // for(var p1 of person01){
    //     console.log(p1);
    // }
    // for(var s1 of student01){
    //     console.log(s1);
    // }
    // for(var e1 of employee01){
    //     console.log(e1);
    // }
    // for(var h1 of Hrs01){
    //     console.log(h1);
    // }
    // for(var s1 of Staff01){
    //     console.log(s1);
    // }

    console.log("*) for in loop array");

    for (var p1 in person) {
      console.log(p1, person[p1]);
    }
    for (var s1 in student) {
      console.log(s1, student[s1]);
    }
    for (var e1 in employee) {
      console.log(e1, employee[e1]);
    }
    for (var h1 in Hrs) {
      console.log(h1, Hrs[h1]);
    }
    for (var s1 in Staff) {
      console.log(s1, Staff[s1]);
    }

    console.log("*) for in loop objects");

    for (var p1 in person01) {
      console.log(p1, person01[p1]);
    }
    for (var s1 in student01) {
      console.log(s1, student01[s1]);
    }
    for (var e1 in employee01) {
      console.log(e1, employee01[e1]);
    }
    for (var h1 in Hrs01) {
      console.log(h1, Hrs01[h1]);
    }
    for (var s1 in Staff01) {
      console.log(s1, Staff01[s1]);
    }

    //   2) wap to find prime number or not using four ways of functions

    console.log(
      "2) wap to find prime number or not using four ways of functions"
    );

    console.log("*) Named function");
    function primeNumber(num) {
      var count = 0;
      for (var i = 2; i < num; i++) {
        if (num % i == 0) {
          count++;
        }
      }
      if (count === 0) {
        console.log("prime number");
      } else {
        console.log("Not prime number");
      }
    }
    primeNumber(13);

    console.log("*) Anonymous function");

    var primeNumber_01 = function (num) {
      var count = 0;
      for (var i = 2; i < num; i++) {
        if (num % i == 0) {
          count++;
        }
      }
      if (count === 0) {
        console.log("prime number");
      } else {
        console.log("Not prime number");
      }
    };
    primeNumber_01(19);

    console.log("*) Arrow function");

    var primeNumber_02 = (num) => {
      var count = 0;
      for (var i = 2; i < num; i++) {
        if (num % i == 0) {
          count++;
        }
      }
      if (count === 0) {
        console.log("prime number");
      } else {
        console.log("Not prime number");
      }
    };
    primeNumber_02(15);

    console.log("*) IIFE function");
    (function (num) {
      var count = 0;
      for (var i = 2; i < num; i++) {
        if (num % i == 0) {
          count++;
        }
      }
      if (count === 0) {
        console.log("prime number");
      } else {
        console.log("Not prime number");
      }
    })(11);

    //  3) wap to find Bubble sort using four ways of functions
    console.log("3) wap to find Bubble sort using four ways of functions");

    console.log("*) Named function");

    var Bs = [1, 2, 8, 5, 6, 7, 9, 10, 4, 3];

    function Bubble_Sort(array01) {
      for (var i = 0; i < array01.length; i++) {
        for (var j = 0; j < array01.length - i - 1; j++) {
          if (array01[j] > array01[j + 1]) {
            var temp = array01[j];
            array01[j] = array01[j + 1];
            array01[j + 1] = temp;
          }
        }
      }
      console.log(array01);
    }
    Bubble_Sort(Bs);

    console.log("*) Anonymous function");

    var Bs = [1, 2, 11, 15, 6, 7, 9, 10, 4, 3];

    var Bubble_Sort01 = function (array01) {
      for (var i = 0; i < array01.length; i++) {
        for (var j = 0; j < array01.length - i - 1; j++) {
          if (array01[j] > array01[j + 1]) {
            var temp = array01[j];
            array01[j] = array01[j + 1];
            array01[j + 1] = temp;
          }
        }
      }
      console.log(array01);
    };
    Bubble_Sort01(Bs);

    console.log("*) Arrow function");

    var Bs = [1, 2, 11, 15, 6, 7, 9, 10, 4, 25, 0, -1];

    var Bubble_Sort02 = (array01) => {
      for (var i = 0; i < array01.length; i++) {
        for (var j = 0; j < array01.length - i - 1; j++) {
          if (array01[j] > array01[j + 1]) {
            var temp = array01[j];
            array01[j] = array01[j + 1];
            array01[j + 1] = temp;
          }
        }
      }
      console.log(array01);
    };
    Bubble_Sort02(Bs);

    console.log("*) IIFE function");

    var Bs = [1, 2, 11, 15, 6, 7, 55, 9, 10, 4, 25, 0, -1, -2];
    (function (array01) {
      for (var i = 0; i < array01.length; i++) {
        for (var j = 0; j < array01.length - i - 1; j++) {
          if (array01[j] > array01[j + 1]) {
            var temp = array01[j];
            array01[j] = array01[j + 1];
            array01[j + 1] = temp;
          }
        }
      }
      console.log(array01);
    })(Bs);

    //  3) wap to reverse string using four ways of functions
    console.log("3) wap to reverse string using four ways of functions");
    console.log("*) Named function");

    function ReverseString(str) {
      console.log(str);
      var str1 = "";

      for (var i = str.length - 1; i >= 0; i--) {
        str1 = str1 + str.charAt(i);
      }
      console.log(str1);
    }
    ReverseString("GoodMorning");

    console.log("*) Anonymous function");

    var ReverseString01 = function (str) {
      console.log(str);
      var str1 = "";

      for (var i = str.length - 1; i >= 0; i--) {
        str1 = str1 + str.charAt(i);
      }
      console.log(str1);
    };
    ReverseString01("GoodAfternoon");

    console.log("*) Arrow function");

    var ReverseString02 = (str) => {
      console.log(str);
      var str1 = "";

      for (var i = str.length - 1; i >= 0; i--) {
        str1 = str1 + str.charAt(i);
      }
      console.log(str1);
    };
    ReverseString02("GoodEvening");

    console.log("*) IIFE function");
    (function (str) {
      console.log(str);
      var str1 = "";

      for (var i = str.length - 1; i >= 0; i--) {
        str1 = str1 + str.charAt(i);
      }
      console.log(str1);
    })("Good Day");

    //  4) wap to Second largest  using four ways of functions
    console.log("4) wap to Second largest  using four ways of functions");

    console.log("*) Named function");

    var ay = [10, 2, 3, 45, 16, 55];

    function SecondLargest(array) {
      var firstLarge = array[0];
      var secondLarge = array[0];
      for (var i = 0; i < array.length; i++) {
        if (array[i] > firstLarge) {
          secondLarge = firstLarge;
          firstLarge = array[i];
        }
        if (array[i] < firstLarge && array[i] > secondLarge) {
          secondLarge = array[i];
        }
      }
      console.log("secondLarge : " + secondLarge);
    }
    SecondLargest(ay);

    console.log("*) Anonymous function");

    var ay = [10, 2, 3, 45, 16, 55, 66, 77];

    var SecondLargest01 = function (array) {
      var firstLarge = array[0];
      var secondLarge = array[0];
      for (var i = 0; i < array.length; i++) {
        if (array[i] > firstLarge) {
          secondLarge = firstLarge;
          firstLarge = array[i];
        }
        if (array[i] < firstLarge && array[i] > secondLarge) {
          secondLarge = array[i];
        }
      }
      console.log("secondLarge : " + secondLarge);
    };
    SecondLargest01(ay);

    console.log("*) Arrow function");

    var ay = [10, 2, 3, 45, 16, 55, 65, 73, 88];

    var SecondLargest01 = (array) => {
      var firstLarge = array[0];
      var secondLarge = array[0];
      for (var i = 0; i < array.length; i++) {
        if (array[i] > firstLarge) {
          secondLarge = firstLarge;
          firstLarge = array[i];
        }
        if (array[i] < firstLarge && array[i] > secondLarge) {
          secondLarge = array[i];
        }
      }
      console.log("secondLarge : " + secondLarge);
    };
    SecondLargest01(ay);

    console.log("*) IIFE function");

    var array = [10, 2, 3, 45, 69, 96, 98];
    (function () {
      var firstLarge = array[0];
      var secondLarge = array[0];
      for (var i = 0; i < array.length; i++) {
        if (array[i] > firstLarge) {
          secondLarge = firstLarge;
          firstLarge = array[i];
        }
        if (array[i] < firstLarge && array[i] > secondLarge) {
          secondLarge = array[i];
        }
      }
      console.log("secondLarge : " + secondLarge);
    })(array);

    //  5) wap to factorial of number using four ways of functions
    console.log(
      "5) wap to  factorial of number using four ways of functions"
    );

    console.log("*) Named function");

    function factorial(fact) {
      var fact01 = 1;
      for (var i = 1; i <= fact; i++) {
        fact01 *= i;
      }
      console.log(fact01);
    }
    factorial(5);

    console.log("*)Anonymous  function");

    var factorial = function (fact) {
      var fact01 = 1;
      for (var i = 1; i <= fact; i++) {
        fact01 *= i;
      }
      console.log(fact01);
    };
    factorial(7);

    console.log("*)Arrow  function");

    var factorial = (fact) => {
      var fact01 = 1;
      for (var i = 1; i <= fact; i++) {
        fact01 *= i;
      }
      console.log(fact01);
    };
    factorial(6);

    console.log("*)IIFE  function");
    (function (fact) {
      var fact01 = 1;
      for (var i = 1; i <= fact; i++) {
        fact01 *= i;
      }
      console.log(fact01);
    })(4);

    //  6) wap to fibonacci series using four ways of functions
    console.log("6) wap to fibonacci series using four ways of functions");

    console.log("*)Named  function");

    function fibonacci(fib) {
      var f1 = 0;
      var f2 = 1;
      console.log(f1);
      console.log(f2);
      var f3;
      for (var i = 2; i <= fib; i++) {
        f3 = f1 + f2;
        console.log(f3);
        f1 = f2;
        f2 = f3;
      }
    }
    fibonacci(10);

    console.log("*)Anonymous  function");

    var fibonacci = function (fib) {
      var f1 = 0;
      var f2 = 1;
      console.log(f1);
      console.log(f2);
      var f3;
      for (var i = 2; i <= fib; i++) {
        f3 = f1 + f2;
        console.log(f3);
        f1 = f2;
        f2 = f3;
      }
    };
    fibonacci(8);

    console.log("*)Arrow  function");

    var fibonacci = (fib) => {
      var f1 = 0;
      var f2 = 1;
      console.log(f1);
      console.log(f2);
      var f3;
      for (var i = 2; i <= fib; i++) {
        f3 = f1 + f2;
        console.log(f3);
        f1 = f2;
        f2 = f3;
      }
    };
    fibonacci(12);

    console.log("*)IIFE  function");
    (function (fib) {
      var f1 = 0;
      var f2 = 1;
      console.log(f1);
      console.log(f2);
      var f3;
      for (var i = 2; i <= fib; i++) {
        f3 = f1 + f2;
        console.log(f3);
        f1 = f2;
        f2 = f3;
      }
    })(9);
 