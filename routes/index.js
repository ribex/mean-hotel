var express = require('express');

var router = express.Router();

router
  // define route
  .route('/json')
  // define method
  .get(function(req, res) {
  // define function to run; can chain multiple methods (such as POST) to a single route
    console.log("GET the json");
    res
      .status(200)
      .json({"jsonData" : true});
  })
  .post(function(req, res) {
    console.log("POST the json route");
    res
      .status(200)
      .json({"jsonData" : "POST received"});
  });


module.exports = router;