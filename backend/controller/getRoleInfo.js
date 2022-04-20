const pool = require("../config/db");

const insertRole = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const roleName = req.body.RoleName;
        const roleDesc = req.body.RoleDesc;
        const basesalary = req.body.BaseSalary;
        const otrate = req.body.OTRate;

        console.log(`Insert New Role : ${roleName}`);
        connection.query(`INSERT INTO role (RoleName,RoleDesc,BaseSalary,OTRate) VALUES (?,?,?,?)`,
        [roleName,roleDesc,basesalary,otrate]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });

    });
} 

module.exports = {insertRole};