import React from "react";
import { Link } from "react-router-dom";
import './files.css'

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./files.css";
import trainImg from "./train_img.jpg";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Homepage() {
  return (
    <div className="abc">
      <Navbar />
      <div className="homepage_main">
        <div className="train_query">
          <div className="train_query_input">
            <p>Book Your Ticket </p>

            <TextField 
            id="outlined-search" 
            label="Departure"
            type="search" />
            <br />
            <br />

            <TextField 
            id="outlined-search" 
            label="Arrival" 
            type="search" />
            <br />
            <br />
            <TextField 
            id="outlined-search" 
            label="DD/MM/YYYY" 
            type="search" />

            <br />
            <br />
            <Button variant="contained">SEARCH TRAINS</Button>
          </div>
        </div>
        <div className="train_image_homepage">
          <img src={trainImg} className="train_img" />
        </div>
      </div>
      <div className="train_enquiry_homepage">
        <div className="search_train_homepage">
          <div>
            <p>Search Train</p><br/>
            <TextField
              required
              id="outlined-required"
              label="Train Number"
              defaultValue="22843"
            />
            <TextField
              required
              id="outlined-required"
              label="Departure Date"
              defaultValue="DD/MM/YYYY"
            /><br/><br/>
            <Button variant="contained">FIND</Button>
          </div>
        </div>
        <div className="find_pnr_homepage">
          <div>
            <p>Find My PNR</p><br/>
            <TextField
              required
              id="outlined-required"
              label="PNR Enquiry"
              defaultValue="22843"
            /> <br /><br/>
            <Button variant="contained">ENQUIRE</Button>
          </div>
        </div>  
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
