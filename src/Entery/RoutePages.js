import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Fruits from '../Pages/Fruits';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Navbar from '../Partials/Navbar';
import Contact from '../Pages/Contact';
import Footer from '../Partials/Footer';

const RoutePages = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/fruits' element={<Fruits/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default RoutePages;