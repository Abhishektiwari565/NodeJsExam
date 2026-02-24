import { useState } from "react";
import API from "../api/axios";

const AddRecipe = () => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const payload = { title, description };
      if (authorName && authorName.trim()) payload.authorName = authorName.trim();

      const res = await API.post("/recipes/add", payload);
      const added = res.data.recipe;
      const author = added?.authorName || added?.user?.username || "You";
      alert(`✅ Recipe added! Added by: ${author}`);
      setTitle("");
      setDescription("");
      setAuthorName("");
    } catch(err){
      console.error(err);
      alert("❌ Failed to add recipe");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Recipe</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input type="text" placeholder="Title" className="form-control mb-3"
          value={title} onChange={e=>setTitle(e.target.value)} required />
        <textarea placeholder="Description" className="form-control mb-3"
          value={description} onChange={e=>setDescription(e.target.value)} required />
        <input type="text" placeholder="Author name (optional)" className="form-control mb-3"
          value={authorName} onChange={e=>setAuthorName(e.target.value)} />
        <button className="btn btn-success w-100">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;