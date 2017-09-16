// require express
var express = require('express');
// initialize express
var app = express();
// eliminate hard-coded port number
app.set('port', process.env.PORT);

app.get('/', function(req, res) {
    console.log("GET the homepage");
    res.send("Express yourself");
});

// give express a port to listen for requests
// app.listen returns an object, so assign it to a variable to be able to access properties of the server object
var server = app.listen(app.get('port'), function() {
    // extract port number from server object
    var port = server.address().port;
    // confirm with console log - view on http://localhost:3000
    // async in anonymous callback function
    console.log('Magic happens on port ' + port);
});