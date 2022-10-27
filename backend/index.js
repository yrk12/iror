const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./connect");
const { response } = require("express");
app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
    console.log("server has started on port 5000");
});

