import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Components/Registration';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Categories from './Components/Categories/Categories';
import Subcategories from './Components/Sub-categories/Subcategories';
import ViewCategories from './Components/Categories/ViewCategories';
import Product from './Components/Products/Product';
import ViewProducts from './Components/Products/ViewProducts';
import EditCategories from './Components/Categories/EditCategories';
import EditProduct from './Components/Products/EditProduct';
function App() {
 

  return (
  
       <BrowserRouter>
     <Routes>

     <Route path="/" element={<Login/>} /> 
     <Route path='/registration' element={<Registration/>} />
     <Route path='/dashboard' element={<Dashboard/>}></Route>
     <Route path='/categories' element={<Categories/>} />
     <Route path='/subcategories' element={<Subcategories/>}/>
     <Route path='/viewcategories' element={<ViewCategories/>}/>
     <Route path='/editcategories' element={<EditCategories/>}/>
     <Route path='/product' element={<Product/>}/>
     <Route path='/viewproduct' element={<ViewProducts/>}/>
     <Route path='/editproduct' element={<EditProduct/>}/>
     

     </Routes>
     </BrowserRouter>
      
  
    
  )
}

export default App
