class car {
  constructor(carname,year) {
    this.carname = carname;
    this.year = year;
  }
  details() {
return(`carname : ${this.name}`);
  }
}
let car1 = new car("BMW", 2014);

console.log(car1.details());
