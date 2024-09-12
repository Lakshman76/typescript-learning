function addTwo(num: number) {
  return num + 2;
}

// addTwo("hello"); // --> error but if num is not number type (any) then it will works fine
addTwo(5);

function getUpper(val) {
  return val.toUpperCase();
}

// getUpper(4); // --> error but if val is not string type (any) then it will works fine
getUpper("hello");

function signUpUser(name: string, email: string, isPaid: boolean) {}

// signUpUser(1, 2, 3); // --> error
signUpUser("lakshman", "lakshman.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("lakshman", "lakshman.com");

export {};
