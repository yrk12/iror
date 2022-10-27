import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import trainImg from "./register_img.png";

function Register() {
    return (
        <div className="login_page">
            <div className="login_main">
        <div className="train_image">
          <img src={trainImg}/>
        </div>
        <div className="login_input">
          <div>
            <h3>Register</h3>
            <br />
            <TextField
              sx={{width: 319}}
              required
              id="outlined-required"
              label="First Name"
              defaultValue="John"
            /> 
            <br />
            <br />
            <TextField
              sx={{width: 319}}
              required
              id="outlined-required"
              label="Last Name"
              defaultValue="Doe"
            />
            <br /> <br />
            <TextField
              sx={{width: 319}}
              required
              id="outlined-required"
              label="Email"
              defaultValue="abc@gmail.com"
            />
            <br /> <br />
            <TextField
              sx={{width: 319}}
              required
              id="outlined-required"
              label="Contact No"
              defaultValue="00-0000-0000"
            />
            <br /> <br />
            <TextField
              sx={{width: 319}}
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
        </div>
    );
}


export default Register;