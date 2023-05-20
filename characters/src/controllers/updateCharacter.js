const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const updatedCharacter = await Character.update();
  response(res, 204, updatedCharacter);
};
