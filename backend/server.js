require("dotenv").config();

const db = require("./config/db");

const express = require('express');
const mysql = require('mysql');


const app = express();
app.use(express.json());

//initial route
app.get("/", (req, res) => {
    res.json({ message: "API running" });
  });

db.connect((err) => {
    if (err) {
        console.log("Error", err);
    }
    console.log("Connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));


