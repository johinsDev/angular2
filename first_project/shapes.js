var Person = (function () {
    function Person() {
        this.firs_name = 'Johan';
        this.last_name = 'Villamil';
        this.twitter_user = '@johinsdev';
    }
    Person.prototype.setLastNameAttribute = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
//Shape se pueden instaciar variables
//siempre y cuando no sea privada
//aparte dice que tipo de objeto no dice object si no digamos en este caso
//Person
var myPerson = new Person();
myPerson.setLastNameAttribute('Gaitan');
myPerson.firs_name = 'Armando';
console.log(myPerson);
//# sourceMappingURL=shapes.js.map