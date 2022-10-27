import React from "react";
import "../files.css";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div className="navbar_main">
      <div className="iror">
        <p>IROR</p>
      </div>
      <div className="nav_buttons">
        <div>
          <Button variant="outlined">REGISTER</Button>
        </div>
        <div>
          <Button variant="contained">LOGIN</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;