const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "users" });
  }

  // The C of CRUD - Create operation

  async create(user, hashPass) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const { rows } = await this.database.query(
      `insert into ${this.table} (email, password) values ($1, $2) returning id`,
      [user.email, hashPass]
    );

    // Return the ID of the newly inserted user
    return rows[0];
  }

  // The Rs of CRUD - Read operations

  async read(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const { rows } = await this.database.query(
      `select * from ${this.table} where email = $1`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  // async update(user) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserRepository;
