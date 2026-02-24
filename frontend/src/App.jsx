import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe";
import MyRecipes from "./pages/MyRecipes";
import AllRecipes from "./pages/AllRecipes";

const RouterApp = () => {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AllRecipes />} />
        <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/add" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/add" />} />

        {/* Protected Routes */}
        <Route path="/add" element={token ? <AddRecipe /> : <Navigate to="/login" />} />
        <Route path="/my" element={token ? <MyRecipes /> : <Navigate to="/login" />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <AuthProvider>
    <RouterApp />
  </AuthProvider>
);

export default App;