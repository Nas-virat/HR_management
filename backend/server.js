require("dotenv").config();


const express = require('express');
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');

const auth = require('./middleware/auth');

const { getAllDepartment,
        getDepartmentInfoByID,
        DepartmentMember,
        DepartmentHead,
        AddDepartment } = require('./controller/getDepartmentInfo.js');


const { getAllEmployee, 
        getEmployeeByID, 
        insertEmployee,
        updateEmployee,
        deleteEmployee,
        getEmployeePromotion } = require('./controller/getEmployeeInfo');

const { insertRole,
        AllRole } = require('./controller/getRoleInfo');

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

const { getPaymentByID, 
        getPaymentStatus,
        approvePayment} = require('./controller/payment');

const { companyInfo,
        mostLateEmployee,
        mostAbsentEmployee } = require('./controller/dashboard');

const { insertBonus } = require('./controller/bonus');

const { login } = require('./controller/loginsystem');



const app = express();
app.use(express.json());
app.use(cookieParser());

var corsOptions = {
  origin: "*",
  credentials: false,
  Headers: "x-access-token"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));

app.use("/image",express.static(path.join(__dirname, 'uploads')));


const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path.join(__dirname, 'uploads'));
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
app.get('/employee',auth,getAllEmployee);
app.get('/employee/:id', getEmployeeByID);
app.post('/insertEmployee', insertEmployee);
app.put('/updateemployee/:id', updateEmployee);
app.delete('/deleteemployee', deleteEmployee);
app.get('/employeepromotion/:id', getEmployeePromotion);

//Department
app.get('/department',auth, getAllDepartment);
app.get('/department/:id', getDepartmentInfoByID);
app.get('/departmentmember/:id',DepartmentMember);
app.get('/departmenthead/:id',DepartmentHead);
app.post('/adddepartment', AddDepartment);

//Role
app.post('/insertRole',insertRole);
app.get('/role',auth, AllRole);

//Task
app.get('/task',auth,getAllTaskInfo);
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

//bonus
app.post('/bonus', insertBonus)

//payment 
app.get('/payment/:id', getPaymentByID);
app.get('/paymentstatus', getPaymentStatus);
app.post('/approvepayment', approvePayment);

//dashboard
app.get('/companyinfo',auth,companyInfo);
app.get('/mostlateemployee',auth,mostLateEmployee);
app.get('/mostabsentemployee',auth, mostAbsentEmployee);


//upload image
app.post('/upload', upload.single('image'), (req, res) => {
  console.log("file Uploaded sucessfully");
  res.send(req.file);
});


app.post('/login', login);


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> console.log(`HRMS Server is running on port ${PORT}`));


