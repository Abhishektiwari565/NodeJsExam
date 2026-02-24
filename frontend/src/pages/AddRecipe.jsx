import { useState } from "react";
import API from "../api/axios";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("❌ Please login first");
        return;
      }

      await API.post("/recipes/add", { title, description });
      alert("✅ Recipe Added Successfully");
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to Add Recipe");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Recipe</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input
          type="text"
          placeholder="Title"
          className="form-control mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="form-control mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className="btn btn-success w-100">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;