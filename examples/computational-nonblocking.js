// for non-blocking, allow more than one node process
var child_process = require('child_process');

console.log(1);

// use spawn method of the child_process
var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
    stdio : 'inherit'
});
console.log(2);