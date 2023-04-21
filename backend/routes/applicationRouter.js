const router = require("express").Router();
const applicationControl = require("../controllers/applicationsControl");

router.get("/all", applicationControl.getApplications);
router.post("/createApplication", applicationControl.createApplication);
router.get("/one/:id", applicationControl.getOneApplication);
router.put("/updateApplication/:id", applicationControl.updateApplication);
router.delete("/deleteApplication/:id", applicationControl.deleteApplication);

module.exports = router;
