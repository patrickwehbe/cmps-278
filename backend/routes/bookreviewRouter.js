const router = require("express").Router();
const bookreviewControl = require("../controllers/bookreviewControl");

router.get("/all", bookreviewControl.getReviews);
router.post("/createReview", bookreviewControl.createReview);
router.get("/one/:id", bookreviewControl.getOneReview);
router.put("/updateReview/:id", bookreviewControl.updateReview);
router.delete("/deleteReview/:id", bookreviewControl.deleteReview);

module.exports = router;
