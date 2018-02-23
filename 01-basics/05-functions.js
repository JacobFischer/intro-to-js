// a simple function in JavaScript
function sayHi() {
    console.log("hi!");
}

// call it
sayHi();

sayHi();

sayHi();

// now let's use some arguments and a return statement
function addOne(n) {
    return n + 1;
}

const b = addOne(2);

console.log("b should be 3, is it?", b);

let scoped = "Hi there";
function showScope() {
    console.log("scoped:", scoped);
}

showScope();

scoped = "I got changed, in the function too!";

showScope();

// functions are objects too!
console.log("function name", showScope.name);

// some other ways to make functions
const oneWay = function() {
    return console.log;
};

// We can even use the shorthand arrow function syntax
const doubleNumber = (n) => n * 2;

console.log("doubled: ", doubleNumber(10));

