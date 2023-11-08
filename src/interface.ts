namespace Tranportation {
    export interface Runable {
        run(): string
    }

    abstract class Vehicle {
        public abstract drive(): string;

    }

    export interface Stopable {
        stop(): string
    }

    export class Bike extends Vehicle implements Stopable, Runable {
            run(): string {
                return "Run by bike"
        }

        public drive(): string {
            return "Drive by Bike"
        }

        stop(): string {
            return "Stop"
        }
    }

    export class Car extends Vehicle implements Runable {
        run(): string {
            return "Run by car"
        }

        public drive(): string {
            return "Drive by Car"
        }

        stop(): string {
            return "Stop"
        }

    }
}



const bike: Tranportation.Bike = new Tranportation.Bike;
const car: Tranportation.Car = new Tranportation.Car;

console.log(bike.run());
console.log(car.run());
console.log(car.drive());
console.log(bike.drive());
console.log(bike.stop());
console.log(car.stop());

