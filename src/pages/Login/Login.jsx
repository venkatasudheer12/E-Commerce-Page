import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-icon">
          🛒
        </div>

        <h1>Welcome Back</h1>
        <p className="login-subtitle">
          Login to your E-Commerce account
        </p>

        <form>

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
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          <span>G</span> Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account?
          <a href="/signup"> Create Account</a>
        </p>

      </div>

    </div>
  )
}

export default Login