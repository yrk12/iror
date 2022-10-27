import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './homepage';
import Register from './register';
import Login from './login';

import './files.css'

function Layout() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
        </Routes>
    </Router>
  );
}

export default Layout;


