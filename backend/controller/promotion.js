

const pool = require("../config/db");




const insertPromotion = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const employeeid = req.body.EmployeeID;
        const roleid = req.body.RoleID;
        const departmentid = req.body.DprtID;
        const extrasalary = req.body.ExtraSalary;
        const approveby= req.body.ApproveBy;

        connection.query(`INSERT INTO promotionhistory (EmployeeID, RoleID, DprtID, ApproveBy, ExtraSalary) VALUES (?,?,?,?,?)`,
        [employeeid,roleid,departmentid,approveby,extrasalary]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`PROMOTED ${employeeid} to ${roleid} Of ${departmentid} with ${extrasalary}`);

    });
} 

module.exports = {insertPromotion};