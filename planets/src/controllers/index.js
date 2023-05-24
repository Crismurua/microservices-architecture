const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  findPlanet: catchedAsync(require("./findPlanet")),
  createPlanet: catchedAsync(require("./createPlanet")),
  updatePlanet: catchedAsync(require("./updatePlanet")),
  deletePlanet: catchedAsync(require("./deletePlanet")),
};
