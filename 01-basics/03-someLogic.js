// Now let's do some basic if statement logic

const flag = true;

let a = 1;
let b = "1";

// '==' double equals as you may be used to, the values are implicitly converted to check for equality
if (a == b) {
    console.log("a double equals b");
}
else {
    console.log("a does not double equal b");
}

console.log("then does the true flag == a?:", a == flag);

console.log("how about true flag == b?:", b == flag);

const c = a + b;

console.log("c is:", c);

// '===' triple equals is more what you are used to, called "strict", no values are implictly converted to a different type, e.g. "1" -> 1
if (a === b) {
    console.log("a triple equals b");
}
else {
    console.log("a does not triple equal b");
}

for (let i = 0; i < 10; i++) {
    console.log("loop iteration: ", i);
}

// we can even do floating points
a = 1.25;
b = 3.5;

console.log("difference between floats:", b - a);

// you can even change the types of variables! the power of dynamic typing
a = "hi";
a = 8;
a = [];
a = null;
a = {};
a = console.log;
