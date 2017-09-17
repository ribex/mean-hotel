var express = require('express');

var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');

router
  // define route
  .route('/hotels')
  // define method
  .get(ctrlHotels.hotelsGetAll);
  
router
  // parameter in Express must be preceded by a ':'
  .route('/hotels/:hotelId')
  .get(ctrlHotels.hotelsGetOne);  


module.exports = router;