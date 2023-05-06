const router = require("express").Router();
const appreplyControl = require("../controllers/appreplyControl");

router.get("/all", appreplyControl.getReplies);
router.post("/createReply", appreplyControl.createReply);
router.get("/one/:id", appreplyControl.getOneReply);
router.put("/updateReply/:id", appreplyControl.updateReply);
router.delete("/deleteReply/:id", appreplyControl.deleteReply);

module.exports = router;
