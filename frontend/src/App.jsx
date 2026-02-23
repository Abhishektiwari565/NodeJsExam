import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllRecipes from "./pages/AllRecipes";
import AddRecipe from "./pages/AddRecipe";
import MyRecipes from "./pages/MyRecipes";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/my" element={<MyRecipes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;