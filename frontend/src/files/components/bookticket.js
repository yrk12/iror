import React from "react";
import "../files.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Bookticket() {
  return (
    <div className="train_query_input">
      <p>Book Your Ticket </p>
      <form>
        <TextField id="outlined-search" label="Departure" type="search" />
        <br />
        <br />
        <TextField id="outlined-search" label="Arrival" type="search" />
        <br />
        <br />
        <TextField id="outlined-search" label="DD/MM/YYYY" type="search" />
        <br />
        <br />
        <Button variant="contained">SEARCH TRAINS</Button>
      </form>
    </div>
  );
}

export default Bookticket;
