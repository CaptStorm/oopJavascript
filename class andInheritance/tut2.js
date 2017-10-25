class Vehicle {
	constructor(licenseNum){
		this.licenseNum = licenseNum;
	}
}
	
	class Drone extends Vehicle {
	}
	
	class Car extends Vehicle {
		constructor(licenseNum){
			super(licenseNum);
		}
	}
	
	let myCar = new Car ('82828CA');
	console.log(myCar.licenseNum);
