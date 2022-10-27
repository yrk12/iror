import React from "react"
import { Link } from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import Button from "@mui/material/Button"
import "../files.css"

function Navbar() {
  
  return (
    <div className="navbar_main">
      <div className="iror">
        <p><a href="/">IROR</a></p>
      </div>
      <div className="nav_buttons">
        <div>
          <Button variant="outlined" href="./register">REGISTER</Button>
        </div>
        <div>
          <Button variant="contained" href="./login">LOGIN</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;