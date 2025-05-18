console.log("Start");
setTimeout(function () {
    console.log("Timeout Callback");
}, 0);
Promise.resolve().then(function () {
    console.log("Promise Resolved");
});
console.log("End");
