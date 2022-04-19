
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
            console.log("result is ",result);
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
        console.log(`Select EmployeeID : ${req.params.id}`);
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
        connection.query("INSERT INTO employee (EmployeeID, fname, lname) VALUES (?,?,?)" ,
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


const updateEmployee = (req,res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const EmployeeID = req.body.EmployeeID;

        console.log(`Update Employee :${EmployeeID}`);
        connection.query("UPDATE employee SET fname = 'TunwaAA' WHERE EmployeeID = ?" ,
        [EmployeeID]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
    });
};


const deleteEmployee = (req,res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const EmployeeID = req.body.EmployeeID;

        console.log(`Delete Employee :${EmployeeID}`);
        connection.query("DELETE FROM employee WHERE EmployeeID = ?" ,
        [EmployeeID]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
    });
};

module.exports = {getAllEmployee, getEmployeeByID, insertEmployee, updateEmployee, deleteEmployee};