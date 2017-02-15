var x = 3;
var s = 'Hola';
var a;
var user_1 = {
    name: 'Johan',
    age: 23,
    date: '02/02/94'
};
var UserAdd = (function () {
    function UserAdd() {
    }
    UserAdd.prototype.add = function (user) {
        this.users.push(user);
    };
    UserAdd.prototype.get = function () {
        console.log(this.users);
    };
    return UserAdd;
}());
var user = new UserAdd();
user.add(user_1);
user.get();
