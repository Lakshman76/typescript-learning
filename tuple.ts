// let user: (string | number)[] = ["lakshman", 23];
// user = [23, "lakshman"];

let user: [string, number, boolean];

// user = [2, true, "lakshman"]; //! error --> assign value in order
user = ["lakshman", 23, true];

type User = [number, string];

const newUser: User = [23, "lakshman"];
newUser[1] = "laksh";
newUser[0] = 1;

// newUser = ["laksh", 12]; //! error --> assign value in order

newUser.push("hello");
newUser.push(12);

console.log(newUser); // [1, "laksh", "hello", 12]
