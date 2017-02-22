class Person{
    firs_name : string;
    last_name : string;
    twitter_user : string;

    constructor(){
        this.firs_name = 'Johan';
        this.last_name =  'Villamil';
        this.twitter_user = '@johinsdev';
    }

    setLastNameAttribute(last_name:string){
        this.last_name = last_name;
    }
}
//Shape se pueden instaciar variables
//siempre y cuando no sea privada
//aparte dice que tipo de objeto no dice object si no digamos en este caso
//Person
var myPerson = new Person();
myPerson.setLastNameAttribute('Gaitan');
myPerson.firs_name = 'Armando';

console.log(myPerson);