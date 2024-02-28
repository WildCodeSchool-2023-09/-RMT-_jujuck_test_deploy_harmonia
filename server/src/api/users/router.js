const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { signup, signin, add } = require("../../controllers/userActions");

// Route to get a list of items
router.post("/signup", signup);

// Route to get a specific item by ID
router.post("/signin", signin);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
