require("dotenv").config();

const db = require("./config/db");

const express = require('express');

const getAllEmployee = require('./controller/getEmployeeInfo');

const app = express();
app.use(express.json());

//initial route
app.get("/", (req, res) => {
    res.json({ message: "API running" });
  });

app.get('/employee',getAllEmployee);


const PORT = process.env.PORT || 6000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));


