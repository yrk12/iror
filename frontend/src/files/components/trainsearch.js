import React from "react";

import "../files.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Trainsearch() {
  return (
    <div>
      <p>Search Train</p>
      <br />
      <form>
        <TextField required id="outlined-required" label="Train Number" />
        <TextField required id="outlined-required" label="Departure Date" />
        <br />
        <br />
        <Button variant="contained">FIND</Button>
      </form>
    </div>
  );
}

export default Trainsearch;
