const pool = require("../config/db");


const companyInfo = (req, res) => { 
    
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(` SELECT 
                            (SELECT COUNT(*) FROM employee WHERE WorkStatus != 'Q') AS TotalEmployee, 
                            (SELECT COUNT(*) FROM department) AS TotalDepartment, 
                            (SELECT COUNT(*) FROM task WHERE status != 'F') AS TotalTask
                            FROM employee LIMIT 1`,
        (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`SHOW COMPANY INFORMATION`);
   });
}

const mostLateEmployee = (req, res) => { 
    
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(`SELECT a.EmployeeID, e.lname, e.fname, e.Image, COUNT(*) AS TotalLate FROM attendance a 
                            INNER JOIN employee e ON e.EmployeeID = a.EmployeeID 
                            WHERE a.Status = 'L'
                            GROUP BY a.EmployeeID
                            ORDER BY TotalLate
                            DESC LIMIT 8`,
        (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`list of Late Employee`);
   });
}

const mostAbsentEmployee = (req, res) => { 
    
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(`SELECT a.EmployeeID, e.lname, e.fname, e.Image, COUNT(*) AS TotalAbsent FROM attendance a 
                            INNER JOIN employee e ON e.EmployeeID = a.EmployeeID 
                            WHERE a.Status = 'A'
                            GROUP BY a.EmployeeID
                            ORDER BY TotalAbsent
                            DESC LIMIT 8`,
        (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`list of Absent Employee`);
   });
}
    

module.exports = { companyInfo, mostLateEmployee, mostAbsentEmployee};