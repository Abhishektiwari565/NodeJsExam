import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login clicked");

    try {
      // send username to match backend user model
      const res = await API.post("/auth/login", { username, password });

      const token = res?.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        console.log("TOKEN SAVED:", token);
      } else {
        console.log("No token in response", res.data);
      }

      alert("✅ Login Successful");
      navigate("/add");

    } catch (error) {
      console.log(error);
      alert("❌ Login Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleLogin} className="card p-4 shadow">
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;