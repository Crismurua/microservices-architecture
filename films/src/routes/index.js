const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.findFilm);
router.post("/", middlewares.filmValidation, controllers.createFilm);
router.put("/:id", middlewares.filmValidation, controllers.updateFilm);
router.delete("/:id", controllers.deleteFilm);

module.exports = router;
