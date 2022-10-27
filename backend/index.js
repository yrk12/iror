const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./connect")
app.use(cors());
app.use(express.json());

app.post("/register", async(req, res) =>{
    try {
        req=req.body;
        console.log(req);   
        console.log(req.password);
        const newUser = await pool.query(
            "INSERT INTO Users (FirstName, LastName, Email, ContactNo, Password) VALUES ($1, $2, $3, $4, $5)",
            [req.fname, req.lname, req.email, req.contactNo, req.Password]
        );
        res.json({created: true});
    } catch (err) {
        res.json({created: false});
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000");
});

