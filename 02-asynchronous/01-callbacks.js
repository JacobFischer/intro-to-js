// This exposes you to the basics of asynchronous code, callbacks
// callbacks and async code is the backbone of modern js development

console.log(`Starting at: ${new Date()}`);

setTimeout(() => {
    console.log(`Done at: ${new Date()}`);
}, 1000);

console.log(`I'm not blocked at: ${new Date()}`);
