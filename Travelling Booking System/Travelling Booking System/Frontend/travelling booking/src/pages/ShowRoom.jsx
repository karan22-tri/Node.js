import React from 'react';
import "../pages/ShowRoom.css";
import { Navigate, useNavigate } from 'react-router-dom';

function ShowRoom({ data }) {
const navigate=useNavigate();
  const book=()=>{
    navigate("/status")
  }
  
  return (
    <>
     <div className="show-1">
      {data && data.map((el, i) => (
        <div key={i} className="card">
          <img
            src={`http://localhost:8008/${el.image}`}
            className="card-img-top"
            alt={el.name}
          />
          <div className="card-body">
            <h2 className="card-title">{el.name}</h2>
            <h4 className="card-price">{el.price}</h4>
            <p className="card-text">{el.desc}</p>
            <button className="btn btn-primary" onClick={(e)=>book(el._id)}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
    </>
   
  );
}

export default ShowRoom;
