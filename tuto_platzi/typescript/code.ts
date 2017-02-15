let x: number = 3;
let s: string = 'Hola';
let a: any [];

interface User{
    name: string,
    age: number,
    date: string
}

let user_1: User = {
    name: 'Johan',
    age: 23,
    date: '02/02/94'
};

class UserAdd{
    users: User[];
    add(user: User){
        this.users.push(user);
    }
    get(){
        console.log(this.users);
    }
}

let user = new UserAdd();
user.add(user_1);
user.get();