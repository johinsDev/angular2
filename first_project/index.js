var _this = this;
console.log('Hola Mundo');
//primitas
var full_name = 'Johan Armando';
var age = 27;
var developer = true;
//arrays
var skills = ['Johan', 'Armando'];
var numberArry = [123, 123, 12];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
var role = Role.Admin;
console.log('Roles', role);
function setName(name) {
    this.full_name = name;
}
function getName(pretext) {
    return pretext + " " + this.full_name;
}
function inConsole(nameFunctio) {
    console.log(nameFunctio);
}
inConsole(getName('Texto dentro del get name'));
inConsole(full_name);
var data = ['Angular', 'Rect', 'Vue', 'Jquery', 'Js'];
data.forEach(function (frameworks) { return _this.inConsole(frameworks); });
//# sourceMappingURL=index.js.map