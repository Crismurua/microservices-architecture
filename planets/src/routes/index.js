const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.findPlanet);
router.post("/", middlewares.planetValidation, controllers.createPlanet);
router.put("/:id", middlewares.planetValidation, controllers.updatePlanet);
router.delete("/:id", controllers.deletePlanet);

module.exports = router;
