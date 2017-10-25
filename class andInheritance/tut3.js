class Vehicle {
  constructor (){
    this.gpsEnabled = true;
    this.wheels = 4
  }
}

class Drone extends Vehicle {
  
}

class Car extends Vehicle {
  constructor(){
    super();
    this.gpsEnabled = false;
  }
}

let honda = new Car();
console.log(honda.gpsEnabled);
console.log(honda.wheels);
