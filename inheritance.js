
class TeamMember{
    name; 
    designation = 'Support web Dev' ;
    address;
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember {
    groupSupportTime;
    constructor(name,address,time){
        super(name,address)
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

class StudentCare extends TeamMember{
   
    buildARoutine(Student){
        console.log(this.name,"build A Routine For Student", Student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name,address,editor){
        super(name,address,editor)
        this.codeEditor = editor;
    }

    releaseApp(Version){
        console.log(this.name,"release app version", Version)
    }
}
const amir = new Support("Amir Khan ", "BD",11);
const salman = new Support("Salman Khan","IND",9);
const srk = new Support("Sharuk Khan","IND",12);
const akashy = new Support("Akash Kumar","IND",10);


const alia = new StudentCare("Alia Bhat", "Mumbai");
const ash = new NeptuneDev('Ash', 'Mumbai',"android Studio")
ash.releaseApp('1.4.5');
// console.log(amir)

