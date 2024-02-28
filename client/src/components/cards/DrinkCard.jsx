import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import useCellarModel from "../../services/cellars";
import { UserContext } from "../../context/User";

const illustration = {
  Bières:
    "https://www.biere-speciale.fr/wp-content/uploads/2019/11/la-biere-est-elle-bonne-pour-la-sante.jpg",
  Vins: "https://www.v2vin.com/2802-pdt_540/la-petite-perriere-pinot-noir-2022.jpg",
  Wisky:
    "https://www.lesgrappes.com/blog/wp-content/uploads/2019/11/vin-rouge-1.jpg",
  Thé: "https://www.lesgrappes.com/blog/wp-content/uploads/2019/11/vin-rouge-1.jpg",
  Café: "https://www.lesgrappes.com/blog/wp-content/uploads/2019/11/vin-rouge-1.jpg",
};

function DrinkCard({ drink, type }) {
  const { user } = useContext(UserContext);
  const [cellar, setCellar] = useState(drink.user === user.id);
  const { postCellar } = useCellarModel();
  return (
    <div className="card m-4 col-10">
      <img
        className="card-img-top w-50 m-auto"
        src={illustration[drink.category]}
        alt={drink.name}
      />
      <div className="card-body ">
        <h5 className="card-title text-center">{drink.name}</h5>
        <p className="card-text text-center">{drink.description}</p>
        <ul>
          <li>Année : {drink.year}</li>
          <li>Producteur: {drink.producer}</li>
          <li>Degree: {drink.degree}</li>
          <li>Pays: {drink.country}</li>
        </ul>
        <div className="text-center">
          {(type === "cellar" || cellar) && (
            <Link
              to={`/dashboard/degustation/${drink.barcode}`}
              className="btn btn-primary m-auto"
            >
              Déguster
            </Link>
          )}
          {type === "discovery" && !cellar && (
            <button
              type="button"
              onClick={(e) => {
                postCellar(e, drink.id);
                setCellar(true);
              }}
              className="btn btn-primary m-auto"
            >
              Ajouter à ma cave
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    barcode: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    degree: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    user: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default DrinkCard;
