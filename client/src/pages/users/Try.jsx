import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useDrinkModel from "../../services/drinks";
import useTastingModel from "../../services/tasting";
import DrinkCard from "../../components/cards/DrinkCard";
import CommentCard from "../../components/cards/CommentCard";

function Try() {
  const { getOneDrink, drink } = useDrinkModel();
  const { postTasting, tasting, handleTasting, tastings, getTastings } =
    useTastingModel();
  const { barcode } = useParams();

  useEffect(() => {
    getOneDrink(barcode);
  }, []);

  useEffect(() => {
    getTastings(drink.id);
  }, [drink.id]);

  return (
    <div>
      <h1 className="text-center">Qu'en pensez-vous ?</h1>
      <DrinkCard drink={drink} type="try" />
      <section>
        <h2 className="text-center">Votre avis</h2>
        <form
          className="form-group row"
          onSubmit={(e) => postTasting(e, drink.id)}
        >
          <label aria-label="commentaire" className="col-sm-12 col-form-label">
            Commentaire
            <textarea
              name="note"
              className="form-control"
              value={tasting.note}
              onChange={handleTasting}
            />
          </label>
          <label className="col-sm-12 col-form-label">
            Note
            <input
              name="rating"
              type="number"
              min={0}
              max={5}
              className="form-control"
              value={tasting.rating}
              onChange={handleTasting}
            />
          </label>
          <button type="submit" className="btn btn-dark">
            Commenter
          </button>
        </form>
      </section>
      <section className="m-2">
        <h2 className="text-center">Vos avis</h2>
        {tastings.map((t) => (
          <CommentCard key={t.id} comment={t} />
        ))}
      </section>
    </div>
  );
}

export default Try;
