import { useState } from "react";
import connexion from "./instances";

const drinkType = {
  name: "",
  category_id: null,
  barcode: "",
  country: "",
  degree: null,
  description: "",
  year: "",
  producer: "",
};

export default function DrinkModel() {
  const [drinks, setDrinks] = useState([]);
  const [drink, setDrink] = useState(drinkType);

  const getDrinks = async (barcode) => {
    const res = await connexion.get(`/drinks?barcode=${barcode}`);
    setDrinks(res.data);
  };

  const getOneDrink = async (barcode) => {
    const res = await connexion.get(`/drinks/${barcode}`);
    setDrink(res.data);
  };

  /** const removeDrink = async (id) => {
    try {
      await connexion.delete(`/drinks/${id}`);
      setDrinks((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  }; */

  /** const updateDrink = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/drinks/${drink.id}`, drink);
    } catch (error) {
      console.error(error);
    }
  }; */

  const handleDrink = (e) => {
    setDrink((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const postDrink = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/drinks", drink);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getDrinks,
    // removeDrink,
    // updateDrink,
    getOneDrink,
    handleDrink,
    drink,
    postDrink,
    drinks,
  };
}
