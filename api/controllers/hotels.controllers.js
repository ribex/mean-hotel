// create controller that will run when /api/controllers is called
module.exports.hotelsGetAll = function(req, res) {
  // define function to run; can chain multiple methods (such as POST) to a single route
  console.log("GET the json");
  res
    .status(200)
    .json({"jsonData" : true});
};