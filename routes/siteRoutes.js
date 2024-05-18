const express = require("express");
const router = express.Router();
const {
  getAllResource,
  getResource,
  createResource,
  editResource,
  deleteResource,
 
} = require("../controllers/siteControllers");
//3. Moving routes into a new home, Part 2

router.get("/", getAllResource);
router.get("/:id", getResource);
router.post("/create", createResource);
router.put("/edit/:id", editResource);
router.delete("/delete/:id", deleteResource);



module.exports = router;
