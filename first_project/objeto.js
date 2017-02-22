var Person = (function () {
    function Person(_first_name, _last_name) {
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    Person.prototype.getSaludo = function () {
        var emojis = '(⌐■_■)';
        return "Saludos:\n            " + this.first_name + " " + this.last_name + ",\n            te enviamos un emojis desde la consola\n            " + emojis + "\n        ";
    };
    return Person;
}());
var personaUno = new Person();
var personaDos = new Person('Johan');
var personaTres = new Person('Johan', 'Villamil');
console.log(personaTres.getSaludo());
//# sourceMappingURL=objeto.js.map