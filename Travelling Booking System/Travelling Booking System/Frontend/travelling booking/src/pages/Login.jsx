import React, { useState } from 'react';
import '../pages/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Login({setRoles}) {

  const [login,setLogin]=useState([]);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const navigate=useNavigate()


  const handlelogin=async(e)=>{
     e.preventDefault();

  await axios.post("http://localhost:8008/Login",{email,password},{withCredentials:true})
  .then((response)=>{
    console.log(response.data.userdata);

    const {role}=response.data.userdata
  
    Cookies.set("role",role);
  
    setRoles(role)
    console.log(role)
  
    if(role=="user"){
      navigate("/home")
    } else {
      navigate("/useradmin")
    }

    alert(`${role} successfully login..!!`)
  })
.catch((err)=>{
  alert("Email and Password invaild try again...!!")
})
  


  }
  
  return (
    
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Login</h3>
        <form onSubmit={handlelogin}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="registration-link">
          <small>
            Don't have an account? <Link to="/registration" className="link">Registration</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;