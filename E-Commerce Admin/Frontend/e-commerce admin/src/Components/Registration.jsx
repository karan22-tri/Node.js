import React, { useState } from 'react';
import '../Components/Registration.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [register, setRegister] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:6099/registor", { name, email, contact, password })
      .then((res) => {
        console.log(res);
        setRegister([...register, res.data]);
        navigate("/");
        alert(`Successfully Registered`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="registration-page d-flex align-items-center justify-content-center">
    <div className="form-container">
      <h3 className="form-title">Create Your Account</h3>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
           
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
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
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact number"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a secure password"
            
            required
          />
        </div>
        <button type="submit" className="btn-submit">Register</button>
        <div className="form-footer">
          <small>
            Already have an account?{' '}
            <Link to="/" className="link">
              Log In
            </Link>
          </small>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Registration;
