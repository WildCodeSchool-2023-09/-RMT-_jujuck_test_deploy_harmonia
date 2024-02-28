// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const categories = await tables.categories.readAll();

    // Respond with the categorie in JSON format
    res.status(200).json(categories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const categorie = await tables.categories.read(req.params.id);
    res.status(200).json(categorie);

    // If the categorie is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the categorie in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the categorie data from the request body
  const categorie = req.body;

  try {
    // Insert the categorie into the database
    const insertId = await tables.categories.create(categorie);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted categorie
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
  browse,
  read,
  // edit,
  add,
  // destroy,
};
