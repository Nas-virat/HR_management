
const pool = require("../config/db");

const getAllEmployee = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        connection.query("SELECT * FROM employee", (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            //console.log("result is ",result);
            res.send(result);
        });
        console.log("Select ALL Employee");
   });
};


const getEmployeeByID = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        connection.query("SELECT * FROM employee WHERE EmployeeID = ?", [req.params.id] , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`Select EmployeeID : ${req.params.id}`);
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
        const fname = req.body.fname;
        const lname = req.body.lname;
        const address = req.body.Address;
        const email = req.body.Email;
        const gender = req.body.Gender;

        connection.query("INSERT INTO employee (fname, lname,Address,Email,Gender) VALUES (?,?,?,?,?)" ,
        [fname,lname,address,email,gender]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`Insert Employee : ${fname} ${lname}`);
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

        connection.query("UPDATE employee SET fname = 'TunwaAA' WHERE EmployeeID = ?" ,
        [EmployeeID]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`Update Employee :${EmployeeID}`);
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

        connection.query("DELETE FROM employee WHERE EmployeeID = ?" ,
        [EmployeeID]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
        console.log(`Delete Employee :${EmployeeID}`);
    });
};

module.exports = {getAllEmployee, getEmployeeByID, insertEmployee, updateEmployee, deleteEmployee};