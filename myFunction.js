"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return "hello";
    return num + 2;
}
// addTwo("hello"); // --> error but if num is not number type (any) then it will works fine
var myValue = addTwo(5);
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
var getHello = function (str) {
    return "hello" + str;
};
getHello("world");
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
// here string is return type
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// * If function is not returning anything then we should use void type
function consoleError(errmsg) {
    console.log(errmsg);
}
// *The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handleError(errmsg) {
    throw new Error(errmsg);
}
