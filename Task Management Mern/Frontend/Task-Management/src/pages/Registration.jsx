import React, { useState } from 'react';
import '../pages/Registration.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [register,setRegister]=useState([]);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [contact,setContact]=useState('');
  const [password,setPassword]=useState('');
  const [role,setRole]=useState('')
  
  const navigate=useNavigate()
   
 

  const handleregistor=async(e)=>{
    e.preventDefault();

    await axios.post("http://localhost:8001/registration",{name,email,contact,role,password},
    {
     withCredentials : true
    })
    .then((res)=>{  
       console.log(res)
       setRegister([...register,res.data])
       navigate("/")
       alert(`Successfully Register`)
    })
    .catch((err)=>{
       alert(`This Email is alerdy Registored...`)
    })

    
  }

  return (
     

  
  <div className="box">
    <span className='borderLine'></span>
    <form onSubmit={handleregistor}>
      <h2>Sign up</h2>
      <div className="inputBox">
      <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                    <i></i>
      </div>
      <div className="inputBox">
      <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                    <i></i>
      </div>
      <div className="inputBox">
      <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create your password"
                      required
                    />
                    <i></i>
        </div>
        <div className="inputBox">
        <select
                      className="form-select form-select-lg"
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                    <i></i>
        </div>
        <div className="inputBox">
        <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Enter your contact number"
                      required
                    />
                    <i></i>
        </div>
        <div class="links">
            <a href="">already have a account </a>
            <a href="/">Sign In</a>
        </div>
        <br />
          <button type="submit" id='submit'>
            Sign Up 
          </button>
    </form>
  </div>
  );
}

export default Registration;