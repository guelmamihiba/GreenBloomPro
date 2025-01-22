import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../../api"
import { Leaf } from "lucide-react"
import "./SignIn.css"

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSignIn = async (e) => {
    e.preventDefault()

    try {
      const response = await axiosInstance.post("/auth/login", { username: email, password })
      if (response.data.token) navigate("/profile")
      else setMessage("Please verify your email first.")
    } catch (error) {
      console.error("Error during sign in:", error)
      setMessage("Invalid credentials")
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-content">
        <section className="auth-form-container">
          <div className="auth-header">
            <Leaf className="auth-icon" />
            <h2>Welcome Back to GreenBloom</h2>
          </div>
          <form onSubmit={handleSignIn} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
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
          {message && <p className="auth-message">{message}</p>}
        </section>
        <section className="auth-info">
          <h3>Grow with GreenBloom</h3>
          <ul>
            <li>Access exclusive plant care tips</li>
            <li>Track your plant collection</li>
            <li>Join our community of plant enthusiasts</li>
            <li>Get personalized plant recommendations</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default SignIn

