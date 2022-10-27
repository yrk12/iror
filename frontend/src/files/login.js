import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./files.css";
import trainImg from "./train_img.jpg";
import Navbar from './components/navbar'
import Footer from './components/footer'




function Login() {
  return (
    <div className="login_page">
      <Navbar/>
      <div className="login_main">
        <div className="train_image">
          <img src={trainImg} className="train_img" />
        </div>
        <div className="login_input">
          <div>
            <h3>Login</h3>
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue="Hello World"
            />
            <br /><br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <br /> <br />
            <Button variant="contained">Login</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
