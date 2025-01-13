import React, { useEffect, useState } from 'react';
import '../pages/Room.css';
import { Link, useNavigate } from 'react-router-dom';
import ShowRoom from './ShowRoom';
import axios from 'axios';
import Header from '../Components/Header';

function Room({role}) {

  const [data,setData]=useState([]);

  const navigate=useNavigate()
  
  const fetchingdata = async () => {
    try {
      const res = await axios.get("http://localhost:8008/rooms/viewroom", {
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
    navigate("/");
  }

  return (
    <>
  {/* <Header role={role}/> */}
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
         <button type="button" style={{background:"red"}} onClick={handlelogout}>Log out</button>
&nbsp;
             <button type="button">Status</button>
         </div>
         
     </header>
     <div className='b-header'>
       <div className='b-img'>
  <h1>
  World Class <br />
  Accommodation <br />
  </h1>
<br />
 
       </div>
     </div>

     <section className='rooms-1a'><br />
     
  <h1 >Our Rooms</h1>
  <p style={{fontStyle:"italic",fontSize:"19px"}}>
    Discover a hotel that defines a new dimension of luxury.
  </p>
     </section>


<section className='room-2'>

  <ShowRoom data={data}/>
  
</section>
 
   </>

  )
}

export default Room