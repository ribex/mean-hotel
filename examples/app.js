// use './' because node looks in node modules folder otherwise
// filename does not need .js - you can use it but best practice not to
require('./instantHello');
// another way to expose a method from a subfolder
var goodbye = require('./talk/goodbye');

// if you have an index.js file in a folder, you don't have to specify the name of the file itself
var talk = require('./talk');


var question = require('./talk/question');

// we can call the methods that were exposed in the index file within the talk folder
talk.intro();
talk.hello("John Smith");

// assign this to a variable so we can do something with the return from the function
var answer = question.ask("What is the meaning of life?");
console.log(answer);

// now to call the method from goodbye.js
goodbye();