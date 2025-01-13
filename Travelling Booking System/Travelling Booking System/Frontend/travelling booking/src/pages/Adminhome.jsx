import React from 'react'
import '../pages/Adminhome.css';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';


function Home({role}) {

  return (
    <>
    

    <Header role={role}/>


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
       <Link to="/createroom">
       <button>Add Room Details</button>
       </Link>
       
     </div>
     <div className="m1">
      <Link to="/createflight">
      <button>Add Flights Details</button>
      
      </Link>
     </div>
     
           </div>
       </div>
     </div>

 
   </>
  )
}

export default Home