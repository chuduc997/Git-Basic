class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    studentID: number;

    constructor(name: string, age: number, studentID: number) {
        super(name, age);
        this.studentID = studentID;
    }

    study(subject: string): void {
        console.log(`I'm ${this.name} (StudentID: ${this.studentID}) and I'm studying ${subject}`)
    }
}

const duc = new Person("Đức", 26,);
const long = new Person("Long", 22,);

const sang = new Student("Sang", 25, 123456);
const phuong = new Student("Phương", 27, 678910);


duc.introduce();
long.introduce();

sang.study("Physics");
phuong.study("Math");