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
