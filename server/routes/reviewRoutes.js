const router = require("express").Router();
const reviewController = require("../controllers/reviewController.js");

//Route different requests to different endpoints
router.get("/:product_id/list", reviewController.getList);
router.get("/:product_id/meta", reviewController.getMeta);
router.post("/:product_id", reviewController.postReview);
router.put("/helpful/:review_id", reviewController.markReview);
router.put("/report/:review_id", reviewController.reportReview)

module.exports = router;
