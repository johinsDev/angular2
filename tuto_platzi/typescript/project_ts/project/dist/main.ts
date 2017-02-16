import './datos';

class User{
    user: _user;

    constructor(name: string , age: number){
        this.user= {
            name: name,
            age: age
        }
        console.log(this.user);
    }
}

const u = new User('Johan' , 23);

///<refrence path="../../node_modules/@types/jquery/index.d.ts">

import * as $ from 'jquery';

class Interaction{
    constructor(){
        $('#button_1').click(() =>{
            console.log('Click me');
            $(this).css('color' , 'red');
        });
    }
}

const i = new Interaction();