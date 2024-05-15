const express = require("express");
const router = express.Router();
const {
  getAllResource,
  getResource,
  createResource,
  editResource,
  deleteResource,
  subscribeNewsletter,
  deleteSubscribeNewsletter
} = require("../controllers/siteControllers");
//3. Moving routes into a new home, Part 2

router.post("/", getAllResource);
router.post("/:id", getResource);
router.post("/create", createResource);
router.put("/edit/:id", editResource);
router.delete("/delete/:id", deleteResource);
router.post("/subscribe", subscribeNewsletter);
router.delete("deleteSubscribe", deleteSubscribeNewsletter);


module.exports = router;
