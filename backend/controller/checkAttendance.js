

const pool = require("../config/db");


const checkAttendance = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const employeeid = req.body.EmployeeID;
        const status = req.body.Status;

        connection.query("INSERT INTO attendance (EmployeeID, Status) VALUES (?,?)" ,
        [employeeid, status]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`Check Attendance for ${employeeid} :  ${status}`);
    });
} 

const getAttendanceByID = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }

        connection.query(`SELECT EmployeeID, 
                            SUM(status = 'O') AS ontime, 
                            SUM(status = 'L') AS late, 
                            SUM(status = 'A') AS absent
                            FROM attendance
                            WHERE EmployeeID = ?` ,
        [req.params.id]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`Get Attendance information for ID: ${req.params.id}`);
    });
} 


module.exports = { checkAttendance, getAttendanceByID };