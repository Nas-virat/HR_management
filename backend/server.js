require("dotenv").config();


const express = require('express');

const { getAllEmployee, 
        getEmployeeByID, 
        insertEmployee } = require('./controller/getEmployeeInfo');

const app = express();
app.use(express.json());

//initial route
app.get("/", (req, res) => {
    res.json({ message: "API running" });
  });


//employee
app.get('/employee', getAllEmployee);
app.get('/employee/:id', getEmployeeByID);

app.post('/addemployee', insertEmployee);



const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> console.log(`HRMS Server is running on port ${PORT}`));


