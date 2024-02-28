const AbstractRepository = require("./AbstractRepository");

class DrinkRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "drinks" });
  }

  // The C of CRUD - Create operation

  async create(drink) {
    // Execute the SQL INSERT query to add a new drink to the "drink" table
    const { rows } = await this.database.query(
      `insert into ${this.table} (name, category_id, barcode, country, degree, description, year, producer) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *`,
      [
        drink.name,
        drink.category_id,
        drink.barcode,
        drink.country,
        drink.degree,
        drink.description,
        drink.year,
        drink.producer,
      ]
    );

    // Return the ID of the newly inserted drink
    return rows[0];
  }

  // The Rs of CRUD - Read operations

  async read(barcode) {
    // Execute the SQL SELECT query to retrieve a specific drink by its ID
    const { rows } = await this.database.query(
      `select ${this.table}.id, ${this.table}.name, ${this.table}.country, ${this.table}.producer, ${this.table}.year, ${this.table}.degree, ${this.table}.barcode, category.name as category from ${this.table}
       inner join category on category.id = ${this.table}.category_id
       where barcode LIKE $1`,
      [barcode]
    );

    // Return the first row of the result, which represents the drink
    return rows[0];
  }

  async readAll(query) {
    // Execute the SQL SELECT query to retrieve all drinks from the "drink" table
    const { rows } = await this.database.query(
      `select ${this.table}.id, ${this.table}.name, ${this.table}.country, ${this.table}.producer, ${this.table}.year, ${this.table}.degree, ${this.table}.barcode, category.name as category, user_cellar.user_id as user from ${this.table}
       inner join category on category.id = ${this.table}.category_id
       inner join user_cellar on user_cellar.drink_id = ${this.table}.id
       where barcode LIKE $1`,
      [`%${query.barcode}%`]
    );

    // Return the array of drinks
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing drink

  // async update(drink) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an drink by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = DrinkRepository;
