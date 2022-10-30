import React, {useState} from "react";

import "../files.css";
import "./trainsearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Trainsearch() {
  const [ID, setID] = useState({
    tID: ""
  });

  
  function handleChange(event){
    const newValue = event.target.value;
    setID(prevValue => {return{
       tID: newValue
      }
    })
  }


  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(ID);
    try {
      const response = await fetch("http://localhost:5000/getRoute", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ID)
        });
        let res=await response.json();
        console.log(res);
    }
    catch (err){
      console.log(err);
    }
  }

  return (
    <div className="trainsearch">
      <div className="flex-child">
        <h2>Search Train</h2>
        <form onSubmit={ onSubmitForm }>
          <TextField required id="outlined-required" label="Train Number" onChange={handleChange}/>
          <Button type="sumbit" variant="contained">FIND</Button>
        </form>
      </div>
      <div className="flex-child">
        {/* Map goes here */}
      </div>
    </div>
  );
}

export default Trainsearch;
