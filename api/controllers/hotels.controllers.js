// create controller that will run when /api/controllers is called
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
  // define function to run; can chain multiple methods (such as POST) to a single route
  console.log("GET the hotels");
  res
    .status(200)
    .json( hotelData );
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