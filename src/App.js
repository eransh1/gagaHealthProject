import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Pricing from './pages/Pricing/Pricing';
import ThankYou from './pages/Thank You/ThankYou';

const App = () => {
  return (
    <>
     <Navbar />
    <Routes>
    <Route path='/' element={<Pricing/>}></Route>
      <Route path='/thankYou' element={<ThankYou/>}></Route>
    </Routes>
     
    </>
  )
}

export default App