// Load environment variables from .env file
require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");

// Build the path to the schema SQL file
const schema = path.join(__dirname, "..", "database", "schema.sql");

// Get database connection details from .env file
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Update the database schema
const { Pool } = require("pg");

const migrate = async () => {
  try {
    // Read the SQL statements from the schema file
    const sql = fs.readFileSync(schema, "utf8");

    // Create a specific connection to the database
    const database = new Pool({
      user: DB_USER,
      host: DB_HOST,
      database: DB_NAME,
      password: DB_PASSWORD,
      port: DB_PORT,
    });

    // Execute the SQL statements to update the database schema
    await database.query(sql);

    const queries = [
      database.query(
        "insert into category(name) values ('Bières'), ('Vins'), ('Wisky'), ('Thé'), ('Café')"
      ),
      database.query(
        "insert into users(email, password) values ('user@test.fr', 'azerty')"
      ),
    ];

    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${DB_NAME} updated from '${path.normalize(schema)}' 🆙`);
  } catch (err) {
    console.error("Error updating the database:", err.message, err.stack);
  }
};

// Run the migration function
migrate();
