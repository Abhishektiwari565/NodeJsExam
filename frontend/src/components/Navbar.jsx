import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">RecipeApp</Link>
        <div className="d-flex">
          <Link className="btn btn-outline-light me-2" to="/">All</Link>
          <Link className="btn btn-outline-light me-2" to="/add">Add</Link>
          <Link className="btn btn-outline-light me-2" to="/my">My</Link>
          {token ? (
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link className="btn btn-warning me-2" to="/login">Login</Link>
              <Link className="btn btn-success" to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;