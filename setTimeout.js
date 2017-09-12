console.log("1: Start app");

// asynchronous
var holdOn = setTimeout(function() {
    console.log("2: In the setTimeout");
}, 1000);

console.log("3: End app");

// output:
// 1: Start app
// 3: End app
// 2: In the setTimeout