interface Employee {
    name: string;
    salary: number;
    word(): void;
}

class Manager implements Employee {
    name: string;
    salary: number;
    
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    word(): void {
        console.log(`${this.name} is the manager, who's managing the team with salary ${this.salary} dollars.`)
    }
}

class Developer implements Employee {
    name: string;
    salary: number;
    
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    word(): void {
        console.log(`${this.name} is the developer, who's coding and developing software with salary ${this.salary} dollars.`)
    }
}

const quyet = new Manager("Quyết", 10000);
const Duc = new Developer("Đức", 2200);

quyet.word();
Duc.word();