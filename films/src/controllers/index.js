const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  findFilm: catchedAsync(require("./findFilm")),
  createFilm: catchedAsync(require("./createFilm")),
  updateFilm: catchedAsync(require("./updateFilm")),
  deleteFilm: catchedAsync(require("./deleteFilm")),
};
