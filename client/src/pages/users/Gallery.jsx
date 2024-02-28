import React, { useEffect } from "react";

import useCellarModel from "../../services/cellars";
import DrinkCard from "../../components/cards/DrinkCard";

function Gallery() {
  const { getCellars, cellars } = useCellarModel();
  useEffect(() => {
    getCellars();
  }, []);
  return (
    <main>
      <h1 className="text-center m-2">Votre cave de boisson</h1>
      <div className="row p-2">
        {cellars.map((cellar) => (
          <DrinkCard key={cellar.id} drink={cellar} type="cellar" />
        ))}
      </div>
    </main>
  );
}

export default Gallery;
