import React from "react";
import Tickets from "./Tickets.jsx";
import "./mybookings.css";

function Mybookings () {
    return (
        <div className="mybookings">
            <div className="mybookings-child"><h1>Your Bookings</h1></div>
            <div className="mybookings-child"><Tickets/></div>
        </div>
    );
}

export default Mybookings;