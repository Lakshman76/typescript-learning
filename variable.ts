let greetings: string = "Welcome! Lakshman";

// number

let myNum: number;

// myNum = "123" ---> this is wrong
myNum = 123;

//Note -
let myId = 23; // it also detect that myId is a number type
// myId = "hello";  ---> this also gives error

// Boolean

let isLoggedIn: boolean = false;
isLoggedIn.valueOf(); // false

// any --> Don't use any

let hero; // by default it is "any" type

function getHero() {
  // ...
  return "thor";
}

hero = getHero();

export {};
