var score = 33;
score = 44;
score = "55";
var laksh = { name: "Lakshman", id: 1 };
laksh = { username: "lkr", id: 2 };
function getDbId(id) {
    console.log("Db id is ".concat(id));
}
getDbId(123);
getDbId("12345");
function getProductId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
// const data3: string[] | number[] = ["1", "2", "3", 4, 5]; //! error
var data3 = ["1", "2", "3", 4, 5];
var data4 = ["1", "2", "3", 4, 5, true, false];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"; //! not allowed
