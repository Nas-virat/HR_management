


const pool = require("../config/db");

const getAllTaskInfo = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        console.log("Select ALL Task");
        connection.query("SELECT * FROM task", (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
   });
};

const insertEmployee = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const EmployeeID = req.body.EmployeeID;
        const fname = req.body.fname;
        const lname = req.body.lname;

        console.log(`Insert Employee :${EmployeeID} ${fname} ${lname}`);
        connection.query("INSERT INTO task (EmployeeID, fname, lname) VALUES (?,?,?)" ,
        [EmployeeID,fname,lname]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
    });
}







module.exports = getAllTaskInfo;