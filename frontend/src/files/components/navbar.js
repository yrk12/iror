import React from "react";
import Button from "@mui/material/Button";

import "../files.css";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar_main">
      <div className="iror">
        <h3>IROR</h3>
      </div>
      <div className="nav_buttons_C">
      <div>
          <Button variant="contained">LOGIN</Button>
        </div>
        <div className="">
          <Button variant="outlined">REGISTER</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;