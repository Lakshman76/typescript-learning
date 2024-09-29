interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.kind;
}
const circle = getTrueShape({ kind: "circle", radius: 10 });
console.log(circle); // 314.1592653589793
const square = getTrueShape({ kind: "square", side: 10 });
console.log(square); // square
const rectangle = getTrueShape({ kind: "rectangle", length: 10, width: 20 });
console.log(rectangle); // rectangle

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

const area = getArea({ kind: "circle", radius: 10 });
console.log(area); // 314.1592653589793
const area2 = getArea({ kind: "square", side: 10 });
console.log(area2); // 100
const area3 = getArea({ kind: "rectangle", length: 10, width: 20 });
console.log(area3); // 200