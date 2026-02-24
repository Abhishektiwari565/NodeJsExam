import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllRecipes from "./pages/AllRecipes";
import AddRecipe from "./pages/AddRecipe";
import MyRecipes from "./pages/MyRecipes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/add" element={token ? <AddRecipe /> : <Navigate to="/login" />} />
        <Route path="/my" element={token ? <MyRecipes /> : <Navigate to="/login" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/add" />} />
        <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/add" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;