const express = require("express");

const router = express.Router();
const { checkUser } = require("../../middleware/user");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, add } = require("../../controllers/tastingActions");

// Route to get a list of items
router.get("/", checkUser, browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", checkUser, add);

/* ************************************************************************* */

module.exports = router;
