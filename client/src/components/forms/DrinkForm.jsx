import React, { useEffect } from "react";
import PropTypes from "prop-types";

import useCategoryModel from "../../services/categories";
import useDrinkModel from "../../services/drinks";
import countries from "../../services/countries.json";

function DrinkForm({ barcode }) {
  const { categories, getCategories } = useCategoryModel();
  const { drink, handleDrink, postDrink } = useDrinkModel();

  useEffect(() => {
    getCategories();
    handleDrink({ target: { name: "barcode", value: barcode } });
  }, []);

  return (
    <form onSubmit={postDrink}>
      <div className="form-group row">
        <label className="col-sm-12 col-form-label">
          Nom de votre boisson
          <input
            type="text"
            required
            name="name"
            className="form-control"
            onChange={handleDrink}
            value={drink.name}
          />
        </label>
        <label
          className="col-sm-12 col-form-label"
          aria-label="choississez une catégorie"
        >
          <select
            required
            name="category_id"
            className="form-control"
            onChange={handleDrink}
            value={drink.category_id}
          >
            <option value="">Choisissez une catégorie</option>
            {categories.map((category) => (
              <option key={categories.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className="col-sm-12 col-form-label">
          Description
          <textarea
            name="description"
            className="form-control"
            onChange={handleDrink}
            value={drink.description}
          />
        </label>
        <label className="col-sm-12 col-form-label">
          Degrée d'alcool
          <input
            type="number"
            name="degree"
            className="form-control"
            onChange={handleDrink}
            value={drink.degree}
          />
        </label>

        <label className="col-sm-12 col-form-label">
          Année
          <input
            type="number"
            min={1970}
            max={2023}
            name="year"
            className="form-control"
            onChange={handleDrink}
            value={drink.year}
          />
        </label>
        <label className="col-sm-12 col-form-label">
          Producteur
          <input
            type="text"
            name="producer"
            className="form-control"
            onChange={handleDrink}
            value={drink.producer}
          />
        </label>
        <label className="col-sm-12 col-form-label">
          Pays
          <select
            name="country"
            className="form-control"
            onChange={handleDrink}
            value={drink.country}
          >
            <option value="">Choisissez un pays</option>
            {countries.map((country) => (
              <option key={country.iso3} value={country.name_fr}>
                {country.name_fr}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit" className="btn btn-dark">
        Valider
      </button>
    </form>
  );
}

DrinkForm.propTypes = {
  barcode: PropTypes.string.isRequired,
};

export default DrinkForm;
