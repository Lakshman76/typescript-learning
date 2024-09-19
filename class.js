"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            // cannot use any one of the return type
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
console.log(laksh.getAppleEmailId); // applelaksh@.com
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCity = function () {
        this.city = "Mumbai";
    };
    return SubUser;
}(newUser));
var subUser = new SubUser("Lakshman kr", "laksh12@google.com");
subUser.changeCity();
// console.log(subLaksh.city); //! error --> protected property also can't be accessed
console.log(subUser);
