import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./addtrain.css";

function Addtrain() {
  return (
    <div className="add-train">
      <form>
        <h2>Train Detials</h2>
        <div className="train-details">
          <div className="train-details-child">
            <TextField required name="tname" label="Train Name" />
          </div>
          <div className="train-details-child">
            <TextField required name="runson" label="Runs On" />
          </div>
          <div className="train-details-child">
            <TextField required name="seats" label="Total Seats" />
          </div>
          <div className="train-details-child">
            <TextField required name="starttime" label="Start Time" />
          </div>
        </div>
        <h2>Route Detials</h2>
        <div className="route-detials">
          <div className="route-form-container">
            <div className="route-form-repeat">
              <div className="route-form-repeat-child">
                <TextField required name="sname" label="Station Name" />
              </div>
              <div className="route-form-repeat-child">
                <TextField required name="tfs" label="Time From Start(mins)" />
              </div>
              <div className="route-form-repeat-child">
                <Button
                  color="warning"
                  variant="contained"
                >
                  Remove Station
                </Button>
              </div>
              <div className="route-form-repeat-child"></div>
            </div>
            <Button
              sx={{ backgroundColor: "#4CAF50" }}
              type="submit"
              variant="contained"
            >
              Add Station
            </Button>
          </div>
        </div>
        <Button
          sx={{ backgroundColor: "#4CAF50" }}
          type="submit"
          variant="contained"
        >
          Add Train and Route
        </Button>
      </form>
    </div>
  );
}

export default Addtrain;
