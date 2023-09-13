const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['caramo']
];

// ts inferencing during array access
const car = carMakers[0];
const myCar = carMakers.pop();

// using map on arrays
carMakers.map((car: string): string => {
    return car.toUpperCase();
});
// similarly we can get help with 'forEach' and 'reduce' functions

// arrays can have multiple types
const importantDates: (Date|string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); // error