import React, { useState }from "react";
import "../files.css";
import "./bookticket.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Bookticket() {
  const [trainDeatails, setTrainDetails] = useState({
    departure: "",
    arrival: "",
    date: ""
  });


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/getTrains", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(trainDeatails)
        });
        let res=await response.json();
        console.log(res);
    }
    catch (err){
      console.log(err);
    }
  }

  function handleChange(event){
    const newValue = event.target.value;
    const inputname = event.target.name; 
    setTrainDetails(prevValue => {
      if(inputname === "departure"){
          return {
            departure: newValue,
            arrival: prevValue.arrival,
            date: prevValue.date,
          };
      }
      else if(inputname === "arrival"){
        return {
          departure: prevValue.departure,
          arrival: newValue,
          date: prevValue.date,
        };
      }
      else{
        return {
          departure: prevValue.departure,
          arrival: prevValue.arrival,
          date: newValue,
        };
      }
    })
  }

  return (
    <div className="bookticket">
      <div className="flex-child">
        <h1>Book Your Ticket </h1>
        <form>
          <TextField id="outlined-search" label="Departure" type="search" name="departure" onChange={handleChange}/>
          <TextField id="outlined-search" label="Arrival" type="search" name="arrival" onChange={handleChange}/>
          <input type="date" id="Jdate" lable="date" placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" name="date" onChange={handleChange}></input>
          <Button onClick={ onSubmitForm } variant="contained">SEARCH TRAINS</Button>
        </form>
      </div>
      <div className="flex-child">
            {/* Map goes here */}
      </div>
    </div>
  );
}

export default Bookticket;
