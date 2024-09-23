const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
console.log(identityOne(5)); // 5

function identityTwo(val: any): any {
  return val;
}
console.log(identityTwo("hello")); // hello

function identityThree<Type>(val: Type): Type {
  return val;
}
console.log(identityThree("hello")); // hello
console.log(identityThree(5)); // 5

function identityFour<Type>(val: Type): Type {
  return val;
}

interface Person {
  name: string;
  age: number;
}

identityFour<Person>({ name: "laksh", age: 20 });
