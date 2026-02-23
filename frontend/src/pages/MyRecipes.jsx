import { useEffect, useState } from "react";
import API from "../api/axios";
import axios from "axios";

function MyRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/recipes/my", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Recipes</h2>

      {recipes.map(recipe => (
        <div key={recipe._id} className="card p-3 mb-3 shadow">
          <h5>{recipe.title}</h5>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MyRecipes;