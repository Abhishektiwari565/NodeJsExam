import { useEffect, useState } from "react";
import API from "../api/axios";

const MyRecipes = () => {
  const [recipes,setRecipes] = useState([]);

  useEffect(()=>{
    const fetchMy = async () => {
      try {
        const res = await API.get("/recipes/my");
        setRecipes(res.data);
      } catch(err){
        console.error(err);
      }
    };
    fetchMy();
  },[]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Recipes</h2>
      {recipes.length===0 && <p>You haven't added any recipe yet.</p>}
      {recipes.map(r=>(
        <div className="card p-3 mb-3 shadow" key={r._id}>
          <h5>{r.title}</h5>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MyRecipes;