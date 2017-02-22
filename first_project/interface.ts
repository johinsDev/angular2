interface Person{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let personOne:Person = {
    first_name: 'Johan',
    last_name: 'Villamil',
    twitter_account: '@johinsdev'
};

let personTwo:Person = {
    first_name: 'Johan dos',
    last_name: 'Villamil dos'
};

console.log(personOne , personTwo);

