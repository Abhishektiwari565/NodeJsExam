import { useEffect, useState } from "react";
import API from "../api/axios";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    const fetchRecipes = async () => {
      try {
        const res = await API.get("/recipes/all");
        setRecipes(res.data);
      } catch(err){
        console.error(err);
      }
    }
    fetchRecipes();
  },[]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Recipes</h2>
      <div className="row">
        {recipes.map(r=>(
          <div className="col-md-4" key={r._id}>
            <div className="card p-3 mb-3 shadow">
              <h5>{r.title}</h5>
              <p>{r.description}</p>
              <small className="text-muted">By: {r.user?.username || "Unknown"}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;