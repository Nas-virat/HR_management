

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




module.exports = { checkAttendance };