

const pool = require("../config/db");

const insertBonus = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const employeeid = req.body.EmployeeID;
        const amount = req.body.Amount;
        const adminid = req.body.AdminID;

        connection.query(
            `INSERT INTO bonus (EmployeeID, Amount, AdminID) 
             VALUES (?,?,?)`,
        [employeeid, amount, adminid]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
         console.log(`BONUS ${employeeid} : AMOUNT ${amount}`);

    });
} 

module.exports = { insertBonus };

