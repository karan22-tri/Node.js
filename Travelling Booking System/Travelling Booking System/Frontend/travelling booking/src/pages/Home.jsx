import React from 'react'
import '../pages/Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function Home({role}) {
  const navigate=useNavigate();

  const handlelogout=()=>{
    navigate("/")
  }
  return (
    <>
    {/* <header className="navbar">
         <div className="logo">
             <h1 className='ps-3'>TravelMate</h1>
         </div>
         <nav>


<ul className="links-container pt-3">

           
<li className="link-item"><a href="/home">Home</a></li>

 
      <li className="link-item"><a href="/createroom">Rooms</a></li>
      <li className="link-item"><a href="/createFlights">Flights</a></li>  
  </ul>

                     </nav>
         <div className="search-container">
             <button type="button">Booking Status</button>
         </div>
         
     </header> */}

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

     <div className='a-header'>
       <div className='a-img'>
  <h1>
  It is Better to <br />
  Travel Well Than <br />
   to Arrive
  </h1>
<br />
  <div className='main1'>
    

<div className="m1">
       <Link to="/room">
       <button>Rooms Booking Now</button>
       </Link>
       
     </div>
     <div className="m1">
      <Link to="/flights">
      <button>Flights Booking Now</button>
      
      </Link>
     </div>

   
     
           </div>
       </div>
     </div>

 
   </>
  )
}

export default Home