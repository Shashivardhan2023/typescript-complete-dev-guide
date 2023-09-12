const apples: number = 5;
const text: string = 'hello';

let undef: undefined = undefined;
let now: Date = new Date(); // built in object
let nul: null = null;

console.log(nul);

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truth_values: boolean[] = [true, false];

// Classes
class Car{};
let car: Car = new Car();

// Object literal
let point: {x: number, y: number} = {
    x: 10,
    y: 20
};
console.log(point);

// Functions
let f: (i: number) => void = (i: number) => {
    console.log('hello', i);
};

// When to use annotations
// 1) returning 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

console.log(JSON.parse('{"key": "false"}'));
// 2) delayed initialisation
let foundWord: boolean;
foundWord = true;
// foundWord = 'lakdj'; // Error
// 3) variable whose type can't be inferred
let numbersArray = [-10, -1, 12];
let numberAboveZero: boolean|number = false;
for(let i=0; i<numbersArray.length;i++){
    if(numbersArray[i] > 0){
        numberAboveZero = numbersArray[i];
    }
}