// this is the cutting edge, Promises are so popular now js has a syntax
// to make them "feel" like synchronous code

// this is the same function from the previous file
function delay(time, value) {
    return new Promise((resolve, reject) => {
        if (time < 0 || typeof(time) !== "number") {
            reject(new Error("time must be a positive number!"));
        }

        setTimeout(() => {
            resolve(value);
        }, time);
    });
}

// we have to wrap out execution in an async function to use the syntax
(async function() {
    await delay(1000);
    console.log("cow");

    // the random example
    const randomTime = (Math.random() - 0.5) * 1000;
    console.log(`Random time: ${randomTime}`);

    if (randomTime > 0) {
        console.log("random time should work!");
    }
    else {
        console.log("random time should throw!");
    }

    try {
        delay(randomTime);
        console.log("randomly worked!");
    }
    catch(error) {
        console.log("randomly failed :(");
    }
})();
