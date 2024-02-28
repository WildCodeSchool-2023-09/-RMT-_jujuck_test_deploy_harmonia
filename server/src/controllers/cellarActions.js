// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const cellars = await tables.cellars.readAll(req.user.id);

    // Respond with the cellar in JSON format
    res.status(200).json(cellars);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const cellar = await tables.cellars.read(req.params.id);
    res.status(200).json(cellar);

    // If the cellar is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the cellar in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the cellar data from the request body
  const { drinkId } = req.body;

  try {
    // Insert the cellar into the database
    const cellarId = await tables.cellars.create({
      drink: drinkId,
      user: req.user.id,
    });

    // Respond with HTTP 201 (Created) and the ID of the newly inserted cellar
    res.status(201).json({ cellarId });
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
