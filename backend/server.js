require("dotenv").config();


const express = require('express');

const getAllEmployee = require('./controller/getEmployeeInfo');
const getEmployeeByID = require('./controller/getEmployeeInfo');

const app = express();
app.use(express.json());

//initial route
app.get("/", (req, res) => {
    res.json({ message: "API running" });
  });


//employee
app.get('/employee', getAllEmployee);
app.get('/employee/:id', getEmployeeByID);
//app.post('/employee/add', insertEmployee);



const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> console.log(`HRMS Server is running on port ${PORT}`));


