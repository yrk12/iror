import React from "react";
import "./tickets.css";
import Button from "@mui/material/Button";

function Tickets(props) {
    props=props.props;
    const months={"01": "Jan","02": "Feb","03": "Mar","04": "Apr","05": "May","06": "Jun","07": "Jul","08": "Aug","09": "Sep","10": "Oct","11": "Nov","12": "Dec"};
    return (
        <div className="tickets-box">
            <div className="ticket-information">
                <div className="ticket-child">
                    <h3>{ props.trainName }</h3>
                    <h3>{props.trainId}</h3>
                    <h4>PNR: 12321JK12312</h4>
                    <h4>{props.noOfPassengers} Passengers</h4>
                </div>
                <div className="ticket-child">
                    <h3>{props.departureStation}</h3>
                    <h4>{props.departureTime}</h4>
                    <h4>{ props.departureDate.slice(8, 10) } {months[props.departureDate.slice(5, 7)]}</h4>
                </div>
                <div className="ticket-child">
                    <h5>{props.durationHours} Hrs {props.durationMinutes} Mins</h5>
                    <h5>Runs On</h5>
                    <h5>{props.runsOn}</h5>
                </div>
                <div className="ticket-child">
                    <h3>{props.arrivalStation}</h3>
                    <h4>{props.arrivalTime}</h4>
                    <h4>{ props.arrivalDate.slice(8, 10) } {months[props.arrivalDate.slice(5, 7)]}</h4>
                </div>
            </div>
            <div className="ticket-information-30">
                <Button variant="outlined" style={{marginRight : '30px', border: '1px solid #EF5350', borderRadius: '4px', color: '#EF5350' }}>Cancel Ticket</Button>
                <Button variant="contained" style={{backgroundColor: '#03A9F4'}}>Print Ticket</Button>
            </div>
        </div>
    );
}

export default Tickets;