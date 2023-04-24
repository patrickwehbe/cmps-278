const router = require("express").Router();
const bookControl = require("../controllers/booksControl");

router.get("/all", bookControl.getBooks);
router.post("/createBook", bookControl.createBook);
router.get("/one/:id", bookControl.getOneBook);
router.put("/updateBook/:id", bookControl.updateBook);
router.delete("/deleteBook/:id", bookControl.deleteBook);

module.exports = router;
