"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User1 = /** @class */ (function () {
    function User1(name, email) {
        this._id = "12345";
        this.name = name;
        this.email = email;
    }
    return User1;
}());
var user1 = new User1("Lakshman", "laksh@google.com");
console.log(user1);
var User2 = /** @class */ (function () {
    function User2(name, email, userId) {
        this.name = name;
        this.userId = userId;
        this._id = "12345";
        name = name;
        email = email;
        this._id = userId;
    }
    return User2;
}());
var user2 = new User2("Lakshman", "laksh@google.com", "123");
console.log(user2);
