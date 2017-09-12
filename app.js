// use './' because node looks in node modules folder otherwise
// filename does not need .js - you can use it but best practice not to
require('./instantHello');
// another way to expose a method 
var goodbye = require('./talk/goodbye');

// if you have an index.js file in a folder, you don't have to specify the name of the file itself
var talk = require('./talk');

// we can call the methods that were exposed in the index file within the talk folder
talk.intro();
talk.hello("John Smith");

// now to call the method from goodbye.js
goodbye();