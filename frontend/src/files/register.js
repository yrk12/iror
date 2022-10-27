import React from "react";
import Navbar from './components/navbar'
import Footer from './components/footer'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import trainImg from "./train_img.jpg";

function Register() {
    return (
        <div className="login_page">
            <Navbar />
            <div className="login_main">
        <div className="train_image">
          <img src={trainImg} className="train_img" />
        </div>
        <div className="login_input">
          <div>
            <h3>Register</h3>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              defaultValue="John"
            /> 
            <br />
            <br />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              defaultValue="Doe"
            />
            <br /> <br />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue="abc@gmail.com"
            />
            <br /> <br />
            <TextField
              required
              id="outlined-required"
              label="Contact No"
              defaultValue="00-0000-0000"
            />
            <br /> <br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <br /><br />
            <Button variant="contained">Create Account</Button>
          </div>
        </div>
      </div>
            <Footer />
        </div>
    );
}


export default Register;