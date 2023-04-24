const router = require("express").Router();
const movieControl = require("../controllers/movieControl");

router.get("/all", movieControl.getMovies);
router.post("/createMovie", movieControl.createMovie);
router.get("/one/:id", movieControl.getOneMovie);
router.put("/updateMovie/:id", movieControl.updateMovie);
router.delete("/deleteMovie/:id", movieControl.deleteMovie);

module.exports = router;
