import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="signup-container">

      <div className="signup-card">

        <div className="signup-icon">
          🛍️
        </div>

        <h1>Create Account</h1>

        <p className="signup-subtitle">
          Join our E-Commerce community
        </p>

        <form>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <label className="terms">
            <input type="checkbox" />
            I agree to the Terms & Conditions
          </label>

          <button type="submit" className="signup-btn">
            Create Account
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          <span>G</span>
          Sign up with Google
        </button>

        <p className="login-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  )
}

export default Signup