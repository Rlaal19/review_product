import React from 'react'
import './App.css'
import Navbar from './component/navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './component/Product/view';
import Post from './component/Post/post';
import Contect from './component/Contact/contect';
import Homepage from './component/Homepage/homepage';
import '../src/App.css'

function App() {

  return (
    <div className="App-bg">
    <BrowserRouter>
    <div className='mx-auto max-w-7xl'>
      <Navbar/>
    </div>
      <Routes>
        <Route>
            <Route path="product" element={<Product />} />
            <Route path="post" element={<Post />} />
            <Route path="contect" element={<Contect />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App