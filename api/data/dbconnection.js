// create a node module and a basic skeleton to expose two methods

// driver
var MongoClient = require('mongodb').MongoClient;

// set connection string
var port = 27017;
var dburl = 'mongodb://localhost:' + port + '/meanhotel';


// method to open connection and store in variable
var _connection = null;

var open = function() {
  MongoClient.connect(dburl, function(err, db) {
    if (err) {
      console.log('DB connection failed');
      return;
    } 
    // if no error, save the db connection into variable
    _connection = db;
    console.log('DB connection open', db);
  });
};

// method to retrieve connection variable and return it
var get = function() {
  return _connection;
};

module.exports = {
  open : open,
  get : get
};

