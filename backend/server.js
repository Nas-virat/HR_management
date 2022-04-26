require("dotenv").config();


const express = require('express');
const cors = require("cors");


const { getAllDepartment,
        getDepartmentInfoByID,
        DepartmentMember,
        DepartmentHead } = require('./controller/getDepartmentInfo.js');


const { getAllEmployee, 
        getEmployeeByID, 
        insertEmployee,
        updateEmployee,
        deleteEmployee } = require('./controller/getEmployeeInfo');

const { insertRole } = require('./controller/getRoleInfo');

const { getAllTaskInfo,
        getTaskInfoByID, 
        updateTaskStatus,
        TaskMember,
        TaskSupervisor } = require('./controller/getTaskInfo');

const { checkAttendance } = require('./controller/checkAttendance');


const { insertPromotion } = require('./controller/promotion');

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
app.post('/insertEmployee/:id', insertEmployee);
app.put('/updateemployee/:id', updateEmployee);
app.delete('/deleteemployee', deleteEmployee);

//Department
app.get('/department', getAllDepartment);
app.get('/department/:id', getDepartmentInfoByID);
app.get('/departmentmember/:id',DepartmentMember);
app.get('/departmenthead/:id',DepartmentHead);

//Role
app.post('/insertRole',insertRole);

//Task
app.get('/task', getAllTaskInfo);
app.get('/task/:id',getTaskInfoByID);
app.put('/updateTaskStatus',updateTaskStatus);
app.get('/taskmember/:id',TaskMember);
app.get('/tasksupervisor/:id',TaskSupervisor);

//attendance
app.post('/attendance', checkAttendance);


//promotion
app.post('/promotion',insertPromotion);


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> console.log(`HRMS Server is running on port ${PORT}`));


