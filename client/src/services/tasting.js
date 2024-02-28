import { useState } from "react";
import connexion from "./instances";

const tastingType = {
  note: "",
  rating: "",
};
export default function TastingModel() {
  const [tastings, setTastings] = useState([]);
  const [tasting, setTasting] = useState(tastingType);

  const getTastings = async (id) => {
    const res = await connexion.get(`/tastings?drink=${id}`);
    setTastings(res.data);
  };

  /** const getOneTasting = async (id) => {
    const res = await connexion.get(`/tastings/${id}`);
    setTasting(res.data);
  }; */

  /** const removeTasting = async (id) => {
    try {
      await connexion.delete(`/tastings/${id}`);
      setTastings((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  }; */

  /** const updateTasting = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/tastings/${tasting.id}`, tasting);
    } catch (error) {
      console.error(error);
    }
  }; */

  const handleTasting = (e) => {
    setTasting((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const postTasting = async (e, drinkId) => {
    e.preventDefault();
    try {
      await connexion.post("/tastings", { ...tasting, drinkId });
      setTasting(tastingType);
      getTastings();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getTastings,
    // removeTasting,
    // updateTasting,
    // getOneTasting,
    handleTasting,
    tasting,
    postTasting,
    tastings,
  };
}
