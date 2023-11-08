namespace Khoi {
    export interface Shape {
        area(): number;
        perimeter(): number;
    }

    export class Circle implements Shape {
    R: number
    constructor(R: number) {
        this.R = R;
    }

    perimeter(): number {
        let D = this.R * 2
        return D * Math.PI;
    }

    area(): number {
        return ( this.R * this.R ) * Math.PI;
        }
    }   

    export class Rectangle implements Shape {
        width: number;
        length: number;

        constructor(width: number, length: number) {
            this.width = width;
            this.length = length;
        }

        perimeter(): number {
            return this.width*2 + this.length*2;
        }

        area(): number {
            return this.width * this.length;
        }
    }
}

const circle1 = new Khoi.Circle(50);
const rectangle1 = new Khoi.Rectangle(10, 20);

console.log(circle1.perimeter());
console.log(circle1.area());
console.log(rectangle1.perimeter());
console.log(rectangle1.area());
