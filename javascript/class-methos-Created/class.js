class car {
  carname;
  year;
  constructor(carname) {
    this.carname = carname;
  }

  details() {
 console.log( carname,year);
  }
}
let car1 = new car("BMW", 2014);

car1.details();
