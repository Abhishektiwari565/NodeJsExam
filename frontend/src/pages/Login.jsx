import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    localStorage.setItem("token", res.data.token);

    alert("✅ Login Successful");
    navigate("/");
  } catch (error) {
    alert("❌ Login Failed");
  }
};

  return (
    <div className="container mt-4">
      <h2>Login</h2>

      <form onSubmit={handleLogin} className="card p-4 shadow">
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;