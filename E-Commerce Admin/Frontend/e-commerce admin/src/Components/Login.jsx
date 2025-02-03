import React, { useState } from 'react';
import '../Components/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:6099", { email, password }, { withCredentials: true });
      navigate("/dashboard");
      alert('Login Successful!');
    } catch (error) {
      console.error(error);
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-box">
        <h2 className="login-heading">Welcome Back</h2>
        <p className="login-subheading">Login to your account</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              
              required
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        <div className="form-footer">
          <small>
            Don't have an account?{' '}
            <Link to="/registration" className="link">
              Register Now
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
