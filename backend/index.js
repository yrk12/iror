const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./connect");
const { response } = require("express");
app.use(cors());
app.use(express.json());

const pricePerMinute=2;

function getTime(dh, dm){
    let time="";
    if(dh<10){
        time = time + "0" + String(dh)+":";
    }
    else{
        time = time + String(dh)+":";
    }
    if(dm<10){
        time = time + "0" + String(dm)+":00";
    }
    else{
        time = time + String(dm)+":00";
    }
    return time;
}

app.post("/register", async(req, res) =>{
    try {
        req=req.body;
        console.log(req);   
        const newUser = await pool.query(
            "INSERT INTO Users (FirstName, LastName, Email, ContactNo, Password) VALUES ($1, $2, $3, $4, $5)",
            [req.fname, req.lname, req.email, req.contactNo, req.Password]
        );
        res.json({created: true});
    } catch (err) {
        res.json({created: false});
    }
});

app.post("/login", async(req, res) =>{
    try {
        req=req.body;
        console.log(req);   
        let User = await pool.query(
            "SELECT * FROM USERS WHERE EMAIL=$1",
            [req.email]
        );
        User=User.rows;
        if(User.length == 0){
            res.json({success: false});
        }
        else{
            if(User[0].password == req.Password){
                res.json({success: true});
            }
            else{
                res.json({success: false});
            }
        }
    } catch (err) {
        res.json({success: false});
    }
});

app.post("/getTrains", async(req, res) =>{
    
    let trainDetails = [];
    try {
        req=req.body;
        console.log(req);
        let trains = await pool.query(
            "SELECT DEPARTURE.TRAINID AS TRAINID, DEPARTURE.ROUTEID AS ROUTEID, DEPARTURE.CURRENTSTATION  AS DEPT, ARRIVAL.CURRENTSTATION AS ARR, to_char(DEPARTURE.CURRENTDATE, 'YYYY-MM-DD') AS DEPARTUREDATE, to_char(ARRIVAL.CURRENTDATE, 'YYYY-MM-DD') AS ARRIVALDATE, ARRIVAL.TIMEFROMSTART-DEPARTURE.TIMEFROMSTART AS DURATION, ARRIVAL.TIMEFROMSTART AS ARRIVALTIME, DEPARTURE.TIMEFROMSTART AS DEPARTURETIME FROM ROUTES AS DEPARTURE INNER JOIN ROUTES AS ARRIVAL ON (DEPARTURE.ROUTEID=ARRIVAL.ROUTEID AND DEPARTURE.TRAINID=ARRIVAL.TRAINID) WHERE DEPARTURE.CURRENTSTATION=$1 AND ARRIVAL.CURRENTSTATION=$2 AND ARRIVAL.TIMEFROMSTART>DEPARTURE.TIMEFROMSTART AND DEPARTURE.CURRENTDATE=$3;",
            [req.departure, req.arrival, req.date]
        );
        trains=trains.rows;
        //console.log(trains);
        for(let i=0;i<trains.length;i++){
            let currenTrain = await pool.query(
                "SELECT * FROM TRAINS WHERE TRAINID=$1;",
                [trains[i].trainid]
            );
            let remainingSeats = await pool.query(
                "SELECT MIN(REMAININGSEATS) FROM ROUTES WHERE TRAINID=$1 AND ROUTEID=$2 AND TIMEFROMSTART>=$3 AND TIMEFROMSTART<$4;",
                [trains[i].trainid, trains[i].routeid, trains[i].departuretime, trains[i].arrivaltime]
            );
            remainingSeats=remainingSeats.rows[0];
            currentTrain=currenTrain.rows[0];
            //console.log(currentTrain);
            let h=parseInt((currentTrain.starttime).slice(0, 3)), m=parseInt((currentTrain.starttime).slice(3,5));
            let dh=(h+Math.floor(trains[i].departuretime/60))%24, dm=(m+trains[i].departuretime%60)%60;
            dh+=Math.floor((m+trains[i].departuretime%60)/60);
            let departureTime = getTime(dh, dm);
            dh=(h+Math.floor(trains[i].arrivaltime/60))%24;
            dm=(m+trains[i].arrivaltime%60)%60;
            let arrivalTime = getTime(dh, dm);
            trainDetails.push({
                trainid: trains[i].trainid,
                departure: trains[i].dept,
                arrival: trains[i].arr,
                departureDate: trains[i].departuredate,
                arrivalDate: trains[i].arrivaldate,
                durationHours: Math.floor(trains[i].duration/60),
                durationMinutes: trains[i].duration%60,
                price: trains[i].duration*pricePerMinute,
                trainName: currentTrain.trainname,
                runsOn: currentTrain.runson,
                remainingSeats: remainingSeats.min,
                arrivalTime: arrivalTime,
                departureTime: departureTime
            })
        }
        console.log(trainDetails);

        res.json(trainDetails);
    } catch (err) {
        res.json(trainDetails);
    }

});


app.post("/getRoute", async(req, res) =>{
    let details = {};
    try {
        req=req.body;
        req.tID=parseInt(req.tID);   
        let route = await pool.query(
            "SELECT CURRENTSTATION, TIMEFROMSTART FROM ROUTES WHERE TRAINID=$1 AND ROUTEID IN (SELECT MIN(ROUTEID) FROM ROUTES) ORDER BY TIMEFROMSTART;",
            [req.tID]
        );
        let startSt = await pool.query(
            "SELECT CURRENTSTATION FROM ROUTES WHERE TRAINID=$1 AND TIMEFROMSTART IN (SELECT MIN(TIMEFROMSTART) FROM ROUTES);",
            [req.tID]
        );
        startSt=startSt.rows[0].currentstation;
        let endSt = await pool.query(
            "SELECT CURRENTSTATION FROM ROUTES WHERE TRAINID=$1 AND TIMEFROMSTART IN (SELECT MAX(TIMEFROMSTART) FROM ROUTES);",
            [req.tID]
        );
        endSt=endSt.rows[0].currentstation;
        let train = await pool.query(
            "SELECT * FROM TRAINS WHERE TRAINID=$1;",
            [req.tID]
        );
        train=train.rows[0];
        route=route.rows;
        // console.log(route);
        // console.log(train);
        // console.log(startSt);
        // console.log(endSt);
        details = {
            trainId: req.tID,
            trainName: train.trainname,
            startStation: startSt,
            destinationStation: endSt,
            runsOn: train.runson,
            stations: []
        }
        let h=parseInt((train.starttime).slice(0, 3)), m=parseInt((train.starttime).slice(3,5));
        for(let i=0;i<route.length;i++){
            let dh=(h+Math.floor(route[i].timefromstart/60))%24, dm=(m+route[i].timefromstart%60)%60;
            dh+=Math.floor((m+route[i].timefromstart%60)/60);
            let arrivalTime = getTime(dh, dm);
            m+=10;
            dh=(h+Math.floor(route[i].timefromstart/60))%24
            dm=(m+route[i].timefromstart%60)%60;
            dh+=Math.floor((m+route[i].timefromstart%60)/60);
            let departureTime = getTime(dh, dm);

            details.stations.push({
                stationName: route[i].currentstation,
                arrivalTime: arrivalTime,
                departureTime: departureTime
            })
        }
        res.json(details);
    } catch (err) {
        res.json(details);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});

