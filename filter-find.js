const numbers = [5,13, 7, 41, 30,5,2,19];
const bigNumber = numbers.filter(Number => Number > 20 );
const smallNumber = numbers.filter(Number => Number < 10);
console.log(smallNumber);
console.log(bigNumber);
