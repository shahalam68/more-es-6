const numbers = [5,13, 7, 41, 30,5,2,19];
const bigNumber = numbers.filter(Number => Number > 20 );
const smallNumber = numbers.filter(Number => Number < 10);
// console.log(smallNumber);
// console.log(bigNumber);

const products = [
    {name:'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color:'black'},
    {name: 'smart watch', price: 3000, color:'black'},
    {name: 'sticky note', price: 30, color:'pink'},
    {name: 'water glass', price: 300, color:'white'}
];
const expensive = products.filter(product => product.price > 100);
console.log(expensive);