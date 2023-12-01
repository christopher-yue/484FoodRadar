import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleLogin}>
        <h2>Log In</h2>
        <div className="form">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
