


const pool = require("../config/db");

const getAllTaskInfo = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        connection.query(`SELECT t.taskID, t.taskdesc, t.SupervisorID, t.status, COUNT(*) AS TotalMembers 
                            FROM task t INNER JOIN employeeontask et ON t.TaskID = et.TaskID
                            GROUP BY t.TaskID ORDER BY t.TaskID DESC`, 
            (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log("Select ALL Task");
   });
};

const getTaskInfoByID = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        connection.query("SELECT * FROM task WHERE TaskID = ?",
        [req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`Select Task info by ID ${req.params.id}`);
   });
};


/*Not sure that it's working */
const addNewTask = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        
        const taskdesc = req.body.taskdesc;
        const superID = req.body.SupervisorID;
        const type = req.body.Type;
        const deadline = req.body.deadline;
        const employeeid = req.body.EmployeeID;
        
        connection.query(`INSERT INTO task (taskdesc, SupervisorID, Type, deadline) VALUES (?,?,?,?)`,
        [taskdesc,superID,type,deadline],
        (err,result) => {
            if (err) {
                console.log(err);
            }
            //res.send(result);
        });

        connection.query(
            `INSERT INTO employeeontask (TaskID, EmployeeID) 
             VALUES ((SELECT MAX(TaskID) FROM task), ?)`,
        [employeeid],
        (err,result) => {
            if (err) {
                console.log(err);
            }
            //res.send(result);
        });

        connection.query(
            `INSERT INTO employeeontask (TaskID, EmployeeID) 
             VALUES ((SELECT MAX(TaskID) FROM task), ?)`,
        [superID],
        (err,result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        
        console.log("Add New task");
    });
};


const updateTaskStatus = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const taskID = req.body.TaskID;
        const status = req.body.status;

        connection.query("UPDATE task SET status = ? WHERE TaskID = ? ",
        [status, taskID], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`UPDATE Task Status ${taskID} data status: ${status}`);
   });
};

const TaskMember = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(`SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName
                          FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                          p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                          INNER JOIN department d ON p.DprtID = d.DprtID 
                          INNER JOIN role r ON p.RoleID = r.RoleID
                          INNER JOIN employeeontask et ON e.EmployeeID = et.EmployeeID
                          WHERE et.taskID = ?`,
        [req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`TASK MEMBER of TASK ID: ${req.params.id}`);
   });
};

/** query is wrong */
const TaskSupervisor = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(`SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName
                            FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                                p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                            INNER JOIN department d ON p.DprtID = d.DprtID 
                            INNER JOIN role r ON p.RoleID = r.RoleID
                            INNER JOIN employeeontask et ON e.EmployeeID = et.EmployeeID
                            INNER JOIN task t ON et.TaskID = t.TaskID
                            WHERE et.taskID = ? AND e.EmployeeID = t.SupervisorID`,
        [req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`SUPERVISOR of TASK ID: ${req.params.id}`);
   });
};


const OTtask = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const taskid = req.body.TaskID;
        const sTime = req.body.StartTime;
        const eTime = req.body.EndTime;
        const employeeID = req.body.EmployeeID;
        const supervisorID = req.body.SupervisorID; 
        
        connection.query(`INSERT INTO ot (EmployeeID,TaskID,SupervisorID,start_time,end_time) VALUES (?,?,?,?,?)`,
        [employeeID,taskid,supervisorID,sTime,eTime],
        (err,result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log("Add New OT task");
    });
};




module.exports = { getAllTaskInfo, 
                   addNewTask, 
                   getTaskInfoByID,
                   updateTaskStatus,
                   TaskMember,
                   TaskSupervisor,
                   OTtask
                };