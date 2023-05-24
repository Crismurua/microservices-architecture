const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const updatedFilm = await Film.update(id, req.body);
  response(res, 204, updatedFilm);
};
