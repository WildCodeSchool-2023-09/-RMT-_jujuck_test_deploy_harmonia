const AbstractRepository = require("./AbstractRepository");

class CellarRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "user_cellar" });
  }

  // The C of CRUD - Create operation

  async create(cellar) {
    // Execute the SQL INSERT query to add a new userCellar to the "userCellar" table
    const { rows } = await this.database.query(
      `insert into ${this.table} (user_id, drink_id) values ($1, $2)`,
      [cellar.user, cellar.drink]
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

  async readAll(id) {
    // Execute the SQL SELECT query to retrieve all userCellars from the "userCellar" table
    const { rows } = await this.database.query(
      `select drinks.id, drinks.barcode, drinks.country, drinks.degree, drinks.description, drinks.name, drinks.producer, drinks.year, category.name as category from ${this.table}
       inner join drinks on drinks.id = ${this.table}.drink_id
       inner join category on category.id = drinks.category_id
       where ${this.table}.user_id = $1`,
      [id]
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

module.exports = CellarRepository;
