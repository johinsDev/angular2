class Person{
    first_name : string;
    last_name : string;

    constructor(_first_name?:string, _last_name?:string){
        this.first_name = _first_name;
        this.last_name = _last_name;
    }

    getSaludo():string{
        let emojis = '(⌐■_■)';
        return `Saludos:
            ${this.first_name} ${this.last_name},
            te enviamos un emojis desde la consola
            ${emojis}
        `;
    }
}

let personaUno = new Person();
let personaDos = new Person('Johan');
let personaTres = new Person('Johan' , 'Villamil');
console.log(personaTres.getSaludo());
