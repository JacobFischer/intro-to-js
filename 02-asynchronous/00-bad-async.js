// How do we delay code for 1 second?

const start = new Date();
console.log(`Starting at: ${start}`);

// wait 1 second by continually checking the time until 1 second is elapsed

// while the current date minus the start date is less that 1000ms (1sec)
// keep looping
while ((new Date().getTime() - start.getTime()) < 1000);

console.log(`1 second later at: ${new Date()}`);

// this is BAD, because that while loops blocks all other code from executing
// while the event loop is trapped there, so we must use asynchronous coding
