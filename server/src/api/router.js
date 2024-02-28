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

router.use("", (req, res) => {
  res
    .status(200)
    .send({
      specifi:
        process.env.TASTE_TEST_VARIABLE ||
        "Echec de chargement de la variable d'environnement TASTE_TEST_VARIABLE.",
      app_secret:
        process.env.APP_SECRET ||
        "Echo de chargement de la variable d'environnement APP_SECRET.",
    });
});

/* ************************************************************************* */

module.exports = router;
