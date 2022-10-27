const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./connect")
app.use(cors());
app.use(express.json());

app.get("/todos", async(req, res) =>{
    try {
        const obj=await pool.query("SELECT * FROM TODO");
        console.log(1);
        res.json(obj);
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000");
});

