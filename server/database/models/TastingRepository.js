const AbstractRepository = require("./AbstractRepository");

class TastingRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "tasting" });
  }

  // The C of CRUD - Create operation

  async create(comment) {
    // Execute the SQL INSERT query to add a new userCellar to the "userCellar" table
    const { rows } = await this.database.query(
      `insert into ${this.table} (user_id, drink_id, note, rating) values ($1, $2, $3, $4) returning id`,
      [comment.user, comment.drinkId, comment.note, comment.rating]
    );

    // Return the ID of the newly inserted userCellar
    return rows;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific userCellar by its ID
    const { rows } = await this.database.query(
      `select * from ${this.table} where user_id = $1`,
      [id]
    );

    // Return the first row of the result, which represents the userCellar
    return rows[0];
  }

  async readAll(id, drinkId) {
    // Execute the SQL SELECT query to retrieve all userCellars from the "userCellar" table
    const { rows } = await this.database.query(
      `select * from ${this.table} where user_id = $1 and drink_id = $2`,
      [id, drinkId]
    );

    // Return the array of userCellars
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing userCellar

  // async update(userCellar) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an userCellar by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = TastingRepository;
