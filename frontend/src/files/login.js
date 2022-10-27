import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import trainImg from "./register_img.png";
import "./files.css";

function Login() {
  return (
    <div className="login_page">
      <div className="login_main">
        <div className="train_image">
          <img src={trainImg}/>
        </div>
        <div className="login_input">
          <div>
            <h3>Login</h3>
            <br />
            <TextField
              sx={{width: 319}}
              required
              id="outlined-required"
              label="Email"
              defaultValue="abc@gmail.com"
            />
            <br /><br />
            <TextField
              sx={{width: 319}}
              id="outlined-password-input"
              required
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <br /> <br />
            <Button variant="contained">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
