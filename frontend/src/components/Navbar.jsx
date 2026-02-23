import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">RecipeApp</Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">All</Link>
          <Link className="btn btn-outline-light me-2" to="/add">Add</Link>
          <Link className="btn btn-outline-light me-2" to="/my">My</Link>
          <Link className="btn btn-warning" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;