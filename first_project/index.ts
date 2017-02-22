console.log('Hola Mundo');

//primitas

var full_name:string = 'Johan Armando';
var age:number = 27;
var developer:boolean = true;

//arrays
var skills:Array<string> = ['Johan' , 'Armando'];
var numberArry:number[] = [123 , 123 , 12];

enum Role { Employee , Manager ,Admin, Developer }
var role:Role = Role.Admin;

console.log('Roles' , role);

function setName(name:string):void{
    this.full_name = name;
}

function getName(pretext:string):string{
    return pretext + " " + this.full_name;
}
function inConsole(nameFunctio:any):void{
    console.log(nameFunctio);
}

inConsole(getName('Texto dentro del get name'));
inConsole(full_name);

var data:string[] = ['Angular' , 'Rect', 'Vue' , 'Jquery', 'Js'];

data.forEach((frameworks) => this.inConsole(frameworks));