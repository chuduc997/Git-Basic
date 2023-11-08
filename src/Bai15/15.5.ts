class Animal1 {

    speak(): void {
        console.log("Animal speak");
    }
}

class Cat1 extends Animal1 {
    
    speak(): void {
        console.log("Meow");
    }
}

class Dog extends Animal1 {

    speak(): void {
        console.log("Gâu");
    }
}

class Bird extends Animal1 {

    speak(): void {
        console.log("Chíp");
    }
}

const MyCat = new Cat1();
const myDog = new Dog();
const myBird = new Bird();

MyCat.speak();
myDog.speak();
myBird.speak();