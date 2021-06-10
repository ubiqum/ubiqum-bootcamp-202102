const cityModel = require("../model/cityModel");

module.exports = function retrieveAllCities() {
  return cityModel.find({});
};
