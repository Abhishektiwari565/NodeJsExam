import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", { username, password });
      const token = res?.data?.token;

      if (token) {
        localStorage.setItem("token", token);
        alert("✅ Login Successful");
        navigate("/add");
      } else {
        alert("❌ Login Failed: Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Login Failed: User not found or password incorrect");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleLogin} className="card p-4 shadow">
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
        
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3 text-center">
        Don't have an account? <a href="/signup">Signup here</a>
      </p>
    </div>
  );
}

export default Login;