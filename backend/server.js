require("dotenv").config();


const express = require('express');
const cors = require("cors");

const { getAllEmployee, 
        getEmployeeByID, 
        insertEmployee,
        updateEmployee,
        deleteEmployee } = require('./controller/getEmployeeInfo');

const { insertRole } = require('./controller/getRoleInfo');

const { getAllTaskInfo,
        getTaskInfoByID, 
        updateTaskStatus } = require('./controller/getTaskInfo');

const app = express();
app.use(express.json());

app.use(cors());

//initial route
app.get("/", (req, res) => {
    res.json({ message: "API running" });
  });


//employee
app.get('/employee', getAllEmployee);
app.get('/employee/:id', getEmployeeByID);
app.post('/insertEmployee', insertEmployee);
app.put('/updateemployee', updateEmployee);
app.delete('/deleteemployee', deleteEmployee);



//Role
app.post('/insertRole',insertRole);

//Task
app.get('/task', getAllTaskInfo);
app.get('/task/:id',getTaskInfoByID);
app.put('/updateTaskStatus',updateTaskStatus);


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> console.log(`HRMS Server is running on port ${PORT}`));


