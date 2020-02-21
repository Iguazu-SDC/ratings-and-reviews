const router = require("express").Router();
const reviewController = require("../controllers/reviewController.js");

//Route different requests to different endpoints
router.get("/:product_id/list", reviewController.getList);
router.get("/:product_id/meta", reviewController.getMeta);

module.exports = router;
