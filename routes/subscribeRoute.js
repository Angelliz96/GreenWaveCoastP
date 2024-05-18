const express = require("express");
const router = express.Router();
const {
  subscribeNewsletter,
  deleteSubscribeNewsletter
} = require("../controllers/subscribeController");

router.post("/subscribe", subscribeNewsletter);
router.delete("deleteSubscribe", deleteSubscribeNewsletter);

module.exports = router;
