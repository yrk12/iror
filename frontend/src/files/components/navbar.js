import React from "react"
import { Link } from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import Button from "@mui/material/Button"

import "../files.css";
import "./navbar.css";

function Navbar() {
  
  return (
    <navbar className="navbar_main">
      <div className="iror">
      <h3><a href="/" style={{ textDecoration: 'none' }}>IROR</a></h3>
      </div>
      <div className="nav_buttons_C">
        <div>
            <Button variant="contained" href="./login">LOGIN</Button>
        </div>
        <div>
          <Button variant="outlined" href="./register">REGISTER</Button>
        </div>
      </div>
    </navbar>
  );
}

export default Navbar;