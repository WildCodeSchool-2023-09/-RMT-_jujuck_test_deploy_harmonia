import React from "react";
import PropTypes from "prop-types";
import DrinkCard from "../cards/DrinkCard";

function DrinkSelection({ drinks }) {
  return (
    <div>
      {drinks.length === 0 ? (
        <p>Aucune boisson ne correspond à votre recherche</p>
      ) : (
        drinks.map((drink) => (
          <DrinkCard key={drink.barcode} drink={drink} type="discovery" />
        ))
      )}
    </div>
  );
}

DrinkSelection.propTypes = {
  drinks: PropTypes.arrayOf(
    PropTypes.shape({
      barcode: PropTypes.string.isRequired,
      category_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default DrinkSelection;
