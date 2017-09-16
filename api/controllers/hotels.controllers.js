// create controller that will run when /api/controllers is called
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
  // define function to run; can chain multiple methods (such as POST) to a single route
  console.log("GET the hotels");
  res
    .status(200)
    .json( hotelData );
};