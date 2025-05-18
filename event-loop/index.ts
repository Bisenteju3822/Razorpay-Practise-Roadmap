console.log("Start");

setTimeout((): void => {
    console.log("Timeout Callback");
}, 0);

Promise.resolve().then((): void => {
    console.log("Promise Resolved");
});

console.log("End");