import React, { useEffect, useState } from 'react'
import '../pages/CreateFlight.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

export default function Addflights({role}) {

  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [desc,setDes]=useState("");
  const [image,setimage]=useState("");

    const [data,setData]=useState([]);
  


  const navigate=useNavigate();

  const handleflights=async(e)=>{
    e.preventDefault();

    const formdata=new FormData();
    formdata.append('name',name);
    formdata.append('price',price)
    formdata.append('desc',desc)
    formdata.append('image',image)

    await axios.post("http://localhost:8008/flights/createflight",formdata,
      {
       withCredentials : true
      })
      .then((res)=>{  
         console.log(res)
         alert("Successfully added flight");
         navigate("/createflight")
         setName("")
         setPrice("")
         setDes("")
         setimage("")
         
         
      })
      .catch((err)=>{
         console.log(err)
      })
  
    

    }
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

    const handleDelete=async(id)=>{
      console.log(id)
       await axios.delete(`http://localhost:8008/flights/deleteflight/${id}`, {
        withCredentials: true,
      })
       .then((res)=>{
         console.log(res.data);
       setData(data.filter((flight)=>flight._id!==id))
       alert(` Data  deleted successfully`);

       })
       .catch((err)=>{
        alert("Something went to wrong please Try again..")
       })
    }
    
  


  return (
    <>
    {/* <Header/> */}
    <Header role={role}/>
     <div className="main">
        <div className="container">
        <form  onSubmit={handleflights} encType="multipart/form-data">
  
  <div class="segment">
    <h1>Add Flights</h1>
  </div>
  
  <label>
    <input type="text" placeholder="Add Flight Name" value={name} onChange={(e)=>setName(e.target.value)}/>
  </label>
  <label>
    <input type="text" placeholder="Add Destiny" value={desc} onChange={(e)=>setDes(e.target.value)}/>
  </label>
  <label>
    <input type="text" placeholder="Add Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
  </label>
  <label>
    <input type="file" accept="image/*" onChange={(e)=>setimage(e.target.files[0])}/>
  </label>
  
  <button class="red" type="submit">ADD FLIGHT</button>
  
</form>

        </div>


     </div>
        <div className="view">
            <table border={1}>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>Flight Image</th>
                        <th>Flight Name</th>
                        <th>Flight Destiny</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                
                           
  {data.map((flight, index) => (
    <tr key={flight._id}>
      <td>{index + 1}</td>
      <td style={{height:"120px"}}>
        <img 
          src={`http://localhost:8008/${flight.image}`} 
          alt={flight.name} 
          style={{ width: '100px', height: '100px', borderRadius:"40px"}} 
        />
      </td>
      <td>{flight.name}</td>
      <td>{flight.desc}</td>
   
      <td>
        <button onClick={() => handleDelete(flight._id)}>DELETE</button>
      </td>
    </tr>
  ))}

                </tbody>
            </table>
        </div>

    </>
  )
}
