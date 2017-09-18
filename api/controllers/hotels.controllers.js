// create controller that will run when /api/controllers is called
// bring in db connection file
var dbconn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');
var ObjectId = require('mongodb').ObjectId;

module.exports.hotelsGetAll = function(req, res) {
  // get the db connection to be able to use the data
  var db = dbconn.get();
  
  var collection = db.collection('hotels');
  
  // set default values for offset and count
  var offset = 0;
  var count = 5;

  // if an offset value is specified in query string, assign it instead of default offset
  if (req.query && req.query.offset) {
    // don't forget the radix for parseInt!
    offset = parseInt(req.query.offset, 10);
  }
  
  // if a count value is specified in query string, assign it instead of default count
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  
  // chain find and toArray methods to return correct json output
  collection
      .find()
      .skip(offset)
      .limit(count)
      .toArray(function(err, docs) {
        console.log("Found hotels", docs);
        res
          .status(200)
          .json(docs);
    });
};

module.exports.hotelsGetOne = function(req, res) {
  var db = dbconn.get();
  var collection = db.collection('hotels');
  
  // extract hotelId from request parameter
  var hotelId = req.params.hotelId;
  console.log("GET hotelId", hotelId);
  
  collection
    .findOne({
      _id : ObjectId(hotelId)
    }, function(err, doc) {
      res
      .status(200)
      .json( doc );
    });
  

};

// don't forget that we need to test this in Postman
module.exports.hotelAddOne = function(req, res) {
  console.log("POST new hotel");
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};