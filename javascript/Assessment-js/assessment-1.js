
      // data types
      console.log("1) data types in javaScript with Examples");
      // Number data type
      var number = 12.3;
      console.log(number);
      console.log(typeof number);
      console.log("*****************************");
      // String data type
      var string = "Good Morning";
      console.log(string);
      console.log(typeof string);
      console.log("*****************************");
      // Boolean data type
      var boolean = false;
      console.log(boolean);
      console.log(typeof boolean);
      console.log("*****************************");
      // undefined data type
      var undefined;
      console.log(undefined);
      console.log(typeof undefined);
      console.log("*****************************");
      // null data type
      var null01 = null;
      console.log(null01);
      console.log(typeof null01);
      console.log("*****************************");

      // symbol data type
      var symbol = Symbol("hello");
      console.log(symbol);
      console.log(typeof symbol);
      console.log("*****************************");
      // Bigint data type
      var bigint = BigInt(12355864864785247752485);
      console.log(bigint);
      console.log(typeof bigint);
      console.log("*****************************");

      //   Object create without useing New keyword

      var person = {
        p_name: "raju",
        p_age: 25,

        details: function () {
          p_phno = 8747036362;
          P_gender = "male";
          console.log(
            "person-name=" + person.p_name,
            "person-age=" + person.p_age,
            "person-phno=" + p_phno,
            "person-gender=" + P_gender
          );
        },
      };
      person.details();

      console.log("*****************************");
      var student01 = {
        s_name: "Lohith",
        s_age: 25,
        s_phno : 8747036362,
        s_gender : "male",
        details: function () {
        
          console.log(
            "student-name= " + student01.s_name,
            "student-age= " + student01.s_age,
            "student-phno= " + student01.s_phno,
            "student-gender= " + student01.s_gender
          );
        },
      };
     student01.details();
    

      console.log("********----------------********");

      var employee = {
        e_age: 35,
        age: function () {
          return employee.e_age;
        },
      };
      console.log(employee.age());

      console.log("********----------------********");
      //   Object create with useing New keyword
      // function person(name,age){
      // this.name=name;
      // this.age=age;
      // }

      // var person01=new person("ramu",25);

      // console.log(person01.name);
      // console.log(person01.age);

      //   function person(name, age) {
      //     return this.name, this.age;

      //     var employee = new person("krishna", 25);
      //   }
      //   console.log(person());

      // var employee =new Object();

      //   function MyObject(age, oldAge) {
      // age: this.age;
      // oldAge: this.oldAge;
      // console.log("Hello, I'm a function inside an object!");
      //     return age - oldAge;
      //   }

      //   let newObj = new MyObject(25, 15);
      //   console.log(newObj.age);
      //   console.log(MyObject(25, 15));
      // Call the function inside newObj

      var person = new Object();
      person.fname = "ramu";
      person.lanme = "j";
      person.fullname = function () {
        return this.fname + " " + person.lanme;
      };
      console.log("firstname= " + person.fname);
      console.log("lastname= " + person.lname);
      console.log("fullname= " + person.fullname());

      console.log("********************");
      var employee = new Object();
      employee.fname = "punith";
      employee.lanme = "K S";
      (employee.id = "E123"),
        (employee.fullname = function () {
          return this.fname + " " + employee.lanme + " " + this.id;
        });
      console.log("firstname= " + employee.fname);
      console.log("lastname= " + employee.lname);
      console.log("Id=" + employee.id);
      console.log("fullname= " + employee.fullname());

      console.log("********************");
      var student = new Object();
      student.fname = "Ravi";
      student.lanme = "M K";
      (student.id = "S123"),
        (student.fullname = function () {
          return this.fname + " " + student.lanme + " " + this.id;
        });
      console.log("firstname= " + student.fname);
      console.log("lastname= " + student.lname);
      console.log("Id=" + student.id);
      console.log("fullname= " + student.fullname());
  
