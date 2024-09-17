let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let laksh: User | Admin = { name: "Lakshman", id: 1 };
laksh = { username: "lkr", id: 2 };

function getDbId(id: number | string) {
  console.log(`Db id is ${id}`);
}
getDbId(123);
getDbId("12345");

function getProductId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

// const data3: string[] | number[] = ["1", "2", "3", 4, 5]; //! error
const data3: (string | number)[] = ["1", "2", "3", 4, 5];

const data4: (string | number | boolean)[] = ["1", "2", "3", 4, 5, true, false];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew"; //! not allowed
