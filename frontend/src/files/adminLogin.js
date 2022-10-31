import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import './files.css'

function adminLogin() {
  return (
    <div className="admin_login" >
        <div>
        <h3>Admin Login</h3>
            <br />
            <form>
              <TextField
                sx={{ width: 319 }}
                required
                id="outlined-required"
                name="email"
                label="Email"
              />
              <br />
              <br />
              <TextField
                sx={{ width: 319 }}
                id="outlined-password-input"
                required
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
              />
              <br /> <br />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </form>
        </div>
    </div>
  );
}

export default adminLogin;


