function addTwo(num: number): number {
  // return "hello";
  return num + 2;
}

// addTwo("hello"); // --> error but if num is not number type (any) then it will works fine
let myValue = addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

// getUpper(4); // --> error but if val is not string type (any) then it will works fine
getUpper("hello");

function signUpUser(name: string, email: string, isPaid: boolean) {}

// signUpUser(1, 2, 3); // --> error
signUpUser("lakshman", "lakshman.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("lakshman", "lakshman.com");

const getHello = (str: string): string => {
  return "hello" + str;
};
getHello("world");

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

// here string is return type
heros.map((hero): string => {
  return `hero is ${hero}`;
});

// * If function is not returning anything then we should use void type
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// *The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
