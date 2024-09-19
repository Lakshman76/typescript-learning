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
// console.log(user1);
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
// console.log(user2);
// getter and setter
var newUser = /** @class */ (function () {
    function newUser(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "Delhi";
    }
    newUser.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(newUser.prototype, "getAppleEmailId", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newUser.prototype, "getCourseCount", {
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newUser.prototype, "setCourseCount", {
        set: function (courseCount) {
            if (courseCount <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseCount;
        },
        enumerable: false,
        configurable: true
    });
    return newUser;
}());
var laksh = new newUser("Lakshman", "laksh@.com");
laksh.setCourseCount = 4;
console.log(laksh.getCourseCount); // 4
// laksh.deleteToken(); //! error --> private method can't be accessed
console.log(laksh.getAppleEmailId);
