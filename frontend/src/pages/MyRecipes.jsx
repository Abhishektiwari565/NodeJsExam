import { useEffect, useState } from "react";
import API from "../api/axios";

function MyRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const res = await API.get("/recipes/my");
        setRecipes(res.data);
      } catch (err) {
        console.error(err);
        alert("❌ Failed to fetch your recipes");
      }
    };
    fetchMyRecipes();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-muted">You have not added any recipes yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe._id} className="card p-3 mb-3 shadow">
            <h5>{recipe.title}</h5>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyRecipes;