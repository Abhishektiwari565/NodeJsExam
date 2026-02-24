import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validation
    if (!username.trim() || !password.trim()) {
      setError("❌ Username and password are required");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("❌ Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const res = await API.post("/auth/signup", { username, password });
      if (res.data.success) {
        setError("");
        alert("✅ Signup Successful! Login now.");
        navigate("/login");
      } else {
        setError(`❌ ${res.data.message}`);
      }
    } catch (err) {
      console.error("Signup error:", err);
      
      if (err.code === "ERR_NETWORK" || err.message.includes("Network")) {
        setError("❌ Network Error: Backend server is not running. Make sure to start the server on port 5000.");
      } else if (err.response?.status === 400) {
        const message = err.response?.data?.message || "User already exists";
        setError(`❌ ${message}`);
      } else if (err.response?.status === 500) {
        setError("❌ Server error. Please try again later.");
      } else {
        setError(`❌ Signup failed: ${err.response?.data?.message || err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="card p-4 shadow">
        {error && (
          <div className="alert alert-danger mb-3" role="alert">
            {error}
          </div>
        )}
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <button className="btn btn-success w-100" disabled={loading}>
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
      <p className="mt-3 text-center">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Signup;