var express = require('express');

var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');

router
  // define route
  .route('/hotels')
  // define method
  .get(ctrlHotels.hotelsGetAll);


module.exports = router;