class Vehicle {
    constructor() {
        console.log("this is class Vehicle");
    }
}
class Drone extends Vehicle {

}

class Car extends Vehicle {
    
//if you need to use a constructor in sub class always use super()
//if you do not need a constructor in parent class, always add super() in class dependent
  
    constructor() {
        super();
        console.log("This is your car");
    }
}



let honda = new Car("honda");
console.log(honda);

//output
"this is class Vehicle"
"This is your car"
[object Object] { ... }
