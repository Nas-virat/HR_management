

const pool = require("../config/db");

const getAllDepartment = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        console.log("Select ALL Department");
        connection.query(`SELECT d.DprtID, d.DprtName, COUNT(*) AS TotalMembers
                            FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                                p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                            INNER JOIN department d ON p.DprtID = d.DprtID
                            WHERE e.WorkStatus != 'Q'
                            GROUP BY d.DprtID`, 
            (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
   });
};


const getDepartmentInfoByID = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        connection.query("SELECT * FROM department WHERE DprtID = ?",
        [req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`Select Department info by ID ${req.params.id}`);
   });
};


const DepartmentMember = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(`SELECT e.EmployeeID, e.fname, e.lname, e.Image, r.RoleName, d.DprtName
                            FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                                p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                            INNER JOIN department d ON p.DprtID = d.DprtID 
                            INNER JOIN role r ON p.RoleID = r.RoleID
                            WHERE d.DprtID = ? AND e.WorkStatus != 'Q'`,
        [req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`DEPARTMENT MEMBER of DEPARTMENT ID: ${req.params.id}`);
   });
};


const AddDepartment = (req,res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        const {DprtName, DprtDesc, HeadDeptID} = req.body;
        
        connection.query(`INSERT INTO department (DprtName, DprtDesc, HeadDeptID) VALUES (?,?,?)`,
        [DprtName, DprtDesc, HeadDeptID], (err, result) => {
            //connection.release();
            if (err) {
                console.log(err);
            }
            //res.send(result);
        });
        connection.query(`SELECT r.RoleID FROM role r 
                            RIGHT JOIN promotionhistory p ON p.RoleID = r.RoleID WHERE p.EmployeeID = ? AND
                            p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = ?)`,
        [HeadDeptID, HeadDeptID], (err, result) => {
            console.log(result[0].RoleID);

            const RoleID = result[0].RoleID;
            connection.query(`INSERT INTO promotionhistory (EmployeeID, DprtID,RoleID,ApproveBy, ExtraSalary) 
                                VALUES (?, 
                                (SELECT MAX(DprtID) FROM department),
                                ?,
                                1001, 0)`,
            [HeadDeptID,RoleID], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`ADD DEPARTMENT`);
        });
        
   });
}


const DepartmentHead = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(`SELECT e.EmployeeID, e.fname, e.lname, e.Image, r.RoleName, d.DprtName
                            FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                            p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                            INNER JOIN department d ON p.DprtID = d.DprtID 
                            INNER JOIN role r ON p.RoleID = r.RoleID
                            WHERE e.EmployeeID = (SELECT HeadDeptID FROM department WHERE DprtID = ?) AND e.WorkStatus != 'Q'`,
        [req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`DEPARTMENT HEAD of DEPARTMENT ID: ${req.params.id}`);
   });
};

module.exports = {getAllDepartment, getDepartmentInfoByID, DepartmentMember, DepartmentHead, AddDepartment};