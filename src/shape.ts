abstract class Shape {
    abstract getArea(): number;

    print() {
        console.log("Print something");
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea(): number {
        let p: number = ( this.a + this.b + this.c ) / 2;
        return Math.sqrt( p * ( p - this.a ) * ( p - this.b ) * ( p - this.c ));
    }

    print() {
        console.log("Hello");
    }
}

const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4, 5);

console.log(rectangle.getArea());
console.log(triangle.getArea());

console.log(triangle.print());