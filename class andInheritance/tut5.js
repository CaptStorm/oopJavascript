class Vehicle {
    start() {
        console.log("starting your engine");
    }
    static getCompanyName() {
        console.log("your car!");
    }
}

class Car extends Vehicle {
    start() {
        super.start();
        console.log("starting your car");
    }
      static getCompanyName() {
        console.log("your other car!");
    }
}

let toyota = new Car();
toyota.getCompanyName;
