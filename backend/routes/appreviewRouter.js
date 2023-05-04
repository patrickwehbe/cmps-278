const router = require("express").Router();
const appreviewControl = require("../controllers/appreviewControl");

router.get("/all", appreviewControl.getReviews);
router.post("/createReview", appreviewControl.createReview);
router.get("/one/:id", appreviewControl.getOneReview);
router.put("/updateReview/:id", appreviewControl.updateReview);
router.delete("/deleteReview/:id", appreviewControl.deleteReview);

module.exports = router;
