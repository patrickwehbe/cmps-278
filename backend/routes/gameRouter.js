const router = require("express").Router();
const gameControl = require("../controllers/gamesControl");

router.get("/all", gameControl.getGames);
router.post("/creategame", gameControl.createGame);
router.get("/one/:id", gameControl.getOneGame);
router.put("/updategame/:id", gameControl.updateGame);
router.delete("/deletegame/:id", gameControl.deleteGame);

module.exports = router;


