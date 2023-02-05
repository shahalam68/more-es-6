const friends = ['Tom Hanks', 'Tom croues', 'Tom Brady', 'Tom Soliman'];


const fLeangth = friends.map(friend => friend.length);
console.log(fLeangth);
const products = [
    {name:'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color:'black'},
    {name: 'smart watch', price: 3000, color:'black'},
    {name: 'sticky note', price: 30, color:'pink'},
    {name: 'water glass', price: 300, color:'white'}
]
const productsName = products.map(product => product.name);
const productsPrice = products.map(product => product.price);
const productsColor = products.map(product => product.color);
console.log(productsName);
console.log(productsPrice);