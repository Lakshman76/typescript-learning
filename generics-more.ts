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
