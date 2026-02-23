import { useEffect, useState } from "react";
import axios from "axios";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/recipes/all")
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Recipes</h2>
      <div className="row">
        {recipes.map(recipe => (
          <div className="col-md-4" key={recipe._id}>
            <div className="card p-3 mb-3 shadow">
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