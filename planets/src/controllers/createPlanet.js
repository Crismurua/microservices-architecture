const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newFilm = await Planet.create();
  response(res, 201, newFilm);
};
