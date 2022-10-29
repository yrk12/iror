import React from "react";
import "./Schedule.css";

function Schedule() {
    // var data = props.props;
    return (
        <div className="trainSchedule">
            <h1>Train Schedule</h1>
            <div className="info">
                <div>
                    <h3>Train Number</h3>
                    <p>12906</p>
                </div>
                <div>
                    <h3>Train Name</h3>
                    <p>SHM PBR SUF EXP</p>   
                </div>
                <div>
                    <h3>Start Station</h3>
                    <p>SHALIMAR</p>
                </div>
                <div>
                    <h3>Destination Station</h3>
                    <p>PORBANDAR</p>
                </div>
                <div>
                    <h3>Runs On</h3>
                    <p>Wed</p>
                </div>
            </div>
            <div style={{marginLeft: '100px', marginRight: '100px'}}>
                <table className="content">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Station Name</th>
                            <th>Arrival Time</th>
                            <th>Departure Time</th>
                            <th>Distance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nagpur</td>
                            <td>12:00</td>
                            <td>14:05</td>
                            <td>130</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nagpur</td>
                            <td>12:00</td>
                            <td>14:05</td>
                            <td>130</td>
                        </tr>
                        {/* {data.map((train) => (
                            <tr>
                                <td>{train.no}</td>
                                <td>{train.name}</td>
                                <td>{train.arrival}</td>
                                <td>{train.departure}</td>
                                <td>{train.distance}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Schedule;