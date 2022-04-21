


const pool = require("../config/db");

const getAllTaskInfo = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        connection.query("SELECT * FROM task", (err, result) => {
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
const addNewTask = () => {
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
        
        connection.query(`INSERT INTO task (taskdesc, SupervisorID, Type, deadline) VALUES (?,?,?,?)`,
        [taskdesc,superID,type,deadline],
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








module.exports = {getAllTaskInfo, 
                  addNewTask, 
                  getTaskInfoByID,
                  updateTaskStatus};