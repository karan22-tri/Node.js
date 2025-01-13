import React, { useEffect, useState } from 'react';
import '../pages/Flight.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import ShowFlight from './ShowFlight';


function Flight({role}) {

  const [data,setData]=useState([]);

  const navigate=useNavigate();

   
  const fetchingdata = async () => {
    try {
      const res = await axios.get("http://localhost:8008/flights/viewflight", {
        withCredentials: true,
      });
      console.log(res.data.msg); 
      setData(res.data.msg); 
    } catch (err) {
      console.error(err);
    }
  };
  
    useEffect(() => {
      fetchingdata(); 
    }, []); 

  const handlelogout=()=>{
    navigate("/")
  }
  return (
    <>
    
  
<header className="navbar">
         <div className="logo">
             <h1 className='ps-3'>TravelMate</h1>
         </div>
         <nav>


<ul className="links-container pt-3">

           
<li className="link-item"><a href="/home">Home</a></li>

 
      <li className="link-item"><a href="/room">Rooms</a></li>
      <li className="link-item"><a href="/flights">Flights</a></li>  
  </ul>

                     </nav>
         <div className="search-container">
         <button type="button" style={{background:"red"}} onClick={handlelogout}>Log out</button> &nbsp;
             <button type="button">Status</button>
         </div>
         
     </header>
     <div className='c-header'>
       <div className='c-img'>
  <h1>
  Travel far, travel wide,  <br />
  travel without regrets <br />
  
  </h1>
<br />
 
       </div>
     </div>

     <section className='rooms-1b'><br />
     
  <h1 >Available Flights</h1>
  <p style={{fontStyle:"italic",fontSize:"19px"}}>
  Discover luxury hotel, redefine comfort with flight booking.
  </p>
     </section>


<section className='room-2'>

<ShowFlight  data={data} />  

</section>
 
   </>

  )
}

export default Flight;