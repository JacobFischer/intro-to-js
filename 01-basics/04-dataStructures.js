// now let's create an array
const array = [ 3, 4, 5 ];

array[100] = 0;

for(var i = 0; i < array.length; i++) {
    console.log("a[" + i + "] =", array[i]);
}

// or do it the same way using `of`
for (const element of array) {
    console.log(element);
}

a.push(7);

console.log("what is at the end?", a[a.length - 1]);

a.pop();

console.log("how about now?", a[a.length - 1]);

// now let's use an object
const point = {
    x: 4,
    y: 5,
};

console.log("point:", point.x, point.y);

const obj = {};
obj.a = 5;
obj.b = 777;

obj.a = "a string";
obj.b = {};

obj.b.c = "wow much dot";

const deck = [
    {
        suit: "heart",
        number: 7,
        subCard: {},
    },
    {
        suit: "diamond",
        number: "king",
    },
];

for(const card of deck) {
    console.log(`card's suit: ${card.suit}, number: ${card.number * 2}`);
}
