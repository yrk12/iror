import React from "react";

import "../files.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Pnrsearch() {
  return (
    <div>
      <h2>Find My PNR</h2>
      <form>
        <TextField required id="outlined-required" label="PNR Enquiry" /> <br />
        <Button variant="contained">ENQUIRE</Button>
      </form>
    </div>
  );
}

export default Pnrsearch;
