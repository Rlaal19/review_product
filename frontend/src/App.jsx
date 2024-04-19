import React from 'react'
import './App.css'
import Navbar from './component/navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './component/Product/view';
import Post from './component/Addpost/addpost';
import Showpost from './component/Showpost/showpost';
import Contect from './component/Contact/contect';
import Login from './component/Login/login'
import Register from './component/Register/register'
import './App.css'

function App() {

  return (
    <div className="App-bg">
    <BrowserRouter>
    <div  className='mx-auto max-w-7xl'>
      <Navbar/>
    </div>
      <Routes>
        <Route>
            <Route path="product" element={<Product />} />
            <Route path="post" element={<Post />} />
            <Route path="showpost" element={<Showpost />} />
            <Route path="contect" element={<Contect />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App