
const pool = require("../config/db");

const getAllEmployee = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        console.log("Select ALL Employee");
        connection.query("SELECT * FROM employee", (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
   });
};


const getEmployeeByID = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        console.log("Select EmployeeID : " + req.params.id);
        connection.query("SELECT * FROM employee WHERE EmployeeID = ?", [req.params.id] , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
    });
}

/*
const getEmployeeOnTask = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        console.log("Select EmployeeID : " + req.params.id);
        connection.query("SELECT * FROM employee WHERE employeeontask = ?", [req.params.id] , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
    });
}
*/

/*
const insertEmployee = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const fname = req.body.fname;
        const lname = req.body.lname;

        console.log("Insert Employee : "  );
        connection.query("INSERT INTO employee (fname, lname) VALUES (?,?)" ,
        ["Meow","Sean"]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
    });
} 
*/

module.exports = getAllEmployee;
module.exports = getEmployeeByID;
//module.exports = getEmployeeOnTask;
//module.exports = insertEmployee;