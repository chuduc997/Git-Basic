abstract class Vehicle {
    abstract make: string;
    abstract model: string;
    abstract start(): string;   
}

class Car extends Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        super();
        this.make = make;
        this.model = model;
    }

    start(): string{ 
        return "Start by Car";
    }
}

class Bicycle extends Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        super();
        this.make = make;
        this.model = model;
    }

    start(): string {
        return "Start by Bicycle";
    }
}

const car1 = new Car("Vios", "Toyota");
const bicycle = new Bicycle("CX-9","BMW")

console.log(car1.start())
console.log(bicycle.start())

console.log(car1);
console.log(bicycle);