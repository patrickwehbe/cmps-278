const router = require("express").Router();
const bookreplyControl = require("../controllers/bookreplyControl");

router.get("/all", bookreplyControl.getReplies);
router.post("/createReply", bookreplyControl.createReply);
router.get("/one/:id", bookreplyControl.getOneReply);
router.put("/updateReply/:id", bookreplyControl.updateReply);
router.delete("/deleteReply/:id", bookreplyControl.deleteReply);

module.exports = router;
