import { useEffect, useState } from "react";
import API from "../api/axios";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await API.get("/recipes/all");
        setRecipes(res.data);
      } catch (err) {
        console.error(err);
        alert("❌ Failed to fetch recipes");
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="col-md-4">
            <div className="card p-3 mb-3 shadow h-100">
              <h5>{recipe.title}</h5>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;