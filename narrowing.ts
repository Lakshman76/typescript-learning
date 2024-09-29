function detectType(val: number | string) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}
detectType("hello"); // HELLO
detectType(5); // 5

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  console.log(id.toLowerCase());
}
provideId(""); // Please provide ID
provideId(null); // Please provide ID
provideId("12BSC4"); // 12bsc4

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  } else {
    console.log("lol");
  }
}

printAll("Lakshman"); // Laksh
printAll(["Laksh", "Kumar"]); // Laksh, Kumar
printAll(["Laksh", "Kumar", ""]); // Laksh, Kumar
printAll(null); // lol
printAll(""); // lol


function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
logValue(new Date()); // Thu, 26 Sep 2024 10:16:56 GMT
logValue("Laksh"); // LAKSH

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

const food = getFood({ swim: () => {} });
console.log(food); // fish food