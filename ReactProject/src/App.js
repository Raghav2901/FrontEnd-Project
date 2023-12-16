import React from 'react';
import Newnavbar from "./components/newnavbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Services from "./components/Services";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';




function App (){

  
  return (  
    <>
      <Newnavbar /><button
        type="button"
        onClick={() => setColor("blue")}>Blue</button>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>

  )
}

export default App;
