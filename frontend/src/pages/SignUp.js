import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { axiosInstance } from "../api";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUpdateFormData = (event) => {    
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

 // Check if passwords match
 if (formData.password !== formData.confirmPassword) {
  setPasswordError("Passwords do not match.");
  return; // Exit early if passwords don't match
}

setPasswordError(""); // Clear error if passwords match


    try {
      const response = await axiosInstance.post("/auth/signup", formData);
      console.log(response);
      
      setMessage("Check your email to verify your account!");
      setTimeout(() => navigate("/signin"), 3000);
    } catch (error) {
      console.error("Error during sign up:", error);
      setMessage("Error during sign up. Please try again.");
    }
  };

  return (
    <section className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleUpdateFormData}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleUpdateFormData}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleUpdateFormData}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleUpdateFormData}
            placeholder="Password"
            required
          />
          <input
             type="password"
             name="confirmPassword"
             value={formData.confirmPassword}
             onChange={handleUpdateFormData}
             placeholder="Confirm Password"
             required
           />
           {passwordError && <p className="error-message">{passwordError}</p>}
          <button type="submit" className="auth-button">
            Register
          </button>
        </form>
        <p className="auth-switch">
          Already have an account?
          <button onClick={() => navigate("/signin")} className="link-button">
            Sign In
          </button>
        </p>
        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default SignUp;
