import React, { useEffect, useState } from 'react'
import '../pages/CreateRoom.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

export default function Addrooms({role}) {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [desc,setDes]=useState("");
  const [image,setimage]=useState("");

    const [data,setData]=useState([]);
  


  const navigate=useNavigate();

  const handlerooms=async(e)=>{
    e.preventDefault();

    const formdata=new FormData();
    formdata.append('name',name);
    formdata.append('price',price)
    formdata.append('desc',desc)
    formdata.append('image',image)

    await axios.post("http://localhost:8008/rooms/createroom",formdata,
      {
       withCredentials : true
      })
      .then((res)=>{  
         console.log(res)
         alert("Successfully added rooms");
         navigate("/createroom")
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

    const handleDelete=async(id)=>{
      console.log(id)
       await axios.delete(`http://localhost:8008/rooms/deleteroom/${id}`, {
        withCredentials: true,
      })
       .then((res)=>{
         console.log(res.data);
       setData(data.filter((room)=>room._id!==id))
       alert(` Data  deleted successfully`);

       })
       .catch((err)=>{
        alert("Something went to wrong please Try again..")
       })
    }
    
  
  return (
    <>
   

    <Header role={role}/>
     <div className="main-1">
            {/* <h1>Add Rooms</h1> */}
            
        <div className="container">
        <form onSubmit={handlerooms} encType="multipart/form-data">
  
  <div class="segment">
    <h1>Add Rooms</h1>
  </div>
  
  <label>
    <input type="text" placeholder="Add Room Title" value={name} onChange={(e)=>setName(e.target.value)}/>
  </label>
  <label>
    <input type="number" placeholder="Add Room Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
  </label>
  <label>
    <input type="text" placeholder="Add Room Discription" value={desc} onChange={(e)=>setDes(e.target.value)}/>
  </label>
  <label>
    <input type="file" accept='image/*' onChange={(e)=>setimage(e.target.files[0])}/>
  </label>
  
  
  
  <button class="red" type="submit">ADD ROOM</button>


  
  
  
</form>

        </div>

     </div>

     <div className="view">
            <table border={1} style={{textAlign:"center"}}>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>ROOM IMAGE</th>
                        <th>ROOM  TITLE</th>
                        <th>ROOM DISCRIPTION</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                  
  {data.map((room, index) => (
    <tr key={room._id}>
      <td>{index + 1}</td>
      <td style={{height:"120px"}}>
        <img 
          src={`http://localhost:8008/${room.image}`} 
          alt={room.name} 
          style={{ width: '100px', height: '100px', borderRadius:"40px"}} 
        />
      </td>
      <td>{room.name}</td>
      <td>{room.desc}</td>
   
      <td>
        <button onClick={() => handleDelete(room._id)}>DELETE</button>
      </td>
    </tr>
  ))}
</tbody>
            </table>
        </div>

    </>
  )
}
