import React from "react";
import "./Details.css";
import Button from "@mui/material/Button";

function Tickets() {
    return (
        <div>
            <div className="information">
                <div className="box">
                    <h3>NGP DURONTO</h3>
                    <h3>12340</h3>
                    <h4>PNR: 12321JK12312</h4>
                    <h4>2 Passengers</h4>
                    <div style={{display: 'flex'}}>
                        <Button variant="outlined" style={{marginRight : '30px', border: '1px solid #EF5350', borderRadius: '4px', color: '#EF5350' }}>Cancel Ticket</Button>
                        <Button variant="contained" style={{backgroundColor: '#03A9F4'}}>Print Ticket</Button>
                    </div>
                </div>
                <div className="box">
                    <h3>Nagpur</h3>
                    <h4>14:05</h4>
                    <h4>Sat, 29 Oct</h4>
                </div>
                <div className="box">
                    <h5>20 Hrs 11 Mins</h5>
                    <h5>Runs On</h5>
                    <h5>Saturday</h5>
                </div>
                <div className="box">
                    <h3>Mumbai</h3>
                    <h4>10:11</h4>
                    <h4>Sun, 30 Oct</h4>
                </div>
            </div>
        </div>
    );
}

export default Tickets;