import React from "react";
import { Link } from "react-router-dom";
import Navbar from './components/navbar'
import Footer from './components/footer'
import './files.css'

function Homepage(){
    return (
        <div className="abc">
            <Navbar/>
            <h1>Homepage</h1>
            <h2>hello </h2>
            <Footer/>
        </div>

    );
}

export default Homepage;