import './App.css'
import { lazy,Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login= lazy(()=>import ('./pages/Login'));
const Registration =lazy(()=>import('./pages/Registration') );
import Adminhome from './pages/AdminHome'
import Cookies from 'js-cookie';
import { useState } from 'react';
import Home from './pages/Home';
import TaskForm from './pages/TaskForm';
import Viewtask from './pages/Viewtask';
import Showproject from './pages/Showproject';
import Addproject from './pages/Addproject';
import Viewproject from './pages/Viewpoject';
import EditTask from './pages/edittask';

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
    <Route path='/taskform' element={<TaskForm/>} role={role}/>
    <Route path='/viewtask' element={<Viewtask/>} role={role}/>
    <Route path='/showproject' element={<Showproject/>} role={role}/>
    <Route path='/edittaskt' element={<EditTask/>} role={role}/>

    </>
  )
}

{
  role=="admin" && (
    <>
    <Route path='/useradmin' element={<Adminhome role={role}/> }></Route>
    <Route path='/addproject' element={<Addproject role={role}/>}></Route>
    <Route path='/viewproject' element={<Viewproject role={role}/>}></Route>
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
