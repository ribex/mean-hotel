var hello = function(name) {
    console.log("Hello " + name);
};

var intro = function() {
    console.log("I'm a node file called index.js");
};

// expose the methods (otherwise they are private to this file)
// export a javascript object, so we can use these in app.js
module.exports = {
    hello : hello,
    intro : intro
};