const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const character = await Character.delete();
  response(res, 200, { message: "Character deleted" });
};
