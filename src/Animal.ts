class Animal {

    makeSound() {
        console.log("Some generic sound");
    }
}

class Cat extends Animal {
    constructor(public name: string) {
        super();
    }

    makeSound() {
        super.makeSound();
        console.log("Meow");
    }
}

const myCat = new Cat("Whisker");

myCat.makeSound();
console.log(myCat.name)
