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

  await axios.post("http://localhost:8001/Login",{email,password},{withCredentials:true})
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
    
 

    <div className='box'>
      <span className='borderLine'></span>
      <form onSubmit={handlelogin}>
        <h2>Log In</h2>
          <div className="inputBox">
          
            <input
              type="email"
              className="form-input"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <i></i>
          </div>
          <div className="inputBox">
         
            <input
              type="password"
              className="form-input"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
             <i></i>
          </div>
          <div class="links">
            <a href="">Forgot Password</a>
            <a href="/registration">Signup</a>
        </div>
          <button type="submit" id='submit'>
            Login
          </button>
        </form>
     
    </div>
  );
}

export default Login;