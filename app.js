// open connection to db as soon as application starts
require('./api/data/dbconnection.js').open();
// require express
var express = require('express');
// initialize express
var app = express();

var path = require('path');

// allow Express to parse form data for POST requests
var bodyParser = require('body-parser');

var routes = require('./api/routes');

// eliminate hard-coded port number
app.set('port', process.env.PORT);

// custom middleware: functions that sit between request and response
// functions run in the order they are placed
app.use(function(req, res, next) {
  // this allows us to see the request method and request path
  console.log(req.method, req.url);
  next();
});

// express uses default/static folder
app.use(express.static(path.join(__dirname, 'public')));

// use middleware between the static path above and the routes below
// extended : false option prevents warning in console when we run application
app.use(bodyParser.urlencoded({ extended : false }));

// tell express to use the routes; test with Postman
app.use('/api', routes);

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

// give express a port to listen for requests
// app.listen returns an object, so assign it to a variable to be able to access properties of the server object
var server = app.listen(app.get('port'), function() {
  // extract port number from server object
  var port = server.address().port;
  // confirm with console log - view on http://localhost:3000
  // async in anonymous callback function
  console.log('Magic happens on port ' + port);
});