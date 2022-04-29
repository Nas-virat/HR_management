require("dotenv").config();


const express = require('express');
const cors = require("cors");
const multer = require('multer');


const { getAllDepartment,
        getDepartmentInfoByID,
        DepartmentMember,
        DepartmentHead } = require('./controller/getDepartmentInfo.js');


const { getAllEmployee, 
        getEmployeeByID, 
        insertEmployee,
        updateEmployee,
        deleteEmployee,
        getEmployeePromotion } = require('./controller/getEmployeeInfo');

const { insertRole } = require('./controller/getRoleInfo');

const { getAllTaskInfo,
        getTaskInfoByID, 
        addNewTask,
        updateTaskStatus,
        TaskMember,
        TaskSupervisor,
        OTtask,
        EmployeeTask,
        addEmployeeToTask } = require('./controller/getTaskInfo');

const { checkAttendance,
        getAttendanceByID,
        lastAttendanceByID } = require('./controller/checkAttendance');


const { insertPromotion } = require('./controller/promotion');
const { insertDeduction } = require('./controller/deduction');
const { getPaymentByID } = require('./controller/payment');

const {companyInfo,
       mostLateEmployee} = require('./controller/dashboard');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/uploads', express.static('uploads'));


const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, __dirname);
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" +file.originalname);
  }
  });

  const upload = multer({storage});





//initial route
app.get("/", (req, res) => {
    res.json({ message: "API running" });
  });


//employee
app.get('/employee', getAllEmployee);
app.get('/employee/:id', getEmployeeByID);
app.post('/insertEmployee', insertEmployee);
app.put('/updateemployee/:id', updateEmployee);
app.delete('/deleteemployee', deleteEmployee);
app.get('/employeepromotion/:id', getEmployeePromotion);

//Department
app.get('/department', getAllDepartment);
app.get('/department/:id', getDepartmentInfoByID);
app.get('/departmentmember/:id',DepartmentMember);
app.get('/departmenthead/:id',DepartmentHead);

//Role
app.post('/insertRole',insertRole);

//Task
app.get('/task', getAllTaskInfo);
app.post('/taskadd', addNewTask);
app.get('/task/:id',getTaskInfoByID);
app.put('/updateTaskStatus',updateTaskStatus);
app.get('/taskmember/:id',TaskMember);
app.get('/tasksupervisor/:id',TaskSupervisor);
app.post('/ottask',OTtask);
app.get('/employeetask/:id', EmployeeTask);
app.post('/addemployeetotask',addEmployeeToTask);


//attendance
app.post('/attendance', checkAttendance);
app.get('/employeeattendance/:id', getAttendanceByID);
app.get('/lastattendance/:id', lastAttendanceByID);


//promotion
app.post('/promotion',insertPromotion);

//deduction
app.post('/deduction', insertDeduction)


//payment 
app.get('/payment/:id', getPaymentByID);


//dashboard
app.get('/companyinfo',companyInfo);
app.get('/mostlateemployee',mostLateEmployee);


//upload image
app.post('/upload', upload.single('image'), (req, res) => {
  console.log("file Uploaded sucessfully");
  res.send(req.file);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> console.log(`HRMS Server is running on port ${PORT}`));


