function displayValue(value: number | string): void {
    console.log(value);
}

displayValue(42);
displayValue("Hello");

let numbers: number[] = [1, 2, 3, 5, 8, 10];

let numbers2: Array<number> = [7, 9, 11, 13, 0];

numbers.push(4);

numbers.pop();

numbers.unshift(99);

numbers.shift();

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach((number) => {
    console.log(number);
});

for (let number of numbers2) {
    console.log(number);
}