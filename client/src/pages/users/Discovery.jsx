import React, { useState, useEffect } from "react";

import useDrinkModel from "../../services/drinks";
import DrinkSelection from "../../components/display/DrinkSelection";
import DrinkForm from "../../components/forms/DrinkForm";

function Discovery() {
  const [form, setForm] = useState(false);
  const [barcode, setBarCode] = useState("");
  const { getDrinks, drinks } = useDrinkModel();

  const showDrinkForm = () => {
    setForm(true);
  };

  useEffect(() => {
    if (barcode !== "") {
      getDrinks(barcode);
    }
  }, [barcode]);

  return (
    <div className="discovery">
      <h2 className="text-center">Pour commencez</h2>
      <form className="border m-2 p-3">
        <div className="form-group row">
          <label className="col-sm-12 col-form-label">
            Entrez votre code barre
            <input
              type="text"
              required
              name="barcode"
              className="form-control"
              onChange={(e) => setBarCode(e.target.value)}
              value={barcode}
            />
          </label>
        </div>
        {barcode.length === 13 && (
          <button
            type="button"
            className="btn btn-dark my-4"
            onClick={showDrinkForm}
          >
            Ajouter votre boisson
          </button>
        )}
      </form>
      {form ? (
        <DrinkForm barcode={barcode} />
      ) : (
        <DrinkSelection drinks={drinks} />
      )}
    </div>
  );
}

export default Discovery;
