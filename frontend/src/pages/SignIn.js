import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { axiosInstance } from "../api";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    const signInData = { email, password };

    try {
      const response = await axiosInstance.post("/auth/login", signInData);
      if (response.data.access_token)
        navigate("/#home"); // Redirect to home on successful sign-in
      else setMessage("Please verify your email first.");
    } catch (error) {
      console.error("Error during sign in:", error);
      setMessage("Invalid credentials"); // Show an alert for invalid credentials
    }
  };

  return (
    <section className="auth-container">
      <div className="auth-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account?
          <button onClick={() => navigate("/signup")} className="link-button">
            Sign Up
          </button>
        </p>
        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default SignIn;
