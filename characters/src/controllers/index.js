const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  findCharacter: catchedAsync(require("./findCharacter")),
  createCharacter: catchedAsync(require("./createCharacter")),
};
