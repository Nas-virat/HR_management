
const pool = require("../config/db");

const getAllEmployee = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        connection.query(`SELECT e.EmployeeID, e.fname, e.lname ,e.Image, r.RoleName, d.DprtName
                            FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                                p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                            INNER JOIN department d ON p.DprtID = d.DprtID 
                            INNER JOIN role r ON p.RoleID = r.RoleID
                            WHERE e.WorkStatus != 'Q'
                            ORDER BY e.EmployeeID ASC`, 
            (err, result) => {
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
        connection.query(`SELECT e.*, d.DprtName, r.RoleName
                            FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                            p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                            INNER JOIN department d ON p.DprtID = d.DprtID
                            INNER JOIN role r ON p.RoleID = r.RoleID
                            WHERE e.EmployeeID = ?`
        ,[req.params.id] , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`Select EmployeeID : ${req.params.id}`);
    });
}


const getEmployeePromotion = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        console.log("Select Promoted EmployeeID : " + req.params.id);
        connection.query(`SELECT p.Datetime, r.RoleName, d.DprtName
                            FROM promotionhistory p INNER JOIN role r ON p.RoleID = r.RoleID 
                                                    INNER JOIN department d ON p.DprtID = d.DprtID
                            WHERE p.EmployeeID = ?
                            ORDER BY p.Datetime DESC;`, 
        [req.params.id] , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
    });
}



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
        const DOB = req.body.DOB;
        const AccountNo = req.body.AccountNo;
        const BankRecive = req.body.BankRecive;
        const eduLevel = req.body.Edulevel;
        const institution = req.body.Institution;
        const major = req.body.Major;
        const yearGrads = req.body.YearGrads;
        const gpax = req.body.GPAX;
        const Password = req.body.Password;
        
        const Dprtid = req.body.DprtID;
        const Roleid = req.body.RoleID;
        const image = req.body.Image;


        connection.query(`INSERT INTO employee (fname, lname, Address, Email, Gender, DOB, AccountNo, BankRecive,
                                                EduLevel, Institution, Major, YearGrads, GPAX, Password,Image) 
                          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
                          `,
        [fname,lname,address,email,gender,DOB,AccountNo,BankRecive,eduLevel,institution,major,yearGrads,gpax,Password,image]
        , (err, result) => {
             if (err) {
                 console.log(err);
             }
             //res.send(result);
         });
        console.log(`Insert Employee : ${fname} ${lname}`);

        connection.query(`INSERT INTO promotionhistory (EmployeeID, DprtID, RoleID, ApproveBy, ExtraSalary) 
                            VALUES ((SELECT MAX(EmployeeID) FROM employee),?,?,1001,0)`,
        [Dprtid,Roleid]
        , (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`PROMOTE Employee : ${Dprtid} ${Roleid}`);
         
    });
} 


const updateEmployee = (req,res) =>{
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
        const AccountNo = req.body.AccountNo;
        const BankRecive = req.body.BankRecive;
        const Password = req.body.Password;
        const workstatus = req.body.WorkStatus;

        connection.query(
            `UPDATE employee SET fname = ?, 
                                 lname = ?,
                                 Address = ?,
                                 Email = ?,
                                 AccountNo = ?,
                                 BankRecive = ?,
                                 Password = ?,
                                 WorkStatus = ?
                WHERE EmployeeID = ?` ,
        [fname,lname,address,email,AccountNo,BankRecive,Password, workstatus,req.params.id]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`Update Employee :${req.params.id}`);
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

module.exports = {getAllEmployee, getEmployeeByID, insertEmployee, updateEmployee, deleteEmployee, getEmployeePromotion};