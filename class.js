class Support {
    name; 
    designation = 'Support web Dev' ;
    address;
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log('start a support session')
    }
}

const amir = new Support("Amir Khan ", "BD");
const salman = new Support("Salman Khan","IND")

console.log(amir);
console.log(salman);