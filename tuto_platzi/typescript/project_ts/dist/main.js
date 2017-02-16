"use strict";
require("./datos");
var User = (function () {
    function User(name, age) {
        this.user = {
            name: name,
            age: age
        };
        console.log(this.user);
    }
    return User;
}());
var u = new User('Johan', 23);
///<refrence path="../../node_modules/@types/jquery/index.d.ts">
var $ = require("jquery");
var Interaction = (function () {
    function Interaction() {
        var _this = this;
        $('#button_1').click(function () {
            console.log('Click me');
            $(_this).css('color', 'red');
        });
    }
    return Interaction;
}());
var i = new Interaction();
//# sourceMappingURL=main.js.map