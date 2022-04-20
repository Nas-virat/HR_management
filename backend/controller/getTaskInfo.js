


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

/*Not sure that it's working */
const addNewTask = () => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const taskdesc = req.body.TaskDesc;
        const superID = req.body.SupervisorId;
        const type = req.body.Type;
        const deadline = req.body.Deadline;

        connection.query(`INSERT INTO task (TaskDesc, SupervisorID,Type,Deadline) VALUES (?,?,?)`,
        [taskdesc,superID,type,deadline],
        (err,result) =>{
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log("Add New task");
    });
};






module.exports = getAllTaskInfo;