

const doubleIt = number => number * 2;
const numbers = [4,6,8,10];
const output2 = [];
for(const number of numbers){
    const result = doubleIt(number);
    output2.push(result);
}

// function duobleItOld(number){   
//     return number * 2 ;
// }

// console.log(output2); 




const output = numbers.map(doubleIt);
console.log(output);
 const squares = numbers.map(x => x * x);
 console.log(squares);