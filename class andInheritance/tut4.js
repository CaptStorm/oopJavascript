class Vehicle {
    start() {
        console.log("starting your engine");
    }
}

class Car extends Vehicle {
    start() {
        super.start();
        console.log("starting your car");
    }
}

let toyota = new Car();
toyota.start();
