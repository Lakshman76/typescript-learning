"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Welcome! Lakshman";
// number 
var myNum;
// myNum = "123" ---> this is wrong
myNum = 123;
//Note - 
var myId = 23; // it also detect that myId is a number type
// myId = "hello";  ---> this also gives error
// Boolean
var isLoggedIn = false;
isLoggedIn.valueOf(); // false
// any --> Don't use any 
var hero; // by default it is "any" type
function getHero() {
    // ...
    return "thor";
}
hero = getHero();
console.log(hero);
