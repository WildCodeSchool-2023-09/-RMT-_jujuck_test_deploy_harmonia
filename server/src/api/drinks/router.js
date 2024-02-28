const express = require("express");

const router = express.Router();
const { checkUser } = require("../../middleware/user");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, add } = require("../../controllers/drinkActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:barcode", checkUser, read);

// Route to add a new item
router.post("/", checkUser, add);

/* ************************************************************************* */

module.exports = router;
