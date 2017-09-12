// use './' because node looks in node modules folder otherwise
// filename does not need .js - you can use it but best practice not to
require('./instantHello');
// another way to expose a method 
var goodbye = require('./talk/goodbye');
// now to call the method
goodbye();