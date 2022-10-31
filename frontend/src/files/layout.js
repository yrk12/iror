import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './homepage';
import Register from './register';
import Login from './login';
import Schedule from "./schedule";
import Details from './Details';
import Mybookings from "./mybookings"

import './files.css'

function Layout() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/train-schedule" element={<Schedule/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/mybookings" element={<Mybookings/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default Layout;


