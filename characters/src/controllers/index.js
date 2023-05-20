const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  findCharacter: catchedAsync(require("./findCharacter")),
  createCharacter: catchedAsync(require("./createCharacter")),
  updateCharacter: catchedAsync(require("./updateCharacter")),
  deleteCharacter: catchedAsync(require("./deleteCharacter")),
};
