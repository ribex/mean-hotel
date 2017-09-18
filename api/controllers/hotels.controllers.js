// create controller that will run when /api/controllers is called
// bring in db connection file
var dbconn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');

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
      .toArray(function(err, docs) {
        console.log("Found hotels", docs);
        res
          .status(200)
          .json(docs);
    });
  
  // console.log("db", db);
  
  // // define function to run; can chain multiple methods (such as POST) to a single route
  // console.log("GET the hotels");
  // // pulling out query string: ?offset=2&count=2 returns { offset: '2', count: '2' }
  // console.log(req.query);
  

  
  // // get a subset of hotelData array
  // var returnData = hotelData.slice(offset, offset+count);  
  
  // res
  //   .status(200)
  //   // update this from hotelData to returnData so we get our slice
  //   .json( returnData );
};

module.exports.hotelsGetOne = function(req, res) {
  // extract hotelId from request parameter
  var hotelId = req.params.hotelId;
  // create variable to hold information about individual hotel
  var thisHotel = hotelData[hotelId];
  console.log("GET hotelId", hotelId);
  res
    .status(200)
    .json( thisHotel );
};

// don't forget that we need to test this in Postman
module.exports.hotelAddOne = function(req, res) {
  console.log("POST new hotel");
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};