// require express
var express = require('express');
// initialize express
var app = express();

var path = require('path');
// eliminate hard-coded port number
app.set('port', process.env.PORT);

// app.get('/', function(req, res) {
//     console.log("GET the homepage");
//     res
//         .status(404)
//         .send("Express yourself");
// });

app.get('/json', function(req, res) {
    console.log("GET the json");
    res
        .status(200)
        .json({"jsonData" : true});
});

app.get('/file', function(req, res) {
    console.log("GET the file");
    res
        .status(200)
        // create file path
        .sendFile(path.join(__dirname, 'app.js'));
});

app.get('/', function(req, res) {
   console.log("GET the homepage");
   res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'index.html'));
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