import React from "react";
import './files.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

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