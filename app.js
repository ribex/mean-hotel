// require express
var express = require('express');
// initialize express
var app = express();
// eliminate hard-coded port number
app.set('port', 3000);
// give express a port to listen for requests
app.listen(app.get('port'));
// confirm with console log - view on http://localhost:3000
console.log('Magic happens on port ' + app.get('port'));