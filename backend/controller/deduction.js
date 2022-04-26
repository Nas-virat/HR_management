
const pool = require("../config/db");




const insertDeduction = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const employeeid = req.body.EmployeeID;
        const typededuction = req.body.TypeDeduction;
        const description = req.body.Description;
        const amount = req.body.Amount;
        const adminid = req.body.AdminID;

        connection.query(
            `INSERT INTO deduction (EmployeeID, TypeDeduction, Description, Amount, AdminID) 
             VALUES (?,?,?,?,?)`,
        [employeeid, typededuction, description, amount, adminid]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`DEDUCTED ${employeeid} :  ${typededuction} with ${amount}`);

    });
} 

module.exports = { insertDeduction };

