// Here we'll show the usage of a `Promise`, which is a popular, natively
// supported wrapper around callbacks that make dealing with errors better

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

// usage of our delay() function

// in 1000ms print "cow"
delay(1000).then(() => console.log("cow"));

// let's force an error
delay("some string").catch(() => console.error("We handled the error!"));

// let's wait for that cow to print, then do more stuff!
delay(1001).then(() => {
    const randomTime = (Math.random() - 0.5) * 1000;
    console.log(`Random time: ${randomTime}`);

    if (randomTime > 0) {
        console.log("random time should work!");
    }
    else {
        console.log("random time should throw!");
    }

    delay(randomTime)
        .then(() => console.log("randomly worked!"))
        .catch(() => console.log("randomly failed :("));
});
