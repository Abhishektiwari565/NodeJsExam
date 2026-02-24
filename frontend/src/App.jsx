import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe";
import MyRecipes from "./pages/MyRecipes";
import AllRecipes from "./pages/AllRecipes";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/add" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/add" />} />
        <Route path="/add" element={token ? <AddRecipe /> : <Navigate to="/login" />} />
        <Route path="/my" element={token ? <MyRecipes /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;