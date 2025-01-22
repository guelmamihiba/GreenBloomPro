import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../../api"
import { Leaf } from "lucide-react"
import "./SignUp.css"

const SignUp = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "South Africa",
  })

  const [message, setMessage] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const handleUpdateFormData = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSignUp = async (event) => {
    event.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.")
      return
    }

    setPasswordError("")

    try {
      const response = await axiosInstance.post("/auth/signup", formData)
      console.log(response)

      const userDetails = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country,
      }
      localStorage.setItem("userDetails", JSON.stringify(userDetails))

      setMessage("Check your email to verify your account!")
      setTimeout(() => navigate("/profile"), 3000)
    } catch (error) {
      console.error("Error during sign up:", error)
      setMessage("Error during sign up. Please try again.")
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-content">
        <section className="auth-form-container">
          <div className="auth-header">
            <Leaf className="auth-icon" />
            <h2>Join GreenBloom</h2>
          </div>
          <form onSubmit={handleSignUp} className="auth-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleUpdateFormData}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleUpdateFormData}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleUpdateFormData}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleUpdateFormData}
                placeholder="Create a password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleUpdateFormData}
                placeholder="Confirm your password"
                required
              />
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleUpdateFormData}
                required
                className="auth-select"
              >
                <option value="South Africa">South Africa</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Spain">Spain</option>
                <option value="Italy">Italy</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
                <option value="Mexico">Mexico</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Poland">Poland</option>
                <option value="Turkey">Turkey</option>
                <option value="Greece">Greece</option>
                <option value="Belgium">Belgium</option>
              </select>
            </div>
            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>
          <p className="auth-switch">
            Already have an account?
            <button onClick={() => navigate("/signin")} className="link-button">
              Sign In
            </button>
          </p>
          {message && <p className="auth-message">{message}</p>}
        </section>
        <section className="auth-info">
          <h3>Why Join GreenBloom?</h3>
          <ul>
            <li>Expert plant care advice at your fingertips</li>
            <li>Exclusive access to rare and exotic plants</li>
            <li>Connect with a global community of plant lovers</li>
            <li>Personalized plant recommendations based on your space</li>
            <li>Early access to special promotions and events</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default SignUp

