import React from "react";
import "./Details.css";

function Details() {
    return (
        <div className="trainDetails">
            <h1 style={{margin: '30px 100px'}}>Book Your Ticket</h1>
            <div className="booking">
                <div className="book">
                    <p>Departure</p>
                    <input type="time" name="" id="" />
                </div>
                <div className="book">
                    <p>Arival</p>
                    <input type="time" name="" id="" />
                </div>
                <div className="book">
                    <p>Date</p>
                    <input type="date" name="" id="" />
                </div>
                <div className="book">
                    <button style={{backgroundColor: '#1976D2', marginTop: '50px'}}>Modify Search</button>
                </div>
            </div>
            <h3 style={{margin: '40px 100px '}}>3 Results</h3>
            <div className="information">
                <div className="data"><h3>Train Name and No</h3></div>
                <div className="data"><h3>Departure</h3></div>
                <div className="data"><h3>Duration</h3></div>
                <div className="data"><h3>Arrival</h3></div>
            </div>
            <div>
                <div className="information">
                    <div className="box">
                        <h3>NGP DURONTO</h3>
                        <h3>12340</h3>
                        <h4 style={{color: '#4CAF50'}}>30 Left</h4>
                        <div style={{display: 'flex'}}>
                            <button>Book Now</button>
                            <h4 style={{color: '#03A9F4'}}>₹2,100</h4>
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
        </div>
    );
}

export default Details;