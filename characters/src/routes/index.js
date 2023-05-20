const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.findCharacter);
router.post("/", middlewares.characterValidation, controllers.createCharacter);
router.put(
  "/:id",
  middlewares.characterValidation,
  controllers.updateCharacter
);
router.delete("/:id", controllers.deleteCharacter);

module.exports = router;
