import { useState } from "react";
import connexion from "./instances";

export default function CellarModel() {
  const [cellars, setCellars] = useState([]);
  // const [cellar, setCellar] = useState(cellarType);

  const getCellars = async () => {
    const res = await connexion.get(`/cellars`);
    setCellars(res.data);
  };

  /** const getOneCellar = async (id) => {
    const res = await connexion.get(`/cellars/${id}`);
    setCellar(res.data);
  }; */

  /** const removeCellar = async (id) => {
    try {
      await connexion.delete(`/cellars/${id}`);
      setCellars((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  }; */

  /** const updateCellar = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/cellars/${cellar.id}`, cellar);
    } catch (error) {
      console.error(error);
    }
  }; */

  // const handleCellar = (e) => {
  //   setCellar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const postCellar = async (e, id) => {
    e.preventDefault();
    try {
      await connexion.post("/cellars", { drinkId: id });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getCellars,
    // removeCellar,
    // updateCellar,
    // getOneCellar,
    // handleCellar,
    // cellar,
    postCellar,
    cellars,
  };
}
