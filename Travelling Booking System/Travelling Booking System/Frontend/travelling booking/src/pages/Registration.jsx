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

    await axios.post("http://localhost:8008/registration",{name,email,contact,role,password},
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
     
    <div className="loginBg1">
      <div className="container1">
        <div className="row justify-content-center">
          <div className="">
            <div className="card shadow-lg border-0 rounded-3 registration-card">
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4" style={{ color: "#d20c65d0" }}>Registration</h3>
                <form className="row" onSubmit={handleregistor}>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder="Create your password"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="role" className="form-label">Role</label>
                      <select
  className="form-select"
  id="role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  required
>
  <option value="">Select Role</option> {/* Ensure this is not skipped */}
  <option value="admin">Admin</option>
  <option value="user">User</option>
</select>

                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact" className="form-label">Contact</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="contact"
                        value={contact}
                        onChange={(e)=>setContact(e.target.value)}
                        placeholder="Enter your contact number"
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center mt-3 mb-3">
                    <small className="text-muted" style={{fontStyle : "italic",color:"black"}}>Have an account? <Link to="/" className="text-primary">Login In</Link></small>
                  </div>
                  <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;