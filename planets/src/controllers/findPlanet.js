const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const planet = await Planet.find();
  response(res, 200, planet);
};
