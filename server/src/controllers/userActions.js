// Import access to database tables
const tables = require("../../database/tables");
const { hash, verify } = require("../services/argon");
const { createToken } = require("../services/jwt");

// The B of BREAD - Browse (Read All) operation
const signup = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const hashPass = await hash(req.body.password);
    const users = await tables.users.create(req.body, hashPass);

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const signin = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.users.read(req.body.email);
    if (user) {
      const isCorrect = await verify(user.password, req.body.password);
      if (isCorrect) {
        delete user.password;
        res
          .cookie("auth", createToken(user), { httpOnly: true })
          .status(200)
          .json(user);
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(404);
    }
    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;

  try {
    // Insert the user into the database
    const insertId = await tables.user.create(user);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  signup,
  signin,
  // edit,
  add,
  // destroy,
};
