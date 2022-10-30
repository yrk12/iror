import React from "react";

import "../files.css";
import "./pnrsearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Pnrsearch() {
  return (
    <div className="pnrsearch">
      <div className="flex-child">
        <h2>Find My PNR</h2>
        <form>
          <TextField required id="outlined-required" label="PNR Enquiry" />
          <Button type="submit" variant="contained">ENQUIRE</Button>
        </form>
      </div>
      <div className="flex-child">
        {/* Map goes here */}
      </div>
    </div>
  );
}

export default Pnrsearch;
