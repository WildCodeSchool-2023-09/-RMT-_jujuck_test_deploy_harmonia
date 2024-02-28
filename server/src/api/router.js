const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");
const drinksRouter = require("./drinks/router");
const categoriesRouter = require("./categories/router");
const cellarsRouter = require("./cellars/router");
const tastingsRouter = require("./tastings/router");

router.use("/users", usersRouter);

router.use("/drinks", drinksRouter);

router.use("/categories", categoriesRouter);

router.use("/cellars", cellarsRouter);

router.use("/tastings", tastingsRouter);

/* ************************************************************************* */

module.exports = router;
