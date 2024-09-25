function getSearchProducts<T>(products: T[]): T {
  // Do some database operation
  const myIndex = 2;
  return products[myIndex];
}

const result = getSearchProducts<string>(["Apple", "Banana", "Orange"]);
console.log(result); // Orange

// Arrow function

const getMoreSearchproducts = <T>(products: T[]): T => {
  // Do some database operation
  const myIndex = 4;
  return products[myIndex];
};

const result2 = getMoreSearchproducts<string>([
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Watermelon",
]);
console.log(result2); // Watermelon

interface Database {
  connection: string;
  username: string;
  password: string;
}
function anotherFunction<T, U extends Database>(arg1: T, arg2: U): Object {
  return {
    arg1,
    arg2,
  };
}

const result3 = anotherFunction<number, Database>(23, {
  connection: "MongoDB",
  username: "root",
  password: "pass123",
});
console.log(result3);

class sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}