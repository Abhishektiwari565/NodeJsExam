import { useState } from "react";
import API from "../api/axios";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("❌ Please Login First");
      return;
    }

    try {
      await API.post("/recipes/add", { title, description });

      alert("✅ Recipe Added Successfully");
      setTitle("");
      setDescription("");

    } catch (error) {
      console.log(error);
      alert("❌ Failed To Add Recipe");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Recipe</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input
          type="text"
          placeholder="Title"
          className="form-control mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="form-control mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-success">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;