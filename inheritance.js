class Support {
    name; 
    designation = 'Support web Dev' ;
    address;
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

class StudentCare{
    name;
    designation = 'Student care web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildARoutine(Student){
        console.log(this.name,"build A Routine For Student", Student);
    }
}

class NeptuneDev{
    name;
    designation = 'Student care web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    releaseApp(Version){
        console.log(this.name,"release app version", Version)
    }
}
const amir = new Support("Amir Khan ", "BD");
const salman = new Support("Salman Khan","IND")


const alia = new StudentCare("Alia Bhat", "Mumbai");



console.log(amir);
console.log(salman);