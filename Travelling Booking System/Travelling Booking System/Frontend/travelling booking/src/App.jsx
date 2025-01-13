  import './App.css'
  import { lazy,Suspense } from 'react';
  import Home from './pages/Home';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Room from './pages/Room';
  import Flight from './pages/Flight';
  import CreateRoom from './pages/CreateRoom';
  import CreateFlight from './pages/CreateFlight';
  const Login= lazy(()=>import ('./pages/Login'));
  const Registration =lazy(()=>import('./pages/Registration') );
  import Adminhome from './pages/Adminhome'
  import Cookies from 'js-cookie';
  import { useState } from 'react';
  import Header from './Components/Header';
  // import { Loader } from 'rsuite';
  // import { Loader, Placeholder } from 'rsuite';


  function App() {

    const [roles,setRoles]=useState(null);

    const role=Cookies.get("role") || roles 

    console.log(role);

    setTimeout(() => {
        
    }, 1500);
    return (
      <>
      <BrowserRouter>
      
      <Suspense fallback={

        <div style={{textAlign:"center",marginTop:"15%"}} onCanPlay={setTimeout}>
      <h1>Loading ...</h1>
    </div>
      }>
      <Routes>
      
      <Route path="/" element={<Login setRoles={setRoles}/>} /> 
      <Route path='/registration' element={<Registration />} />
      {
    role=="user" && (
      <>
      
      <Route path="/home" element={<Home/>} role={role}/>
      <Route path="/room" element={<Room/>}  role={role}/>
      <Route path="/flights" element={<Flight/>} role={role} />

      </>
    )
  }

  {
    role=="admin" && (
      <>
    <Route path='/useradmin' element={<Adminhome role={role}/> }></Route>
      <Route path="/createroom" element={<CreateRoom role={role}/>}></Route>
      <Route path="/createflight" element={<CreateFlight role={role}/>}></Route>
      </>
    )
  }

      </Routes>
      </Suspense>
      </BrowserRouter>
        
      </>
    )
  }

  export default App
