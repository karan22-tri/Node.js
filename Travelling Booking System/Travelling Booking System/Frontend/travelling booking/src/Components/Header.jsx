import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = ({role}) => {
    return (
      <>
       <header className="navbar">
            <div className="logo">
                <h1 className='ps-3'>TravelMate</h1>
            </div>
           
            {
  role === "user" && (
    <>
      <nav>
        <ul className="links-container pt-3">
          <li className="link-item"><a href="/home">Home</a></li>
          <li className="link-item"><a href="/room">Rooms</a></li>
          <li className="link-item"><a href="/flights">Flights</a></li>
          <li className="link-item"><a href="/">Log Out</a></li>
        </ul>
      </nav>
    </>
  )
}

{
  role === "admin" && (
    <>
      <nav>
        <ul className="links-container pt-3">
          <li className="link-item"><a href="/useradmin">Home</a></li>
          <li className="link-item"><a href="/createroom">Rooms</a></li>
          <li className="link-item"><a href="/createflight">Flights</a></li>
          <li className="link-item"><a href="/">Log Out</a></li>
        </ul>
      </nav>
    </>
  )
}

           
            <div className="search-container">
                <button type="button">Booking Status</button>
            </div>
            
        </header>

        

    
      </>
       
    );
};

export default Header;