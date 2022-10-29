import React from "react";

import "../files.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Pnrsearch() {
  return (
    <div>
      <p>Find My PNR</p>
      <form>
        <br />
        <TextField required id="outlined-required" label="PNR Enquiry" /> <br />
        <br />
        <Button variant="contained">ENQUIRE</Button>
      </form>
    </div>
  );
}

export default Pnrsearch;
