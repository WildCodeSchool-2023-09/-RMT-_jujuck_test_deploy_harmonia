import { useState } from "react";
import connexion from "./instances";

export default function CategoryModel() {
  const [categories, setCategories] = useState([]);
  // const [category, setCategory] = useState();

  const getCategories = async () => {
    const res = await connexion.get("/categories");
    setCategories(res.data);
  };

  /** const getOneCategory = async (id) => {
    const res = await connexion.get(`/categories/${id}`);
    setCategory(res.data);
  }; */

  /** const removeCategory = async (id) => {
    try {
      await connexion.delete(`/categories/${id}`);
      setCategories((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  }; */

  /** const updateCategory = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/categories/${category.id}`, category);
    } catch (error) {
      console.error(error);
    }
  }; */

  /** const handleCategory = (e) => {
    setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }; */

  return {
    getCategories,
    // removeCategory,
    // updateCategory,
    // getOneCategory,
    // handleCategory,
    // category,
    categories,
  };
}
