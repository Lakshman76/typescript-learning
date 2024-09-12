"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// addTwo("hello"); // --> error but if num is not number type (any) then it will works fine
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(4); // --> error but if val is not string type (any) then it will works fine
getUpper("hello");
function signUpUser(name, email, isPaid) { }
// signUpUser(1, 2, 3); // --> error
signUpUser("lakshman", "lakshman.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("lakshman", "lakshman.com");
