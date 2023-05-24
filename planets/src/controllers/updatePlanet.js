const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const updatedPlanet = await Planet.update(id, req.body);
  response(res, 204, updatedPlanet);
};
