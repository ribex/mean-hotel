// this variable isn't exposed outside the file - app.js "doesn't know it exists"
var filename = "index.js";

var hello = function(name) {
    console.log("Hello " + name);
};

var intro = function() {
    console.log("I'm a node file called " + filename);
};

// expose the methods (otherwise they are private to this file)
// export a javascript object, so we can use these in app.js
module.exports = {
    hello : hello,
    intro : intro
};