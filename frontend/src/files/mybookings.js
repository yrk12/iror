import React, {useState} from "react";
import Tickets from "./Tickets.jsx";
import "./mybookings.css";

function Mybookings () {

    const getTickets = () => {
        let userId = sessionStorage.getItem("userID");

        console.log(userId);
    }

    React.useEffect(() => {
        getTickets();
    }, []);


    return (
        <div className="mybookings">
            <div className="mybookings-child"><h1>Your Bookings</h1></div>
            <div className="mybookings-child"><Tickets/></div>
        </div>
    );
}

export default Mybookings;